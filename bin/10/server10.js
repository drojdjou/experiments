var io = require('socket.io').listen(7001, { log: false });

var logReader;

io.sockets.on('connection', function (socket) {

	//console.log("New client");
	if(logReader) logReader.emit("new", {});

	socket.on('reader', function (data) {
		//console.log("Reader registered!");
		logReader = socket;

		socket.on('disconnect', function () {
			//console.log("Reader lost!");
			logReader = null;
		});
	});

    socket.on('log', function (data) {
    	//console.log("Log", data);
    	if(logReader) logReader.emit("log", data);
    });

    socket.on('warn', function (data) {
    	//console.log("Warn", data);
    	if(logReader) logReader.emit("warn", data);
    });

    socket.on('error', function (data) {
    	//console.log("Error", data);
    	if(logReader) logReader.emit("error", data);
    });
});