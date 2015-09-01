/// <reference path="../typings/node/node.d.ts" />

import _model = require("./model");
_model;
import _emitter = require("./emitter");

try {
	// optional
	require("source-map-support").install();
} catch (e) {
}

function gapidts(root:_model.IRestDescription, typeOnly = false):_emitter.IResult {
	if (typeof root === "string") {
		root = JSON.parse(<any>root);
	}
	return _emitter.emit(root, typeOnly);
}

module gapidts {
	export import model = _model;
	export import emitter = _emitter;
}

export = gapidts;
