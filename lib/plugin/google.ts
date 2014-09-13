import IPlugin = require("./lib/plugin");

import model = require("../model");
import utils = require("../utils");

import Root = require("../api/root");
import Schema = require("../api/schema");
import Resource = require("../api/resource");
import Method = require("../api/method");
import Process = require("../process");

class GoogleDiscoveryBasedAPI implements IPlugin {

	emitDefinitionHeader(process:Process, root:Root) {
		process.output("// Type definitions for ").output(root.ownerName || "").output(" ");
		process.output(root.title).output(" ").outputLine(root.version);
		process.output("// Project: ").outputLine(root.documentationLink);
		process.outputLine("// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>");
		process.outputLine("// Definitions: https://github.com/vvakame/gapidts");
		process.outputLine("");
	}

	emitCommonDefinition(process:Process, root:Root) {
		throw new Error("please overwrite this method");
	}


	emitTopLevelModule(process:Process, root:Root, resume:()=> void) {
		throw new Error("please overwrite this method");
	}

	emitInnerModule(process:Process, resource:Resource, resume:()=>void) {
		if (!resource.nested) {
			// note: why var? if API has "delete"(reserved keyword) method. it can't contains to module and function name.
			process.output("var ");
		}

		process.output(resource.name).output(": {").outputLine();
		process.increaseIndent();

		resume();

		process.decreaseIndent();
		process.outputLine("};");
	}

	emitMethod(process:Process, method:Method) {
		process.outputJSDoc(method.description, method.parameters);
		if (!method.inInnerModule) {
			process.output("var ");
		}
		process.output(method.name).output(": (");

		// request
		var parameterNames = Object.keys(method.parameters || {});
		process.outputLine("params: {");
		process.increaseIndent();
		parameterNames.forEach(parameterName=> {
			this.emitMethodParameter(process, method, parameterName, method.parameters[parameterName]);
		});
		this.emitMethodOptionalRequestParameter(process);
		if (method.request) {
			process.output("resource?: I").output(method.request.$ref).outputLine(";");
		}
		process.decreaseIndent();
		process.output("}");

		this.emitMethodResponseParameter(process, method);
	}

	emitMethodParameter(process:Process, method:Method, parameterName:string, parameter:model.IJsonSchema) {
		process.outputKey(parameterName);
		if (!parameter.required) {
			process.output("?");
		}
		process.output(": ").output(utils.toTSType(parameter.type, method.base)).outputLine(";");
	}

	emitMethodOptionalRequestParameter(process:Process) {
	}

	emitMethodResponseParameter(process:Process, method:Method) {
		throw new Error("please overwrite this method");
	}

	emitType(process:Process, type:Schema) {
		process.outputJSDoc(type.description);
		if (type.type === "array") {
			this.emitTypeCollection(process, type);
		} else {
			this.emitTypeModel(process, type);
		}
	}

	emitTypeModel(process:Process, type:Schema) {
		process.output("interface I").output(type.name).outputLine(" {");
		process.increaseIndent();

		if (type.type === "any") {
			// TODO this is not permitted property access by dot.
			process.outputLine("[name: string]: any; // any");
		}

		Object.keys(type.properties || {}).forEach(propertyName=> {
			process.outputJSDoc(type.properties[propertyName].description);
			this.emiTypeProperty(process, propertyName, type.properties[propertyName]);
		});

		process.decreaseIndent();
		process.outputLine("}");
	}

	emitTypeCollection(process:Process, type:Schema) {
		process.output("interface I").output(type.name).output(" extends Array<");
		if (type.items.$ref) {
			this.emitTypePropertyNamedType(process, "I" + type.items.$ref, type.items, false);
		} else {
			this.emiTypeProperty(process, null, type.items, false);
		}
		process.outputLine("> {");
		process.outputLine("}");
	}

	emiTypeProperty(process:Process, name:string, property:model.IJsonSchema, terminate = true):void {
		if (name) {
			process.outputKey(name).output(": ");
		}
		if (property.$ref) {
			this.emitTypePropertyNamedType(process, "I" + property.$ref, property, terminate);
			return;
		}
		var tsType = utils.toTSType(property.type, property);
		if (tsType) {
			this.emitTypePropertyNamedType(process, tsType, property, terminate);
			return;
		}
		if (property.type === "object") {
			if (property.properties) {
				process.increaseIndent();
				process.outputLine("{");
				Object.keys(property.properties).forEach(propertyName => {
					this.emiTypeProperty(process, propertyName, property.properties[propertyName]);
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
				this.emiTypeProperty(process, null, property.additionalProperties, false);
				process.outputLine(";");
				process.decreaseIndent();
				process.output("}");
				if (terminate) {
					process.outputLine(";");
				}
			}

		} else if (property.type === "array") {
			this.emiTypeProperty(process, null, property.items, false);
			process.output("[]");
			if (terminate) {
				process.outputLine(";");
			}

		} else {
			console.error(property);
			throw new Error("unknown type: " + property.type);
		}
	}

	emitTypePropertyNamedType(process:Process, typeName:string, property:model.IJsonSchema, terminate = true) {
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

export = GoogleDiscoveryBasedAPI;
