
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
const PORT = 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.get('/', (req, res) => {
  res.send('This is my serverless server')
});

socketServer.on('connection', (socket) => {

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

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
module.exports = app