// Type definitions for Google API for Node.js library
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/vvakame/gapidts

// https://github.com/google/google-api-nodejs-client#authorizing-and-authenticating

declare module googleapis {

	module google {
		interface Options {
			proxy?: string;
			auth: google.auth.OAuth2;
		}

		function options(options:Options):void;
	}

	module google.auth {
		interface OAuth2GenerateAuthUrlParams {
			access_type: string;
			scope: any; // string (space-delimited) or string[]
		}

		interface OAuth2Credentials {
			access_token: string;
			refresh_token: string;
		}

		class OAuth2 {
			constructor(clientId:string, clientSecret:string, redirectUrl:string);

			generateAuthUrl(params:OAuth2GenerateAuthUrlParams):string;

			getToken(code: string, callback:(err:any, tokens:OAuth2Credentials)=> void):void;

			refreshAccessToken(callback:(err:any, tokens:OAuth2Credentials)=> void):void;

			setCredentials(tokens:OAuth2Credentials):void;
		}
	}

	interface IErrorResponse {
		code?: number;
		errors?: any[];
		message?: string;
	}
}
