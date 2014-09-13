import fs = require("fs");

import model = require("./model");
export import Process = require("./process");

export import Root = require("./api/root");

import walk = require("./plugin/lib/walker");
import GoogleDiscoveryBasedAPIForNode = require("./plugin/google-node");
import GoogleDiscoveryBasedAPIForBrowser = require("./plugin/google-browser");

export interface IResult {
	name: string;
	version: string;
	browserCommon: string;
	browserDefinition:string;
	nodejsCommon: string;
	nodejsDefinition:string;
}

export function emit(root:model.IRestDescription):IResult {

	var base = new Root(root);

	var browser = new GoogleDiscoveryBasedAPIForBrowser();
	var browserProcess = new Process();
	walk(browser, browserProcess, base);

	var node = new GoogleDiscoveryBasedAPIForNode();
	var nodeProcess = new Process();
	walk(node, nodeProcess, base);

	return {
		name: root.name,
		version: root.version,
		browserCommon: fs.readFileSync(__dirname + "/../resources/browser-common.d.ts", {encoding: "utf8"}),
		browserDefinition: browserProcess.toDefinition(),
		nodejsCommon: fs.readFileSync(__dirname + "/../resources/nodejs-common.d.ts", {encoding: "utf8"}),
		nodejsDefinition: nodeProcess.toDefinition()
	};
}
