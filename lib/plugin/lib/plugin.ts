import Root = require("../../api/root");
import Schema = require("../../api/schema");
import Resource = require("../../api/resource");
import Method = require("../../api/method");
import Process = require("../../process");

interface IPlugin {
	init?(root:Root): void;

	emitDefinitionHeader?(process:Process, root:Root): void;

	emitCommonDefinition?(process:Process, root:Root) : void;

	emitTopLevelModule?(process:Process, root:Root, resume:()=> void) : void;

	emitInnerModule(process:Process, resource:Resource, resume:()=>void): void;

	emitMethod(process:Process, method:Method): void;

	emitType(process:Process, type:Schema): void;
}

export = IPlugin;
