// Type definitions for Google URL Shortener API v1
// Project: http://code.google.com/apis/urlshortener/v1/getting_started.html
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you create, inspect, and manage goo.gl short URLs
     */
    module urlshortener {
        var url: {
            /**
             * Expands a short URL or gets creation time and analytics.
             * @params {string} projection Additional information to return.
             * @params {string} shortUrl The short URL, including the protocol.
             */
            get: (params: {
                projection?: string;
                shortUrl: string;
            }) => { execute(callback: (data: IResponse<IUrl>, original: string) => void):void; };
            /**
             * Creates a new short URL.
             */
            insert: (params: {
                resource?: IUrl;
            }) => { execute(callback: (data: IResponse<IUrl>, original: string) => void):void; };
            /**
             * Retrieves a list of URLs shortened by a user.
             * @params {string} projection Additional information to return.
             * @params {string} start-token Token for requesting successive pages of results.
             */
            list: (params: {
                projection?: string;
                "start-token"?: string;
            }) => { execute(callback: (data: IResponse<IUrlHistory>, original: string) => void):void; };
        };
        interface IAnalyticsSnapshot {
            /**
             * Top browsers, e.g. "Chrome"; sorted by (descending) click counts. Only present if this data is available.
             */
            browsers: IStringCount[];
            /**
             * Top countries (expressed as country codes), e.g. "US" or "DE"; sorted by (descending) click counts. Only present if this data is available.
             */
            countries: IStringCount[];
            /**
             * Number of clicks on all goo.gl short URLs pointing to this long URL.
             */
            longUrlClicks: string; // int64
            /**
             * Top platforms or OSes, e.g. "Windows"; sorted by (descending) click counts. Only present if this data is available.
             */
            platforms: IStringCount[];
            /**
             * Top referring hosts, e.g. "www.google.com"; sorted by (descending) click counts. Only present if this data is available.
             */
            referrers: IStringCount[];
            /**
             * Number of clicks on this short URL.
             */
            shortUrlClicks: string; // int64
        }
        interface IAnalyticsSummary {
            /**
             * Click analytics over all time.
             */
            allTime: IAnalyticsSnapshot;
            /**
             * Click analytics over the last day.
             */
            day: IAnalyticsSnapshot;
            /**
             * Click analytics over the last month.
             */
            month: IAnalyticsSnapshot;
            /**
             * Click analytics over the last two hours.
             */
            twoHours: IAnalyticsSnapshot;
            /**
             * Click analytics over the last week.
             */
            week: IAnalyticsSnapshot;
        }
        interface IStringCount {
            /**
             * Number of clicks for this top entry, e.g. for this particular country or browser.
             */
            count: string; // int64
            /**
             * Label assigned to this top entry, e.g. "US" or "Chrome".
             */
            id: string;
        }
        interface IUrl {
            /**
             * A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
             */
            analytics: IAnalyticsSummary;
            /**
             * Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd'T'HH:mm:ss.SSSZZ format, e.g. "2010-10-14T19:01:24.944+00:00".
             */
            created: string;
            /**
             * Short URL, e.g. "http://goo.gl/l6MS".
             */
            id: string;
            /**
             * The fixed string "urlshortener#url".
             */
            kind: string;
            /**
             * Long URL, e.g. "http://www.google.com/". Might not be present if the status is "REMOVED".
             */
            longUrl: string;
            /**
             * Status of the target URL. Possible values: "OK", "MALWARE", "PHISHING", or "REMOVED". A URL might be marked "REMOVED" if it was flagged as spam, for example.
             */
            status: string;
        }
        interface IUrlHistory {
            /**
             * A list of URL resources.
             */
            items: IUrl[];
            /**
             * Number of items returned with each full "page" of results. Note that the last page could have fewer items than the "itemsPerPage" value.
             */
            itemsPerPage: number; // int32
            /**
             * The fixed string "urlshortener#urlHistory".
             */
            kind: string;
            /**
             * A token to provide to get the next page of results.
             */
            nextPageToken: string;
            /**
             * Total number of short URLs associated with this user (may be approximate).
             */
            totalItems: number; // int32
        }
    }
}
