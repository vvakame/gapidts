// Type definitions for Google Google App State API v1
// Project: https://developers.google.com/games/services/web/api/states
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function appstate(version:string):typeof googleapis.appstate;
}
/**
 * The Google App State API.
 */
declare module googleapis.appstate {
    var states: {
        /**
         * Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch.
         * @params {string} currentDataVersion The version of the data to be cleared. Version strings are returned by the server.
         * @params {number} stateKey The key for the data to be retrieved.
         */
        clear: (params: {
            currentDataVersion?: string;
            stateKey: number;
        }, callback: (err: IErrorResponse, response: IWriteResult, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption.
         * @params {number} stateKey The key for the data to be retrieved.
         */
        delete: (params: {
            stateKey: number;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.
         * @params {number} stateKey The key for the data to be retrieved.
         */
        get: (params: {
            stateKey: number;
        }, callback: (err: IErrorResponse, response: IGetResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all the states keys, and optionally the state data.
         * @params {boolean} includeData Whether to include the full data in addition to the version number
         */
        list: (params: {
            includeData?: boolean;
        }, callback: (err: IErrorResponse, response: IListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB.
         * @params {string} currentStateVersion The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
         * @params {number} stateKey The key for the data to be retrieved.
         */
        update: (params: {
            currentStateVersion?: string;
            stateKey: number;
            resource?: IUpdateRequest;
        }, callback: (err: IErrorResponse, response: IWriteResult, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * This is a JSON template for an app state resource.
     */
    interface IGetResponse {
        /**
         * The current app state version.
         */
        currentStateVersion: string;
        /**
         * The requested data.
         */
        data: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string appstate#getResponse.
         */
        kind: string;
        /**
         * The key for the data.
         */
        stateKey: number; // int32
    }
    /**
     * This is a JSON template to convert a list-response for app state.
     */
    interface IListResponse {
        /**
         * The app state data.
         */
        items: IGetResponse[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string appstate#listResponse.
         */
        kind: string;
        /**
         * The maximum number of keys allowed for this user.
         */
        maximumKeyCount: number; // int32
    }
    /**
     * This is a JSON template for a requests which update app state
     */
    interface IUpdateRequest {
        /**
         * The new app state data that your application is trying to update with.
         */
        data: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string appstate#updateRequest.
         */
        kind: string;
    }
    /**
     * This is a JSON template for an app state write result.
     */
    interface IWriteResult {
        /**
         * The version of the data for this key on the server.
         */
        currentStateVersion: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string appstate#writeResult.
         */
        kind: string;
        /**
         * The written key.
         */
        stateKey: number; // int32
    }
}
