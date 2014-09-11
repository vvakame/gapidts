// Type definitions for Google Ad Exchange Buyer API v1.2
// Project: https://developers.google.com/ad-exchange/buyer-rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function adexchangebuyer(version:string):typeof googleapis.adexchangebuyer;
}
/**
 * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
 */
declare module googleapis.adexchangebuyer {
    var accounts: {
        /**
         * Gets one account by ID.
         * @params {number} id The account id
         */
        get: (params: {
            id: number;
        }, callback: (err: any, response: IAccount) => void) => void;
        /**
         * Retrieves the authenticated user's list of accounts.
         */
        list: (params: {
        }, callback: (err: any, response: IAccountsList) => void) => void;
        /**
         * Updates an existing account. This method supports patch semantics.
         * @params {number} id The account id
         */
        patch: (params: {
            id: number;
            resource?: IAccount;
        }, callback: (err: any, response: IAccount) => void) => void;
        /**
         * Updates an existing account.
         * @params {number} id The account id
         */
        update: (params: {
            id: number;
            resource?: IAccount;
        }, callback: (err: any, response: IAccount) => void) => void;
    };
    var creatives: {
        /**
         * Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
         * @params {number} accountId The id for the account that will serve this creative.
         * @params {string} buyerCreativeId The buyer-specific id for this creative.
         */
        get: (params: {
            accountId: number;
            buyerCreativeId: string;
        }, callback: (err: any, response: ICreative) => void) => void;
        /**
         * Submit a new creative.
         */
        insert: (params: {
            resource?: ICreative;
        }, callback: (err: any, response: ICreative) => void) => void;
        /**
         * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
         * @params {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
         * @params {string} statusFilter When specified, only creatives having the given status are returned.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            statusFilter?: string;
        }, callback: (err: any, response: ICreativesList) => void) => void;
    };
    /**
     * Configuration data for an Ad Exchange buyer account.
     */
    interface IAccount {
        /**
         * Your bidder locations that have distinct URLs.
         */
        bidderLocation: {
            maximumQps: number; // int32
            region: string;
            url: string;
        }[];
        /**
         * The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
         */
        cookieMatchingNid: string;
        /**
         * The base URL used in cookie match requests.
         */
        cookieMatchingUrl: string;
        /**
         * Account id.
         */
        id: number; // int32
        /**
         * Resource type.
         */
        kind: string;
        /**
         * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
         */
        maximumTotalQps: number; // int32
    }
    /**
     * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
     */
    interface IAccountsList {
        /**
         * A list of accounts.
         */
        items: IAccount[];
        /**
         * Resource type.
         */
        kind: string;
    }
    /**
     * A creative and its classification data.
     */
    interface ICreative {
        /**
         * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
         */
        HTMLSnippet: string;
        /**
         * Account id.
         */
        accountId: number; // int32
        /**
         * Detected advertiser id, if any. Read-only. This field should not be set in requests.
         */
        advertiserId: string /* int64 */ [];
        /**
         * The name of the company being advertised in the creative.
         */
        advertiserName: string;
        /**
         * The agency id for this creative.
         */
        agencyId: string; // int64
        /**
         * All attributes for the ads that may be shown from this snippet.
         */
        attribute: number /* int32 */ [];
        /**
         * A buyer-specific id identifying the creative in this ad.
         */
        buyerCreativeId: string;
        /**
         * The set of destination urls for the snippet.
         */
        clickThroughUrl: string[];
        /**
         * Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
         */
        corrections: {
            details: string[];
            reason: string;
        }[];
        /**
         * The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
         */
        disapprovalReasons: {
            details: string[];
            reason: string;
        }[];
        /**
         * Ad height.
         */
        height: number; // int32
        /**
         * Resource type.
         */
        kind: string;
        /**
         * Detected product categories, if any. Read-only. This field should not be set in requests.
         */
        productCategories: number /* int32 */ [];
        /**
         * All restricted categories for the ads that may be shown from this snippet.
         */
        restrictedCategories: number /* int32 */ [];
        /**
         * Detected sensitive categories, if any. Read-only. This field should not be set in requests.
         */
        sensitiveCategories: number /* int32 */ [];
        /**
         * Creative serving status. Read-only. This field should not be set in requests.
         */
        status: string;
        /**
         * All vendor types for the ads that may be shown from this snippet.
         */
        vendorType: number /* int32 */ [];
        /**
         * The url to fetch a video ad. If set, HTMLSnippet should not be set.
         */
        videoURL: string;
        /**
         * Ad width.
         */
        width: number; // int32
    }
    /**
     * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
     */
    interface ICreativesList {
        /**
         * A list of creatives.
         */
        items: ICreative[];
        /**
         * Resource type.
         */
        kind: string;
        /**
         * Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
}
