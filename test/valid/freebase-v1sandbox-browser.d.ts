// Type definitions for Google Freebase Search v1sandbox
// Project: https://developers.google.com/freebase/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Find Freebase entities using textual queries and other constraints.
     */
    module freebase {
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
        }) => {
            execute(callback: (data: IResponse<IReconcileGet>, original: string) => void):void;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<IReconcileGet>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
        };
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
        }) => {
            execute(callback: (data:any, original: string) => void):void;// void
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
            then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
        };
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
}
