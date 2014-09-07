/// <reference path="../typings/node/node.d.ts" />

import _model = require("./model");
import _emitter = require("./emitter/index");

try {
	// optional
	require("source-map-support").install();
} catch (e) {
}

function gapidts(root:_model.IRestDescription):_emitter.IResult {
	if (typeof root === "string") {
		root = JSON.parse(<any>root);
	}
	return _emitter.emit(root);
}

module gapidts {
	export var model = _model;
	export var emitter = _emitter;
}

export = gapidts;
