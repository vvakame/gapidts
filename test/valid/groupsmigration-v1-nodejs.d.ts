// Type definitions for Google Groups Migration API v1
// Project: https://developers.google.com/google-apps/groups-migration/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function groupsmigration(version:string):typeof googleapis.groupsmigration;
    function groupsmigration(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.groupsmigration;
}
/**
 * Groups Migration Api.
 */
declare module googleapis.groupsmigration {
    var archive: {
        /**
         * Inserts a new mail into the archive of the Google group.
         * @params {string} groupId The group ID
         */
        insert: (params: {
            groupId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IGroups, incomingMessage: any /* http.IncomingMessage */) => void) => void;
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
