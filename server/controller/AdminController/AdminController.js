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
    const { id } = req.body;
    try {
        const query = 'DELETE FROM role_type WHERE id = ?'
        await db.query(query, [id], async (err) => {
            if(err) {
                res.status(400).send('Deletion failed')
            }
            res.status(200).send('Role Deletion Complete')
        })
    } catch(error) {
        console.error(error)
    }
}