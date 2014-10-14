// Type definitions for Google Prediction API v1.4
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/devstorage.full_control
//   Manage your data and permissions in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_only
//   View your data in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_write
//   Manage your data in Google Cloud Storage
// https://www.googleapis.com/auth/prediction
//   Manage your data in the Google Prediction API

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
     */
    module prediction {
        var hostedmodels: {
            /**
             * Submit input and request an output against a hosted model.
             * @params {string} hostedModelName The name of a hosted model.
             */
            predict: (params: {
                hostedModelName: string;
                resource?: IInput;
            }) => {
                execute(callback: (data: IResponse<IOutput>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var trainedmodels: {
            /**
             * Delete a trained model.
             * @params {string} id The unique name for the predictive model.
             */
            delete: (params: {
                id: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Check training status of your model.
             * @params {string} id The unique name for the predictive model.
             */
            get: (params: {
                id: string;
            }) => {
                execute(callback: (data: IResponse<ITraining>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Begin training your model.
             */
            insert: (params: {
                resource?: ITraining;
            }) => {
                execute(callback: (data: IResponse<ITraining>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Submit model id and request a prediction
             * @params {string} id The unique name for the predictive model.
             */
            predict: (params: {
                id: string;
                resource?: IInput;
            }) => {
                execute(callback: (data: IResponse<IOutput>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IOutput>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Add new data to a trained model.
             * @params {string} id The unique name for the predictive model.
             */
            update: (params: {
                id: string;
                resource?: IUpdate;
            }) => {
                execute(callback: (data: IResponse<ITraining>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITraining>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IInput {
            /**
             * Input to the model for a prediction
             */
            input: {
                csvInstance: any[];
            };
        }
        interface IOutput {
            /**
             * The unique name for the predictive model.
             */
            id: string;
            /**
             * What kind of resource this is.
             */
            kind: string;
            /**
             * The most likely class label [Categorical models only].
             */
            outputLabel: string;
            /**
             * A list of class labels with their estimated probabilities [Categorical models only].
             */
            outputMulti: {
                label: string;
                score: number; // double
            }[];
            /**
             * The estimated regression value [Regression models only].
             */
            outputValue: number; // double
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
        }
        interface ITraining {
            /**
             * Data Analysis.
             */
            dataAnalysis: {
                warnings: string[];
            };
            /**
             * The unique name for the predictive model.
             */
            id: string;
            /**
             * What kind of resource this is.
             */
            kind: string;
            /**
             * Model metadata.
             */
            modelInfo: {
                classWeightedAccuracy: number; // double
                classificationAccuracy: number; // double
                confusionMatrix: {
                    [name:string]: {
                        [name:string]: number /* double */ ;
                    };
                };
                confusionMatrixRowTotals: {
                    [name:string]: number /* double */ ;
                };
                meanSquaredError: number; // double
                modelType: string;
                numberInstances: string; // int64
                numberLabels: string; // int64
            };
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
            /**
             * Google storage location of the training data file.
             */
            storageDataLocation: string;
            /**
             * Google storage location of the preprocessing pmml file.
             */
            storagePMMLLocation: string;
            /**
             * Google storage location of the pmml model file.
             */
            storagePMMLModelLocation: string;
            /**
             * The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
             */
            trainingStatus: string;
            /**
             * A class weighting function, which allows the importance weights for class labels to be specified [Categorical models only].
             */
            utility: {
                [name:string]: number /* double */ ;
            }[];
        }
        interface IUpdate {
            /**
             * The input features for this instance
             */
            csvInstance: any[];
            /**
             * The class label of this instance
             */
            label: string;
            /**
             * The generic output value - could be regression value or class label
             */
            output: string;
        }
    }
}
