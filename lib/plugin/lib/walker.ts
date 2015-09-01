import model = require("../../model");

import Root = require("../../api/root");
import Schema = require("../../api/schema");
import Resource = require("../../api/resource");
import Method = require("../../api/method");
import Process = require("../../process");

import IPlugin = require("./plugin");

function walk(plugin:IPlugin, process:Process, root:Root, typeOnly = false) {
	if (!plugin) {
		throw new Error("plugin parameter required");
	}

	if (plugin.init) {
		plugin.init(root);
	}
	if (plugin.emitDefinitionHeader) {
		plugin.emitDefinitionHeader(process, root);
	}
	if (plugin.emitCommonDefinition) {
		plugin.emitCommonDefinition(process, root);
	}

	if (plugin.emitTopLevelModule) {
		plugin.emitTopLevelModule(process, root, () => {
			walkDefinition(plugin, process, root, typeOnly);
		});
	} else {
		walkDefinition(plugin, process, root, typeOnly);
	}
}

function walkDefinition(plugin:IPlugin, process:Process, root:Root, typeOnly = false) {
	if(!typeOnly) {
		root.resources.forEach(resource => walkResource(plugin, process, resource));
		root.methods.forEach(method => walkMethod(plugin, process, method));
	}
	root.schemas.forEach(schema => plugin.emitType(process, schema));
}

function walkResource(plugin:IPlugin, process:Process, resource:Resource) {
	plugin.emitInnerModule(process, resource, ()=> {
		resource.methods.forEach(method => walkMethod(plugin, process, method));
		resource.resources.forEach(resource=> walkResource(plugin, process, resource));
	});
}

function walkMethod(plugin:IPlugin, process:Process, method:Method) {
	plugin.emitMethod(process, method);
}

export = walk;
