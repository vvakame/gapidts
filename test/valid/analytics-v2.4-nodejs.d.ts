// Type definitions for Google Google Analytics API v2.4
// Project: https://developers.google.com/analytics/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function analytics(version:string):typeof googleapis.analytics;
    function analytics(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.analytics;
}
/**
 * View and manage your Google Analytics data
 */
declare module googleapis.analytics {
    var data: {
        /**
         * Returns Analytics report data for a view (profile).
         * @params {string} dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
         * @params {string} end-date End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
         * @params {string} filters A comma-separated list of dimension or metric filters to be applied to the report data.
         * @params {string} ids Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
         * @params {number} max-results The maximum number of entries to include in this feed.
         * @params {string} metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
         * @params {string} segment An Analytics advanced segment to be applied to the report data.
         * @params {string} sort A comma-separated list of dimensions or metrics that determine the sort order for the report data.
         * @params {string} start-date Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
         * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
         */
        get: (params: {
            dimensions?: string;
            "end-date": string;
            filters?: string;
            ids: string;
            "max-results"?: number;
            metrics: string;
            segment?: string;
            sort?: string;
            "start-date": string;
            "start-index"?: number;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var management: {
        accounts: {
            /**
             * Lists all accounts to which the user has access.
             * @params {number} max-results The maximum number of accounts to include in this response.
             * @params {number} start-index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
             */
            list: (params: {
                "max-results"?: number;
                "start-index"?: number;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        };
        goals: {
            /**
             * Lists goals to which the user has access.
             * @params {string} accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
             * @params {number} max-results The maximum number of goals to include in this response.
             * @params {string} profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
             * @params {number} start-index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
             * @params {string} webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
             */
            list: (params: {
                accountId: string;
                "max-results"?: number;
                profileId: string;
                "start-index"?: number;
                webPropertyId: string;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        };
        profiles: {
            /**
             * Lists views (profiles) to which the user has access.
             * @params {string} accountId Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
             * @params {number} max-results The maximum number of views (profiles) to include in this response.
             * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
             * @params {string} webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
             */
            list: (params: {
                accountId: string;
                "max-results"?: number;
                "start-index"?: number;
                webPropertyId: string;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        };
        segments: {
            /**
             * Lists advanced segments to which the user has access.
             * @params {number} max-results The maximum number of advanced segments to include in this response.
             * @params {number} start-index An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
             */
            list: (params: {
                "max-results"?: number;
                "start-index"?: number;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        };
        webproperties: {
            /**
             * Lists web properties to which the user has access.
             * @params {string} accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
             * @params {number} max-results The maximum number of web properties to include in this response.
             * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
             */
            list: (params: {
                accountId: string;
                "max-results"?: number;
                "start-index"?: number;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        };
    };
}
