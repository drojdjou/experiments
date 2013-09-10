var net = require('net');

var led = "0";

setInterval(function () {
    if(led == "0") led = "1";
    else led = "0";
}, 1000);

var server = net.createServer(function (socket) {
    var d = setInterval(function () {
            socket.write(led);
    }, 1000);

    console.log("new client");

    socket.on('end', function() {
        console.log("client disconnected");
        clearInterval(d);
    })

});

server.listen(1337);
