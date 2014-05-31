declare module gapi.client {
    module calendar {
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
