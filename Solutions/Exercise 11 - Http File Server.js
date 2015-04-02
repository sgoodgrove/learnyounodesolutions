var fs = require('fs');
var http = require('http');

var listenPort = process.argv[2];
var fileToServe = process.argv[3];

var server = http.createServer(function(request, response) {
	var inputStream = fs.createReadStream(fileToServe);
	inputStream.pipe(response, {end: true});
	});

server.listen(listenPort);
