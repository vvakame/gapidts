// Type definitions for Google Blogger API v2
// Project: https://developers.google.com/blogger/docs/2.0/json/getting_started
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/blogger
//   Manage your Blogger account

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * API for access to the data within Blogger.
     */
    module blogger {
        var blogs: {
            /**
             * Gets one blog by id.
             * @params {string} blogId The ID of the blog to get.
             */
            get: (params: {
                blogId: string;
            }) => { execute(callback: (data: IResponse<IBlog>, original: string) => void):void; };
        };
        var comments: {
            /**
             * Gets one comment by id.
             * @params {string} blogId ID of the blog to containing the comment.
             * @params {string} commentId The ID of the comment to get.
             * @params {string} postId ID of the post to fetch posts from.
             */
            get: (params: {
                blogId: string;
                commentId: string;
                postId: string;
            }) => { execute(callback: (data: IResponse<IComment>, original: string) => void):void; };
            /**
             * Retrieves the comments for a blog, possibly filtered.
             * @params {string} blogId ID of the blog to fetch comments from.
             * @params {boolean} fetchBodies Whether the body content of the comments is included.
             * @params {number} maxResults Maximum number of comments to include in the result.
             * @params {string} pageToken Continuation token if request is paged.
             * @params {string} postId ID of the post to fetch posts from.
             * @params {string} startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
             */
            list: (params: {
                blogId: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                postId: string;
                startDate?: string;
            }) => { execute(callback: (data: IResponse<ICommentList>, original: string) => void):void; };
        };
        var pages: {
            /**
             * Gets one blog page by id.
             * @params {string} blogId ID of the blog containing the page.
             * @params {string} pageId The ID of the page to get.
             */
            get: (params: {
                blogId: string;
                pageId: string;
            }) => { execute(callback: (data: IResponse<IPage>, original: string) => void):void; };
            /**
             * Retrieves pages for a blog, possibly filtered.
             * @params {string} blogId ID of the blog to fetch pages from.
             * @params {boolean} fetchBodies Whether to retrieve the Page bodies.
             */
            list: (params: {
                blogId: string;
                fetchBodies?: boolean;
            }) => { execute(callback: (data: IResponse<IPageList>, original: string) => void):void; };
        };
        var posts: {
            /**
             * Get a post by id.
             * @params {string} blogId ID of the blog to fetch the post from.
             * @params {string} postId The ID of the post
             */
            get: (params: {
                blogId: string;
                postId: string;
            }) => { execute(callback: (data: IResponse<IPost>, original: string) => void):void; };
            /**
             * Retrieves a list of posts, possibly filtered.
             * @params {string} blogId ID of the blog to fetch posts from.
             * @params {boolean} fetchBodies Whether the body content of posts is included.
             * @params {number} maxResults Maximum number of posts to fetch.
             * @params {string} pageToken Continuation token if the request is paged.
             * @params {string} startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
             */
            list: (params: {
                blogId: string;
                fetchBodies?: boolean;
                maxResults?: number;
                pageToken?: string;
                startDate?: string;
            }) => { execute(callback: (data: IResponse<IPostList>, original: string) => void):void; };
        };
        var users: {
            /**
             * Gets one user by id.
             * @params {string} userId The ID of the user to get.
             */
            get: (params: {
                userId: string;
            }) => { execute(callback: (data: IResponse<IUser>, original: string) => void):void; };
            blogs: {
                /**
                 * Retrieves a list of blogs, possibly filtered.
                 * @params {string} userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
                 */
                list: (params: {
                    userId: string;
                }) => { execute(callback: (data: IResponse<IBlogList>, original: string) => void):void; };
            };
        };
        interface IBlog {
            /**
             * The description of this blog. This is displayed underneath the title.
             */
            description: string;
            /**
             * The identifier for this resource.
             */
            id: string; // int64
            /**
             * The kind of this entry. Always blogger#blog
             */
            kind: string;
            /**
             * The locale this Blog is set to.
             */
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            /**
             * The name of this blog. This is displayed as the title.
             */
            name: string;
            /**
             * The container of pages in this blog.
             */
            pages: {
                selfLink: string;
                totalItems: number; // int32
            };
            /**
             * The container of posts in this blog.
             */
            posts: {
                selfLink: string;
                totalItems: number; // int32
            };
            /**
             * RFC 3339 date-time when this blog was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * RFC 3339 date-time when this blog was last updated.
             */
            updated: string; // date-time
            /**
             * The URL where this blog is published.
             */
            url: string;
        }
        interface IBlogList {
            /**
             * The list of Blogs this user has Authorship or Admin rights over.
             */
            items: IBlog[];
            /**
             * The kind of this entity. Always blogger#blogList
             */
            kind: string;
        }
        interface IComment {
            /**
             * The author of this Comment.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this comment.
             */
            blog: {
                id: string; // int64
            };
            /**
             * The actual content of the comment. May include HTML markup.
             */
            content: string;
            /**
             * The identifier for this resource.
             */
            id: string; // int64
            /**
             * Data about the comment this is in reply to.
             */
            inReplyTo: {
                id: string; // int64
            };
            /**
             * The kind of this entry. Always blogger#comment
             */
            kind: string;
            /**
             * Data about the post containing this comment.
             */
            post: {
                id: string; // int64
            };
            /**
             * RFC 3339 date-time when this comment was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * RFC 3339 date-time when this comment was last updated.
             */
            updated: string; // date-time
        }
        interface ICommentList {
            /**
             * The List of Comments for a Post.
             */
            items: IComment[];
            /**
             * The kind of this entry. Always blogger#commentList
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
            /**
             * Pagination token to fetch the previous page, if one exists.
             */
            prevPageToken: string;
        }
        interface IPage {
            /**
             * The author of this Page.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this Page.
             */
            blog: {
                id: string; // int64
            };
            /**
             * The body content of this Page, in HTML.
             */
            content: string;
            /**
             * The identifier for this resource.
             */
            id: string; // int64
            /**
             * The kind of this entity. Always blogger#page
             */
            kind: string;
            /**
             * RFC 3339 date-time when this Page was published.
             */
            published: string; // date-time
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The title of this entity. This is the name displayed in the Admin user interface.
             */
            title: string;
            /**
             * RFC 3339 date-time when this Page was last updated.
             */
            updated: string; // date-time
            /**
             * The URL that this Page is displayed at.
             */
            url: string;
        }
        interface IPageList {
            /**
             * The list of Pages for a Blog.
             */
            items: IPage[];
            /**
             * The kind of this entity. Always blogger#pageList
             */
            kind: string;
        }
        interface IPost {
            /**
             * The author of this Post.
             */
            author: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * Data about the blog containing this Post.
             */
            blog: {
                id: string; // int64
            };
            /**
             * The content of the Post. May contain HTML markup.
             */
            content: string;
            /**
             * The identifier of this Post.
             */
            id: string; // int64
            /**
             * The kind of this entity. Always blogger#post
             */
            kind: string;
            /**
             * The list of labels this Post was tagged with.
             */
            labels: string[];
            /**
             * RFC 3339 date-time when this Post was published.
             */
            published: string; // date-time
            /**
             * The container of comments on this Post.
             */
            replies: {
                selfLink: string;
                totalItems: string; // int64
            };
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The title of the Post.
             */
            title: string;
            /**
             * RFC 3339 date-time when this Post was last updated.
             */
            updated: string; // date-time
            /**
             * The URL where this Post is displayed.
             */
            url: string;
        }
        interface IPostList {
            /**
             * The list of Posts for this Blog.
             */
            items: IPost[];
            /**
             * The kind of this entity. Always blogger#postList
             */
            kind: string;
            /**
             * Pagination token to fetch the next page, if one exists.
             */
            nextPageToken: string;
            /**
             * Pagination token to fetch the previous page, if one exists.
             */
            prevPageToken: string;
        }
        interface IUser {
            /**
             * Profile summary information.
             */
            about: string;
            /**
             * The container of blogs for this user.
             */
            blogs: {
                selfLink: string;
            };
            /**
             * The timestamp of when this profile was created, in seconds since epoch.
             */
            created: string; // date-time
            /**
             * The display name.
             */
            displayName: string;
            /**
             * The identifier for this User.
             */
            id: string;
            /**
             * The kind of this entity. Always blogger#user
             */
            kind: string;
            /**
             * This user's locale
             */
            locale: {
                country: string;
                language: string;
                variant: string;
            };
            /**
             * The API REST URL to fetch this resource from.
             */
            selfLink: string;
            /**
             * The user's profile page.
             */
            url: string;
        }
    }
}
