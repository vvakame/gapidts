// Type definitions for Google TaskQueue API v1beta1
// Project: https://developers.google.com/appengine/docs/python/taskqueue/rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/taskqueue
//   Manage your Tasks and Taskqueues
// https://www.googleapis.com/auth/taskqueue.consumer
//   Consume Tasks from your Taskqueues

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Lets you access a Google App Engine Pull Task Queue over REST.
     */
    module taskqueue {
        var taskqueues: {
            /**
             * Get detailed information about a TaskQueue.
             * @params {boolean} getStats Whether to get stats. Optional.
             * @params {string} project The project under which the queue lies.
             * @params {string} taskqueue The id of the taskqueue to get the properties of.
             */
            get: (params: {
                getStats?: boolean;
                project: string;
                taskqueue: string;
            }) => {
                execute(callback: (data: IResponse<ITaskQueue>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITaskQueue>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var tasks: {
            /**
             * Delete a task from a TaskQueue.
             * @params {string} project The project under which the queue lies.
             * @params {string} task The id of the task to delete.
             * @params {string} taskqueue The taskqueue to delete a task from.
             */
            delete: (params: {
                project: string;
                task: string;
                taskqueue: string;
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
             * Get a particular task from a TaskQueue.
             * @params {string} project The project under which the queue lies.
             * @params {string} task The task to get properties of.
             * @params {string} taskqueue The taskqueue in which the task belongs.
             */
            get: (params: {
                project: string;
                task: string;
                taskqueue: string;
            }) => {
                execute(callback: (data: IResponse<ITask>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITask>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lease 1 or more tasks from a TaskQueue.
             * @params {number} leaseSecs The lease in seconds.
             * @params {number} numTasks The number of tasks to lease.
             * @params {string} project The project under which the queue lies.
             * @params {string} taskqueue The taskqueue to lease a task from.
             */
            lease: (params: {
                leaseSecs: number;
                numTasks: number;
                project: string;
                taskqueue: string;
            }) => {
                execute(callback: (data: IResponse<ITasks>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List Tasks in a TaskQueue
             * @params {string} project The project under which the queue lies.
             * @params {string} taskqueue The id of the taskqueue to list tasks from.
             */
            list: (params: {
                project: string;
                taskqueue: string;
            }) => {
                execute(callback: (data: IResponse<ITasks2>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ITasks2>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface ITask {
            /**
             * Time (in seconds since the epoch) at which the task was enqueued.
             */
            enqueueTimestamp: string; // int64
            /**
             * Name of the task.
             */
            id: string;
            /**
             * The kind of object returned, in this case set to task.
             */
            kind: string;
            /**
             * Time (in seconds since the epoch) at which the task lease will expire. This value is 0 if the task isnt currently leased out to a worker.
             */
            leaseTimestamp: string; // int64
            /**
             * A bag of bytes which is the task payload. The payload on the JSON side is always Base64 encoded.
             */
            payloadBase64: string;
            /**
             * Name of the queue that the task is in.
             */
            queueName: string;
        }
        interface ITaskQueue {
            /**
             * ACLs that are applicable to this TaskQueue object.
             */
            acl: {
                adminEmails: string[];
                consumerEmails: string[];
                producerEmails: string[];
            };
            /**
             * Name of the taskqueue.
             */
            id: string;
            /**
             * The kind of REST object returned, in this case taskqueue.
             */
            kind: string;
            /**
             * The number of times we should lease out tasks before giving up on them. If unset we lease them out forever until a worker deletes the task.
             */
            maxLeases: number; // int32
            /**
             * Statistics for the TaskQueue object in question.
             */
            stats: {
                leasedLastHour: string; // int64
                leasedLastMinute: string; // int64
                oldestTask: string; // int64
                totalTasks: number; // int32
            };
        }
        interface ITasks {
            /**
             * The actual list of tasks returned as a result of the lease operation.
             */
            items: ITask[];
            /**
             * The kind of object returned, a list of tasks.
             */
            kind: string;
        }
        interface ITasks2 {
            /**
             * The actual list of tasks currently active in the TaskQueue.
             */
            items: ITask[];
            /**
             * The kind of object returned, a list of tasks.
             */
            kind: string;
        }
    }
}
