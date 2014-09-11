// Type definitions for Google API for Node.js library
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/vvakame/gapidts

declare module googleapis {
	interface IErrorResponse {
		code?: number;
		errors?: any[];
		message?: string;
	}
}
