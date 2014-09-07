// Type definitions for Google Cloud Storage API v1
// Project: https://developers.google.com/storage/docs/json_api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Lets you store and retrieve potentially-large, immutable data objects.
     */
    module storage {
        var bucketAccessControls: {
            /**
             * Permanently deletes the ACL entry for the specified entity on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            delete: (params: {
                bucket: string;
                entity: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns the ACL entry for the specified entity on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            get: (params: {
                bucket: string;
                entity: string;
            }) => { execute(callback: (data: IBucketAccessControl, original: string) => void):void; };
            /**
             * Creates a new ACL entry on the specified bucket.
             * @params {string} bucket Name of a bucket.
             */
            insert: (params: {
                bucket: string;
                resource?: IBucketAccessControl;
            }) => { execute(callback: (data: IBucketAccessControl, original: string) => void):void; };
            /**
             * Retrieves ACL entries on the specified bucket.
             * @params {string} bucket Name of a bucket.
             */
            list: (params: {
                bucket: string;
            }) => { execute(callback: (data: IBucketAccessControls, original: string) => void):void; };
            /**
             * Updates an ACL entry on the specified bucket. This method supports patch semantics.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            patch: (params: {
                bucket: string;
                entity: string;
                resource?: IBucketAccessControl;
            }) => { execute(callback: (data: IBucketAccessControl, original: string) => void):void; };
            /**
             * Updates an ACL entry on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            update: (params: {
                bucket: string;
                entity: string;
                resource?: IBucketAccessControl;
            }) => { execute(callback: (data: IBucketAccessControl, original: string) => void):void; };
        };
        var buckets: {
            /**
             * Permanently deletes an empty bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} ifMetagenerationMatch If set, only deletes the bucket if its metageneration matches this value.
             * @params {string} ifMetagenerationNotMatch If set, only deletes the bucket if its metageneration does not match this value.
             */
            delete: (params: {
                bucket: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns metadata for the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
             * @params {string} projection Set of properties to return. Defaults to noAcl.
             */
            get: (params: {
                bucket: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                projection?: string;
            }) => { execute(callback: (data: IBucket, original: string) => void):void; };
            /**
             * Creates a new bucket.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this bucket.
             * @params {string} project A valid API project identifier.
             * @params {string} projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
             */
            insert: (params: {
                predefinedAcl?: string;
                project: string;
                projection?: string;
                resource?: IBucket;
            }) => { execute(callback: (data: IBucket, original: string) => void):void; };
            /**
             * Retrieves a list of buckets for a given project.
             * @params {number} maxResults Maximum number of buckets to return.
             * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
             * @params {string} project A valid API project identifier.
             * @params {string} projection Set of properties to return. Defaults to noAcl.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                project: string;
                projection?: string;
            }) => { execute(callback: (data: IBuckets, original: string) => void):void; };
            /**
             * Updates a bucket. This method supports patch semantics.
             * @params {string} bucket Name of a bucket.
             * @params {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this bucket.
             * @params {string} projection Set of properties to return. Defaults to full.
             */
            patch: (params: {
                bucket: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                predefinedAcl?: string;
                projection?: string;
                resource?: IBucket;
            }) => { execute(callback: (data: IBucket, original: string) => void):void; };
            /**
             * Updates a bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this bucket.
             * @params {string} projection Set of properties to return. Defaults to full.
             */
            update: (params: {
                bucket: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                predefinedAcl?: string;
                projection?: string;
                resource?: IBucket;
            }) => { execute(callback: (data: IBucket, original: string) => void):void; };
        };
        var channels: {
            /**
             * Stop watching resources through this channel
             */
            stop: (params: {
                resource?: IChannel;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var defaultObjectAccessControls: {
            /**
             * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            delete: (params: {
                bucket: string;
                entity: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns the default object ACL entry for the specified entity on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            get: (params: {
                bucket: string;
                entity: string;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Creates a new default object ACL entry on the specified bucket.
             * @params {string} bucket Name of a bucket.
             */
            insert: (params: {
                bucket: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Retrieves default object ACL entries on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
             * @params {string} ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
             */
            list: (params: {
                bucket: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
            }) => { execute(callback: (data: IObjectAccessControls, original: string) => void):void; };
            /**
             * Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            patch: (params: {
                bucket: string;
                entity: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Updates a default object ACL entry on the specified bucket.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             */
            update: (params: {
                bucket: string;
                entity: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
        };
        var objectAccessControls: {
            /**
             * Permanently deletes the ACL entry for the specified entity on the specified object.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            delete: (params: {
                bucket: string;
                entity: string;
                generation?: string;
                object: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns the ACL entry for the specified entity on the specified object.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            get: (params: {
                bucket: string;
                entity: string;
                generation?: string;
                object: string;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Creates a new ACL entry on the specified object.
             * @params {string} bucket Name of a bucket.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            insert: (params: {
                bucket: string;
                generation?: string;
                object: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Retrieves ACL entries on the specified object.
             * @params {string} bucket Name of a bucket.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            list: (params: {
                bucket: string;
                generation?: string;
                object: string;
            }) => { execute(callback: (data: IObjectAccessControls, original: string) => void):void; };
            /**
             * Updates an ACL entry on the specified object. This method supports patch semantics.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            patch: (params: {
                bucket: string;
                entity: string;
                generation?: string;
                object: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
            /**
             * Updates an ACL entry on the specified object.
             * @params {string} bucket Name of a bucket.
             * @params {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} object Name of the object.
             */
            update: (params: {
                bucket: string;
                entity: string;
                generation?: string;
                object: string;
                resource?: IObjectAccessControl;
            }) => { execute(callback: (data: IObjectAccessControl, original: string) => void):void; };
        };
        var objects: {
            /**
             * Concatenates a list of existing objects into a new object in the same bucket.
             * @params {string} destinationBucket Name of the bucket in which to store the new object.
             * @params {string} destinationObject Name of the new object.
             * @params {string} destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             */
            compose: (params: {
                destinationBucket: string;
                destinationObject: string;
                destinationPredefinedAcl?: string;
                ifGenerationMatch?: string;
                ifMetagenerationMatch?: string;
                resource?: IComposeRequest;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Copies an object to a specified location. Optionally overrides metadata.
             * @params {string} destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
             * @params {string} destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
             * @params {string} destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
             * @params {string} ifSourceGenerationMatch Makes the operation conditional on whether the source object's generation matches the given value.
             * @params {string} ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's generation does not match the given value.
             * @params {string} ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
             * @params {string} ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
             * @params {string} projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
             * @params {string} sourceBucket Name of the bucket in which to find the source object.
             * @params {string} sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
             * @params {string} sourceObject Name of the source object.
             */
            copy: (params: {
                destinationBucket: string;
                destinationObject: string;
                destinationPredefinedAcl?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                ifSourceGenerationMatch?: string;
                ifSourceGenerationNotMatch?: string;
                ifSourceMetagenerationMatch?: string;
                ifSourceMetagenerationNotMatch?: string;
                projection?: string;
                sourceBucket: string;
                sourceGeneration?: string;
                sourceObject: string;
                resource?: IObject;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
             * @params {string} bucket Name of the bucket in which the object resides.
             * @params {string} generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
             * @params {string} object Name of the object.
             */
            delete: (params: {
                bucket: string;
                generation?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                object: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves objects or their metadata.
             * @params {string} bucket Name of the bucket in which the object resides.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the object's generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
             * @params {string} object Name of the object.
             * @params {string} projection Set of properties to return. Defaults to noAcl.
             */
            get: (params: {
                bucket: string;
                generation?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                object: string;
                projection?: string;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Stores a new object and metadata.
             * @params {string} bucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
             * @params {string} contentEncoding If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
             * @params {string} name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this object.
             * @params {string} projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
             */
            insert: (params: {
                bucket: string;
                contentEncoding?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                name?: string;
                predefinedAcl?: string;
                projection?: string;
                resource?: IObject;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Retrieves a list of objects matching the criteria.
             * @params {string} bucket Name of the bucket in which to look for objects.
             * @params {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
             * @params {number} maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
             * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
             * @params {string} prefix Filter results to objects whose names begin with this prefix.
             * @params {string} projection Set of properties to return. Defaults to noAcl.
             * @params {boolean} versions If true, lists all versions of a file as distinct results.
             */
            list: (params: {
                bucket: string;
                delimiter?: string;
                maxResults?: number;
                pageToken?: string;
                prefix?: string;
                projection?: string;
                versions?: boolean;
            }) => { execute(callback: (data: IObjects, original: string) => void):void; };
            /**
             * Updates an object's metadata. This method supports patch semantics.
             * @params {string} bucket Name of the bucket in which the object resides.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
             * @params {string} object Name of the object.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this object.
             * @params {string} projection Set of properties to return. Defaults to full.
             */
            patch: (params: {
                bucket: string;
                generation?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                object: string;
                predefinedAcl?: string;
                projection?: string;
                resource?: IObject;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Updates an object's metadata.
             * @params {string} bucket Name of the bucket in which the object resides.
             * @params {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
             * @params {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
             * @params {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
             * @params {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
             * @params {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
             * @params {string} object Name of the object.
             * @params {string} predefinedAcl Apply a predefined set of access controls to this object.
             * @params {string} projection Set of properties to return. Defaults to full.
             */
            update: (params: {
                bucket: string;
                generation?: string;
                ifGenerationMatch?: string;
                ifGenerationNotMatch?: string;
                ifMetagenerationMatch?: string;
                ifMetagenerationNotMatch?: string;
                object: string;
                predefinedAcl?: string;
                projection?: string;
                resource?: IObject;
            }) => { execute(callback: (data: IObject, original: string) => void):void; };
            /**
             * Watch for changes on all objects in a bucket.
             * @params {string} bucket Name of the bucket in which to look for objects.
             * @params {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
             * @params {number} maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
             * @params {string} pageToken A previously-returned page token representing part of the larger set of results to view.
             * @params {string} prefix Filter results to objects whose names begin with this prefix.
             * @params {string} projection Set of properties to return. Defaults to noAcl.
             * @params {boolean} versions If true, lists all versions of a file as distinct results.
             */
            watchAll: (params: {
                bucket: string;
                delimiter?: string;
                maxResults?: number;
                pageToken?: string;
                prefix?: string;
                projection?: string;
                versions?: boolean;
                resource?: IChannel;
            }) => { execute(callback: (data: IChannel, original: string) => void):void; };
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
             * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
             */
            cors: {
                maxAgeSeconds: number; // int32
                method: string[];
                origin: string[];
                responseHeader: string[];
            }[];
            /**
             * Default access controls to apply to new objects when no ACL is provided.
             */
            defaultObjectAcl: IObjectAccessControl[];
            /**
             * HTTP 1.1 Entity tag for the bucket.
             */
            etag: string;
            /**
             * The ID of the bucket.
             */
            id: string;
            /**
             * The kind of item this is. For buckets, this is always storage#bucket.
             */
            kind: string;
            /**
             * The bucket's lifecycle configuration. See lifecycle management for more information.
             */
            lifecycle: {
                rule: {
                    action: {
                        type: string;
                    };
                    condition: {
                        age: number; // int32
                        createdBefore: string; // date
                        isLive: boolean;
                        numNewerVersions: number; // int32
                    };
                }[];
            };
            /**
             * The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.
             */
            location: string;
            /**
             * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
             */
            logging: {
                logBucket: string;
                logObjectPrefix: string;
            };
            /**
             * The metadata generation of this bucket.
             */
            metageneration: string; // int64
            /**
             * The name of the bucket.
             */
            name: string;
            /**
             * The owner of the bucket. This is always the project team's owner group.
             */
            owner: {
                entity: string;
                entityId: string;
            };
            /**
             * The project number of the project the bucket belongs to.
             */
            projectNumber: string; // uint64
            /**
             * The URI of this bucket.
             */
            selfLink: string;
            /**
             * The bucket's storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer's guide for the authoritative list.
             */
            storageClass: string;
            /**
             * Creation time of the bucket in RFC 3339 format.
             */
            timeCreated: string; // date-time
            /**
             * The bucket's versioning configuration.
             */
            versioning: {
                enabled: boolean;
            };
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
             * - project-team-projectId 
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
             * HTTP 1.1 Entity tag for the access-control entry.
             */
            etag: string;
            /**
             * The ID of the access-control entry.
             */
            id: string;
            /**
             * The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
             */
            kind: string;
            /**
             * The project team associated with the entity, if any.
             */
            projectTeam: {
                projectNumber: string;
                team: string;
            };
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
         * An notification channel used to watch for resource changes.
         */
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
            params: { [name:string]: string; };
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
        /**
         * A Compose request.
         */
        interface IComposeRequest {
            /**
             * Properties of the resulting object.
             */
            destination: IObject;
            /**
             * The kind of item this is.
             */
            kind: string;
            /**
             * The list of source objects that will be concatenated into a single object.
             */
            sourceObjects: {
                generation: string; // int64
                name: string;
                objectPreconditions: {
                    ifGenerationMatch: string; // int64
                };
            }[];
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
             * The name of the bucket containing this object.
             */
            bucket: string;
            /**
             * Cache-Control directive for the object data.
             */
            cacheControl: string;
            /**
             * Number of underlying components that make up this object. Components are accumulated by compose operations.
             */
            componentCount: number; // int32
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
             * Content-Type of the object data.
             */
            contentType: string;
            /**
             * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64.
             */
            crc32c: string;
            /**
             * HTTP 1.1 Entity tag for the object.
             */
            etag: string;
            /**
             * The content generation of this object. Used for object versioning.
             */
            generation: string; // int64
            /**
             * The ID of the object.
             */
            id: string;
            /**
             * The kind of item this is. For objects, this is always storage#object.
             */
            kind: string;
            /**
             * MD5 hash of the data; encoded using base64.
             */
            md5Hash: string;
            /**
             * Media download link.
             */
            mediaLink: string;
            /**
             * User-provided metadata, in key/value pairs.
             */
            metadata: { [name:string]: string; };
            /**
             * The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
             */
            metageneration: string; // int64
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
            /**
             * Content-Length of the data in bytes.
             */
            size: string; // uint64
            /**
             * Storage class of the object.
             */
            storageClass: string;
            /**
             * The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
             */
            timeDeleted: string; // date-time
            /**
             * The creation or modification time of the object in RFC 3339 format. For buckets with versioning enabled, changing an object's metadata does not change this property.
             */
            updated: string; // date-time
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
             * - project-team-projectId 
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
             * HTTP 1.1 Entity tag for the access-control entry.
             */
            etag: string;
            /**
             * The content generation of the object.
             */
            generation: string; // int64
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
             * The project team associated with the entity, if any.
             */
            projectTeam: {
                projectNumber: string;
                team: string;
            };
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
            items: any[];
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
}
