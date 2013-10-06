var io = require('socket.io').listen(7000, { log: false });

io.sockets.on('connection', function (socket) {

	console.log("Client connected.", new Date().getTime());

    socket.emit("hello", "hello");

    socket.on('move', function (data) {
        	socket.broadcast.emit("move", data);
    });
});