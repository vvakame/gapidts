// Type definitions for Google TaskQueue API v1beta2
// Project: https://developers.google.com/appengine/docs/python/taskqueue/rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

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
            }) => { execute(callback: (data: ITaskQueue, original: string) => void):void; };
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
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
            }) => { execute(callback: (data: ITask, original: string) => void):void; };
            /**
             * Insert a new task in a TaskQueue
             * @params {string} project The project under which the queue lies
             * @params {string} taskqueue The taskqueue to insert the task into
             */
            insert: (params: {
                project: string;
                taskqueue: string;
                resource?: ITask;
            }) => { execute(callback: (data: ITask, original: string) => void):void; };
            /**
             * Lease 1 or more tasks from a TaskQueue.
             * @params {boolean} groupByTag When true, all returned tasks will have the same tag
             * @params {number} leaseSecs The lease in seconds.
             * @params {number} numTasks The number of tasks to lease.
             * @params {string} project The project under which the queue lies.
             * @params {string} tag The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag will be that of the oldest task by eta, i.e. the first available tag
             * @params {string} taskqueue The taskqueue to lease a task from.
             */
            lease: (params: {
                groupByTag?: boolean;
                leaseSecs: number;
                numTasks: number;
                project: string;
                tag?: string;
                taskqueue: string;
            }) => { execute(callback: (data: ITasks, original: string) => void):void; };
            /**
             * List Tasks in a TaskQueue
             * @params {string} project The project under which the queue lies.
             * @params {string} taskqueue The id of the taskqueue to list tasks from.
             */
            list: (params: {
                project: string;
                taskqueue: string;
            }) => { execute(callback: (data: ITasks2, original: string) => void):void; };
            /**
             * Update tasks that are leased out of a TaskQueue. This method supports patch semantics.
             * @params {number} newLeaseSeconds The new lease in seconds.
             * @params {string} project The project under which the queue lies.
             * @params {string} task 
             * @params {string} taskqueue 
             */
            patch: (params: {
                newLeaseSeconds: number;
                project: string;
                task: string;
                taskqueue: string;
                resource?: ITask;
            }) => { execute(callback: (data: ITask, original: string) => void):void; };
            /**
             * Update tasks that are leased out of a TaskQueue.
             * @params {number} newLeaseSeconds The new lease in seconds.
             * @params {string} project The project under which the queue lies.
             * @params {string} task 
             * @params {string} taskqueue 
             */
            update: (params: {
                newLeaseSeconds: number;
                project: string;
                task: string;
                taskqueue: string;
                resource?: ITask;
            }) => { execute(callback: (data: ITask, original: string) => void):void; };
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
            /**
             * The number of leases applied to this task.
             */
            retry_count: number; // int32
            /**
             * Tag for the task, could be used later to lease tasks grouped by a specific tag.
             */
            tag: string;
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
