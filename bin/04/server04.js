var io = require('socket.io').listen(8123);

io.sockets.on('connection', function (socket) {
    console.log("New Websocket client connected")
    socket.on('interact', function (data) {
        if(nst) nst.write(data.x + ":" + data.y);
    });
});


var net = require('net');

ns = net.createServer(function (s) {
    console.log("New TCP client connected");
    nst = s;

    s.on('end', function() {
        nst = null;
    })
});

ns.listen(1337);