// copied by discovery v1 definition.

export interface IDirectoryList {
	discoveryVersion: string;
	items: {
		description: string;
		discoveryLink: string;
		discoveryRestUrl: string;
		documentationLink: string;
		icons: {
			x16: string;
			x32: string;
		};
		id: string;
		kind: string;
		labels: string[];
		name: string;
		preferred: boolean;
		title: string;
		version: string;
	}[];
	kind: string;
}
export interface IJsonSchema {
	$ref: string;
	additionalProperties: IJsonSchema;
	annotations: {
		required: string[];
	};
	default: string;
	description: string;
	enum: string[];
	enumDescriptions: string[];
	format: string;
	id: string;
	items: IJsonSchema;
	location: string;
	maximum: string;
	minimum: string;
	pattern: string;
	properties: { [name:string]: IJsonSchema; };
	readOnly: boolean;
	repeated: boolean;
	required: boolean;
	type: string;
	variant: {
		discriminant: string;
		map: {
			$ref: string;
			type_value: string;
		}[];
	};
}
export interface IRestDescription {
	auth: {
		oauth2: {
			scopes: {
				[name:string]: {
					description: string;
				};
			};
		};
	};
	basePath: string;
	baseUrl: string;
	batchPath: string;
	canonicalName: string;
	description: string;
	discoveryVersion: string;
	documentationLink: string;
	etag: string;
	features: string[];
	icons: {
		x16: string;
		x32: string;
	};
	id: string;
	kind: string;
	labels: string[];
	methods: { [name:string]: IRestMethod; };
	name: string;
	ownerDomain: string;
	ownerName: string;
	packagePath: string;
	parameters: { [name:string]: IJsonSchema; };
	protocol: string;
	resources: { [name:string]: IRestResource; };
	revision: string;
	rootUrl: string;
	schemas: { [name:string]: IJsonSchema; };
	servicePath: string;
	title: string;
	version: string;
}
export interface IRestMethod {
	description: string;
	etagRequired: boolean;
	httpMethod: string;
	id: string;
	mediaUpload: {
		accept: string[];
		maxSize: string;
		protocols: {
			resumable: {
				multipart: boolean;
				path: string;
			};
			simple: {
				multipart: boolean;
				path: string;
			};
		};
	};
	parameterOrder: string[];
	parameters: { [name:string]: IJsonSchema; };
	path: string;
	request: {
		$ref: string;
		parameterName: string;
	};
	response: {
		$ref: string;
	};
	scopes: string[];
	supportsMediaDownload: boolean;
	supportsMediaUpload: boolean;
	supportsSubscription: boolean;
}
export interface IRestResource {
	methods: { [name:string]: IRestMethod; };
	resources: { [name:string]: IRestResource; };
}
