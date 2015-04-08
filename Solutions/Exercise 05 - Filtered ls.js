var fs = require('fs');

var folderPath = process.argv[2];
var extensionFilter = '.' + process.argv[3];

fs.readdir(folderPath, function(err, list) {

	var extension = function(filename) {
		var pointIndex = filename.lastIndexOf('.');
		return filename.substring(pointIndex, filename.length);
		};

	var matchingEntries = list.filter(function(entry) {
		return extension(entry) == extensionFilter;
		});
				
	matchingEntries.forEach(function(entry) {
		console.log(entry);
		});
	});
