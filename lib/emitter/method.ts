import model = require("../model");

import Process = require("./process");

import utils = require("../utils");

class Method {
	constructor(public name:string, public base:model.IRestMethod) {
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

		process.outputBrowser(") => ");

		// response
		if (this.base.response && this.base.response.$ref) {
			process.outputBrowser("{ execute(callback: (data: IResponse<I").outputBrowser(this.base.response.$ref).outputBrowser(">, original: string) => void):void; };");
			process.outputNodeJS(", callback: (err: any, response: I").outputNodeJS(this.base.response.$ref).outputNodeJS(") => void) => void;");
			process.outputLine("");
		} else if (!this.base.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputBrowser("{ execute(callback: (data:any, original: string) => void):void; }; // void");
			process.outputNodeJS(", callback: (err: any, response: any) => void ) => void; // void");
			process.outputLine("");
		} else {
			console.log(this.base);
			throw new Error("unknown response");
		}
	}

	emitParameter(process:Process, parameterName:string, parameter:model.IJsonSchema) {
		process.outputKey(parameterName);
		if (!parameter.required) {
			process.output("?");
		}
		process.output(": ").output(utils.toTSType(parameter.type, this.base)).outputLine(";");
	}
}

export = Method;
