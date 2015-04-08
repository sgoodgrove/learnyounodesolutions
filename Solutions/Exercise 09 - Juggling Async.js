var http = require('http');

function getUrlContent(targetUrl, seqId, callback) {
	var data = "";

	http.get(targetUrl, function(response) {

		response.setEncoding('utf-8');

		response.on('data', function(buffer) {
			data += buffer;
			});

		response.on('end', function(buffer) {
			return callback(null, {seqId: seqId, data: data});
			});
		});
	}

function urlDataComplete(err, data) {
	// Once all data for a url is received, store the data
	// in the correct slot (seqId).
	responses[data.seqId] = data.data;
	outStandingRequests -= 1;

	// Once all responses are received, display the contents.
	if (outStandingRequests == 0) {
		responses.forEach(function(content) {
			console.log(content);
			});
		}
	}

var outStandingRequests = 0;
var seqId = 0;
var responses = [];

var urls = process.argv.slice(2, process.argv.length);

urls.forEach(function(url) {

	responses.push(null);

	getUrlContent(url, seqId, urlDataComplete);

	outStandingRequests += 1;
	seqId += 1;
	});

