import model = require("../model");
import utils = require("../utils");

import Process = require("../process");

class Schema {
	constructor(public name:string, public base:model.IJsonSchema) {
		if (base.type !== "object" && base.type !== "any" && base.type !== "array") {
			console.error(base);
			throw new Error("unknown type: " + base.type);
		}
	}

	get description() {
		return this.base.description;
	}

	get type() {
		return this.base.type;
	}

	get properties() {
		return this.base.properties;
	}

	get items() {
		return this.base.items;
	}
}

export = Schema;
