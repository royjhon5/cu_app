const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const http = require('http').Server(app);
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

    console.log(`User Connected: ${socket.id}`);
    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(data)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
        console.log(data)
    });

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
