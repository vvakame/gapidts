// Type definitions for Google Drive API v1
// Project: https://developers.google.com/drive/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function drive(version:string):typeof googleapis.drive;
    function drive(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.drive;
}
/**
 * The API to interact with Drive.
 */
declare module googleapis.drive {
    var files: {
        /**
         * Gets a file's metadata by id.
         * @params {string} id The id for the file in question.
         * @params {string} projection This parameter is deprecated and has no function.
         * @params {boolean} updateViewedDate Whether to update the view date after successfully retrieving the file.
         */
        get: (params: {
            id: string;
            projection?: string;
            updateViewedDate?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Inserts a file, and any settable metadata or blob content sent with the request.
         */
        insert: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFile;
        }, callback: (err: IErrorResponse, response: IFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates file metadata and/or content. This method supports patch semantics.
         * @params {string} id The id for the file in question.
         * @params {boolean} newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
         * @params {boolean} updateModifiedDate Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
         * @params {boolean} updateViewedDate Whether to update the view date after successfully updating the file.
         */
        patch: (params: {
            id: string;
            newRevision?: boolean;
            updateModifiedDate?: boolean;
            updateViewedDate?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFile;
        }, callback: (err: IErrorResponse, response: IFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates file metadata and/or content
         * @params {string} id The id for the file in question.
         * @params {boolean} newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user's data storage quota).
         * @params {boolean} updateModifiedDate Controls updating the modified date of the file. If true, the modified date will be updated to the current time, regardless of whether other changes are being made. If false, the modified date will only be updated to the current time if other changes are also being made (changing the title, for example).
         * @params {boolean} updateViewedDate Whether to update the view date after successfully updating the file.
         */
        update: (params: {
            id: string;
            newRevision?: boolean;
            updateModifiedDate?: boolean;
            updateViewedDate?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFile;
        }, callback: (err: IErrorResponse, response: IFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * The metadata for a file.
     */
    interface IFile {
        /**
         * Create time for this file (formatted RFC 3339 timestamp).
         */
        createdDate: string; // date-time
        /**
         * A short description of the file
         */
        description: string;
        /**
         * Short term download URL for the file. This will only be populated on files with content stored in Drive.
         */
        downloadUrl: string;
        /**
         * ETag of the file.
         */
        etag: string;
        /**
         * The file extension used when downloading this file. This field is read only. To set the extension, include it on title when creating the file. This will only be populated on files with content stored in Drive.
         */
        fileExtension: string;
        /**
         * The size of the file in bytes. This will only be populated on files with content stored in Drive.
         */
        fileSize: string; // int64
        /**
         * The id of the file.
         */
        id: string;
        /**
         * Indexable text attributes for the file (can only be written)
         */
        indexableText: {
            text: string;
        };
        /**
         * The type of file. This is always drive#file
         */
        kind: string;
        /**
         * Labels for the file.
         */
        labels: {
            hidden: boolean;
            starred: boolean;
            trashed: boolean;
        };
        /**
         * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
         */
        lastViewedDate: string; // date-time
        /**
         * An MD5 checksum for the content of this file. This will only be populated on files with content stored in Drive.
         */
        md5Checksum: string;
        /**
         * The mimetype of the file
         */
        mimeType: string;
        /**
         * Last time this file was modified by the user (formatted RFC 3339 timestamp).
         */
        modifiedByMeDate: string; // date-time
        /**
         * Last time this file was modified by anyone (formatted RFC 3339 timestamp).
         */
        modifiedDate: string; // date-time
        /**
         * Collection of parent folders which contain this file.
         * On insert, setting this field will put the file in all of the provided folders. If no folders are provided, the file will be placed in the default root folder. On update, this field is ignored.
         */
        parentsCollection: {
            id: string;
            parentLink: string;
        }[];
        /**
         * A link back to this file.
         */
        selfLink: string;
        /**
         * The title of this file.
         */
        title: string;
        /**
         * The permissions for the authenticated user on this file.
         */
        userPermission: IPermission;
    }
    /**
     * A single permission for a file.
     */
    interface IPermission {
        /**
         * Any additional roles that this permission describes.
         */
        additionalRoles: string[];
        /**
         * An etag for this permission.
         */
        etag: string;
        /**
         * The kind of this permission. This is always drive#permission
         */
        kind: string;
        /**
         * The role that this permission describes. (For example: reader, writer, owner)
         */
        role: string;
        /**
         * The type of permission (For example: user, group etc).
         */
        type: string;
    }
}
