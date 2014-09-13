import model = require("../model");

import Process = require("../process");

import Method = require("./method");

class Resource {

	methods:Method[] = [];
	resources:Resource[] = [];

	constructor(public name:string, public base:model.IRestResource, public nested:boolean) {
		this.methods = Object.keys(base.methods || {}).map(methodName=> {
			return new Method(methodName, base.methods[methodName], true);
		});
		this.resources = Object.keys(base.resources || {}).map(resourceName=> {
			return new Resource(resourceName, base.resources[resourceName], true);
		});
	}
}

export = Resource;
