// Type definitions for Google Calendar API v3
// Project: https://developers.google.com/google-apps/calendar/firstapp
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function calendar(version:string):typeof googleapis.calendar;
}
/**
 * Lets you manipulate events and other calendar data.
 */
declare module googleapis.calendar {
    var acl: {
        /**
         * Deletes an access control rule.
         * @params {string} calendarId Calendar identifier.
         * @params {string} ruleId ACL rule identifier.
         */
        delete: (params: {
            calendarId: string;
            ruleId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns an access control rule.
         * @params {string} calendarId Calendar identifier.
         * @params {string} ruleId ACL rule identifier.
         */
        get: (params: {
            calendarId: string;
            ruleId: string;
        }, callback: (err: IErrorResponse, response: IAclRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an access control rule.
         * @params {string} calendarId Calendar identifier.
         */
        insert: (params: {
            calendarId: string;
            resource?: IAclRule;
        }, callback: (err: IErrorResponse, response: IAclRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the rules in the access control list for the calendar.
         * @params {string} calendarId Calendar identifier.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        list: (params: {
            calendarId: string;
            maxResults?: number;
            pageToken?: string;
            showDeleted?: boolean;
            syncToken?: string;
        }, callback: (err: IErrorResponse, response: IAcl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an access control rule. This method supports patch semantics.
         * @params {string} calendarId Calendar identifier.
         * @params {string} ruleId ACL rule identifier.
         */
        patch: (params: {
            calendarId: string;
            ruleId: string;
            resource?: IAclRule;
        }, callback: (err: IErrorResponse, response: IAclRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an access control rule.
         * @params {string} calendarId Calendar identifier.
         * @params {string} ruleId ACL rule identifier.
         */
        update: (params: {
            calendarId: string;
            ruleId: string;
            resource?: IAclRule;
        }, callback: (err: IErrorResponse, response: IAclRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Watch for changes to ACL resources.
         * @params {string} calendarId Calendar identifier.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {boolean} showDeleted Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        watch: (params: {
            calendarId: string;
            maxResults?: number;
            pageToken?: string;
            showDeleted?: boolean;
            syncToken?: string;
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: IChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var calendarList: {
        /**
         * Deletes an entry on the user's calendar list.
         * @params {string} calendarId Calendar identifier.
         */
        delete: (params: {
            calendarId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns an entry on the user's calendar list.
         * @params {string} calendarId Calendar identifier.
         */
        get: (params: {
            calendarId: string;
        }, callback: (err: IErrorResponse, response: ICalendarListEntry, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Adds an entry to the user's calendar list.
         * @params {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
         */
        insert: (params: {
            colorRgbFormat?: boolean;
            resource?: ICalendarListEntry;
        }, callback: (err: IErrorResponse, response: ICalendarListEntry, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns entries on the user's calendar list.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} minAccessRole The minimum access role for the user in the returned entires. Optional. The default is no restriction.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
         * @params {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        list: (params: {
            maxResults?: number;
            minAccessRole?: string;
            pageToken?: string;
            showDeleted?: boolean;
            showHidden?: boolean;
            syncToken?: string;
        }, callback: (err: IErrorResponse, response: ICalendarList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an entry on the user's calendar list. This method supports patch semantics.
         * @params {string} calendarId Calendar identifier.
         * @params {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
         */
        patch: (params: {
            calendarId: string;
            colorRgbFormat?: boolean;
            resource?: ICalendarListEntry;
        }, callback: (err: IErrorResponse, response: ICalendarListEntry, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an entry on the user's calendar list.
         * @params {string} calendarId Calendar identifier.
         * @params {boolean} colorRgbFormat Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
         */
        update: (params: {
            calendarId: string;
            colorRgbFormat?: boolean;
            resource?: ICalendarListEntry;
        }, callback: (err: IErrorResponse, response: ICalendarListEntry, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Watch for changes to CalendarList resources.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} minAccessRole The minimum access role for the user in the returned entires. Optional. The default is no restriction.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {boolean} showDeleted Whether to include deleted calendar list entries in the result. Optional. The default is False.
         * @params {boolean} showHidden Whether to show hidden entries. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        watch: (params: {
            maxResults?: number;
            minAccessRole?: string;
            pageToken?: string;
            showDeleted?: boolean;
            showHidden?: boolean;
            syncToken?: string;
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: IChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var calendars: {
        /**
         * Clears a primary calendar. This operation deletes all data associated with the primary calendar of an account and cannot be undone.
         * @params {string} calendarId Calendar identifier.
         */
        clear: (params: {
            calendarId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Deletes a secondary calendar.
         * @params {string} calendarId Calendar identifier.
         */
        delete: (params: {
            calendarId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns metadata for a calendar.
         * @params {string} calendarId Calendar identifier.
         */
        get: (params: {
            calendarId: string;
        }, callback: (err: IErrorResponse, response: ICalendar, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a secondary calendar.
         */
        insert: (params: {
            resource?: ICalendar;
        }, callback: (err: IErrorResponse, response: ICalendar, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates metadata for a calendar. This method supports patch semantics.
         * @params {string} calendarId Calendar identifier.
         */
        patch: (params: {
            calendarId: string;
            resource?: ICalendar;
        }, callback: (err: IErrorResponse, response: ICalendar, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates metadata for a calendar.
         * @params {string} calendarId Calendar identifier.
         */
        update: (params: {
            calendarId: string;
            resource?: ICalendar;
        }, callback: (err: IErrorResponse, response: ICalendar, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var channels: {
        /**
         * Stop watching resources through this channel
         */
        stop: (params: {
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var colors: {
        /**
         * Returns the color definitions for calendars and events.
         */
        get: (params: {
        }, callback: (err: IErrorResponse, response: IColors, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var events: {
        /**
         * Deletes an event.
         * @params {string} calendarId Calendar identifier.
         * @params {string} eventId Event identifier.
         * @params {boolean} sendNotifications Whether to send notifications about the deletion of the event. Optional. The default is False.
         */
        delete: (params: {
            calendarId: string;
            eventId: string;
            sendNotifications?: boolean;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns an event.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} eventId Event identifier.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
         */
        get: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            eventId: string;
            maxAttendees?: number;
            timeZone?: string;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Imports an event. This operation is used to add a private copy of an existing event to a calendar.
         * @params {string} calendarId Calendar identifier.
         */
        import: (params: {
            calendarId: string;
            resource?: IEvent;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an event.
         * @params {string} calendarId Calendar identifier.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {boolean} sendNotifications Whether to send notifications about the creation of the new event. Optional. The default is False.
         */
        insert: (params: {
            calendarId: string;
            maxAttendees?: number;
            sendNotifications?: boolean;
            resource?: IEvent;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns instances of the specified recurring event.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} eventId Recurring event identifier.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {number} maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
         * @params {string} originalStart The original start time of the instance in the result. Optional.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
         * @params {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time.
         * @params {string} timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time.
         * @params {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
         */
        instances: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            eventId: string;
            maxAttendees?: number;
            maxResults?: number;
            originalStart?: string;
            pageToken?: string;
            showDeleted?: boolean;
            timeMax?: string;
            timeMin?: string;
            timeZone?: string;
        }, callback: (err: IErrorResponse, response: IEvents, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns events on the specified calendar.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {number} maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
         * @params {string} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {string} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
         * @params {string} q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
         * @params {string} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
         * @params {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
         * @params {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
         * @params {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are: 
- iCalUID 
- orderBy 
- privateExtendedProperty 
- q 
- sharedExtendedProperty 
- timeMin 
- timeMax 
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         * @params {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time.
         * @params {string} timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time.
         * @params {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
         * @params {string} updatedMin Lower bound for an event's last modification time (as a RFC 3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
         */
        list: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            iCalUID?: string;
            maxAttendees?: number;
            maxResults?: number;
            orderBy?: string;
            pageToken?: string;
            privateExtendedProperty?: string;
            q?: string;
            sharedExtendedProperty?: string;
            showDeleted?: boolean;
            showHiddenInvitations?: boolean;
            singleEvents?: boolean;
            syncToken?: string;
            timeMax?: string;
            timeMin?: string;
            timeZone?: string;
            updatedMin?: string;
        }, callback: (err: IErrorResponse, response: IEvents, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Moves an event to another calendar, i.e. changes an event's organizer.
         * @params {string} calendarId Calendar identifier of the source calendar where the event currently is on.
         * @params {string} destination Calendar identifier of the target calendar where the event is to be moved to.
         * @params {string} eventId Event identifier.
         * @params {boolean} sendNotifications Whether to send notifications about the change of the event's organizer. Optional. The default is False.
         */
        move: (params: {
            calendarId: string;
            destination: string;
            eventId: string;
            sendNotifications?: boolean;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an event. This method supports patch semantics.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} eventId Event identifier.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {boolean} sendNotifications Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
         */
        patch: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            eventId: string;
            maxAttendees?: number;
            sendNotifications?: boolean;
            resource?: IEvent;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an event based on a simple text string.
         * @params {string} calendarId Calendar identifier.
         * @params {boolean} sendNotifications Whether to send notifications about the creation of the event. Optional. The default is False.
         * @params {string} text The text describing the event to be created.
         */
        quickAdd: (params: {
            calendarId: string;
            sendNotifications?: boolean;
            text: string;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an event.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} eventId Event identifier.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {boolean} sendNotifications Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
         */
        update: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            eventId: string;
            maxAttendees?: number;
            sendNotifications?: boolean;
            resource?: IEvent;
        }, callback: (err: IErrorResponse, response: IEvent, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Watch for changes to Events resources.
         * @params {boolean} alwaysIncludeEmail Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
         * @params {string} calendarId Calendar identifier.
         * @params {string} iCalUID Specifies event ID in the iCalendar format to be included in the response. Optional.
         * @params {number} maxAttendees The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
         * @params {number} maxResults Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
         * @params {string} orderBy The order of the events returned in the result. Optional. The default is an unspecified, stable order.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {string} privateExtendedProperty Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
         * @params {string} q Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
         * @params {string} sharedExtendedProperty Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
         * @params {boolean} showDeleted Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
         * @params {boolean} showHiddenInvitations Whether to include hidden invitations in the result. Optional. The default is False.
         * @params {boolean} singleEvents Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are: 
- iCalUID 
- orderBy 
- privateExtendedProperty 
- q 
- sharedExtendedProperty 
- timeMin 
- timeMax 
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         * @params {string} timeMax Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time.
         * @params {string} timeMin Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time.
         * @params {string} timeZone Time zone used in the response. Optional. The default is the time zone of the calendar.
         * @params {string} updatedMin Lower bound for an event's last modification time (as a RFC 3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
         */
        watch: (params: {
            alwaysIncludeEmail?: boolean;
            calendarId: string;
            iCalUID?: string;
            maxAttendees?: number;
            maxResults?: number;
            orderBy?: string;
            pageToken?: string;
            privateExtendedProperty?: string;
            q?: string;
            sharedExtendedProperty?: string;
            showDeleted?: boolean;
            showHiddenInvitations?: boolean;
            singleEvents?: boolean;
            syncToken?: string;
            timeMax?: string;
            timeMin?: string;
            timeZone?: string;
            updatedMin?: string;
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: IChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var freebusy: {
        /**
         * Returns free/busy information for a set of calendars.
         */
        query: (params: {
            resource?: IFreeBusyRequest;
        }, callback: (err: IErrorResponse, response: IFreeBusyResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var settings: {
        /**
         * Returns a single user setting.
         * @params {string} setting The id of the user setting.
         */
        get: (params: {
            setting: string;
        }, callback: (err: IErrorResponse, response: ISetting, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns all user settings for the authenticated user.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            syncToken?: string;
        }, callback: (err: IErrorResponse, response: ISettings, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Watch for changes to Settings resources.
         * @params {number} maxResults Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
         * @params {string} pageToken Token specifying which result page to return. Optional.
         * @params {string} syncToken Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
         */
        watch: (params: {
            maxResults?: number;
            pageToken?: string;
            syncToken?: string;
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: IChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IAcl {
        /**
         * ETag of the collection.
         */
        etag: string;
        /**
         * List of rules on the access control list.
         */
        items: IAclRule[];
        /**
         * Type of the collection ("calendar#acl").
         */
        kind: string;
        /**
         * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
         */
        nextPageToken: string;
        /**
         * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
         */
        nextSyncToken: string;
    }
    interface IAclRule {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Identifier of the ACL rule.
         */
        id: string;
        /**
         * Type of the resource ("calendar#aclRule").
         */
        kind: string;
        /**
         * The role assigned to the scope. Possible values are:  
         * - "none" - Provides no access. 
         * - "freeBusyReader" - Provides read access to free/busy information. 
         * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
         * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
         * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
         */
        role: string;
        /**
         * The scope of the rule.
         */
        scope: {
            type: string;
            value: string;
        };
    }
    interface ICalendar {
        /**
         * Description of the calendar. Optional.
         */
        description: string;
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Identifier of the calendar.
         */
        id: string;
        /**
         * Type of the resource ("calendar#calendar").
         */
        kind: string;
        /**
         * Geographic location of the calendar as free-form text. Optional.
         */
        location: string;
        /**
         * Title of the calendar.
         */
        summary: string;
        /**
         * The time zone of the calendar. Optional.
         */
        timeZone: string;
    }
    interface ICalendarList {
        /**
         * ETag of the collection.
         */
        etag: string;
        /**
         * Calendars that are present on the user's calendar list.
         */
        items: ICalendarListEntry[];
        /**
         * Type of the collection ("calendar#calendarList").
         */
        kind: string;
        /**
         * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
         */
        nextPageToken: string;
        /**
         * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
         */
        nextSyncToken: string;
    }
    interface ICalendarListEntry {
        /**
         * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  
         * - "freeBusyReader" - Provides read access to free/busy information. 
         * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
         * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
         * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
         */
        accessRole: string;
        /**
         * The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. Optional.
         */
        backgroundColor: string;
        /**
         * The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). Optional.
         */
        colorId: string;
        /**
         * The default reminders that the authenticated user has for this calendar.
         */
        defaultReminders: IEventReminder[];
        /**
         * Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
         */
        deleted: boolean;
        /**
         * Description of the calendar. Optional. Read-only.
         */
        description: string;
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. Optional.
         */
        foregroundColor: string;
        /**
         * Whether the calendar has been hidden from the list. Optional. The default is False.
         */
        hidden: boolean;
        /**
         * Identifier of the calendar.
         */
        id: string;
        /**
         * Type of the resource ("calendar#calendarListEntry").
         */
        kind: string;
        /**
         * Geographic location of the calendar as free-form text. Optional. Read-only.
         */
        location: string;
        /**
         * The notifications that the authenticated user is receiving for this calendar.
         */
        notificationSettings: {
            notifications: ICalendarNotification[];
        };
        /**
         * Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
         */
        primary: boolean;
        /**
         * Whether the calendar content shows up in the calendar UI. Optional. The default is False.
         */
        selected: boolean;
        /**
         * Title of the calendar. Read-only.
         */
        summary: string;
        /**
         * The summary that the authenticated user has set for this calendar. Optional.
         */
        summaryOverride: string;
        /**
         * The time zone of the calendar. Optional. Read-only.
         */
        timeZone: string;
    }
    interface ICalendarNotification {
        /**
         * The method used to deliver the notification. Possible values are:  
         * - "email" - Reminders are sent via email. 
         * - "sms" - Reminders are sent via SMS. This value is read-only and is ignored on inserts and updates.
         */
        method: string;
        /**
         * The type of notification. Possible values are:  
         * - "eventCreation" - Notification sent when a new event is put on the calendar. 
         * - "eventChange" - Notification sent when an event is changed. 
         * - "eventCancellation" - Notification sent when an event is cancelled. 
         * - "eventResponse" - Notification sent when an event is changed. 
         * - "agenda" - An agenda with the events of the day (sent out in the morning).
         */
        type: string;
    }
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
        params: {
            [name:string]: string;
        };
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
    interface IColorDefinition {
        /**
         * The background color associated with this color definition.
         */
        background: string;
        /**
         * The foreground color that can be used to write on top of a background with 'background' color.
         */
        foreground: string;
    }
    interface IColors {
        /**
         * Palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its color field. Read-only.
         */
        calendar: {
            [name:string]: IColorDefinition;
        };
        /**
         * Palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its color field. Read-only.
         */
        event: {
            [name:string]: IColorDefinition;
        };
        /**
         * Type of the resource ("calendar#colors").
         */
        kind: string;
        /**
         * Last modification time of the color palette (as a RFC 3339 timestamp). Read-only.
         */
        updated: string; // date-time
    }
    interface IError {
        /**
         * Domain, or broad category, of the error.
         */
        domain: string;
        /**
         * Specific reason for the error. Some of the possible values are:  
         * - "groupTooBig" - The group of users requested is too large for a single query. 
         * - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query. 
         * - "notFound" - The requested resource was not found. 
         * - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.
         */
        reason: string;
    }
    interface IEvent {
        /**
         * Whether anyone can invite themselves to the event. Optional. The default is False.
         */
        anyoneCanAddSelf: boolean;
        /**
         * The attendees of the event.
         */
        attendees: IEventAttendee[];
        /**
         * Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.
         */
        attendeesOmitted: boolean;
        /**
         * The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.
         */
        colorId: string;
        /**
         * Creation time of the event (as a RFC 3339 timestamp). Read-only.
         */
        created: string; // date-time
        /**
         * The creator of the event. Read-only.
         */
        creator: {
            displayName: string;
            email: string;
            id: string;
            self: boolean;
        };
        /**
         * Description of the event. Optional.
         */
        description: string;
        /**
         * The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
         */
        end: IEventDateTime;
        /**
         * Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.
         */
        endTimeUnspecified: boolean;
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Extended properties of the event.
         */
        extendedProperties: {
            private: {
                [name:string]: string;
            };
            shared: {
                [name:string]: string;
            };
        };
        /**
         * A gadget that extends this event.
         */
        gadget: {
            display: string;
            height: number; // int32
            iconLink: string;
            link: string;
            preferences: {
                [name:string]: string;
            };
            title: string;
            type: string;
            width: number; // int32
        };
        /**
         * Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
         */
        guestsCanInviteOthers: boolean;
        /**
         * Whether attendees other than the organizer can modify the event. Optional. The default is False.
         */
        guestsCanModify: boolean;
        /**
         * Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
         */
        guestsCanSeeOtherGuests: boolean;
        /**
         * An absolute link to the Google+ hangout associated with this event. Read-only.
         */
        hangoutLink: string;
        /**
         * An absolute link to this event in the Google Calendar Web UI. Read-only.
         */
        htmlLink: string;
        /**
         * Event ID in the iCalendar format.
         */
        iCalUID: string;
        /**
         * Identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  
         * - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 
         * - the length of the ID must be between 5 and 1024 characters 
         * - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
         */
        id: string;
        /**
         * Type of the resource ("calendar#event").
         */
        kind: string;
        /**
         * Geographic location of the event as free-form text. Optional.
         */
        location: string;
        /**
         * Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
         */
        locked: boolean;
        /**
         * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
         */
        organizer: {
            displayName: string;
            email: string;
            id: string;
            self: boolean;
        };
        /**
         * For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. Immutable.
         */
        originalStartTime: IEventDateTime;
        /**
         * Whether this is a private event copy where changes are not shared with other copies on other calendars. Optional. Immutable. The default is False.
         */
        privateCopy: boolean;
        /**
         * List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event. This field is omitted for single events or instances of recurring events.
         */
        recurrence: string[];
        /**
         * For an instance of a recurring event, this is the event ID of the recurring event itself. Immutable.
         */
        recurringEventId: string;
        /**
         * Information about the event's reminders for the authenticated user.
         */
        reminders: {
            overrides: IEventReminder[];
            useDefault: boolean;
        };
        /**
         * Sequence number as per iCalendar.
         */
        sequence: number; // int32
        /**
         * Source of an event from which it was created; for example a web page, an email message or any document identifiable by an URL using HTTP/HTTPS protocol. Accessible only by the creator of the event.
         */
        source: {
            title: string;
            url: string;
        };
        /**
         * The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
         */
        start: IEventDateTime;
        /**
         * Status of the event. Optional. Possible values are:  
         * - "confirmed" - The event is confirmed. This is the default status. 
         * - "tentative" - The event is tentatively confirmed. 
         * - "cancelled" - The event is cancelled.
         */
        status: string;
        /**
         * Title of the event.
         */
        summary: string;
        /**
         * Whether the event blocks time on the calendar. Optional. Possible values are:  
         * - "opaque" - The event blocks time on the calendar. This is the default value. 
         * - "transparent" - The event does not block time on the calendar.
         */
        transparency: string;
        /**
         * Last modification time of the event (as a RFC 3339 timestamp). Read-only.
         */
        updated: string; // date-time
        /**
         * Visibility of the event. Optional. Possible values are:  
         * - "default" - Uses the default visibility for events on the calendar. This is the default value. 
         * - "public" - The event is public and event details are visible to all readers of the calendar. 
         * - "private" - The event is private and only event attendees may view event details. 
         * - "confidential" - The event is private. This value is provided for compatibility reasons.
         */
        visibility: string;
    }
    interface IEventAttendee {
        /**
         * Number of additional guests. Optional. The default is 0.
         */
        additionalGuests: number; // int32
        /**
         * The attendee's response comment. Optional.
         */
        comment: string;
        /**
         * The attendee's name, if available. Optional.
         */
        displayName: string;
        /**
         * The attendee's email address, if available. This field must be present when adding an attendee.
         */
        email: string;
        /**
         * The attendee's Profile ID, if available.
         */
        id: string;
        /**
         * Whether this is an optional attendee. Optional. The default is False.
         */
        optional: boolean;
        /**
         * Whether the attendee is the organizer of the event. Read-only. The default is False.
         */
        organizer: boolean;
        /**
         * Whether the attendee is a resource. Read-only. The default is False.
         */
        resource: boolean;
        /**
         * The attendee's response status. Possible values are:  
         * - "needsAction" - The attendee has not responded to the invitation. 
         * - "declined" - The attendee has declined the invitation. 
         * - "tentative" - The attendee has tentatively accepted the invitation. 
         * - "accepted" - The attendee has accepted the invitation.
         */
        responseStatus: string;
        /**
         * Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
         */
        self: boolean;
    }
    interface IEventDateTime {
        /**
         * The date, in the format "yyyy-mm-dd", if this is an all-day event.
         */
        date: string; // date
        /**
         * The time, as a combined date-time value (formatted according to RFC 3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
         */
        dateTime: string; // date-time
        /**
         * The name of the time zone in which the time is specified (e.g. "Europe/Zurich"). Optional. The default is the time zone of the calendar.
         */
        timeZone: string;
    }
    interface IEventReminder {
        /**
         * The method used by this reminder. Possible values are:  
         * - "email" - Reminders are sent via email. 
         * - "sms" - Reminders are sent via SMS. 
         * - "popup" - Reminders are sent via a UI popup.
         */
        method: string;
        /**
         * Number of minutes before the start of the event when the reminder should trigger.
         */
        minutes: number; // int32
    }
    interface IEvents {
        /**
         * The user's access role for this calendar. Read-only. Possible values are:  
         * - "none" - The user has no access. 
         * - "freeBusyReader" - The user has read access to free/busy information. 
         * - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
         * - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
         * - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
         */
        accessRole: string;
        /**
         * The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
         */
        defaultReminders: IEventReminder[];
        /**
         * Description of the calendar. Read-only.
         */
        description: string;
        /**
         * ETag of the collection.
         */
        etag: string;
        /**
         * List of events on the calendar.
         */
        items: IEvent[];
        /**
         * Type of the collection ("calendar#events").
         */
        kind: string;
        /**
         * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
         */
        nextPageToken: string;
        /**
         * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
         */
        nextSyncToken: string;
        /**
         * Title of the calendar. Read-only.
         */
        summary: string;
        /**
         * The time zone of the calendar. Read-only.
         */
        timeZone: string;
        /**
         * Last modification time of the calendar (as a RFC 3339 timestamp). Read-only.
         */
        updated: string; // date-time
    }
    interface IFreeBusyCalendar {
        /**
         * List of time ranges during which this calendar should be regarded as busy.
         */
        busy: ITimePeriod[];
        /**
         * Optional error(s) (if computation for the calendar failed).
         */
        errors: IError[];
    }
    interface IFreeBusyGroup {
        /**
         * List of calendars' identifiers within a group.
         */
        calendars: string[];
        /**
         * Optional error(s) (if computation for the group failed).
         */
        errors: IError[];
    }
    interface IFreeBusyRequest {
        /**
         * Maximal number of calendars for which FreeBusy information is to be provided. Optional.
         */
        calendarExpansionMax: number; // int32
        /**
         * Maximal number of calendar identifiers to be provided for a single group. Optional. An error will be returned for a group with more members than this value.
         */
        groupExpansionMax: number; // int32
        /**
         * List of calendars and/or groups to query.
         */
        items: IFreeBusyRequestItem[];
        /**
         * The end of the interval for the query.
         */
        timeMax: string; // date-time
        /**
         * The start of the interval for the query.
         */
        timeMin: string; // date-time
        /**
         * Time zone used in the response. Optional. The default is UTC.
         */
        timeZone: string;
    }
    interface IFreeBusyRequestItem {
        /**
         * The identifier of a calendar or a group.
         */
        id: string;
    }
    interface IFreeBusyResponse {
        /**
         * List of free/busy information for calendars.
         */
        calendars: {
            [name:string]: IFreeBusyCalendar;
        };
        /**
         * Expansion of groups.
         */
        groups: {
            [name:string]: IFreeBusyGroup;
        };
        /**
         * Type of the resource ("calendar#freeBusy").
         */
        kind: string;
        /**
         * The end of the interval.
         */
        timeMax: string; // date-time
        /**
         * The start of the interval.
         */
        timeMin: string; // date-time
    }
    interface ISetting {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * The id of the user setting.
         */
        id: string;
        /**
         * Type of the resource ("calendar#setting").
         */
        kind: string;
        /**
         * Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.
         */
        value: string;
    }
    interface ISettings {
        /**
         * Etag of the collection.
         */
        etag: string;
        /**
         * List of user settings.
         */
        items: ISetting[];
        /**
         * Type of the collection ("calendar#settings").
         */
        kind: string;
        /**
         * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
         */
        nextPageToken: string;
        /**
         * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
         */
        nextSyncToken: string;
    }
    interface ITimePeriod {
        /**
         * The (exclusive) end of the time period.
         */
        end: string; // date-time
        /**
         * The (inclusive) start of the time period.
         */
        start: string; // date-time
    }
}
