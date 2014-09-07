import model = require("../model");

class Process {

	targets = ["browser", "nodejs"];

	indentChar = " ";
	indentStep = 4;
	indent = 0;

	_results:{ [target:string]:string} = {};
	_result = "";
	_alreadlyIndentThisLine = false;

	constructor() {
		this.targets.forEach(target=> {
			this._results[target] = "";
		});
	}

	output(str:string):Process {
		this.doIndent();
		this.targets.forEach(target=> {
			this._results[target] += str;
		});
		return this;
	}

	outputKey(name:string):Process {
		if (name.indexOf("-") !== -1 || name.indexOf(".") !== -1) {
			this.output("\"").output(name).output("\"");
		} else {
			this.output(name);
		}
		return this;
	}

	outputBrowser(str:string):Process {
		this.doIndent();
		this._results["browser"] += str;
		return this;
	}

	outputNodeJS(str:string):Process {
		this.doIndent();
		this._results["nodejs"] += str;
		return this;
	}

	outputLine(str?:string):Process {
		this.doIndent();
		if (str) {
			this.output(str);
		}
		this.output("\n");
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
			var indent = this.getIndent();
			this.targets.forEach(target=> {
				this._results[target] += indent;
			});
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

	toDefinition(target = "browser"):string {
		if (this.targets.indexOf(target) === -1) {
			throw new Error("unknown target: " + target);
		}
		return this._results[target];
	}
}

export = Process;
