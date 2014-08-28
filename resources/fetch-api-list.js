var googleapis = require('googleapis');

var discovery = googleapis.discovery('v1');
discovery.apis.list(function (err, response) {
	if (err) {
		console.error('Problem during the client discovery.', err);
		return;
	}
	var results = response.items.map(function (item) {
		return {
			name: item.name,
			version: item.version
		};
	});
	console.log(JSON.stringify(results, null, 2));
});
