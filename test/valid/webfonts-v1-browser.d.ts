// Type definitions for Google Google Fonts Developer API v1
// Project: https://developers.google.com/fonts/docs/developer_api
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Google Fonts Developer API.
     */
    module webfonts {
        var webfonts: {
            /**
             * Retrieves the list of fonts currently served by the Google Fonts Developer API
             * @params {string} sort Enables sorting of the list
             */
            list: (params: {
                sort?: string;
            }) => {
                execute(callback: (data: IResponse<IWebfontList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IWebfontList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IWebfont {
            /**
             * The category of the font.
             */
            category: string;
            /**
             * The name of the font.
             */
            family: string;
            /**
             * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
             */
            files: {
                [name:string]: string;
            };
            /**
             * This kind represents a webfont object in the webfonts service.
             */
            kind: string;
            /**
             * The date (format "yyyy-MM-dd") the font was modified for the last time.
             */
            lastModified: string; // date
            /**
             * The scripts supported by the font.
             */
            subsets: string[];
            /**
             * The available variants for the font.
             */
            variants: string[];
            /**
             * The font version.
             */
            version: string;
        }
        interface IWebfontList {
            /**
             * The list of fonts currently served by the Google Fonts API.
             */
            items: IWebfont[];
            /**
             * This kind represents a list of webfont objects in the webfonts service.
             */
            kind: string;
        }
    }
}
