import model = require("../model");
import utils = require("../utils");

import Process = require("../process");

class Method {
	constructor(public name:string, public base:model.IRestMethod, public inInnerModule:boolean) {
	}

	get description() {
		return this.base.description;
	}

	get parameters() {
		return this.base.parameters;
	}

	get request() {
		return this.base.request;
	}

	get response() {
		return this.base.response;
	}
}

export = Method;
