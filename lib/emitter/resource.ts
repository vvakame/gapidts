import model = require("../model");

import Method = require("./method");
import Process = require("./process");

class Resource {

	methods:Method[] = [];

	constructor(public name:string, public base:model.IRestResource) {
		this.methods = Object.keys(base.methods || []).map(methodName=> {
			return new Method(methodName, base.methods[methodName]);
		});
	}

	emit(process:Process):void {
		// note: why var? if API has "delete" method. it can't contains to module.
		process.output("var ").output(this.name).output(": {").outputLine();
		process.increaseIndent();

		this.methods.forEach(method=> {
			method.emit(process);
		});

		process.decreaseIndent();
		process.outputLine("};");
	}
}

export = Resource;
