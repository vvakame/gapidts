// Type definitions for Google DoubleClick Search API v2
// Project: https://developers.google.com/doubleclick-search/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Report and modify your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).
     */
    module doubleclicksearch {
        var conversion: {
            /**
             * Retrieves a list of conversions from a DoubleClick Search engine account.
             * @params {string} adGroupId Numeric ID of the ad group.
             * @params {string} adId Numeric ID of the ad.
             * @params {string} advertiserId Numeric ID of the advertiser.
             * @params {string} agencyId Numeric ID of the agency.
             * @params {string} campaignId Numeric ID of the campaign.
             * @params {string} criterionId Numeric ID of the criterion.
             * @params {number} endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
             * @params {string} engineAccountId Numeric ID of the engine account.
             * @params {number} rowCount The number of conversions to return per call.
             * @params {number} startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
             * @params {number} startRow The 0-based starting index for retrieving conversions results.
             */
            get: (params: {
                adGroupId?: string;
                adId?: string;
                advertiserId: string;
                agencyId: string;
                campaignId?: string;
                criterionId?: string;
                endDate: number;
                engineAccountId: string;
                rowCount: number;
                startDate: number;
                startRow: number;
            }) => { execute(callback: (data: IConversionList, original: string) => void):void; };
            /**
             * Inserts a batch of new conversions into DoubleClick Search.
             */
            insert: (params: {
                resource?: IConversionList;
            }) => { execute(callback: (data: IConversionList, original: string) => void):void; };
            /**
             * Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.
             * @params {string} advertiserId Numeric ID of the advertiser.
             * @params {string} agencyId Numeric ID of the agency.
             * @params {number} endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
             * @params {string} engineAccountId Numeric ID of the engine account.
             * @params {number} rowCount The number of conversions to return per call.
             * @params {number} startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
             * @params {number} startRow The 0-based starting index for retrieving conversions results.
             */
            patch: (params: {
                advertiserId: string;
                agencyId: string;
                endDate: number;
                engineAccountId: string;
                rowCount: number;
                startDate: number;
                startRow: number;
                resource?: IConversionList;
            }) => { execute(callback: (data: IConversionList, original: string) => void):void; };
            /**
             * Updates a batch of conversions in DoubleClick Search.
             */
            update: (params: {
                resource?: IConversionList;
            }) => { execute(callback: (data: IConversionList, original: string) => void):void; };
            /**
             * Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
             */
            updateAvailability: (params: {
                resource?: IUpdateAvailabilityRequest;
            }) => { execute(callback: (data: IUpdateAvailabilityResponse, original: string) => void):void; };
        };
        var reports: {
            /**
             * Generates and returns a report immediately.
             */
            generate: (params: {
                resource?: IReportRequest;
            }) => { execute(callback: (data: IReport, original: string) => void):void; };
            /**
             * Polls for the status of a report request.
             * @params {string} reportId ID of the report request being polled.
             */
            get: (params: {
                reportId: string;
            }) => { execute(callback: (data: IReport, original: string) => void):void; };
            /**
             * Downloads a report file.
             * @params {number} reportFragment The index of the report fragment to download.
             * @params {string} reportId ID of the report.
             */
            getFile: (params: {
                reportFragment: number;
                reportId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Inserts a report request into the reporting system.
             */
            request: (params: {
                resource?: IReportRequest;
            }) => { execute(callback: (data: IReport, original: string) => void):void; };
        };
        var savedColumns: {
            /**
             * Retrieve the list of saved columns for a specified advertiser.
             * @params {string} advertiserId DS ID of the advertiser.
             * @params {string} agencyId DS ID of the agency.
             */
            list: (params: {
                advertiserId: string;
                agencyId: string;
            }) => { execute(callback: (data: ISavedColumnList, original: string) => void):void; };
        };
        /**
         * A message containing availability data relevant to DoubleClick Search.
         */
        interface IAvailability {
            /**
             * DS advertiser ID.
             */
            advertiserId: string; // int64
            /**
             * DS agency ID.
             */
            agencyId: string; // int64
            /**
             * The time by which all conversions have been uploaded, in epoch millis UTC.
             */
            availabilityTimestamp: string; // uint64
            /**
             * The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
             */
            segmentationId: string; // int64
            /**
             * The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
             */
            segmentationName: string;
            /**
             * The segmentation type that this availability is for (its default value is FLOODLIGHT).
             */
            segmentationType: string;
        }
        /**
         * A conversion containing data relevant to DoubleClick Search.
         */
        interface IConversion {
            /**
             * DS ad group ID.
             */
            adGroupId: string; // int64
            /**
             * DS ad ID.
             */
            adId: string; // int64
            /**
             * DS advertiser ID.
             */
            advertiserId: string; // int64
            /**
             * DS agency ID.
             */
            agencyId: string; // int64
            /**
             * DS campaign ID.
             */
            campaignId: string; // int64
            /**
             * DS click ID for the conversion.
             */
            clickId: string;
            /**
             * Advertiser-provided ID for the conversion, also known as the order ID.
             */
            conversionId: string;
            /**
             * The time at which the conversion was last modified, in epoch millis UTC.
             */
            conversionModifiedTimestamp: string; // uint64
            /**
             * The time at which the conversion took place, in epoch millis UTC.
             */
            conversionTimestamp: string; // uint64
            /**
             * DS criterion (keyword) ID.
             */
            criterionId: string; // int64
            /**
             * The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format.
             */
            currencyCode: string;
            /**
             * Custom dimensions for the conversion, which can be used to filter data in a report.
             */
            customDimension: ICustomDimension[];
            /**
             * Custom metrics for the conversion.
             */
            customMetric: ICustomMetric[];
            /**
             * DS conversion ID.
             */
            dsConversionId: string; // int64
            /**
             * DS engine account ID.
             */
            engineAccountId: string; // int64
            /**
             * The advertiser-provided order id for the conversion.
             */
            floodlightOrderId: string;
            /**
             * The quantity of this conversion, in millis.
             */
            quantityMillis: string; // int64
            /**
             * The revenue amount of this TRANSACTION conversion, in micros.
             */
            revenueMicros: string; // int64
            /**
             * The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
             */
            segmentationId: string; // int64
            /**
             * The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
             */
            segmentationName: string;
            /**
             * The segmentation type of this conversion (for example, FLOODLIGHT).
             */
            segmentationType: string;
            /**
             * The state of the conversion, that is, either ACTIVE or DELETED.
             */
            state: string;
            /**
             * The type of the conversion, that is, either ACTION or TRANSACTION. An ACTION conversion is an action by the user that has no monetarily quantifiable value, while a TRANSACTION conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (ACTION) versus ecommerce purchases (TRANSACTION).
             */
            type: string;
        }
        /**
         * A list of conversions.
         */
        interface IConversionList {
            /**
             * The conversions being requested.
             */
            conversion: IConversion[];
            /**
             * Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.
             */
            kind: string;
        }
        /**
         * A message containing the custome dimension.
         */
        interface ICustomDimension {
            /**
             * Custom dimension name.
             */
            name: string;
            /**
             * Custom dimension value.
             */
            value: string;
        }
        /**
         * A message containing the custome metric.
         */
        interface ICustomMetric {
            /**
             * Custom metric name.
             */
            name: string;
            /**
             * Custom metric numeric value.
             */
            value: number; // double
        }
        /**
         * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
         */
        interface IReport {
            /**
             * Asynchronous report only. Contains a list of generated report files once the report has succesfully completed.
             */
            files: {
                byteCount: string; // int64
                url: string;
            }[];
            /**
             * Asynchronous report only. Id of the report.
             */
            id: string;
            /**
             * Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded.
             */
            isReportReady: boolean;
            /**
             * Identifies this as a Report resource. Value: the fixed string doubleclicksearch#report.
             */
            kind: string;
            /**
             * The request that created the report. Optional fields not specified in the original request are filled with default values.
             */
            request: IReportRequest;
            /**
             * The number of report rows generated by the report, not including headers.
             */
            rowCount: number; // int32
            /**
             * Synchronous report only. Generated report rows.
             */
            rows: IReportRow[];
            /**
             * The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the statisticsCurrency field of the report request.
             */
            statisticsCurrencyCode: string;
            /**
             * If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset.
             */
            statisticsTimeZone: string;
        }
        /**
         * A request object used to create a DoubleClick Search report.
         */
        interface IReportApiColumnSpec {
            /**
             * Name of a DoubleClick Search column to include in the report.
             */
            columnName: string;
            /**
             * Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.
             */
            customDimensionName: string;
            /**
             * Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with startDate.
             */
            endDate: string;
            /**
             * Synchronous report only. Set to true to group by this column. Defaults to false.
             */
            groupByColumn: boolean;
            /**
             * Text used to identify this column in the report output; defaults to columnName or savedColumnName when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name.
             */
            headerText: string;
            /**
             * The platform that is used to provide data for the custom dimension. Acceptable values are "Floodlight".
             */
            platformSource: string;
            /**
             * Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI.
             */
            savedColumnName: string;
            /**
             * Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with endDate.
             */
            startDate: string;
        }
        /**
         * A request object used to create a DoubleClick Search report.
         */
        interface IReportRequest {
            /**
             * The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the columnName parameter is required. For saved columns only the savedColumnName parameter is required. Both columnName and savedColumnName cannot be set in the same stanza.
             */
            columns: IReportApiColumnSpec[];
            /**
             * Format that the report should be returned in. Currently csv or tsv is supported.
             */
            downloadFormat: string;
            /**
             * A list of filters to be applied to the report.
             */
            filters: {
                column: IReportApiColumnSpec;
                operator: string;
                values: any[];
            }[];
            /**
             * Determines if removed entities should be included in the report. Defaults to false. Deprecated, please use includeRemovedEntities instead.
             */
            includeDeletedEntities: boolean;
            /**
             * Determines if removed entities should be included in the report. Defaults to false.
             */
            includeRemovedEntities: boolean;
            /**
             * Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are 1000000 to 100000000, inclusive.
             */
            maxRowsPerFile: number; // int32
            /**
             * Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.
             */
            orderBy: {
                column: IReportApiColumnSpec;
                sortOrder: string;
            }[];
            /**
             * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
             */
            reportScope: {
                adGroupId: string; // int64
                adId: string; // int64
                advertiserId: string; // int64
                agencyId: string; // int64
                campaignId: string; // int64
                engineAccountId: string; // int64
                keywordId: string; // int64
            };
            /**
             * Determines the type of rows that are returned in the report. For example, if you specify reportType: keyword, each row in the report will contain data about a keyword. See the Types of Reports reference for the columns that are available for each type.
             */
            reportType: string;
            /**
             * Synchronous report only. The maxinum number of rows to return; additional rows are dropped. Acceptable values are 0 to 10000, inclusive. Defaults to 10000.
             */
            rowCount: number; // int32
            /**
             * Synchronous report only. Zero-based index of the first row to return. Acceptable values are 0 to 50000, inclusive. Defaults to 0.
             */
            startRow: number; // int32
            /**
             * Specifies the currency in which monetary will be returned. Possible values are: usd, agency (valid if the report is scoped to agency or lower), advertiser (valid if the report is scoped to * advertiser or lower), or account (valid if the report is scoped to engine account or lower).
             */
            statisticsCurrency: string;
            /**
             * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
             */
            timeRange: {
                changedAttributesSinceTimestamp: string; // date-time
                changedMetricsSinceTimestamp: string; // date-time
                endDate: string;
                startDate: string;
            };
            /**
             * If true, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to false.
             */
            verifySingleTimeZone: boolean;
        }
        /**
         * A row in a DoubleClick Search report.
         */
        interface IReportRow {
        }
        /**
         * A saved column
         */
        interface ISavedColumn {
            /**
             * Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.
             */
            kind: string;
            /**
             * The name of the saved column.
             */
            savedColumnName: string;
            /**
             * The type of data this saved column will produce.
             */
            type: string;
        }
        /**
         * A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.
         */
        interface ISavedColumnList {
            /**
             * The saved columns being requested.
             */
            items: ISavedColumn[];
            /**
             * Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList.
             */
            kind: string;
        }
        /**
         * The request to update availability.
         */
        interface IUpdateAvailabilityRequest {
            /**
             * The availabilities being requested.
             */
            availabilities: IAvailability[];
        }
        /**
         * The response to a update availability request.
         */
        interface IUpdateAvailabilityResponse {
            /**
             * The availabilities being returned.
             */
            availabilities: IAvailability[];
        }
    }
}
