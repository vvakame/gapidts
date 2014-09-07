import model = require("../model");
import utils = require("../utils");

import Process = require("./process");

class Schema {
	constructor(public name:string, public base:model.IJsonSchema) {
		if (base.type !== "object" && base.type !== "any" && base.type !== "array") {
			console.error(base);
			throw new Error("unknown type: " + base.type);
		}
	}

	emit(process:Process):void {
		process.outputJSDoc(this.base.description);
		if (this.base.type === "array") {
			this.emitCollection(process, this.base);
		} else {
			this.emitModel(process, this.base);
		}
	}

	emitModel(process:Process, model:model.IJsonSchema):void {
		process.output("interface I").output(this.name).outputLine(" {");
		process.increaseIndent();

		if (model.type === "any") {
			// TODO this is not permitted property access by dot.
			process.outputLine("[name: string]: any; // any");
		}

		Object.keys(model.properties || {}).forEach(propertyName=> {
			process.outputJSDoc(model.properties[propertyName].description);
			this.emitProperty(process, propertyName, model.properties[propertyName]);
		});

		process.decreaseIndent();
		process.outputLine("}");
	}

	emitCollection(process:Process, model:model.IJsonSchema):void {
		process.output("interface I").output(this.name).output(" extends Array<");
		if (model.items.$ref) {
			this.emitNamedType(process, "I" + model.items.$ref, model.items, false);
		} else {
			this.emitProperty(process, null, model.items, false);
		}
		process.outputLine("> {");
		process.outputLine("}");
	}

	emitProperty(process:Process, name:string, property:model.IJsonSchema, terminate = true):void {
		if (name) {
			process.outputKey(name).output(": ");
		}
		if (property.$ref) {
			this.emitNamedType(process, "I" + property.$ref, property, terminate);
			return;
		}
		var tsType = utils.toTSType(property.type, property);
		if (tsType) {
			this.emitNamedType(process, tsType, property, terminate);
			return;
		}
		if (property.type === "object") {
			if (property.properties) {
				process.increaseIndent();
				process.outputLine("{");
				Object.keys(property.properties).forEach(propertyName => {
					this.emitProperty(process, propertyName, property.properties[propertyName]);
				});
				process.decreaseIndent();
				process.output("}");
				if (terminate) {
					process.outputLine(";");
				}
			} else if (property.additionalProperties) {
				process.outputLine("{");
				process.increaseIndent();
				process.output("[name:string]: ");
				this.emitProperty(process, null, property.additionalProperties, false);
				process.outputLine(";");
				process.decreaseIndent();
				process.output("}");
				if (terminate) {
					process.outputLine(";");
				}
			}

		} else if (property.type === "array") {
			this.emitProperty(process, null, property.items, false);
			process.output("[]");
			if (terminate) {
				process.outputLine(";");
			}

		} else {
			console.error(property);
			throw new Error("unknown type: " + property.type);
		}
	}

	emitNamedType(process:Process, typeName:string, property:model.IJsonSchema, terminate = true) {
		process.output(typeName);
		if (terminate) {
			process.output(";");
			if (property.format) {
				process.output(" // ").output(property.format);
			}
			process.outputLine();
		} else {
			if (property.format) {
				process.output(" /* ").output(property.format).output(" */ ");
			}
		}
	}
}

export = Schema;
