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
			process.outputLine("{");
			process.increaseIndent();
			process.output("execute(callback: (data: IResponse<I").output(method.response.$ref).outputLine(">, original: string) => void):void;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;");
			process.output("then<U>(onFulfilled: (response: IPromiseResponse<I").output(method.response.$ref).outputLine(">) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;");
			process.decreaseIndent();
			process.outputLine("};");
		} else if (!method.response) {
			// e.g. blogger-v3 blogger.comments.delete and other delete, remove API
			process.outputLine("{");
			process.increaseIndent();
			process.outputLine("execute(callback: (data:any, original: string) => void):void;// void");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;");
			process.outputLine("then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;");
			process.decreaseIndent();
			process.outputLine("};");
		} else {
			console.log(method.base);
			throw new Error("unknown response");
		}
	}
}

export = GoogleDiscoveryBasedAPIForBrowser;
