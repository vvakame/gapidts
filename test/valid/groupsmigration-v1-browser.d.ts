// Type definitions for Google Groups Migration API v1
// Project: https://developers.google.com/google-apps/groups-migration/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Groups Migration Api.
     */
    module groupsmigration {
        var archive: {
            /**
             * Inserts a new mail into the archive of the Google group.
             * @params {string} groupId The group ID
             */
            insert: (params: {
                groupId: string;
            }) => {
                execute(callback: (data: IResponse<IGroups>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGroups>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        /**
         * JSON response template for groups migration API.
         */
        interface IGroups {
            /**
             * The kind of insert resource this is.
             */
            kind: string;
            /**
             * The status of the insert request.
             */
            responseCode: string;
        }
    }
}
