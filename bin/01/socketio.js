var io = require('socket.io').listen(8123);

io.sockets.on('connection', function (socket) {

    socket.on('touch', function (data) {
        console.log("- touch: " + data.message);
        socket.emit(data.message);
    });
});
