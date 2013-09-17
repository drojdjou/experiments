var io = require('socket.io').listen(8123);


io.sockets.on('connection', function (socket) {
    socket.on('interact', function (data) {
        console.log(data.x, data.y);
    });
});


/*
var net = require('net');

ns = net.createServer(function (s) {

    nst = s;

    console.log("new client");

    s.on('end', function() {
        nst = null;
    })

});

ns.listen(1337);
*/