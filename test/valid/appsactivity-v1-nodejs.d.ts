// Type definitions for Google Google Apps Activity API v1
// Project: https://developers.google.com/google-apps/activity/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function appsactivity(version:string):typeof googleapis.appsactivity;
}
/**
 * Provides a historical view of activity.
 */
declare module googleapis.appsactivity {
    var activities: {
        /**
         * Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
         * @params {string} drive.ancestorId Identifies the Drive folder containing the items for which to return activities.
         * @params {string} drive.fileId Identifies the Drive item to return activities for.
         * @params {string} groupingStrategy Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
         * @params {number} pageSize The maximum number of events to return on a page. The response includes a continuation token if there are more events.
         * @params {string} pageToken A token to retrieve a specific page of results.
         * @params {string} source The Google service from which to return activities. Possible values of source are: 
- drive.google.com
         * @params {string} userId Indicates the user to return activity for. Use the special value me to indicate the currently authenticated user.
         */
        list: (params: {
            "drive.ancestorId"?: string;
            "drive.fileId"?: string;
            groupingStrategy?: string;
            pageSize?: number;
            pageToken?: string;
            source?: string;
            userId?: string;
        }, callback: (err: IErrorResponse, response: IListActivitiesResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
     */
    interface IActivity {
        /**
         * The fields common to all of the singleEvents that make up the Activity.
         */
        combinedEvent: IEvent;
        /**
         * A list of all the Events that make up the Activity.
         */
        singleEvents: IEvent[];
    }
    /**
     * Represents the changes associated with an action taken by a user.
     */
    interface IEvent {
        /**
         * Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.
         */
        additionalEventTypes: string[];
        /**
         * The time at which the event occurred formatted as Unix time in milliseconds.
         */
        eventTimeMillis: string; // uint64
        /**
         * Whether this event is caused by a user being deleted.
         */
        fromUserDeletion: boolean;
        /**
         * Extra information for move type events, such as changes in an object's parents.
         */
        move: IMove;
        /**
         * Extra information for permissionChange type events, such as the user or group the new permission applies to.
         */
        permissionChanges: IPermissionChange[];
        /**
         * The main type of event that occurred.
         */
        primaryEventType: string;
        /**
         * Extra information for rename type events, such as the old and new names.
         */
        rename: IRename;
        /**
         * Information specific to the Target object modified by the event.
         */
        target: ITarget;
        /**
         * Represents the user responsible for the event.
         */
        user: IUser;
    }
    /**
     * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
     */
    interface IListActivitiesResponse {
        /**
         * List of activities.
         */
        activities: IActivity[];
        /**
         * Token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * Contains information about changes in an object's parents as a result of a move type event.
     */
    interface IMove {
        /**
         * The added parent(s).
         */
        addedParents: IParent[];
        /**
         * The removed parent(s).
         */
        removedParents: IParent[];
    }
    /**
     * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
     */
    interface IParent {
        /**
         * The parent's ID.
         */
        id: string;
        /**
         * Whether this is the root folder.
         */
        isRoot: boolean;
        /**
         * The parent's title.
         */
        title: string;
    }
    /**
     * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
     */
    interface IPermission {
        /**
         * The name of the user or group the permission applies to.
         */
        name: string;
        /**
         * The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource.
         */
        permissionId: string;
        /**
         * Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.
         */
        role: string;
        /**
         * Indicates how widely permissions are granted.
         */
        type: string;
        /**
         * The user's information if the type is USER.
         */
        user: IUser;
        /**
         * Whether the permission requires a link to the file.
         */
        withLink: boolean;
    }
    /**
     * Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
     */
    interface IPermissionChange {
        /**
         * Lists all Permission objects added.
         */
        addedPermissions: IPermission[];
        /**
         * Lists all Permission objects removed.
         */
        removedPermissions: IPermission[];
    }
    /**
     * Photo information for a user.
     */
    interface IPhoto {
        /**
         * The URL of the photo.
         */
        url: string;
    }
    /**
     * Contains information about a renametype event.
     */
    interface IRename {
        /**
         * The new title.
         */
        newTitle: string;
        /**
         * The old title.
         */
        oldTitle: string;
    }
    /**
     * Information about the object modified by the event.
     */
    interface ITarget {
        /**
         * The ID of the target. For example, in Google Drive, this is the file or folder ID.
         */
        id: string;
        /**
         * The MIME type of the target.
         */
        mimeType: string;
        /**
         * The name of the target. For example, in Google Drive, this is the title of the file.
         */
        name: string;
    }
    /**
     * A representation of a user.
     */
    interface IUser {
        /**
         * The displayable name of the user.
         */
        name: string;
        /**
         * The profile photo of the user.
         */
        photo: IPhoto;
    }
}
