const socketServer = require('../index');

socketServer.on('connection', (socket) => {

    socket.on('changeprofile', (data) => {
        socket.emit('profilechanged', data);
    })

    socket.on('disconnect', () => {
        socket.disconnect()
    });
})