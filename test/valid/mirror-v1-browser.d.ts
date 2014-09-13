// Type definitions for Google Google Mirror API v1
// Project: https://developers.google.com/glass
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/glass.location
//   View your location
// https://www.googleapis.com/auth/glass.timeline
//   View and manage your Glass timeline

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * API for interacting with Glass users via the timeline.
     */
    module mirror {
        var accounts: {
            /**
             * Inserts a new account for a user
             * @params {string} accountName The name of the account to be passed to the Android Account Manager.
             * @params {string} accountType Account type to be passed to Android Account Manager.
             * @params {string} userToken The ID for the user.
             */
            insert: (params: {
                accountName: string;
                accountType: string;
                userToken: string;
                resource?: IAccount;
            }) => { execute(callback: (data: IResponse<IAccount>, original: string) => void):void; };
        };
        var contacts: {
            /**
             * Deletes a contact.
             * @params {string} id The ID of the contact.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Gets a single contact by ID.
             * @params {string} id The ID of the contact.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IResponse<IContact>, original: string) => void):void; };
            /**
             * Inserts a new contact.
             */
            insert: (params: {
                resource?: IContact;
            }) => { execute(callback: (data: IResponse<IContact>, original: string) => void):void; };
            /**
             * Retrieves a list of contacts for the authenticated user.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<IContactsListResponse>, original: string) => void):void; };
            /**
             * Updates a contact in place. This method supports patch semantics.
             * @params {string} id The ID of the contact.
             */
            patch: (params: {
                id: string;
                resource?: IContact;
            }) => { execute(callback: (data: IResponse<IContact>, original: string) => void):void; };
            /**
             * Updates a contact in place.
             * @params {string} id The ID of the contact.
             */
            update: (params: {
                id: string;
                resource?: IContact;
            }) => { execute(callback: (data: IResponse<IContact>, original: string) => void):void; };
        };
        var locations: {
            /**
             * Gets a single location by ID.
             * @params {string} id The ID of the location or latest for the last known location.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IResponse<ILocation>, original: string) => void):void; };
            /**
             * Retrieves a list of locations for the user.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<ILocationsListResponse>, original: string) => void):void; };
        };
        var settings: {
            /**
             * Gets a single setting by ID.
             * @params {string} id The ID of the setting. The following IDs are valid: 
- locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content. 
- timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IResponse<ISetting>, original: string) => void):void; };
        };
        var subscriptions: {
            /**
             * Deletes a subscription.
             * @params {string} id The ID of the subscription.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Creates a new subscription.
             */
            insert: (params: {
                resource?: ISubscription;
            }) => { execute(callback: (data: IResponse<ISubscription>, original: string) => void):void; };
            /**
             * Retrieves a list of subscriptions for the authenticated user and service.
             */
            list: (params: {
            }) => { execute(callback: (data: IResponse<ISubscriptionsListResponse>, original: string) => void):void; };
            /**
             * Updates an existing subscription in place.
             * @params {string} id The ID of the subscription.
             */
            update: (params: {
                id: string;
                resource?: ISubscription;
            }) => { execute(callback: (data: IResponse<ISubscription>, original: string) => void):void; };
        };
        var timeline: {
            /**
             * Deletes a timeline item.
             * @params {string} id The ID of the timeline item.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Gets a single timeline item by ID.
             * @params {string} id The ID of the timeline item.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IResponse<ITimelineItem>, original: string) => void):void; };
            /**
             * Inserts a new item into the timeline.
             */
            insert: (params: {
                resource?: ITimelineItem;
            }) => { execute(callback: (data: IResponse<ITimelineItem>, original: string) => void):void; };
            /**
             * Retrieves a list of timeline items for the authenticated user.
             * @params {string} bundleId If provided, only items with the given bundleId will be returned.
             * @params {boolean} includeDeleted If true, tombstone records for deleted items will be returned.
             * @params {number} maxResults The maximum number of items to include in the response, used for paging.
             * @params {string} orderBy Controls the order in which timeline items are returned.
             * @params {string} pageToken Token for the page of results to return.
             * @params {boolean} pinnedOnly If true, only pinned items will be returned.
             * @params {string} sourceItemId If provided, only items with the given sourceItemId will be returned.
             */
            list: (params: {
                bundleId?: string;
                includeDeleted?: boolean;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                pinnedOnly?: boolean;
                sourceItemId?: string;
            }) => { execute(callback: (data: IResponse<ITimelineListResponse>, original: string) => void):void; };
            /**
             * Updates a timeline item in place. This method supports patch semantics.
             * @params {string} id The ID of the timeline item.
             */
            patch: (params: {
                id: string;
                resource?: ITimelineItem;
            }) => { execute(callback: (data: IResponse<ITimelineItem>, original: string) => void):void; };
            /**
             * Updates a timeline item in place.
             * @params {string} id The ID of the timeline item.
             */
            update: (params: {
                id: string;
                resource?: ITimelineItem;
            }) => { execute(callback: (data: IResponse<ITimelineItem>, original: string) => void):void; };
            attachments: {
                /**
                 * Deletes an attachment from a timeline item.
                 * @params {string} attachmentId The ID of the attachment.
                 * @params {string} itemId The ID of the timeline item the attachment belongs to.
                 */
                delete: (params: {
                    attachmentId: string;
                    itemId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Retrieves an attachment on a timeline item by item ID and attachment ID.
                 * @params {string} attachmentId The ID of the attachment.
                 * @params {string} itemId The ID of the timeline item the attachment belongs to.
                 */
                get: (params: {
                    attachmentId: string;
                    itemId: string;
                }) => { execute(callback: (data: IResponse<IAttachment>, original: string) => void):void; };
                /**
                 * Adds a new attachment to a timeline item.
                 * @params {string} itemId The ID of the timeline item the attachment belongs to.
                 */
                insert: (params: {
                    itemId: string;
                }) => { execute(callback: (data: IResponse<IAttachment>, original: string) => void):void; };
                /**
                 * Returns a list of attachments for a timeline item.
                 * @params {string} itemId The ID of the timeline item whose attachments should be listed.
                 */
                list: (params: {
                    itemId: string;
                }) => { execute(callback: (data: IResponse<IAttachmentsListResponse>, original: string) => void):void; };
            };
        };
        /**
         * Represents an account passed into the Account Manager on Glass.
         */
        interface IAccount {
            authTokens: IAuthToken[];
            features: string[];
            password: string;
            userData: IUserData[];
        }
        /**
         * Represents media content, such as a photo, that can be attached to a timeline item.
         */
        interface IAttachment {
            /**
             * The MIME type of the attachment.
             */
            contentType: string;
            /**
             * The URL for the content.
             */
            contentUrl: string;
            /**
             * The ID of the attachment.
             */
            id: string;
            /**
             * Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later.
             */
            isProcessingContent: boolean;
        }
        /**
         * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
         */
        interface IAttachmentsListResponse {
            /**
             * The list of attachments.
             */
            items: IAttachment[];
            /**
             * The type of resource. This is always mirror#attachmentsList.
             */
            kind: string;
        }
        interface IAuthToken {
            authToken: string;
            type: string;
        }
        /**
         * A single menu command that is part of a Contact.
         */
        interface ICommand {
            /**
             * The type of operation this command corresponds to. Allowed values are:  
             * - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the "Take a note" voice menu command.  
             * - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the "Post an update" voice menu command.
             */
            type: string;
        }
        /**
         * A person or group that can be used as a creator or a contact.
         */
        interface IContact {
            /**
             * A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.
             */
            acceptCommands: ICommand[];
            /**
             * A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.
             */
            acceptTypes: string[];
            /**
             * The name to display for this contact.
             */
            displayName: string;
            /**
             * An ID for this contact. This is generated by the application and is treated as an opaque token.
             */
            id: string;
            /**
             * Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.
             */
            imageUrls: string[];
            /**
             * The type of resource. This is always mirror#contact.
             */
            kind: string;
            /**
             * Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.
             */
            phoneNumber: string;
            /**
             * Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.
             */
            priority: number; // uint32
            /**
             * A list of sharing features that a contact can handle. Allowed values are:  
             * - ADD_CAPTION
             */
            sharingFeatures: string[];
            /**
             * The ID of the application that created this contact. This is populated by the API
             */
            source: string;
            /**
             * Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.
             */
            speakableName: string;
            /**
             * The type for this contact. This is used for sorting in UIs. Allowed values are:  
             * - INDIVIDUAL - Represents a single person. This is the default. 
             * - GROUP - Represents more than a single person.
             */
            type: string;
        }
        /**
         * A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
         */
        interface IContactsListResponse {
            /**
             * Contact list.
             */
            items: IContact[];
            /**
             * The type of resource. This is always mirror#contacts.
             */
            kind: string;
        }
        /**
         * A geographic location that can be associated with a timeline item.
         */
        interface ILocation {
            /**
             * The accuracy of the location fix in meters.
             */
            accuracy: number; // double
            /**
             * The full address of the location.
             */
            address: string;
            /**
             * The name to be displayed. This may be a business name or a user-defined place, such as "Home".
             */
            displayName: string;
            /**
             * The ID of the location.
             */
            id: string;
            /**
             * The type of resource. This is always mirror#location.
             */
            kind: string;
            /**
             * The latitude, in degrees.
             */
            latitude: number; // double
            /**
             * The longitude, in degrees.
             */
            longitude: number; // double
            /**
             * The time at which this location was captured, formatted according to RFC 3339.
             */
            timestamp: string; // date-time
        }
        /**
         * A list of Locations. This is the response from the server to GET requests on the locations collection.
         */
        interface ILocationsListResponse {
            /**
             * The list of locations.
             */
            items: ILocation[];
            /**
             * The type of resource. This is always mirror#locationsList.
             */
            kind: string;
        }
        /**
         * A custom menu item that can be presented to the user by a timeline item.
         */
        interface IMenuItem {
            /**
             * Controls the behavior when the user picks the menu option. Allowed values are:  
             * - CUSTOM - Custom action set by the service. When the user selects this menuItem, the API triggers a notification to your callbackUrl with the userActions.type set to CUSTOM and the userActions.payload set to the ID of this menu item. This is the default value. 
             * - Built-in actions:  
             * - REPLY - Initiate a reply to the timeline item using the voice recording UI. The creator attribute must be set in the timeline item for this menu to be available. 
             * - REPLY_ALL - Same behavior as REPLY. The original timeline item's recipients will be added to the reply item. 
             * - DELETE - Delete the timeline item. 
             * - SHARE - Share the timeline item with the available contacts. 
             * - READ_ALOUD - Read the timeline item's speakableText aloud; if this field is not set, read the text field; if none of those fields are set, this menu item is ignored. 
             * - GET_MEDIA_INPUT - Allow users to provide media payloads to Glassware from a menu item (currently, only transcribed text from voice input is supported). Subscribe to notifications when users invoke this menu item to receive the timeline item ID. Retrieve the media from the timeline item in the payload property. 
             * - VOICE_CALL - Initiate a phone call using the timeline item's creator.phoneNumber attribute as recipient. 
             * - NAVIGATE - Navigate to the timeline item's location. 
             * - TOGGLE_PINNED - Toggle the isPinned state of the timeline item. 
             * - OPEN_URI - Open the payload of the menu item in the browser. 
             * - PLAY_VIDEO - Open the payload of the menu item in the Glass video player. 
             * - SEND_MESSAGE - Initiate sending a message to the timeline item's creator:  
             * - If the creator.phoneNumber is set and Glass is connected to an Android phone, the message is an SMS. 
             * - Otherwise, if the creator.email is set, the message is an email.
             */
            action: string;
            /**
             * The ID for this menu item. This is generated by the application and is treated as an opaque token.
             */
            id: string;
            /**
             * A generic payload whose meaning changes depending on this MenuItem's action.  
             * - When the action is OPEN_URI, the payload is the URL of the website to view. 
             * - When the action is PLAY_VIDEO, the payload is the streaming URL of the video 
             * - When the action is GET_MEDIA_INPUT, the payload is the text transcription of a user's speech input
             */
            payload: string;
            /**
             * If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected.
             */
            removeWhenSelected: boolean;
            /**
             * For CUSTOM items, a list of values controlling the appearance of the menu item in each of its states. A value for the DEFAULT state must be provided. If the PENDING or CONFIRMED states are missing, they will not be shown.
             */
            values: IMenuValue[];
        }
        /**
         * A single value that is part of a MenuItem.
         */
        interface IMenuValue {
            /**
             * The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown.
             */
            displayName: string;
            /**
             * URL of an icon to display with the menu item.
             */
            iconUrl: string;
            /**
             * The state that this value applies to. Allowed values are:  
             * - DEFAULT - Default value shown when displayed in the menuItems list. 
             * - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled. 
             * - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.
             */
            state: string;
        }
        /**
         * A notification delivered by the API.
         */
        interface INotification {
            /**
             * The collection that generated the notification.
             */
            collection: string;
            /**
             * The ID of the item that generated the notification.
             */
            itemId: string;
            /**
             * The type of operation that generated the notification.
             */
            operation: string;
            /**
             * A list of actions taken by the user that triggered the notification.
             */
            userActions: IUserAction[];
            /**
             * The user token provided by the service when it subscribed for notifications.
             */
            userToken: string;
            /**
             * The secret verify token provided by the service when it subscribed for notifications.
             */
            verifyToken: string;
        }
        /**
         * Controls how notifications for a timeline item are presented to the user.
         */
        interface INotificationConfig {
            /**
             * The time at which the notification should be delivered.
             */
            deliveryTime: string; // date-time
            /**
             * Describes how important the notification is. Allowed values are:  
             * - DEFAULT - Notifications of default importance. A chime will be played to alert users.
             */
            level: string;
        }
        /**
         * A setting for Glass.
         */
        interface ISetting {
            /**
             * The setting's ID. The following IDs are valid:  
             * - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.  
             * - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
             */
            id: string;
            /**
             * The type of resource. This is always mirror#setting.
             */
            kind: string;
            /**
             * The setting value, as a string.
             */
            value: string;
        }
        /**
         * A subscription to events on a collection.
         */
        interface ISubscription {
            /**
             * The URL where notifications should be delivered (must start with https://).
             */
            callbackUrl: string;
            /**
             * The collection to subscribe to. Allowed values are:  
             * - timeline - Changes in the timeline including insertion, deletion, and updates. 
             * - locations - Location updates. 
             * - settings - Settings updates.
             */
            collection: string;
            /**
             * The ID of the subscription.
             */
            id: string;
            /**
             * The type of resource. This is always mirror#subscription.
             */
            kind: string;
            /**
             * Container object for notifications. This is not populated in the Subscription resource.
             */
            notification: INotification;
            /**
             * A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:  
             * - UPDATE - The item has been updated. 
             * - INSERT - A new item has been inserted. 
             * - DELETE - The item has been deleted. 
             * - MENU_ACTION - A custom menu item has been triggered by the user.
             */
            operation: string[];
            /**
             * The time at which this subscription was last modified, formatted according to RFC 3339.
             */
            updated: string; // date-time
            /**
             * An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.
             */
            userToken: string;
            /**
             * A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.
             */
            verifyToken: string;
        }
        /**
         * A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
         */
        interface ISubscriptionsListResponse {
            /**
             * The list of subscriptions.
             */
            items: ISubscription[];
            /**
             * The type of resource. This is always mirror#subscriptionsList.
             */
            kind: string;
        }
        /**
         * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
         */
        interface ITimelineItem {
            /**
             * A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:  
             * - attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array. 
             * - cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.
             */
            attachments: IAttachment[];
            /**
             * The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.
             */
            bundleId: string;
            /**
             * A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.
             */
            canonicalUrl: string;
            /**
             * The time at which this item was created, formatted according to RFC 3339.
             */
            created: string; // date-time
            /**
             * The user or group that created this item.
             */
            creator: IContact;
            /**
             * The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.
             */
            displayTime: string; // date-time
            /**
             * ETag for this item.
             */
            etag: string;
            /**
             * HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.
             * Allowed HTML elements - You can use these elements in your timeline cards.
             *  
             * - Headers: h1, h2, h3, h4, h5, h6 
             * - Images: img 
             * - Lists: li, ol, ul 
             * - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time 
             * - Structural: blockquote, br, div, hr, p, span 
             * - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup 
             * - Tables: table, tbody, td, tfoot, th, thead, tr  
             * Blocked HTML elements: These elements and their contents are removed from HTML payloads.
             *  
             * - Document headers: head, title 
             * - Embeds: audio, embed, object, source, video 
             * - Frames: frame, frameset 
             * - Scripting: applet, script  
             * Other elements: Any elements that aren't listed are removed, but their contents are preserved.
             */
            html: string;
            /**
             * The ID of the timeline item. This is unique within a user's timeline.
             */
            id: string;
            /**
             * If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.
             */
            inReplyTo: string;
            /**
             * Whether this item is a bundle cover.
             * 
             * If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.
             * 
             * On the main timeline, items that are shown are:  
             * - Items that have isBundleCover set to true  
             * - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:  
             * - Items that have the bundleId in question AND isBundleCover set to false
             */
            isBundleCover: boolean;
            /**
             * When true, indicates this item is deleted, and only the ID property is set.
             */
            isDeleted: boolean;
            /**
             * When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.
             */
            isPinned: boolean;
            /**
             * The type of resource. This is always mirror#timelineItem.
             */
            kind: string;
            /**
             * The geographic location associated with this item.
             */
            location: ILocation;
            /**
             * A list of menu items that will be presented to the user when this item is selected in the timeline.
             */
            menuItems: IMenuItem[];
            /**
             * Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.
             */
            notification: INotificationConfig;
            /**
             * For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
             */
            pinScore: number; // int32
            /**
             * A list of users or groups that this item has been shared with.
             */
            recipients: IContact[];
            /**
             * A URL that can be used to retrieve this item.
             */
            selfLink: string;
            /**
             * Opaque string you can use to map a timeline item to data in your own service.
             */
            sourceItemId: string;
            /**
             * The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.
             * 
             * Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
             */
            speakableText: string;
            /**
             * A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
             * 
             * This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".
             * 
             * Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.
             */
            speakableType: string;
            /**
             * Text content of this item.
             */
            text: string;
            /**
             * The title of this item.
             */
            title: string;
            /**
             * The time at which this item was last modified, formatted according to RFC 3339.
             */
            updated: string; // date-time
        }
        /**
         * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
         */
        interface ITimelineListResponse {
            /**
             * Items in the timeline.
             */
            items: ITimelineItem[];
            /**
             * The type of resource. This is always mirror#timeline.
             */
            kind: string;
            /**
             * The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results.
             */
            nextPageToken: string;
        }
        /**
         * Represents an action taken by the user that triggered a notification.
         */
        interface IUserAction {
            /**
             * An optional payload for the action.
             * 
             * For actions of type CUSTOM, this is the ID of the custom menu item that was selected.
             */
            payload: string;
            /**
             * The type of action. The value of this can be:  
             * - SHARE - the user shared an item. 
             * - REPLY - the user replied to an item. 
             * - REPLY_ALL - the user replied to all recipients of an item. 
             * - CUSTOM - the user selected a custom menu item on the timeline item. 
             * - DELETE - the user deleted the item. 
             * - PIN - the user pinned the item. 
             * - UNPIN - the user unpinned the item. 
             * - LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored.
             */
            type: string;
        }
        interface IUserData {
            key: string;
            value: string;
        }
    }
}
