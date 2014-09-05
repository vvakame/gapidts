/// <reference path="../typings/node/node.d.ts" />

import model = require("./model");
import emitter = require("./emitter");

require("source-map-support").install();

function gapidts(json:string):{ definition:string; data:emitter.Discovery; } {
	var root:model.IRestDescription = JSON.parse(json);
	return emitter.emit(root);
}

export = gapidts;
