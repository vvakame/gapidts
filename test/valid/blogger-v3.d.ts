declare module gapi.client {
    module blogger {
        var blogUserInfos: {
            get: (params: {
                blogId: string;
                maxPosts?: number;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlogUserInfo
        };
        var blogs: {
            get: (params: {
                blogId: string;
                maxPosts?: number;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlog
            getByUrl: (params: {
                url: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlog
            listByUser: (params: {
                fetchUserInfo?: boolean;
                role?: string;
                userId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlogList
        };
        var comments: {
            approve: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            delete: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                blogId: string;
                commentId: string;
                postId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                postId: string;
                startDate?: string;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentList
            listByBlog: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                startDate?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentList
            markAsSpam: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            removeContent: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
        };
        var pageViews: {
            get: (params: {
                blogId: string;
                range?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPageviews
        };
        var pages: {
            delete: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                blogId: string;
                pageId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            insert: (params: {
                blogId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            list: (params: {
                blogId: string;
                fetchBodies?: boolean;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPageList
            patch: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
            update: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPage
        };
        var postUserInfos: {
            get: (params: {
                blogId: string;
                maxComments?: number;
                postId: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostUserInfo
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                labels?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                startDate?: string;
                status?: string;
                userId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostUserInfosList
        };
        var posts: {
            delete: (params: {
                blogId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            get: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            getByPath: (params: {
                blogId: string;
                maxComments?: number;
                path: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            insert: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                isDraft?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            list: (params: {
                blogId: string;
                endDate?: string;
                fetchBodies?: boolean;
                fetchImages?: boolean;
                labels?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                startDate?: string;
                status?: string;
                view?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostList
            patch: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                publish?: boolean;
                revert?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            publish: (params: {
                blogId: string;
                postId: string;
                publishDate?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            revert: (params: {
                blogId: string;
                postId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
            search: (params: {
                blogId: string;
                fetchBodies?: boolean;
                orderBy?: string;
                q: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPostList
            update: (params: {
                blogId: string;
                fetchBody?: boolean;
                fetchImages?: boolean;
                maxComments?: number;
                postId: string;
                publish?: boolean;
                revert?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPost
        };
        var users: {
            get: (params: {
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IUser
        };
        interface IBlog {
            customMetaData: string;
            description: string;
            id: string;
            kind: string;
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            name: string;
            pages: {
                selfLink: string;
                totalItems: number; // int32
            };
            posts: {
                items: IPost[];
                selfLink: string;
                totalItems: number; // int32
            };
            published: string; // date-time
            selfLink: string;
            updated: string; // date-time
            url: string;
        }
        interface IBlogList {
            blogUserInfos: IBlogUserInfo[];
            items: IBlog[];
            kind: string;
        }
        interface IBlogPerUserInfo {
            blogId: string;
            hasAdminAccess: boolean;
            kind: string;
            photosAlbumKey: string;
            role: string;
            userId: string;
        }
        interface IBlogUserInfo {
            blog: IBlog;
            blog_user_info: IBlogPerUserInfo;
            kind: string;
        }
        interface IComment {
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            blog: {
                id: string;
            };
            content: string;
            id: string;
            inReplyTo: {
                id: string;
            };
            kind: string;
            post: {
                id: string;
            };
            published: string; // date-time
            selfLink: string;
            status: string;
            updated: string; // date-time
        }
        interface ICommentList {
            items: IComment[];
            kind: string;
            nextPageToken: string;
            prevPageToken: string;
        }
        interface IPage {
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            blog: {
                id: string;
            };
            content: string;
            id: string;
            kind: string;
            published: string; // date-time
            selfLink: string;
            status: string;
            title: string;
            updated: string; // date-time
            url: string;
        }
        interface IPageList {
            items: IPage[];
            kind: string;
        }
        interface IPageviews {
            blogId: string; // int64
            counts: {
                count: string; // int64
                timeRange: string;
            }[];
            kind: string;
        }
        interface IPost {
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            blog: {
                id: string;
            };
            content: string;
            customMetaData: string;
            id: string;
            images: {
                url: string;
            }[];
            kind: string;
            labels: string[];
            location: {
                lat: number; // double
                lng: number; // double
                name: string;
                span: string;
            };
            published: string; // date-time
            replies: {
                items: IComment[];
                selfLink: string;
                totalItems: string; // int64
            };
            selfLink: string;
            status: string;
            title: string;
            titleLink: string;
            updated: string; // date-time
            url: string;
        }
        interface IPostList {
            items: IPost[];
            kind: string;
            nextPageToken: string;
        }
        interface IPostPerUserInfo {
            blogId: string;
            hasEditAccess: boolean;
            kind: string;
            postId: string;
            userId: string;
        }
        interface IPostUserInfo {
            kind: string;
            post: IPost;
            post_user_info: IPostPerUserInfo;
        }
        interface IPostUserInfosList {
            items: IPostUserInfo[];
            kind: string;
            nextPageToken: string;
        }
        interface IUser {
            about: string;
            blogs: {
                selfLink: string;
            };
            created: string; // date-time
            displayName: string;
            id: string;
            kind: string;
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            selfLink: string;
            url: string;
        }
    }
}
