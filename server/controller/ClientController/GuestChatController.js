const db = require('../../config/dbConnection');


module.exports.GenerateNewChat = async function(req, res) {
    const { guest_name, date_time } = req.body;
    try { 
        const insertQuery = 'INSERT INTO guest_room SET ?';
        await db.query(insertQuery, {guest_name: guest_name, date_time: date_time }, (err) => {
            if(err) {
              res.status(400).send({ error: 'Server error' });
              console.error(err);
              return;
            }
            res.status(200).send('New chat created!');
        })
    } catch(error) {
        res.status(400).send({error: 'Server error'})
        console.error(error)
    }
}

module.exports.UserSendMessage = async function(req, res) {
    const { guest_room_id, messages, datetime_created } = req.body;
    try {
        const insertQuery = 'INSERT INTO guest_messages SET ?';
        await db.query(insertQuery, {
            guest_room_id: guest_room_id, 
            messages: messages, 
            datetime_created: datetime_created 
        }, (err) => {
            if(err) {
              res.status(400).send({ error: 'Server error' });
              console.error(err);
              return;
            }
            res.status(200).send('Message sent');
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports.MessageList = async function(req, res) {
    try {
        const joinQuery = `SELECT guest_messages.*, guest_room.* 
                           FROM guest_messages
                           INNER JOIN guest_room on guest_messages.guest_room_id = guest_room.guest_name`
        await db.query(joinQuery, (err, results) => {
            if(err) {
                console.error('Error executing the query server lost.', err.stack);
                return;
            }
            res.status(200).send(results)
        })
    } catch(error) {
        console.error(error)
    }
}