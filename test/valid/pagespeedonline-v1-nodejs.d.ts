// Type definitions for Google PageSpeed Insights API v1
// Project: https://developers.google.com/speed/docs/insights/v1/getting_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function pagespeedonline(version:string):typeof googleapis.pagespeedonline;
    function pagespeedonline(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.pagespeedonline;
}
/**
 * Lets you analyze the performance of a web page and get tailored suggestions to make that page faster.
 */
declare module googleapis.pagespeedonline {
    var pagespeedapi: {
        /**
         * Runs Page Speed analysis on the page at the specified URL, and returns a Page Speed score, a list of suggestions to make that page faster, and other information.
         * @params {boolean} filter_third_party_resources Indicates if third party resources should be filtered out before PageSpeed analysis.
         * @params {string} locale The locale used to localize formatted results
         * @params {string} rule A Page Speed rule to run; if none are given, all rules are run
         * @params {boolean} screenshot Indicates if binary data containing a screenshot should be included
         * @params {string} strategy The analysis strategy to use
         * @params {string} url The URL to fetch and analyze
         */
        runpagespeed: (params: {
            filter_third_party_resources?: boolean;
            locale?: string;
            rule?: string;
            screenshot?: boolean;
            strategy?: string;
            url: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IResult, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IResult {
        /**
         * Localized Page Speed results. Contains a ruleResults entry for each Page Speed rule instantiated and run by the server.
         */
        formattedResults: {
            locale: string;
            ruleResults: {
                [name:string]: {
                    localizedRuleName: string;
                    ruleImpact: number; // double
                    urlBlocks: {
                        header: {
                            args: {
                                type: string;
                                value: string;
                            }[];
                            format: string;
                        };
                        urls: {
                            details: {
                                args: {
                                    type: string;
                                    value: string;
                                }[];
                                format: string;
                            }[];
                            result: {
                                args: {
                                    type: string;
                                    value: string;
                                }[];
                                format: string;
                            };
                        }[];
                    }[];
                };
            };
        };
        /**
         * Canonicalized and final URL for the document, after following page redirects (if any).
         */
        id: string;
        /**
         * List of rules that were specified in the request, but which the server did not know how to instantiate.
         */
        invalidRules: string[];
        /**
         * Kind of result.
         */
        kind: string;
        /**
         * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
         */
        pageStats: {
            cssResponseBytes: string; // int64
            flashResponseBytes: string; // int64
            htmlResponseBytes: string; // int64
            imageResponseBytes: string; // int64
            javascriptResponseBytes: string; // int64
            numberCssResources: number; // int32
            numberHosts: number; // int32
            numberJsResources: number; // int32
            numberResources: number; // int32
            numberStaticResources: number; // int32
            otherResponseBytes: string; // int64
            textResponseBytes: string; // int64
            totalRequestBytes: string; // int64
        };
        /**
         * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
         */
        responseCode: number; // int32
        /**
         * The Page Speed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
         */
        score: number; // int32
        /**
         * Base64 encoded screenshot of the page that was analyzed.
         */
        screenshot: {
            data: string; // byte
            height: number; // int32
            mime_type: string;
            width: number; // int32
        };
        /**
         * Title of the page, as displayed in the browser's title bar.
         */
        title: string;
        /**
         * The version of the Page Speed SDK used to generate these results.
         */
        version: {
            major: number; // int32
            minor: number; // int32
        };
    }
}
