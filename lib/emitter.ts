import model = require("./model");

export function emit(root:model.IRestDescription):{ definition:string; data:Discovery; } {

	var api = new Discovery(root);
	var process = new Process();
	api.emit(process);

	return {
		definition: process.toDefinition(),
		data: api
	};
}

export class Discovery {
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
		process.outputLine("declare module gapi.client {");
		process.increaseIndent();
		process.outputJSDoc(this.base.description);
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

	constructor(public name:string, public base:model.IRestResource) {
		this.methods = Object.keys(base.methods || []).map(methodName=> {
			return new Method(methodName, base.methods[methodName]);
		});
	}

	emit(process:Process):void {
		// note: why var? if API has "delete" method. it can't contains to module.
		process.output("var ").output(this.name).output(": {").outputLine();
		process.increaseIndent();

		this.methods.forEach(method=> {
			method.emit(process);
		});

		process.decreaseIndent();
		process.outputLine("};");
	}
}

export class Method {
	constructor(public name:string, public base:model.IRestMethod) {
	}

	emit(process:Process):void {
		process.outputJSDoc(this.base.description, this.base.parameters);
		process.output(this.name).output(": (");

		if (this.base.parameters) {
			var parameterNames = Object.keys(this.base.parameters);
			if (parameterNames.length !== 0) {
				process.outputLine("params: {");
				process.increaseIndent();
				parameterNames.forEach(parameterName=> {
					var parameter = this.base.parameters[parameterName];
					if (/\-/.test(parameterName)) {
						process.output("\"").output(parameterName).output("\"");
					} else {
						process.output(parameterName);
					}
					if (!parameter.required) {
						process.output("?");
					}
					process.output(": ");
					switch (parameter.type) {
						case "string":
							process.output("string");
							break;
						case "integer":
						case "number":
							process.output("number");
							break;
						case "boolean":
							process.output("boolean");
							break;
						default :
							console.log(this.base);
							throw new Error("unknown type");
					}
					process.outputLine(";");
				});
				process.decreaseIndent();
				process.output("}");
			}
		}

		process.output(") => ");
		process.output("{ execute(callback: (data:any, original: string) => void):void; }; // ");
		if (!this.base.response) {
			process.outputLine("void");
		} else if (this.base.response.$ref) {
			process.output("I").output(this.base.response.$ref).outputLine();
		} else {
			console.log(this.base);
			throw new Error("unknown response");
		}
	}
}

export class Schema {
	constructor(public name:string, public base:model.IJsonSchema) {
		if (base.type !== "object") {
			throw base;
		}
	}

	emit(process:Process):void {
		process.outputJSDoc(this.base.description);
		process.output("interface I").output(this.name).outputLine(" {");
		process.increaseIndent();

		Object.keys(this.base.properties).forEach(propertyName=> {
			process.outputJSDoc(this.base.properties[propertyName].description);
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
	indentChar = " ";
	indentStep = 4;
	indent = 0;

	_result = "";
	_alreadlyIndentThisLine = false;

	output(str:string):Process {
		this.doIndent();
		this._result += str;
		return this;
	}

	outputLine(str?:string):Process {
		this.doIndent();
		if (str) {
			this._result += str;
		}
		this._result += "\n";
		this._alreadlyIndentThisLine = false;
		return this;
	}

	outputJSDoc(description:string, parameters:{ [name:string]: model.IJsonSchema; } = {}):Process {
		if (!description && Object.keys(parameters).length === 0) {
			return;
		}
		description = description || "";

		this.outputLine("/**");
		description.split("\n").forEach(line => {
			this.output(" * ").outputLine(line);
		});
		Object.keys(parameters).forEach(parameterKey => {
			var parameter = parameters[parameterKey];
			// TODO type doc
			this.output(" * @params {");
			switch (parameter.type) {
				case "string":
					this.output("string");
					break;
				case "integer":
				case "number":
					this.output("number");
					break;
				case "boolean":
					this.output("boolean");
					break;
				default :
					console.log(parameter);
					throw new Error("unknown type");
			}

			this.output("} ").output(parameterKey).output(" ").outputLine(parameter.description);
		});
		this.outputLine(" */");
		return this;
	}

	doIndent():Process {
		if (!this._alreadlyIndentThisLine) {
			this._result += this.getIndent();
			this._alreadlyIndentThisLine = true;
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

	toDefinition():string {
		return this._result;
	}
}
