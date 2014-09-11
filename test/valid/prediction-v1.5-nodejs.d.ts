// Type definitions for Google Prediction API v1.5
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
         * Submit input and request an output against a hosted model.
         * @params {string} hostedModelName The name of a hosted model.
         */
        predict: (params: {
            hostedModelName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInput;
        }, callback: (err: IErrorResponse, response: IOutput, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var trainedmodels: {
        /**
         * Get analysis of the model and the data the model was trained on.
         * @params {string} id The unique name for the predictive model.
         */
        analyze: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAnalyze, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Delete a trained model.
         * @params {string} id The unique name for the predictive model.
         */
        delete: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Check training status of your model.
         * @params {string} id The unique name for the predictive model.
         */
        get: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Begin training your model.
         */
        insert: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITraining;
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List available models.
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Pagination token
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Submit model id and request a prediction.
         * @params {string} id The unique name for the predictive model.
         */
        predict: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInput;
        }, callback: (err: IErrorResponse, response: IOutput, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Add new data to a trained model.
         * @params {string} id The unique name for the predictive model.
         */
        update: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUpdate;
        }, callback: (err: IErrorResponse, response: ITraining, incomingMessage: any /* http.IncomingMessage */) => void) => void;
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
                    mean: number; // double
                    variance: number; // double
                };
                text: {
                    count: string; // int64
                };
            }[];
            outputFeature: {
                numeric: {
                    count: string; // int64
                    mean: number; // double
                    variance: number; // double
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
                    [name:string]: number /* double */ ;
                };
            };
            confusionMatrixRowTotals: {
                [name:string]: number /* double */ ;
            };
            modelinfo: ITraining;
        };
        /**
         * A URL to re-request this resource.
         */
        selfLink: string;
    }
    interface IInput {
        /**
         * Input to the model for a prediction
         */
        input: {
            csvInstance: any[];
        };
    }
    interface IList {
        /**
         * List of models.
         */
        items: ITraining[];
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
            classWeightedAccuracy: number; // double
            classificationAccuracy: number; // double
            meanSquaredError: number; // double
            modelType: string;
            numberInstances: string; // int64
            numberLabels: string; // int64
        };
        /**
         * Type of predictive model (classification or regression)
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
         * Instances to train model on.
         */
        trainingInstances: {
            csvInstance: any[];
            output: string;
        }[];
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
