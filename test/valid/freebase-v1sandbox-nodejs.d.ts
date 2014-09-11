// Type definitions for Google Freebase Search v1sandbox
// Project: https://developers.google.com/freebase/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function freebase(version:string):typeof googleapis.freebase;
}
/**
 * Find Freebase entities using textual queries and other constraints.
 */
declare module googleapis.freebase {
    var _tmp: {};
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
