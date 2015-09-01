/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/update-notifier/update-notifier.d.ts" />
/// <reference path="../typings/commander/commander.d.ts" />
/// <reference path="../typings/colors/colors.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/mkdirp/mkdirp.d.ts" />

import https = require("https");
import fs = require("fs");
import url = require("url");
import updateNotifier = require("update-notifier");
import program = require("commander");
import _Promise = require("es6-promise");
import Promise = _Promise.Promise;
import mkdirp = require("mkdirp");
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

// <hoge> is required, [hoge] is optional
program
	.option("--source <file>", "specified source JSON file.")
	.option("--list-short", "list of API ID.")
	.option("--list", "list of API ID.")
	.option("--json", "emit schema source by JSON.")
	.option("--id <apiId>", "endpoint ID. e.g. urlshortener:v1")
	.option("--endpoint <endpoint>", "path. e.g. https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest")
	.option("--outDir <directory>", "output directory.")
	.option("--silent", "execute silently.")
	.option("--type-only", "emit type definition only.")
	.parse(process.argv);

interface ICommandlineOptions {
	source: string;

	listShort: boolean;
	list: boolean;
	json: boolean;

	id: string;
	endpoint: string;

	outDir: string;
	silent: boolean;
	typeOnly: boolean;
}

var opts:ICommandlineOptions = <any>program;

if (opts.list || opts.listShort) {
	processList();
} else if (opts.source) {
	processFromSource();
} else if (opts.endpoint) {
	processFromEndpoint();
} else {
	processFromId();
}

function fetch(params:{host: string; port: number; path: string;}):Promise<string> {
	var promise = new Promise((fulfilled, reject)=> {
		https.get({
			host: params.host,
			port: params.port,
			method: "GET",
			path: params.path
		}, (response:any)=> {
			response.setEncoding("utf8");

			var result = "";
			response.on("data", (d:string) => {
				result += d;
			});
			response.on("end", ()=> {
				fulfilled(result);
			});
		}).on("error", (e:any) => {
			reject(e);
		});
	});
	return promise;
}

function fetchApiList():Promise<gapidts.model.IDirectoryList> {
	return fetch({
		host: "www.googleapis.com",
		port: 443,
		method: "GET",
		path: "/discovery/v1/apis"
	}).then(resp => JSON.parse(resp));
}

function processList() {
	fetchApiList()
		.then(data=> {
			data.items.forEach(item => {
				if (opts.silent) {
					return;
				}
				if (opts.listShort) {
					console.log(item.id);
				} else {
					console.log(item.id.bold);
					console.log("\t", item.title);
					console.log("\t", item.description);
					console.log();
				}
			});
		})
		.catch(err=> {
			if (err instanceof Error) {
				console.error(err.stack);
			} else if (typeof err === "string") {
				console.error(err);
			} else if (err && err.stack) {
				console.error(err.stack);
			}
			return Promise.reject(null);
		})
		.catch(()=> {
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
	if (opts.outDir) {
		mkdirp.sync(opts.outDir);
		fs.writeFileSync(opts.outDir + "/googleapis-browser-common.d.ts", result.browserCommon, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/googleapis-nodejs-common.d.ts", result.nodejsCommon, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/" + result.name + "-" + result.version + "-browser.d.ts", result.browserDefinition, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/" + result.name + "-" + result.version + "-nodejs.d.ts", result.nodejsDefinition, {encoding: "utf8"});
	} else {
		if (opts.silent) {
			return;
		}
		console.log(result.browserCommon);
		console.log(result.browserDefinition);
		console.log(result.nodejsCommon);
		console.log(result.nodejsDefinition);
	}
}


function processFromEndpoint() {
	var data = url.parse(opts.endpoint);
	fetch({
		host: data.host,
		port: data.protocol === "https:" ? 443 : 80,
		method: "GET",
		path: data.path
	})
		.then(processJsonSchema)
		.catch((err)=> {
			if (err instanceof Error) {
				console.error(err.stack);
			} else if (typeof err === "string") {
				console.error(err);
			} else if (err && err.stack) {
				console.error(err.stack);
			}
			return Promise.reject(null);
		})
		.catch((err)=> {
			process.exit(1);
		});
}

function processFromId() {
	if (!opts.id) {
		console.error("--id or --source are required.");
		process.exit(1);
		return;
	}

	fetchApiList()
		.then(data=> {
			var found = data.items.filter(item => item.id === opts.id)[0];
			if (found) {
				return Promise.resolve(found);
			} else {
				return Promise.reject(opts.id + " not exists");
			}
		})
		.then(item=> item.discoveryRestUrl)
		.then((discoveryRestUrl:string)=> {
			var data = url.parse(discoveryRestUrl);
			return fetch({
				host: data.host,
				port: data.protocol === "https:" ? 443 : 80,
				method: "GET",
				path: data.path
			});
		})
		.then(processJsonSchema)
		.catch((err)=> {
			if (err instanceof Error) {
				console.error(err.stack);
			} else if (typeof err === "string") {
				console.error(err);
			} else if (err && err.stack) {
				console.error(err.stack);
			}
			return Promise.reject(null);
		})
		.catch((err)=> {
			process.exit(1);
		});
}

function processJsonSchema(data:string) {
	if (opts.json) {
		if (opts.outDir) {
			mkdirp.sync(opts.outDir);
			// TODO
			fs.writeFileSync(opts.outDir + "/test.json", data, {encoding: "utf8"});
		} else {
			if (opts.silent) {
				return;
			}
			console.log(data);
		}
		return true;
	}
	var result = gapidts(JSON.parse(data), opts.typeOnly);
	if (opts.outDir) {
		mkdirp.sync(opts.outDir);
		// TODO
		fs.writeFileSync(opts.outDir + "/googleapis-browser-common.d.ts", result.browserCommon, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/googleapis-nodejs-common.d.ts", result.nodejsCommon, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/" + result.name + "-" + result.version + "-browser.d.ts", result.browserDefinition, {encoding: "utf8"});
		fs.writeFileSync(opts.outDir + "/" + result.name + "-" + result.version + "-nodejs.d.ts", result.nodejsDefinition, {encoding: "utf8"});
	} else {
		if (opts.silent) {
			return;
		}
		console.log(result.browserCommon);
		console.log(result.browserDefinition);
		console.log(result.nodejsCommon);
		console.log(result.nodejsDefinition);
	}
	return true;
}
