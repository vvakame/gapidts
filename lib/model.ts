export interface IRoot {
	kind: string;
	etag: string;
	discoveryVersion: string;
	id: string;
	name: string;
	version: string;
	title: string;
	description: string;
	ownerDomain:string;
	ownerName: string;
	icons: {
		x16: string;
		x32: string;
	};
	documentationLink: string;
	protocol: string;
	baseUrl: string;
	basePath: string;
	rootUrl: string;
	servicePath: string;
	batchPath: string;
	parameters: {
		alt:IParameter;
		key:IParameter;
		oauth_token:IParameter; // access_token?
		prettyPrint:IParameter;
		quotaUser:IParameter;
		userIp:IParameter;
		[index:string]: IParameter;
	};
	auth: {
		oauth2: {
			scopes: { [url:string]: {description:string; }; };
		};
	};
	schemas: {
		[name:string]:ISchema;
	};
	resources: {
		[name:string]:IResource;
	};
}

export interface IParameter {
	type:string;
	description:string;
	location?:string;
	default?:string;
	enum?:string[];
	enumDescriptions?:string[];
	// schemas only?
	$ref?:string;
	properties?:any;
	items?:any; // TODO
	additionalProperties?:any; // TODO
	// resources only?
	required?:boolean;
	format?:string;
	minimum?:string;
	maximum?:string;
}

export interface ISchema {
	id: string;
	type: string;
	properties:{
		[propertyName:string]:IParameter;
	};
}

export interface IResource {
	methods: {
		[method:string]: IMethod;
	};
}

export interface IMethod {
	id:string;
	path:string;
	httpMethod:string;
	description:string;
	parameters: IParameter;
	parameterOrder:string[];
	request?:{
		"$ref":string;
		[label:string]:string;
	};
	response:{
		"$ref":string;
		[label:string]:string;
	};
	scopes:string[];
}