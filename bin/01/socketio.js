var io = require('socket.io').listen(8123);

console.log("Server started on 8123");

io.sockets.on('connection', function (socket) {

    console.log("Incoming connection");

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
