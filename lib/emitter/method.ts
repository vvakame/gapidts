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
		process.outputLineNodeJS("key?: string; // API_KEY");
		process.outputLineNodeJS("auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2");
		if (this.base.request) {
			process.output("resource?: I").output(this.base.request.$ref).outputLine(";");
		}
		process.decreaseIndent();
		process.output("}");

		process.outputBrowser(") => ");

		// response
		if (this.base.response && this.base.response.$ref) {
			process.outputBrowser("{ execute(callback: (data: IResponse<I").outputBrowser(this.base.response.$ref).outputBrowser(">, original: string) => void):void; };");
			process.outputNodeJS(", callback: (err: IErrorResponse, response: I").outputNodeJS(this.base.response.$ref).outputNodeJS(", incomingMessage: any /* http.IncomingMessage */) => void) => void;");
			process.outputLine("");
		} else if (!this.base.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputBrowser("{ execute(callback: (data:any, original: string) => void):void; }; // void");
			process.outputNodeJS(", callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void");
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
