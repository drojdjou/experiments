var io = require('socket.io').listen(7001, { log: false });

var logReaders = [];

io.sockets.on('connection', function (socket) {

	//console.log("New client");
	// if(logReader) logReader.emit("new", {});

	socket.on('reader', function (data) {
		//console.log("Reader registered!");
		logReaders.push(socket);

		socket.on('disconnect', function () {
			//console.log("Reader lost!");
			logReaders.splice(logReaders.indexOf(socket), 1);
		});
	});

    socket.on('log', function (data) {
    	//console.log("Log", data);
    	for(var i = 0; i < logReaders.length; i++) logReaders[i].emit("log", data);
    });

    socket.on('warn', function (data) {
    	//console.log("Warn", data);
    	for(var i = 0; i < logReaders.length; i++) logReaders[i].emit("warn", data);
    });

    socket.on('error', function (data) {
    	//console.log("Error", data);
    	for(var i = 0; i < logReaders.length; i++) logReaders[i].emit("error", data);
    });
});