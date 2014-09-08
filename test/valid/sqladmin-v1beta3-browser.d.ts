// Type definitions for Google Cloud SQL Administration API v1beta3
// Project: https://developers.google.com/cloud-sql/docs/admin-api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * API for Cloud SQL database instance management.
     */
    module sqladmin {
        var backupRuns: {
            /**
             * Retrieves information about a specified backup run for a Cloud SQL instance.
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
            }) => { execute(callback: (data: IResponse<IBackupRun>, original: string) => void):void; };
            /**
             * Lists all backup runs associated with a Cloud SQL instance.
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
            }) => { execute(callback: (data: IResponse<IBackupRunsListResponse>, original: string) => void):void; };
        };
        var flags: {
            /**
             * Lists all database flags that can be set for Google Cloud SQL instances.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IFlagsListResponse>, original: string) => void):void; };
        };
        var instances: {
            /**
             * Creates a Cloud SQL instance as a clone of a source instance.
             * @params {string} project Project ID of the source as well as the clone Cloud SQL instance.
             */
            clone: (params: {
                project: string;
                resource?: IInstancesCloneRequest;
            }) => { execute(callback: (data: IResponse<IInstancesCloneResponse>, original: string) => void):void; };
            /**
             * Deletes a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance to be deleted.
             */
            delete: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstancesDeleteResponse>, original: string) => void):void; };
            /**
             * Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance to be exported.
             */
            export: (params: {
                instance: string;
                project: string;
                resource?: IInstancesExportRequest;
            }) => { execute(callback: (data: IResponse<IInstancesExportResponse>, original: string) => void):void; };
            /**
             * Retrieves information about a Cloud SQL instance.
             * @params {string} instance Database instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            get: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IDatabaseInstance>, original: string) => void):void; };
            /**
             * Imports data into a Cloud SQL instance from a MySQL dump file stored in a Google Cloud Storage bucket.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            import: (params: {
                instance: string;
                project: string;
                resource?: IInstancesImportRequest;
            }) => { execute(callback: (data: IResponse<IInstancesImportResponse>, original: string) => void):void; };
            /**
             * Creates a new Cloud SQL instance.
             * @params {string} project Project ID of the project to which the newly created Cloud SQL instances should belong.
             */
            insert: (params: {
                project: string;
                resource?: IDatabaseInstance;
            }) => { execute(callback: (data: IResponse<IInstancesInsertResponse>, original: string) => void):void; };
            /**
             * Lists instances for a given project, in alphabetical order by instance name.
             * @params {number} maxResults The maximum number of results to return per response.
             * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
             * @params {string} project Project ID of the project for which to list Cloud SQL instances.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstancesListResponse>, original: string) => void):void; };
            /**
             * Updates the settings of a Cloud SQL instance. This method supports patch semantics.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            patch: (params: {
                instance: string;
                project: string;
                resource?: IDatabaseInstance;
            }) => { execute(callback: (data: IResponse<IInstancesUpdateResponse>, original: string) => void):void; };
            /**
             * Promotes the read replica instance to be a stand-alone Cloud SQL instance.
             * @params {string} instance Cloud SQL read replica instance name.
             * @params {string} project ID of the project that contains the read replica.
             */
            promoteReplica: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstancesPromoteReplicaResponse>, original: string) => void):void; };
            /**
             * Deletes all client certificates and generates a new server SSL certificate for a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            resetSslConfig: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstancesResetSslConfigResponse>, original: string) => void):void; };
            /**
             * Restarts a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance to be restarted.
             */
            restart: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstancesRestartResponse>, original: string) => void):void; };
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
            }) => { execute(callback: (data: IResponse<IInstancesRestoreBackupResponse>, original: string) => void):void; };
            /**
             * Sets the password for the root user of the specified Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            setRootPassword: (params: {
                instance: string;
                project: string;
                resource?: IInstanceSetRootPasswordRequest;
            }) => { execute(callback: (data: IResponse<IInstancesSetRootPasswordResponse>, original: string) => void):void; };
            /**
             * Updates the settings of a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            update: (params: {
                instance: string;
                project: string;
                resource?: IDatabaseInstance;
            }) => { execute(callback: (data: IResponse<IInstancesUpdateResponse>, original: string) => void):void; };
        };
        var operations: {
            /**
             * Retrieves information about a specific operation that was performed on a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} operation Instance operation ID.
             * @params {string} project Project ID of the project that contains the instance.
             */
            get: (params: {
                instance: string;
                operation: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInstanceOperation>, original: string) => void):void; };
            /**
             * Lists all operations that have been performed on a Cloud SQL instance.
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
            }) => { execute(callback: (data: IResponse<IOperationsListResponse>, original: string) => void):void; };
        };
        var sslCerts: {
            /**
             * Deletes an SSL certificate from a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance to be deleted.
             * @params {string} sha1Fingerprint Sha1 FingerPrint.
             */
            delete: (params: {
                instance: string;
                project: string;
                sha1Fingerprint: string;
            }) => { execute(callback: (data: IResponse<ISslCertsDeleteResponse>, original: string) => void):void; };
            /**
             * Retrieves an SSL certificate as specified by its SHA-1 fingerprint.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project that contains the instance.
             * @params {string} sha1Fingerprint Sha1 FingerPrint.
             */
            get: (params: {
                instance: string;
                project: string;
                sha1Fingerprint: string;
            }) => { execute(callback: (data: IResponse<ISslCert>, original: string) => void):void; };
            /**
             * Creates an SSL certificate and returns the certificate, the associated private key, and the server certificate authority.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project to which the newly created Cloud SQL instances should belong.
             */
            insert: (params: {
                instance: string;
                project: string;
                resource?: ISslCertsInsertRequest;
            }) => { execute(callback: (data: IResponse<ISslCertsInsertResponse>, original: string) => void):void; };
            /**
             * Lists all of the current SSL certificates defined for a Cloud SQL instance.
             * @params {string} instance Cloud SQL instance ID. This does not include the project ID.
             * @params {string} project Project ID of the project for which to list Cloud SQL instances.
             */
            list: (params: {
                instance: string;
                project: string;
            }) => { execute(callback: (data: IResponse<ISslCertsListResponse>, original: string) => void):void; };
        };
        var tiers: {
            /**
             * Lists service tiers that can be used to create Google Cloud SQL instances.
             * @params {string} project Project ID of the project for which to list tiers.
             */
            list: (params: {
                project: string;
            }) => { execute(callback: (data: IResponse<ITiersListResponse>, original: string) => void):void; };
        };
        /**
         * Database instance backup configuration.
         */
        interface IBackupConfiguration {
            /**
             * Whether binary log is enabled. If backup configuration is disabled, binary log must be disabled as well.
             */
            binaryLogEnabled: boolean;
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
         * Binary log coordinates.
         */
        interface IBinLogCoordinates {
            /**
             * Name of the binary log file for a Cloud SQL instance.
             */
            binLogFileName: string;
            /**
             * Position (offset) within the binary log file.
             */
            binLogPosition: string; // int64
            /**
             * This is always sql#binLogCoordinates.
             */
            kind: string;
        }
        /**
         * Database instance clone context.
         */
        interface ICloneContext {
            /**
             * Binary log coordinates, if specified, indentify the position up to which the source instance should be cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates.
             */
            binLogCoordinates: IBinLogCoordinates;
            /**
             * Name of the Cloud SQL instance to be created as a clone.
             */
            destinationInstanceName: string;
            /**
             * This is always sql#cloneContext.
             */
            kind: string;
            /**
             * Name of the Cloud SQL instance to be cloned.
             */
            sourceInstanceName: string;
        }
        /**
         * MySQL flags for Cloud SQL instances.
         */
        interface IDatabaseFlags {
            /**
             * The name of the flag. These flags are passed at instance startup, so include both MySQL server options and MySQL system variables. Flags should be specified with underscores, not hyphens. Refer to the official MySQL documentation on server options and system variables for descriptions of what these flags do. Acceptable values are:  character_set_server utf8 or utf8mb4 event_scheduler on or off (Note: The event scheduler will only work reliably if the instance activationPolicy is set to ALWAYS) general_log on or off group_concat_max_len 4..17179869184 innodb_flush_log_at_trx_commit 0..2 innodb_lock_wait_timeout 1..1073741824 log_bin_trust_function_creators on or off log_output Can be either TABLE or NONE, FILE is not supported log_queries_not_using_indexes on or off long_query_time 0..30000000 lower_case_table_names 0..2 max_allowed_packet 16384..1073741824 read_only on or off skip_show_database on or off slow_query_log on or off. If set to on, you must also set the log_output flag to TABLE to receive logs. wait_timeout 1..31536000
             */
            name: string;
            /**
             * The value of the flag. Booleans should be set using 1 for true, and 0 for false. This field must be omitted if the flag doesn't take a value.
             */
            value: string;
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
             * The database engine type and version. Can be MYSQL_5_5 or MYSQL_5_6. Defaults to MYSQL_5_5. The databaseVersion cannot be changed after instance creation.
             */
            databaseVersion: string;
            /**
             * HTTP 1.1 Entity tag for the resource.
             */
            etag: string;
            /**
             * Name of the Cloud SQL instance. This does not include the project ID.
             */
            instance: string;
            /**
             * The instance type. This can be one of the following.
             * CLOUD_SQL_INSTANCE: Regular Cloud SQL instance.
             * READ_REPLICA_INSTANCE: Cloud SQL instance acting as a read-replica.
             */
            instanceType: string;
            /**
             * The assigned IP addresses for the instance.
             */
            ipAddresses: IIpMapping[];
            /**
             * This is always sql#instance.
             */
            kind: string;
            /**
             * The name of the instance which will act as master in the replication setup.
             */
            masterInstanceName: string;
            /**
             * The maximum disk size of the instance in bytes.
             */
            maxDiskSize: string; // int64
            /**
             * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
             */
            project: string;
            /**
             * The geographical region. Can be us-east1, us-central, asia-east1 or europe-west1. Defaults to us-central. The region can not be changed after instance creation.
             */
            region: string;
            /**
             * The replicas of the instance.
             */
            replicaNames: string[];
            /**
             * SSL configuration.
             */
            serverCaCert: ISslCert;
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
         * A Google Cloud SQL service flag resource.
         */
        interface IFlag {
            /**
             * For STRING flags, a list of strings that the value can be set to.
             */
            allowedStringValues: string[];
            /**
             * The database version this flag applies to. Currently this can only be [MYSQL_5_5].
             */
            appliesTo: string[];
            /**
             * This is always sql#flag.
             */
            kind: string;
            /**
             * For INTEGER flags, the maximum allowed value.
             */
            maxValue: string; // int64
            /**
             * For INTEGER flags, the minimum allowed value.
             */
            minValue: string; // int64
            /**
             * This is the name of the flag. Flag names always use underscores, not hyphens, e.g. max_allowed_packet
             */
            name: string;
            /**
             * The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER or NONE. NONE is used for flags which do not take a value, such as skip_grant_tables.
             */
            type: string;
        }
        /**
         * Flags list response.
         */
        interface IFlagsListResponse {
            /**
             * List of flags.
             */
            items: IFlag[];
            /**
             * This is always sql#flagsList.
             */
            kind: string;
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
         * Database instance set root password request.
         */
        interface IInstanceSetRootPasswordRequest {
            /**
             * Set Root Password Context.
             */
            setRootPasswordContext: ISetRootPasswordContext;
        }
        /**
         * Database instance clone request.
         */
        interface IInstancesCloneRequest {
            /**
             * Contains details about the clone operation.
             */
            cloneContext: ICloneContext;
        }
        /**
         * Database instance clone response.
         */
        interface IInstancesCloneResponse {
            /**
             * This is always sql#instancesClone.
             */
            kind: string;
            /**
             * An unique identifier for the operation associated with the cloned instance. You can use this identifier to retrieve the Operations resource, which has information about the operation.
             */
            operation: string;
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
         * Database promote read replica response.
         */
        interface IInstancesPromoteReplicaResponse {
            /**
             * This is always sql#instancesPromoteReplica.
             */
            kind: string;
            /**
             * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
             */
            operation: string;
        }
        /**
         * Database instance resetSslConfig response.
         */
        interface IInstancesResetSslConfigResponse {
            /**
             * This is always sql#instancesResetSslConfig.
             */
            kind: string;
            /**
             * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. All ssl client certificates will be deleted and a new server certificate will be created. Does not take effect until the next instance restart.
             */
            operation: string;
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
         * Database instance set root password response.
         */
        interface IInstancesSetRootPasswordResponse {
            /**
             * This is always sql#instancesSetRootPassword.
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
         * IP Management configuration.
         */
        interface IIpConfiguration {
            /**
             * The list of external networks that are allowed to connect to the instance using the IP. In CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).
             */
            authorizedNetworks: string[];
            /**
             * Whether the instance should be assigned an IP address or not.
             */
            enabled: boolean;
            /**
             * Whether the mysqld should default to 'REQUIRE X509' for users connecting over IP.
             */
            requireSsl: boolean;
        }
        /**
         * Database instance IP Mapping.
         */
        interface IIpMapping {
            /**
             * The IP address assigned.
             */
            ipAddress: string;
            /**
             * The due time for this IP to be retired in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. This field is only available when the IP is scheduled to be retired.
             */
            timeToRetire: string; // date-time
        }
        /**
         * Preferred location. This specifies where a Cloud SQL instance should preferably be located, either in a specific Compute Engine zone, or co-located with an App Engine application. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
         */
        interface ILocationPreference {
            /**
             * The App Engine application to follow, it must be in the same region as the Cloud SQL instance.
             */
            followGaeApplication: string;
            /**
             * This is always sql#locationPreference.
             */
            kind: string;
            /**
             * The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b, etc.).
             */
            zone: string;
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
         * Database instance set root password context.
         */
        interface ISetRootPasswordContext {
            /**
             * This is always sql#setRootUserContext.
             */
            kind: string;
            /**
             * The password for the root user.
             */
            password: string;
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
             * The App Engine app IDs that can access this instance.
             */
            authorizedGaeApplications: string[];
            /**
             * The daily backup configuration for the instance.
             */
            backupConfiguration: IBackupConfiguration[];
            /**
             * The database flags passed to the instance at startup.
             */
            databaseFlags: IDatabaseFlags[];
            /**
             * Configuration specific to read replica instance. Indicates whether replication is enabled or not.
             */
            databaseReplicationEnabled: boolean;
            /**
             * The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance.
             */
            ipConfiguration: IIpConfiguration;
            /**
             * This is always sql#settings.
             */
            kind: string;
            /**
             * The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or GCE zone for better performance.
             */
            locationPreference: ILocationPreference;
            /**
             * The pricing plan for this instance. This can be either PER_USE or PACKAGE.
             */
            pricingPlan: string;
            /**
             * The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS.
             */
            replicationType: string;
            /**
             * The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
             */
            settingsVersion: string; // int64
            /**
             * The tier of service for this instance, for example D1, D2. For more information, see pricing.
             */
            tier: string;
        }
        /**
         * SslCerts Resource
         */
        interface ISslCert {
            /**
             * PEM representation.
             */
            cert: string;
            /**
             * Serial number, as extracted from the certificate.
             */
            certSerialNumber: string;
            /**
             * User supplied name. Constrained to [a-zA-Z.-_ ]+.
             */
            commonName: string;
            /**
             * Time when the certificate was created.
             */
            createTime: string; // date-time
            /**
             * Time when the certificate expires.
             */
            expirationTime: string; // date-time
            /**
             * Name of the database instance.
             */
            instance: string;
            /**
             * This is always sql#sslCert.
             */
            kind: string;
            /**
             * Sha1 Fingerprint.
             */
            sha1Fingerprint: string;
        }
        /**
         * SslCertDetail.
         */
        interface ISslCertDetail {
            /**
             * The public information about the cert.
             */
            certInfo: ISslCert;
            /**
             * The private key for the client cert, in pem format. Keep private in order to protect your security.
             */
            certPrivateKey: string;
        }
        /**
         * SslCert delete response.
         */
        interface ISslCertsDeleteResponse {
            /**
             * This is always sql#sslCertsDelete.
             */
            kind: string;
            /**
             * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
             */
            operation: string;
        }
        /**
         * SslCerts insert request.
         */
        interface ISslCertsInsertRequest {
            /**
             * User supplied name. Must be a distinct name from the other certificates for this instance. New certificates will not be usable until the instance is restarted.
             */
            commonName: string;
        }
        /**
         * SslCert insert response.
         */
        interface ISslCertsInsertResponse {
            /**
             * The new client certificate and private key. The new certificate will not work until the instance is restarted.
             */
            clientCert: ISslCertDetail;
            /**
             * This is always sql#sslCertsInsert.
             */
            kind: string;
            /**
             * The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource..
             */
            serverCaCert: ISslCert;
        }
        /**
         * SslCerts list response.
         */
        interface ISslCertsListResponse {
            /**
             * List of client certificates for the instance.
             */
            items: ISslCert[];
            /**
             * This is always sql#sslCertsList.
             */
            kind: string;
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
             * The applicable regions for this tier. Can be us-east1, europe-west1, or asia-east1.
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
}
