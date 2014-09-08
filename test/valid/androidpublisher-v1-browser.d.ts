// Type definitions for Google Google Play Android Developer API v1
// Project: https://developers.google.com/android-publisher
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets Android application developers access their Google Play accounts.
     */
    module androidpublisher {
        var purchases: {
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
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
            }) => { execute(callback: (data: IResponse<ISubscriptionPurchase>, original: string) => void):void; };
        };
        /**
         * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
         */
        interface ISubscriptionPurchase {
            /**
             * Whether the subscription will automatically be renewed when it reaches its current expiry time.
             */
            autoRenewing: boolean;
            /**
             * Time at which the subscription was granted, in milliseconds since Epoch.
             */
            initiationTimestampMsec: string; // int64
            /**
             * This kind represents a subscriptionPurchase object in the androidpublisher service.
             */
            kind: string;
            /**
             * Time at which the subscription will expire, in milliseconds since Epoch.
             */
            validUntilTimestampMsec: string; // int64
        }
    }
}
