// Type definitions for Google YouTube Analytics API v1beta1
// Project: http://developers.google.com/youtube/analytics/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/yt-analytics-monetary.readonly
//   View YouTube Analytics monetary reports for your YouTube content
// https://www.googleapis.com/auth/yt-analytics.readonly
//   View YouTube Analytics reports for your YouTube content

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Retrieve your YouTube Analytics reports.
     */
    module youtubeAnalytics {
        var batchReportDefinitions: {
            /**
             * Retrieves a list of available batch report definitions.
             * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of.
             */
            list: (params: {
                onBehalfOfContentOwner: string;
            }) => { execute(callback: (data: IResponse<IBatchReportDefinitionList>, original: string) => void):void; };
        };
        var batchReports: {
            /**
             * Retrieves a list of processed batch reports.
             * @params {string} batchReportDefinitionId The batchReportDefinitionId parameter specifies the ID of the batch reportort definition for which you are retrieving reports.
             * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of.
             */
            list: (params: {
                batchReportDefinitionId: string;
                onBehalfOfContentOwner: string;
            }) => { execute(callback: (data: IResponse<IBatchReportList>, original: string) => void):void; };
        };
        var reports: {
            /**
             * Retrieve your YouTube Analytics reports.
             * @params {string} dimensions A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender. See the Available Reports document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the Dimensions document for definitions of those dimensions.
             * @params {string} end-date The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
             * @params {string} filters A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters. For example, a filters parameter value of video==dMH0bHeiRNg;country==IT restricts the result set to include data for the given video in Italy.
             * @params {string} ids Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data.
- To request data for a YouTube user, set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID specifies the unique YouTube channel ID.
- To request data for a YouTube CMS content owner, set the ids parameter value to contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content owner.
             * @params {number} max-results The maximum number of rows to include in the response.
             * @params {string} metrics A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes. See the Available Reports document for a list of the reports that you can retrieve and the metrics available in each report, and see the Metrics document for definitions of those metrics.
             * @params {string} sort A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
             * @params {string} start-date The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
             * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
             */
            query: (params: {
                dimensions?: string;
                "end-date": string;
                filters?: string;
                ids: string;
                "max-results"?: number;
                metrics: string;
                sort?: string;
                "start-date": string;
                "start-index"?: number;
            }) => { execute(callback: (data: IResponse<IResultTable>, original: string) => void):void; };
        };
        /**
         * A paginated list of batchReportDefinition resources returned in response to a youtubeAnalytics.batchReportDefinitions.list request.
         */
        interface IBatchReportDefinitionList {
            /**
             * A list of batchReportDefinition resources that match the request criteria.
             */
            items: IBatchReportDefinitionTemplate[];
            /**
             * This value specifies the type of data included in the API response. For the list method, the kind property value is youtubeAnalytics#batchReportDefinitionList.
             */
            kind: string;
        }
        /**
         * Contains single batchReportDefinition resource.
         */
        interface IBatchReportDefinitionTemplate {
            /**
             * Default report definition's output.
             */
            defaultOutput: {
                format: string;
                type: string;
            }[];
            /**
             * The ID that YouTube assigns and uses to uniquely identify the report definition.
             */
            id: string;
            /**
             * Name of the report definition.
             */
            name: string;
            /**
             * Status of the report definition.
             */
            status: string;
            /**
             * Type of the report definition.
             */
            type: string;
        }
        /**
         * A paginated list of batchReport resources returned in response to a youtubeAnalytics.batchReport.list request.
         */
        interface IBatchReportList {
            /**
             * A list of batchReport resources that match the request criteria.
             */
            items: IBatchReportTemplate[];
            /**
             * This value specifies the type of data included in the API response. For the list method, the kind property value is youtubeAnalytics#batchReportList.
             */
            kind: string;
        }
        /**
         * Contains single batchReport resource.
         */
        interface IBatchReportTemplate {
            /**
             * The ID that YouTube assigns and uses to uniquely identify the report.
             */
            id: string;
            /**
             * Report outputs.
             */
            outputs: {
                downloadUrl: string;
                format: string;
                type: string;
            }[];
            /**
             * The ID of the the report definition.
             */
            report_id: string;
            /**
             * Period included in the report. For reports containing all entities endTime is not set. Both startTime and endTime are inclusive.
             */
            timeSpan: {
                endTime: string; // date-time
                startTime: string; // date-time
            };
            /**
             * The time when the report was updated.
             */
            timeUpdated: string; // date-time
        }
        /**
         * Contains a single result table. The table is returned as an array of rows that contain the values for the cells of the table. Depending on the metric or dimension, the cell can contain a string (video ID, country code) or a number (number of views or number of likes).
         */
        interface IResultTable {
            /**
             * This value specifies information about the data returned in the rows fields. Each item in the columnHeaders list identifies a field returned in the rows value, which contains a list of comma-delimited data. The columnHeaders list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters dimensions=ageGroup,gender&metrics=viewerPercentage, the API response will return columns in this order: ageGroup,gender,viewerPercentage.
             */
            columnHeaders: {
                columnType: string;
                dataType: string;
                name: string;
            }[];
            /**
             * This value specifies the type of data included in the API response. For the query method, the kind property value will be youtubeAnalytics#resultTable.
             */
            kind: string;
            /**
             * The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the columnHeaders field. If no data is available for the given query, the rows element will be omitted from the response. The response for a query with the day dimension will not contain rows for the most recent days.
             */
            rows: any[][];
        }
    }
}
