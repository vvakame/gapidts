declare module gapi.client {
    module tasks {
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
