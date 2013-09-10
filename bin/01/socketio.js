var io = require('socket.io');
var net = require('net');

var nst;
var led = "0";

io.sockets.on('connection', function (socket) {

    socket.on('interact', function (data) {
        socket.emit('interact', data.message);
        socket.broadcast.emit('interact', data.message);

        if(led == "0") led = "1";
        else led = "0";

        if(nst) nst.write(led);
    });
});

ns = net.createServer(function (s) {

    nst = s;

    console.log("new client");

    s.on('end', function() {
        nst = null;
    })

});

io.listen(8123);
ns.listen(1337);
