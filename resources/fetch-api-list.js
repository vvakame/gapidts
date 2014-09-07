var googleapis = require('googleapis');
var https = require('https');
var url = require('url');
var fs = require('fs');

var discovery = googleapis.discovery('v1');
discovery.apis.list(function (err, response) {
	if (err) {
		console.error('Problem during the client discovery.', err);
		return;
	}
	var results = response.items.map(function (item) {
		return {
			name: item.name,
			version: item.version,
			discoveryRestUrl: item.discoveryRestUrl
		};
	});
	console.log(JSON.stringify(results, null, 2));
	results.forEach(function (item) {
		var data = url.parse(item.discoveryRestUrl);
		return https.get({
			host: data.host,
			port: data.protocol === "https:" ? 443 : 80,
			method: "GET",
			path: data.path
		}, function (response) {
			response.setEncoding("utf8");

			var result = "";
			response.on("data", function (d) {
				result += d;
			});
			response.on("end", function () {
				fs.writeFileSync(__dirname + "/../test/fixture/" + item.name + "-" + item.version + "-rest.json", result, {encofing: "utf8"});
			});
		}).on("error", function (e) {
			console.error(e);
		});
	});
});
