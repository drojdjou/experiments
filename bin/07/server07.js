var io = require('socket.io').listen(8123, { log: false });

var nst;
var led = "0";

var colors = [
	["red", "#ff0000"], 
	["green", "#00aa00"], 
	["blue", "#add8e6"], 
	["orange", "#ff8000"], 
	["grey", "#808080"], 
	["purple", "#993399"], 
	["pink", "#ffc0cb"], 
	["dark-blue", "#6666FF"],
	["yellow", "#ffcc00"],
	["brown", "#884400"]
];

var userId = 1;
var clients = [];
var wordsGuessed = [];

var colorIndex = 0;

function removeUser(data, socket) {
	var cl = clients.length;
	for(var i = 0; i < cl; i++) {
		if(clients[i].id == data.id) {
			clients.splice(i, 1);
			console.log('> logout user ', data.id, ' | left: ' + clients.length);
			socket.broadcast.emit('logout', data);
			break;
		}
	}
}

io.sockets.on('connection', function (socket) {

	var id = userId++;
	var name = colors[colorIndex][0];
	var hex = colors[colorIndex][1];
	var n = { id: id, name: name, hex: hex };

	clients.push(n);

    socket.broadcast.emit('new-client', n, " total: ", clients.length);    
    socket.emit('login', { user: n, clients: clients, wordsGuessed: wordsGuessed });

    console.log('> login ', n);

    colorIndex++;
    if(colorIndex >= colors.length) colorIndex = 0;

    // socket.on('logout', function (data) {
    // 	removeUser(n);
    // });

    socket.on('word-sel', function (data) {
    	socket.broadcast.emit('word-sel', data);
    });

    socket.on('word-desel', function (data) {
    	socket.broadcast.emit('word-desel', data);
    });

    socket.on('word-guess', function (data) {
    	socket.broadcast.emit('word-guess', data);
    	wordsGuessed.push(data);
    });

    socket.on('disconnect', function () {
		removeUser(n, socket);
	});
});

console.log("Server ready on port 8123");