// Type definitions for Google Groups Settings API v1
// Project: https://developers.google.com/google-apps/groups-settings/get_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function groupssettings(version:string):typeof googleapis.groupssettings;
}
/**
 * Lets you manage permission levels and related settings of a group.
 */
declare module googleapis.groupssettings {
    var groups: {
        /**
         * Gets one resource by id.
         * @params {string} groupUniqueId The resource ID
         */
        get: (params: {
            groupUniqueId: string;
        }, callback: (err: IErrorResponse, response: IGroups, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an existing resource. This method supports patch semantics.
         * @params {string} groupUniqueId The resource ID
         */
        patch: (params: {
            groupUniqueId: string;
            resource?: IGroups;
        }, callback: (err: IErrorResponse, response: IGroups, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an existing resource.
         * @params {string} groupUniqueId The resource ID
         */
        update: (params: {
            groupUniqueId: string;
            resource?: IGroups;
        }, callback: (err: IErrorResponse, response: IGroups, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * JSON template for Group resource
     */
    interface IGroups {
        /**
         * Are external members allowed to join the group.
         */
        allowExternalMembers: string;
        /**
         * Is google allowed to contact admins.
         */
        allowGoogleCommunication: string;
        /**
         * If posting from web is allowed.
         */
        allowWebPosting: string;
        /**
         * If the group is archive only
         */
        archiveOnly: string;
        /**
         * Default email to which reply to any message should go.
         */
        customReplyTo: string;
        /**
         * Default message deny notification message
         */
        defaultMessageDenyNotificationText: string;
        /**
         * Description of the group
         */
        description: string;
        /**
         * Email id of the group
         */
        email: string;
        /**
         * If this groups should be included in global address list or not.
         */
        includeInGlobalAddressList: string;
        /**
         * If the contents of the group are archived.
         */
        isArchived: string;
        /**
         * The type of the resource.
         */
        kind: string;
        /**
         * Maximum message size allowed.
         */
        maxMessageBytes: number; // int32
        /**
         * Can members post using the group email address.
         */
        membersCanPostAsTheGroup: string;
        /**
         * Default message display font. Possible values are: DEFAULT_FONT FIXED_WIDTH_FONT
         */
        messageDisplayFont: string;
        /**
         * Moderation level for messages. Possible values are: MODERATE_ALL_MESSAGES MODERATE_NON_MEMBERS MODERATE_NEW_MEMBERS MODERATE_NONE
         */
        messageModerationLevel: string;
        /**
         * Name of the Group
         */
        name: string;
        /**
         * Primary language for the group.
         */
        primaryLanguage: string;
        /**
         * Whome should the default reply to a message go to. Possible values are: REPLY_TO_CUSTOM REPLY_TO_SENDER REPLY_TO_LIST REPLY_TO_OWNER REPLY_TO_IGNORE REPLY_TO_MANAGERS
         */
        replyTo: string;
        /**
         * Should the member be notified if his message is denied by owner.
         */
        sendMessageDenyNotification: string;
        /**
         * Is the group listed in groups directory
         */
        showInGroupDirectory: string;
        /**
         * Moderation level for messages detected as spam. Possible values are: ALLOW MODERATE SILENTLY_MODERATE REJECT
         */
        spamModerationLevel: string;
        /**
         * Permission to contact owner of the group via web UI. Possbile values are: ANYONE_CAN_CONTACT ALL_IN_DOMAIN_CAN_CONTACT ALL_MEMBERS_CAN_CONTACT ALL_MANAGERS_CAN_CONTACT
         */
        whoCanContactOwner: string;
        /**
         * Permissions to invite members. Possbile values are: ALL_MEMBERS_CAN_INVITE ALL_MANAGERS_CAN_INVITE
         */
        whoCanInvite: string;
        /**
         * Permissions to join the group. Possible values are: ANYONE_CAN_JOIN ALL_IN_DOMAIN_CAN_JOIN INVITED_CAN_JOIN CAN_REQUEST_TO_JOIN
         */
        whoCanJoin: string;
        /**
         * Permission to leave the group. Possible values are: ALL_MANAGERS_CAN_LEAVE ALL_MEMBERS_CAN_LEAVE
         */
        whoCanLeaveGroup: string;
        /**
         * Permissions to post messages to the group. Possible values are: NONE_CAN_POST ALL_MANAGERS_CAN_POST ALL_MEMBERS_CAN_POST ALL_IN_DOMAIN_CAN_POST ANYONE_CAN_POST
         */
        whoCanPostMessage: string;
        /**
         * Permissions to view group. Possbile values are: ANYONE_CAN_VIEW ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
         */
        whoCanViewGroup: string;
        /**
         * Permissions to view membership. Possbile values are: ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
         */
        whoCanViewMembership: string;
    }
}
