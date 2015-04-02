var http = require('http');

var targetUrl = process.argv[2];

http.get(targetUrl, function(response) {

	response.setEncoding('utf-8');

	response.on('data', function(data) {
		console.log(data);
		});

	});
