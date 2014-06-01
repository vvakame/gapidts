var googleapis = require('googleapis');

googleapis
	.discover('discovery', 'v1')
	.execute(function (err, client) {
		if (err) {
			console.error('Problem during the client discovery.', err);
			return;
		}
		client.discovery.apis.list().execute(function (err, response) {
			if (err) {
				console.error('Problem during the call discovery.apis.list.', err);
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
	});
