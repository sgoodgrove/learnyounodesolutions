var http = require('http');
var map = require('through2-map');

var listenPort = process.argv[2];

var server = http.createServer();

server.on('request', function(message, response) {
	if (message.method != "POST") {
		response.statusCode = 500;
		response.end();
		}
	else {
		message.pipe(map(function(chunk) {return chunk.toString().toUpperCase();})).pipe(response, {end: true});
		}
	});

server.listen(listenPort);
