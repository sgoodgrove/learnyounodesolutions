var net = require('net');

function zeroPad(n, zeroPadding) {
	if (n.toString().length < zeroPadding)
		return zeroPad('0' + n.toString(), zeroPadding);
	else
		return n.toString();
	}

function getTimeString(date) {
	return zeroPad(date.getFullYear(), 4) + "-" +
		zeroPad(date.getMonth() + 1, 2) + "-" +
		zeroPad(date.getDate(), 2) + " " +
		zeroPad(date.getHours(), 2) + ":" +
		zeroPad(date.getMinutes(), 2);
	}

var server = net.createServer(function(socket) {
		var dateString = getTimeString(new Date()) + "\n";
		socket.end(dateString);
	});

var listenPort = process.argv[2];
server.listen(listenPort);
