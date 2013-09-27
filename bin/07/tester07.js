var io = require('socket.io-client');

var serverUrl = 'http://ec2-54-218-0-72.us-west-2.compute.amazonaws.com:8123';

function start() {
	console.log("Start");

	var socket = io.connect(serverUrl);

	socket.on('login', function (data) {
		setTimeout(end, 5000, socket);
	});
}

function end(s) {
	console.log("End");

	s.disconnect();
}

for(var i = 0; i < 120; i++) {
	setTimeout(start, i * 10);
}
