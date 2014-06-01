declare module gapi.client {
    module calendar {
        var acl: {
            delete: (params: {
                calendarId: string;
                ruleId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                calendarId: string;
                ruleId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAclRule
            insert: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAclRule
            list: (params: {
                calendarId: string;
                maxResults?: number;
                pageToken?: string;
                showDeleted?: boolean;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAcl
            patch: (params: {
                calendarId: string;
                ruleId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAclRule
            update: (params: {
                calendarId: string;
                ruleId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAclRule
            watch: (params: {
                calendarId: string;
                maxResults?: number;
                pageToken?: string;
                showDeleted?: boolean;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IChannel
        };
        var calendarList: {
            delete: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendarListEntry
            insert: (params: {
                colorRgbFormat?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendarListEntry
            list: (params: {
                maxResults?: number;
                minAccessRole?: string;
                pageToken?: string;
                showDeleted?: boolean;
                showHidden?: boolean;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendarList
            patch: (params: {
                calendarId: string;
                colorRgbFormat?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendarListEntry
            update: (params: {
                calendarId: string;
                colorRgbFormat?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendarListEntry
            watch: (params: {
                maxResults?: number;
                minAccessRole?: string;
                pageToken?: string;
                showDeleted?: boolean;
                showHidden?: boolean;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IChannel
        };
        var calendars: {
            clear: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            delete: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendar
            insert: () => { execute(callback: (data:any, original: string) => void):void; }; // ICalendar
            patch: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendar
            update: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICalendar
        };
        var channels: {
            stop: () => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var colors: {
            get: () => { execute(callback: (data:any, original: string) => void):void; }; // IColors
        };
        var events: {
            delete: (params: {
                calendarId: string;
                eventId: string;
                sendNotifications?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                alwaysIncludeEmail?: boolean;
                calendarId: string;
                eventId: string;
                maxAttendees?: number;
                timeZone?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
            import: (params: {
                calendarId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
            insert: (params: {
                calendarId: string;
                maxAttendees?: number;
                sendNotifications?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvents
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvents
            move: (params: {
                calendarId: string;
                destination: string;
                eventId: string;
                sendNotifications?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
            patch: (params: {
                alwaysIncludeEmail?: boolean;
                calendarId: string;
                eventId: string;
                maxAttendees?: number;
                sendNotifications?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
            quickAdd: (params: {
                calendarId: string;
                sendNotifications?: boolean;
                text: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
            update: (params: {
                alwaysIncludeEmail?: boolean;
                calendarId: string;
                eventId: string;
                maxAttendees?: number;
                sendNotifications?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IEvent
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IChannel
        };
        var freebusy: {
            query: () => { execute(callback: (data:any, original: string) => void):void; }; // IFreeBusyResponse
        };
        var settings: {
            get: (params: {
                setting: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ISetting
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ISettings
            watch: (params: {
                maxResults?: number;
                pageToken?: string;
                syncToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IChannel
        };
        interface IAcl {
            etag: string;
            items: IAclRule[];
            kind: string;
            nextPageToken: string;
            nextSyncToken: string;
        }
        interface IAclRule {
            etag: string;
            id: string;
            kind: string;
            role: string;
            scope: {
                type: string;
                value: string;
            };
        }
        interface ICalendar {
            description: string;
            etag: string;
            id: string;
            kind: string;
            location: string;
            summary: string;
            timeZone: string;
        }
        interface ICalendarList {
            etag: string;
            items: ICalendarListEntry[];
            kind: string;
            nextPageToken: string;
            nextSyncToken: string;
        }
        interface ICalendarListEntry {
            accessRole: string;
            backgroundColor: string;
            colorId: string;
            defaultReminders: IEventReminder[];
            deleted: boolean;
            description: string;
            etag: string;
            foregroundColor: string;
            hidden: boolean;
            id: string;
            kind: string;
            location: string;
            notificationSettings: {
                notifications: ICalendarNotification[];
            };
            primary: boolean;
            selected: boolean;
            summary: string;
            summaryOverride: string;
            timeZone: string;
        }
        interface ICalendarNotification {
            method: string;
            type: string;
        }
        interface IChannel {
            address: string;
            expiration: string; // int64
            id: string;
            kind: string;
            params: { [name:string]: string; };
            payload: boolean;
            resourceId: string;
            resourceUri: string;
            token: string;
            type: string;
        }
        interface IColorDefinition {
            background: string;
            foreground: string;
        }
        interface IColors {
            calendar: { [name:string]: IColorDefinition; };
            event: { [name:string]: IColorDefinition; };
            kind: string;
            updated: string; // date-time
        }
        interface IError {
            domain: string;
            reason: string;
        }
        interface IEvent {
            anyoneCanAddSelf: boolean;
            attendees: IEventAttendee[];
            attendeesOmitted: boolean;
            colorId: string;
            created: string; // date-time
            creator: {
                displayName: string;
                email: string;
                id: string;
                self: boolean;
            };
            description: string;
            end: IEventDateTime;
            endTimeUnspecified: boolean;
            etag: string;
            extendedProperties: {
                private: { [name:string]: string; };
                shared: { [name:string]: string; };
            };
            gadget: {
                display: string;
                height: number; // int32
                iconLink: string;
                link: string;
                preferences: { [name:string]: string; };
                title: string;
                type: string;
                width: number; // int32
            };
            guestsCanInviteOthers: boolean;
            guestsCanModify: boolean;
            guestsCanSeeOtherGuests: boolean;
            hangoutLink: string;
            htmlLink: string;
            iCalUID: string;
            id: string;
            kind: string;
            location: string;
            locked: boolean;
            organizer: {
                displayName: string;
                email: string;
                id: string;
                self: boolean;
            };
            originalStartTime: IEventDateTime;
            privateCopy: boolean;
            recurrence: string[];
            recurringEventId: string;
            reminders: {
                overrides: IEventReminder[];
                useDefault: boolean;
            };
            sequence: number; // int32
            source: {
                title: string;
                url: string;
            };
            start: IEventDateTime;
            status: string;
            summary: string;
            transparency: string;
            updated: string; // date-time
            visibility: string;
        }
        interface IEventAttendee {
            additionalGuests: number; // int32
            comment: string;
            displayName: string;
            email: string;
            id: string;
            optional: boolean;
            organizer: boolean;
            resource: boolean;
            responseStatus: string;
            self: boolean;
        }
        interface IEventDateTime {
            date: string; // date
            dateTime: string; // date-time
            timeZone: string;
        }
        interface IEventReminder {
            method: string;
            minutes: number; // int32
        }
        interface IEvents {
            accessRole: string;
            defaultReminders: IEventReminder[];
            description: string;
            etag: string;
            items: IEvent[];
            kind: string;
            nextPageToken: string;
            nextSyncToken: string;
            summary: string;
            timeZone: string;
            updated: string; // date-time
        }
        interface IFreeBusyCalendar {
            busy: ITimePeriod[];
            errors: IError[];
        }
        interface IFreeBusyGroup {
            calendars: string[];
            errors: IError[];
        }
        interface IFreeBusyRequest {
            calendarExpansionMax: number; // int32
            groupExpansionMax: number; // int32
            items: IFreeBusyRequestItem[];
            timeMax: string; // date-time
            timeMin: string; // date-time
            timeZone: string;
        }
        interface IFreeBusyRequestItem {
            id: string;
        }
        interface IFreeBusyResponse {
            calendars: { [name:string]: IFreeBusyCalendar; };
            groups: { [name:string]: IFreeBusyGroup; };
            kind: string;
            timeMax: string; // date-time
            timeMin: string; // date-time
        }
        interface ISetting {
            etag: string;
            id: string;
            kind: string;
            value: string;
        }
        interface ISettings {
            etag: string;
            items: ISetting[];
            kind: string;
            nextPageToken: string;
            nextSyncToken: string;
        }
        interface ITimePeriod {
            end: string; // date-time
            start: string; // date-time
        }
    }
}
