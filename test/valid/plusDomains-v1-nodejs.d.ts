// Type definitions for Google Google+ Domains API v1
// Project: https://developers.google.com/+/domains/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function plusDomains(version:string):typeof googleapis.plusDomains;
    function plusDomains(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.plusDomains;
}
/**
 * The Google+ API enables developers to build on top of the Google+ platform.
 */
declare module googleapis.plusDomains {
    var activities: {
        /**
         * Get an activity.
         * @params {string} activityId The ID of the activity to get.
         */
        get: (params: {
            activityId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IActivity, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a new activity for the authenticated user.
         * @params {boolean} preview If "true", extract the potential media attachments for a URL. The response will include all possible attachments for a URL, including video, photos, and articles based on the content of the page.
         * @params {string} userId The ID of the user to create the activity on behalf of. Its value should be "me", to indicate the authenticated user.
         */
        insert: (params: {
            preview?: boolean;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IActivity;
        }, callback: (err: IErrorResponse, response: IActivity, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the activities in the specified collection for a particular user.
         * @params {string} collection The collection of activities to list.
         * @params {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
         */
        list: (params: {
            collection: string;
            maxResults?: number;
            pageToken?: string;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IActivityFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var audiences: {
        /**
         * List all of the audiences to which a user can share.
         * @params {number} maxResults The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} userId The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAudiencesFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var circles: {
        /**
         * Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More.
         * @params {string} circleId The ID of the circle to add the person to.
         * @params {string} email Email of the people to add to the circle. Optional, can be repeated.
         * @params {string} userId IDs of the people to add to the circle. Optional, can be repeated.
         */
        addPeople: (params: {
            circleId: string;
            email?: string;
            userId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICircle, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get a circle.
         * @params {string} circleId The ID of the circle to get.
         */
        get: (params: {
            circleId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICircle, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a new circle for the authenticated user.
         * @params {string} userId The ID of the user to create the circle on behalf of. The value "me" can be used to indicate the authenticated user.
         */
        insert: (params: {
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICircle;
        }, callback: (err: IErrorResponse, response: ICircle, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the circles for a user.
         * @params {number} maxResults The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} userId The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICircleFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update a circle's description. This method supports patch semantics.
         * @params {string} circleId The ID of the circle to update.
         */
        patch: (params: {
            circleId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICircle;
        }, callback: (err: IErrorResponse, response: ICircle, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Delete a circle.
         * @params {string} circleId The ID of the circle to delete.
         */
        remove: (params: {
            circleId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Remove a person from a circle.
         * @params {string} circleId The ID of the circle to remove the person from.
         * @params {string} email Email of the people to add to the circle. Optional, can be repeated.
         * @params {string} userId IDs of the people to remove from the circle. Optional, can be repeated.
         */
        removePeople: (params: {
            circleId: string;
            email?: string;
            userId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Update a circle's description.
         * @params {string} circleId The ID of the circle to update.
         */
        update: (params: {
            circleId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICircle;
        }, callback: (err: IErrorResponse, response: ICircle, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var comments: {
        /**
         * Get a comment.
         * @params {string} commentId The ID of the comment to get.
         */
        get: (params: {
            commentId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IComment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a new comment in reply to an activity.
         * @params {string} activityId The ID of the activity to reply to.
         */
        insert: (params: {
            activityId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IComment;
        }, callback: (err: IErrorResponse, response: IComment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the comments for an activity.
         * @params {string} activityId The ID of the activity to get comments for.
         * @params {number} maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} sortOrder The order in which to sort the list of comments.
         */
        list: (params: {
            activityId: string;
            maxResults?: number;
            pageToken?: string;
            sortOrder?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICommentFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var media: {
        /**
         * Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.
         * @params {string} collection 
         * @params {string} userId The ID of the user to create the activity on behalf of.
         */
        insert: (params: {
            collection: string;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IMedia;
        }, callback: (err: IErrorResponse, response: IMedia, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var people: {
        /**
         * Get a person's profile.
         * @params {string} userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
         */
        get: (params: {
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPerson, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the people in the specified collection.
         * @params {string} collection The collection of people to list.
         * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} orderBy The order to return people in.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
         */
        list: (params: {
            collection: string;
            maxResults?: number;
            orderBy?: string;
            pageToken?: string;
            userId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPeopleFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the people in the specified collection for a particular activity.
         * @params {string} activityId The ID of the activity to get the list of people for.
         * @params {string} collection The collection of people to list.
         * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        listByActivity: (params: {
            activityId: string;
            collection: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPeopleFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all of the people who are members of a circle.
         * @params {string} circleId The ID of the circle to get the members of.
         * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        listByCircle: (params: {
            circleId: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPeopleFeed, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IAcl {
        /**
         * Description of the access granted, suitable for display.
         */
        description: string;
        /**
         * Whether access is restricted to the domain.
         */
        domainRestricted: boolean;
        /**
         * The list of access entries.
         */
        items: IPlusDomainsAclentryResource[];
        /**
         * Identifies this resource as a collection of access controls. Value: "plus#acl".
         */
        kind: string;
    }
    interface IActivity {
        /**
         * Identifies who has access to see this activity.
         */
        access: IAcl;
        /**
         * The person who performed this activity.
         */
        actor: {
            displayName: string;
            id: string;
            image: {
                url: string;
            };
            name: {
                familyName: string;
                givenName: string;
            };
            url: string;
        };
        /**
         * Street address where this activity occurred.
         */
        address: string;
        /**
         * Additional content added by the person who shared this activity, applicable only when resharing an activity.
         */
        annotation: string;
        /**
         * If this activity is a crosspost from another system, this property specifies the ID of the original activity.
         */
        crosspostSource: string;
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
         */
        geocode: string;
        /**
         * The ID of this activity.
         */
        id: string;
        /**
         * Identifies this resource as an activity. Value: "plus#activity".
         */
        kind: string;
        /**
         * The location where this activity occurred.
         */
        location: IPlace;
        /**
         * The object of this activity.
         */
        object: {
            actor: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            attachments: {
                content: string;
                displayName: string;
                embed: {
                    type: string;
                    url: string;
                };
                fullImage: {
                    height: number; // uint32
                    type: string;
                    url: string;
                    width: number; // uint32
                };
                id: string;
                image: {
                    height: number; // uint32
                    type: string;
                    url: string;
                    width: number; // uint32
                };
                objectType: string;
                previewThumbnails: {
                    url: string;
                }[];
                thumbnails: {
                    description: string;
                    image: {
                        height: number; // uint32
                        type: string;
                        url: string;
                        width: number; // uint32
                    };
                    url: string;
                }[];
                url: string;
            }[];
            content: string;
            id: string;
            objectType: string;
            originalContent: string;
            plusoners: {
                selfLink: string;
                totalItems: number; // uint32
            };
            replies: {
                selfLink: string;
                totalItems: number; // uint32
            };
            resharers: {
                selfLink: string;
                totalItems: number; // uint32
            };
            statusForViewer: {
                canComment: boolean;
                canPlusone: boolean;
                canUpdate: boolean;
                isPlusOned: boolean;
                resharingDisabled: boolean;
            };
            url: string;
        };
        /**
         * ID of the place where this activity occurred.
         */
        placeId: string;
        /**
         * Name of the place where this activity occurred.
         */
        placeName: string;
        /**
         * The service provider that initially published this activity.
         */
        provider: {
            title: string;
        };
        /**
         * The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
         */
        published: string; // date-time
        /**
         * Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
         */
        radius: string;
        /**
         * Title of this activity.
         */
        title: string;
        /**
         * The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
         */
        updated: string; // date-time
        /**
         * The link to this activity.
         */
        url: string;
        /**
         * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  
         * - "post" - Publish content to the stream. 
         * - "share" - Reshare an activity.
         */
        verb: string;
    }
    interface IActivityFeed {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ID of this collection of activities. Deprecated.
         */
        id: string;
        /**
         * The activities in this page of results.
         */
        items: IActivity[];
        /**
         * Identifies this resource as a collection of activities. Value: "plus#activityFeed".
         */
        kind: string;
        /**
         * Link to the next page of activities.
         */
        nextLink: string;
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * Link to this activity resource.
         */
        selfLink: string;
        /**
         * The title of this collection of activities, which is a truncated portion of the content.
         */
        title: string;
        /**
         * The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
         */
        updated: string; // date-time
    }
    interface IAudience {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The access control list entry.
         */
        item: IPlusDomainsAclentryResource;
        /**
         * Identifies this resource as an audience. Value: "plus#audience".
         */
        kind: string;
        /**
         * The number of people in this circle. This only applies if entity_type is CIRCLE.
         */
        memberCount: number; // uint32
        /**
         * The circle members' visibility as chosen by the owner of the circle. This only applies for items with "item.type" equals "circle". Possible values are:  
         * - "public" - Members are visible to the public. 
         * - "limited" - Members are visible to a limited audience. 
         * - "private" - Members are visible to the owner only.
         */
        visibility: string;
    }
    interface IAudiencesFeed {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The audiences in this result.
         */
        items: IAudience[];
        /**
         * Identifies this resource as a collection of audiences. Value: "plus#audienceFeed".
         */
        kind: string;
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * The total number of ACL entries. The number of entries in this response may be smaller due to paging.
         */
        totalItems: number; // int32
    }
    interface ICircle {
        /**
         * The description of this circle.
         */
        description: string;
        /**
         * The circle name.
         */
        displayName: string;
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ID of the circle.
         */
        id: string;
        /**
         * Identifies this resource as a circle. Value: "plus#circle".
         */
        kind: string;
        /**
         * The people in this circle.
         */
        people: {
            totalItems: number; // uint32
        };
        /**
         * Link to this circle resource
         */
        selfLink: string;
    }
    interface ICircleFeed {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The circles in this page of results.
         */
        items: ICircle[];
        /**
         * Identifies this resource as a collection of circles. Value: "plus#circleFeed".
         */
        kind: string;
        /**
         * Link to the next page of circles.
         */
        nextLink: string;
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * Link to this page of circles.
         */
        selfLink: string;
        /**
         * The title of this list of resources.
         */
        title: string;
        /**
         * The total number of circles. The number of circles in this response may be smaller due to paging.
         */
        totalItems: number; // int32
    }
    interface IComment {
        /**
         * The person who posted this comment.
         */
        actor: {
            displayName: string;
            id: string;
            image: {
                url: string;
            };
            url: string;
        };
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ID of this comment.
         */
        id: string;
        /**
         * The activity this comment replied to.
         */
        inReplyTo: {
            id: string;
            url: string;
        }[];
        /**
         * Identifies this resource as a comment. Value: "plus#comment".
         */
        kind: string;
        /**
         * The object of this comment.
         */
        object: {
            content: string;
            objectType: string;
            originalContent: string;
        };
        /**
         * People who +1'd this comment.
         */
        plusoners: {
            totalItems: number; // uint32
        };
        /**
         * The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
         */
        published: string; // date-time
        /**
         * Link to this comment resource.
         */
        selfLink: string;
        /**
         * The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
         */
        updated: string; // date-time
        /**
         * This comment's verb, indicating what action was performed. Possible values are:  
         * - "post" - Publish content to the stream.
         */
        verb: string;
    }
    interface ICommentFeed {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ID of this collection of comments.
         */
        id: string;
        /**
         * The comments in this page of results.
         */
        items: IComment[];
        /**
         * Identifies this resource as a collection of comments. Value: "plus#commentFeed".
         */
        kind: string;
        /**
         * Link to the next page of activities.
         */
        nextLink: string;
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * The title of this collection of comments.
         */
        title: string;
        /**
         * The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
         */
        updated: string; // date-time
    }
    interface IMedia {
        /**
         * The person who uploaded this media.
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
         * The display name for this media.
         */
        displayName: string;
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * Exif information of the media item.
         */
        exif: {
            time: string; // date-time
        };
        /**
         * The height in pixels of the original image.
         */
        height: number; // uint32
        /**
         * ID of this media, which is generated by the API.
         */
        id: string;
        /**
         * The type of resource.
         */
        kind: string;
        /**
         * The time at which this media was originally created in UTC. Formatted as an RFC 3339 timestamp that matches this example: 2010-11-25T14:30:27.655Z
         */
        mediaCreatedTime: string; // date-time
        /**
         * The URL of this photo or video's still image.
         */
        mediaUrl: string;
        /**
         * The time at which this media was uploaded. Formatted as an RFC 3339 timestamp.
         */
        published: string; // date-time
        /**
         * The size in bytes of this video.
         */
        sizeBytes: string; // int64
        /**
         * The list of video streams for this video. There might be several different streams available for a single video, either Flash or MPEG, of various sizes
         */
        streams: IVideostream[];
        /**
         * A description, or caption, for this media.
         */
        summary: string;
        /**
         * The time at which this media was last updated. This includes changes to media metadata. Formatted as an RFC 3339 timestamp.
         */
        updated: string; // date-time
        /**
         * The URL for the page that hosts this media.
         */
        url: string;
        /**
         * The duration in milliseconds of this video.
         */
        videoDuration: string; // int64
        /**
         * The encoding status of this video. Possible values are:  
         * - "UPLOADING" - Not all the video bytes have been received. 
         * - "PENDING" - Video not yet processed. 
         * - "FAILED" - Video processing failed. 
         * - "READY" - A single video stream is playable. 
         * - "FINAL" - All video streams are playable.
         */
        videoStatus: string;
        /**
         * The width in pixels of the original image.
         */
        width: number; // uint32
    }
    interface IPeopleFeed {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
         */
        items: IPerson[];
        /**
         * Identifies this resource as a collection of people. Value: "plus#peopleFeed".
         */
        kind: string;
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * Link to this resource.
         */
        selfLink: string;
        /**
         * The title of this collection of people.
         */
        title: string;
        /**
         * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
         */
        totalItems: number; // int32
    }
    interface IPerson {
        /**
         * A short biography for this person.
         */
        aboutMe: string;
        /**
         * The person's date of birth, represented as YYYY-MM-DD.
         */
        birthday: string;
        /**
         * The "bragging rights" line of this person.
         */
        braggingRights: string;
        /**
         * For followers who are visible, the number of people who have added this person or page to a circle.
         */
        circledByCount: number; // int32
        /**
         * The cover photo content.
         */
        cover: {
            coverInfo: {
                leftImageOffset: number; // int32
                topImageOffset: number; // int32
            };
            coverPhoto: {
                height: number; // int32
                url: string;
                width: number; // int32
            };
            layout: string;
        };
        /**
         * (this field is not currently used)
         */
        currentLocation: string;
        /**
         * The name of this person, which is suitable for display.
         */
        displayName: string;
        /**
         * The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
         */
        domain: string;
        /**
         * A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
         */
        emails: {
            type: string;
            value: string;
        }[];
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The person's gender. Possible values include, but are not limited to, the following values:  
         * - "male" - Male gender. 
         * - "female" - Female gender. 
         * - "other" - Other.
         */
        gender: string;
        /**
         * The ID of this person.
         */
        id: string;
        /**
         * The representation of the person's profile photo.
         */
        image: {
            isDefault: boolean;
            url: string;
        };
        /**
         * Whether this user has signed up for Google+.
         */
        isPlusUser: boolean;
        /**
         * Identifies this resource as a person. Value: "plus#person".
         */
        kind: string;
        /**
         * An object representation of the individual components of a person's name.
         */
        name: {
            familyName: string;
            formatted: string;
            givenName: string;
            honorificPrefix: string;
            honorificSuffix: string;
            middleName: string;
        };
        /**
         * The nickname of this person.
         */
        nickname: string;
        /**
         * Type of person within Google+. Possible values include, but are not limited to, the following values:  
         * - "person" - represents an actual person. 
         * - "page" - represents a page.
         */
        objectType: string;
        /**
         * The occupation of this person.
         */
        occupation: string;
        /**
         * A list of current or past organizations with which this person is associated.
         */
        organizations: {
            department: string;
            description: string;
            endDate: string;
            location: string;
            name: string;
            primary: boolean;
            startDate: string;
            title: string;
            type: string;
        }[];
        /**
         * A list of places where this person has lived.
         */
        placesLived: {
            primary: boolean;
            value: string;
        }[];
        /**
         * If a Google+ Page, the number of people who have +1'd this page.
         */
        plusOneCount: number; // int32
        /**
         * The person's relationship status. Possible values include, but are not limited to, the following values:  
         * - "single" - Person is single. 
         * - "in_a_relationship" - Person is in a relationship. 
         * - "engaged" - Person is engaged. 
         * - "married" - Person is married. 
         * - "its_complicated" - The relationship is complicated. 
         * - "open_relationship" - Person is in an open relationship. 
         * - "widowed" - Person is widowed. 
         * - "in_domestic_partnership" - Person is in a domestic partnership. 
         * - "in_civil_union" - Person is in a civil union.
         */
        relationshipStatus: string;
        /**
         * The person's skills.
         */
        skills: string;
        /**
         * The brief description (tagline) of this person.
         */
        tagline: string;
        /**
         * The URL of this person's profile.
         */
        url: string;
        /**
         * A list of URLs for this person.
         */
        urls: {
            label: string;
            type: string;
            value: string;
        }[];
        /**
         * Whether the person or Google+ Page has been verified.
         */
        verified: boolean;
    }
    interface IPlace {
        /**
         * The physical address of the place.
         */
        address: {
            formatted: string;
        };
        /**
         * The display name of the place.
         */
        displayName: string;
        /**
         * The id of the place.
         */
        id: string;
        /**
         * Identifies this resource as a place. Value: "plus#place".
         */
        kind: string;
        /**
         * The position of the place.
         */
        position: {
            latitude: number; // double
            longitude: number; // double
        };
    }
    interface IPlusDomainsAclentryResource {
        /**
         * A descriptive name for this entry. Suitable for display.
         */
        displayName: string;
        /**
         * The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.
         */
        id: string;
        /**
         * The type of entry describing to whom access is granted. Possible values are:  
         * - "person" - Access to an individual. 
         * - "circle" - Access to members of a circle. 
         * - "myCircles" - Access to members of all the person's circles. 
         * - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles. 
         * - "domain" - Access to members of the person's Google Apps domain. 
         * - "public" - Access to anyone on the web.
         */
        type: string;
    }
    interface IVideostream {
        /**
         * The height, in pixels, of the video resource.
         */
        height: number; // int32
        /**
         * MIME type of the video stream.
         */
        type: string;
        /**
         * URL of the video stream.
         */
        url: string;
        /**
         * The width, in pixels, of the video resource.
         */
        width: number; // int32
    }
}
