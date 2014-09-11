// Type definitions for Google Translate API v2
// Project: https://developers.google.com/translate/v2/using_rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function translate(version:string):typeof googleapis.translate;
}
/**
 * Lets you translate text from one language to another
 */
declare module googleapis.translate {
    var detections: {
        /**
         * Detect the language of text.
         * @params {string} q The text to detect
         */
        list: (params: {
            q: string;
        }, callback: (err: any, response: IDetectionsListResponse) => void) => void;
    };
    var languages: {
        /**
         * List the source/target languages supported by the API
         * @params {string} target the language and collation in which the localized results should be returned
         */
        list: (params: {
            target?: string;
        }, callback: (err: any, response: ILanguagesListResponse) => void) => void;
    };
    var translations: {
        /**
         * Returns text translations from one language to another.
         * @params {string} cid The customization id for translate
         * @params {string} format The format of the text
         * @params {string} q The text to translate
         * @params {string} source The source language of the text
         * @params {string} target The target language into which the text should be translated
         */
        list: (params: {
            cid?: string;
            format?: string;
            q: string;
            source?: string;
            target: string;
        }, callback: (err: any, response: ITranslationsListResponse) => void) => void;
    };
    interface IDetectionsListResponse {
        /**
         * A detections contains detection results of several text
         */
        detections: IDetectionsResource[];
    }
    /**
     * An array of languages which we detect for the given text The most likely language list first.
     */
    interface IDetectionsResource extends Array<{
        confidence: number; // float
        isReliable: boolean;
        language: string;
    }> {
    }
    interface ILanguagesListResponse {
        /**
         * List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
         */
        languages: ILanguagesResource[];
    }
    interface ILanguagesResource {
        /**
         * The language code.
         */
        language: string;
        /**
         * The localized name of the language if target parameter is given.
         */
        name: string;
    }
    interface ITranslationsListResponse {
        /**
         * Translations contains list of translation results of given text
         */
        translations: ITranslationsResource[];
    }
    interface ITranslationsResource {
        /**
         * Detected source language if source parameter is unspecified.
         */
        detectedSourceLanguage: string;
        /**
         * The translation.
         */
        translatedText: string;
    }
}
