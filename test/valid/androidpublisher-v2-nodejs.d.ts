// Type definitions for Google Google Play Android Developer API v2
// Project: https://developers.google.com/android-publisher
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function androidpublisher(version:string):typeof googleapis.androidpublisher;
}
/**
 * Lets Android application developers access their Google Play accounts.
 */
declare module googleapis.androidpublisher {
    var edits: {
        /**
         * Commits/applies the changes made in this edit back to the app.
         * @params {string} editId Unique identifier for this edit.
         * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         */
        commit: (params: {
            editId: string;
            packageName: string;
        }, callback: (err: IErrorResponse, response: IAppEdit, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
         * @params {string} editId Unique identifier for this edit.
         * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         */
        delete: (params: {
            editId: string;
            packageName: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
         * @params {string} editId Unique identifier for this edit.
         * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         */
        get: (params: {
            editId: string;
            packageName: string;
        }, callback: (err: IErrorResponse, response: IAppEdit, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new edit for an app, populated with the app's current state.
         * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         */
        insert: (params: {
            packageName: string;
            resource?: IAppEdit;
        }, callback: (err: IErrorResponse, response: IAppEdit, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
         * @params {string} editId Unique identifier for this edit.
         * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         */
        validate: (params: {
            editId: string;
            packageName: string;
        }, callback: (err: IErrorResponse, response: IAppEdit, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        apklistings: {
            /**
             * Deletes the APK-specific localized listing for a specified APK and language code.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            delete: (params: {
                apkVersionCode: number;
                editId: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Deletes all the APK-specific localized listings for a specified APK.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            deleteall: (params: {
                apkVersionCode: number;
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Fetches the APK-specific localized listing for a specified APK and language code.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            get: (params: {
                apkVersionCode: number;
                editId: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IApkListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Lists all the APK-specific localized listings for a specified APK.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            list: (params: {
                apkVersionCode: number;
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IApkListingsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            patch: (params: {
                apkVersionCode: number;
                editId: string;
                language: string;
                packageName: string;
                resource?: IApkListing;
            }, callback: (err: IErrorResponse, response: IApkListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates or creates the APK-specific localized listing for a specified APK and language code.
             * @params {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            update: (params: {
                apkVersionCode: number;
                editId: string;
                language: string;
                packageName: string;
                resource?: IApkListing;
            }, callback: (err: IErrorResponse, response: IApkListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        apks: {
            /**
             * 
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            list: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IApksListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * 
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            upload: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IApk, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        details: {
            /**
             * Fetches app details for this edit. This includes the default language and developer support contact information.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            get: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IAppDetails, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates app details for this edit. This method supports patch semantics.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            patch: (params: {
                editId: string;
                packageName: string;
                resource?: IAppDetails;
            }, callback: (err: IErrorResponse, response: IAppDetails, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates app details for this edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            update: (params: {
                editId: string;
                packageName: string;
                resource?: IAppDetails;
            }, callback: (err: IErrorResponse, response: IAppDetails, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        expansionfiles: {
            /**
             * Fetches the Expansion File configuration for the APK specified.
             * @params {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} expansionFileType 
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            get: (params: {
                apkVersionCode: number;
                editId: string;
                expansionFileType: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IExpansionFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
             * @params {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} expansionFileType 
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            patch: (params: {
                apkVersionCode: number;
                editId: string;
                expansionFileType: string;
                packageName: string;
                resource?: IExpansionFile;
            }, callback: (err: IErrorResponse, response: IExpansionFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
             * @params {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} expansionFileType 
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            update: (params: {
                apkVersionCode: number;
                editId: string;
                expansionFileType: string;
                packageName: string;
                resource?: IExpansionFile;
            }, callback: (err: IErrorResponse, response: IExpansionFile, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Uploads and attaches a new Expansion File to the APK specified.
             * @params {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} expansionFileType 
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            upload: (params: {
                apkVersionCode: number;
                editId: string;
                expansionFileType: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IExpansionFilesUploadResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        images: {
            /**
             * Deletes the image (specified by id) from the edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} imageId Unique identifier an image within the set of images attached to this edit.
             * @params {string} imageType 
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            delete: (params: {
                editId: string;
                imageId: string;
                imageType: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Deletes all images for the specified language and image type.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} imageType 
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            deleteall: (params: {
                editId: string;
                imageType: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IImagesDeleteAllResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Lists all images for the specified language and image type.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} imageType 
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            list: (params: {
                editId: string;
                imageType: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IImagesListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Uploads a new image and adds it to the list of images for the specified language and image type.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} imageType 
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            upload: (params: {
                editId: string;
                imageType: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IImagesUploadResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        listings: {
            /**
             * Deletes the specified localized store listing from an edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            delete: (params: {
                editId: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Deletes all localized listings from an edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            deleteall: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Fetches information about a localized store listing.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            get: (params: {
                editId: string;
                language: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Returns all of the localized store listings attached to this edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            list: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: IListingsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Creates or updates a localized store listing. This method supports patch semantics.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            patch: (params: {
                editId: string;
                language: string;
                packageName: string;
                resource?: IListing;
            }, callback: (err: IErrorResponse, response: IListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Creates or updates a localized store listing.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            update: (params: {
                editId: string;
                language: string;
                packageName: string;
                resource?: IListing;
            }, callback: (err: IErrorResponse, response: IListing, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        testers: {
            /**
             * 
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track 
             */
            get: (params: {
                editId: string;
                packageName: string;
                track: string;
            }, callback: (err: IErrorResponse, response: ITesters, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * 
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track 
             */
            patch: (params: {
                editId: string;
                packageName: string;
                track: string;
                resource?: ITesters;
            }, callback: (err: IErrorResponse, response: ITesters, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * 
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track 
             */
            update: (params: {
                editId: string;
                packageName: string;
                track: string;
                resource?: ITesters;
            }, callback: (err: IErrorResponse, response: ITesters, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        tracks: {
            /**
             * Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track The track type to read or modify.
             */
            get: (params: {
                editId: string;
                packageName: string;
                track: string;
            }, callback: (err: IErrorResponse, response: ITrack, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Lists all the track configurations for this edit.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             */
            list: (params: {
                editId: string;
                packageName: string;
            }, callback: (err: IErrorResponse, response: ITracksListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates the track configuration for the specified track type. This method supports patch semantics.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track The track type to read or modify.
             */
            patch: (params: {
                editId: string;
                packageName: string;
                track: string;
                resource?: ITrack;
            }, callback: (err: IErrorResponse, response: ITrack, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * Updates the track configuration for the specified track type.
             * @params {string} editId Unique identifier for this edit.
             * @params {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @params {string} track The track type to read or modify.
             */
            update: (params: {
                editId: string;
                packageName: string;
                track: string;
                resource?: ITrack;
            }, callback: (err: IErrorResponse, response: ITrack, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var inappproducts: {
        batch: (params: {
            resource?: IInappproductsBatchRequest;
        }, callback: (err: IErrorResponse, response: IInappproductsBatchResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Delete an in-app product for an app.
         * @params {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @params {string} sku Unique identifier for the in-app product.
         */
        delete: (params: {
            packageName: string;
            sku: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns information about the in-app product specified.
         * @params {string} packageName 
         * @params {string} sku Unique identifier for the in-app product.
         */
        get: (params: {
            packageName: string;
            sku: string;
        }, callback: (err: IErrorResponse, response: IInAppProduct, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new in-app product for an app.
         * @params {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @params {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
         */
        insert: (params: {
            autoConvertMissingPrices?: boolean;
            packageName: string;
            resource?: IInAppProduct;
        }, callback: (err: IErrorResponse, response: IInAppProduct, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all the in-app products for an Android app, both subscriptions and managed in-app products..
         * @params {number} maxResults 
         * @params {string} packageName Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
         * @params {number} startIndex 
         * @params {string} token 
         */
        list: (params: {
            maxResults?: number;
            packageName: string;
            startIndex?: number;
            token?: string;
        }, callback: (err: IErrorResponse, response: IInappproductsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the details of an in-app product. This method supports patch semantics.
         * @params {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @params {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @params {string} sku Unique identifier for the in-app product.
         */
        patch: (params: {
            autoConvertMissingPrices?: boolean;
            packageName: string;
            sku: string;
            resource?: IInAppProduct;
        }, callback: (err: IErrorResponse, response: IInAppProduct, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the details of an in-app product.
         * @params {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @params {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @params {string} sku Unique identifier for the in-app product.
         */
        update: (params: {
            autoConvertMissingPrices?: boolean;
            packageName: string;
            sku: string;
            resource?: IInAppProduct;
        }, callback: (err: IErrorResponse, response: IInAppProduct, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var purchases: {
        products: {
            /**
             * Checks the purchase and consumption status of an inapp item.
             * @params {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
             * @params {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
             * @params {string} token The token provided to the user's device when the inapp product was purchased.
             */
            get: (params: {
                packageName: string;
                productId: string;
                token: string;
            }, callback: (err: IErrorResponse, response: IProductPurchase, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
        subscriptions: {
            /**
             * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
             * @params {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @params {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @params {string} token The token provided to the user's device when the subscription was purchased.
             */
            cancel: (params: {
                packageName: string;
                subscriptionId: string;
                token: string;
            }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
            /**
             * Checks whether a user's subscription purchase is valid and returns its expiry time.
             * @params {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @params {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @params {string} token The token provided to the user's device when the subscription was purchased.
             */
            get: (params: {
                packageName: string;
                subscriptionId: string;
                token: string;
            }, callback: (err: IErrorResponse, response: ISubscriptionPurchase, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    interface IApk {
        /**
         * Information about the binary payload of this APK.
         */
        binary: IApkBinary;
        /**
         * The version code of the APK, as specified in the APK's manifest file.
         */
        versionCode: number; // int32
    }
    /**
     * Represents the binary payload of an APK.
     */
    interface IApkBinary {
        /**
         * A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
         */
        sha1: string;
    }
    interface IApkListing {
        /**
         * The language code, in BCP 47 format (eg "en-US").
         */
        language: string;
        /**
         * Describe what's new in your APK.
         */
        recentChanges: string;
    }
    interface IApkListingsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse".
         */
        kind: string;
        listings: IApkListing[];
    }
    interface IApksListResponse {
        apks: IApk[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse".
         */
        kind: string;
    }
    interface IAppDetails {
        /**
         * The user-visible support email for this app.
         */
        contactEmail: string;
        /**
         * The user-visible support telephone number for this app.
         */
        contactPhone: string;
        /**
         * The user-visible website for this app.
         */
        contactWebsite: string;
        /**
         * Default language code, in BCP 47 format (eg "en-US").
         */
        defaultLanguage: string;
    }
    /**
     * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
     */
    interface IAppEdit {
        /**
         * The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch).
         */
        expiryTimeSeconds: string;
        /**
         * The ID of the edit that can be used in subsequent API calls.
         */
        id: string;
    }
    interface IExpansionFile {
        /**
         * If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes.
         */
        fileSize: string; // int64
        /**
         * If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set.
         */
        referencesVersion: number; // int32
    }
    interface IExpansionFilesUploadResponse {
        expansionFile: IExpansionFile;
    }
    interface IImage {
        /**
         * A unique id representing this image.
         */
        id: string;
        /**
         * A sha1 hash of the image that was uploaded.
         */
        sha1: string;
        /**
         * A URL that will serve a preview of the image.
         */
        url: string;
    }
    interface IImagesDeleteAllResponse {
        deleted: IImage[];
    }
    interface IImagesListResponse {
        images: IImage[];
    }
    interface IImagesUploadResponse {
        image: IImage;
    }
    interface IInAppProduct {
        /**
         * The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB".
         */
        defaultLanguage: string;
        /**
         * Default price cannot be zero. In-app products can never be free. Default price is always in the developer's Checkout merchant currency.
         */
        defaultPrice: IPrice;
        /**
         * List of localized title and description data.
         */
        listings: {
            [name:string]: IInAppProductListing;
        };
        /**
         * The package name of the parent app.
         */
        packageName: string;
        /**
         * Prices per buyer region. None of these prices should be zero. In-app products can never be free.
         */
        prices: {
            [name:string]: IPrice;
        };
        /**
         * Purchase type enum value. Unmodifiable after creation.
         */
        purchaseType: string;
        /**
         * The stock-keeping-unit (SKU) of the product, unique within an app.
         */
        sku: string;
        status: string;
        /**
         * The period of the subscription (if any), i.e. period at which payments must happen. Defined as ISO 8601 duration, i.e. "P1M" for 1 month period.
         */
        subscriptionPeriod: string;
        /**
         * Trial duration (if any) of the subscription, defined as ISO 8601. i.e. "P10D" means an initial period of 10 days during which ownership is granted prior to any payment. Acceptable values are between "P7D" and "P999D". Seasonal subscriptions cannot have a trial period.
         */
        trialPeriod: string;
    }
    interface IInAppProductListing {
        description: string;
        title: string;
    }
    interface IInappproductsBatchRequest {
        entrys: IInappproductsBatchRequestEntry[];
    }
    interface IInappproductsBatchRequestEntry {
        batchId: number; // uint32
        inappproductsinsertrequest: IInappproductsInsertRequest;
        inappproductsupdaterequest: IInappproductsUpdateRequest;
        methodName: string;
    }
    interface IInappproductsBatchResponse {
        entrys: IInappproductsBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsBatchResponse".
         */
        kind: string;
    }
    interface IInappproductsBatchResponseEntry {
        batchId: number; // uint32
        inappproductsinsertresponse: IInappproductsInsertResponse;
        inappproductsupdateresponse: IInappproductsUpdateResponse;
    }
    interface IInappproductsInsertRequest {
        inappproduct: IInAppProduct;
    }
    interface IInappproductsInsertResponse {
        inappproduct: IInAppProduct;
    }
    interface IInappproductsListResponse {
        inappproduct: IInAppProduct[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse".
         */
        kind: string;
        pageInfo: IPageInfo;
        tokenPagination: ITokenPagination;
    }
    interface IInappproductsUpdateRequest {
        inappproduct: IInAppProduct;
    }
    interface IInappproductsUpdateResponse {
        inappproduct: IInAppProduct;
    }
    interface IListing {
        /**
         * Full description of the app; this may be up to 4000 characters in length.
         */
        fullDescription: string;
        /**
         * Language localization code (for example, "de-AT" for Austrian German).
         */
        language: string;
        /**
         * Short description of the app (previously known as promo text); this may be up to 80 characters in length.
         */
        shortDescription: string;
        /**
         * App's localized title.
         */
        title: string;
        /**
         * URL of a promotional YouTube video for the app.
         */
        video: string;
    }
    interface IListingsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse".
         */
        kind: string;
        listings: IListing[];
    }
    interface IPageInfo {
        resultPerPage: number; // int32
        startIndex: number; // int32
        totalResults: number; // int32
    }
    interface IPrice {
        /**
         * 3 letter Currency code, as defined by ISO 4217.
         */
        currency: string;
        /**
         * The price in millionths of the currency base unit represented as a string.
         */
        priceMicros: string;
    }
    /**
     * A ProductPurchase resource indicates the status of a user's inapp product purchase.
     */
    interface IProductPurchase {
        /**
         * The consumption state of the inapp product. Possible values are:  
         * - Yet to be consumed 
         * - Consumed
         */
        consumptionState: number; // int32
        /**
         * A developer-specified string that contains supplemental information about an order.
         */
        developerPayload: string;
        /**
         * This kind represents an inappPurchase object in the androidpublisher service.
         */
        kind: string;
        /**
         * The purchase state of the order. Possible values are:  
         * - Purchased 
         * - Cancelled
         */
        purchaseState: number; // int32
        /**
         * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
         */
        purchaseTimeMillis: string; // int64
    }
    /**
     * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
     */
    interface ISubscriptionPurchase {
        /**
         * Whether the subscription will automatically be renewed when it reaches its current expiry time.
         */
        autoRenewing: boolean;
        /**
         * Time at which the subscription will expire, in milliseconds since Epoch.
         */
        expiryTimeMillis: string; // int64
        /**
         * This kind represents a subscriptionPurchase object in the androidpublisher service.
         */
        kind: string;
        /**
         * Time at which the subscription was granted, in milliseconds since Epoch.
         */
        startTimeMillis: string; // int64
    }
    interface ITesters {
        googleGroups: string[];
        googlePlusCommunities: string[];
    }
    interface ITokenPagination {
        nextPageToken: string;
        previousPageToken: string;
    }
    interface ITrack {
        track: string;
        userFraction: number; // double
        versionCodes: number /* int32 */ [];
    }
    interface ITracksListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse".
         */
        kind: string;
        tracks: ITrack[];
    }
}
