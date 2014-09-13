// Type definitions for Google BigQuery API v2
// Project: https://developers.google.com/bigquery/docs/overview
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/bigquery
//   View and manage your data in Google BigQuery
// https://www.googleapis.com/auth/bigquery.insertdata
//   Insert data into Google BigQuery
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/devstorage.full_control
//   Manage your data and permissions in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_only
//   View your data in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_write
//   Manage your data in Google Cloud Storage

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function bigquery(version:string):typeof googleapis.bigquery;
    function bigquery(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.bigquery;
}
/**
 * A data platform for customers to create, manage, share and query data.
 */
declare module googleapis.bigquery {
    var datasets: {
        /**
         * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
         * @params {string} datasetId Dataset ID of dataset being deleted
         * @params {boolean} deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
         * @params {string} projectId Project ID of the dataset being deleted
         */
        delete: (params: {
            datasetId: string;
            deleteContents?: boolean;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns the dataset specified by datasetID.
         * @params {string} datasetId Dataset ID of the requested dataset
         * @params {string} projectId Project ID of the requested dataset
         */
        get: (params: {
            datasetId: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new empty dataset.
         * @params {string} projectId Project ID of the new dataset
         */
        insert: (params: {
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all the datasets in the specified project to which the caller has read access; however, a project owner can list (but not necessarily get) all datasets in his project.
         * @params {boolean} all Whether to list all datasets, including hidden ones
         * @params {number} maxResults The maximum number of results to return
         * @params {string} pageToken Page token, returned by a previous call, to request the next page of results
         * @params {string} projectId Project ID of the datasets to be listed
         */
        list: (params: {
            all?: boolean;
            maxResults?: number;
            pageToken?: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDatasetList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
         * @params {string} datasetId Dataset ID of the dataset being updated
         * @params {string} projectId Project ID of the dataset being updated
         */
        patch: (params: {
            datasetId: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
         * @params {string} datasetId Dataset ID of the dataset being updated
         * @params {string} projectId Project ID of the dataset being updated
         */
        update: (params: {
            datasetId: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var jobs: {
        /**
         * Retrieves the specified job by ID.
         * @params {string} jobId Job ID of the requested job
         * @params {string} projectId Project ID of the requested job
         */
        get: (params: {
            jobId: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IJob, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the results of a query job.
         * @params {string} jobId Job ID of the query job
         * @params {number} maxResults Maximum number of results to read
         * @params {string} pageToken Page token, returned by a previous call, to request the next page of results
         * @params {string} projectId Project ID of the query job
         * @params {string} startIndex Zero-based index of the starting row
         * @params {number} timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is to return immediately. If the timeout passes before the job completes, the request will fail with a TIMEOUT error
         */
        getQueryResults: (params: {
            jobId: string;
            maxResults?: number;
            pageToken?: string;
            projectId: string;
            startIndex?: string;
            timeoutMs?: number;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IGetQueryResultsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Starts a new asynchronous job.
         * @params {string} projectId Project ID of the project that will be billed for the job
         */
        insert: (params: {
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IJob;
        }, callback: (err: IErrorResponse, response: IJob, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all the Jobs in the specified project that were started by the user. The job list returns in reverse chronological order of when the jobs were created, starting with the most recent job created.
         * @params {boolean} allUsers Whether to display jobs owned by all users in the project. Default false
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Page token, returned by a previous call, to request the next page of results
         * @params {string} projectId Project ID of the jobs to list
         * @params {string} projection Restrict information returned to a set of selected fields
         * @params {string} stateFilter Filter for job state
         */
        list: (params: {
            allUsers?: boolean;
            maxResults?: number;
            pageToken?: string;
            projectId: string;
            projection?: string;
            stateFilter?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IJobList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
         * @params {string} projectId Project ID of the project billed for the query
         */
        query: (params: {
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IQueryRequest;
        }, callback: (err: IErrorResponse, response: IQueryResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var projects: {
        /**
         * Lists the projects to which you have at least read access.
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Page token, returned by a previous call, to request the next page of results
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IProjectList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var tabledata: {
        /**
         * Streams data into BigQuery one record at a time without needing to run a load job.
         * @params {string} datasetId Dataset ID of the destination table.
         * @params {string} projectId Project ID of the destination table.
         * @params {string} tableId Table ID of the destination table.
         */
        insertAll: (params: {
            datasetId: string;
            projectId: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITableDataInsertAllRequest;
        }, callback: (err: IErrorResponse, response: ITableDataInsertAllResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves table data from a specified set of rows.
         * @params {string} datasetId Dataset ID of the table to read
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Page token, returned by a previous call, identifying the result set
         * @params {string} projectId Project ID of the table to read
         * @params {string} startIndex Zero-based index of the starting row to read
         * @params {string} tableId Table ID of the table to read
         */
        list: (params: {
            datasetId: string;
            maxResults?: number;
            pageToken?: string;
            projectId: string;
            startIndex?: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITableDataList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var tables: {
        /**
         * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
         * @params {string} datasetId Dataset ID of the table to delete
         * @params {string} projectId Project ID of the table to delete
         * @params {string} tableId Table ID of the table to delete
         */
        delete: (params: {
            datasetId: string;
            projectId: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
         * @params {string} datasetId Dataset ID of the requested table
         * @params {string} projectId Project ID of the requested table
         * @params {string} tableId Table ID of the requested table
         */
        get: (params: {
            datasetId: string;
            projectId: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITable, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new, empty table in the dataset.
         * @params {string} datasetId Dataset ID of the new table
         * @params {string} projectId Project ID of the new table
         */
        insert: (params: {
            datasetId: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITable;
        }, callback: (err: IErrorResponse, response: ITable, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all tables in the specified dataset.
         * @params {string} datasetId Dataset ID of the tables to list
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Page token, returned by a previous call, to request the next page of results
         * @params {string} projectId Project ID of the tables to list
         */
        list: (params: {
            datasetId: string;
            maxResults?: number;
            pageToken?: string;
            projectId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITableList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
         * @params {string} datasetId Dataset ID of the table to update
         * @params {string} projectId Project ID of the table to update
         * @params {string} tableId Table ID of the table to update
         */
        patch: (params: {
            datasetId: string;
            projectId: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITable;
        }, callback: (err: IErrorResponse, response: ITable, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
         * @params {string} datasetId Dataset ID of the table to update
         * @params {string} projectId Project ID of the table to update
         * @params {string} tableId Table ID of the table to update
         */
        update: (params: {
            datasetId: string;
            projectId: string;
            tableId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITable;
        }, callback: (err: IErrorResponse, response: ITable, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IDataset {
        /**
         * [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
         */
        access: {
            domain: string;
            groupByEmail: string;
            role: string;
            specialGroup: string;
            userByEmail: string;
        }[];
        /**
         * [Output-only] The time when this dataset was created, in milliseconds since the epoch.
         */
        creationTime: string; // int64
        /**
         * [Required] A reference that identifies the dataset.
         */
        datasetReference: IDatasetReference;
        /**
         * [Optional] A user-friendly description of the dataset.
         */
        description: string;
        /**
         * [Output-only] A hash of the resource.
         */
        etag: string;
        /**
         * [Optional] A descriptive name for the dataset.
         */
        friendlyName: string;
        /**
         * [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
         */
        id: string;
        /**
         * [Output-only] The resource type.
         */
        kind: string;
        /**
         * [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
         */
        lastModifiedTime: string; // int64
        /**
         * [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
         */
        selfLink: string;
    }
    interface IDatasetList {
        /**
         * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
         */
        datasets: {
            datasetReference: IDatasetReference;
            friendlyName: string;
            id: string;
            kind: string;
        }[];
        /**
         * A hash value of the results page. You can use this property to determine if the page has changed since the last request.
         */
        etag: string;
        /**
         * The list type. This property always returns the value "bigquery#datasetList".
         */
        kind: string;
        /**
         * A token that can be used to request the next results page. This property is omitted on the final results page.
         */
        nextPageToken: string;
    }
    interface IDatasetReference {
        /**
         * [Required] A unique ID for this dataset, without the project name.
         */
        datasetId: string;
        /**
         * [Optional] The ID of the container project.
         */
        projectId: string;
    }
    interface IErrorProto {
        /**
         * Debugging information. This property is internal to Google and should not be used.
         */
        debugInfo: string;
        /**
         * Specifies where the error occurred, if present.
         */
        location: string;
        /**
         * A human-readable description of the error.
         */
        message: string;
        /**
         * A short error code that summarizes the error.
         */
        reason: string;
    }
    interface IGetQueryResultsResponse {
        /**
         * Whether the query result was fetched from the query cache.
         */
        cacheHit: boolean;
        /**
         * A hash of this response.
         */
        etag: string;
        /**
         * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
         */
        jobComplete: boolean;
        /**
         * Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
         */
        jobReference: IJobReference;
        /**
         * The resource type of the response.
         */
        kind: string;
        /**
         * A token used for paging results.
         */
        pageToken: string;
        /**
         * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully.
         */
        rows: ITableRow[];
        /**
         * The schema of the results. Present only when the query completes successfully.
         */
        schema: ITableSchema;
        /**
         * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
         */
        totalRows: string; // uint64
    }
    interface IJob {
        /**
         * [Required] Describes the job configuration.
         */
        configuration: IJobConfiguration;
        /**
         * [Output-only] A hash of this resource.
         */
        etag: string;
        /**
         * [Output-only] Opaque ID field of the job
         */
        id: string;
        /**
         * [Optional] Reference describing the unique-per-user name of the job.
         */
        jobReference: IJobReference;
        /**
         * [Output-only] The type of the resource.
         */
        kind: string;
        /**
         * [Output-only] A URL that can be used to access this resource again.
         */
        selfLink: string;
        /**
         * [Output-only] Information about the job, including starting time and ending time of the job.
         */
        statistics: IJobStatistics;
        /**
         * [Output-only] The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
         */
        status: IJobStatus;
    }
    interface IJobConfiguration {
        /**
         * [Pick one] Copies a table.
         */
        copy: IJobConfigurationTableCopy;
        /**
         * [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
         */
        dryRun: boolean;
        /**
         * [Pick one] Configures an extract job.
         */
        extract: IJobConfigurationExtract;
        /**
         * [Pick one] Configures a link job.
         */
        link: IJobConfigurationLink;
        /**
         * [Pick one] Configures a load job.
         */
        load: IJobConfigurationLoad;
        /**
         * [Pick one] Configures a query job.
         */
        query: IJobConfigurationQuery;
    }
    interface IJobConfigurationExtract {
        /**
         * [Optional] The compression type to use for exported files. Possible values include GZIP and NONE. The default value is NONE.
         */
        compression: string;
        /**
         * [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO. The default value is CSV. Tables with nested or repeated fields cannot be exported as CSV.
         */
        destinationFormat: string;
        /**
         * [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
         */
        destinationUri: string;
        /**
         * [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
         */
        destinationUris: string[];
        /**
         * [Optional] Delimiter to use between fields in the exported data. Default is ','
         */
        fieldDelimiter: string;
        /**
         * [Optional] Whether to print out a header row in the results. Default is true.
         */
        printHeader: boolean;
        /**
         * [Required] A reference to the table being exported.
         */
        sourceTable: ITableReference;
    }
    interface IJobConfigurationLink {
        /**
         * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        createDisposition: string;
        /**
         * [Required] The destination table of the link job.
         */
        destinationTable: ITableReference;
        /**
         * [Required] URI of source table to link.
         */
        sourceUri: string[];
        /**
         * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        writeDisposition: string;
    }
    interface IJobConfigurationLoad {
        /**
         * [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. Default is false which treats short rows as errors. Only applicable to CSV, ignored for other formats.
         */
        allowJaggedRows: boolean;
        /**
         * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
         */
        allowQuotedNewlines: boolean;
        /**
         * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        createDisposition: string;
        /**
         * [Required] The destination table to load the data into.
         */
        destinationTable: ITableReference;
        /**
         * [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
         */
        encoding: string;
        /**
         * [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
         */
        fieldDelimiter: string;
        /**
         * [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false which treats unknown values as errors. For CSV this ignores extra values at the end of a line. For JSON this ignores named values that do not match any column name.
         */
        ignoreUnknownValues: boolean;
        /**
         * [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an 'invalid' error is returned in the job result and the job fails. The default value is 0, which requires that all records are valid.
         */
        maxBadRecords: number; // int32
        /**
         * [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
         */
        quote: string;
        /**
         * [Optional] The schema for the destination table. The schema can be omitted if the destination table already exists or if the schema can be inferred from the loaded data.
         */
        schema: ITableSchema;
        /**
         * [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
         */
        schemaInline: string;
        /**
         * [Deprecated] The format of the schemaInline property.
         */
        schemaInlineFormat: string;
        /**
         * [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
         */
        skipLeadingRows: number; // int32
        /**
         * [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". The default value is CSV.
         */
        sourceFormat: string;
        /**
         * [Required] The fully-qualified URIs that point to your data on Google Cloud Storage.
         */
        sourceUris: string[];
        /**
         * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        writeDisposition: string;
    }
    interface IJobConfigurationQuery {
        /**
         * If true, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set.
         */
        allowLargeResults: boolean;
        /**
         * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        createDisposition: string;
        /**
         * [Optional] Specifies the default dataset to use for unqualified table names in the query.
         */
        defaultDataset: IDatasetReference;
        /**
         * [Optional] Describes the table where the query results should be stored. If not present, a new table will be created to store the results.
         */
        destinationTable: ITableReference;
        /**
         * [Experimental] Flattens all nested and repeated fields in the query results. The default value is true. allowLargeResults must be true if this is set to false.
         */
        flattenResults: boolean;
        /**
         * [Deprecated] This property is deprecated.
         */
        preserveNulls: boolean;
        /**
         * [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
         */
        priority: string;
        /**
         * [Required] BigQuery SQL query to execute.
         */
        query: string;
        /**
         * [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
         */
        useQueryCache: boolean;
        /**
         * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        writeDisposition: string;
    }
    interface IJobConfigurationTableCopy {
        /**
         * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        createDisposition: string;
        /**
         * [Required] The destination table
         */
        destinationTable: ITableReference;
        /**
         * [Pick one] Source table to copy.
         */
        sourceTable: ITableReference;
        /**
         * [Pick one] Source tables to copy.
         */
        sourceTables: ITableReference[];
        /**
         * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
         */
        writeDisposition: string;
    }
    interface IJobList {
        /**
         * A hash of this page of results.
         */
        etag: string;
        /**
         * List of jobs that were requested.
         */
        jobs: {
            configuration: IJobConfiguration;
            errorResult: IErrorProto;
            id: string;
            jobReference: IJobReference;
            kind: string;
            state: string;
            statistics: IJobStatistics;
            status: IJobStatus;
            user_email: string;
        }[];
        /**
         * The resource type of the response.
         */
        kind: string;
        /**
         * A token to request the next page of results.
         */
        nextPageToken: string;
        /**
         * Total number of jobs in this collection.
         */
        totalItems: number; // int32
    }
    interface IJobReference {
        /**
         * [Required] ID of the job.
         */
        jobId: string;
        /**
         * [Required] Project ID being billed for the job.
         */
        projectId: string;
    }
    interface IJobStatistics {
        /**
         * [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
         */
        creationTime: string; // int64
        /**
         * [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
         */
        endTime: string; // int64
        /**
         * [Output-only] Statistics for a load job.
         */
        load: IJobStatistics3;
        /**
         * [Output-only] Statistics for a query job.
         */
        query: IJobStatistics2;
        /**
         * [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
         */
        startTime: string; // int64
        /**
         * [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
         */
        totalBytesProcessed: string; // int64
    }
    interface IJobStatistics2 {
        /**
         * [Output-only] Whether the query result was fetched from the query cache.
         */
        cacheHit: boolean;
        /**
         * [Output-only] Total bytes processed for this job.
         */
        totalBytesProcessed: string; // int64
    }
    interface IJobStatistics3 {
        /**
         * [Output-only] Number of bytes of source data in a joad job.
         */
        inputFileBytes: string; // int64
        /**
         * [Output-only] Number of source files in a load job.
         */
        inputFiles: string; // int64
        /**
         * [Output-only] Size of the loaded data in bytes. Note that while an import job is in the running state, this value may change.
         */
        outputBytes: string; // int64
        /**
         * [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
         */
        outputRows: string; // int64
    }
    interface IJobStatus {
        /**
         * [Output-only] Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
         */
        errorResult: IErrorProto;
        /**
         * [Output-only] All errors encountered during the running of the job. Errors here do not necessarily mean that the job has completed or was unsuccessful.
         */
        errors: IErrorProto[];
        /**
         * [Output-only] Running state of the job.
         */
        state: string;
    }
    /**
     * Represents a single JSON object.
     */
    interface IJsonObject {
    }
    interface IJsonValue {
        [name: string]: any; // any
    }
    interface IProjectList {
        /**
         * A hash of the page of results
         */
        etag: string;
        /**
         * The type of list.
         */
        kind: string;
        /**
         * A token to request the next page of results.
         */
        nextPageToken: string;
        /**
         * Projects to which you have at least READ access.
         */
        projects: {
            friendlyName: string;
            id: string;
            kind: string;
            numericId: string; // uint64
            projectReference: IProjectReference;
        }[];
        /**
         * The total number of projects in the list.
         */
        totalItems: number; // int32
    }
    interface IProjectReference {
        /**
         * [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project.
         */
        projectId: string;
    }
    interface IQueryRequest {
        /**
         * [Optional] Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
         */
        defaultDataset: IDatasetReference;
        /**
         * [Optional] If set, don't actually run the query. A valid query will return an empty response, while an invalid query will return the same error it would if it wasn't a dry run. The default value is false.
         */
        dryRun: boolean;
        /**
         * The resource type of the request.
         */
        kind: string;
        /**
         * [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
         */
        maxResults: number; // uint32
        /**
         * [Deprecated] This property is deprecated.
         */
        preserveNulls: boolean;
        /**
         * [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]".
         */
        query: string;
        /**
         * [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds).
         */
        timeoutMs: number; // uint32
        /**
         * [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
         */
        useQueryCache: boolean;
    }
    interface IQueryResponse {
        /**
         * Whether the query result was fetched from the query cache.
         */
        cacheHit: boolean;
        /**
         * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
         */
        jobComplete: boolean;
        /**
         * Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
         */
        jobReference: IJobReference;
        /**
         * The resource type.
         */
        kind: string;
        /**
         * A token used for paging results.
         */
        pageToken: string;
        /**
         * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
         */
        rows: ITableRow[];
        /**
         * The schema of the results. Present only when the query completes successfully.
         */
        schema: ITableSchema;
        /**
         * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
         */
        totalBytesProcessed: string; // int64
        /**
         * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
         */
        totalRows: string; // uint64
    }
    interface ITable {
        /**
         * [Output-only] The time when this table was created, in milliseconds since the epoch.
         */
        creationTime: string; // int64
        /**
         * [Optional] A user-friendly description of this table.
         */
        description: string;
        /**
         * [Output-only] A hash of this resource.
         */
        etag: string;
        /**
         * [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
         */
        expirationTime: string; // int64
        /**
         * [Optional] A descriptive name for this table.
         */
        friendlyName: string;
        /**
         * [Output-only] An opaque ID uniquely identifying the table.
         */
        id: string;
        /**
         * [Output-only] The type of the resource.
         */
        kind: string;
        /**
         * [Output-only] The time when this table was last modified, in milliseconds since the epoch.
         */
        lastModifiedTime: string; // int64
        /**
         * [Output-only] The size of the table in bytes.
         */
        numBytes: string; // int64
        /**
         * [Output-only] The number of rows of data in this table.
         */
        numRows: string; // uint64
        /**
         * [Optional] Describes the schema of this table.
         */
        schema: ITableSchema;
        /**
         * [Output-only] A URL that can be used to access this resource again.
         */
        selfLink: string;
        /**
         * [Required] Reference describing the ID of this table.
         */
        tableReference: ITableReference;
        /**
         * [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. The default value is TABLE.
         */
        type: string;
        /**
         * [Optional] The view definition.
         */
        view: IViewDefinition;
    }
    /**
     * Represents a single cell in the result set. Users of the java client can detect whether their value result is null by calling 'com.google.api.client.util.Data.isNull(cell.getV())'.
     */
    interface ITableCell {
        v: any;
    }
    interface ITableDataInsertAllRequest {
        /**
         * The resource type of the response.
         */
        kind: string;
        /**
         * The rows to insert.
         */
        rows: {
            insertId: string;
            json: IJsonObject;
        }[];
    }
    interface ITableDataInsertAllResponse {
        /**
         * An array of errors for rows that were not inserted.
         */
        insertErrors: {
            errors: IErrorProto[];
            index: number; // uint32
        }[];
        /**
         * The resource type of the response.
         */
        kind: string;
    }
    interface ITableDataList {
        /**
         * A hash of this page of results.
         */
        etag: string;
        /**
         * The resource type of the response.
         */
        kind: string;
        /**
         * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
         */
        pageToken: string;
        /**
         * Rows of results.
         */
        rows: ITableRow[];
        /**
         * The total number of rows in the complete table.
         */
        totalRows: string; // int64
    }
    interface ITableFieldSchema {
        /**
         * [Optional] The field description.
         */
        description: string;
        /**
         * [Optional] Describes the nested schema fields if the type property is set to RECORD.
         */
        fields: ITableFieldSchema[];
        /**
         * [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
         */
        mode: string;
        /**
         * [Required] The field name.
         */
        name: string;
        /**
         * [Required] The field data type. Possible values include STRING, INTEGER, FLOAT, BOOLEAN, TIMESTAMP or RECORD (where RECORD indicates that the field contains a nested schema).
         */
        type: string;
    }
    interface ITableList {
        /**
         * A hash of this page of results.
         */
        etag: string;
        /**
         * The type of list.
         */
        kind: string;
        /**
         * A token to request the next page of results.
         */
        nextPageToken: string;
        /**
         * Tables in the requested dataset.
         */
        tables: {
            friendlyName: string;
            id: string;
            kind: string;
            tableReference: ITableReference;
            type: string;
        }[];
        /**
         * The total number of tables in the dataset.
         */
        totalItems: number; // int32
    }
    interface ITableReference {
        /**
         * [Required] ID of the dataset containing the table.
         */
        datasetId: string;
        /**
         * [Required] ID of the project billed for storage of the table.
         */
        projectId: string;
        /**
         * [Required] ID of the table.
         */
        tableId: string;
    }
    /**
     * Represents a single row in the result set, consisting of one or more fields.
     */
    interface ITableRow {
        f: ITableCell[];
    }
    interface ITableSchema {
        /**
         * Describes the fields in a table.
         */
        fields: ITableFieldSchema[];
    }
    interface IViewDefinition {
        /**
         * [Required] A query that BigQuery executes when the view is referenced.
         */
        query: string;
    }
}
