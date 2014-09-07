// Type definitions for Google Prediction API v1.2
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

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
            }) => { execute(callback: (data: IOutput, original: string) => void):void; };
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
            }) => { execute(callback: (data: ITraining, original: string) => void):void; };
            /**
             * Begin training your model
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            insert: (params: {
                data?: string;
                resource?: ITraining;
            }) => { execute(callback: (data: ITraining, original: string) => void):void; };
            /**
             * Add new data to a trained model
             * @params {string} data mybucket/mydata resource in Google Storage
             */
            update: (params: {
                data: string;
                resource?: IUpdate;
            }) => { execute(callback: (data: ITraining, original: string) => void):void; };
        };
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
}
