var io = require('socket.io').listen(8123);

var nst;
var led = "0";

io.sockets.on('connection', function (socket) {

    socket.on('slide', function (data) {
        socket.broadcast.emit('slide', data);
    });
});