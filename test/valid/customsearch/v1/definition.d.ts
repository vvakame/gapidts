declare module gapi.client {
    module customsearch {
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
                [name:string]: { [name:string]: any; }[];
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
