const db = require('../../config/dbConnection')

module.exports.saveNewRole = async function(req,res) {
    const { role } = req.body
    try {
        const checkQuery = 'SELECT * FROM role_type WHERE role = ?';
        const insertQuery = 'INSERT INTO role_type SET ?';
        await db.query(checkQuery, [role], (err, results) => {
            if(err){
                res.status(400).send({error: 'Server error'})
                console.error(err);
                return
            }
            if(results.length > 0) {
                res.status(400).send({ error: 'Role already exists!'})
            } else {
                db.query(insertQuery, {role: role}, (err) => {
                    if(err) {
                      res.status(400).send({ error: 'Server error' });
                      console.error(err);
                      return;
                    }
                    res.status(200).send('Upload success');
                })
            }
        })
    } catch (error) {
      res.status(400).send({error: 'Server error'})
      console.error(error)
    }
}

module.exports.getRoles = async function(req, res) {
    try {
        const query = 'SELECT * FROM role_type'
        await db.query(query, async (err, results) => {
            if(err) throw err;
            res.json(results)
        })
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }
}

module.exports.updateRole = async function(req, res) {
    const { id, role } = req.body;
    try {
        db.query('UPDATE role_type SET role = ? WHERE id = ?', [role, id], (err) => {
            if(err) throw err;
            res.status(200).send('Role has been updated')
        })
    } catch(error) {
        console.error(error)
    }
}

module.exports.deleteRole = async function(req, res) {
    const { id } = req.query;
    if (!id) {
        return res.status(400).send('ID is required');
    }
    try {
        const query = 'DELETE FROM role_type WHERE id = ?';       
        const result = await new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        if (result.affectedRows === 0) {
            return res.status(404).send('Role not found');
        }
        res.status(200).send('Role Deletion Complete');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};


module.exports.AllClientListData = async function (req, res) {
    const query = `SELECT * FROM client_user`;
    await db.query(query, (err, results) => {
      if(err) {
        console.error('Error executing the query', err.stack);
        return;
      }
      res.status(200).send(results)
    })
}

module.exports.ReplyGuestChat = async function(req, res) {
    try {
      const query = `
        SELECT t1.*, 
               IF(MAX(t1.unread) = 1, 1, 0) AS unread,
               (SELECT COUNT(*) 
                FROM guest_messages AS t2 
                WHERE t2.room = t1.room 
                  AND t2.unread = 1 
                  AND t2.author = t2.room) AS unread_count
        FROM guest_messages AS t1
        INNER JOIN (
            SELECT room, MAX(id) AS max_id
            FROM guest_messages
            GROUP BY room
        ) AS t2 ON t1.id = t2.max_id
        GROUP BY t1.room
        ORDER BY t1.time DESC;
      `;
  
      await db.query(query, (err, results) => {
        if (err) {
          console.error('Error executing the query', err.stack);
          res.status(500).send('Error executing the query');
          return;
        }
        res.status(200).send(results);
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal server error');
    }
}

module.exports.ReadMessage = async function(req, res) {
    try {
      const { room } = req.body;
      const updateQuery = `
        UPDATE guest_messages
        SET unread = 0
        WHERE room = ?;
      `;
      await new Promise((resolve, reject) => {
        db.query(updateQuery, [room], (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
      console.log("Unread messages marked as read.");
      res.send("Unread messages marked as read.");
    } catch (err) {
      console.error("Error marking messages as read:", err);
      res.status(500).send("Error marking messages as read");
    }
}