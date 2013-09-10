var io = require('socket.io').listen(8123);

io.sockets.on('connection', function (socket) {

    socket.on('interact', function (data) {
        socket.broadcast.emit('interact', data.message);
    });
});
