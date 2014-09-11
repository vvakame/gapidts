import model = require("../model");

class Process {

	targets = ["browser", "nodejs"];

	indentChar = " ";
	indentStep = 4;

	indent:{ [target: string]: number;} = {};

	_results:{ [target:string]:string; } = {};
	_alreadlyIndentThisLine:{ [target:string]:boolean; } = {};

	constructor() {
		this.targets.forEach(target=> {
			this.indent[target] = 0;
			this._results[target] = "";
			this._alreadlyIndentThisLine[target] = false;
		});
	}

	output(str:string):Process {
		this.targets.forEach(target=> {
			this.doIndent(target);
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
		this.doIndent("browser");
		this._results["browser"] += str;
		return this;
	}

	outputNodeJS(str:string):Process {
		this.doIndent("nodejs");
		this._results["nodejs"] += str;
		return this;
	}

	outputLine(str?:string):Process {
		this.targets.forEach(target=> {
			this.doIndent(target);
		});
		if (str) {
			this.output(str);
		}
		this.output("\n");
		this.targets.forEach(target=> {
			this._alreadlyIndentThisLine[target] = false;
		});
		return this;
	}

	outputLineBrowser(str?:string):Process {
		this.doIndent("browser");
		if (str) {
			this.outputBrowser(str);
		}
		this.outputBrowser("\n");
		this._alreadlyIndentThisLine["browser"] = false;
		return this;
	}

	outputLineNodeJS(str?:string):Process {
		this.doIndent("nodejs");
		if (str) {
			this.outputNodeJS(str);
		}
		this.outputNodeJS("\n");
		this._alreadlyIndentThisLine["nodejs"] = false;
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

	doIndent(target:string):Process {
		if (!this._alreadlyIndentThisLine[target]) {
			var indent = this.getIndent(target);
			this._results[target] += indent;
			this._alreadlyIndentThisLine[target] = true;
		}
		return this;
	}

	increaseIndent():Process {
		this.targets.forEach(target=> {
			this.indent[target]++;
		});
		return this;
	}

	increaseIndentBrowser():Process {
		this.indent["browser"]++;
		return this;
	}

	increaseIndentNodeJS():Process {
		this.indent["nodejs"]++;
		return this;
	}

	decreaseIndent():Process {
		this.targets.forEach(target=> {
			this.indent[target]--;
		});
		return this;
	}

	decreaseIndentBrowser():Process {
		this.indent["browser"]--;
		return this;
	}

	decreaseIndentNodeJS():Process {
		this.indent["nodejs"]--;
		return this;
	}

	getIndent(target:string):string {
		var indent = "";
		for (var i = 0; i < this.indent[target]; i++) {
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
