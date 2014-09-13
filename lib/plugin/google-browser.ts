import GoogleDiscoveryBasedAPI = require("./google");

import model = require("../model");
import utils = require("../utils");

import Root = require("../api/root");
import Schema = require("../api/schema");
import Resource = require("../api/resource");
import Method = require("../api/method");
import Process = require("../process");

class GoogleDiscoveryBasedAPIForBrowser extends GoogleDiscoveryBasedAPI {

	emitCommonDefinition(process:Process, root:Root) {
		process.outputLine("/// <reference path=\"./googleapis-browser-common.d.ts\" />");
		process.outputLine();
	}

	emitTopLevelModule(process:Process, root:Root, resume:()=> void) {
		process.outputLine("declare module gapi.client {");
		process.increaseIndent();

		process.outputJSDoc(root.description);

		process.output("module ").output(root.name).output(" {").outputLine();
		process.increaseIndent();

		resume();

		process.decreaseIndent();
		process.outputLine("}");
		process.decreaseIndent();
		process.outputLine("}");
	}

	emitMethodResponseParameter(process:Process, method:Method) {
		process.output(") => ");

		if (method.response && method.response.$ref) {
			process.output("{ execute(callback: (data: IResponse<I").output(method.response.$ref).outputLine(">, original: string) => void):void; };");
		} else if (!method.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputLine("{ execute(callback: (data:any, original: string) => void):void; }; // void");
		} else {
			console.log(method.base);
			throw new Error("unknown response");
		}
	}
}

export = GoogleDiscoveryBasedAPIForBrowser;
