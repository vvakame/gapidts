/// <reference path="../typings/node/node.d.ts" />

import _model = require("./model");
import _emitter = require("./emitter/index");

try {
	// optional
	require("source-map-support").install();
} catch (e) {
}

function gapidts(json:string):_emitter.IResult {
	var root:_model.IRestDescription = JSON.parse(json);
	return _emitter.emit(root);
}

module gapidts {
	export var model = _model;
	export var emitter = _emitter;
}

export = gapidts;
