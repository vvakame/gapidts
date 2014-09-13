// Type definitions for Google Prediction API v1.3
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
             * Submit input and request an output against a hosted model
             * @params {string} hostedModelName The name of a hosted model
             */
            predict: (params: {
                hostedModelName: string;
                resource?: IInput;
            }) => { execute(callback: (data: IResponse<IOutput>, original: string) => void):void; };
        };
        var training: {
            /**
             * Delete a trained model
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            delete: (params: {
                data: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Check training status of your model
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            get: (params: {
                data: string;
            }) => { execute(callback: (data: IResponse<ITraining>, original: string) => void):void; };
            /**
             * Begin training your model
             */
            insert: (params: {
                resource?: ITraining;
            }) => { execute(callback: (data: IResponse<ITraining>, original: string) => void):void; };
            /**
             * Submit data and request a prediction
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            predict: (params: {
                data: string;
                resource?: IInput;
            }) => { execute(callback: (data: IResponse<IOutput>, original: string) => void):void; };
            /**
             * Add new data to a trained model
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            update: (params: {
                data: string;
                resource?: IUpdate;
            }) => { execute(callback: (data: IResponse<ITraining>, original: string) => void):void; };
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
             * The most likely class [Categorical models only].
             */
            outputLabel: string;
            /**
             * A list of classes with their estimated probabilities [Categorical models only].
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
                numberClasses: string; // int64
                numberInstances: string; // int64
            };
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
            /**
             * The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
             */
            trainingStatus: string;
            /**
             * A class weighting function, which allows the importance weights for classes to be specified [Categorical models only].
             */
            utility: {
                [name:string]: number /* double */ ;
            }[];
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
}
