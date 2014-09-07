// Type definitions for Google Admin Reports API reports_v1
// Project: https://developers.google.com/admin-sdk/reports/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Allows the administrators of Google Apps customers to fetch reports about the usage, collaboration, security and risk for their users.
     */
    module admin {
        var activities: {
            /**
             * Retrieves a list of activities for a specific customer and application.
             * @params {string} actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
             * @params {string} applicationName Application name for which the events are to be retrieved.
             * @params {string} customerId Represents the customer for which the data is to be fetched.
             * @params {string} endTime Return events which occured at or before this time.
             * @params {string} eventName Name of the event being queried.
             * @params {string} filters Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
             * @params {number} maxResults Number of activity records to be shown in each page.
             * @params {string} pageToken Token to specify next page.
             * @params {string} startTime Return events which occured at or after this time.
             * @params {string} userKey Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
             */
            list: (params: {
                actorIpAddress?: string;
                applicationName: string;
                customerId?: string;
                endTime?: string;
                eventName?: string;
                filters?: string;
                maxResults?: number;
                pageToken?: string;
                startTime?: string;
                userKey: string;
            }) => { execute(callback: (data: IActivities, original: string) => void):void; };
            /**
             * Push changes to activities
             * @params {string} actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
             * @params {string} applicationName Application name for which the events are to be retrieved.
             * @params {string} customerId Represents the customer for which the data is to be fetched.
             * @params {string} endTime Return events which occured at or before this time.
             * @params {string} eventName Name of the event being queried.
             * @params {string} filters Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
             * @params {number} maxResults Number of activity records to be shown in each page.
             * @params {string} pageToken Token to specify next page.
             * @params {string} startTime Return events which occured at or after this time.
             * @params {string} userKey Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for all users.
             */
            watch: (params: {
                actorIpAddress?: string;
                applicationName: string;
                customerId?: string;
                endTime?: string;
                eventName?: string;
                filters?: string;
                maxResults?: number;
                pageToken?: string;
                startTime?: string;
                userKey: string;
                resource?: IChannel;
            }) => { execute(callback: (data: IChannel, original: string) => void):void; };
        };
        var channels: {
            /**
             * Stop watching resources through this channel
             */
            stop: (params: {
                resource?: IChannel;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var customerUsageReports: {
            /**
             * Retrieves a report which is a collection of properties / statistics for a specific customer.
             * @params {string} customerId Represents the customer for which the data is to be fetched.
             * @params {string} date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
             * @params {string} pageToken Token to specify next page.
             * @params {string} parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
             */
            get: (params: {
                customerId?: string;
                date: string;
                pageToken?: string;
                parameters?: string;
            }) => { execute(callback: (data: IUsageReports, original: string) => void):void; };
        };
        var userUsageReport: {
            /**
             * Retrieves a report which is a collection of properties / statistics for a set of users.
             * @params {string} customerId Represents the customer for which the data is to be fetched.
             * @params {string} date Represents the date in yyyy-mm-dd format for which the data is to be fetched.
             * @params {string} filters Represents the set of filters including parameter operator value.
             * @params {number} maxResults Maximum number of results to return. Maximum allowed is 1000
             * @params {string} pageToken Token to specify next page.
             * @params {string} parameters Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
             * @params {string} userKey Represents the profile id or the user email for which the data should be filtered.
             */
            get: (params: {
                customerId?: string;
                date: string;
                filters?: string;
                maxResults?: number;
                pageToken?: string;
                parameters?: string;
                userKey: string;
            }) => { execute(callback: (data: IUsageReports, original: string) => void):void; };
        };
        /**
         * JSON template for a collection of activites.
         */
        interface IActivities {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Each record in read response.
             */
            items: IActivity[];
            /**
             * Kind of list response this is.
             */
            kind: string;
            /**
             * Token for retrieving the next page
             */
            nextPageToken: string;
        }
        /**
         * JSON template for the activity resource.
         */
        interface IActivity {
            /**
             * User doing the action.
             */
            actor: {
                callerType: string;
                email: string;
                key: string;
                profileId: string;
            };
            /**
             * ETag of the entry.
             */
            etag: string;
            /**
             * Activity events.
             */
            events: {
                name: string;
                parameters: {
                    boolValue: boolean;
                    intValue: string; // int64
                    name: string;
                    value: string;
                }[];
                type: string;
            }[];
            /**
             * Unique identifier for each activity record.
             */
            id: {
                applicationName: string;
                customerId: string;
                time: string; // date-time
                uniqueQualifier: string; // int64
            };
            /**
             * IP Address of the user doing the action.
             */
            ipAddress: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Domain of source customer.
             */
            ownerDomain: string;
        }
        /**
         * An notification channel used to watch for resource changes.
         */
        interface IChannel {
            /**
             * The address where notifications are delivered for this channel.
             */
            address: string;
            /**
             * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
             */
            expiration: string; // int64
            /**
             * A UUID or similar unique string that identifies this channel.
             */
            id: string;
            /**
             * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
             */
            kind: string;
            /**
             * Additional parameters controlling delivery channel behavior. Optional.
             */
            params: { [name:string]: string; };
            /**
             * A Boolean value to indicate whether payload is wanted. Optional.
             */
            payload: boolean;
            /**
             * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
             */
            resourceId: string;
            /**
             * A version-specific identifier for the watched resource.
             */
            resourceUri: string;
            /**
             * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
             */
            token: string;
            /**
             * The type of delivery mechanism used for this channel.
             */
            type: string;
        }
        /**
         * JSON template for a usage report.
         */
        interface IUsageReport {
            /**
             * The date to which the record belongs.
             */
            date: string;
            /**
             * Information about the type of the item.
             */
            entity: {
                customerId: string;
                profileId: string;
                type: string;
                userEmail: string;
            };
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * The kind of object.
             */
            kind: string;
            /**
             * Parameter value pairs for various applications.
             */
            parameters: {
                boolValue: boolean;
                datetimeValue: string; // date-time
                intValue: string; // int64
                msgValue: {
                    [name: string]: any;}[];
                name: string;
                stringValue: string;
            }[];
        }
        /**
         * JSON template for a collection of usage reports.
         */
        interface IUsageReports {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * The kind of object.
             */
            kind: string;
            /**
             * Token for retrieving the next page
             */
            nextPageToken: string;
            /**
             * Various application parameter records.
             */
            usageReports: IUsageReport[];
            /**
             * Warnings if any.
             */
            warnings: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            }[];
        }
    }
}
