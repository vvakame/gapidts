import model = require("../model");

import Method = require("./method");
import Process = require("./process");

class Resource {

	methods:Method[] = [];
	resources:Resource[] = [];

	constructor(public name:string, public base:model.IRestResource, public nested = false) {
		this.methods = Object.keys(base.methods || {}).map(methodName=> {
			return new Method(methodName, base.methods[methodName]);
		});
		this.resources = Object.keys(base.resources || {}).map(resourceName=> {
			return new Resource(resourceName, base.resources[resourceName], true);
		});
	}

	emit(process:Process):void {
		// note: why var? if API has "delete" method. it can't contains to module and function name.
		if (!this.nested) {
			process.output("var ");
		}
		process.output(this.name).output(": {").outputLine();
		process.increaseIndent();

		this.methods.forEach(method=> {
			method.emit(process);
		});

		if (this.resources.length !== 0) {
			this.resources.forEach(resource=> {
				resource.emit(process);
			});
		}

		process.decreaseIndent();
		process.outputLine("};");
	}
}

export = Resource;
