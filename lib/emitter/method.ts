import model = require("../model");

import Process = require("./process");

class Method {
	constructor(public name:string, public base:model.IRestMethod) {
	}

	toTSType(type:string) {
		switch (type) {
			case "string":
				return "string";
			case "integer":
			case "number":
				return "number";
			case "boolean":
				return "boolean";
			default :
				console.log(this.base);
				throw new Error("unknown type: " + type);
		}
	}

	emit(process:Process):void {
		process.outputJSDoc(this.base.description, this.base.parameters);
		process.output(this.name).output(": (");

		// request
		var parameterNames = Object.keys(this.base.parameters || {});
		process.outputLine("params: {");
		process.increaseIndent();
		parameterNames.forEach(parameterName=> {
			this.emitParameter(process, parameterName, this.base.parameters[parameterName]);
		});
		if (this.base.request) {
			process.output("resource?: I").output(this.base.request.$ref).outputLine(";");
		}
		process.decreaseIndent();
		process.output("}");

		process.output(") => ");

		// response
		if (this.base.response && this.base.response.$ref) {
			process.output("{ execute(callback: (data: I").output(this.base.response.$ref).outputLine(", original: string) => void):void; };");
		} else if (!this.base.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputLine("{ execute(callback: (data:any, original: string) => void):void; }; // void");
		} else {
			console.log(this.base);
			throw new Error("unknown response");
		}
	}

	emitParameter(process:Process, parameterName:string, parameter:model.IJsonSchema) {
		if (/\-/.test(parameterName)) {
			process.output("\"").output(parameterName).output("\"");
		} else {
			process.output(parameterName);
		}
		if (!parameter.required) {
			process.output("?");
		}
		process.output(": ").output(this.toTSType(parameter.type)).outputLine(";");
	}
}

export = Method;
