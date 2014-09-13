import model = require("../model");

import Process = require("../process");

import Schema = require("./schema");
import Resource = require("./resource");
import Method = require("./method");

class Root {
	name:string;
	schemas:Schema[];
	resources:Resource[];
	methods:Method[];

	constructor(public base:model.IRestDescription) {
		this.name = this.base.name;

		this.schemas = Object.keys(this.base.schemas || {}).map(schemaName=> {
			return new Schema(schemaName, base.schemas[schemaName]);
		});
		this.resources = Object.keys(this.base.resources || {}).map(resourceName=> {
			return new Resource(resourceName, base.resources[resourceName], false);
		});
		this.methods = Object.keys(this.base.methods || {}).map(methodName=> {
			return new Method(methodName, base.methods[methodName], false);
		});
	}

	get ownerName() {
		return this.base.ownerName;
	}

	get title() {
		return this.base.title;
	}

	get version() {
		return this.base.version;
	}

	get documentationLink() {
		return this.base.documentationLink;
	}

	get baseUrl() {
		return this.base.baseUrl;
	}

	get description() {
		return this.base.description;
	}

	get auth() {
		return this.base.auth;
	}
}

export = Root;
