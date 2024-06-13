const db = require('../../config/dbConnection');
module.exports.ReplyAdminChat = async function(req, res) {
    try {
      const query = `
        SELECT t1.*, 
               IF(MAX(t1.unread) = 1, 1, 0) AS unread,
               (SELECT COUNT(*) 
                FROM guest_messages AS t2 
                WHERE t2.room = t1.room 
                  AND t2.unread = 1 
                  AND t2.author != t2.room) AS unread_count
        FROM guest_messages AS t1
        INNER JOIN (
            SELECT room, MAX(id) AS max_id
            FROM guest_messages
            GROUP BY room
        ) AS t2 ON t1.id = t2.max_id
        GROUP BY t1.room
        ORDER BY t1.time;
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


module.exports.ReadAdminMessage = async function(req, res) {
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