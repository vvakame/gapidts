/// <reference path="../../../typings/node/node.d.ts" />

/// <reference path="./urlshortener-v1-nodejs.d.ts" />

import google = require("googleapis");

var urlshortener = google.urlshortener('v1');

// get the long url of a shortened url
urlshortener.url.get({shortUrl: 'http://goo.gl/xKbRu3'}, (err, response) => {
	console.log('Long url is', response.longUrl);
});
