/// <reference path="../typings/node/node.d.ts" />

import https = require("https");
import fs = require("fs");

import model = require("./model");
import emitter = require("./emitter");

if (!true) {
	var request = https.get({
		host: "www.googleapis.com",
		port: 443,
		method: "GET",
		path: "/discovery/v1/apis/urlshortener/v1/rest"
	}, (response)=> {
		(<any>response).setEncoding("utf8");
		var result = "";
		response.on("data", (d:string) => {
			result += d;
		});
		response.on("end", ()=> {
			process(result);
		});
	});

	request.on("error", (e:any) => {
		console.log("problem with request: " + e.message);
	});
} else {
	var result = fs.readFileSync("./test/fixture/bigquery/v2/rest.json", "utf8");
	process(result);
}

function process(json:string) {
	var root:model.IRestDescription = JSON.parse(json);

	var result = emitter.emit(root);
	console.log(result.definition);
}
