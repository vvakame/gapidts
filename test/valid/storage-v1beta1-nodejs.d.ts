// Type definitions for Google Cloud Storage API v1beta1
// Project: https://developers.google.com/storage/docs/json_api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function storage(version:string):typeof googleapis.storage;
}
/**
 * Lets you store and retrieve potentially-large, immutable data objects.
 */
declare module googleapis.storage {
    var bucketAccessControls: {
        /**
         * Deletes the ACL entry for the specified entity on the specified bucket.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         */
        delete: (params: {
            bucket: string;
            entity: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns the ACL entry for the specified entity on the specified bucket.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         */
        get: (params: {
            bucket: string;
            entity: string;
        }, callback: (err: IErrorResponse, response: IBucketAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new ACL entry on the specified bucket.
         * @params {string} bucket Name of a bucket.
         */
        insert: (params: {
            bucket: string;
            resource?: IBucketAccessControl;
        }, callback: (err: IErrorResponse, response: IBucketAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves ACL entries on the specified bucket.
         * @params {string} bucket Name of a bucket.
         */
        list: (params: {
            bucket: string;
        }, callback: (err: IErrorResponse, response: IBucketAccessControls, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an ACL entry on the specified bucket. This method supports patch semantics.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         */
        patch: (params: {
            bucket: string;
            entity: string;
            resource?: IBucketAccessControl;
        }, callback: (err: IErrorResponse, response: IBucketAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an ACL entry on the specified bucket.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         */
        update: (params: {
            bucket: string;
            entity: string;
            resource?: IBucketAccessControl;
        }, callback: (err: IErrorResponse, response: IBucketAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var buckets: {
        /**
         * Deletes an empty bucket.
         * @params {string} bucket Name of a bucket.
         */
        delete: (params: {
            bucket: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns metadata for the specified bucket.
         * @params {string} bucket Name of a bucket.
         * @params {string} projection Set of properties to return. Defaults to no_acl.
         */
        get: (params: {
            bucket: string;
            projection?: string;
        }, callback: (err: IErrorResponse, response: IBucket, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new bucket.
         * @params {string} projection Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
         */
        insert: (params: {
            projection?: string;
            resource?: IBucket;
        }, callback: (err: IErrorResponse, response: IBucket, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves a list of buckets for a given project.
         * @params {number} max-results Maximum number of buckets to return.
         * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
         * @params {string} projectId A valid API project identifier.
         * @params {string} projection Set of properties to return. Defaults to no_acl.
         */
        list: (params: {
            "max-results"?: number;
            pageToken?: string;
            projectId: string;
            projection?: string;
        }, callback: (err: IErrorResponse, response: IBuckets, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a bucket. This method supports patch semantics.
         * @params {string} bucket Name of a bucket.
         * @params {string} projection Set of properties to return. Defaults to full.
         */
        patch: (params: {
            bucket: string;
            projection?: string;
            resource?: IBucket;
        }, callback: (err: IErrorResponse, response: IBucket, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a bucket.
         * @params {string} bucket Name of a bucket.
         * @params {string} projection Set of properties to return. Defaults to full.
         */
        update: (params: {
            bucket: string;
            projection?: string;
            resource?: IBucket;
        }, callback: (err: IErrorResponse, response: IBucket, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var objectAccessControls: {
        /**
         * Deletes the ACL entry for the specified entity on the specified object.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @params {string} object Name of the object.
         */
        delete: (params: {
            bucket: string;
            entity: string;
            object: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns the ACL entry for the specified entity on the specified object.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @params {string} object Name of the object.
         */
        get: (params: {
            bucket: string;
            entity: string;
            object: string;
        }, callback: (err: IErrorResponse, response: IObjectAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new ACL entry on the specified object.
         * @params {string} bucket Name of a bucket.
         * @params {string} object Name of the object.
         */
        insert: (params: {
            bucket: string;
            object: string;
            resource?: IObjectAccessControl;
        }, callback: (err: IErrorResponse, response: IObjectAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves ACL entries on the specified object.
         * @params {string} bucket Name of a bucket.
         * @params {string} object Name of the object.
         */
        list: (params: {
            bucket: string;
            object: string;
        }, callback: (err: IErrorResponse, response: IObjectAccessControls, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an ACL entry on the specified object. This method supports patch semantics.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @params {string} object Name of the object.
         */
        patch: (params: {
            bucket: string;
            entity: string;
            object: string;
            resource?: IObjectAccessControl;
        }, callback: (err: IErrorResponse, response: IObjectAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates an ACL entry on the specified object.
         * @params {string} bucket Name of a bucket.
         * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @params {string} object Name of the object.
         */
        update: (params: {
            bucket: string;
            entity: string;
            object: string;
            resource?: IObjectAccessControl;
        }, callback: (err: IErrorResponse, response: IObjectAccessControl, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var objects: {
        /**
         * Deletes data blobs and associated metadata.
         * @params {string} bucket Name of the bucket in which the object resides.
         * @params {string} object Name of the object.
         */
        delete: (params: {
            bucket: string;
            object: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves objects or their associated metadata.
         * @params {string} bucket Name of the bucket in which the object resides.
         * @params {string} object Name of the object.
         * @params {string} projection Set of properties to return. Defaults to no_acl.
         */
        get: (params: {
            bucket: string;
            object: string;
            projection?: string;
        }, callback: (err: IErrorResponse, response: IObject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Stores new data blobs and associated metadata.
         * @params {string} bucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
         * @params {string} name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
         * @params {string} projection Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.
         */
        insert: (params: {
            bucket: string;
            name?: string;
            projection?: string;
            resource?: IObject;
        }, callback: (err: IErrorResponse, response: IObject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves a list of objects matching the criteria.
         * @params {string} bucket Name of the bucket in which to look for objects.
         * @params {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
         * @params {number} max-results Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
         * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
         * @params {string} prefix Filter results to objects whose names begin with this prefix.
         * @params {string} projection Set of properties to return. Defaults to no_acl.
         */
        list: (params: {
            bucket: string;
            delimiter?: string;
            "max-results"?: number;
            pageToken?: string;
            prefix?: string;
            projection?: string;
        }, callback: (err: IErrorResponse, response: IObjects, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a data blob's associated metadata. This method supports patch semantics.
         * @params {string} bucket Name of the bucket in which the object resides.
         * @params {string} object Name of the object.
         * @params {string} projection Set of properties to return. Defaults to full.
         */
        patch: (params: {
            bucket: string;
            object: string;
            projection?: string;
            resource?: IObject;
        }, callback: (err: IErrorResponse, response: IObject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a data blob's associated metadata.
         * @params {string} bucket Name of the bucket in which the object resides.
         * @params {string} object Name of the object.
         * @params {string} projection Set of properties to return. Defaults to full.
         */
        update: (params: {
            bucket: string;
            object: string;
            projection?: string;
            resource?: IObject;
        }, callback: (err: IErrorResponse, response: IObject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * A bucket.
     */
    interface IBucket {
        /**
         * Access controls on the bucket.
         */
        acl: IBucketAccessControl[];
        /**
         * Default access controls to apply to new objects when no ACL is provided.
         */
        defaultObjectAcl: IObjectAccessControl[];
        /**
         * The name of the bucket.
         */
        id: string;
        /**
         * The kind of item this is. For buckets, this is always storage#bucket.
         */
        kind: string;
        /**
         * The location of the bucket. Object data for objects in the bucket resides in physical storage in this location. Can be US or EU. Defaults to US.
         */
        location: string;
        /**
         * The owner of the bucket. This will always be the project team's owner group.
         */
        owner: {
            entity: string;
            entityId: string;
        };
        /**
         * The project the bucket belongs to.
         */
        projectId: string; // uint64
        /**
         * The URI of this bucket.
         */
        selfLink: string;
        /**
         * Creation time of the bucket in RFC 3339 format.
         */
        timeCreated: string; // date-time
        /**
         * The bucket's website configuration.
         */
        website: {
            mainPageSuffix: string;
            notFoundPage: string;
        };
    }
    /**
     * An access-control entry.
     */
    interface IBucketAccessControl {
        /**
         * The name of the bucket.
         */
        bucket: string;
        /**
         * The domain associated with the entity, if any.
         */
        domain: string;
        /**
         * The email address associated with the entity, if any.
         */
        email: string;
        /**
         * The entity holding the permission, in one of the following forms: 
         * - user-userId 
         * - user-email 
         * - group-groupId 
         * - group-email 
         * - domain-domain 
         * - allUsers 
         * - allAuthenticatedUsers Examples: 
         * - The user liz@example.com would be user-liz@example.com. 
         * - The group example@googlegroups.com would be group-example@googlegroups.com. 
         * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
         */
        entity: string;
        /**
         * The ID for the entity, if any.
         */
        entityId: string;
        /**
         * The ID of the access-control entry.
         */
        id: string;
        /**
         * The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
         */
        kind: string;
        /**
         * The access permission for the entity. Can be READER, WRITER, or OWNER.
         */
        role: string;
        /**
         * The link to this access-control entry.
         */
        selfLink: string;
    }
    /**
     * An access-control list.
     */
    interface IBucketAccessControls {
        /**
         * The list of items.
         */
        items: IBucketAccessControl[];
        /**
         * The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
         */
        kind: string;
    }
    /**
     * A list of buckets.
     */
    interface IBuckets {
        /**
         * The list of items.
         */
        items: IBucket[];
        /**
         * The kind of item this is. For lists of buckets, this is always storage#buckets.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * An object.
     */
    interface IObject {
        /**
         * Access controls on the object.
         */
        acl: IObjectAccessControl[];
        /**
         * The bucket containing this object.
         */
        bucket: string;
        /**
         * Cache-Control directive for the object data.
         */
        cacheControl: string;
        /**
         * Content-Disposition of the object data.
         */
        contentDisposition: string;
        /**
         * Content-Encoding of the object data.
         */
        contentEncoding: string;
        /**
         * Content-Language of the object data.
         */
        contentLanguage: string;
        /**
         * The ID of the object.
         */
        id: string;
        /**
         * The kind of item this is. For objects, this is always storage#object.
         */
        kind: string;
        /**
         * Object media data. Provided on your behalf when uploading raw media or multipart/related with an auxiliary media part.
         */
        media: {
            algorithm: string;
            contentType: string;
            data: string; // byte
            hash: string;
            length: string; // uint64
            link: string;
            timeCreated: string; // date-time
        };
        /**
         * User-provided metadata, in key/value pairs.
         */
        metadata: {
            [name:string]: string;
        };
        /**
         * The name of this object. Required if not specified by URL parameter.
         */
        name: string;
        /**
         * The owner of the object. This will always be the uploader of the object.
         */
        owner: {
            entity: string;
            entityId: string;
        };
        /**
         * The link to this object.
         */
        selfLink: string;
    }
    /**
     * An access-control entry.
     */
    interface IObjectAccessControl {
        /**
         * The name of the bucket.
         */
        bucket: string;
        /**
         * The domain associated with the entity, if any.
         */
        domain: string;
        /**
         * The email address associated with the entity, if any.
         */
        email: string;
        /**
         * The entity holding the permission, in one of the following forms: 
         * - user-userId 
         * - user-email 
         * - group-groupId 
         * - group-email 
         * - domain-domain 
         * - allUsers 
         * - allAuthenticatedUsers Examples: 
         * - The user liz@example.com would be user-liz@example.com. 
         * - The group example@googlegroups.com would be group-example@googlegroups.com. 
         * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
         */
        entity: string;
        /**
         * The ID for the entity, if any.
         */
        entityId: string;
        /**
         * The ID of the access-control entry.
         */
        id: string;
        /**
         * The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
         */
        kind: string;
        /**
         * The name of the object.
         */
        object: string;
        /**
         * The access permission for the entity. Can be READER or OWNER.
         */
        role: string;
        /**
         * The link to this access-control entry.
         */
        selfLink: string;
    }
    /**
     * An access-control list.
     */
    interface IObjectAccessControls {
        /**
         * The list of items.
         */
        items: IObjectAccessControl[];
        /**
         * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
         */
        kind: string;
    }
    /**
     * A list of objects.
     */
    interface IObjects {
        /**
         * The list of items.
         */
        items: IObject[];
        /**
         * The kind of item this is. For lists of objects, this is always storage#objects.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
         */
        prefixes: string[];
    }
}
