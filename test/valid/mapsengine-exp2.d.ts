// Type definitions for Google Google Maps Engine API exp2
// Project: https://developers.google.com/maps-engine/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * The Google Maps Engine API allows developers to store and query geospatial vector and raster data.
     */
    module mapsengine {
        var assets: {
            /**
             * Return metadata for a particular asset.
             * @params {string} id The ID of the asset.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IAsset, original: string) => void):void; };
            /**
             * Return all assets readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             * @params {string} type A comma separated list of asset types. Returned assets will have one of the types from the provided list. Supported values are 'map', 'layer', 'rasterCollection' and 'table'.
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                projectId?: string;
                role?: string;
                search?: string;
                tags?: string;
                type?: string;
            }) => { execute(callback: (data: IAssetsListResponse, original: string) => void):void; };
            parents: {
                /**
                 * Return all parent ids of the specified asset.
                 * @params {string} id The ID of the asset whose parents will be listed.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 */
                list: (params: {
                    id: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IParentsListResponse, original: string) => void):void; };
            };
            permissions: {
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
        };
        var layers: {
            /**
             * Cancel processing on a layer asset.
             * @params {string} id The ID of the layer.
             */
            cancelProcessing: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            /**
             * Create a layer asset.
             * @params {boolean} process Whether to queue the created layer for processing.
             */
            create: (params: {
                process?: boolean;
                resource?: ILayer;
            }) => { execute(callback: (data: ILayer, original: string) => void):void; };
            /**
             * Delete a layer.
             * @params {string} id The ID of the layer. Only the layer creator or project owner are permitted to delete. If the layer is published, or included in a map, the request will fail. Unpublish the layer, and remove it from all maps prior to deleting.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Return metadata for a particular layer.
             * @params {string} id The ID of the layer.
             * @params {string} version 
             */
            get: (params: {
                id: string;
                version?: string;
            }) => { execute(callback: (data: ILayer, original: string) => void):void; };
            /**
             * Return all layers readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} processingStatus 
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                processingStatus?: string;
                projectId?: string;
                role?: string;
                search?: string;
                tags?: string;
            }) => { execute(callback: (data: ILayersListResponse, original: string) => void):void; };
            /**
             * Mutate a layer asset.
             * @params {string} id The ID of the layer.
             */
            patch: (params: {
                id: string;
                resource?: ILayer;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Process a layer asset.
             * @params {string} id The ID of the layer.
             */
            process: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            /**
             * Publish a layer asset.
             * @params {boolean} force If set to true, the API will allow publication of the layer even if it's out of date. If not true, you'll need to reprocess any out-of-date layer before publishing.
             * @params {string} id The ID of the layer.
             */
            publish: (params: {
                force?: boolean;
                id: string;
            }) => { execute(callback: (data: IPublishResponse, original: string) => void):void; };
            /**
             * Unpublish a layer asset.
             * @params {string} id The ID of the layer.
             */
            unpublish: (params: {
                id: string;
            }) => { execute(callback: (data: IPublishResponse, original: string) => void):void; };
            parents: {
                /**
                 * Return all parent ids of the specified layer.
                 * @params {string} id The ID of the layer whose parents will be listed.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 */
                list: (params: {
                    id: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IParentsListResponse, original: string) => void):void; };
            };
            permissions: {
                /**
                 * Add or update permission entries to an already existing asset.
                 * 
                 * An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
                 * @params {string} id The ID of the asset to which permissions will be added.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IPermissionsBatchInsertRequest;
                }) => { execute(callback: (data: IPermissionsBatchInsertResponse, original: string) => void):void; };
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
        };
        var maps: {
            /**
             * Create a map asset.
             */
            create: (params: {
                resource?: IMap;
            }) => { execute(callback: (data: IMap, original: string) => void):void; };
            /**
             * Delete a map.
             * @params {string} id The ID of the map. Only the map creator or project owner are permitted to delete. If the map is published the request will fail. Unpublish the map prior to deleting.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Return metadata for a particular map.
             * @params {string} id The ID of the map.
             * @params {string} version 
             */
            get: (params: {
                id: string;
                version?: string;
            }) => { execute(callback: (data: IMap, original: string) => void):void; };
            /**
             * Return all maps readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} processingStatus 
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             * @params {string} version 
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                processingStatus?: string;
                projectId?: string;
                role?: string;
                search?: string;
                tags?: string;
                version?: string;
            }) => { execute(callback: (data: IMapsListResponse, original: string) => void):void; };
            /**
             * Mutate a map asset.
             * @params {string} id The ID of the map.
             */
            patch: (params: {
                id: string;
                resource?: IMap;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Publish a map asset.
             * @params {boolean} force If set to true, the API will allow publication of the map even if it's out of date. If false, the map must have a processingStatus of complete before publishing.
             * @params {string} id The ID of the map.
             */
            publish: (params: {
                force?: boolean;
                id: string;
            }) => { execute(callback: (data: IPublishResponse, original: string) => void):void; };
            /**
             * Unpublish a map asset.
             * @params {string} id The ID of the map.
             */
            unpublish: (params: {
                id: string;
            }) => { execute(callback: (data: IPublishResponse, original: string) => void):void; };
            permissions: {
                /**
                 * Add or update permission entries to an already existing asset.
                 * 
                 * An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
                 * @params {string} id The ID of the asset to which permissions will be added.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IPermissionsBatchInsertRequest;
                }) => { execute(callback: (data: IPermissionsBatchInsertResponse, original: string) => void):void; };
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
        };
        var permissionIds: {
            /**
             * Return permission ID given an email address.
             * @params {string} email The email address to be translated into permission ID.
             */
            getIdForEmail: (params: {
                email: string;
            }) => { execute(callback: (data: IPermissionsGetIdForEmailResponse, original: string) => void):void; };
        };
        var projects: {
            /**
             * Return all projects readable by the current user.
             */
            list: (params: {
            }) => { execute(callback: (data: IProjectsListResponse, original: string) => void):void; };
            icons: {
                /**
                 * Create an icon.
                 * @params {string} projectId The ID of the project.
                 */
                create: (params: {
                    projectId: string;
                    resource?: IIcon;
                }) => { execute(callback: (data: IIcon, original: string) => void):void; };
                /**
                 * Return metadata for a specific icon
                 * @params {string} id The ID of the icon.
                 * @params {string} projectId The ID of the project.
                 */
                get: (params: {
                    id: string;
                    projectId: string;
                }) => { execute(callback: (data: IIcon, original: string) => void):void; };
                /**
                 * Return all icons in the current project
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 * @params {string} projectId The ID of the project.
                 */
                list: (params: {
                    maxResults?: number;
                    pageToken?: string;
                    projectId: string;
                }) => { execute(callback: (data: IIconsListResponse, original: string) => void):void; };
            };
        };
        var rasterCollections: {
            /**
             * Cancel processing on a raster collection asset.
             * @params {string} id The ID of the raster collection.
             */
            cancelProcessing: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            /**
             * Create a raster collection asset.
             */
            create: (params: {
                resource?: IRasterCollection;
            }) => { execute(callback: (data: IRasterCollection, original: string) => void):void; };
            /**
             * Delete a raster collection.
             * @params {string} id The ID of the raster collection. Only the raster collection creator or project owner are permitted to delete. If the rastor collection is included in a layer, the request will fail. Remove the raster collection from all layers prior to deleting.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Return metadata for a particular raster collection.
             * @params {string} id The ID of the raster collection.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IRasterCollection, original: string) => void):void; };
            /**
             * Return all raster collections readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} processingStatus 
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                processingStatus?: string;
                projectId?: string;
                role?: string;
                search?: string;
                tags?: string;
            }) => { execute(callback: (data: IRasterCollectionsListResponse, original: string) => void):void; };
            /**
             * Mutate a raster collection asset.
             * @params {string} id The ID of the raster collection.
             */
            patch: (params: {
                id: string;
                resource?: IRasterCollection;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Process a raster collection asset.
             * @params {string} id The ID of the raster collection.
             */
            process: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            parents: {
                /**
                 * Return all parent ids of the specified raster collection.
                 * @params {string} id The ID of the raster collection whose parents will be listed.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 */
                list: (params: {
                    id: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IParentsListResponse, original: string) => void):void; };
            };
            permissions: {
                /**
                 * Add or update permission entries to an already existing asset.
                 * 
                 * An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
                 * @params {string} id The ID of the asset to which permissions will be added.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IPermissionsBatchInsertRequest;
                }) => { execute(callback: (data: IPermissionsBatchInsertResponse, original: string) => void):void; };
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
            rasters: {
                /**
                 * Remove rasters from an existing raster collection.
                 * 
                 * Up to 50 rasters can be included in a single batchDelete request. Each batchDelete request is atomic.
                 * @params {string} id The ID of the raster collection to which these rasters belong.
                 */
                batchDelete: (params: {
                    id: string;
                    resource?: IRasterCollectionsRasterBatchDeleteRequest;
                }) => { execute(callback: (data: IRasterCollectionsRastersBatchDeleteResponse, original: string) => void):void; };
                /**
                 * Add rasters to an existing raster collection. Rasters must be successfully processed in order to be added to a raster collection.
                 * 
                 * Up to 50 rasters can be included in a single batchInsert request. Each batchInsert request is atomic.
                 * @params {string} id The ID of the raster collection to which these rasters belong.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IRasterCollectionsRastersBatchInsertRequest;
                }) => { execute(callback: (data: IRasterCollectionsRastersBatchInsertResponse, original: string) => void):void; };
                /**
                 * Return all rasters within a raster collection.
                 * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
                 * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
                 * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
                 * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
                 * @params {string} id The ID of the raster collection to which these rasters belong.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
                 * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
                 * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
                 * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
                 * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
                 */
                list: (params: {
                    bbox?: string;
                    createdAfter?: string;
                    createdBefore?: string;
                    creatorEmail?: string;
                    id: string;
                    maxResults?: number;
                    modifiedAfter?: string;
                    modifiedBefore?: string;
                    pageToken?: string;
                    role?: string;
                    search?: string;
                    tags?: string;
                }) => { execute(callback: (data: IRasterCollectionsRastersListResponse, original: string) => void):void; };
            };
        };
        var rasters: {
            /**
             * Delete a raster.
             * @params {string} id The ID of the raster. Only the raster creator or project owner are permitted to delete. If the raster is included in a layer or mosaic, the request will fail. Remove it from all parents prior to deleting.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Return metadata for a single raster.
             * @params {string} id The ID of the raster.
             */
            get: (params: {
                id: string;
            }) => { execute(callback: (data: IRaster, original: string) => void):void; };
            /**
             * Return all rasters readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} processingStatus 
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                processingStatus?: string;
                projectId: string;
                role?: string;
                search?: string;
                tags?: string;
            }) => { execute(callback: (data: IRastersListResponse, original: string) => void):void; };
            /**
             * Mutate a raster asset.
             * @params {string} id The ID of the raster.
             */
            patch: (params: {
                id: string;
                resource?: IRaster;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Process a raster asset.
             * @params {string} id The ID of the raster.
             */
            process: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            /**
             * Create a skeleton raster asset for upload.
             */
            upload: (params: {
                resource?: IRaster;
            }) => { execute(callback: (data: IRaster, original: string) => void):void; };
            files: {
                /**
                 * Upload a file to a raster asset.
                 * @params {string} filename The file name of this uploaded file.
                 * @params {string} id The ID of the raster asset.
                 */
                insert: (params: {
                    filename: string;
                    id: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            };
            parents: {
                /**
                 * Return all parent ids of the specified rasters.
                 * @params {string} id The ID of the rasters whose parents will be listed.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 */
                list: (params: {
                    id: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IParentsListResponse, original: string) => void):void; };
            };
            permissions: {
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
        };
        var tables: {
            /**
             * Create a table asset.
             */
            create: (params: {
                resource?: ITable;
            }) => { execute(callback: (data: ITable, original: string) => void):void; };
            /**
             * Delete a table.
             * @params {string} id The ID of the table. Only the table creator or project owner are permitted to delete. If the table is included in a layer, the request will fail. Remove it from all layers prior to deleting.
             */
            delete: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Return metadata for a particular table, including the schema.
             * @params {string} id The ID of the table.
             * @params {string} version 
             */
            get: (params: {
                id: string;
                version?: string;
            }) => { execute(callback: (data: ITable, original: string) => void):void; };
            /**
             * Return all tables readable by the current user.
             * @params {string} bbox A bounding box, expressed as "west,south,east,north". If set, only assets which intersect this bounding box will be returned.
             * @params {string} createdAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or after this time.
             * @params {string} createdBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been created at or before this time.
             * @params {string} creatorEmail An email address representing a user. Returned assets that have been created by the user associated with the provided email address.
             * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 100.
             * @params {string} modifiedAfter An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or after this time.
             * @params {string} modifiedBefore An RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z). Returned assets will have been modified at or before this time.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
             * @params {string} processingStatus 
             * @params {string} projectId The ID of a Maps Engine project, used to filter the response. To list all available projects with their IDs, send a Projects: list request. You can also find your project ID as the value of the DashboardPlace:cid URL parameter when signed in to mapsengine.google.com.
             * @params {string} role The role parameter indicates that the response should only contain assets where the current user has the specified level of access.
             * @params {string} search An unstructured search string used to filter the set of results based on asset metadata.
             * @params {string} tags A comma separated list of tags. Returned assets will contain all the tags from the list.
             */
            list: (params: {
                bbox?: string;
                createdAfter?: string;
                createdBefore?: string;
                creatorEmail?: string;
                maxResults?: number;
                modifiedAfter?: string;
                modifiedBefore?: string;
                pageToken?: string;
                processingStatus?: string;
                projectId?: string;
                role?: string;
                search?: string;
                tags?: string;
            }) => { execute(callback: (data: ITablesListResponse, original: string) => void):void; };
            /**
             * Mutate a table asset.
             * @params {string} id The ID of the table.
             */
            patch: (params: {
                id: string;
                resource?: ITable;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Process a table asset.
             * @params {string} id The ID of the table.
             */
            process: (params: {
                id: string;
            }) => { execute(callback: (data: IProcessResponse, original: string) => void):void; };
            /**
             * Create a placeholder table asset to which table files can be uploaded.
             * Once the placeholder has been created, files are uploaded to the https://www.googleapis.com/upload/mapsengine/v1/tables/table_id/files endpoint.
             * See Table Upload in the Developer's Guide or Table.files: insert in the reference documentation for more information.
             */
            upload: (params: {
                resource?: ITable;
            }) => { execute(callback: (data: ITable, original: string) => void):void; };
            features: {
                /**
                 * Delete all features matching the given IDs.
                 * @params {string} id The ID of the table that contains the features to be deleted.
                 */
                batchDelete: (params: {
                    id: string;
                    resource?: IFeaturesBatchDeleteRequest;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Append the supplied features.
                 * @params {string} id The ID of the table to append the features to.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IFeaturesBatchInsertRequest;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Patch the supplied features.
                 * @params {string} id The ID of the table containing the features to be patched.
                 */
                batchPatch: (params: {
                    id: string;
                    resource?: IFeaturesBatchPatchRequest;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Return a single feature, given its ID.
                 * @params {string} id The ID of the feature to get.
                 * @params {string} select A SQL-like projection clause used to specify returned properties. If this parameter is not included, all properties are returned.
                 * @params {string} tableId The ID of the table.
                 * @params {string} version The table version to access. See Accessing Public Data for information.
                 */
                get: (params: {
                    id: string;
                    select?: string;
                    tableId: string;
                    version?: string;
                }) => { execute(callback: (data: IFeature, original: string) => void):void; };
                /**
                 * Return all features readable by the current user.
                 * @params {string} id The ID of the table to which these features belong.
                 * @params {string} include A comma separated list of optional data to include. Optional data available: schema.
                 * @params {string} intersects A geometry literal that specifies the spatial restriction of the query.
                 * @params {number} limit The total number of features to return from the query, irrespective of the number of pages.
                 * @params {number} maxResults The maximum number of items to include in the response, used for paging.
                 * @params {string} orderBy An SQL-like order by clause used to sort results. If this parameter is not included, the order of features is undefined.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 * @params {string} select A SQL-like projection clause used to specify returned properties. If this parameter is not included, all properties are returned.
                 * @params {string} version The table version to access. See Accessing Public Data for information.
                 * @params {string} where An SQL-like predicate used to filter results.
                 */
                list: (params: {
                    id: string;
                    include?: string;
                    intersects?: string;
                    limit?: number;
                    maxResults?: number;
                    orderBy?: string;
                    pageToken?: string;
                    select?: string;
                    version?: string;
                    where?: string;
                }) => { execute(callback: (data: IFeaturesListResponse, original: string) => void):void; };
            };
            files: {
                /**
                 * Upload a file to a placeholder table asset. See Table Upload in the Developer's Guide for more information.
                 * Supported file types are listed in the Supported data formats and limits article of the Google Maps Engine help center.
                 * @params {string} filename The file name of this uploaded file.
                 * @params {string} id The ID of the table asset.
                 */
                insert: (params: {
                    filename: string;
                    id: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            };
            parents: {
                /**
                 * Return all parent ids of the specified table.
                 * @params {string} id The ID of the table whose parents will be listed.
                 * @params {number} maxResults The maximum number of items to include in a single response page. The maximum supported value is 50.
                 * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
                 */
                list: (params: {
                    id: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => { execute(callback: (data: IParentsListResponse, original: string) => void):void; };
            };
            permissions: {
                /**
                 * Add or update permission entries to an already existing asset.
                 * 
                 * An asset can hold up to 20 different permission entries. Each batchInsert request is atomic.
                 * @params {string} id The ID of the asset to which permissions will be added.
                 */
                batchInsert: (params: {
                    id: string;
                    resource?: IPermissionsBatchInsertRequest;
                }) => { execute(callback: (data: IPermissionsBatchInsertResponse, original: string) => void):void; };
                /**
                 * Return all of the permissions for the specified asset.
                 * @params {string} id The ID of the asset whose permissions will be listed.
                 */
                list: (params: {
                    id: string;
                }) => { execute(callback: (data: IPermissionsListResponse, original: string) => void):void; };
            };
        };
        /**
         * Acquisition time represents acquired time of a raster.
         */
        interface IAcquisitionTime {
            /**
             * The end time if acquisition time is a range. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
             */
            end: string; // date-time
            /**
             * The precision of acquisition time.
             */
            precision: string;
            /**
             * The acquisition time, or start time if acquisition time is a range. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
             */
            start: string; // date-time
        }
        /**
         * An asset is any Google Maps Engine resource that has a globally unique ID. Assets include maps, layers, vector tables, raster collections, and rasters. Projects and features are not considered assets.
         * 
         * More detailed information about an asset can be obtained by querying the asset's particular endpoint.
         */
        interface IAsset {
            /**
             * A rectangular bounding box which contains all of the data in this asset. The numbers represent latitude and longitude in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this asset. The value is an RFC 3339-formatted date-time value (for example, 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * The asset's description.
             */
            description: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * The asset's globally unique ID.
             */
            id: string;
            /**
             * The last modified time of this asset. The value is an RFC 3339-formatted date-time value (for example, 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The asset's name.
             */
            name: string;
            /**
             * The ID of the project to which the asset belongs.
             */
            projectId: string;
            /**
             * The URL to query to retrieve the asset's complete object. The assets endpoint only returns high-level information about a resource.
             */
            resource: string;
            /**
             * An array of text strings, with each string representing a tag. More information about tags can be found in the Tagging data article of the Maps Engine help center.
             */
            tags: string[];
            /**
             * The type of asset.
             */
            type: string;
            /**
             * If true, WRITERs of the asset are able to edit the asset permissions.
             */
            writersCanEditPermissions: boolean;
        }
        /**
         * The response returned by a call to resources.List.
         */
        interface IAssetsListResponse {
            /**
             * Assets returned.
             */
            assets: IAsset[];
            /**
             * Next page token.
             */
            nextPageToken: string; // byte
        }
        /**
         * Border in line style. Both color and width are required.
         */
        interface IBorder {
            /**
             * Color of the border.
             */
            color: string;
            /**
             * Opacity of the border.
             */
            opacity: number; // double
            /**
             * Width of the border, in pixels.
             */
            width: number; // double
        }
        /**
         * Basic color used in styling.
         */
        interface IColor {
            /**
             * The CSS style color, can be in format of "red" or "#7733EE".
             */
            color: string;
            /**
             * Opacity ranges from 0 to 1, inclusive. If not provided, default to 1.
             */
            opacity: number; // double
        }
        interface IDatasource {
            /**
             * The ID of a datasource.
             */
            id: string;
        }
        interface IDatasources extends Array<IDatasource> {
        }
        /**
         * A display rule of the vector style.
         */
        interface IDisplayRule {
            /**
             * This display rule will only be applied to features that match all of the filters here. If filters is empty, then the rule applies to all features.
             */
            filters: IFilter[];
            /**
             * Style applied to lines. Required for LineString Geometry.
             */
            lineOptions: ILineStyle;
            /**
             * Display rule name. Name is not unique and cannot be used for identification purpose.
             */
            name: string;
            /**
             * Style applied to points. Required for Point Geometry.
             */
            pointOptions: IPointStyle;
            /**
             * Style applied to polygons. Required for Polygon Geometry.
             */
            polygonOptions: IPolygonStyle;
            /**
             * The zoom levels that this display rule apply.
             */
            zoomLevels: IZoomLevels;
        }
        /**
         * A feature within a table.
         */
        interface IFeature {
            /**
             * The geometry member of this Feature.
             */
            geometry: IGeoJsonGeometry;
            /**
             * Key/value pairs of this Feature.
             */
            properties: IGeoJsonProperties;
            /**
             * Identifies this object as a feature.
             */
            type: string;
        }
        /**
         * A feature info contains information about individual feature.
         */
        interface IFeatureInfo {
            /**
             * HTML template of the info window. If not provided, a default template with all attributes will be generated.
             */
            content: string;
        }
        /**
         * The request sent to features.BatchDelete.
         */
        interface IFeaturesBatchDeleteRequest {
            gx_ids: string[];
            primaryKeys: string[];
        }
        /**
         * The request sent to features.Insert.
         */
        interface IFeaturesBatchInsertRequest {
            /**
             * If true, the server will normalize feature geometries. It is assumed that the South Pole is exterior to any polygons given. See here for a list of normalizations. If false, the all feature geometries must be given already normalized. The points in all LinearRings must be listed in counter-clockwise order, and LinearRings may not intersect.
             */
            allowNormalization: boolean;
            features: IFeature[];
        }
        /**
         * The request sent to features.BatchPatch.
         */
        interface IFeaturesBatchPatchRequest {
            /**
             * If true, the server will normalize feature geometries. It is assumed that the South Pole is exterior to any polygons given. See here for a list of normalizations. If false, the all feature geometries must be given already normalized. The points in all LinearRings must be listed in counter-clockwise order, and LinearRings may not intersect.
             */
            allowNormalization: boolean;
            features: IFeature[];
        }
        /**
         * The response returned by a call to features.List.
         */
        interface IFeaturesListResponse {
            /**
             * An indicator of the maximum rate at which queries may be made, if all queries were as expensive as this query.
             */
            allowedQueriesPerSecond: number; // double
            /**
             * Resources returned.
             */
            features: IFeature[];
            /**
             * Next page token.
             */
            nextPageToken: string;
            /**
             * The feature schema.
             */
            schema: ISchema;
            type: string;
        }
        /**
         * A single File, which is a component of an Asset.
         */
        interface IFile {
            /**
             * The name of the file.
             */
            filename: string;
            /**
             * The size of the file in bytes.
             */
            size: string; // int64
            /**
             * The upload status of the file.
             */
            uploadStatus: string;
        }
        /**
         * Conditions for filtering features.
         */
        interface IFilter {
            /**
             * The column name to filter on.
             */
            column: string;
            /**
             * Operation used to evaluate the filter.
             */
            operator: string;
            /**
             * Value to be evaluated against attribute.
             */
            value: any;
        }
        interface IGeoJsonGeometry {
        }
        /**
         * A heterogenous collection of GeoJsonGeometry objects.
         */
        interface IGeoJsonGeometryCollection {
            /**
             * An array of geometry objects. There must be at least 2 different types of geometries in the array.
             */
            geometries: IGeoJsonGeometry[];
            /**
             * Identifies this object as a GeoJsonGeometryCollection.
             */
            type: string;
        }
        interface IGeoJsonLineString {
            /**
             * An array of two or more positions, representing a line.
             */
            coordinates: IGeoJsonPosition[];
            /**
             * Identifies this object as a GeoJsonLineString.
             */
            type: string;
        }
        /**
         * Multi Line String
         */
        interface IGeoJsonMultiLineString {
            /**
             * An array of at least two GeoJsonLineString coordinate arrays.
             */
            coordinates: IGeoJsonPosition[][];
            /**
             * Identifies this object as a GeoJsonMultiLineString.
             */
            type: string;
        }
        interface IGeoJsonMultiPoint {
            /**
             * An array of at least two GeoJsonPoint coordinate arrays.
             */
            coordinates: IGeoJsonPosition[];
            /**
             * Identifies this object as a GeoJsonMultiPoint.
             */
            type: string;
        }
        interface IGeoJsonMultiPolygon {
            /**
             * An array of at least two GeoJsonPolygon coordinate arrays.
             */
            coordinates: IGeoJsonPosition[][][];
            /**
             * Identifies this object as a GeoJsonMultiPolygon.
             */
            type: string;
        }
        interface IGeoJsonPoint {
            /**
             * A single GeoJsonPosition, specifying the location of the point.
             */
            coordinates: IGeoJsonPosition;
            /**
             * Identifies this object as a GeoJsonPoint.
             */
            type: string;
        }
        interface IGeoJsonPolygon {
            /**
             * An array of LinearRings. A LinearRing is a GeoJsonLineString which is closed (that is, the first and last GeoJsonPositions are equal), and which contains at least four GeoJsonPositions. For polygons with multiple rings, the first LinearRing is the exterior ring, and any subsequent rings are interior rings (that is, holes).
             */
            coordinates: IGeoJsonPosition[][];
            /**
             * Identifies this object as a GeoJsonPolygon.
             */
            type: string;
        }
        /**
         * A position represents a geographical position as an array containing a longitude and a latitude, and optionally an altitude, in that order. All Geometry objects make use of positions to represent geometries as nested arrays. The structure of the array is governed by the type of the geometry.
         */
        interface IGeoJsonPosition extends Array<number /* double */ > {
        }
        /**
         * The properties associated with a feature.
         */
        interface IGeoJsonProperties {
        }
        /**
         * An icon is a user-uploaded image that can be used to style point geometries.
         */
        interface IIcon {
            /**
             * The description of this Icon, supplied by the author.
             */
            description: string;
            /**
             * An ID used to refer to this Icon.
             */
            id: string;
            /**
             * The name of this Icon, supplied by the author.
             */
            name: string;
        }
        /**
         * Style for icon, this is part of point style.
         */
        interface IIconStyle {
            /**
             * Custom icon id.
             */
            id: string;
            /**
             * Stock icon name. To use a stock icon, prefix it with 'gx_'. See Stock icon names for valid icon names. For example, to specify small_red, set name to 'gx_small_red'.
             */
            name: string;
            /**
             * A scalable shape.
             */
            scaledShape: IScaledShape;
            /**
             * The function used to scale shapes. Required when a scaledShape is specified.
             */
            scalingFunction: IScalingFunction;
        }
        /**
         * The response returned by a call to icons.List.
         */
        interface IIconsListResponse {
            /**
             * Resources returned.
             */
            icons: IIcon[];
            /**
             * Next page token.
             */
            nextPageToken: string;
        }
        /**
         * Text label style.
         */
        interface ILabelStyle {
            /**
             * Color of the text. If not provided, default to black.
             */
            color: string;
            /**
             * The column value of the feature to be displayed.
             */
            column: string;
            /**
             * Font style of the label, defaults to 'normal'.
             */
            fontStyle: string;
            /**
             * Font weight of the label, defaults to 'normal'.
             */
            fontWeight: string;
            /**
             * Opacity of the text.
             */
            opacity: number; // double
            /**
             * Outline color of the text.
             */
            outline: IColor;
            /**
             * Font size of the label, in pixels. 8 <= size <= 15. If not provided, a default size will be provided.
             */
            size: number; // double
        }
        /**
         * A rectangular geographic bounds.
         */
        interface ILatLngBox extends Array<number /* double */ > {
        }
        /**
         * A Layer combines multiple datasources, with styling information, for presentation on a map.
         */
        interface ILayer {
            /**
             * A rectangular bounding box which contains all of the data in this Layer. The numbers represent latitude and longitude in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this layer. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * Deprecated: The type of the datasources used to build this Layer. Note: This has been replaced by layerType, but is still available for now to maintain backward compatibility.
             */
            datasourceType: string;
            /**
             * An array of datasources used to build this layer. If layerType is "image", or layerType is not specified and datasourceType is "image", then each element in this array is a reference to an Image or RasterCollection. If layerType is "vector", or layerType is not specified and datasourceType is "table" then each element in this array is a reference to a Vector Table. Note: Datasources are returned in response to a get request but not a list request. After requesting a list of layers, you'll need to send a get request to retrieve the datasources for each layer.
             */
            datasources: IDatasources;
            /**
             * The description of this Layer, supplied by the author.
             */
            description: string;
            /**
             * Deprecated: The name of an access list of the Map Editor type. The user on whose behalf the request is being sent must be an editor on that access list. Note: Google Maps Engine no longer uses access lists. For backward compatibility, the API still accepts access lists for projects that are already using access lists. If you created a GME account/project after July 14th, 2014, you will not be able to send API requests that include access lists. The API does not yet support the new permissions model. When you create a map via the API without specifying permissions, the account that created the map is the owner and has effective administrator access. Users can then use the Maps Engine user interface to adjust the permissions. This is a temporary workaround until the API supports the new permissions model. Read Add new users and groups in the Google Maps Engine help center for more information. Note: This is an input field only. It is not returned in response to a list or get request.
             */
            draftAccessList: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * A globally unique ID, used to refer to this Layer.
             */
            id: string;
            /**
             * The last modified time of this layer. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The type of the datasources used to build this Layer. This should be used instead of datasourceType. At least one of layerType and datasourceType and must be specified, but layerType takes precedence.
             */
            layerType: string;
            /**
             * The name of this Layer, supplied by the author.
             */
            name: string;
            /**
             * The processing status of this layer.
             */
            processingStatus: string;
            /**
             * The ID of the project that this Layer is in.
             */
            projectId: string;
            /**
             * Deprecated: The access list to whom view permissions are granted. The value must be the name of a Maps Engine access list of the Map Viewer type, and the user must be a viewer on that list. Read Share data, layers, and maps in the Google Maps Engine help center for more information. This is an input field only. It is not returned in response to a list or get request.
             */
            publishedAccessList: string;
            /**
             * The publishing status of this layer.
             */
            publishingStatus: string;
            /**
             * The styling information for a vector layer. Note: Style information is returned in response to a get request but not a list request. After requesting a list of layers, you'll need to send a get request to retrieve the VectorStyles for each layer.
             */
            style: IVectorStyle;
            /**
             * Tags of this Layer.
             */
            tags: ITags;
            /**
             * If true, WRITERs of the asset are able to edit the asset permissions.
             */
            writersCanEditPermissions: boolean;
        }
        /**
         * The response returned by a call to layers.List. Note: The list response does not include all the fields available in a layer. Refer to the layer resource description for details of the fields that are not included. You'll need to send a get request to retrieve the additional fields for each layer.
         */
        interface ILayersListResponse {
            /**
             * Resources returned.
             */
            layers: ILayer[];
            /**
             * Next page token.
             */
            nextPageToken: string; // byte
        }
        /**
         * Style for lines.
         */
        interface ILineStyle {
            /**
             * Border of the line. 0 < border.width <= 5.
             */
            border: IBorder;
            /**
             * Dash defines the pattern of the line, the values are pixel lengths of alternating dash and gap. If dash is not provided, then it means a solid line. Dash can contain up to 10 values and must contain even number of values.
             */
            dash: number /* double */ [];
            /**
             * Label style for the line.
             */
            label: ILabelStyle;
            /**
             * Stroke of the line.
             */
            stroke: {
                color: string;
                opacity: number; // double
                width: number; // double
            };
        }
        /**
         * A Map is a collection of Layers, optionally contained within folders.
         */
        interface IMap {
            /**
             * A rectangular bounding box which contains all of the data in this Map. The numbers represent latitude and longitude in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The contents of this Map.
             */
            contents: IMapContents;
            /**
             * The creation time of this map. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * An array of four numbers (west, south, east, north) which defines the rectangular bounding box of the default viewport. The numbers represent latitude and longitude in decimal degrees.
             */
            defaultViewport: ILatLngBox;
            /**
             * The description of this Map, supplied by the author.
             */
            description: string;
            /**
             * Deprecated: The name of an access list of the Map Editor type. The user on whose behalf the request is being sent must be an editor on that access list. Note: Google Maps Engine no longer uses access lists. For backward compatibility, the API still accepts access lists for projects that are already using access lists. If you created a GME account/project after July 14th, 2014, you will not be able to send API requests that include access lists. The API does not yet support the new permissions model. When you create a map via the API without specifying permissions, the account that created the map is the owner and has effective administrator access. Users can then use the Maps Engine user interface to adjust the permissions. This is a temporary workaround until the API supports the new permissions model. Read Add new users and groups in the Google Maps Engine help center for more information. Note: This is an input field only. It is not returned in response to a list or get request.
             */
            draftAccessList: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * A globally unique ID, used to refer to this Map.
             */
            id: string;
            /**
             * The last modified time of this map. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The name of this Map, supplied by the author.
             */
            name: string;
            /**
             * The processing status of this map. Map processing is automatically started once a map becomes ready for processing.
             */
            processingStatus: string;
            /**
             * The ID of the project that this Map is in.
             */
            projectId: string;
            /**
             * Deprecated: The access list to whom view permissions are granted. The value must be the name of a Maps Engine access list of the Map Viewer type, and the user must be a viewer on that list. Read Share data, layers, and maps in the Google Maps Engine help center for more information. This is an input field only. It is not returned in response to a list or get request.
             */
            publishedAccessList: string;
            /**
             * The publishing status of this map.
             */
            publishingStatus: string;
            /**
             * Tags of this Map.
             */
            tags: ITags;
            /**
             * Deprecated: An array containing the available versions of this Map. Currently may only contain "published". The publishingStatus field should be used instead.
             */
            versions: string[];
            /**
             * If true, WRITERs of the asset are able to edit the asset permissions.
             */
            writersCanEditPermissions: boolean;
        }
        interface IMapContents extends Array<IMapItem> {
        }
        interface IMapFolder {
            contents: IMapItem[];
            /**
             * An array of four numbers (west, south, east, north) which defines the rectangular bounding box of the default viewport. The numbers represent latitude and longitude in decimal degrees.
             */
            defaultViewport: number /* double */ [];
            /**
             * The expandability setting of this MapFolder. If true, the folder can be expanded.
             */
            expandable: boolean;
            /**
             * A user defined alias for this MapFolder, specific to this Map.
             */
            key: string;
            /**
             * The name of this MapFolder.
             */
            name: string;
            /**
             * Identifies this object as a MapFolder.
             */
            type: string;
            /**
             * The visibility setting of this MapFolder. One of "defaultOn" or "defaultOff".
             */
            visibility: string;
        }
        interface IMapItem {
        }
        interface IMapKmlLink {
            /**
             * An array of four numbers (west, south, east, north) which defines the rectangular bounding box of the default viewport. The numbers represent latitude and longitude in decimal degrees.
             */
            defaultViewport: number /* double */ [];
            /**
             * The URL to the KML file represented by this MapKmlLink.
             */
            kmlUrl: string;
            /**
             * The name of this MapKmlLink.
             */
            name: string;
            /**
             * Identifies this object as a MapKmlLink.
             */
            type: string;
            /**
             * The visibility setting of this MapKmlLink. One of "defaultOn" or "defaultOff".
             */
            visibility: string;
        }
        interface IMapLayer {
            /**
             * An array of four numbers (west, south, east, north) which defines the rectangular bounding box of the default viewport. The numbers represent latitude and longitude in decimal degrees.
             */
            defaultViewport: number /* double */ [];
            /**
             * The ID of this MapLayer. This ID can be used to request more details about the layer.
             */
            id: string;
            /**
             * A user defined alias for this MapLayer, specific to this Map.
             */
            key: string;
            /**
             * The name of this MapLayer.
             */
            name: string;
            /**
             * Identifies this object as a MapLayer.
             */
            type: string;
            /**
             * The visibility setting of this MapLayer. One of "defaultOn" or "defaultOff".
             */
            visibility: string;
        }
        /**
         * The response returned by a call to maps.List.
         */
        interface IMapsListResponse {
            /**
             * Resources returned.
             */
            maps: IMap[];
            /**
             * Next page token.
             */
            nextPageToken: string; // byte
        }
        /**
         * A list of the parents of an asset.
         */
        interface IParent {
            /**
             * The ID of this parent.
             */
            id: string;
        }
        /**
         * The response returned by a call to parents.List.
         */
        interface IParentsListResponse {
            /**
             * Next page token.
             */
            nextPageToken: string;
            /**
             * The parent assets.
             */
            parents: IParent[];
        }
        interface IPermission {
            /**
             * True if asset is listed and is searchable by the public.
             */
            discoverable: boolean;
            /**
             * The email address of the user this permission refers to.
             */
            emailAddress: string;
            /**
             * The ID of the permission. When making a mapsengine.permissions.batchInsert request, the id or emailAddress fields must be specified. If both id and emailAddress are provided they must be consistent.
             */
            id: string;
            /**
             * The primary role for this user.
             */
            role: string;
            /**
             * The account type. Allowed values are:
             */
            type: string;
        }
        /**
         * The request sent to mapsengine.permissions.batchInsert.
         */
        interface IPermissionsBatchInsertRequest {
            /**
             * The permissions to be added.
             */
            permissions: IPermission[];
        }
        /**
         * The response returned by a call to mapsengine.permissions.batchInsert.
         */
        interface IPermissionsBatchInsertResponse {
        }
        interface IPermissionsGetIdForEmailResponse {
            /**
             * The permission ID.
             */
            id: string;
        }
        interface IPermissionsListResponse {
            /**
             * The set of permissions associated with this asset.
             */
            permissions: IPermission[];
        }
        /**
         * Style for points.
         */
        interface IPointStyle {
            /**
             * Icon for the point; if it isn't null, exactly one of 'name', 'id' or 'scaledShape' must be set.
             */
            icon: IIconStyle;
            /**
             * Label style for the point.
             */
            label: ILabelStyle;
        }
        /**
         * Style for polygons.
         */
        interface IPolygonStyle {
            /**
             * Fill color of the polygon. If not provided, the polygon will be transparent and not visible if there is no border.
             */
            fill: IColor;
            /**
             * Border of the polygon. 0 < border.width <= 10.
             */
            stroke: IBorder;
        }
        /**
         * The response returned by a call to any asset's Process method.
         */
        interface IProcessResponse {
        }
        /**
         * A project groups a collection of resources.
         */
        interface IProject {
            /**
             * An ID used to refer to this project.
             */
            id: string;
            /**
             * A user provided name for this project.
             */
            name: string;
        }
        /**
         * The response returned by a call to projects.List.
         */
        interface IProjectsListResponse {
            /**
             * Projects returned.
             */
            projects: IProject[];
        }
        /**
         * The response returned by a call to any asset's Publish method.
         */
        interface IPublishResponse {
        }
        /**
         * A geo-referenced raster.
         */
        interface IRaster {
            /**
             * The acquisition time of this Raster.
             */
            acquisitionTime: IAcquisitionTime;
            /**
             * The name of the attribution to be used for this Raster.
             */
            attribution: string;
            /**
             * A rectangular bounding box which contains all of the data in this Raster. The numbers represent latitudes and longitudes in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this raster. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * The description of this Raster, supplied by the author.
             */
            description: string;
            /**
             * Deprecated: The name of an access list of the Map Editor type. The user on whose behalf the request is being sent must be an editor on that access list. Note: Google Maps Engine no longer uses access lists. For backward compatibility, the API still accepts access lists for projects that are already using access lists. If you created a GME account/project after July 14th, 2014, you will not be able to send API requests that include access lists. The API does not yet support the new permissions model. When you create a map via the API without specifying permissions, the account that created the map is the owner and has effective administrator access. Users can then use the Maps Engine user interface to adjust the permissions. This is a temporary workaround until the API supports the new permissions model. Read Add new users and groups in the Google Maps Engine help center for more information. Note: This is an input field only. It is not returned in response to a list or get request.
             */
            draftAccessList: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * The files associated with this Raster.
             */
            files: IFile[];
            /**
             * A globally unique ID, used to refer to this Raster.
             */
            id: string;
            /**
             * The last modified time of this raster. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The mask processing type of this Raster. This is an input field only. It is not returned in response to a get request.
             */
            maskType: string;
            /**
             * The name of this Raster, supplied by the author.
             */
            name: string;
            /**
             * The processing status of this Raster.
             */
            processingStatus: string;
            /**
             * The ID of the project that this Raster is in.
             */
            projectId: string;
            /**
             * The type of this Raster. Always "image" today.
             */
            rasterType: string;
            /**
             * Tags of this Raster.
             */
            tags: ITags;
        }
        /**
         * A raster collection groups multiple Raster resources for inclusion in a Layer.
         */
        interface IRasterCollection {
            /**
             * The name of the attribution to be used for this RasterCollection. Note: Attribution is returned in response to a get request but not a list request. After requesting a list of raster collections, you'll need to send a get request to retrieve the attribution for each raster collection.
             */
            attribution: string;
            /**
             * A rectangular bounding box which contains all of the data in this RasterCollection. The numbers represent latitude and longitude in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this RasterCollection. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * The description of this RasterCollection, supplied by the author.
             */
            description: string;
            /**
             * Deprecated: The name of an access list of the Map Editor type. The user on whose behalf the request is being sent must be an editor on that access list. Note: Google Maps Engine no longer uses access lists. For backward compatibility, the API still accepts access lists for projects that are already using access lists. If you created a GME account/project after July 14th, 2014, you will not be able to send API requests that include access lists. The API does not yet support the new permissions model. When you create a map via the API without specifying permissions, the account that created the map is the owner and has effective administrator access. Users can then use the Maps Engine user interface to adjust the permissions. This is a temporary workaround until the API supports the new permissions model. Read Add new users and groups in the Google Maps Engine help center for more information. Note: This is an input field only. It is not returned in response to a list or get request.
             */
            draftAccessList: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * A globally unique ID, used to refer to this RasterCollection.
             */
            id: string;
            /**
             * The last modified time of this RasterCollection. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * True if this RasterCollection is a mosaic.
             */
            mosaic: boolean;
            /**
             * The name of this RasterCollection, supplied by the author.
             */
            name: string;
            /**
             * The processing status of this RasterCollection.
             */
            processingStatus: string;
            /**
             * The ID of the project that this RasterCollection is in.
             */
            projectId: string;
            /**
             * The type of rasters contained within this RasterCollection.
             */
            rasterType: string;
            /**
             * Tags of this RasterCollection.
             */
            tags: ITags;
            /**
             * If true, WRITERs of the asset are able to edit the asset permissions.
             */
            writersCanEditPermissions: boolean;
        }
        /**
         * The response returned by a call to raster_collections.List. Note: The list response does not include all the fields available in a raster collection. Refer to the RasterCollection resource description for details of the fields that are not included. You'll need to send a get request to retrieve the additional fields for each raster collection.
         */
        interface IRasterCollectionsListResponse {
            /**
             * Next page token.
             */
            nextPageToken: string; // byte
            /**
             * Resources returned.
             */
            rasterCollections: IRasterCollection[];
        }
        /**
         * A raster resource.
         */
        interface IRasterCollectionsRaster {
            /**
             * A rectangular bounding box which contains all of the data in this Raster. The numbers represent latitudes and longitudes in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this raster. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * The description of this Raster, supplied by the author.
             */
            description: string;
            /**
             * A globally unique ID, used to refer to this Raster.
             */
            id: string;
            /**
             * The last modified time of this raster. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The name of this Raster, supplied by the author.
             */
            name: string;
            /**
             * The ID of the project that this Raster is in.
             */
            projectId: string;
            /**
             * The type of this Raster. Always "image" today.
             */
            rasterType: string;
            /**
             * Tags of this Raster.
             */
            tags: string[];
        }
        /**
         * The request sent to rasterCollections.Rasters.BatchDelete.
         */
        interface IRasterCollectionsRasterBatchDeleteRequest {
            /**
             * An array of Raster asset IDs to be removed from this RasterCollection.
             */
            ids: string[];
        }
        /**
         * The response returned by a call to rasterCollections.rasters.batchDelete.
         */
        interface IRasterCollectionsRastersBatchDeleteResponse {
        }
        /**
         * The request sent to rasterCollections.Rasters.BatchInsert.
         */
        interface IRasterCollectionsRastersBatchInsertRequest {
            /**
             * An array of Raster asset IDs to be added to this RasterCollection.
             */
            ids: string[];
        }
        /**
         * The response returned by a call to rasterCollections.rasters.batchInsert.
         */
        interface IRasterCollectionsRastersBatchInsertResponse {
        }
        /**
         * The response returned by a call to rasterCollections.rasters.List.
         */
        interface IRasterCollectionsRastersListResponse {
            /**
             * Next page token.
             */
            nextPageToken: string;
            /**
             * Resources returned.
             */
            rasters: IRasterCollectionsRaster[];
        }
        /**
         * The response returned by a call to rasters.List.
         */
        interface IRastersListResponse {
            /**
             * Next page token.
             */
            nextPageToken: string;
            /**
             * Resources returned.
             */
            rasters: IRaster[];
        }
        /**
         * Parameters for styling points as scaled shapes.
         */
        interface IScaledShape {
            /**
             * Border color/width of the shape. If not specified the shape won't have a border.
             */
            border: IBorder;
            /**
             * The fill color of the shape. If not specified the shape will be transparent (although the borders may not be).
             */
            fill: IColor;
            /**
             * Name of the shape.
             */
            shape: string;
        }
        /**
         * Parameters for scaling scaled shapes.
         */
        interface IScalingFunction {
            /**
             * Name of the numeric column used to scale a shape.
             */
            column: string;
            /**
             * The type of scaling function to use. Defaults to SQRT. Currently only linear and square root scaling are supported.
             */
            scalingType: string;
            /**
             * The range of shape sizes, in pixels. For circles, the size corresponds to the diameter.
             */
            sizeRange: ISizeRange;
            /**
             * The range of values to display across the size range.
             */
            valueRange: IValueRange;
        }
        /**
         * A schema indicating the properties which may be associated with features within a Table, and the types of those properties.
         */
        interface ISchema {
            /**
             * An array of column objects. The first object in the array must be named geometry and be of type points, lineStrings, polygons, or mixedGeometry.
             */
            columns: ITableColumn[];
            /**
             * The name of the column that contains a feature's geometry. This field can be omitted during table create; Google Maps Engine supports only a single geometry column, which must be named geometry and be the first object in the columns array.
             */
            primaryGeometry: string;
            /**
             * The name of the column that contains the unique identifier of a Feature.
             */
            primaryKey: string;
        }
        /**
         * Scaled shape size range in pixels. For circles, size corresponds to diameter.
         */
        interface ISizeRange {
            /**
             * Maximum size, in pixels.
             */
            max: number; // double
            /**
             * Minimum size, in pixels.
             */
            min: number; // double
        }
        /**
         * A collection of geographic features, and associated metadata.
         */
        interface ITable {
            /**
             * A rectangular bounding box which contains all of the data in this table. The numbers represent latitude and longitude in decimal degrees.
             */
            bbox: number /* double */ [];
            /**
             * The creation time of this table. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            creationTime: string; // date-time
            /**
             * The description of this table, supplied by the author.
             */
            description: string;
            /**
             * Deprecated: The name of an access list of the Map Editor type. The user on whose behalf the request is being sent must be an editor on that access list. Note: Google Maps Engine no longer uses access lists. For backward compatibility, the API still accepts access lists for projects that are already using access lists. If you created a GME account/project after July 14th, 2014, you will not be able to send API requests that include access lists. The API does not yet support the new permissions model. When you create a map via the API without specifying permissions, the account that created the map is the owner and has effective administrator access. Users can then use the Maps Engine user interface to adjust the permissions. This is a temporary workaround until the API supports the new permissions model. Read Add new users and groups in the Google Maps Engine help center for more information Note: This is an input field only. It is not returned in response to a list or get request.
             */
            draftAccessList: string;
            /**
             * The ETag, used to refer to the current version of the asset.
             */
            etag: string;
            /**
             * The files associated with this table.
             */
            files: IFile[];
            /**
             * A globally unique ID, used to refer to this table.
             */
            id: string;
            /**
             * The last modified time of this table. The value is an RFC 3339 formatted date-time value (e.g. 1970-01-01T00:00:00Z).
             */
            lastModifiedTime: string; // date-time
            /**
             * The name of this table, supplied by the author.
             */
            name: string;
            /**
             * The processing status of this table.
             */
            processingStatus: string;
            /**
             * The ID of the project to which the table belongs.
             */
            projectId: string;
            /**
             * Deprecated: The access list to whom view permissions are granted. The value must be the name of a Maps Engine access list of the Map Viewer type, and the user must be a viewer on that list. Read Share data, layers, and maps in the Google Maps Engine help center for more information. This is an input field only. It is not returned in response to a list or get request.
             */
            publishedAccessList: string;
            /**
             * The schema for this table. Note: The scheme is returned in response to a get request but not a list request. After requesting a list of tables, you'll need to send a get request to retrieve the schema for each table.
             */
            schema: ISchema;
            /**
             * Encoding of the uploaded files. Valid values include UTF-8, CP1251, ISO 8859-1, and Shift_JIS.
             */
            sourceEncoding: string;
            /**
             * An array of text strings, with each string representing a tag. More information about tags can be found in the Tagging data article of the Maps Engine help center.
             */
            tags: ITags;
            /**
             * If true, WRITERs of the asset are able to edit the asset permissions.
             */
            writersCanEditPermissions: boolean;
        }
        interface ITableColumn {
            /**
             * The column name.
             */
            name: string;
            /**
             * The type of data stored in this column.
             */
            type: string;
        }
        /**
         * The response returned by a call to tables.List. Note: The list response does not include all the fields available in a table. Refer to the table resource description for details of the fields that are not included. You'll need to send a get request to retrieve the additional fields for each table.
         */
        interface ITablesListResponse {
            /**
             * Next page token.
             */
            nextPageToken: string; // byte
            /**
             * Resources returned.
             */
            tables: ITable[];
        }
        interface ITags extends Array<string> {
        }
        /**
         * Range of values used for scaling shapes. The min/max values will be drawn as shapes with the min/max size.
         */
        interface IValueRange {
            /**
             * Maximum value.
             */
            max: number; // double
            /**
             * Minimum value.
             */
            min: number; // double
        }
        /**
         * A vector style contains styling information for vector layer.
         */
        interface IVectorStyle {
            displayRules: IDisplayRule[];
            /**
             * Individual feature info, this is called Info Window in Maps Engine UI. If not provided, a default template with all attributes will be generated.
             */
            featureInfo: IFeatureInfo;
            /**
             * The type of the vector style. Currently, only displayRule is supported.
             */
            type: string;
        }
        /**
         * Zoom level range. Zoom levels are restricted between 0 and 24, inclusive.
         */
        interface IZoomLevels {
            /**
             * Maximum zoom level.
             */
            max: number; // int32
            /**
             * Minimum zoom level.
             */
            min: number; // int32
        }
    }
}
