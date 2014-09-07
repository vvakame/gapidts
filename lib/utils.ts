export function toTSType(type:string, debugSource?:any) {
	switch (type) {
		case "string":
			return "string";
		case "integer":
		case "number":
			return "number";
		case "boolean":
			return "boolean";
		default :
			if (debugSource) {
				console.error(debugSource);
			}
			throw new Error("unknown type: " + type);
	}
}
