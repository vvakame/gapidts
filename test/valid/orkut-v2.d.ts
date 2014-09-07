// Type definitions for Google Orkut API v2
// Project: http://code.google.com/apis/orkut/v2/reference.html
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Lets you manage activities, comments and badges in Orkut. More stuff coming in time.
     */
    module orkut {
        var acl: {
            /**
             * Excludes an element from the ACL of the activity.
             * @params {string} activityId ID of the activity.
             * @params {string} userId ID of the user to be removed from the activity.
             */
            delete: (params: {
                activityId: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var activities: {
            /**
             * Deletes an existing activity, if the access controls allow it.
             * @params {string} activityId ID of the activity to remove.
             */
            delete: (params: {
                activityId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves a list of activities.
             * @params {string} collection The collection of activities to list.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of activities to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             * @params {string} userId The ID of the user whose activities will be listed. Can be me to refer to the viewer (i.e. the authenticated user).
             */
            list: (params: {
                collection: string;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
                userId: string;
            }) => { execute(callback: (data: IActivityList, original: string) => void):void; };
        };
        var activityVisibility: {
            /**
             * Gets the visibility of an existing activity.
             * @params {string} activityId ID of the activity to get the visibility.
             */
            get: (params: {
                activityId: string;
            }) => { execute(callback: (data: IVisibility, original: string) => void):void; };
            /**
             * Updates the visibility of an existing activity. This method supports patch semantics.
             * @params {string} activityId ID of the activity.
             */
            patch: (params: {
                activityId: string;
                resource?: IVisibility;
            }) => { execute(callback: (data: IVisibility, original: string) => void):void; };
            /**
             * Updates the visibility of an existing activity.
             * @params {string} activityId ID of the activity.
             */
            update: (params: {
                activityId: string;
                resource?: IVisibility;
            }) => { execute(callback: (data: IVisibility, original: string) => void):void; };
        };
        var badges: {
            /**
             * Retrieves a badge from a user.
             * @params {string} badgeId The ID of the badge that will be retrieved.
             * @params {string} userId The ID of the user whose badges will be listed. Can be me to refer to caller.
             */
            get: (params: {
                badgeId: string;
                userId: string;
            }) => { execute(callback: (data: IBadge, original: string) => void):void; };
            /**
             * Retrieves the list of visible badges of a user.
             * @params {string} userId The id of the user whose badges will be listed. Can be me to refer to caller.
             */
            list: (params: {
                userId: string;
            }) => { execute(callback: (data: IBadgeList, original: string) => void):void; };
        };
        var comments: {
            /**
             * Deletes an existing comment.
             * @params {string} commentId ID of the comment to remove.
             */
            delete: (params: {
                commentId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves an existing comment.
             * @params {string} commentId ID of the comment to get.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             */
            get: (params: {
                commentId: string;
                hl?: string;
            }) => { execute(callback: (data: IComment, original: string) => void):void; };
            /**
             * Inserts a new comment to an activity.
             * @params {string} activityId The ID of the activity to contain the new comment.
             */
            insert: (params: {
                activityId: string;
                resource?: IComment;
            }) => { execute(callback: (data: IComment, original: string) => void):void; };
            /**
             * Retrieves a list of comments, possibly filtered.
             * @params {string} activityId The ID of the activity containing the comments.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of activities to include in the response.
             * @params {string} orderBy Sort search results.
             * @params {string} pageToken A continuation token that allows pagination.
             */
            list: (params: {
                activityId: string;
                hl?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
            }) => { execute(callback: (data: ICommentList, original: string) => void):void; };
        };
        var communities: {
            /**
             * Retrieves the basic information (aka. profile) of a community.
             * @params {number} communityId The ID of the community to get.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             */
            get: (params: {
                communityId: number;
                hl?: string;
            }) => { execute(callback: (data: ICommunity, original: string) => void):void; };
            /**
             * Retrieves the list of communities the current user is a member of.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of communities to include in the response.
             * @params {string} orderBy How to order the communities by.
             * @params {string} userId The ID of the user whose communities will be listed. Can be me to refer to caller.
             */
            list: (params: {
                hl?: string;
                maxResults?: number;
                orderBy?: string;
                userId: string;
            }) => { execute(callback: (data: ICommunityList, original: string) => void):void; };
        };
        var communityFollow: {
            /**
             * Removes a user from the followers of a community.
             * @params {number} communityId ID of the community.
             * @params {string} userId ID of the user.
             */
            delete: (params: {
                communityId: number;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Adds a user as a follower of a community.
             * @params {number} communityId ID of the community.
             * @params {string} userId ID of the user.
             */
            insert: (params: {
                communityId: number;
                userId: string;
            }) => { execute(callback: (data: ICommunityMembers, original: string) => void):void; };
        };
        var communityMembers: {
            /**
             * Makes the user leave a community.
             * @params {number} communityId ID of the community.
             * @params {string} userId ID of the user.
             */
            delete: (params: {
                communityId: number;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves the relationship between a user and a community.
             * @params {number} communityId ID of the community.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {string} userId ID of the user.
             */
            get: (params: {
                communityId: number;
                hl?: string;
                userId: string;
            }) => { execute(callback: (data: ICommunityMembers, original: string) => void):void; };
            /**
             * Makes the user join a community.
             * @params {number} communityId ID of the community.
             * @params {string} userId ID of the user.
             */
            insert: (params: {
                communityId: number;
                userId: string;
            }) => { execute(callback: (data: ICommunityMembers, original: string) => void):void; };
            /**
             * Lists members of a community. Use the pagination tokens to retrieve the full list; do not rely on the member count available in the community profile information to know when to stop iterating, as that count may be approximate.
             * @params {number} communityId The ID of the community whose members will be listed.
             * @params {boolean} friendsOnly Whether to list only community members who are friends of the user.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of members to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             */
            list: (params: {
                communityId: number;
                friendsOnly?: boolean;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: ICommunityMembersList, original: string) => void):void; };
        };
        var communityMessages: {
            /**
             * Moves a message of the community to the trash folder.
             * @params {number} communityId The ID of the community whose message will be moved to the trash folder.
             * @params {string} messageId The ID of the message to be moved to the trash folder.
             * @params {string} topicId The ID of the topic whose message will be moved to the trash folder.
             */
            delete: (params: {
                communityId: number;
                messageId: string;
                topicId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Adds a message to a given community topic.
             * @params {number} communityId The ID of the community the message should be added to.
             * @params {string} topicId The ID of the topic the message should be added to.
             */
            insert: (params: {
                communityId: number;
                topicId: string;
                resource?: ICommunityMessage;
            }) => { execute(callback: (data: ICommunityMessage, original: string) => void):void; };
            /**
             * Retrieves the messages of a topic of a community.
             * @params {number} communityId The ID of the community which messages will be listed.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of messages to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             * @params {string} topicId The ID of the topic which messages will be listed.
             */
            list: (params: {
                communityId: number;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
                topicId: string;
            }) => { execute(callback: (data: ICommunityMessageList, original: string) => void):void; };
        };
        var communityPollComments: {
            /**
             * Adds a comment on a community poll.
             * @params {number} communityId The ID of the community whose poll is being commented.
             * @params {string} pollId The ID of the poll being commented.
             */
            insert: (params: {
                communityId: number;
                pollId: string;
                resource?: ICommunityPollComment;
            }) => { execute(callback: (data: ICommunityPollComment, original: string) => void):void; };
            /**
             * Retrieves the comments of a community poll.
             * @params {number} communityId The ID of the community whose poll is having its comments listed.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of comments to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             * @params {string} pollId The ID of the community whose polls will be listed.
             */
            list: (params: {
                communityId: number;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
                pollId: string;
            }) => { execute(callback: (data: ICommunityPollCommentList, original: string) => void):void; };
        };
        var communityPollVotes: {
            /**
             * Votes on a community poll.
             * @params {number} communityId The ID of the community whose poll is being voted.
             * @params {string} pollId The ID of the poll being voted.
             */
            insert: (params: {
                communityId: number;
                pollId: string;
                resource?: ICommunityPollVote;
            }) => { execute(callback: (data: ICommunityPollVote, original: string) => void):void; };
        };
        var communityPolls: {
            /**
             * Retrieves one specific poll of a community.
             * @params {number} communityId The ID of the community for whose poll will be retrieved.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {string} pollId The ID of the poll to get.
             */
            get: (params: {
                communityId: number;
                hl?: string;
                pollId: string;
            }) => { execute(callback: (data: ICommunityPoll, original: string) => void):void; };
            /**
             * Retrieves the polls of a community.
             * @params {number} communityId The ID of the community which polls will be listed.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of polls to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             */
            list: (params: {
                communityId: number;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: ICommunityPollList, original: string) => void):void; };
        };
        var communityRelated: {
            /**
             * Retrieves the communities related to another one.
             * @params {number} communityId The ID of the community whose related communities will be listed.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             */
            list: (params: {
                communityId: number;
                hl?: string;
            }) => { execute(callback: (data: ICommunityList, original: string) => void):void; };
        };
        var communityTopics: {
            /**
             * Moves a topic of the community to the trash folder.
             * @params {number} communityId The ID of the community whose topic will be moved to the trash folder.
             * @params {string} topicId The ID of the topic to be moved to the trash folder.
             */
            delete: (params: {
                communityId: number;
                topicId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves a topic of a community.
             * @params {number} communityId The ID of the community whose topic will be retrieved.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {string} topicId The ID of the topic to get.
             */
            get: (params: {
                communityId: number;
                hl?: string;
                topicId: string;
            }) => { execute(callback: (data: ICommunityTopic, original: string) => void):void; };
            /**
             * Adds a topic to a given community.
             * @params {number} communityId The ID of the community the topic should be added to.
             * @params {boolean} isShout Whether this topic is a shout.
             */
            insert: (params: {
                communityId: number;
                isShout?: boolean;
                resource?: ICommunityTopic;
            }) => { execute(callback: (data: ICommunityTopic, original: string) => void):void; };
            /**
             * Retrieves the topics of a community.
             * @params {number} communityId The ID of the community which topics will be listed.
             * @params {string} hl Specifies the interface language (host language) of your user interface.
             * @params {number} maxResults The maximum number of topics to include in the response.
             * @params {string} pageToken A continuation token that allows pagination.
             */
            list: (params: {
                communityId: number;
                hl?: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: ICommunityTopicList, original: string) => void):void; };
        };
        var counters: {
            /**
             * Retrieves the counters of a user.
             * @params {string} userId The ID of the user whose counters will be listed. Can be me to refer to caller.
             */
            list: (params: {
                userId: string;
            }) => { execute(callback: (data: ICounters, original: string) => void):void; };
        };
        var scraps: {
            /**
             * Creates a new scrap.
             */
            insert: (params: {
                resource?: IActivity;
            }) => { execute(callback: (data: IActivity, original: string) => void):void; };
        };
        interface IAcl {
            /**
             * Human readable description of the access granted.
             */
            description: string;
            /**
             * The list of ACL entries.
             */
            items: {
                id: string;
                type: string;
            }[];
            /**
             * Identifies this resource as an access control list. Value: "orkut#acl"
             */
            kind: string;
            /**
             * The total count of participants of the parent resource.
             */
            totalParticipants: number; // int32
        }
        interface IActivity {
            /**
             * Identifies who has access to see this activity.
             */
            access: IAcl;
            /**
             * The person who performed the activity.
             */
            actor: IOrkutAuthorResource;
            /**
             * The ID for the activity.
             */
            id: string;
            /**
             * The kind of activity. Always orkut#activity.
             */
            kind: string;
            /**
             * Links to resources related to this activity.
             */
            links: IOrkutLinkResource[];
            /**
             * The activity's object.
             */
            object: {
                content: string;
                items: IOrkutActivityobjectsResource[];
                objectType: string;
                replies: {
                    items: IComment[];
                    totalItems: string; // uint64
                    url: string;
                };
            };
            /**
             * The time at which the activity was initially published.
             */
            published: string; // date-time
            /**
             * Title of the activity.
             */
            title: string;
            /**
             * The time at which the activity was last updated.
             */
            updated: string; // date-time
            /**
             * This activity's verb, indicating what action was performed. Possible values are:  
             * - add - User added new content to profile or album, e.g. video, photo. 
             * - post - User publish content to the stream, e.g. status, scrap. 
             * - update - User commented on an activity. 
             * - make-friend - User added a new friend. 
             * - birthday - User has a birthday.
             */
            verb: string;
        }
        interface IActivityList {
            /**
             * List of activities retrieved.
             */
            items: IActivity[];
            /**
             * Identifies this resource as a collection of activities. Value: "orkut#activityList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in activities.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
        }
        interface IBadge {
            /**
             * The URL for the 64x64 badge logo.
             */
            badgeLargeLogo: string;
            /**
             * The URL for the 24x24 badge logo.
             */
            badgeSmallLogo: string;
            /**
             * The name of the badge, suitable for display.
             */
            caption: string;
            /**
             * The description for the badge, suitable for display.
             */
            description: string;
            /**
             * The unique ID for the badge.
             */
            id: string; // int64
            /**
             * Identifies this resource as a badge. Value: "orkut#badge"
             */
            kind: string;
            /**
             * The URL for the 32x32 badge sponsor logo.
             */
            sponsorLogo: string;
            /**
             * The name of the badge sponsor, suitable for display.
             */
            sponsorName: string;
            /**
             * The URL for the badge sponsor.
             */
            sponsorUrl: string;
        }
        interface IBadgeList {
            /**
             * List of badges retrieved.
             */
            items: IBadge[];
            /**
             * Identifies this resource as a collection of badges. Value: "orkut#badgeList"
             */
            kind: string;
        }
        interface IComment {
            /**
             * The person who posted the comment.
             */
            actor: IOrkutAuthorResource;
            /**
             * The content of the comment in text/html
             */
            content: string;
            /**
             * The unique ID for the comment.
             */
            id: string;
            /**
             * Link to the original activity where this comment was posted.
             */
            inReplyTo: {
                href: string;
                ref: string;
                rel: string;
                type: string;
            };
            /**
             * Identifies this resource as a comment. Value: "orkut#comment"
             */
            kind: string;
            /**
             * List of resources for the comment.
             */
            links: IOrkutLinkResource[];
            /**
             * The time the comment was initially published, in RFC 3339 format.
             */
            published: string; // date-time
        }
        interface ICommentList {
            /**
             * List of comments retrieved.
             */
            items: IComment[];
            /**
             * Identifies this resource as a collection of comments. Value: "orkut#commentList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in comments.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in comments.list request to get the previous page, if there are more to retrieve.
             */
            previousPageToken: string;
        }
        interface ICommunity {
            /**
             * The category of the community.
             */
            category: string;
            /**
             * The co-owners of the community.
             */
            co_owners: IOrkutAuthorResource[];
            /**
             * The time the community was created, in RFC 3339 format.
             */
            creation_date: string; // date-time
            /**
             * The description of the community.
             */
            description: string;
            /**
             * The id of the community.
             */
            id: number; // int32
            /**
             * Identifies this resource as a community. Value: "orkut#community"
             */
            kind: string;
            /**
             * The official language of the community.
             */
            language: string;
            /**
             * List of resources for the community.
             */
            links: IOrkutLinkResource[];
            /**
             * The location of the community.
             */
            location: string;
            /**
             * The number of users who are part of the community. This number may be approximate, so do not rely on it for iteration.
             */
            member_count: number; // int32
            /**
             * The list of moderators of the community.
             */
            moderators: IOrkutAuthorResource[];
            /**
             * The name of the community.
             */
            name: string;
            /**
             * The person who owns the community.
             */
            owner: IOrkutAuthorResource;
            /**
             * The photo of the community.
             */
            photo_url: string;
        }
        interface ICommunityList {
            /**
             * List of communities retrieved.
             */
            items: ICommunity[];
            /**
             * Identifies this resource as a collection of communities. Value: "orkut#communityList"
             */
            kind: string;
        }
        interface ICommunityMembers {
            /**
             * Status and permissions of the user related to the community.
             */
            communityMembershipStatus: ICommunityMembershipStatus;
            /**
             * Kind of this item. Always orkut#communityMembers.
             */
            kind: string;
            /**
             * Description of the community member.
             */
            person: IOrkutActivitypersonResource;
        }
        interface ICommunityMembersList {
            /**
             * The value of pageToken query parameter in community_members.list request to get the first page.
             */
            firstPageToken: string;
            /**
             * List of community members retrieved.
             */
            items: ICommunityMembers[];
            /**
             * Kind of this item. Always orkut#communityMembersList.
             */
            kind: string;
            /**
             * The value of pageToken query parameter in community_members.list request to get the last page.
             */
            lastPageToken: string;
            /**
             * The value of pageToken query parameter in community_members.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in community_members.list request to get the previous page, if there are more to retrieve.
             */
            prevPageToken: string;
        }
        interface ICommunityMembershipStatus {
            /**
             * Whether the user can create a poll in this community.
             */
            canCreatePoll: boolean;
            /**
             * Whether the user can create a topic in this community.
             */
            canCreateTopic: boolean;
            /**
             * Whether the user can perform a shout operation in this community.
             */
            canShout: boolean;
            /**
             * Whether the session user is a community co-owner.
             */
            isCoOwner: boolean;
            /**
             * Whether the user is following this community.
             */
            isFollowing: boolean;
            /**
             * Whether the session user is a community moderator.
             */
            isModerator: boolean;
            /**
             * Whether the session user is the community owner.
             */
            isOwner: boolean;
            /**
             * Whether the restore operation is available for the community.
             */
            isRestoreAvailable: boolean;
            /**
             * Whether the take-back operation is available for the community.
             */
            isTakebackAvailable: boolean;
            /**
             * Kind of this item. Always orkut#communityMembershipStatus.
             */
            kind: string;
            /**
             * The status of the current link between the community and the user.
             */
            status: string;
        }
        interface ICommunityMessage {
            /**
             * The timestamp of the date when the message was added, in RFC 3339 format.
             */
            addedDate: string; // date-time
            /**
             * The creator of the message. If ommited, the message is annonimous.
             */
            author: IOrkutAuthorResource;
            /**
             * The body of the message.
             */
            body: string;
            /**
             * The ID of the message.
             */
            id: string; // int64
            /**
             * Whether this post was marked as spam by the viewer, when he/she is not the community owner or one of its moderators.
             */
            isSpam: boolean;
            /**
             * Identifies this resource as a community message. Value: "orkut#communityMessage"
             */
            kind: string;
            /**
             * List of resources for the community message.
             */
            links: IOrkutLinkResource[];
            /**
             * The subject of the message.
             */
            subject: string;
        }
        interface ICommunityMessageList {
            /**
             * The value of pageToken query parameter in community_messages.list request to get the first page.
             */
            firstPageToken: string;
            /**
             * List of messages retrieved.
             */
            items: ICommunityMessage[];
            /**
             * Identifies this resource as a collection of community messages. Value: "orkut#communityMessageList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in community_messages.list request to get the last page.
             */
            lastPageToken: string;
            /**
             * The value of pageToken query parameter in community_messages.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in community_messages.list request to get the previous page, if there are more to retrieve.
             */
            prevPageToken: string;
        }
        interface ICommunityPoll {
            /**
             * The person who created the poll.
             */
            author: IOrkutAuthorResource;
            /**
             * The ID of the community.
             */
            communityId: number; // int32
            /**
             * The date of creation of this poll
             */
            creationTime: string; // date-time
            /**
             * The poll description.
             */
            description: string;
            /**
             * The ending date of this poll or empty if the poll doesn't have one.
             */
            endingTime: string; // date-time
            /**
             * Whether the user has voted on this poll.
             */
            hasVoted: boolean;
            /**
             * The poll ID.
             */
            id: string;
            /**
             * The image representing the poll. Field is omitted if no image exists.
             */
            image: {
                url: string;
            };
            /**
             * Whether the poll is not expired if there is an expiration date. A poll is open (that is, not closed for voting) if it either is not expired or doesn't have an expiration date at all. Note that just because a poll is open, it doesn't mean that the requester can vote on it.
             */
            isClosed: boolean;
            /**
             * Whether this poll allows voting for more than one option.
             */
            isMultipleAnswers: boolean;
            /**
             * Whether this poll is still opened for voting. A poll is open for voting if it is not closed, the user has not yet voted on it and the user has the permission to do so, which happens if he/she is either a community member or the poll is open for everybody.
             */
            isOpenForVoting: boolean;
            /**
             * Whether this poll is restricted for members only. If a poll is open but the user can't vote on it, it's been restricted to members only. This information is important to tell this case apart from the one where the user can't vote simply because the poll is already closed.
             */
            isRestricted: boolean;
            /**
             * Whether the user has marked this poll as spam. This only affects the poll for this user, not globally.
             */
            isSpam: boolean;
            /**
             * If user has already voted, whether his vote is publicly visible.
             */
            isUsersVotePublic: boolean;
            /**
             * Whether non-members of the community can vote on the poll.
             */
            isVotingAllowedForNonMembers: boolean;
            /**
             * Identifies this resource as a community poll. Value: "orkut#communityPoll"
             */
            kind: string;
            /**
             * The date of the last update of this poll.
             */
            lastUpdate: string; // date-time
            /**
             * List of resources for the community poll.
             */
            links: IOrkutLinkResource[];
            /**
             * List of options of this poll.
             */
            options: IOrkutCommunitypolloptionResource[];
            /**
             * The poll question.
             */
            question: string;
            /**
             * The total number of votes this poll has received.
             */
            totalNumberOfVotes: number; // int32
            /**
             * List of options the user has voted on, if there are any.
             */
            votedOptions: number /* int32 */ [];
        }
        interface ICommunityPollComment {
            /**
             * The date when the message was added, in RFC 3339 format.
             */
            addedDate: string; // date-time
            /**
             * The creator of the comment.
             */
            author: IOrkutAuthorResource;
            /**
             * The body of the message.
             */
            body: string;
            /**
             * The ID of the comment.
             */
            id: number; // int32
            /**
             * Identifies this resource as a community poll comment. Value: "orkut#communityPollComment"
             */
            kind: string;
        }
        interface ICommunityPollCommentList {
            /**
             * The value of pageToken query parameter in community_poll_comments.list request to get the first page.
             */
            firstPageToken: string;
            /**
             * List of community poll comments retrieved.
             */
            items: ICommunityPollComment[];
            /**
             * Identifies this resource as a collection of community poll comments. Value: "orkut#CommunityPollCommentList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in community_poll_comments.list request to get the last page.
             */
            lastPageToken: string;
            /**
             * The value of pageToken query parameter in community_poll_comments.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in community_poll_comments.list request to get the previous page, if there are more to retrieve.
             */
            prevPageToken: string;
        }
        interface ICommunityPollList {
            /**
             * The value of pageToken query parameter in community_polls.list request to get the first page.
             */
            firstPageToken: string;
            /**
             * List of community polls retrieved.
             */
            items: ICommunityPoll[];
            /**
             * Identifies this resource as a collection of community polls. Value: "orkut#communityPollList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in community_polls.list request to get the last page.
             */
            lastPageToken: string;
            /**
             * The value of pageToken query parameter in community_polls.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in community_polls.list request to get the previous page, if there are more to retrieve.
             */
            prevPageToken: string;
        }
        interface ICommunityPollVote {
            /**
             * Whether this vote is visible to other users or not.
             */
            isVotevisible: boolean;
            /**
             * Identifies this resource as a community poll vote. Value: "orkut#communityPollVote"
             */
            kind: string;
            /**
             * The ids of the voted options.
             */
            optionIds: number /* int32 */ [];
        }
        interface ICommunityTopic {
            /**
             * The creator of the topic.
             */
            author: IOrkutAuthorResource;
            /**
             * The body of the topic.
             */
            body: string;
            /**
             * The ID of the topic.
             */
            id: string; // int64
            /**
             * Whether the topic is closed for new messages.
             */
            isClosed: boolean;
            /**
             * Identifies this resource as a community topic. Value: "orkut#communityTopic"
             */
            kind: string;
            /**
             * The timestamp of the last update, in RFC 3339 format.
             */
            lastUpdate: string; // date-time
            /**
             * Snippet of the last message posted on this topic.
             */
            latestMessageSnippet: string;
            /**
             * List of resources for the community.
             */
            links: IOrkutLinkResource[];
            /**
             * Most recent messages.
             */
            messages: ICommunityMessage[];
            /**
             * The total number of replies this topic has received.
             */
            numberOfReplies: number; // int32
            /**
             * The title of the topic.
             */
            title: string;
        }
        interface ICommunityTopicList {
            /**
             * The value of pageToken query parameter in community_topic.list request to get the first page.
             */
            firstPageToken: string;
            /**
             * List of topics retrieved.
             */
            items: ICommunityTopic[];
            /**
             * Identifies this resource as a collection of community topics. Value: "orkut#communityTopicList"
             */
            kind: string;
            /**
             * The value of pageToken query parameter in community_topic.list request to get the last page.
             */
            lastPageToken: string;
            /**
             * The value of pageToken query parameter in community_topic.list request to get the next page, if there are more to retrieve.
             */
            nextPageToken: string;
            /**
             * The value of pageToken query parameter in community_topic.list request to get the previous page, if there are more to retrieve.
             */
            prevPageToken: string;
        }
        interface ICounters {
            /**
             * List of counters retrieved.
             */
            items: IOrkutCounterResource[];
            /**
             * Identifies this resource as a collection of counters. Value: "orkut#counters"
             */
            kind: string;
        }
        interface IOrkutActivityobjectsResource {
            /**
             * The community which is related with this activity, e.g. a joined community.
             */
            community: ICommunity;
            /**
             * The HTML-formatted content, suitable for display. When updating an activity's content, post the changes to this property, using the value of originalContent as a starting point. If the update is successful, the server adds HTML formatting and responds with this formatted content.
             */
            content: string;
            /**
             * The title of the object.
             */
            displayName: string;
            /**
             * The ID for the object.
             */
            id: string;
            /**
             * Links to other resources related to this object.
             */
            links: IOrkutLinkResource[];
            /**
             * The object type.
             */
            objectType: string;
            /**
             * The person who is related with this activity, e.g. an Added User.
             */
            person: IOrkutActivitypersonResource;
        }
        interface IOrkutActivitypersonResource {
            /**
             * The person's date of birth, represented as YYYY-MM-DD.
             */
            birthday: string;
            /**
             * The person's gender. Values include "male", "female", and "other".
             */
            gender: string;
            /**
             * The person's opensocial ID.
             */
            id: string;
            /**
             * The person's profile photo. This is adapted from Google+ and was originaly introduced as extra OpenSocial convenience fields.
             */
            image: {
                url: string;
            };
            /**
             * An object that encapsulates the individual components of a person's name.
             */
            name: {
                familyName: string;
                givenName: string;
            };
            /**
             * The person's profile url. This is adapted from Google+ and was originaly introduced as extra OpenSocial convenience fields.
             */
            url: string;
        }
        interface IOrkutAuthorResource {
            /**
             * The name of the author, suitable for display.
             */
            displayName: string;
            /**
             * Unique identifier of the person who posted the comment. This is the person's OpenSocial ID.
             */
            id: string;
            /**
             * Image data about the author.
             */
            image: {
                url: string;
            };
            /**
             * The URL of the author who posted the comment [not yet implemented]
             */
            url: string;
        }
        interface IOrkutCommunitypolloptionResource {
            /**
             * The option description.
             */
            description: string;
            /**
             * Image data about the poll option. Field is omitted if no image exists.
             */
            image: {
                url: string;
            };
            /**
             * The total number of votes that this option received.
             */
            numberOfVotes: number; // int32
            /**
             * The poll option ID
             */
            optionId: number; // int32
        }
        interface IOrkutCounterResource {
            /**
             * Link to the collection being counted.
             */
            link: IOrkutLinkResource;
            /**
             * The name of the counted collection. Currently supported collections are:  
             * - scraps - The scraps of the user. 
             * - photos - The photos of the user. 
             * - videos - The videos of the user. 
             * - pendingTestimonials - The pending testimonials of the user.
             */
            name: string;
            /**
             * The number of resources on the counted collection.
             */
            total: number; // int32
        }
        /**
         * Links to resources related to the parent object.
         */
        interface IOrkutLinkResource {
            /**
             * URL of the link.
             */
            href: string;
            /**
             * Relation between the resource and the parent object.
             */
            rel: string;
            /**
             * Title of the link.
             */
            title: string;
            /**
             * Media type of the link.
             */
            type: string;
        }
        interface IVisibility {
            /**
             * Identifies this resource as a visibility item. Value: "orkut#visibility"
             */
            kind: string;
            /**
             * List of resources for the visibility item.
             */
            links: IOrkutLinkResource[];
            /**
             * The visibility of the resource. Possible values are:  
             * - default: not hidden by the user 
             * - hidden: hidden
             */
            visibility: string;
        }
    }
}
