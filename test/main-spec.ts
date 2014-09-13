/// <reference path="../typings/node/node.d.ts" />

/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/assert/assert.d.ts" />

import https = require("https");
import fs = require("fs");
import path = require("path");

import util = require("./util");

import model = require("../lib/model");
import emitter = require("../lib/emitter");

interface IServiceInfo {
	name: string;
	version: string;
}

describe("definition api", ()=> {
	var serviceInfos:IServiceInfo[] = fs.readdirSync("./test/fixture")
		.map(fileName=> {
			var matches = fileName.match(/^(.+)-(.+)-rest.json$/);
			if (matches.length !== 3) {
				return;
			}
			return {
				name: matches[1],
				version: matches[2]
			};
		})
		.filter(v => !!v);

	serviceInfos.forEach(serviceInfo => {
		var jsonFilePath = "test/fixture/" + serviceInfo.name + "-" + serviceInfo.version + "-rest.json";
		var envList = ["browser", "nodejs"];
		envList.forEach(env => {
			it("create same file every time about " + serviceInfo.name + "-" + serviceInfo.version + "-" + env, (done)=> {
				var expectedDefinitionPath = "test/valid/" + serviceInfo.name + "-" + serviceInfo.version + "-" + env + ".d.ts";

				var doTest = (json:string, expectedDefinition:string)=> {
					var root:model.IRestDescription = JSON.parse(json);
					var result = emitter.emit(root);

					if (env === "browser") {
						assert(result.browserDefinition === expectedDefinition);
					} else {
						assert(result.nodejsDefinition === expectedDefinition);
					}

					done();
				};

				var makeJsonFile = () => {
					var request = https.get({
						host: "www.googleapis.com",
						port: 443,
						method: "GET",
						path: "/discovery/v1/apis/" + serviceInfo.name + "/" + serviceInfo.version + "/rest"
					}, (response)=> {
						(<any>response).setEncoding("utf8");
						var result = "";
						response.on("data", (d:string) => {
							result += d;
						});
						response.on("end", ()=> {
							util.mkdirp(path.dirname(jsonFilePath));
							fs.writeFileSync(jsonFilePath, result);

							doTasks();
						});
					});
				};

				var makeDefinitionFile = () => {
					var root:model.IRestDescription = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
					var result = emitter.emit(root);
					util.mkdirp(path.dirname(expectedDefinitionPath));
					if (env === "browser") {
						fs.writeFileSync(expectedDefinitionPath, result.browserDefinition);
					} else {
						fs.writeFileSync(expectedDefinitionPath, result.nodejsDefinition);
					}

					doTasks();
				};

				var doTasks = () => {
					if (!fs.existsSync(jsonFilePath)) {
						makeJsonFile();
						return;
					}
					if (!fs.existsSync(expectedDefinitionPath)) {
						makeDefinitionFile();
						return;
					}
					doTest(fs.readFileSync(jsonFilePath, "utf8"), fs.readFileSync(expectedDefinitionPath, "utf8"));
				};

				doTasks();
			});
		});
	});
});
