declare module gapi.client {
    module tasks {
        var tasklists: {
            delete: (params: {
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITaskList
            insert: () => { execute(callback: (data:any, original: string) => void):void; }; // ITaskList
            list: (params: {
                maxResults?: string;
                pageToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITaskLists
            patch: (params: {
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITaskList
            update: (params: {
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITaskList
        };
        var tasks: {
            clear: (params: {
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            delete: (params: {
                task: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                task: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITask
            insert: (params: {
                parent?: string;
                previous?: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITask
            list: (params: {
                completedMax?: string;
                completedMin?: string;
                dueMax?: string;
                dueMin?: string;
                maxResults?: string;
                pageToken?: string;
                showCompleted?: boolean;
                showDeleted?: boolean;
                showHidden?: boolean;
                tasklist: string;
                updatedMin?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITasks
            move: (params: {
                parent?: string;
                previous?: string;
                task: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITask
            patch: (params: {
                task: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITask
            update: (params: {
                task: string;
                tasklist: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITask
        };
        interface ITask {
            completed: string; // date-time
            deleted: boolean;
            due: string; // date-time
            etag: string;
            hidden: boolean;
            id: string;
            kind: string;
            links: {
                description: string;
                link: string;
                type: string;
            }[];
            notes: string;
            parent: string;
            position: string;
            selfLink: string;
            status: string;
            title: string;
            updated: string; // date-time
        }
        interface ITaskList {
            etag: string;
            id: string;
            kind: string;
            selfLink: string;
            title: string;
            updated: string; // date-time
        }
        interface ITaskLists {
            etag: string;
            items: ITaskList[];
            kind: string;
            nextPageToken: string;
        }
        interface ITasks {
            etag: string;
            items: ITask[];
            kind: string;
            nextPageToken: string;
        }
    }
}
