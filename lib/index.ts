/// <reference path="../typings/node/node.d.ts" />

import _model = require("./model");
import _emitter = require("./emitter");

require("source-map-support").install();

function gapidts(json:string):{ definition:string; data:_emitter.Discovery; } {
	var root:_model.IRestDescription = JSON.parse(json);
	return _emitter.emit(root);
}

module gapidts {
	export var model = _model;
	export var emitter = _emitter;
}

export = gapidts;
