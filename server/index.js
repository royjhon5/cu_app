const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const http = require('http').Server(app);
const socketServer = require('socket.io')(http, {
    cors: {
        origin: [
            "http://localhost:3000",
        ]
    }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('user_profile_picture'))
app.use(cookieParser()); 
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204
}));
require('./routes/routerManager')(app);
module.exports = socketServer;
http.listen(8000, "127.0.0.1");
