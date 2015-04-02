var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var listenPort = process.argv[2];

var server = http.createServer(function(request, response) {
	});

server.on('request', function(message, response) {
	console.log(message.method);
	if (message.method != "POST") {
		repsonse.statusCode = 500;
		response.end();
		}
	else {
		message.pipe(map(function(chunk) {return chunk.toString().toUpperCase();})).pipe(response, {end: true});
		}
	});

server.listen(listenPort);
