// Type definitions for Google Google Maps Coordinate API v1
// Project: https://developers.google.com/coordinate/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/coordinate
//   View and manage your Google Maps Coordinate jobs
// https://www.googleapis.com/auth/coordinate.readonly
//   View your Google Coordinate jobs

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you view and manage jobs in a Coordinate team.
     */
    module coordinate {
        var customFieldDef: {
            /**
             * Retrieves a list of custom field definitions for a team.
             * @params {string} teamId Team ID
             */
            list: (params: {
                teamId: string;
            }) => { execute(callback: (data: IResponse<ICustomFieldDefListResponse>, original: string) => void):void; };
        };
        var jobs: {
            /**
             * Retrieves a job, including all the changes made to the job.
             * @params {string} jobId Job number
             * @params {string} teamId Team ID
             */
            get: (params: {
                jobId: string;
                teamId: string;
            }) => { execute(callback: (data: IResponse<IJob>, original: string) => void):void; };
            /**
             * Inserts a new job. Only the state field of the job should be set.
             * @params {string} address Job address as newline (Unix) separated string
             * @params {string} assignee Assignee email address, or empty string to unassign.
             * @params {string} customField Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
             * @params {string} customerName Customer name
             * @params {string} customerPhoneNumber Customer phone number
             * @params {number} lat The latitude coordinate of this job's location.
             * @params {number} lng The longitude coordinate of this job's location.
             * @params {string} note Job note as newline (Unix) separated string
             * @params {string} teamId Team ID
             * @params {string} title Job title
             */
            insert: (params: {
                address: string;
                assignee?: string;
                customField?: string;
                customerName?: string;
                customerPhoneNumber?: string;
                lat: number;
                lng: number;
                note?: string;
                teamId: string;
                title: string;
                resource?: IJob;
            }) => { execute(callback: (data: IResponse<IJob>, original: string) => void):void; };
            /**
             * Retrieves jobs created or modified since the given timestamp.
             * @params {number} maxResults Maximum number of results to return in one page.
             * @params {string} minModifiedTimestampMs Minimum time a job was modified in milliseconds since epoch.
             * @params {string} pageToken Continuation token
             * @params {string} teamId Team ID
             */
            list: (params: {
                maxResults?: number;
                minModifiedTimestampMs?: string;
                pageToken?: string;
                teamId: string;
            }) => { execute(callback: (data: IResponse<IJobListResponse>, original: string) => void):void; };
            /**
             * Updates a job. Fields that are set in the job state will be updated. This method supports patch semantics.
             * @params {string} address Job address as newline (Unix) separated string
             * @params {string} assignee Assignee email address, or empty string to unassign.
             * @params {string} customField Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
             * @params {string} customerName Customer name
             * @params {string} customerPhoneNumber Customer phone number
             * @params {string} jobId Job number
             * @params {number} lat The latitude coordinate of this job's location.
             * @params {number} lng The longitude coordinate of this job's location.
             * @params {string} note Job note as newline (Unix) separated string
             * @params {string} progress Job progress
             * @params {string} teamId Team ID
             * @params {string} title Job title
             */
            patch: (params: {
                address?: string;
                assignee?: string;
                customField?: string;
                customerName?: string;
                customerPhoneNumber?: string;
                jobId: string;
                lat?: number;
                lng?: number;
                note?: string;
                progress?: string;
                teamId: string;
                title?: string;
                resource?: IJob;
            }) => { execute(callback: (data: IResponse<IJob>, original: string) => void):void; };
            /**
             * Updates a job. Fields that are set in the job state will be updated.
             * @params {string} address Job address as newline (Unix) separated string
             * @params {string} assignee Assignee email address, or empty string to unassign.
             * @params {string} customField Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
             * @params {string} customerName Customer name
             * @params {string} customerPhoneNumber Customer phone number
             * @params {string} jobId Job number
             * @params {number} lat The latitude coordinate of this job's location.
             * @params {number} lng The longitude coordinate of this job's location.
             * @params {string} note Job note as newline (Unix) separated string
             * @params {string} progress Job progress
             * @params {string} teamId Team ID
             * @params {string} title Job title
             */
            update: (params: {
                address?: string;
                assignee?: string;
                customField?: string;
                customerName?: string;
                customerPhoneNumber?: string;
                jobId: string;
                lat?: number;
                lng?: number;
                note?: string;
                progress?: string;
                teamId: string;
                title?: string;
                resource?: IJob;
            }) => { execute(callback: (data: IResponse<IJob>, original: string) => void):void; };
        };
        var location: {
            /**
             * Retrieves a list of locations for a worker.
             * @params {number} maxResults Maximum number of results to return in one page.
             * @params {string} pageToken Continuation token
             * @params {string} startTimestampMs Start timestamp in milliseconds since the epoch.
             * @params {string} teamId Team ID
             * @params {string} workerEmail Worker email address.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                startTimestampMs: string;
                teamId: string;
                workerEmail: string;
            }) => { execute(callback: (data: IResponse<ILocationListResponse>, original: string) => void):void; };
        };
        var schedule: {
            /**
             * Retrieves the schedule for a job.
             * @params {string} jobId Job number
             * @params {string} teamId Team ID
             */
            get: (params: {
                jobId: string;
                teamId: string;
            }) => { execute(callback: (data: IResponse<ISchedule>, original: string) => void):void; };
            /**
             * Replaces the schedule of a job with the provided schedule. This method supports patch semantics.
             * @params {boolean} allDay Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
             * @params {string} duration Job duration in milliseconds.
             * @params {string} endTime Scheduled end time in milliseconds since epoch.
             * @params {string} jobId Job number
             * @params {string} startTime Scheduled start time in milliseconds since epoch.
             * @params {string} teamId Team ID
             */
            patch: (params: {
                allDay?: boolean;
                duration?: string;
                endTime?: string;
                jobId: string;
                startTime?: string;
                teamId: string;
                resource?: ISchedule;
            }) => { execute(callback: (data: IResponse<ISchedule>, original: string) => void):void; };
            /**
             * Replaces the schedule of a job with the provided schedule.
             * @params {boolean} allDay Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
             * @params {string} duration Job duration in milliseconds.
             * @params {string} endTime Scheduled end time in milliseconds since epoch.
             * @params {string} jobId Job number
             * @params {string} startTime Scheduled start time in milliseconds since epoch.
             * @params {string} teamId Team ID
             */
            update: (params: {
                allDay?: boolean;
                duration?: string;
                endTime?: string;
                jobId: string;
                startTime?: string;
                teamId: string;
                resource?: ISchedule;
            }) => { execute(callback: (data: IResponse<ISchedule>, original: string) => void):void; };
        };
        var worker: {
            /**
             * Retrieves a list of workers in a team.
             * @params {string} teamId Team ID
             */
            list: (params: {
                teamId: string;
            }) => { execute(callback: (data: IResponse<IWorkerListResponse>, original: string) => void):void; };
        };
        /**
         * Custom field.
         */
        interface ICustomField {
            /**
             * Custom field id.
             */
            customFieldId: string; // int64
            /**
             * Identifies this object as a custom field.
             */
            kind: string;
            /**
             * Custom field value.
             */
            value: string;
        }
        /**
         * Custom field definition.
         */
        interface ICustomFieldDef {
            /**
             * Whether the field is enabled.
             */
            enabled: boolean;
            /**
             * Custom field id.
             */
            id: string; // int64
            /**
             * Identifies this object as a custom field definition.
             */
            kind: string;
            /**
             * Custom field name.
             */
            name: string;
            /**
             * Whether the field is required for checkout.
             */
            requiredForCheckout: boolean;
            /**
             * Custom field type.
             */
            type: string;
        }
        /**
         * Collection of custom field definitions for a team.
         */
        interface ICustomFieldDefListResponse {
            /**
             * Collection of custom field definitions in a team.
             */
            items: ICustomFieldDef[];
            /**
             * Identifies this object as a collection of custom field definitions in a team.
             */
            kind: string;
        }
        /**
         * Collection of custom fields.
         */
        interface ICustomFields {
            /**
             * Collection of custom fields.
             */
            customField: ICustomField[];
            /**
             * Identifies this object as a collection of custom fields.
             */
            kind: string;
        }
        /**
         * A job.
         */
        interface IJob {
            /**
             * Job id.
             */
            id: string; // uint64
            /**
             * List of job changes since it was created. The first change corresponds to the state of the job when it was created.
             */
            jobChange: IJobChange[];
            /**
             * Identifies this object as a job.
             */
            kind: string;
            /**
             * Current job state.
             */
            state: IJobState;
        }
        /**
         * Change to a job. For example assigning the job to a different worker.
         */
        interface IJobChange {
            /**
             * Identifies this object as a job change.
             */
            kind: string;
            /**
             * Change applied to the job. Only the fields that were changed are set.
             */
            state: IJobState;
            /**
             * Time at which this change was applied.
             */
            timestamp: string; // uint64
        }
        /**
         * Response from a List Jobs request.
         */
        interface IJobListResponse {
            /**
             * Jobs in the collection.
             */
            items: IJob[];
            /**
             * Identifies this object as a list of jobs.
             */
            kind: string;
            /**
             * A token to provide to get the next page of results.
             */
            nextPageToken: string;
        }
        /**
         * Current state of a job.
         */
        interface IJobState {
            /**
             * Email address of the assignee.
             */
            assignee: string;
            /**
             * Custom fields.
             */
            customFields: ICustomFields;
            /**
             * Customer name.
             */
            customerName: string;
            /**
             * Customer phone number.
             */
            customerPhoneNumber: string;
            /**
             * Identifies this object as a job state.
             */
            kind: string;
            /**
             * Job location.
             */
            location: ILocation;
            /**
             * Note added to the job.
             */
            note: string[];
            /**
             * Job progress.
             */
            progress: string;
            /**
             * Job title.
             */
            title: string;
        }
        /**
         * Location of a job.
         */
        interface ILocation {
            /**
             * Address.
             */
            addressLine: string[];
            /**
             * Identifies this object as a location.
             */
            kind: string;
            /**
             * Latitude.
             */
            lat: number; // double
            /**
             * Longitude.
             */
            lng: number; // double
        }
        /**
         * Response from a List Locations request.
         */
        interface ILocationListResponse {
            /**
             * Locations in the collection.
             */
            items: ILocationRecord[];
            /**
             * Identifies this object as a list of locations.
             */
            kind: string;
            /**
             * A token to provide to get the next page of results.
             */
            nextPageToken: string;
            /**
             * Pagination information for token pagination.
             */
            tokenPagination: ITokenPagination;
        }
        /**
         * Recorded location of a worker.
         */
        interface ILocationRecord {
            /**
             * The collection time in milliseconds since the epoch.
             */
            collectionTime: string; // int64
            /**
             * The location accuracy in meters. This is the radius of a 95% confidence interval around the location measurement.
             */
            confidenceRadius: number; // double
            /**
             * Identifies this object as a location.
             */
            kind: string;
            /**
             * Latitude.
             */
            latitude: number; // double
            /**
             * Longitude.
             */
            longitude: number; // double
        }
        /**
         * Job schedule.
         */
        interface ISchedule {
            /**
             * Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
             */
            allDay: boolean;
            /**
             * Job duration in milliseconds.
             */
            duration: string; // uint64
            /**
             * Scheduled end time in milliseconds since epoch.
             */
            endTime: string; // uint64
            /**
             * Identifies this object as a job schedule.
             */
            kind: string;
            /**
             * Scheduled start time in milliseconds since epoch.
             */
            startTime: string; // uint64
        }
        /**
         * Pagination information.
         */
        interface ITokenPagination {
            /**
             * Identifies this object as pagination information.
             */
            kind: string;
            /**
             * A token to provide to get the next page of results.
             */
            nextPageToken: string;
            /**
             * A token to provide to get the previous page of results.
             */
            previousPageToken: string;
        }
        /**
         * A worker in a Coordinate team.
         */
        interface IWorker {
            /**
             * Worker email address.
             */
            id: string;
            /**
             * Identifies this object as a worker.
             */
            kind: string;
        }
        /**
         * Response from a List Workers request.
         */
        interface IWorkerListResponse {
            /**
             * Workers in the collection.
             */
            items: IWorker[];
            /**
             * Identifies this object as a list of workers.
             */
            kind: string;
        }
    }
}
