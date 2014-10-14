// Type definitions for Google CustomSearch API v1
// Project: https://developers.google.com/custom-search/v1/using_rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you search over a website or collection of websites
     */
    module customsearch {
        var cse: {
            /**
             * Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.
             * @params {string} c2coff Turns off the translation between zh-CN and zh-TW.
             * @params {string} cr Country restrict(s).
             * @params {string} cref The URL of a linked custom search engine
             * @params {string} cx The custom search engine ID to scope this search query
             * @params {string} dateRestrict Specifies all search results are from a time period
             * @params {string} exactTerms Identifies a phrase that all documents in the search results must contain
             * @params {string} excludeTerms Identifies a word or phrase that should not appear in any documents in the search results
             * @params {string} fileType Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
             * @params {string} filter Controls turning on or off the duplicate content filter.
             * @params {string} gl Geolocation of end user.
             * @params {string} googlehost The local Google domain to use to perform the search.
             * @params {string} highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
             * @params {string} hl Sets the user interface language.
             * @params {string} hq Appends the extra query terms to the query.
             * @params {string} imgColorType Returns black and white, grayscale, or color images: mono, gray, and color.
             * @params {string} imgDominantColor Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
             * @params {string} imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
             * @params {string} imgType Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
             * @params {string} linkSite Specifies that all search results should contain a link to a particular URL
             * @params {string} lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
             * @params {string} lr The language restriction for the search results
             * @params {number} num Number of search results to return
             * @params {string} orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
             * @params {string} q Query
             * @params {string} relatedSite Specifies that all search results should be pages that are related to the specified URL
             * @params {string} rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
             * @params {string} safe Search safety level
             * @params {string} searchType Specifies the search type: image.
             * @params {string} siteSearch Specifies all search results should be pages from a given site
             * @params {string} siteSearchFilter Controls whether to include or exclude results from the site named in the as_sitesearch parameter
             * @params {string} sort The sort expression to apply to the results
             * @params {number} start The index of the first result to return
             */
            list: (params: {
                c2coff?: string;
                cr?: string;
                cref?: string;
                cx?: string;
                dateRestrict?: string;
                exactTerms?: string;
                excludeTerms?: string;
                fileType?: string;
                filter?: string;
                gl?: string;
                googlehost?: string;
                highRange?: string;
                hl?: string;
                hq?: string;
                imgColorType?: string;
                imgDominantColor?: string;
                imgSize?: string;
                imgType?: string;
                linkSite?: string;
                lowRange?: string;
                lr?: string;
                num?: number;
                orTerms?: string;
                q: string;
                relatedSite?: string;
                rights?: string;
                safe?: string;
                searchType?: string;
                siteSearch?: string;
                siteSearchFilter?: string;
                sort?: string;
                start?: number;
            }) => {
                execute(callback: (data: IResponse<ISearch>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISearch>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IContext {
            facets: {
                anchor: string;
                label: string;
                label_with_op: string;
            }[][];
            title: string;
        }
        interface IPromotion {
            bodyLines: {
                htmlTitle: string;
                link: string;
                title: string;
                url: string;
            }[];
            displayLink: string;
            htmlTitle: string;
            image: {
                height: number; // int32
                source: string;
                width: number; // int32
            };
            link: string;
            title: string;
        }
        interface IQuery {
            count: number; // int32
            cr: string;
            cref: string;
            cx: string;
            dateRestrict: string;
            disableCnTwTranslation: string;
            exactTerms: string;
            excludeTerms: string;
            fileType: string;
            filter: string;
            gl: string;
            googleHost: string;
            highRange: string;
            hl: string;
            hq: string;
            imgColorType: string;
            imgDominantColor: string;
            imgSize: string;
            imgType: string;
            inputEncoding: string;
            language: string;
            linkSite: string;
            lowRange: string;
            orTerms: string;
            outputEncoding: string;
            relatedSite: string;
            rights: string;
            safe: string;
            searchTerms: string;
            searchType: string;
            siteSearch: string;
            siteSearchFilter: string;
            sort: string;
            startIndex: number; // int32
            startPage: number; // int32
            title: string;
            totalResults: string; // int64
        }
        interface IResult {
            cacheId: string;
            displayLink: string;
            fileFormat: string;
            formattedUrl: string;
            htmlFormattedUrl: string;
            htmlSnippet: string;
            htmlTitle: string;
            image: {
                byteSize: number; // int32
                contextLink: string;
                height: number; // int32
                thumbnailHeight: number; // int32
                thumbnailLink: string;
                thumbnailWidth: number; // int32
                width: number; // int32
            };
            kind: string;
            labels: {
                displayName: string;
                label_with_op: string;
                name: string;
            }[];
            link: string;
            mime: string;
            pagemap: {
                [name:string]: {
                    [name:string]: any;
                }[];
            };
            snippet: string;
            title: string;
        }
        interface ISearch {
            context: IContext;
            items: IResult[];
            kind: string;
            promotions: IPromotion[];
            queries: {
                [name:string]: IQuery[];
            };
            searchInformation: {
                formattedSearchTime: string;
                formattedTotalResults: string;
                searchTime: number; // double
                totalResults: string; // int64
            };
            spelling: {
                correctedQuery: string;
                htmlCorrectedQuery: string;
            };
            url: {
                template: string;
                type: string;
            };
        }
    }
}
