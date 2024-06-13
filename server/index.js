const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const http = require('http').Server(app);
const db = require('./config/dbConnection')
const socketServer = require('socket.io')(http, {
    cors: {
        origin: [
            "http://localhost:3000",
            "http://localhost:3100",
        ]
    }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('user_profile_picture'))
app.use(cookieParser()); 
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ["http://localhost:3000", "http://localhost:3100"];
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204
}));
require('./routes/routerManager')(app);
socketServer.on('connection', (socket) => {

    socket.on('join_room', (room) => {
        socket.join(room);
        db.query('SELECT * FROM guest_messages WHERE room = ?', [room], (err, results) => {
          if (err) throw err;
          socket.emit('load_messages', results);
        });
    });

    socket.on("send_message", (data) => {
        const { room, author, message, time } = data;
        db.query('INSERT INTO guest_messages (room, author, message, time) VALUES (?, ?, ?, ?)',
        [room, author, message, time], (err, result) => {
            if (err) throw err;
            socket.to(room).emit("receive_message", data);
        }); 
    });

    socket.on('triggerOpenGuestTicken', () => {
        socketServer.emit('openGuestTicket');
    })

    socket.on('triggerGuestNotification', () => {
        socketServer.emit('GuestNotification');
    })

    socket.on('triggerNotifyGuest', () => {
        socketServer.emit('playSoundNotification');
    })

    socket.on('SubmitNotif', () => {
        socketServer.emit('notifications');
    })

    socket.on('ShowNotif', () => {
        socketServer.emit('containerNotif');
    })

    socket.on('playNotifSound', () => {
        socketServer.emit('NotifSound');
    })

    socket.on('disconnect', () => {
        socket.disconnect()
    });
})

http.listen(8000, "127.0.0.1");
