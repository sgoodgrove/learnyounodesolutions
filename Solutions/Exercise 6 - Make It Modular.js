var module = require('./Exercise 6 - Make It Modular module.js');

var folderPath = process.argv[2];
var extensionFilter = process.argv[3];

module(folderPath, extensionFilter, function(err, list) {
	list.forEach(function(entry) {
		console.log(entry);
		});
	});
