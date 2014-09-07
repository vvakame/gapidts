import model = require("../model");

export import Root = require("./root");
export import Resource = require("./resource");
export import Method = require("./method");
export import Schema = require("./schema");
export import Process = require("./process");

export interface IResult {
	definition:string;
	data:Root;
}

export function emit(root:model.IRestDescription):IResult {
	var api = new Root(root);
	var process = new Process();
	api.emit(process);

	return {
		definition: process.toDefinition(),
		data: api
	};
}
