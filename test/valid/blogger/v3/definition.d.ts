declare module gapi.client {
    module blogger {
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
