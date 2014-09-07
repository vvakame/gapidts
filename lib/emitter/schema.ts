import model = require("../model");

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
			process.output("interface I").output(this.name).output(" extends Array<");
			if (this.base.items.$ref) {
				process.output("I").output(this.base.items.$ref);
			} else {
				switch (this.base.items.type) {
					case "number":
						process.output("number");
						break;
					case "string":
						process.output("string");
						break;
					case "object":
						if (this.base.items.properties) {
							process.increaseIndent();
							process.outputLine("{");
							Object.keys(this.base.items.properties).forEach(propertyName => {
								this.emitProperty(process, propertyName, this.base.items.properties[propertyName], false);
							});
							process.decreaseIndent();
							process.output("}");
						}
						break;

					default :
						console.log(this.base.items);
						throw new Error("unknown type: " + this.base.items.type);
				}
				if (this.base.items.format) {
					process.output(" /* ").output(this.base.items.format).output(" */");
				}
			}
			process.outputLine("> {");
			process.outputLine("}");
			return;
		}
		process.output("interface I").output(this.name).outputLine(" {");
		process.increaseIndent();

		if (this.base.type === "any") {
			process.outputLine("// any");
		}

		Object.keys(this.base.properties || {}).forEach(propertyName=> {
			process.outputJSDoc(this.base.properties[propertyName].description);
			this.emitProperty(process, propertyName, this.base.properties[propertyName]);
		});

		process.decreaseIndent();
		process.outputLine("}");
	}

	emitProperty(process:Process, name:string, property:model.IJsonSchema, child = false):void {
		if (name) {
			if (name.indexOf("-") !== -1 || name.indexOf(".") !== -1) {
				process.output("\"").output(name).output("\": ");
			} else {
				process.output(name).output(": ");
			}
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
				process.output("string");
				if (!child) {
					process.output(";");
					if (property.format) {
						process.output(" // ").output(property.format);
					}
					process.outputLine();
				} else {
					if (property.format) {
						process.output(" /* ").output(property.format).output(" */");
					}
				}
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

					} else if (property.additionalProperties.type === "number") {
						process.output("{ [name:string]: number");
						if (property.additionalProperties.format) {
							process.output(" /* ").output(property.additionalProperties.format).output(" */");
						}
						process.output("; }");
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

				} else if (property.items.type === "integer" || property.items.type === "number") {
					process.output("number[]");
					if (!child) {
						process.output(";");
						if (property.items.format) {
							process.output(" /* ").output(property.items.format).output(" */ ");
						}
						process.outputLine();
					}
					return;

				} else if (property.items.type === "any") {
					process.output("any[]");
					if (!child) {
						process.output(";");
						if (property.items.format) {
							process.output(" /* ").output(property.items.format).output(" */ ");
						}
						process.outputLine();
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
							this.emitProperty(process, propertyName, property.items.properties[propertyName], false);
						});
					} else if (property.items.additionalProperties) {
						process.output("[name: string]: ");
						this.emitProperty(process, null, property.items.additionalProperties, true);
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

export = Schema;
