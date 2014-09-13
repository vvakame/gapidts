// Type definitions for Google Books API v1
// Project: https://developers.google.com/books/docs/v1/getting_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/books
//   Manage your books

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you search for books and manage your Google Books library.
     */
    module books {
        var bookshelves: {
            /**
             * Retrieves metadata for a specific bookshelf for the specified user.
             * @params {string} shelf ID of bookshelf to retrieve.
             * @params {string} source String to identify the originator of this request.
             * @params {string} userId ID of user for whom to retrieve bookshelves.
             */
            get: (params: {
                shelf: string;
                source?: string;
                userId: string;
            }) => { execute(callback: (data: IResponse<IBookshelf>, original: string) => void):void; };
            /**
             * Retrieves a list of public bookshelves for the specified user.
             * @params {string} source String to identify the originator of this request.
             * @params {string} userId ID of user for whom to retrieve bookshelves.
             */
            list: (params: {
                source?: string;
                userId: string;
            }) => { execute(callback: (data: IResponse<IBookshelves>, original: string) => void):void; };
            volumes: {
                /**
                 * Retrieves volumes in a specific bookshelf for the specified user.
                 * @params {number} maxResults Maximum number of results to return
                 * @params {string} shelf ID of bookshelf to retrieve volumes.
                 * @params {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
                 * @params {string} source String to identify the originator of this request.
                 * @params {number} startIndex Index of the first element to return (starts at 0)
                 * @params {string} userId ID of user for whom to retrieve bookshelf volumes.
                 */
                list: (params: {
                    maxResults?: number;
                    shelf: string;
                    showPreorders?: boolean;
                    source?: string;
                    startIndex?: number;
                    userId: string;
                }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
            };
        };
        var cloudloading: {
            /**
             * 
             * @params {string} drive_document_id A drive document id. The upload_client_token must not be set.
             * @params {string} mime_type The document MIME type. It can be set only if the drive_document_id is set.
             * @params {string} name The document name. It can be set only if the drive_document_id is set.
             * @params {string} upload_client_token 
             */
            addBook: (params: {
                drive_document_id?: string;
                mime_type?: string;
                name?: string;
                upload_client_token?: string;
            }) => { execute(callback: (data: IResponse<IBooksCloudloadingResource>, original: string) => void):void; };
            /**
             * Remove the book and its contents
             * @params {string} volumeId The id of the book to be removed.
             */
            deleteBook: (params: {
                volumeId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            updateBook: (params: {
                resource?: IBooksCloudloadingResource;
            }) => { execute(callback: (data: IResponse<IBooksCloudloadingResource>, original: string) => void):void; };
        };
        var layers: {
            /**
             * Gets the layer summary for a volume.
             * @params {string} contentVersion The content version for the requested volume.
             * @params {string} source String to identify the originator of this request.
             * @params {string} summaryId The ID for the layer to get the summary for.
             * @params {string} volumeId The volume to retrieve layers for.
             */
            get: (params: {
                contentVersion?: string;
                source?: string;
                summaryId: string;
                volumeId: string;
            }) => { execute(callback: (data: IResponse<ILayersummary>, original: string) => void):void; };
            /**
             * List the layer summaries for a volume.
             * @params {string} contentVersion The content version for the requested volume.
             * @params {number} maxResults Maximum number of results to return
             * @params {string} pageToken The value of the nextToken from the previous page.
             * @params {string} source String to identify the originator of this request.
             * @params {string} volumeId The volume to retrieve layers for.
             */
            list: (params: {
                contentVersion?: string;
                maxResults?: number;
                pageToken?: string;
                source?: string;
                volumeId: string;
            }) => { execute(callback: (data: IResponse<ILayersummaries>, original: string) => void):void; };
            annotationData: {
                /**
                 * Gets the annotation data.
                 * @params {boolean} allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
                 * @params {string} annotationDataId The ID of the annotation data to retrieve.
                 * @params {string} contentVersion The content version for the volume you are trying to retrieve.
                 * @params {number} h The requested pixel height for any images. If height is provided width must also be provided.
                 * @params {string} layerId The ID for the layer to get the annotations.
                 * @params {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
                 * @params {number} scale The requested scale for the image.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId The volume to retrieve annotations for.
                 * @params {number} w The requested pixel width for any images. If width is provided height must also be provided.
                 */
                get: (params: {
                    allowWebDefinitions?: boolean;
                    annotationDataId: string;
                    contentVersion: string;
                    h?: number;
                    layerId: string;
                    locale?: string;
                    scale?: number;
                    source?: string;
                    volumeId: string;
                    w?: number;
                }) => { execute(callback: (data: IResponse<IAnnotationdata>, original: string) => void):void; };
                /**
                 * Gets the annotation data for a volume and layer.
                 * @params {string} annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
                 * @params {string} contentVersion The content version for the requested volume.
                 * @params {number} h The requested pixel height for any images. If height is provided width must also be provided.
                 * @params {string} layerId The ID for the layer to get the annotation data.
                 * @params {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
                 * @params {number} maxResults Maximum number of results to return
                 * @params {string} pageToken The value of the nextToken from the previous page.
                 * @params {number} scale The requested scale for the image.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
                 * @params {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
                 * @params {string} volumeId The volume to retrieve annotation data for.
                 * @params {number} w The requested pixel width for any images. If width is provided height must also be provided.
                 */
                list: (params: {
                    annotationDataId?: string;
                    contentVersion: string;
                    h?: number;
                    layerId: string;
                    locale?: string;
                    maxResults?: number;
                    pageToken?: string;
                    scale?: number;
                    source?: string;
                    updatedMax?: string;
                    updatedMin?: string;
                    volumeId: string;
                    w?: number;
                }) => { execute(callback: (data: IResponse<IAnnotationsdata>, original: string) => void):void; };
            };
            volumeAnnotations: {
                /**
                 * Gets the volume annotation.
                 * @params {string} annotationId The ID of the volume annotation to retrieve.
                 * @params {string} layerId The ID for the layer to get the annotations.
                 * @params {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId The volume to retrieve annotations for.
                 */
                get: (params: {
                    annotationId: string;
                    layerId: string;
                    locale?: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IVolumeannotation>, original: string) => void):void; };
                /**
                 * Gets the volume annotations for a volume and layer.
                 * @params {string} contentVersion The content version for the requested volume.
                 * @params {string} endOffset The end offset to end retrieving data from.
                 * @params {string} endPosition The end position to end retrieving data from.
                 * @params {string} layerId The ID for the layer to get the annotations.
                 * @params {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
                 * @params {number} maxResults Maximum number of results to return
                 * @params {string} pageToken The value of the nextToken from the previous page.
                 * @params {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} startOffset The start offset to start retrieving data from.
                 * @params {string} startPosition The start position to start retrieving data from.
                 * @params {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
                 * @params {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
                 * @params {string} volumeAnnotationsVersion The version of the volume annotations that you are requesting.
                 * @params {string} volumeId The volume to retrieve annotations for.
                 */
                list: (params: {
                    contentVersion: string;
                    endOffset?: string;
                    endPosition?: string;
                    layerId: string;
                    locale?: string;
                    maxResults?: number;
                    pageToken?: string;
                    showDeleted?: boolean;
                    source?: string;
                    startOffset?: string;
                    startPosition?: string;
                    updatedMax?: string;
                    updatedMin?: string;
                    volumeAnnotationsVersion?: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IVolumeannotations>, original: string) => void):void; };
            };
        };
        var myconfig: {
            /**
             * Release downloaded content access restriction.
             * @params {string} cpksver The device/version ID from which to release the restriction.
             * @params {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
             * @params {string} source String to identify the originator of this request.
             * @params {string} volumeIds The volume(s) to release restrictions for.
             */
            releaseDownloadAccess: (params: {
                cpksver: string;
                locale?: string;
                source?: string;
                volumeIds: string;
            }) => { execute(callback: (data: IResponse<IDownloadAccesses>, original: string) => void):void; };
            /**
             * Request concurrent and download access restrictions.
             * @params {string} cpksver The device/version ID from which to request the restrictions.
             * @params {string} licenseTypes The type of access license to request. If not specified, the default is BOTH.
             * @params {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
             * @params {string} nonce The client nonce value.
             * @params {string} source String to identify the originator of this request.
             * @params {string} volumeId The volume to request concurrent/download restrictions for.
             */
            requestAccess: (params: {
                cpksver: string;
                licenseTypes?: string;
                locale?: string;
                nonce: string;
                source: string;
                volumeId: string;
            }) => { execute(callback: (data: IResponse<IRequestAccess>, original: string) => void):void; };
            /**
             * Request downloaded content access for specified volumes on the My eBooks shelf.
             * @params {string} cpksver The device/version ID from which to release the restriction.
             * @params {string} features List of features supported by the client, i.e., 'RENTALS'
             * @params {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
             * @params {string} nonce The client nonce value.
             * @params {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
             * @params {string} source String to identify the originator of this request.
             * @params {string} volumeIds The volume(s) to request download restrictions for.
             */
            syncVolumeLicenses: (params: {
                cpksver: string;
                features?: string;
                locale?: string;
                nonce: string;
                showPreorders?: boolean;
                source: string;
                volumeIds?: string;
            }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
        };
        var mylibrary: {
            annotations: {
                /**
                 * Deletes an annotation.
                 * @params {string} annotationId The ID for the annotation to delete.
                 * @params {string} source String to identify the originator of this request.
                 */
                delete: (params: {
                    annotationId: string;
                    source?: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Gets an annotation by its ID.
                 * @params {string} annotationId The ID for the annotation to retrieve.
                 * @params {string} source String to identify the originator of this request.
                 */
                get: (params: {
                    annotationId: string;
                    source?: string;
                }) => { execute(callback: (data: IResponse<IAnnotation>, original: string) => void):void; };
                /**
                 * Inserts a new annotation.
                 * @params {boolean} showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
                 * @params {string} source String to identify the originator of this request.
                 */
                insert: (params: {
                    showOnlySummaryInResponse?: boolean;
                    source?: string;
                    resource?: IAnnotation;
                }) => { execute(callback: (data: IResponse<IAnnotation>, original: string) => void):void; };
                /**
                 * Retrieves a list of annotations, possibly filtered.
                 * @params {string} contentVersion The content version for the requested volume.
                 * @params {string} layerId The layer ID to limit annotation by.
                 * @params {string} layerIds The layer ID(s) to limit annotation by.
                 * @params {number} maxResults Maximum number of results to return
                 * @params {string} pageIds The page ID(s) for the volume that is being queried.
                 * @params {string} pageToken The value of the nextToken from the previous page.
                 * @params {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
                 * @params {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
                 * @params {string} volumeId The volume to restrict annotations to.
                 */
                list: (params: {
                    contentVersion?: string;
                    layerId?: string;
                    layerIds?: string;
                    maxResults?: number;
                    pageIds?: string;
                    pageToken?: string;
                    showDeleted?: boolean;
                    source?: string;
                    updatedMax?: string;
                    updatedMin?: string;
                    volumeId?: string;
                }) => { execute(callback: (data: IResponse<IAnnotations>, original: string) => void):void; };
                /**
                 * Gets the summary of specified layers.
                 * @params {string} layerIds Array of layer IDs to get the summary for.
                 * @params {string} volumeId Volume id to get the summary for.
                 */
                summary: (params: {
                    layerIds: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IAnnotationsSummary>, original: string) => void):void; };
                /**
                 * Updates an existing annotation.
                 * @params {string} annotationId The ID for the annotation to update.
                 * @params {string} source String to identify the originator of this request.
                 */
                update: (params: {
                    annotationId: string;
                    source?: string;
                    resource?: IAnnotation;
                }) => { execute(callback: (data: IResponse<IAnnotation>, original: string) => void):void; };
            };
            bookshelves: {
                /**
                 * Adds a volume to a bookshelf.
                 * @params {string} shelf ID of bookshelf to which to add a volume.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of volume to add.
                 */
                addVolume: (params: {
                    shelf: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Clears all volumes from a bookshelf.
                 * @params {string} shelf ID of bookshelf from which to remove a volume.
                 * @params {string} source String to identify the originator of this request.
                 */
                clearVolumes: (params: {
                    shelf: string;
                    source?: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
                 * @params {string} shelf ID of bookshelf to retrieve.
                 * @params {string} source String to identify the originator of this request.
                 */
                get: (params: {
                    shelf: string;
                    source?: string;
                }) => { execute(callback: (data: IResponse<IBookshelf>, original: string) => void):void; };
                /**
                 * Retrieves a list of bookshelves belonging to the authenticated user.
                 * @params {string} source String to identify the originator of this request.
                 */
                list: (params: {
                    source?: string;
                }) => { execute(callback: (data: IResponse<IBookshelves>, original: string) => void):void; };
                /**
                 * Moves a volume within a bookshelf.
                 * @params {string} shelf ID of bookshelf with the volume.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of volume to move.
                 * @params {number} volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
                 */
                moveVolume: (params: {
                    shelf: string;
                    source?: string;
                    volumeId: string;
                    volumePosition: number;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Removes a volume from a bookshelf.
                 * @params {string} shelf ID of bookshelf from which to remove a volume.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of volume to remove.
                 */
                removeVolume: (params: {
                    shelf: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                volumes: {
                    /**
                     * Gets volume information for volumes on a bookshelf.
                     * @params {string} country ISO-3166-1 code to override the IP-based location.
                     * @params {number} maxResults Maximum number of results to return
                     * @params {string} projection Restrict information returned to a set of selected fields.
                     * @params {string} q Full-text search query string in this bookshelf.
                     * @params {string} shelf The bookshelf ID or name retrieve volumes for.
                     * @params {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
                     * @params {string} source String to identify the originator of this request.
                     * @params {number} startIndex Index of the first element to return (starts at 0)
                     */
                    list: (params: {
                        country?: string;
                        maxResults?: number;
                        projection?: string;
                        q?: string;
                        shelf: string;
                        showPreorders?: boolean;
                        source?: string;
                        startIndex?: number;
                    }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
                };
            };
            readingpositions: {
                /**
                 * Retrieves my reading position information for a volume.
                 * @params {string} contentVersion Volume content version for which this reading position is requested.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of volume for which to retrieve a reading position.
                 */
                get: (params: {
                    contentVersion?: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IReadingPosition>, original: string) => void):void; };
                /**
                 * Sets my reading position information for a volume.
                 * @params {string} action Action that caused this reading position to be set.
                 * @params {string} contentVersion Volume content version for which this reading position applies.
                 * @params {string} deviceCookie Random persistent device cookie optional on set position.
                 * @params {string} position Position string for the new volume reading position.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} timestamp RFC 3339 UTC format timestamp associated with this reading position.
                 * @params {string} volumeId ID of volume for which to update the reading position.
                 */
                setPosition: (params: {
                    action?: string;
                    contentVersion?: string;
                    deviceCookie?: string;
                    position: string;
                    source?: string;
                    timestamp: string;
                    volumeId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            };
        };
        var promooffer: {
            /**
             * 
             * @params {string} androidId device android_id
             * @params {string} device device device
             * @params {string} manufacturer device manufacturer
             * @params {string} model device model
             * @params {string} offerId 
             * @params {string} product device product
             * @params {string} serial device serial
             * @params {string} volumeId Volume id to exercise the offer
             */
            accept: (params: {
                androidId?: string;
                device?: string;
                manufacturer?: string;
                model?: string;
                offerId?: string;
                product?: string;
                serial?: string;
                volumeId?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * 
             * @params {string} androidId device android_id
             * @params {string} device device device
             * @params {string} manufacturer device manufacturer
             * @params {string} model device model
             * @params {string} offerId Offer to dimiss
             * @params {string} product device product
             * @params {string} serial device serial
             */
            dismiss: (params: {
                androidId?: string;
                device?: string;
                manufacturer?: string;
                model?: string;
                offerId?: string;
                product?: string;
                serial?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns a list of promo offers available to the user
             * @params {string} androidId device android_id
             * @params {string} device device device
             * @params {string} manufacturer device manufacturer
             * @params {string} model device model
             * @params {string} product device product
             * @params {string} serial device serial
             */
            get: (params: {
                androidId?: string;
                device?: string;
                manufacturer?: string;
                model?: string;
                product?: string;
                serial?: string;
            }) => { execute(callback: (data: IResponse<IOffers>, original: string) => void):void; };
        };
        var volumes: {
            /**
             * Gets volume information for a single volume.
             * @params {string} country ISO-3166-1 code to override the IP-based location.
             * @params {string} partner Brand results for partner ID.
             * @params {string} projection Restrict information returned to a set of selected fields.
             * @params {string} source String to identify the originator of this request.
             * @params {string} volumeId ID of volume to retrieve.
             */
            get: (params: {
                country?: string;
                partner?: string;
                projection?: string;
                source?: string;
                volumeId: string;
            }) => { execute(callback: (data: IResponse<IVolume>, original: string) => void):void; };
            /**
             * Performs a book search.
             * @params {string} download Restrict to volumes by download availability.
             * @params {string} filter Filter search results.
             * @params {string} langRestrict Restrict results to books with this language code.
             * @params {string} libraryRestrict Restrict search to this user's library.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} orderBy Sort search results.
             * @params {string} partner Restrict and brand results for partner ID.
             * @params {string} printType Restrict to books or magazines.
             * @params {string} projection Restrict information returned to a set of selected fields.
             * @params {string} q Full-text search query string.
             * @params {boolean} showPreorders Set to true to show books available for preorder. Defaults to false.
             * @params {string} source String to identify the originator of this request.
             * @params {number} startIndex Index of the first result to return (starts at 0)
             */
            list: (params: {
                download?: string;
                filter?: string;
                langRestrict?: string;
                libraryRestrict?: string;
                maxResults?: number;
                orderBy?: string;
                partner?: string;
                printType?: string;
                projection?: string;
                q: string;
                showPreorders?: boolean;
                source?: string;
                startIndex?: number;
            }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
            associated: {
                /**
                 * Return a list of associated books.
                 * @params {string} association Association type.
                 * @params {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of the source volume.
                 */
                list: (params: {
                    association?: string;
                    locale?: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
            };
            mybooks: {
                /**
                 * Return a list of books in My Library.
                 * @params {string} acquireMethod How the book was aquired
                 * @params {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
                 * @params {number} maxResults Maximum number of results to return.
                 * @params {string} processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
                 * @params {string} source String to identify the originator of this request.
                 * @params {number} startIndex Index of the first result to return (starts at 0)
                 */
                list: (params: {
                    acquireMethod?: string;
                    locale?: string;
                    maxResults?: number;
                    processingState?: string;
                    source?: string;
                    startIndex?: number;
                }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
            };
            recommended: {
                /**
                 * Return a list of recommended books for the current user.
                 * @params {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
                 * @params {string} source String to identify the originator of this request.
                 */
                list: (params: {
                    locale?: string;
                    source?: string;
                }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
                /**
                 * Rate a recommended book for the current user.
                 * @params {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
                 * @params {string} rating Rating to be given to the volume.
                 * @params {string} source String to identify the originator of this request.
                 * @params {string} volumeId ID of the source volume.
                 */
                rate: (params: {
                    locale?: string;
                    rating: string;
                    source?: string;
                    volumeId: string;
                }) => { execute(callback: (data: IResponse<IBooksVolumesRecommendedRateResponse>, original: string) => void):void; };
            };
            useruploaded: {
                /**
                 * Return a list of books uploaded by the current user.
                 * @params {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
                 * @params {number} maxResults Maximum number of results to return.
                 * @params {string} processingState The processing state of the user uploaded volumes to be returned.
                 * @params {string} source String to identify the originator of this request.
                 * @params {number} startIndex Index of the first result to return (starts at 0)
                 * @params {string} volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
                 */
                list: (params: {
                    locale?: string;
                    maxResults?: number;
                    processingState?: string;
                    source?: string;
                    startIndex?: number;
                    volumeId?: string;
                }) => { execute(callback: (data: IResponse<IVolumes>, original: string) => void):void; };
            };
        };
        interface IAnnotation {
            /**
             * Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
             */
            afterSelectedText: string;
            /**
             * Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
             */
            beforeSelectedText: string;
            /**
             * Selection ranges sent from the client.
             */
            clientVersionRanges: {
                cfiRange: IBooksAnnotationsRange;
                contentVersion: string;
                gbImageRange: IBooksAnnotationsRange;
                gbTextRange: IBooksAnnotationsRange;
                imageCfiRange: IBooksAnnotationsRange;
            };
            /**
             * Timestamp for the created time of this annotation.
             */
            created: string; // date-time
            /**
             * Selection ranges for the most recent content version.
             */
            currentVersionRanges: {
                cfiRange: IBooksAnnotationsRange;
                contentVersion: string;
                gbImageRange: IBooksAnnotationsRange;
                gbTextRange: IBooksAnnotationsRange;
                imageCfiRange: IBooksAnnotationsRange;
            };
            /**
             * User-created data for this annotation.
             */
            data: string;
            /**
             * Indicates that this annotation is deleted.
             */
            deleted: boolean;
            /**
             * The highlight style for this annotation.
             */
            highlightStyle: string;
            /**
             * Id of this annotation, in the form of a GUID.
             */
            id: string;
            /**
             * Resource type.
             */
            kind: string;
            /**
             * The layer this annotation is for.
             */
            layerId: string;
            layerSummary: {
                allowedCharacterCount: number; // int32
                limitType: string;
                remainingCharacterCount: number; // int32
            };
            /**
             * Pages that this annotation spans.
             */
            pageIds: string[];
            /**
             * Excerpt from the volume.
             */
            selectedText: string;
            /**
             * URL to this resource.
             */
            selfLink: string;
            /**
             * Timestamp for the last time this annotation was modified.
             */
            updated: string; // date-time
            /**
             * The volume that this annotation belongs to.
             */
            volumeId: string;
        }
        interface IAnnotationdata {
            /**
             * The type of annotation this data is for.
             */
            annotationType: string;
            data: any;
            /**
             * Base64 encoded data for this annotation data.
             */
            encoded_data: string; // byte
            /**
             * Unique id for this annotation data.
             */
            id: string;
            /**
             * Resource Type
             */
            kind: string;
            /**
             * The Layer id for this data. *
             */
            layerId: string;
            /**
             * URL for this resource. *
             */
            selfLink: string;
            /**
             * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
             */
            updated: string; // date-time
            /**
             * The volume id for this data. *
             */
            volumeId: string;
        }
        interface IAnnotations {
            /**
             * A list of annotations.
             */
            items: IAnnotation[];
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
             */
            nextPageToken: string;
            /**
             * Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.
             */
            totalItems: number; // int32
        }
        interface IAnnotationsSummary {
            kind: string;
            layers: {
                allowedCharacterCount: number; // int32
                layerId: string;
                limitType: string;
                remainingCharacterCount: number; // int32
                updated: string; // date-time
            }[];
        }
        interface IAnnotationsdata {
            /**
             * A list of Annotation Data.
             */
            items: IAnnotationdata[];
            /**
             * Resource type
             */
            kind: string;
            /**
             * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
             */
            nextPageToken: string;
            /**
             * The total number of volume annotations found.
             */
            totalItems: number; // int32
        }
        interface IBooksAnnotationsRange {
            /**
             * The offset from the ending position.
             */
            endOffset: string;
            /**
             * The ending position for the range.
             */
            endPosition: string;
            /**
             * The offset from the starting position.
             */
            startOffset: string;
            /**
             * The starting position for the range.
             */
            startPosition: string;
        }
        interface IBooksCloudloadingResource {
            author: string;
            processingState: string;
            title: string;
            volumeId: string;
        }
        interface IBooksVolumesRecommendedRateResponse {
            consistency_token: string;
        }
        interface IBookshelf {
            /**
             * Whether this bookshelf is PUBLIC or PRIVATE.
             */
            access: string;
            /**
             * Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).
             */
            created: string; // date-time
            /**
             * Description of this bookshelf.
             */
            description: string;
            /**
             * Id of this bookshelf, only unique by user.
             */
            id: number; // int32
            /**
             * Resource type for bookshelf metadata.
             */
            kind: string;
            /**
             * URL to this resource.
             */
            selfLink: string;
            /**
             * Title of this bookshelf.
             */
            title: string;
            /**
             * Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).
             */
            updated: string; // date-time
            /**
             * Number of volumes in this bookshelf.
             */
            volumeCount: number; // int32
            /**
             * Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).
             */
            volumesLastUpdated: string; // date-time
        }
        interface IBookshelves {
            /**
             * A list of bookshelves.
             */
            items: IBookshelf[];
            /**
             * Resource type.
             */
            kind: string;
        }
        interface IConcurrentAccessRestriction {
            /**
             * Whether access is granted for this (user, device, volume).
             */
            deviceAllowed: boolean;
            /**
             * Resource type.
             */
            kind: string;
            /**
             * The maximum number of concurrent access licenses for this volume.
             */
            maxConcurrentDevices: number; // int32
            /**
             * Error/warning message.
             */
            message: string;
            /**
             * Client nonce for verification. Download access and client-validation only.
             */
            nonce: string;
            /**
             * Error/warning reason code.
             */
            reasonCode: string;
            /**
             * Whether this volume has any concurrent access restrictions.
             */
            restricted: boolean;
            /**
             * Response signature.
             */
            signature: string;
            /**
             * Client app identifier for verification. Download access and client-validation only.
             */
            source: string;
            /**
             * Time in seconds for license auto-expiration.
             */
            timeWindowSeconds: number; // int32
            /**
             * Identifies the volume for which this entry applies.
             */
            volumeId: string;
        }
        interface IDictlayerdata {
            common: {
                title: string;
            };
            dict: {
                source: {
                    attribution: string;
                    url: string;
                };
                words: {
                    derivatives: {
                        source: {
                            attribution: string;
                            url: string;
                        };
                        text: string;
                    }[];
                    examples: {
                        source: {
                            attribution: string;
                            url: string;
                        };
                        text: string;
                    }[];
                    senses: {
                        conjugations: {
                            type: string;
                            value: string;
                        }[];
                        definitions: {
                            definition: string;
                            examples: {
                                source: {
                                    attribution: string;
                                    url: string;
                                };
                                text: string;
                            }[];
                        }[];
                        partOfSpeech: string;
                        pronunciation: string;
                        pronunciationUrl: string;
                        source: {
                            attribution: string;
                            url: string;
                        };
                        syllabification: string;
                        synonyms: {
                            source: {
                                attribution: string;
                                url: string;
                            };
                            text: string;
                        }[];
                    }[];
                    source: {
                        attribution: string;
                        url: string;
                    };
                }[];
            };
            kind: string;
        }
        interface IDownloadAccessRestriction {
            /**
             * If restricted, whether access is granted for this (user, device, volume).
             */
            deviceAllowed: boolean;
            /**
             * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
             */
            downloadsAcquired: number; // int32
            /**
             * If deviceAllowed, whether access was just acquired with this request.
             */
            justAcquired: boolean;
            /**
             * Resource type.
             */
            kind: string;
            /**
             * If restricted, the maximum number of content download licenses for this volume.
             */
            maxDownloadDevices: number; // int32
            /**
             * Error/warning message.
             */
            message: string;
            /**
             * Client nonce for verification. Download access and client-validation only.
             */
            nonce: string;
            /**
             * Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
             */
            reasonCode: string;
            /**
             * Whether this volume has any download access restrictions.
             */
            restricted: boolean;
            /**
             * Response signature.
             */
            signature: string;
            /**
             * Client app identifier for verification. Download access and client-validation only.
             */
            source: string;
            /**
             * Identifies the volume for which this entry applies.
             */
            volumeId: string;
        }
        interface IDownloadAccesses {
            /**
             * A list of download access responses.
             */
            downloadAccessList: IDownloadAccessRestriction[];
            /**
             * Resource type.
             */
            kind: string;
        }
        interface IGeolayerdata {
            common: {
                lang: string;
                previewImageUrl: string;
                snippet: string;
                snippetUrl: string;
                title: string;
            };
            geo: {
                boundary: {
                    latitude: number; // uint32
                    longitude: number; // uint32
                }[][];
                cachePolicy: string;
                countryCode: string;
                latitude: number; // double
                longitude: number; // double
                mapType: string;
                viewport: {
                    hi: {
                        latitude: number; // double
                        longitude: number; // double
                    };
                    lo: {
                        latitude: number; // double
                        longitude: number; // double
                    };
                };
                zoom: number; // int32
            };
            kind: string;
        }
        interface ILayersummaries {
            /**
             * A list of layer summary items.
             */
            items: ILayersummary[];
            /**
             * Resource type.
             */
            kind: string;
            /**
             * The total number of layer summaries found.
             */
            totalItems: number; // int32
        }
        interface ILayersummary {
            /**
             * The number of annotations for this layer.
             */
            annotationCount: number; // int32
            /**
             * The list of annotation types contained for this layer.
             */
            annotationTypes: string[];
            /**
             * Link to get data for this annotation.
             */
            annotationsDataLink: string;
            /**
             * The link to get the annotations for this layer.
             */
            annotationsLink: string;
            /**
             * The content version this resource is for.
             */
            contentVersion: string;
            /**
             * The number of data items for this layer.
             */
            dataCount: number; // int32
            /**
             * Unique id of this layer summary.
             */
            id: string;
            /**
             * Resource Type
             */
            kind: string;
            /**
             * The layer id for this summary.
             */
            layerId: string;
            /**
             * URL to this resource.
             */
            selfLink: string;
            /**
             * Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).
             */
            updated: string; // date-time
            /**
             * The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
             */
            volumeAnnotationsVersion: string;
            /**
             * The volume id this resource is for.
             */
            volumeId: string;
        }
        interface IOffers {
            /**
             * A list of offers.
             */
            items: {
                artUrl: string;
                id: string;
                items: {
                    author: string;
                    canonicalVolumeLink: string;
                    coverUrl: string;
                    description: string;
                    title: string;
                    volumeId: string;
                }[];
            }[];
            /**
             * Resource type.
             */
            kind: string;
        }
        interface IReadingPosition {
            /**
             * Position in an EPUB as a CFI.
             */
            epubCfiPosition: string;
            /**
             * Position in a volume for image-based content.
             */
            gbImagePosition: string;
            /**
             * Position in a volume for text-based content.
             */
            gbTextPosition: string;
            /**
             * Resource type for a reading position.
             */
            kind: string;
            /**
             * Position in a PDF file.
             */
            pdfPosition: string;
            /**
             * Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
             */
            updated: string; // date-time
            /**
             * Volume id associated with this reading position.
             */
            volumeId: string;
        }
        interface IRequestAccess {
            /**
             * A concurrent access response.
             */
            concurrentAccess: IConcurrentAccessRestriction;
            /**
             * A download access response.
             */
            downloadAccess: IDownloadAccessRestriction;
            /**
             * Resource type.
             */
            kind: string;
        }
        interface IReview {
            /**
             * Author of this review.
             */
            author: {
                displayName: string;
            };
            /**
             * Review text.
             */
            content: string;
            /**
             * Date of this review.
             */
            date: string;
            /**
             * URL for the full review text, for reviews gathered from the web.
             */
            fullTextUrl: string;
            /**
             * Resource type for a review.
             */
            kind: string;
            /**
             * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
             */
            rating: string;
            /**
             * Information regarding the source of this review, when the review is not from a Google Books user.
             */
            source: {
                description: string;
                extraDescription: string;
                url: string;
            };
            /**
             * Title for this review.
             */
            title: string;
            /**
             * Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
             */
            type: string;
            /**
             * Volume that this review is for.
             */
            volumeId: string;
        }
        interface IVolume {
            /**
             * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
             */
            accessInfo: {
                accessViewStatus: string;
                country: string;
                downloadAccess: IDownloadAccessRestriction;
                driveImportedContentLink: string;
                embeddable: boolean;
                epub: {
                    acsTokenLink: string;
                    downloadLink: string;
                    isAvailable: boolean;
                };
                explicitOfflineLicenseManagement: boolean;
                pdf: {
                    acsTokenLink: string;
                    downloadLink: string;
                    isAvailable: boolean;
                };
                publicDomain: boolean;
                quoteSharingAllowed: boolean;
                textToSpeechPermission: string;
                viewOrderUrl: string;
                viewability: string;
                webReaderLink: string;
            };
            /**
             * Opaque identifier for a specific version of a volume resource. (In LITE projection)
             */
            etag: string;
            /**
             * Unique identifier for a volume. (In LITE projection.)
             */
            id: string;
            /**
             * Resource type for a volume. (In LITE projection.)
             */
            kind: string;
            /**
             * What layers exist in this volume and high level information about them.
             */
            layerInfo: {
                layers: {
                    layerId: string;
                    volumeAnnotationsVersion: string;
                }[];
            };
            /**
             * Recommendation related information for this volume.
             */
            recommendedInfo: {
                explanation: string;
            };
            /**
             * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
             */
            saleInfo: {
                buyLink: string;
                country: string;
                isEbook: boolean;
                listPrice: {
                    amount: number; // double
                    currencyCode: string;
                };
                offers: {
                    finskyOfferType: number; // int32
                    listPrice: {
                        amountInMicros: number; // double
                        currencyCode: string;
                    };
                    rentalDuration: {
                        count: number; // double
                        unit: string;
                    };
                    retailPrice: {
                        amountInMicros: number; // double
                        currencyCode: string;
                    };
                }[];
                onSaleDate: string; // date-time
                retailPrice: {
                    amount: number; // double
                    currencyCode: string;
                };
                saleability: string;
            };
            /**
             * Search result information related to this volume.
             */
            searchInfo: {
                textSnippet: string;
            };
            /**
             * URL to this resource. (In LITE projection.)
             */
            selfLink: string;
            /**
             * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
             */
            userInfo: {
                copy: {
                    allowedCharacterCount: number; // int32
                    limitType: string;
                    remainingCharacterCount: number; // int32
                    updated: string; // date-time
                };
                isInMyBooks: boolean;
                isPreordered: boolean;
                isPurchased: boolean;
                isUploaded: boolean;
                readingPosition: IReadingPosition;
                rentalPeriod: {
                    endUtcSec: string; // int64
                    startUtcSec: string; // int64
                };
                rentalState: string;
                review: IReview;
                updated: string; // date-time
                userUploadedVolumeInfo: {
                    processingState: string;
                };
            };
            /**
             * General volume information.
             */
            volumeInfo: {
                authors: string[];
                averageRating: number; // double
                canonicalVolumeLink: string;
                categories: string[];
                contentVersion: string;
                description: string;
                dimensions: {
                    height: string;
                    thickness: string;
                    width: string;
                };
                imageLinks: {
                    extraLarge: string;
                    large: string;
                    medium: string;
                    small: string;
                    smallThumbnail: string;
                    thumbnail: string;
                };
                industryIdentifiers: {
                    identifier: string;
                    type: string;
                }[];
                infoLink: string;
                language: string;
                mainCategory: string;
                pageCount: number; // int32
                previewLink: string;
                printType: string;
                printedPageCount: number; // int32
                publishedDate: string;
                publisher: string;
                ratingsCount: number; // int32
                readingModes: any;
                subtitle: string;
                title: string;
            };
        }
        interface IVolumeannotation {
            /**
             * The annotation data id for this volume annotation.
             */
            annotationDataId: string;
            /**
             * Link to get data for this annotation.
             */
            annotationDataLink: string;
            /**
             * The type of annotation this is.
             */
            annotationType: string;
            /**
             * The content ranges to identify the selected text.
             */
            contentRanges: {
                cfiRange: IBooksAnnotationsRange;
                contentVersion: string;
                gbImageRange: IBooksAnnotationsRange;
                gbTextRange: IBooksAnnotationsRange;
            };
            /**
             * Data for this annotation.
             */
            data: string;
            /**
             * Indicates that this annotation is deleted.
             */
            deleted: boolean;
            /**
             * Unique id of this volume annotation.
             */
            id: string;
            /**
             * Resource Type
             */
            kind: string;
            /**
             * The Layer this annotation is for.
             */
            layerId: string;
            /**
             * Pages the annotation spans.
             */
            pageIds: string[];
            /**
             * Excerpt from the volume.
             */
            selectedText: string;
            /**
             * URL to this resource.
             */
            selfLink: string;
            /**
             * Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).
             */
            updated: string; // date-time
            /**
             * The Volume this annotation is for.
             */
            volumeId: string;
        }
        interface IVolumeannotations {
            /**
             * A list of volume annotations.
             */
            items: IVolumeannotation[];
            /**
             * Resource type
             */
            kind: string;
            /**
             * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
             */
            nextPageToken: string;
            /**
             * The total number of volume annotations found.
             */
            totalItems: number; // int32
            /**
             * The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).
             */
            version: string;
        }
        interface IVolumes {
            /**
             * A list of volumes.
             */
            items: IVolume[];
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
             */
            totalItems: number; // int32
        }
    }
}
