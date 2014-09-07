import model = require("../model");

class Process {
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

export = Process;
