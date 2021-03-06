// Type definitions for Google DFA Reporting API v1
// Project: https://developers.google.com/doubleclick-advertisers/reporting/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/dfareporting
//   View and manage DoubleClick for Advertisers reports

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you create, run and download reports.
     */
    module dfareporting {
        var dimensionValues: {
            /**
             * Retrieves list of report dimension values for a list of filters.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken The value of the nextToken from the previous result page.
             * @params {string} profileId The DFA user profile id.
             */
            query: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                resource?: IDimensionValueRequest;
            }) => {
                execute(callback: (data: IResponse<IDimensionValueList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IDimensionValueList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var files: {
            /**
             * Lists files for a user profile.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken The value of the nextToken from the previous result page.
             * @params {string} profileId The DFA profile id.
             * @params {string} sortField The field to sort the list by.
             * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                sortField?: string;
                sortOrder?: string;
            }) => {
                execute(callback: (data: IResponse<IFileList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var reports: {
            /**
             * Deletes a report by its id.
             * @params {string} profileId The DFA user profile id.
             * @params {string} reportId The id of the report.
             */
            delete: (params: {
                profileId: string;
                reportId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Retrieves a report by its id.
             * @params {string} profileId The DFA user profile id.
             * @params {string} reportId The id of the report.
             */
            get: (params: {
                profileId: string;
                reportId: string;
            }) => {
                execute(callback: (data: IResponse<IReport>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Creates a report.
             * @params {string} profileId The DFA user profile id.
             */
            insert: (params: {
                profileId: string;
                resource?: IReport;
            }) => {
                execute(callback: (data: IResponse<IReport>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Retrieves list of reports.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken The value of the nextToken from the previous result page.
             * @params {string} profileId The DFA user profile id.
             * @params {string} sortField The field to sort the list by.
             * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                sortField?: string;
                sortOrder?: string;
            }) => {
                execute(callback: (data: IResponse<IReportList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReportList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a report. This method supports patch semantics.
             * @params {string} profileId The DFA user profile id.
             * @params {string} reportId The id of the report.
             */
            patch: (params: {
                profileId: string;
                reportId: string;
                resource?: IReport;
            }) => {
                execute(callback: (data: IResponse<IReport>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Runs a report.
             * @params {string} profileId The DFA profile id.
             * @params {string} reportId The id of the report.
             * @params {boolean} synchronous If set and true, tries to run the report synchronously.
             */
            run: (params: {
                profileId: string;
                reportId: string;
                synchronous?: boolean;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a report.
             * @params {string} profileId The DFA user profile id.
             * @params {string} reportId The id of the report.
             */
            update: (params: {
                profileId: string;
                reportId: string;
                resource?: IReport;
            }) => {
                execute(callback: (data: IResponse<IReport>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReport>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            files: {
                /**
                 * Retrieves a report file.
                 * @params {string} fileId The id of the report file.
                 * @params {string} profileId The DFA profile id.
                 * @params {string} reportId The id of the report.
                 */
                get: (params: {
                    fileId: string;
                    profileId: string;
                    reportId: string;
                }) => {
                    execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Lists files for a report.
                 * @params {number} maxResults Maximum number of results to return.
                 * @params {string} pageToken The value of the nextToken from the previous result page.
                 * @params {string} profileId The DFA profile id.
                 * @params {string} reportId The id of the parent report.
                 * @params {string} sortField The field to sort the list by.
                 * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
                 */
                list: (params: {
                    maxResults?: number;
                    pageToken?: string;
                    profileId: string;
                    reportId: string;
                    sortField?: string;
                    sortOrder?: string;
                }) => {
                    execute(callback: (data: IResponse<IFileList>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
        };
        var userProfiles: {
            /**
             * Gets one user profile by id.
             * @params {string} profileId The user profile id.
             */
            get: (params: {
                profileId: string;
            }) => {
                execute(callback: (data: IResponse<IUserProfile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Retrieves list of user profiles for a user.
             */
            list: (params: {
            }) => {
                execute(callback: (data: IResponse<IUserProfileList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUserProfileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        /**
         * Represents a dimension filter.
         */
        interface IDimensionFilter {
            /**
             * The name of the dimension to filter.
             */
            dimensionName: string;
            /**
             * Kind of resource this is, in this case dfareporting#dimensionFilter.
             */
            kind: string;
            /**
             * The value of the dimension to filter for.
             */
            value: string;
        }
        /**
         * Represents a DimensionValue resource.
         */
        interface IDimensionValue {
            /**
             * Name of the dimension.
             */
            dimensionName: string;
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID associated with the value if available.
             */
            id: string;
            /**
             * Kind of resource this is, in this case dfareporting#dimensionValue.
             */
            kind: string;
            /**
             * The value of the dimension.
             */
            value: string;
        }
        /**
         * Represents the list of DimensionValue resources.
         */
        interface IDimensionValueList {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The dimension values returned in this response.
             */
            items: IDimensionValue[];
            /**
             * Kind of list this is, in this case dfareporting#dimensionValueList.
             */
            kind: string;
            /**
             * Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
             */
            nextPageToken: string;
        }
        /**
         * Represents a DimensionValuesRequest.
         */
        interface IDimensionValueRequest {
            /**
             * The name of the dimension values should be requested for.
             */
            dimensionName: string;
            /**
             * The end date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
             */
            endDate: string; // date
            /**
             * List of filters to filter values by. The filters are ANDed.
             */
            filters: IDimensionFilter[];
            /**
             * Kind of request this is, in this case dfareporting#dimensionValueRequest.
             */
            kind: string;
            /**
             * The start date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
             */
            startDate: string; // date
        }
        /**
         * Represents a File resource. A File contains the meta-data for a report run. It shows the status of the run and holds the urls to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
         */
        interface IFile {
            /**
             * The date range for which the file has report data.
             */
            dateRange: {
                endDate: string; // date
                startDate: string; // date
            };
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The file name of the file.
             */
            fileName: string;
            /**
             * The unique ID of this report file.
             */
            id: string; // int64
            /**
             * Kind of resource this is, in this case dfareporting#file.
             */
            kind: string;
            /**
             * The timestamp in milliseconds since epoch when this file was last modified.
             */
            lastModifiedTime: string; // int64
            /**
             * The ID of the report this file was generated from.
             */
            reportId: string; // int64
            /**
             * The status of the report file, one of:  
             * - "PROCESSING" 
             * - "REPORT_AVAILABLE" 
             * - "FAILED" 
             * - "CANCELLED"
             */
            status: string;
            /**
             * The urls where the completed report file can be downloaded.
             */
            urls: {
                csv: {
                    apiUrl: string;
                    browserUrl: string;
                };
            };
        }
        /**
         * Represents the list of File resources.
         */
        interface IFileList {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The files returned in this response.
             */
            items: IFile[];
            /**
             * Kind of list this is, in this case dfareporting#fileList.
             */
            kind: string;
            /**
             * Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
             */
            nextPageToken: string;
        }
        /**
         * Represents a Report resource.
         */
        interface IReport {
            /**
             * The account id this report belongs to.
             */
            accountId: string; // int64
            /**
             * The report criteria.
             */
            criteria: {
                activities: {
                    filters: IDimensionValue[];
                    metricNames: string[];
                };
                customRichMediaEvents: {
                    filteredEventIds: IDimensionValue[];
                };
                dateRange: {
                    endDate: string; // date
                    relativeDateRange: string;
                    startDate: string; // date
                };
                dimensionFilters: IDimensionValue[];
                dimensions: ISortedDimension[];
                metricNames: string[];
            };
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The file name used when generating report files for this report.
             */
            fileName: string;
            /**
             * The unique ID identifying this report resource.
             */
            id: string; // int64
            /**
             * Kind of resource this is, in this case dfareporting#report.
             */
            kind: string;
            /**
             * The timestamp (in milliseconds since epoch) of when this report was last modified.
             */
            lastModifiedTime: string; // uint64
            /**
             * The name of the report.
             */
            name: string;
            /**
             * The user profile id of the owner of this report.
             */
            ownerProfileId: string; // int64
            /**
             * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
             */
            schedule: {
                active: boolean;
                every: number; // int32
                expirationDate: string; // date
                repeats: string;
                repeatsOnWeekDays: string[];
                runsOnDayOfMonth: string;
                startDate: string; // date
            };
            /**
             * The subbaccount id this report belongs to if applicable.
             */
            subAccountId: string; // int64
            /**
             * The type of the report, currently only "STANDARD" is supported.
             */
            type: string;
        }
        /**
         * Represents the list of reports.
         */
        interface IReportList {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The reports returned in this response.
             */
            items: IReport[];
            /**
             * Kind of list this is, in this case dfareporting#reportList.
             */
            kind: string;
            /**
             * Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
             */
            nextPageToken: string;
        }
        /**
         * Represents a sorted dimension.
         */
        interface ISortedDimension {
            /**
             * Kind of resource this is, in this case dfareporting#sortedDimension.
             */
            kind: string;
            /**
             * The name of the dimension.
             */
            name: string;
            /**
             * An optional sort order for the dimension column, one of:  
             * - "ASCENDING" 
             * - "DESCENDING"
             */
            sortOrder: string;
        }
        /**
         * Represents a UserProfile resource.
         */
        interface IUserProfile {
            /**
             * The account ID this profile belongs to.
             */
            accountId: string; // int64
            /**
             * The account name this profile belongs to.
             */
            accountName: string;
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * Kind of resource this is, in this case dfareporting#userProfile.
             */
            kind: string;
            /**
             * The unique ID of the user profile.
             */
            profileId: string; // int64
            /**
             * The sub account ID this profile belongs to if applicable.
             */
            subAccountId: string; // int64
            /**
             * The sub account name this profile belongs to if applicable.
             */
            subAccountName: string;
            /**
             * The user name.
             */
            userName: string;
        }
        /**
         * Represents the list of user profiles.
         */
        interface IUserProfileList {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The user profiles returned in this response.
             */
            items: IUserProfile[];
            /**
             * Kind of list this is, in this case dfareporting#userProfileList.
             */
            kind: string;
        }
    }
}
