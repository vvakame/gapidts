import GoogleDiscoveryBasedAPI = require("./google");

import model = require("../model");
import utils = require("../utils");

import Root = require("../api/root");
import Schema = require("../api/schema");
import Resource = require("../api/resource");
import Method = require("../api/method");
import Process = require("../process");

class GoogleDiscoveryBasedAPIForNode extends GoogleDiscoveryBasedAPI {

	emitCommonDefinition(process:Process, root:Root) {
		process.outputLine("/// <reference path=\"./googleapis-nodejs-common.d.ts\" />");
		process.outputLine();
		process.outputLine("declare module \"googleapis\" {");
		process.increaseIndent();
		process.output("function ").output(root.name).output("(version:string):typeof googleapis.").output(root.name).outputLine(";");
		process.output("function ").output(root.name).output("(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.").output(root.name).outputLine(";");
		process.decreaseIndent();
		process.outputLine("}");
	}

	emitTopLevelModule(process:Process, root:Root, resume:()=> void) {
		process.outputJSDoc(root.description);

		process.output("declare module googleapis.").output(root.name).output(" {").outputLine();
		process.increaseIndent();

		resume();

		process.decreaseIndent();
		process.outputLine("}");
	}

	emitMethodOptionalRequestParameter(process:Process) {
		process.outputLine("key?: string; // API_KEY");
		process.outputLine("auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2");
	}

	emitMethodResponseParameter(process:Process, method:Method) {
		if (method.response && method.response.$ref) {
			process.output(", callback: (err: IErrorResponse, response: I").output(method.response.$ref).outputLine(", incomingMessage: any /* http.IncomingMessage */) => void) => void;");
		} else if (!method.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputLine(", callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void");
		} else {
			console.log(method.base);
			throw new Error("unknown response");
		}
	}
}

export = GoogleDiscoveryBasedAPIForNode;
