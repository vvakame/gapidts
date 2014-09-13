// Type definitions for Google AdSense Host API v4.1
// Project: https://developers.google.com/adsense/host/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/adsensehost
//   View and manage your AdSense host data and associated accounts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Gives AdSense Hosts access to report generation, ad code generation, and publisher management capabilities.
     */
    module adsensehost {
        var accounts: {
            /**
             * Get information about the selected associated AdSense account.
             * @params {string} accountId Account to get information about.
             */
            get: (params: {
                accountId: string;
            }) => { execute(callback: (data: IResponse<IAccount>, original: string) => void):void; };
            /**
             * List hosted accounts associated with this AdSense account by ad client id.
             * @params {string} filterAdClientId Ad clients to list accounts for.
             */
            list: (params: {
                filterAdClientId: string;
            }) => { execute(callback: (data: IResponse<IAccounts>, original: string) => void):void; };
            adclients: {
                /**
                 * Get information about one of the ad clients in the specified publisher's AdSense account.
                 * @params {string} accountId Account which contains the ad client.
                 * @params {string} adClientId Ad client to get.
                 */
                get: (params: {
                    accountId: string;
                    adClientId: string;
                }) => { execute(callback: (data: IResponse<IAdClient>, original: string) => void):void; };
                /**
                 * List all hosted ad clients in the specified hosted account.
                 * @params {string} accountId Account for which to list ad clients.
                 * @params {number} maxResults The maximum number of ad clients to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IResponse<IAdClients>, original: string) => void):void; };
            };
            adunits: {
                /**
                 * Delete the specified ad unit from the specified publisher AdSense account.
                 * @params {string} accountId Account which contains the ad unit.
                 * @params {string} adClientId Ad client for which to get ad unit.
                 * @params {string} adUnitId Ad unit to delete.
                 */
                delete: (params: {
                    accountId: string;
                    adClientId: string;
                    adUnitId: string;
                }) => { execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void; };
                /**
                 * Get the specified host ad unit in this AdSense account.
                 * @params {string} accountId Account which contains the ad unit.
                 * @params {string} adClientId Ad client for which to get ad unit.
                 * @params {string} adUnitId Ad unit to get.
                 */
                get: (params: {
                    accountId: string;
                    adClientId: string;
                    adUnitId: string;
                }) => { execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void; };
                /**
                 * Get ad code for the specified ad unit, attaching the specified host custom channels.
                 * @params {string} accountId Account which contains the ad client.
                 * @params {string} adClientId Ad client with contains the ad unit.
                 * @params {string} adUnitId Ad unit to get the code for.
                 * @params {string} hostCustomChannelId Host custom channel to attach to the ad code.
                 */
                getAdCode: (params: {
                    accountId: string;
                    adClientId: string;
                    adUnitId: string;
                    hostCustomChannelId?: string;
                }) => { execute(callback: (data: IResponse<IAdCode>, original: string) => void):void; };
                /**
                 * Insert the supplied ad unit into the specified publisher AdSense account.
                 * @params {string} accountId Account which will contain the ad unit.
                 * @params {string} adClientId Ad client into which to insert the ad unit.
                 */
                insert: (params: {
                    accountId: string;
                    adClientId: string;
                    resource?: IAdUnit;
                }) => { execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void; };
                /**
                 * List all ad units in the specified publisher's AdSense account.
                 * @params {string} accountId Account which contains the ad client.
                 * @params {string} adClientId Ad client for which to list ad units.
                 * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
                 * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    adClientId: string;
                    includeInactive?: boolean;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IResponse<IAdUnits>, original: string) => void):void; };
                /**
                 * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
                 * @params {string} accountId Account which contains the ad client.
                 * @params {string} adClientId Ad client which contains the ad unit.
                 * @params {string} adUnitId Ad unit to get.
                 */
                patch: (params: {
                    accountId: string;
                    adClientId: string;
                    adUnitId: string;
                    resource?: IAdUnit;
                }) => { execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void; };
                /**
                 * Update the supplied ad unit in the specified publisher AdSense account.
                 * @params {string} accountId Account which contains the ad client.
                 * @params {string} adClientId Ad client which contains the ad unit.
                 */
                update: (params: {
                    accountId: string;
                    adClientId: string;
                    resource?: IAdUnit;
                }) => { execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void; };
            };
            reports: {
                /**
                 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                 * @params {string} accountId Hosted account upon which to report.
                 * @params {string} dimension Dimensions to base the report on.
                 * @params {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
                 * @params {string} filter Filters to be run on the report.
                 * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
                 * @params {number} maxResults The maximum number of rows of report data to return.
                 * @params {string} metric Numeric columns to include in the report.
                 * @params {string} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
                 * @params {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
                 * @params {number} startIndex Index of the first row of report data to return.
                 */
                generate: (params: {
                    accountId: string;
                    dimension?: string;
                    endDate: string;
                    filter?: string;
                    locale?: string;
                    maxResults?: number;
                    metric?: string;
                    sort?: string;
                    startDate: string;
                    startIndex?: number;
                }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
            };
        };
        var adclients: {
            /**
             * Get information about one of the ad clients in the Host AdSense account.
             * @params {string} adClientId Ad client to get.
             */
            get: (params: {
                adClientId: string;
            }) => { execute(callback: (data: IResponse<IAdClient>, original: string) => void):void; };
            /**
             * List all host ad clients in this AdSense account.
             * @params {number} maxResults The maximum number of ad clients to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: IResponse<IAdClients>, original: string) => void):void; };
        };
        var associationsessions: {
            /**
             * Create an association session for initiating an association with an AdSense user.
             * @params {string} productCode Products to associate with the user.
             * @params {string} userLocale The preferred locale of the user.
             * @params {string} websiteLocale The locale of the user's hosted website.
             * @params {string} websiteUrl The URL of the user's hosted website.
             */
            start: (params: {
                productCode: string;
                userLocale?: string;
                websiteLocale?: string;
                websiteUrl: string;
            }) => { execute(callback: (data: IResponse<IAssociationSession>, original: string) => void):void; };
            /**
             * Verify an association session after the association callback returns from AdSense signup.
             * @params {string} token The token returned to the association callback URL.
             */
            verify: (params: {
                token: string;
            }) => { execute(callback: (data: IResponse<IAssociationSession>, original: string) => void):void; };
        };
        var customchannels: {
            /**
             * Delete a specific custom channel from the host AdSense account.
             * @params {string} adClientId Ad client from which to delete the custom channel.
             * @params {string} customChannelId Custom channel to delete.
             */
            delete: (params: {
                adClientId: string;
                customChannelId: string;
            }) => { execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void; };
            /**
             * Get a specific custom channel from the host AdSense account.
             * @params {string} adClientId Ad client from which to get the custom channel.
             * @params {string} customChannelId Custom channel to get.
             */
            get: (params: {
                adClientId: string;
                customChannelId: string;
            }) => { execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void; };
            /**
             * Add a new custom channel to the host AdSense account.
             * @params {string} adClientId Ad client to which the new custom channel will be added.
             */
            insert: (params: {
                adClientId: string;
                resource?: ICustomChannel;
            }) => { execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void; };
            /**
             * List all host custom channels in this AdSense account.
             * @params {string} adClientId Ad client for which to list custom channels.
             * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: IResponse<ICustomChannels>, original: string) => void):void; };
            /**
             * Update a custom channel in the host AdSense account. This method supports patch semantics.
             * @params {string} adClientId Ad client in which the custom channel will be updated.
             * @params {string} customChannelId Custom channel to get.
             */
            patch: (params: {
                adClientId: string;
                customChannelId: string;
                resource?: ICustomChannel;
            }) => { execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void; };
            /**
             * Update a custom channel in the host AdSense account.
             * @params {string} adClientId Ad client in which the custom channel will be updated.
             */
            update: (params: {
                adClientId: string;
                resource?: ICustomChannel;
            }) => { execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void; };
        };
        var reports: {
            /**
             * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
             * @params {string} dimension Dimensions to base the report on.
             * @params {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @params {string} filter Filters to be run on the report.
             * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
             * @params {number} maxResults The maximum number of rows of report data to return.
             * @params {string} metric Numeric columns to include in the report.
             * @params {string} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
             * @params {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @params {number} startIndex Index of the first row of report data to return.
             */
            generate: (params: {
                dimension?: string;
                endDate: string;
                filter?: string;
                locale?: string;
                maxResults?: number;
                metric?: string;
                sort?: string;
                startDate: string;
                startIndex?: number;
            }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
        };
        var urlchannels: {
            /**
             * Delete a URL channel from the host AdSense account.
             * @params {string} adClientId Ad client from which to delete the URL channel.
             * @params {string} urlChannelId URL channel to delete.
             */
            delete: (params: {
                adClientId: string;
                urlChannelId: string;
            }) => { execute(callback: (data: IResponse<IUrlChannel>, original: string) => void):void; };
            /**
             * Add a new URL channel to the host AdSense account.
             * @params {string} adClientId Ad client to which the new URL channel will be added.
             */
            insert: (params: {
                adClientId: string;
                resource?: IUrlChannel;
            }) => { execute(callback: (data: IResponse<IUrlChannel>, original: string) => void):void; };
            /**
             * List all host URL channels in the host AdSense account.
             * @params {string} adClientId Ad client for which to list URL channels.
             * @params {number} maxResults The maximum number of URL channels to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: IResponse<IUrlChannels>, original: string) => void):void; };
        };
        interface IAccount {
            /**
             * Unique identifier of this account.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#account.
             */
            kind: string;
            /**
             * Name of this account.
             */
            name: string;
            /**
             * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
             */
            status: string;
        }
        interface IAccounts {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The accounts returned in this list response.
             */
            items: IAccount[];
            /**
             * Kind of list this is, in this case adsensehost#accounts.
             */
            kind: string;
        }
        interface IAdClient {
            /**
             * Whether this ad client is opted in to ARC.
             */
            arcOptIn: boolean;
            /**
             * Unique identifier of this ad client.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#adClient.
             */
            kind: string;
            /**
             * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
             */
            productCode: string;
            /**
             * Whether this ad client supports being reported on.
             */
            supportsReporting: boolean;
        }
        interface IAdClients {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ad clients returned in this list response.
             */
            items: IAdClient[];
            /**
             * Kind of list this is, in this case adsensehost#adClients.
             */
            kind: string;
            /**
             * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IAdCode {
            /**
             * The ad code snippet.
             */
            adCode: string;
            /**
             * Kind this is, in this case adsensehost#adCode.
             */
            kind: string;
        }
        interface IAdStyle {
            /**
             * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
             */
            colors: {
                background: string;
                border: string;
                text: string;
                title: string;
                url: string;
            };
            /**
             * The style of the corners in the ad. Possible values are SQUARE, SLIGHTLY_ROUNDED and VERY_ROUNDED.
             */
            corners: string;
            /**
             * The font which is included in the style.
             */
            font: {
                family: string;
                size: string;
            };
            /**
             * Kind this is, in this case adsensehost#adStyle.
             */
            kind: string;
        }
        interface IAdUnit {
            /**
             * Identity code of this ad unit, not necessarily unique across ad clients.
             */
            code: string;
            /**
             * Settings specific to content ads (AFC) and highend mobile content ads (AFMC).
             */
            contentAdsSettings: {
                backupOption: {
                    color: string;
                    type: string;
                    url: string;
                };
                size: string;
                type: string;
            };
            /**
             * Custom style information specific to this ad unit.
             */
            customStyle: IAdStyle;
            /**
             * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#adUnit.
             */
            kind: string;
            /**
             * Settings specific to WAP mobile content ads (AFMC).
             */
            mobileContentAdsSettings: {
                markupLanguage: string;
                scriptingLanguage: string;
                size: string;
                type: string;
            };
            /**
             * Name of this ad unit.
             */
            name: string;
            /**
             * Status of this ad unit. Possible values are:
             * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
             * 
             * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
             * 
             * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
             */
            status: string;
        }
        interface IAdUnits {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ad units returned in this list response.
             */
            items: IAdUnit[];
            /**
             * Kind of list this is, in this case adsensehost#adUnits.
             */
            kind: string;
            /**
             * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IAssociationSession {
            /**
             * Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
             */
            accountId: string;
            /**
             * Unique identifier of this association session.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#associationSession.
             */
            kind: string;
            /**
             * The products to associate with the user. Options: AFC, AFF, AFS, AFMC
             */
            productCodes: string[];
            /**
             * Redirect URL of this association session. Used to redirect users into the AdSense association flow.
             */
            redirectUrl: string;
            /**
             * Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
             */
            status: string;
            /**
             * The preferred locale of the user themselves when going through the AdSense association flow.
             */
            userLocale: string;
            /**
             * The locale of the user's hosted website.
             */
            websiteLocale: string;
            /**
             * The URL of the user's hosted website.
             */
            websiteUrl: string;
        }
        interface ICustomChannel {
            /**
             * Code of this custom channel, not necessarily unique across ad clients.
             */
            code: string;
            /**
             * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#customChannel.
             */
            kind: string;
            /**
             * Name of this custom channel.
             */
            name: string;
        }
        interface ICustomChannels {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The custom channels returned in this list response.
             */
            items: ICustomChannel[];
            /**
             * Kind of list this is, in this case adsensehost#customChannels.
             */
            kind: string;
            /**
             * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IReport {
            /**
             * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
             */
            averages: string[];
            /**
             * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
             */
            headers: {
                currency: string;
                name: string;
                type: string;
            }[];
            /**
             * Kind this is, in this case adsensehost#report.
             */
            kind: string;
            /**
             * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
             */
            rows: string[][];
            /**
             * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
             */
            totalMatchedRows: string; // int64
            /**
             * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
             */
            totals: string[];
            /**
             * Any warnings associated with generation of the report.
             */
            warnings: string[];
        }
        interface IUrlChannel {
            /**
             * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsensehost#urlChannel.
             */
            kind: string;
            /**
             * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
             */
            urlPattern: string;
        }
        interface IUrlChannels {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The URL channels returned in this list response.
             */
            items: IUrlChannel[];
            /**
             * Kind of list this is, in this case adsensehost#urlChannels.
             */
            kind: string;
            /**
             * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
    }
}
