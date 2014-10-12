// Type definitions for Google Enterprise Audit API v1
// Project: https://developers.google.com/google-apps/admin-audit/get_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you access user activities in your enterprise made through various applications.
     */
    module audit {
        var activities: {
            /**
             * Retrieves a list of activities for a specific customer and application.
             * @params {string} actorApplicationId Application ID of the application which interacted on behalf of the user while performing the event.
             * @params {string} actorEmail Email address of the user who performed the action.
             * @params {string} actorIpAddress IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
             * @params {string} applicationId Application ID of the application on which the event was performed.
             * @params {string} caller Type of the caller.
             * @params {string} continuationToken Next page URL.
             * @params {string} customerId Represents the customer who is the owner of target object on which action was performed.
             * @params {string} endTime Return events which occured at or before this time.
             * @params {string} eventName Name of the event being queried.
             * @params {number} maxResults Number of activity records to be shown in each page.
             * @params {string} startTime Return events which occured at or after this time.
             */
            list: (params: {
                actorApplicationId?: string;
                actorEmail?: string;
                actorIpAddress?: string;
                applicationId: string;
                caller?: string;
                continuationToken?: string;
                customerId: string;
                endTime?: string;
                eventName?: string;
                maxResults?: number;
                startTime?: string;
            }) => {
                execute(callback: (data: IResponse<IActivities>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivities>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IActivities {
            /**
             * Each record in read response.
             */
            items: IActivity[];
            /**
             * Kind of list response this is.
             */
            kind: string;
            /**
             * Next page URL.
             */
            next: string;
        }
        interface IActivity {
            /**
             * User doing the action.
             */
            actor: {
                applicationId: string; // int64
                callerType: string;
                email: string;
                key: string;
            };
            /**
             * Activity events.
             */
            events: {
                eventType: string;
                name: string;
                parameters: {
                    name: string;
                    value: string;
                }[];
            }[];
            /**
             * Unique identifier for each activity record.
             */
            id: {
                applicationId: string; // int64
                customerId: string;
                time: string; // date-time
                uniqQualifier: string; // int64
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
    }
}
