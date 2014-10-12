// Type definitions for Google API for JavaScript library
// Project: https://code.google.com/p/google-api-javascript-client/
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/vvakame/gapidts

// https://developers.google.com/api-client-library/javascript/reference/referencedocs

declare module gapi {
	module auth {
		function authorize(params:IAuthorizeParams, callback:(tokens:ITokenObject)=>void):void;

		function init(callback:(tokens:ITokenObject)=>void):void;

		function getToken():ITokenObject;

		function setToken(tokens:ITokenObject):void;

		interface IAuthorizeParams {
			client_id:string;
			immediate:boolean;
			response_type: string;
			scope: any; // string (space-delimited) or string[]
		}

		interface ITokenObject {
			access_token:string;
			error: string;
			expires_in:string;
			state:string;
		}
	}

	module client {
		function load(apiName:string, version:string, callback:()=> void):void;

		function request(args:IRequestArgs):any;

		function setApiKey(apiKey:string):void;

		interface IRequestArgs {
			path:string;
			method:string;
			params: any;
			headers:any;
			body:any;
			callback: Function;
		}

		interface IErrorResponse {
			code?: number;
			data?: any[];
			message?: string;
		}

		interface IResponse<T> extends IErrorResponse /* , T */ {
			result?: T;
			error?: IErrorResponse;
		}

		interface IPromiseResponse<T> {
			result?: T;
			body?: string;
			headers?: {[key:string]:string};
			status?: number;
			statusText?: string;
		}

		interface IPromiseErrorResponse extends IPromiseResponse<{error:IErrorResponse;}> {
		}

		interface Thenable<R> {
			then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => Thenable<U>): Thenable<U>;
			then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => U): Thenable<U>;
			then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => void): Thenable<U>;
			then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => Thenable<U>): Thenable<U>;
			then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => U): Thenable<U>;
			then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => void): Thenable<U>;
		}
	}
}
