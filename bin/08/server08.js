var io = require('socket.io').listen(7000, { log: true });

io.sockets.on('connection', function (socket) {

	console.log("Client connected");

    socket.emit("hello", "hello");

    socket.on('move', function (data) {
        	socket.broadcast.emit("move", data);
    });
});