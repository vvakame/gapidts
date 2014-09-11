// Type definitions for Google API for JavaScript library
// Project: https://code.google.com/p/google-api-javascript-client/
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
	function load(apiName:string, version:string, callback:()=> void):void;

	interface IErrorResponse {
		code?: number;
		data?: any[];
		message?: string;
	}

	interface IResponse<T> extends IErrorResponse /* , T */ {
		result?: T;
		error?: IErrorResponse;
	}
}
