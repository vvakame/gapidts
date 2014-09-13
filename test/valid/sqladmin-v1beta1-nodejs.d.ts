// Type definitions for Google Cloud SQL Administration API v1beta1
// Project: https://developers.google.com/cloud-sql/docs/admin-api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/sqlservice.admin
//   Manage your Google SQL Service instances

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function sqladmin(version:string):typeof googleapis.sqladmin;
    function sqladmin(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.sqladmin;
}
/**
 * API for Cloud SQL database instance management.
 */
declare module googleapis.sqladmin {
    var backupRuns: {
        /**
         * Retrieves a resource containing information about a backup run.
         * @params {string} backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
         * @params {string} dueTime The time when this run is due to start in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        get: (params: {
            backupConfiguration: string;
            dueTime: string;
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IBackupRun, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.
         * @params {string} backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {number} maxResults Maximum number of backup runs per response.
         * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
         * @params {string} project Project ID of the project that contains the instance.
         */
        list: (params: {
            backupConfiguration: string;
            instance: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IBackupRunsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var instances: {
        /**
         * Deletes a Cloud SQL instance.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance to be deleted.
         */
        delete: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstancesDeleteResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance to be exported.
         */
        export: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInstancesExportRequest;
        }, callback: (err: IErrorResponse, response: IInstancesExportResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves a resource containing information about a Cloud SQL instance.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        get: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDatabaseInstance, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        import: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInstancesImportRequest;
        }, callback: (err: IErrorResponse, response: IInstancesImportResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new Cloud SQL instance.
         * @params {string} project Project ID of the project to which the newly created Cloud SQL instances should belong.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDatabaseInstance;
        }, callback: (err: IErrorResponse, response: IInstancesInsertResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists instances under a given project in the alphabetical order of the instance name.
         * @params {number} maxResults The maximum number of results to return per response.
         * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
         * @params {string} project Project ID of the project for which to list Cloud SQL instances.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstancesListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        patch: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDatabaseInstance;
        }, callback: (err: IErrorResponse, response: IInstancesUpdateResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Restarts a Cloud SQL instance.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance to be restarted.
         */
        restart: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstancesRestartResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Restores a backup of a Cloud SQL instance.
         * @params {string} backupConfiguration The identifier of the backup configuration. This gets generated automatically when a backup configuration is created.
         * @params {string} dueTime The time when this run is due to start in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        restoreBackup: (params: {
            backupConfiguration: string;
            dueTime: string;
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstancesRestoreBackupResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        update: (params: {
            instance: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDatabaseInstance;
        }, callback: (err: IErrorResponse, response: IInstancesUpdateResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var operations: {
        /**
         * Retrieves an instance operation that has been performed on an instance.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {string} operation Instance operation ID.
         * @params {string} project Project ID of the project that contains the instance.
         */
        get: (params: {
            instance: string;
            operation: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstanceOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
         * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
         * @params {number} maxResults Maximum number of operations per response.
         * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
         * @params {string} project Project ID of the project that contains the instance.
         */
        list: (params: {
            instance: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperationsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var tiers: {
        /**
         * Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.
         */
        list: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITiersListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * Database instance backup configuration.
     */
    interface IBackupConfiguration {
        /**
         * Whether this configuration is enabled.
         */
        enabled: boolean;
        /**
         * Identifier for this configuration. This gets generated automatically when a backup configuration is created.
         */
        id: string;
        /**
         * This is always sql#backupConfiguration.
         */
        kind: string;
        /**
         * Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM.
         */
        startTime: string;
    }
    /**
     * A database instance backup run resource.
     */
    interface IBackupRun {
        /**
         * Backup Configuration identifier.
         */
        backupConfiguration: string;
        /**
         * The due time of this run in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        dueTime: string; // date-time
        /**
         * The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        endTime: string; // date-time
        /**
         * The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        enqueuedTime: string; // date-time
        /**
         * Information about why the backup operation failed. This is only present if the run has the FAILED status.
         */
        error: IOperationError;
        /**
         * Name of the database instance.
         */
        instance: string;
        /**
         * This is always sql#backupRun.
         */
        kind: string;
        /**
         * The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        startTime: string; // date-time
        /**
         * The status of this run.
         */
        status: string;
    }
    /**
     * Backup run list results.
     */
    interface IBackupRunsListResponse {
        /**
         * A list of backup runs in reverse chronological order of the enqueued time.
         */
        items: IBackupRun[];
        /**
         * This is always sql#backupRunsList.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * A Cloud SQL instance resource.
     */
    interface IDatabaseInstance {
        /**
         * The current disk usage of the instance in bytes.
         */
        currentDiskSize: string; // int64
        /**
         * The database engine type and version, for example MYSQL_5_5 for MySQL 5.5.
         */
        databaseVersion: string;
        /**
         * Etag for this resource - a version number for the settings object in this resource. This field has no effect when passed as a request parameter. Instead, the contents of this field should be passed in an 'If-Match' http header for use in optimistic locking.
         */
        etag: string;
        /**
         * Name of the Cloud SQL instance. This does not include the project ID.
         */
        instance: string;
        /**
         * This is always sql#instance.
         */
        kind: string;
        /**
         * The maximum disk size of the instance in bytes.
         */
        maxDiskSize: string; // int64
        /**
         * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
         */
        project: string;
        /**
         * The geographical region. Can be us-east1, us-central or europe-west1. Defaults to us-central. The region can not be changed after instance creation.
         */
        region: string;
        /**
         * The user settings.
         */
        settings: ISettings;
        /**
         * The current serving state of the Cloud SQL instance. This can be one of the following.
         * RUNNABLE: The instance is running, or is ready to run when accessed.
         * SUSPENDED: The instance is not available, for example due to problems with billing.
         * PENDING_CREATE: The instance is being created.
         * MAINTENANCE: The instance is down for maintenance.
         * UNKNOWN_STATE: The state of the instance is unknown.
         */
        state: string;
    }
    /**
     * Database instance export context.
     */
    interface IExportContext {
        /**
         * Databases (for example, guestbook) from which the export is made. If unspecified, all databases are exported.
         */
        database: string[];
        /**
         * This is always sql#exportContext.
         */
        kind: string;
        /**
         * Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database.
         */
        table: string[];
        /**
         * The path to the file in Google Cloud Storage where the export will be stored, or where it was already stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed.
         */
        uri: string;
    }
    /**
     * Database instance import context.
     */
    interface IImportContext {
        /**
         * The database (for example, guestbook) to which the import is made. If not set, it is assumed that the database is specified in the file to be imported.
         */
        database: string;
        /**
         * This is always sql#importContext.
         */
        kind: string;
        /**
         * A path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported.
         */
        uri: string[];
    }
    /**
     * An Operations resource contains information about database instance operations such as create, delete, and restart. Operations resources are created in response to operations that were initiated; you never create them directly.
     */
    interface IInstanceOperation {
        /**
         * The time this operation finished in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        endTime: string; // date-time
        /**
         * The time this operation was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        enqueuedTime: string; // date-time
        /**
         * The error(s) encountered by this operation. Only set if the operation results in an error.
         */
        error: IOperationError[];
        /**
         * The context for export operation, if applicable.
         */
        exportContext: IExportContext;
        /**
         * The context for import operation, if applicable.
         */
        importContext: IImportContext;
        /**
         * Name of the database instance.
         */
        instance: string;
        /**
         * This is always sql#instanceOperation.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
        /**
         * The type of the operation. Valid values are CREATE, DELETE, UPDATE, RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME.
         */
        operationType: string;
        /**
         * The time this operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        startTime: string; // date-time
        /**
         * The state of an operation. Valid values are PENDING, RUNNING, DONE, UNKNOWN.
         */
        state: string;
        /**
         * The email address of the user who initiated this operation.
         */
        userEmailAddress: string;
    }
    /**
     * Database instance delete response.
     */
    interface IInstancesDeleteResponse {
        /**
         * This is always sql#instancesDelete.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance export request.
     */
    interface IInstancesExportRequest {
        /**
         * Contains details about the export operation.
         */
        exportContext: IExportContext;
    }
    /**
     * Database instance export response.
     */
    interface IInstancesExportResponse {
        /**
         * This is always sql#instancesExport.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance import request.
     */
    interface IInstancesImportRequest {
        /**
         * Contains details about the import operation.
         */
        importContext: IImportContext;
    }
    /**
     * Database instance import response.
     */
    interface IInstancesImportResponse {
        /**
         * This is always sql#instancesImport.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance insert response.
     */
    interface IInstancesInsertResponse {
        /**
         * This is always sql#instancesInsert.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instances list response.
     */
    interface IInstancesListResponse {
        /**
         * List of database instance resources.
         */
        items: IDatabaseInstance[];
        /**
         * This is always sql#instancesList.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * Database instance restart response.
     */
    interface IInstancesRestartResponse {
        /**
         * This is always sql#instancesRestart.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance restore backup response.
     */
    interface IInstancesRestoreBackupResponse {
        /**
         * This is always sql#instancesRestoreBackup.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance update response.
     */
    interface IInstancesUpdateResponse {
        /**
         * This is always sql#instancesUpdate.
         */
        kind: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this identifier to retrieve information about the operation.
         */
        operation: string;
    }
    /**
     * Database instance operation error.
     */
    interface IOperationError {
        /**
         * Identifies the specific error that occurred.
         */
        code: string;
        /**
         * This is always sql#operationError.
         */
        kind: string;
    }
    /**
     * Database instance list operations response.
     */
    interface IOperationsListResponse {
        /**
         * List of operation resources.
         */
        items: IInstanceOperation[];
        /**
         * This is always sql#operationsList.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * Database instance settings.
     */
    interface ISettings {
        /**
         * The activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is RUNNABLE. This can be one of the following.
         * ALWAYS: The instance should always be active.
         * NEVER: The instance should never be activated.
         * ON_DEMAND: The instance is activated upon receiving requests.
         */
        activationPolicy: string;
        /**
         * The AppEngine app ids that can access this instance.
         */
        authorizedGaeApplications: string[];
        /**
         * The daily backup configuration for the instance.
         */
        backupConfiguration: IBackupConfiguration[];
        /**
         * This is always sql#settings.
         */
        kind: string;
        /**
         * The pricing plan for this instance. This can be either PER_USE or PACKAGE.
         */
        pricingPlan: string;
        /**
         * The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS.
         */
        replicationType: string;
        /**
         * The tier of service for this instance, for example D1, D2. For more information, see pricing.
         */
        tier: string;
    }
    /**
     * A Google Cloud SQL service tier resource.
     */
    interface ITier {
        /**
         * The maximum disk size of this tier in bytes.
         */
        DiskQuota: string; // int64
        /**
         * The maximum RAM usage of this tier in bytes.
         */
        RAM: string; // int64
        /**
         * This is always sql#tier.
         */
        kind: string;
        /**
         * The applicable regions for this tier. Can be us-east1 and europe-west1.
         */
        region: string[];
        /**
         * An identifier for the service tier, for example D1, D2 etc. For related information, see Pricing.
         */
        tier: string;
    }
    /**
     * Tiers list response.
     */
    interface ITiersListResponse {
        /**
         * List of tiers.
         */
        items: ITier[];
        /**
         * This is always sql#tiersList.
         */
        kind: string;
    }
}
