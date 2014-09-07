/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/update-notifier/update-notifier.d.ts" />
/// <reference path="../typings/commander/commander.d.ts" />
/// <reference path="../typings/colors/colors.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />

import https = require("https");
import fs = require("fs");
import url = require("url");
import updateNotifier = require("update-notifier");
import program = require("commander");
import _Promise = require("es6-promise");
var Promise = _Promise.Promise;
require("colors");

import gapidts = require("./index");

var pkg = require("../package.json");

var notifier = updateNotifier({
	packageName: pkg.name,
	packageVersion: pkg.version
});
if (notifier.update) {
	notifier.notify();
}

// <hoge> は required, [hoge] は optional
program
	.option("--source <file>", "specified source JSON file")
	.option("--list-short", "list of API ID.")
	.option("--list", "list of API ID.")
	.option("--json", "emit schema source by JSON.")
	.option("--id <apiId>", "endpoint ID. e.g. urlshortener:v1")
	.option("--host [hostName]", "host name. default www.googleapis.com", null, "www.googleapis.com")
	.option("--port [port]", "port number. default 443", null, "443")
	.option("--discovery-api-path <path>", "discovery api path. default /discovery/v1/apis", null, "/discovery/v1/apis")
	.option("--endpoint <endpoint>", "path. e.g. https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest")
	.option("--out <outFileName>", "output file name")
	.parse(process.argv);

interface ICommandlineOptions {
	source: string;

	listShort: boolean;
	list: boolean;
	json: boolean;
	id: string;

	host: string;
	port: string;
	discoveryApiPath: string;
	endpoint: string;

	out: string;
}

var opts = <any>program;

if (opts.list || opts.listShort) {
	processList();
} else if (opts.source) {
	processFromSource();
} else {
	processFromId();
}

function fetch(params:any):Promise<string> {
	var promise = new Promise((fulfilled, reject)=> {
		https.get({
			host: params.host,
			port: parseInt(params.port, 10),
			method: "GET",
			path: params.path
		}, (response)=> {
			(<any>response).setEncoding("utf8");
			var result = "";
			response.on("data", (d:string) => {
				result += d;
			});
			response.on("end", ()=> {
				fulfilled(result);
			});
		});
	});
	return promise;
}

function fetchApiList() {
	return fetch({
		host: opts.host || "www.googleapis.com",
		port: parseInt(opts.port || "443", 10),
		method: "GET",
		path: opts.discoveryApiPath || "/discovery/v1/apis"
	}).then(resp => JSON.parse(resp));
}

function processList() {
	fetchApiList()
		.then(data=> {
			data.items.forEach((item:any) => {
				if (opts.listShort) {
					console.log(item.id);
				} else {
					console.log(item.id.bold);
					console.log("\t", item.title);
					console.log("\t", item.description);
					console.log();
				}
			});
		}, ()=> {
			process.exit(1);
		});
}

function processFromSource() {
	if (!fs.existsSync(opts.source)) {
		console.error(opts.source + " is not exists.");
		process.exit(1);
		return;
	}

	var result = gapidts(JSON.parse(fs.readFileSync(opts.source, "utf8")));
	if (opts.out) {
		fs.writeFileSync(opts.out, result.definition, {encoding: "utf8"});
	} else {
		console.log(result.definition);
	}
}

function processFromId() {
	if (!opts.id) {
		console.error("--id or --source are required.");
		process.exit(1);
		return;
	}

	fetchApiList()
		.then((data:any)=> {
			var found = data.items.filter((item:any) => item.id === opts.id)[0];
			if (found) {
				return Promise.resolve(found);
			} else {
				return Promise.reject(null);
			}
		})
		.then((item:any)=> item.discoveryRestUrl)
		.then((discoveryRestUrl:string)=> {
			var data = url.parse(discoveryRestUrl);
			return fetch({
				host: data.host,
				port: data.protocol === "https:" ? 443 : 80,
				method: "GET",
				path: data.path
			});
		})
		.then(data=> {
			if (opts.json) {
				if (opts.out) {
					fs.writeFileSync(opts.out, data, {encoding: "utf8"});
				} else {
					console.log(data);
				}
				return true;
			}
			var result = gapidts(JSON.parse(data));
			if (opts.out) {
				fs.writeFileSync(opts.out, result.definition, {encoding: "utf8"});
			} else {
				console.log(result.definition);
			}
			return true;
		})
		.catch((err)=> {
			console.error(err.stack);
			return Promise.reject(null);
		})
		.catch((err)=> {
			process.exit(1);
		});
}
