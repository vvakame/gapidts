// Type definitions for Google Email Migration API v2 email_migration_v2
// Project: https://developers.google.com/admin-sdk/email-migration/v2/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Email Migration API lets you migrate emails of users to Google backends.
     */
    module admin {
        var mail: {
            /**
             * Insert Mail into Google's Gmail backends
             * @params {string} userKey The email or immutable id of the user
             */
            insert: (params: {
                userKey: string;
                resource?: IMailItem;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        /**
         * JSON template for MailItem object in Email Migration API.
         */
        interface IMailItem {
            /**
             * Boolean indicating if the mail is deleted (used in Vault)
             */
            isDeleted: boolean;
            /**
             * Boolean indicating if the mail is draft
             */
            isDraft: boolean;
            /**
             * Boolean indicating if the mail is in inbox
             */
            isInbox: boolean;
            /**
             * Boolean indicating if the mail is in 'sent mails'
             */
            isSent: boolean;
            /**
             * Boolean indicating if the mail is starred
             */
            isStarred: boolean;
            /**
             * Boolean indicating if the mail is in trash
             */
            isTrash: boolean;
            /**
             * Boolean indicating if the mail is unread
             */
            isUnread: boolean;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * List of labels (strings)
             */
            labels: string[];
        }
    }
}
