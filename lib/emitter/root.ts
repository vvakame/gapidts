import model = require("../model");

import Schema = require("./schema");
import Resource = require("./resource");
import Process = require("./process");

class Root {
	name:string;
	schemas:Schema[];
	resources:Resource[];

	constructor(public base:model.IRestDescription) {
		this.name = this.base.name;

		this.schemas = Object.keys(this.base.schemas).map(schemaName=> {
			return new Schema(schemaName, base.schemas[schemaName]);
		});
		this.resources = Object.keys(this.base.resources).map(resourceName=> {
			return new Resource(resourceName, base.resources[resourceName]);
		});
	}

	emit(process:Process):void {
		this.emitDefinitionHeader(process);

		this.emitInModule(process, ()=> {
			this.emitMethods(process);
			this.emitTypes(process);
		});
	}

	emitDefinitionHeader(process:Process) {
		process.output("// Type definitions for ").output(this.base.ownerName || "").output(" ");
		process.output(this.base.title).output(" ").outputLine(this.base.version);
		process.output("// Project: ").outputLine(this.base.documentationLink);
		process.outputLine("// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>");
		process.outputLine("// Definitions: https://github.com/vvakame/gapidts");
		process.outputLine("");
	}

	emitInModule(process:Process, proc:()=>void) {
		process.outputLine("declare module gapi.client {");
		process.increaseIndent();
		process.outputJSDoc(this.base.description);
		process.output("module ").output(this.name).output(" {").outputLine();
		process.increaseIndent();

		proc();

		process.decreaseIndent();
		process.outputLine("}");
		process.decreaseIndent();
		process.outputLine("}");
	}

	emitMethods(process:Process) {
		this.resources.forEach(resource=>resource.emit(process));
	}

	emitTypes(process:Process) {
		this.schemas.forEach(schema=>schema.emit(process));
	}
}

export = Root;