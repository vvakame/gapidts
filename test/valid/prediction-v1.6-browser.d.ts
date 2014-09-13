// Type definitions for Google Prediction API v1.6
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
             * @params {string} project The project associated with the model.
             */
            predict: (params: {
                hostedModelName: string;
                project: string;
                resource?: IInput;
            }) => { execute(callback: (data: IResponse<IOutput>, original: string) => void):void; };
        };
        var trainedmodels: {
            /**
             * Get analysis of the model and the data the model was trained on.
             * @params {string} id The unique name for the predictive model.
             * @params {string} project The project associated with the model.
             */
            analyze: (params: {
                id: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IAnalyze>, original: string) => void):void; };
            /**
             * Delete a trained model.
             * @params {string} id The unique name for the predictive model.
             * @params {string} project The project associated with the model.
             */
            delete: (params: {
                id: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Check training status of your model.
             * @params {string} id The unique name for the predictive model.
             * @params {string} project The project associated with the model.
             */
            get: (params: {
                id: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IInsert2>, original: string) => void):void; };
            /**
             * Train a Prediction API model.
             * @params {string} project The project associated with the model.
             */
            insert: (params: {
                project: string;
                resource?: IInsert;
            }) => { execute(callback: (data: IResponse<IInsert2>, original: string) => void):void; };
            /**
             * List available models.
             * @params {number} maxResults Maximum number of results to return.
             * @params {string} pageToken Pagination token.
             * @params {string} project The project associated with the model.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                project: string;
            }) => { execute(callback: (data: IResponse<IList>, original: string) => void):void; };
            /**
             * Submit model id and request a prediction.
             * @params {string} id The unique name for the predictive model.
             * @params {string} project The project associated with the model.
             */
            predict: (params: {
                id: string;
                project: string;
                resource?: IInput;
            }) => { execute(callback: (data: IResponse<IOutput>, original: string) => void):void; };
            /**
             * Add new data to a trained model.
             * @params {string} id The unique name for the predictive model.
             * @params {string} project The project associated with the model.
             */
            update: (params: {
                id: string;
                project: string;
                resource?: IUpdate;
            }) => { execute(callback: (data: IResponse<IInsert2>, original: string) => void):void; };
        };
        interface IAnalyze {
            /**
             * Description of the data the model was trained on.
             */
            dataDescription: {
                features: {
                    categorical: {
                        count: string; // int64
                        values: {
                            count: string; // int64
                            value: string;
                        }[];
                    };
                    index: string; // int64
                    numeric: {
                        count: string; // int64
                        mean: string;
                        variance: string;
                    };
                    text: {
                        count: string; // int64
                    };
                }[];
                outputFeature: {
                    numeric: {
                        count: string; // int64
                        mean: string;
                        variance: string;
                    };
                    text: {
                        count: string; // int64
                        value: string;
                    }[];
                };
            };
            /**
             * List of errors with the data.
             */
            errors: {
                [name:string]: string;
            }[];
            /**
             * The unique name for the predictive model.
             */
            id: string;
            /**
             * What kind of resource this is.
             */
            kind: string;
            /**
             * Description of the model.
             */
            modelDescription: {
                confusionMatrix: {
                    [name:string]: {
                        [name:string]: string;
                    };
                };
                confusionMatrixRowTotals: {
                    [name:string]: string;
                };
                modelinfo: IInsert2;
            };
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
        }
        interface IInput {
            /**
             * Input to the model for a prediction.
             */
            input: {
                csvInstance: any[];
            };
        }
        interface IInsert {
            /**
             * The unique name for the predictive model.
             */
            id: string;
            /**
             * Type of predictive model (classification or regression).
             */
            modelType: string;
            /**
             * The Id of the model to be copied over.
             */
            sourceModel: string;
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
             * Instances to train model on.
             */
            trainingInstances: {
                csvInstance: any[];
                output: string;
            }[];
            /**
             * A class weighting function, which allows the importance weights for class labels to be specified (Categorical models only).
             */
            utility: {
                [name:string]: number /* double */ ;
            }[];
        }
        interface IInsert2 {
            /**
             * Insert time of the model (as a RFC 3339 timestamp).
             */
            created: string; // date-time
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
                classWeightedAccuracy: string;
                classificationAccuracy: string;
                meanSquaredError: string;
                modelType: string;
                numberInstances: string; // int64
                numberLabels: string; // int64
            };
            /**
             * Type of predictive model (CLASSIFICATION or REGRESSION).
             */
            modelType: string;
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
             * Training completion time (as a RFC 3339 timestamp).
             */
            trainingComplete: string; // date-time
            /**
             * The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
             */
            trainingStatus: string;
        }
        interface IList {
            /**
             * List of models.
             */
            items: IInsert2[];
            /**
             * What kind of resource this is.
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
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
             * The most likely class label (Categorical models only).
             */
            outputLabel: string;
            /**
             * A list of class labels with their estimated probabilities (Categorical models only).
             */
            outputMulti: {
                label: string;
                score: string;
            }[];
            /**
             * The estimated regression value (Regression models only).
             */
            outputValue: string;
            /**
             * A URL to re-request this resource.
             */
            selfLink: string;
        }
        interface IUpdate {
            /**
             * The input features for this instance.
             */
            csvInstance: any[];
            /**
             * The generic output value - could be regression or class label.
             */
            output: string;
        }
    }
}
