// Type definitions for Google Gmail API v1
// Project: https://developers.google.com/gmail/api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * The Gmail REST API.
     */
    module gmail {
        var users: {
        };
        /**
         * A draft email in the user's mailbox.
         */
        interface IDraft {
            /**
             * The immutable ID of the draft.
             */
            id: string;
            /**
             * The message content of the draft.
             */
            message: IMessage;
        }
        /**
         * A record of a change to the user's mailbox. Each history contains a list of the messages that were affected by this change.
         */
        interface IHistory {
            /**
             * The mailbox sequence ID.
             */
            id: string; // uint64
            /**
             * The messages that changed in this history record.
             */
            messages: IMessage[];
        }
        /**
         * Labels are used to categorize messages and threads within the user's mailbox.
         */
        interface ILabel {
            /**
             * The immutable ID of the label.
             */
            id: string;
            /**
             * The visibility of the label in the label list in the Gmail web interface.
             */
            labelListVisibility: string;
            /**
             * The visibility of the label in the message list in the Gmail web interface.
             */
            messageListVisibility: string;
            /**
             * The display name of the label.
             */
            name: string;
            /**
             * The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the INBOX and UNREAD labels from messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads.
             */
            type: string;
        }
        interface IListDraftsResponse {
            /**
             * List of drafts.
             */
            drafts: IDraft[];
            /**
             * Token to retrieve the next page of results in the list.
             */
            nextPageToken: string;
            /**
             * Estimated total number of results.
             */
            resultSizeEstimate: number; // uint32
        }
        interface IListHistoryResponse {
            /**
             * List of history records.
             */
            history: IHistory[];
            /**
             * The ID of the mailbox's current history record.
             */
            historyId: string; // uint64
            /**
             * Page token to retrieve the next page of results in the list.
             */
            nextPageToken: string;
        }
        interface IListLabelsResponse {
            /**
             * List of labels.
             */
            labels: ILabel[];
        }
        interface IListMessagesResponse {
            /**
             * List of messages.
             */
            messages: IMessage[];
            /**
             * Token to retrieve the next page of results in the list.
             */
            nextPageToken: string;
            /**
             * Estimated total number of results.
             */
            resultSizeEstimate: number; // uint32
        }
        interface IListThreadsResponse {
            /**
             * Page token to retrieve the next page of results in the list.
             */
            nextPageToken: string;
            /**
             * Estimated total number of results.
             */
            resultSizeEstimate: number; // uint32
            /**
             * List of threads.
             */
            threads: IThread[];
        }
        /**
         * An email message.
         */
        interface IMessage {
            /**
             * The ID of the last history record that modified this message.
             */
            historyId: string; // uint64
            /**
             * The immutable ID of the message.
             */
            id: string;
            /**
             * List of IDs of labels applied to this message.
             */
            labelIds: string[];
            /**
             * The parsed email structure in the message parts.
             */
            payload: IMessagePart;
            /**
             * The entire email message in an RFC 2822 formatted and URL-safe base64 encoded string. Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
             */
            raw: string; // byte
            /**
             * Estimated size in bytes of the message.
             */
            sizeEstimate: number; // int32
            /**
             * A short part of the message text.
             */
            snippet: string;
            /**
             * The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 
             * - The requested threadId must be specified on the Message or Draft.Message you supply with your request. 
             * - The References and In-Reply-To headers must be set in compliance with the <a href="https://tools.ietf.org/html/rfc2822"RFC 2822 standard. 
             * - The Subject headers must match.
             */
            threadId: string;
        }
        /**
         * A single MIME message part.
         */
        interface IMessagePart {
            /**
             * The message part body for this part, which may be empty for container MIME message parts.
             */
            body: IMessagePartBody;
            /**
             * The filename of the attachment. Only present if this message part represents an attachment.
             */
            filename: string;
            /**
             * List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as To, From, and Subject.
             */
            headers: IMessagePartHeader[];
            /**
             * The MIME type of the message part.
             */
            mimeType: string;
            /**
             * The immutable ID of the message part.
             */
            partId: string;
            /**
             * The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/*. For non- container MIME message part types, such as text/plain, this field is empty. For more information, see RFC 1521.
             */
            parts: IMessagePart[];
        }
        /**
         * The body of a single MIME message part.
         */
        interface IMessagePartBody {
            /**
             * When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the entire content of the message part body is contained in the data field.
             */
            attachmentId: string;
            /**
             * The body data of a MIME message part. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
             */
            data: string; // byte
            /**
             * Total number of bytes in the body of the message part.
             */
            size: number; // int32
        }
        interface IMessagePartHeader {
            /**
             * The name of the header before the : separator. For example, To.
             */
            name: string;
            /**
             * The value of the header after the : separator. For example, someuser@example.com.
             */
            value: string;
        }
        interface IModifyMessageRequest {
            /**
             * A list of IDs of labels to add to this message.
             */
            addLabelIds: string[];
            /**
             * A list IDs of labels to remove from this message.
             */
            removeLabelIds: string[];
        }
        interface IModifyThreadRequest {
            /**
             * A list of IDs of labels to add to this thread.
             */
            addLabelIds: string[];
            /**
             * A list of IDs of labels to remove from this thread.
             */
            removeLabelIds: string[];
        }
        /**
         * A collection of messages representing a conversation.
         */
        interface IThread {
            /**
             * The ID of the last history record that modified this thread.
             */
            historyId: string; // uint64
            /**
             * The unique ID of the thread.
             */
            id: string;
            /**
             * The list of messages in the thread.
             */
            messages: IMessage[];
            /**
             * A short part of the message text.
             */
            snippet: string;
        }
    }
}
