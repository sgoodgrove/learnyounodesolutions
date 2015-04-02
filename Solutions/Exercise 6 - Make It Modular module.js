var fs = require('fs');

module.exports = function(folderPath, extensionFilter, callback) {
	var extensionFilter = '.' + extensionFilter;

	fs.readdir(folderPath, function(err, list) {

		if (err)
			return callback(err);

		var extension = function(filename) {
			var pointIndex = filename.lastIndexOf('.');
			return filename.substring(pointIndex, filename.length);
			};

		var matchingEntries = list.filter(function(entry) {
			return extension(entry) == extensionFilter;
			});

		return callback(null, matchingEntries);

		});
	};
