import model = require("./model");

export function emit(root:model.IRestDescription):{ definition:string; data:Discovery; } {

	var api = new Discovery(root);
	var process = new Process();
	api.emit(process);

	return {
		definition: process.result,
		data: api
	};
}

export class Discovery {
	name:string;
	schemas:Schema[];
	resources:Resource[];

	constructor(base:model.IRestDescription) {
		this.name = base.name;

		this.schemas = Object.keys(base.schemas).map(schemaName=> {
			return new Schema(base.schemas[schemaName]);
		});
		this.resources = Object.keys(base.resources).map(resourceName=> {
			return new Resource(base.resources[resourceName]);
		});
	}

	emit(process:Process):void {
		process.outputLine("declare module gapi.client {");
		process.increaseIndent();
		process.output("module ").output(this.name).output(" {").outputLine();
		process.increaseIndent();

		this.resources.forEach(resource=>resource.emit(process));
		this.schemas.forEach(schema=>schema.emit(process));

		process.decreaseIndent();
		process.outputLine("}");
		process.decreaseIndent();
		process.outputLine("}");
	}
}

export class Resource {

	methods:Method[] = [];

	constructor(base:model.IRestResource) {
		this.methods = Object.keys(base.methods).map(methodName=> {
			return new Method(base.methods[methodName]);
		});
	}

	emit(process:Process):void {
		// TODO
	}
}

export class Method {
	constructor(base:model.IRestMethod) {
	}

	emit(process:Process):void {
		// TODO
	}
}

export class Schema {
	name:string;

	constructor(public base:model.IJsonSchema) {
		this.name = base.id;

		if (base.type !== "object") {
			throw base;
		}
	}

	emit(process:Process):void {
		process.output("interface I").output(this.name).outputLine(" {");
		process.increaseIndent();

		Object.keys(this.base.properties).forEach(propertyName=> {
			this.emitProperty(process, propertyName, this.base.properties[propertyName]);
		});

		process.decreaseIndent();
		process.outputLine("}");
	}

	emitProperty(process:Process, name:string, property:model.IJsonSchema, child = false):void {
		if (name) {
			process.output(name).output(": ");
		}
		if (property.$ref) {
			process.output("I").output(property.$ref);
			if (!child) {
				process.outputLine(";");
			}
			return;
		}
		switch (property.type) {
			case "any":
				process.output("any;");
				break;
			case "string":
				process.output("string;");
				if (property.format) {
					process.output(" // ").output(property.format);
				}
				process.outputLine();
				break;
			case "number":
			case "integer":
				process.output("number;");
				if (property.format) {
					process.output(" // ").output(property.format);
				}
				process.outputLine();
				break;
			case "boolean":
				process.outputLine("boolean;");
				break;
			case "object":
				if (property.properties) {
					process.increaseIndent();
					process.outputLine("{");
					Object.keys(property.properties).forEach(propertyName => {
						this.emitProperty(process, propertyName, property.properties[propertyName], child);
					});
					process.decreaseIndent();
					process.output("}");
					if (!child) {
						process.outputLine(";");
					}
				} else if (property.additionalProperties) {
					// TODO is this valid?
					if (property.additionalProperties.$ref) {
						process.output("{ [name:string]: ").output("I").output(property.additionalProperties.$ref).output("; }");
						if (!child) {
							process.outputLine(";");
						}

					} else if (property.additionalProperties.type === "string") {
						process.output("{ [name:string]: string; }");
						if (!child) {
							process.outputLine(";");
						}

					} else if (property.additionalProperties.type === "any") {
						process.output("{ [name:string]: any; }");
						if (!child) {
							process.outputLine(";");
						}

					} else if (property.additionalProperties.type === "array") {
						process.outputLine("{");
						process.increaseIndent();
						process.output("[name:string]: ");

						this.emitProperty(process, null, property.additionalProperties.items, true);
						process.outputLine("[];");

						process.decreaseIndent();
						process.output("}");
						if (!child) {
							process.outputLine(";");
						}

					} else if (property.additionalProperties.type === "object") {
						process.outputLine("{");
						process.increaseIndent();
						process.output("[name:string]: ");

						this.emitProperty(process, null, property.additionalProperties, child);

						process.decreaseIndent();
						process.output("}");
						if (!child) {
							process.outputLine(";");
						}

					} else {
						console.log(property);
						throw new Error("array: " + property.type);
					}
				}
				break;
			case "array":
				if (property.items.$ref) {
					process.output("I").output(property.items.$ref).output("[]");
					if (!child) {
						process.outputLine(";");
					}
					return;

				} else if (property.items.type === "string") {
					process.output("string[]");
					if (!child) {
						process.outputLine(";");
					}
					return;

				} else if (property.items.type === "array") {
					this.emitProperty(process, null, property.items, true);
					process.output("[]");
					if (!child) {
						process.outputLine(";");
					}
					return;

				} else if (property.items.type === "object") {
					process.increaseIndent();
					process.outputLine("{");
					if (property.items.properties) {
						Object.keys(property.items.properties).forEach(propertyName => {
							this.emitProperty(process, propertyName, property.items.properties[propertyName], child);
						});
					} else if (property.items.additionalProperties) {
						process.output("{ [name: string]: ");
						this.emitProperty(process, null, property.items.additionalProperties, child);
						process.outputLine("};");
					} else {
						throw new Error("unknown items");
					}
					process.decreaseIndent();
					process.output("}[]");
					if (!child) {
						process.output(";");
						process.outputLine();
					}
					return;
				}

				console.log(property);
				throw new Error("array: " + property.type);
				break;
			default:
				console.log(property);
				throw new Error("unknown type: " + property.type);
		}

	}
}

export class Process {
	result = "";
	indentChar = " ";
	indentStep = 4;
	indent = 0;

	alreadlyIndentThisLine = false;

	output(str:string):Process {
		this.doIndent();
		this.result += str;
		return this;
	}

	outputLine(str?:string):Process {
		this.doIndent();
		if (str) {
			this.result += str;
		}
		this.result += "\n";
		this.alreadlyIndentThisLine = false;
		return this;
	}

	doIndent():Process {
		if (!this.alreadlyIndentThisLine) {
			this.result += this.getIndent();
			this.alreadlyIndentThisLine = true;
		}
		return this;
	}

	increaseIndent():Process {
		this.indent++;
		return this;
	}

	decreaseIndent():Process {
		this.indent--;
		return this;
	}

	getIndent():string {
		var indent = "";
		for (var i = 0; i < this.indent; i++) {
			indent += this.repeatString(this.indentStep, this.indentChar);
		}
		return indent;
	}

	repeatString(n:number, s:string):string {
		var result = "";
		for (var i = 0; i < n; i++) {
			result += s;
		}
		return result;
	}
}
