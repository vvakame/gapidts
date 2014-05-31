/// <reference path="../typings/node/node.d.ts" />

import fs = require("fs");
import path = require("path");

export function mkdirp(dirname:string) {
	if (fs.existsSync(dirname)) {
		return;
	}
	var parent = path.dirname(dirname);
	if (!fs.existsSync(parent)) {
		mkdirp(parent);
	}
	fs.mkdirSync(dirname);
}
