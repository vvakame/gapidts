// Type definitions for Google Freebase Search v1-sandbox
// Project: https://developers.google.com/freebase/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function freebase(version:string):typeof googleapis.freebase;
    function freebase(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.freebase;
}
/**
 * Find Freebase entities using textual queries and other constraints.
 */
declare module googleapis.freebase {
    /**
     * Reconcile entities to Freebase open data.
     * @params {number} confidence Required confidence for a candidate to match. Must be between .5 and 1.0
     * @params {string} kind Classifications of entity e.g. type, category, title.
     * @params {string} lang Languages for names and values. First language is used for display. Default is 'en'.
     * @params {number} limit Maximum number of candidates to return.
     * @params {string} name Name of entity.
     * @params {string} prop Property values for entity formatted as
:
     */
    var reconcile: (params: {
        confidence?: number;
        kind?: string;
        lang?: string;
        limit?: number;
        name?: string;
        prop?: string;
        key?: string; // API_KEY
        auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
    }, callback: (err: IErrorResponse, response: IReconcileGet, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    /**
     * Search Freebase open data.
     * @params {string} as_of_time A mql as_of_time value to use with mql_output queries.
     * @params {string} callback JS method name for JSONP callbacks.
     * @params {number} cursor The cursor value to use for the next page of results.
     * @params {string} domain Restrict to topics with this Freebase domain id.
     * @params {string} encode The encoding of the response. You can use this parameter to enable html encoding.
     * @params {boolean} exact Query on exact name and keys only.
     * @params {string} filter A filter to apply to the query.
     * @params {string} format Structural format of the json response.
     * @params {string} help The keyword to request help on.
     * @params {boolean} indent Whether to indent the json results or not.
     * @params {string} lang The code of the language to run the query with. Default is 'en'.
     * @params {number} limit Maximum number of results to return.
     * @params {string} mid A mid to use instead of a query.
     * @params {string} mql_output The MQL query to run againist the results to extract more data.
     * @params {string} output An output expression to request data from matches.
     * @params {boolean} prefixed Prefix match against names and aliases.
     * @params {string} query Query term to search for.
     * @params {string} scoring Relevance scoring algorithm to use.
     * @params {string} spell Request 'did you mean' suggestions
     * @params {boolean} stemmed Query on stemmed names and aliases. May not be used with prefixed.
     * @params {string} type Restrict to topics with this Freebase type id.
     * @params {string} with A rule to match against.
     * @params {string} without A rule to not match against.
     */
    var search: (params: {
        as_of_time?: string;
        callback?: string;
        cursor?: number;
        domain?: string;
        encode?: string;
        exact?: boolean;
        filter?: string;
        format?: string;
        help?: string;
        indent?: boolean;
        lang?: string;
        limit?: number;
        mid?: string;
        mql_output?: string;
        output?: string;
        prefixed?: boolean;
        query?: string;
        scoring?: string;
        spell?: string;
        stemmed?: boolean;
        type?: string;
        with?: string;
        without?: string;
        key?: string; // API_KEY
        auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
    }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    interface IReconcileCandidate {
        /**
         * Percentage likelihood that this candidate is the unique matching entity. Value will be between 0.0 and 1.0
         */
        confidence: number; // float
        /**
         * Language code that candidate and notable names are displayed in.
         */
        lang: string;
        /**
         * Freebase MID of candidate entity.
         */
        mid: string;
        /**
         * Freebase name of matching entity in specified language.
         */
        name: string;
        /**
         * Type or profession the candidate is notable for.
         */
        notable: {
            id: string;
            name: string;
        };
    }
    interface IReconcileGet {
        /**
         * If filled, then the listed candidates are potential matches, and such should be evaluated by a more discerning algorithm or human. The matches are ordered by confidence.
         */
        candidate: IReconcileCandidate[];
        /**
         * Server costs for reconciling.
         */
        costs: {
            hits: number; // int32
            ms: number; // int32
        };
        /**
         * If filled, this entity is guaranteed to match at requested confidence probability (default 99%).
         */
        match: IReconcileCandidate;
        /**
         * If filled, then there were recoverable problems that affected the request. For example, some of the properties were ignored because they either are not valid Freebase predicates or are not indexed for reconciliation. The candidates returned should be considered valid results, with the caveat that sections of the request were ignored as specified by the warning text.
         */
        warning: {
            location: string;
            message: string;
            reason: string;
        }[];
    }
}
