import fs = require("fs");

import model = require("../model");

export import Root = require("./root");
export import Resource = require("./resource");
export import Method = require("./method");
export import Schema = require("./schema");
export import Process = require("./process");

export interface IResult {
	name: string;
	version: string;
	browserCommon: string;
	browserDefinition:string;
	nodejsCommon: string;
	nodejsDefinition:string;
	data:Root;
}

export function emit(root:model.IRestDescription):IResult {
	var api = new Root(root);
	var process = new Process();
	api.emit(process);

	return {
		name: api.name,
		version: api.base.version,
		browserCommon: fs.readFileSync(__dirname + "/../../resources/browser-common.d.ts", {encoding: "utf8"}),
		browserDefinition: process.toDefinition("browser"),
		nodejsCommon: fs.readFileSync(__dirname + "/../../resources/nodejs-common.d.ts", {encoding: "utf8"}),
		nodejsDefinition: process.toDefinition("nodejs"),
		data: api
	};
}
