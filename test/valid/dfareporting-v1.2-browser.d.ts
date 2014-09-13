// Type definitions for Google DFA Reporting API v1.2
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
             * @params {string} profileId The DFA user profile ID.
             */
            query: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                resource?: IDimensionValueRequest;
            }) => { execute(callback: (data: IResponse<IDimensionValueList>, original: string) => void):void; };
        };
        var files: {
            /**
             * Retrieves a report file by its report ID and file ID.
             * @params {string} fileId The ID of the report file.
             * @params {string} reportId The ID of the report.
             */
            get: (params: {
                fileId: string;
                reportId: string;
            }) => { execute(callback: (data: IResponse<IFile>, original: string) => void):void; };
            /**
             * Lists files for a user profile.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken The value of the nextToken from the previous result page.
             * @params {string} profileId The DFA profile ID.
             * @params {string} scope The scope that defines which results are returned, default is 'MINE'.
             * @params {string} sortField The field by which to sort the list.
             * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                scope?: string;
                sortField?: string;
                sortOrder?: string;
            }) => { execute(callback: (data: IResponse<IFileList>, original: string) => void):void; };
        };
        var reports: {
            /**
             * Deletes a report by its ID.
             * @params {string} profileId The DFA user profile ID.
             * @params {string} reportId The ID of the report.
             */
            delete: (params: {
                profileId: string;
                reportId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves a report by its ID.
             * @params {string} profileId The DFA user profile ID.
             * @params {string} reportId The ID of the report.
             */
            get: (params: {
                profileId: string;
                reportId: string;
            }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
            /**
             * Creates a report.
             * @params {string} profileId The DFA user profile ID.
             */
            insert: (params: {
                profileId: string;
                resource?: IReport;
            }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
            /**
             * Retrieves list of reports.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken The value of the nextToken from the previous result page.
             * @params {string} profileId The DFA user profile ID.
             * @params {string} scope The scope that defines which results are returned, default is 'MINE'.
             * @params {string} sortField The field by which to sort the list.
             * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                profileId: string;
                scope?: string;
                sortField?: string;
                sortOrder?: string;
            }) => { execute(callback: (data: IResponse<IReportList>, original: string) => void):void; };
            /**
             * Updates a report. This method supports patch semantics.
             * @params {string} profileId The DFA user profile ID.
             * @params {string} reportId The ID of the report.
             */
            patch: (params: {
                profileId: string;
                reportId: string;
                resource?: IReport;
            }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
            /**
             * Runs a report.
             * @params {string} profileId The DFA profile ID.
             * @params {string} reportId The ID of the report.
             * @params {boolean} synchronous If set and true, tries to run the report synchronously.
             */
            run: (params: {
                profileId: string;
                reportId: string;
                synchronous?: boolean;
            }) => { execute(callback: (data: IResponse<IFile>, original: string) => void):void; };
            /**
             * Updates a report.
             * @params {string} profileId The DFA user profile ID.
             * @params {string} reportId The ID of the report.
             */
            update: (params: {
                profileId: string;
                reportId: string;
                resource?: IReport;
            }) => { execute(callback: (data: IResponse<IReport>, original: string) => void):void; };
            files: {
                /**
                 * Retrieves a report file.
                 * @params {string} fileId The ID of the report file.
                 * @params {string} profileId The DFA profile ID.
                 * @params {string} reportId The ID of the report.
                 */
                get: (params: {
                    fileId: string;
                    profileId: string;
                    reportId: string;
                }) => { execute(callback: (data: IResponse<IFile>, original: string) => void):void; };
                /**
                 * Lists files for a report.
                 * @params {number} maxResults Maximum number of results to return.
                 * @params {string} pageToken The value of the nextToken from the previous result page.
                 * @params {string} profileId The DFA profile ID.
                 * @params {string} reportId The ID of the parent report.
                 * @params {string} sortField The field by which to sort the list.
                 * @params {string} sortOrder Order of sorted results, default is 'DESCENDING'.
                 */
                list: (params: {
                    maxResults?: number;
                    pageToken?: string;
                    profileId: string;
                    reportId: string;
                    sortField?: string;
                    sortOrder?: string;
                }) => { execute(callback: (data: IResponse<IFileList>, original: string) => void):void; };
            };
        };
        var userProfiles: {
            /**
             * Gets one user profile by ID.
             * @params {string} profileId The user profile ID.
             */
            get: (params: {
                profileId: string;
            }) => { execute(callback: (data: IResponse<IUserProfile>, original: string) => void):void; };
            /**
             * Retrieves list of user profiles for a user.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IUserProfileList>, original: string) => void):void; };
        };
        /**
         * Represents an activity group.
         */
        interface IActivities {
            /**
             * List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
             */
            filters: IDimensionValue[];
            /**
             * The kind of resource this is, in this case dfareporting#activities.
             */
            kind: string;
            /**
             * List of names of floodlight activity metrics.
             */
            metricNames: string[];
        }
        /**
         * Represents a Custom Rich Media Events group.
         */
        interface ICustomRichMediaEvents {
            /**
             * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
             */
            filteredEventIds: IDimensionValue[];
            /**
             * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
             */
            kind: string;
        }
        /**
         * Represents a date range.
         */
        interface IDateRange {
            /**
             * The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
             */
            endDate: string; // date
            /**
             * The kind of resource this is, in this case dfareporting#dateRange.
             */
            kind: string;
            /**
             * The date range relative to the date of when the report is run, one of:  
             * - "TODAY" 
             * - "YESTERDAY" 
             * - "WEEK_TO_DATE" 
             * - "MONTH_TO_DATE" 
             * - "QUARTER_TO_DATE" 
             * - "YEAR_TO_DATE" 
             * - "PREVIOUS_WEEK" 
             * - "PREVIOUS_MONTH" 
             * - "PREVIOUS_QUARTER" 
             * - "PREVIOUS_YEAR" 
             * - "LAST_7_DAYS" 
             * - "LAST_30_DAYS" 
             * - "LAST_90_DAYS" 
             * - "LAST_365_DAYS" 
             * - "LAST_24_MONTHS"
             */
            relativeDateRange: string;
            /**
             * The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd".
             */
            startDate: string; // date
        }
        /**
         * Represents a dimension filter.
         */
        interface IDimensionFilter {
            /**
             * The name of the dimension to filter.
             */
            dimensionName: string;
            /**
             * The kind of resource this is, in this case dfareporting#dimensionFilter.
             */
            kind: string;
            /**
             * The value of the dimension to filter.
             */
            value: string;
        }
        /**
         * Represents a DimensionValue resource.
         */
        interface IDimensionValue {
            /**
             * The name of the dimension.
             */
            dimensionName: string;
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID associated with the value if available.
             */
            id: string;
            /**
             * The kind of resource this is, in this case dfareporting#dimensionValue.
             */
            kind: string;
            /**
             * Determines how the 'value' field is matched when filtering. One of:  
             * - EXACT (default if not specified) 
             * - CONTAINS 
             * - BEGINS_WITH 
             * - WILDCARD_EXPRESSION (allowing '*' as a placeholder for variable length character sequences, it can be escaped with a backslash.)  Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
             */
            matchType: string;
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
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The dimension values returned in this response.
             */
            items: IDimensionValue[];
            /**
             * The kind of list this is, in this case dfareporting#dimensionValueList.
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
             * The name of the dimension for which values should be requested.
             */
            dimensionName: string;
            /**
             * The end date of the date range for which to retrieve dimension values. A string of the format: "yyyy-MM-dd".
             */
            endDate: string; // date
            /**
             * The list of filters by which to filter values. The filters are ANDed.
             */
            filters: IDimensionFilter[];
            /**
             * The kind of request this is, in this case dfareporting#dimensionValueRequest.
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
             * The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
             */
            dateRange: IDateRange;
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The file name of the file.
             */
            fileName: string;
            /**
             * The output format of the report. Only available once the file is available.
             */
            format: string;
            /**
             * The unique ID of this report file.
             */
            id: string; // int64
            /**
             * The kind of resource this is, in this case dfareporting#file.
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
                apiUrl: string;
                browserUrl: string;
            };
        }
        /**
         * Represents the list of File resources.
         */
        interface IFileList {
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The files returned in this response.
             */
            items: IFile[];
            /**
             * The kind of list this is, in this case dfareporting#fileList.
             */
            kind: string;
            /**
             * Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
             */
            nextPageToken: string;
        }
        /**
         * Represents a recipient.
         */
        interface IRecipient {
            /**
             * The delivery type for the recipient, one of:  
             * - "ATTACHMENT" 
             * - "LINK"
             */
            deliveryType: string;
            /**
             * The email address of the recipient.
             */
            email: string;
            /**
             * The kind of resource this is, in this case dfareporting#recipient.
             */
            kind: string;
        }
        /**
         * Represents a Report resource.
         */
        interface IReport {
            /**
             * The account ID to which this report belongs.
             */
            accountId: string; // int64
            /**
             * The report criteria for a report of type "ACTIVE_GRP".
             */
            activeGrpCriteria: {
                dateRange: IDateRange;
                dimensionFilters: IDimensionValue[];
                dimensions: ISortedDimension[];
                metricNames: string[];
            };
            /**
             * The report criteria for a report of type "STANDARD".
             */
            criteria: {
                activities: IActivities;
                customRichMediaEvents: ICustomRichMediaEvents;
                dateRange: IDateRange;
                dimensionFilters: IDimensionValue[];
                dimensions: ISortedDimension[];
                metricNames: string[];
            };
            /**
             * The report criteria for a report of type "CROSS_DIMENSION_REACH".
             */
            crossDimensionReachCriteria: {
                breakdown: ISortedDimension[];
                dateRange: IDateRange;
                dimension: string;
                dimensionFilters: IDimensionValue[];
                metricNames: string[];
                overlapMetricNames: string[];
                pivoted: boolean;
            };
            /**
             * The report's email delivery settings.
             */
            delivery: {
                emailOwner: boolean;
                emailOwnerDeliveryType: string;
                message: string;
                recipients: IRecipient[];
            };
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The file name used when generating report files for this report.
             */
            fileName: string;
            /**
             * The report criteria for a report of type "FLOODLIGHT".
             */
            floodlightCriteria: {
                dateRange: IDateRange;
                dimensionFilters: IDimensionValue[];
                dimensions: ISortedDimension[];
                floodlightConfigId: IDimensionValue;
                metricNames: string[];
                reportProperties: {
                    includeAttributedIPConversions: boolean;
                    includeUnattributedCookieConversions: boolean;
                    includeUnattributedIPConversions: boolean;
                };
            };
            /**
             * The output format of the report, one of:  
             * - "CSV" 
             * - "EXCEL"  If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
             */
            format: string;
            /**
             * The unique ID identifying this report resource.
             */
            id: string; // int64
            /**
             * The kind of resource this is, in this case dfareporting#report.
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
             * The report criteria for a report of type "PATH_TO_CONVERSION".
             */
            pathToConversionCriteria: {
                activityFilters: IDimensionValue[];
                conversionDimensions: ISortedDimension[];
                customFloodlightVariables: ISortedDimension[];
                dateRange: IDateRange;
                floodlightConfigId: IDimensionValue;
                metricNames: string[];
                perInteractionDimensions: ISortedDimension[];
                reportProperties: {
                    clicksLookbackWindow: number; // int32
                    impressionsLookbackWindow: number; // int32
                    includeAttributedIPConversions: boolean;
                    includeUnattributedCookieConversions: boolean;
                    includeUnattributedIPConversions: boolean;
                    maximumClickInteractions: number; // int32
                    maximumImpressionInteractions: number; // int32
                    maximumInteractionGap: number; // int32
                    pivotOnInteractionPath: boolean;
                };
            };
            /**
             * The report criteria for a report of type "REACH".
             */
            reachCriteria: {
                activities: IActivities;
                customRichMediaEvents: ICustomRichMediaEvents;
                dateRange: IDateRange;
                dimensionFilters: IDimensionValue[];
                dimensions: ISortedDimension[];
                metricNames: string[];
                reachByFrequencyMetricNames: string[];
            };
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
             * The subbaccount ID to which this report belongs if applicable.
             */
            subAccountId: string; // int64
            /**
             * The type of the report, one of:  
             * - STANDARD 
             * - REACH 
             * - ACTIVE_GRP 
             * - PATH_TO_CONVERSION 
             * - FLOODLIGHT 
             * - CROSS_DIMENSION_REACH
             */
            type: string;
        }
        /**
         * Represents the list of reports.
         */
        interface IReportList {
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The reports returned in this response.
             */
            items: IReport[];
            /**
             * The kind of list this is, in this case dfareporting#reportList.
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
             * The kind of resource this is, in this case dfareporting#sortedDimension.
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
             * The account ID to which this profile belongs.
             */
            accountId: string; // int64
            /**
             * The account name this profile belongs to.
             */
            accountName: string;
            /**
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The kind of resource this is, in this case dfareporting#userProfile.
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
             * The eTag of this response for caching purposes.
             */
            etag: string;
            /**
             * The user profiles returned in this response.
             */
            items: IUserProfile[];
            /**
             * The kind of list this is, in this case dfareporting#userProfileList.
             */
            kind: string;
        }
    }
}
