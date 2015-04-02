var http = require('http');

var targetUrl = process.argv[2];

var data = "";

http.get(targetUrl, function(response) {

	response.setEncoding('utf-8');

	response.on('data', function(buffer) {
		data += buffer;
		});

	response.on('end', function(buffer) {
		console.log(data.length);
		console.log(data);
		});
	});
