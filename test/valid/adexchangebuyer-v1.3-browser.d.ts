// Type definitions for Google Ad Exchange Buyer API v1.3
// Project: https://developers.google.com/ad-exchange/buyer-rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/adexchange.buyer
//   Manage your Ad Exchange buyer account configuration

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
     */
    module adexchangebuyer {
        var accounts: {
            /**
             * Gets one account by ID.
             * @params {number} id The account id
             */
            get: (params: {
                id: number;
            }) => { execute(callback: (data: IResponse<IAccount>, original: string) => void):void; };
            /**
             * Retrieves the authenticated user's list of accounts.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IAccountsList>, original: string) => void):void; };
            /**
             * Updates an existing account. This method supports patch semantics.
             * @params {number} id The account id
             */
            patch: (params: {
                id: number;
                resource?: IAccount;
            }) => { execute(callback: (data: IResponse<IAccount>, original: string) => void):void; };
            /**
             * Updates an existing account.
             * @params {number} id The account id
             */
            update: (params: {
                id: number;
                resource?: IAccount;
            }) => { execute(callback: (data: IResponse<IAccount>, original: string) => void):void; };
        };
        var billingInfo: {
            /**
             * Returns the billing information for one account specified by account ID.
             * @params {number} accountId The account id.
             */
            get: (params: {
                accountId: number;
            }) => { execute(callback: (data: IResponse<IBillingInfo>, original: string) => void):void; };
            /**
             * Retrieves a list of billing information for all accounts of the authenticated user.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IBillingInfoList>, original: string) => void):void; };
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
            }) => { execute(callback: (data: IResponse<ICreative>, original: string) => void):void; };
            /**
             * Submit a new creative.
             */
            insert: (params: {
                resource?: ICreative;
            }) => { execute(callback: (data: IResponse<ICreative>, original: string) => void):void; };
            /**
             * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
             * @params {number} accountId When specified, only creatives for the given account ids are returned.
             * @params {string} buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
             * @params {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
             * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
             * @params {string} statusFilter When specified, only creatives having the given status are returned.
             */
            list: (params: {
                accountId?: number;
                buyerCreativeId?: string;
                maxResults?: number;
                pageToken?: string;
                statusFilter?: string;
            }) => { execute(callback: (data: IResponse<ICreativesList>, original: string) => void):void; };
        };
        var directDeals: {
            /**
             * Gets one direct deal by ID.
             * @params {string} id The direct deal id
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IResponse<IDirectDeal>, original: string) => void):void; };
            /**
             * Retrieves the authenticated user's list of direct deals.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IDirectDealsList>, original: string) => void):void; };
        };
        var performanceReport: {
            /**
             * Retrieves the authenticated user's list of performance metrics.
             * @params {string} accountId The account id to get the reports.
             * @params {string} endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
             * @params {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
             * @params {string} pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
             * @params {string} startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
             */
            list: (params: {
                accountId: string;
                endDateTime: string;
                maxResults?: number;
                pageToken?: string;
                startDateTime: string;
            }) => { execute(callback: (data: IResponse<IPerformanceReportList>, original: string) => void):void; };
        };
        var pretargetingConfig: {
            /**
             * Deletes an existing pretargeting config.
             * @params {string} accountId The account id to delete the pretargeting config for.
             * @params {string} configId The specific id of the configuration to delete.
             */
            delete: (params: {
                accountId: string;
                configId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Gets a specific pretargeting configuration
             * @params {string} accountId The account id to get the pretargeting config for.
             * @params {string} configId The specific id of the configuration to retrieve.
             */
            get: (params: {
                accountId: string;
                configId: string;
            }) => { execute(callback: (data: IResponse<IPretargetingConfig>, original: string) => void):void; };
            /**
             * Inserts a new pretargeting configuration.
             * @params {string} accountId The account id to insert the pretargeting config for.
             */
            insert: (params: {
                accountId: string;
                resource?: IPretargetingConfig;
            }) => { execute(callback: (data: IResponse<IPretargetingConfig>, original: string) => void):void; };
            /**
             * Retrieves a list of the authenticated user's pretargeting configurations.
             * @params {string} accountId The account id to get the pretargeting configs for.
             */
            list: (params: {
                accountId: string;
            }) => { execute(callback: (data: IResponse<IPretargetingConfigList>, original: string) => void):void; };
            /**
             * Updates an existing pretargeting config. This method supports patch semantics.
             * @params {string} accountId The account id to update the pretargeting config for.
             * @params {string} configId The specific id of the configuration to update.
             */
            patch: (params: {
                accountId: string;
                configId: string;
                resource?: IPretargetingConfig;
            }) => { execute(callback: (data: IResponse<IPretargetingConfig>, original: string) => void):void; };
            /**
             * Updates an existing pretargeting config.
             * @params {string} accountId The account id to update the pretargeting config for.
             * @params {string} configId The specific id of the configuration to update.
             */
            update: (params: {
                accountId: string;
                configId: string;
                resource?: IPretargetingConfig;
            }) => { execute(callback: (data: IResponse<IPretargetingConfig>, original: string) => void):void; };
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
         * The configuration data for an Ad Exchange billing info.
         */
        interface IBillingInfo {
            /**
             * Account id.
             */
            accountId: number; // int32
            /**
             * Account name.
             */
            accountName: string;
            /**
             * A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
             */
            billingId: string[];
            /**
             * Resource type.
             */
            kind: string;
        }
        /**
         * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
         */
        interface IBillingInfoList {
            /**
             * A list of billing info relevant for your account.
             */
            items: IBillingInfo[];
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
             * The filtering reasons for the creative. If this feature is not enabled, please ask your technical account manager. Read-only. This field should not be set in requests.
             */
            filteringReasons: {
                date: string;
                reasons: {
                    filteringCount: string; // int64
                    filteringStatus: number; // int32
                }[];
            };
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
        /**
         * The configuration data for an Ad Exchange direct deal.
         */
        interface IDirectDeal {
            /**
             * The account id of the buyer this deal is for.
             */
            accountId: number; // int32
            /**
             * The name of the advertiser this deal is for.
             */
            advertiser: string;
            /**
             * The currency code that applies to the fixed_cpm value. If not set then assumed to be USD.
             */
            currencyCode: string;
            /**
             * End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch.
             */
            endTime: string; // int64
            /**
             * The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price).
             */
            fixedCpm: string; // int64
            /**
             * Deal id.
             */
            id: string; // int64
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Deal name.
             */
            name: string;
            /**
             * The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction).
             */
            privateExchangeMinCpm: string; // int64
            /**
             * If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal.
             */
            publisherBlocksOverriden: boolean;
            /**
             * The name of the publisher offering this direct deal.
             */
            sellerNetwork: string;
            /**
             * Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch.
             */
            startTime: string; // int64
        }
        /**
         * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
         */
        interface IDirectDealsList {
            /**
             * A list of direct deals relevant for your account.
             */
            directDeals: IDirectDeal[];
            /**
             * Resource type.
             */
            kind: string;
        }
        /**
         * The configuration data for an Ad Exchange performance report list.
         */
        interface IPerformanceReport {
            /**
             * Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
             */
            calloutStatusRate: any[];
            /**
             * Average QPS for cookie matcher operations.
             */
            cookieMatcherStatusRate: any[];
            /**
             * Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
             */
            creativeStatusRate: any[];
            /**
             * Average QPS for hosted match operations.
             */
            hostedMatchStatusRate: any[];
            /**
             * Resource type.
             */
            kind: string;
            /**
             * The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
             */
            latency50thPercentile: number; // double
            /**
             * The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
             */
            latency85thPercentile: number; // double
            /**
             * The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
             */
            latency95thPercentile: number; // double
            /**
             * Rate of various quota account statuses per quota check.
             */
            noQuotaInRegion: number; // double
            /**
             * Rate of various quota account statuses per quota check.
             */
            outOfQuota: number; // double
            /**
             * Average QPS for pixel match requests from clients.
             */
            pixelMatchRequests: number; // double
            /**
             * Average QPS for pixel match responses from clients.
             */
            pixelMatchResponses: number; // double
            /**
             * The configured quota limits for this account.
             */
            quotaConfiguredLimit: number; // double
            /**
             * The throttled quota limits for this account.
             */
            quotaThrottledLimit: number; // double
            /**
             * The trading location of this data.
             */
            region: string;
            /**
             * The unix timestamp of the starting time of this performance data.
             */
            timestamp: string; // int64
        }
        /**
         * The configuration data for an Ad Exchange performance report list. https://sites.google.com/a/google.com/adx-integration/Home/engineering/binary-releases/rtb-api-release https://cs.corp.google.com/#piper///depot/google3/contentads/adx/tools/rtb_api/adxrtb.py
         */
        interface IPerformanceReportList {
            /**
             * Resource type.
             */
            kind: string;
            /**
             * A list of performance reports relevant for the account.
             */
            performanceReport: IPerformanceReport[];
        }
        interface IPretargetingConfig {
            /**
             * The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
             */
            billingId: string; // int64
            /**
             * The config id; generated automatically. Leave this field blank for insert requests.
             */
            configId: string; // int64
            /**
             * The name of the config. Must be unique. Required for all requests.
             */
            configName: string;
            /**
             * List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
             */
            creativeType: string[];
            /**
             * Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
             */
            dimensions: {
                height: string; // int64
                width: string; // int64
            }[];
            /**
             * Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
             */
            excludedContentLabels: string /* int64 */ [];
            /**
             * Requests containing any of these geo criteria ids will not match.
             */
            excludedGeoCriteriaIds: string /* int64 */ [];
            /**
             * Requests containing any of these placements will not match.
             */
            excludedPlacements: {
                token: string;
                type: string;
            }[];
            /**
             * Requests containing any of these users list ids will not match.
             */
            excludedUserLists: string /* int64 */ [];
            /**
             * Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
             */
            excludedVerticals: string /* int64 */ [];
            /**
             * Requests containing any of these geo criteria ids will match.
             */
            geoCriteriaIds: string /* int64 */ [];
            /**
             * Whether this config is active. Required for all requests.
             */
            isActive: boolean;
            /**
             * The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".
             */
            kind: string;
            /**
             * Request containing any of these language codes will match.
             */
            languages: string[];
            /**
             * Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
             */
            mobileCarriers: string /* int64 */ [];
            /**
             * Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
             */
            mobileDevices: string /* int64 */ [];
            /**
             * Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
             */
            mobileOperatingSystemVersions: string /* int64 */ [];
            /**
             * Requests containing any of these placements will match.
             */
            placements: {
                token: string;
                type: string;
            }[];
            /**
             * Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
             */
            platforms: string[];
            /**
             * Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
             */
            supportedCreativeAttributes: string /* int64 */ [];
            /**
             * Requests containing any of these user list ids will match.
             */
            userLists: string /* int64 */ [];
            /**
             * Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
             */
            vendorTypes: string /* int64 */ [];
            /**
             * Requests containing any of these vertical ids will match.
             */
            verticals: string /* int64 */ [];
        }
        interface IPretargetingConfigList {
            /**
             * A list of pretargeting configs
             */
            items: IPretargetingConfig[];
            /**
             * Resource type.
             */
            kind: string;
        }
    }
}
