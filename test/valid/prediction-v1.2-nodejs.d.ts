// Type definitions for Google Prediction API v1.2
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function prediction(version:string):typeof googleapis.prediction;
    function prediction(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.prediction;
}
/**
 * Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 */
declare module googleapis.prediction {
    var hostedmodels: {
        /**
         * Submit input and request an output against a hosted model
         * @params {string} hostedModelName The name of a hosted model
         */
        predict: (params: {
            hostedModelName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInput;
        }, callback: (err: IErrorResponse, response: IOutput, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var training: {
        /**
         * Delete a trained model
         * @params {string} data mybucket/mydata resource in Google Storage
         */
        delete: (params: {
            data: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Check training status of your model
         * @params {string} data mybucket/mydata resource in Google Storage
         */
        get: (params: {
            data: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Begin training your model
         * @params {string} data mybucket/mydata resource in Google Storage
         */
        insert: (params: {
            data?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITraining;
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Add new data to a trained model
         * @params {string} data mybucket/mydata resource in Google Storage
         */
        update: (params: {
            data: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUpdate;
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * Submit data and request a prediction
     * @params {string} data mybucket%2Fmydata resource in Google Storage
     */
    var predict: (params: {
        data: string;
        key?: string; // API_KEY
        auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        resource?: IInput;
    }, callback: (err: IErrorResponse, response: IOutput, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    interface IInput {
        input: {
            csvInstance: any[];
        };
    }
    interface IOutput {
        id: string;
        kind: string;
        outputLabel: string;
        outputMulti: {
            label: string;
            score: number; // double
        }[];
        outputValue: number; // double
        selfLink: string;
    }
    interface ITraining {
        id: string;
        kind: string;
        modelInfo: {
            classificationAccuracy: number; // double
            meanSquaredError: number; // double
            modelType: string;
        };
        selfLink: string;
        trainingStatus: string;
    }
    interface IUpdate {
        /**
         * The true class label of this instance
         */
        classLabel: string;
        /**
         * The input features for this instance
         */
        csvInstance: any[];
    }
}
