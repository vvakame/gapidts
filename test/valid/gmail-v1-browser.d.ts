// Type definitions for Google Gmail API v1
// Project: https://developers.google.com/gmail/api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://mail.google.com/
//   View and manage your mail
// https://www.googleapis.com/auth/gmail.compose
//   Manage drafts and send emails
// https://www.googleapis.com/auth/gmail.modify
//   View and modify but not delete your email
// https://www.googleapis.com/auth/gmail.readonly
//   View your emails messages and settings

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Gmail REST API.
     */
    module gmail {
        var users: {
            drafts: {
                /**
                 * Creates a new draft with the DRAFT label.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                create: (params: {
                    userId: string;
                    resource?: IDraft;
                }) => {
                    execute(callback: (data: IResponse<IDraft>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Immediately and permanently deletes the specified draft. Does not simply trash it.
                 * @params {string} id The ID of the draft to delete.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                delete: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data:any, original: string) => void):void;// void
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Gets the specified draft.
                 * @params {string} format The format to return the draft in.
                 * @params {string} id The ID of the draft to retrieve.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                get: (params: {
                    format?: string;
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IDraft>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Lists the drafts in the user's mailbox.
                 * @params {number} maxResults Maximum number of drafts to return.
                 * @params {string} pageToken Page token to retrieve a specific page of results in the list.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                list: (params: {
                    maxResults?: number;
                    pageToken?: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IListDraftsResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListDraftsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                send: (params: {
                    userId: string;
                    resource?: IDraft;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Replaces a draft's content.
                 * @params {string} id The ID of the draft to update.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                update: (params: {
                    id: string;
                    userId: string;
                    resource?: IDraft;
                }) => {
                    execute(callback: (data: IResponse<IDraft>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IDraft>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
            history: {
                /**
                 * Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
                 * @params {string} labelId Only return messages with a label matching the ID.
                 * @params {number} maxResults The maximum number of history records to return.
                 * @params {string} pageToken Page token to retrieve a specific page of results in the list.
                 * @params {string} startHistoryId Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                list: (params: {
                    labelId?: string;
                    maxResults?: number;
                    pageToken?: string;
                    startHistoryId?: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IListHistoryResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListHistoryResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
            labels: {
                /**
                 * Creates a new label.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                create: (params: {
                    userId: string;
                    resource?: ILabel;
                }) => {
                    execute(callback: (data: IResponse<ILabel>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
                 * @params {string} id The ID of the label to delete.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                delete: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data:any, original: string) => void):void;// void
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Gets the specified label.
                 * @params {string} id The ID of the label to retrieve.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                get: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<ILabel>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Lists all labels in the user's mailbox.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                list: (params: {
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IListLabelsResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListLabelsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Updates the specified label. This method supports patch semantics.
                 * @params {string} id The ID of the label to update.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                patch: (params: {
                    id: string;
                    userId: string;
                    resource?: ILabel;
                }) => {
                    execute(callback: (data: IResponse<ILabel>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Updates the specified label.
                 * @params {string} id The ID of the label to update.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                update: (params: {
                    id: string;
                    userId: string;
                    resource?: ILabel;
                }) => {
                    execute(callback: (data: IResponse<ILabel>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ILabel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
            messages: {
                /**
                 * Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
                 * @params {string} id The ID of the message to delete.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                delete: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data:any, original: string) => void):void;// void
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Gets the specified message.
                 * @params {string} format The format to return the message in.
                 * @params {string} id The ID of the message to retrieve.
                 * @params {string} metadataHeaders When given and format is METADATA, only include headers specified.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                get: (params: {
                    format?: string;
                    id: string;
                    metadataHeaders?: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
                 * @params {string} internalDateSource Source for Gmail's internal date of the message.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                import: (params: {
                    internalDateSource?: string;
                    userId: string;
                    resource?: IMessage;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
                 * @params {string} internalDateSource Source for Gmail's internal date of the message.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                insert: (params: {
                    internalDateSource?: string;
                    userId: string;
                    resource?: IMessage;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Lists the messages in the user's mailbox.
                 * @params {boolean} includeSpamTrash Include messages from SPAM and TRASH in the results.
                 * @params {string} labelIds Only return messages with labels that match all of the specified label IDs.
                 * @params {number} maxResults Maximum number of messages to return.
                 * @params {string} pageToken Page token to retrieve a specific page of results in the list.
                 * @params {string} q Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                list: (params: {
                    includeSpamTrash?: boolean;
                    labelIds?: string;
                    maxResults?: number;
                    pageToken?: string;
                    q?: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IListMessagesResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListMessagesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Modifies the labels on the specified message.
                 * @params {string} id The ID of the message to modify.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                modify: (params: {
                    id: string;
                    userId: string;
                    resource?: IModifyMessageRequest;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Sends the specified message to the recipients in the To, Cc, and Bcc headers.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                send: (params: {
                    userId: string;
                    resource?: IMessage;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Moves the specified message to the trash.
                 * @params {string} id The ID of the message to Trash.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                trash: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Removes the specified message from the trash.
                 * @params {string} id The ID of the message to remove from Trash.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                untrash: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IMessage>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IMessage>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                attachments: {
                    /**
                     * Gets the specified message attachment.
                     * @params {string} id The ID of the attachment.
                     * @params {string} messageId The ID of the message containing the attachment.
                     * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                     */
                    get: (params: {
                        id: string;
                        messageId: string;
                        userId: string;
                    }) => {
                        execute(callback: (data: IResponse<IMessagePartBody>, original: string) => void):void;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IMessagePartBody>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    };
                };
            };
            threads: {
                /**
                 * Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
                 * @params {string} id ID of the Thread to delete.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                delete: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data:any, original: string) => void):void;// void
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Gets the specified thread.
                 * @params {string} id The ID of the thread to retrieve.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                get: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IThread>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Lists the threads in the user's mailbox.
                 * @params {boolean} includeSpamTrash Include threads from SPAM and TRASH in the results.
                 * @params {string} labelIds Only return threads with labels that match all of the specified label IDs.
                 * @params {number} maxResults Maximum number of threads to return.
                 * @params {string} pageToken Page token to retrieve a specific page of results in the list.
                 * @params {string} q Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                list: (params: {
                    includeSpamTrash?: boolean;
                    labelIds?: string;
                    maxResults?: number;
                    pageToken?: string;
                    q?: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IListThreadsResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IListThreadsResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Modifies the labels applied to the thread. This applies to all messages in the thread.
                 * @params {string} id The ID of the thread to modify.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                modify: (params: {
                    id: string;
                    userId: string;
                    resource?: IModifyThreadRequest;
                }) => {
                    execute(callback: (data: IResponse<IThread>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Moves the specified thread to the trash.
                 * @params {string} id The ID of the thread to Trash.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                trash: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IThread>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * Removes the specified thread from the trash.
                 * @params {string} id The ID of the thread to remove from Trash.
                 * @params {string} userId The user's email address. The special value me can be used to indicate the authenticated user.
                 */
                untrash: (params: {
                    id: string;
                    userId: string;
                }) => {
                    execute(callback: (data: IResponse<IThread>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IThread>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
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
