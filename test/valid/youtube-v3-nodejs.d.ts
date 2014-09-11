// Type definitions for Google YouTube Data API v3
// Project: https://developers.google.com/youtube/v3
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function youtube(version:string):typeof googleapis.youtube;
    function youtube(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.youtube;
}
/**
 * Programmatic access to YouTube features.
 */
declare module googleapis.youtube {
    var activities: {
        /**
         * Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)
         * 
         * Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
         */
        insert: (params: {
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IActivity;
        }, callback: (err: IErrorResponse, response: IActivity, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
         * @params {string} channelId The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
         * @params {boolean} home Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
         * @params {string} publishedAfter The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         * @params {string} publishedBefore The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         * @params {string} regionCode The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
         */
        list: (params: {
            channelId?: string;
            home?: boolean;
            maxResults?: number;
            mine?: boolean;
            pageToken?: string;
            part: string;
            publishedAfter?: string;
            publishedBefore?: string;
            regionCode?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IActivityListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var channelBanners: {
        /**
         * Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
         * 
         * - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
         * - Extract the url property's value from the response that the API returns for step 1.
         * - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChannelBannerResource;
        }, callback: (err: IErrorResponse, response: IChannelBannerResource, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var channelSections: {
        /**
         * Deletes a channelSection.
         * @params {string} id The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
         */
        delete: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Adds a channelSection for the authenticated user's channel.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChannelSection;
        }, callback: (err: IErrorResponse, response: IChannelSection, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns channelSection resources that match the API request criteria.
         * @params {string} channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
         * @params {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} part The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
         */
        list: (params: {
            channelId?: string;
            id?: string;
            mine?: boolean;
            onBehalfOfContentOwner?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IChannelSectionListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update a channelSection.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
         */
        update: (params: {
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChannelSection;
        }, callback: (err: IErrorResponse, response: IChannelSection, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var channels: {
        /**
         * Returns a collection of zero or more channel resources that match the request criteria.
         * @params {string} categoryId The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
         * @params {string} forUsername The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
         * @params {boolean} managedByMe Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {boolean} mine Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
         * @params {boolean} mySubscribers Set this parameter's value to true to retrieve a list of channels that subscribed to the authenticated user's channel.
         * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, statistics, topicDetails, and invideoPromotion.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
         */
        list: (params: {
            categoryId?: string;
            forUsername?: string;
            id?: string;
            managedByMe?: boolean;
            maxResults?: number;
            mine?: boolean;
            mySubscribers?: boolean;
            onBehalfOfContentOwner?: string;
            pageToken?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IChannelListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a channel's metadata.
         * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are id and invideoPromotion.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
         */
        update: (params: {
            onBehalfOfContentOwner?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChannel;
        }, callback: (err: IErrorResponse, response: IChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var guideCategories: {
        /**
         * Returns a list of categories that can be associated with YouTube channels.
         * @params {string} hl The hl parameter specifies the language that will be used for text values in the API response.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
         * @params {string} part The part parameter specifies a comma-separated list of one or more guideCategory resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a guideCategory resource, the snippet property contains other properties, such as the category's title. If you set part=snippet, the API response will also contain all of those nested properties.
         * @params {string} regionCode The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
         */
        list: (params: {
            hl?: string;
            id?: string;
            part: string;
            regionCode?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IGuideCategoryListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var i18nLanguages: {
        /**
         * Returns a list of supported languages.
         * @params {string} hl The hl parameter specifies the language that should be used for text values in the API response.
         * @params {string} part The part parameter specifies a comma-separated list of one or more i18nLanguage resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.
         */
        list: (params: {
            hl?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: II18nLanguageListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var i18nRegions: {
        /**
         * Returns a list of supported regions.
         * @params {string} hl The hl parameter specifies the language that should be used for text values in the API response.
         * @params {string} part The part parameter specifies a comma-separated list of one or more i18nRegion resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.
         */
        list: (params: {
            hl?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: II18nRegionListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var liveBroadcasts: {
        /**
         * Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream.
         * @params {string} id The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
         * @params {string} streamId The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
         */
        bind: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            streamId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILiveBroadcast, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Controls the settings for a slate that can be displayed in the broadcast stream.
         * @params {boolean} displaySlate The displaySlate parameter specifies whether the slate is being enabled or disabled.
         * @params {string} id The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
         * @params {string} offsetTimeMs The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.

If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.

Important: You should only specify a value for this parameter if your broadcast stream is delayed.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
         * @params {string} walltime The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
         */
        control: (params: {
            displaySlate?: boolean;
            id: string;
            offsetTimeMs?: string;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            walltime?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILiveBroadcast, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes a broadcast.
         * @params {string} id The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         */
        delete: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Creates a broadcast.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ILiveBroadcast;
        }, callback: (err: IErrorResponse, response: ILiveBroadcast, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a list of YouTube broadcasts that match the API request parameters.
         * @params {string} broadcastStatus The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
         * @params {string} id The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {boolean} mine The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
         */
        list: (params: {
            broadcastStatus?: string;
            id?: string;
            maxResults?: number;
            mine?: boolean;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            pageToken?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILiveBroadcastListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
         * @params {string} broadcastStatus The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
         * @params {string} id The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
         */
        transition: (params: {
            broadcastStatus: string;
            id: string;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILiveBroadcast, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
         */
        update: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ILiveBroadcast;
        }, callback: (err: IErrorResponse, response: ILiveBroadcast, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var liveStreams: {
        /**
         * Deletes a video stream.
         * @params {string} id The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         */
        delete: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, cdn, and status.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ILiveStream;
        }, callback: (err: IErrorResponse, response: ILiveStream, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a list of video streams that match the API request parameters.
         * @params {string} id The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
         * @params {boolean} mine The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
         */
        list: (params: {
            id?: string;
            maxResults?: number;
            mine?: boolean;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            pageToken?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILiveStreamListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, cdn, and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
         */
        update: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ILiveStream;
        }, callback: (err: IErrorResponse, response: ILiveStream, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var playlistItems: {
        /**
         * Deletes a playlist item.
         * @params {string} id The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
         */
        delete: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Adds a resource to a playlist.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet, contentDetails, and status.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPlaylistItem;
        }, callback: (err: IErrorResponse, response: IPlaylistItem, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
         * @params {string} id The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
         * @params {string} playlistId The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
         * @params {string} videoId The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
         */
        list: (params: {
            id?: string;
            maxResults?: number;
            onBehalfOfContentOwner?: string;
            pageToken?: string;
            part: string;
            playlistId?: string;
            videoId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlaylistItemListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Modifies a playlist item. For example, you could update the item's position in the playlist.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet, contentDetails, and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
         */
        update: (params: {
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPlaylistItem;
        }, callback: (err: IErrorResponse, response: IPlaylistItem, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var playlists: {
        /**
         * Deletes a playlist.
         * @params {string} id The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        delete: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Creates a playlist.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and status.
         */
        insert: (params: {
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPlaylist;
        }, callback: (err: IErrorResponse, response: IPlaylist, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
         * @params {string} channelId This value indicates that the API should only return the specified channel's playlists.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {boolean} mine Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, status, and contentDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
         */
        list: (params: {
            channelId?: string;
            id?: string;
            maxResults?: number;
            mine?: boolean;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            pageToken?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlaylistListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist's privacy setting is contained in the status part. As such, if your request is updating a private playlist, and the request's part parameter value includes the status part, the playlist's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the playlist will revert to the default privacy setting.
         */
        update: (params: {
            onBehalfOfContentOwner?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPlaylist;
        }, callback: (err: IErrorResponse, response: IPlaylist, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var search: {
        /**
         * Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
         * @params {string} channelId The channelId parameter indicates that the API response should only contain resources created by the channel
         * @params {string} channelType The channelType parameter lets you restrict a search to a particular type of channel.
         * @params {string} eventType The eventType parameter restricts a search to broadcast events.
         * @params {boolean} forContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
         * @params {boolean} forMine The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
         * @params {string} location The location parameter restricts a search to videos that have a geographical location specified in their metadata. The value is a string that specifies geographic latitude/longitude coordinates e.g. (37.42307,-122.08427)
         * @params {string} locationRadius The locationRadius, in conjunction with the location parameter, defines a geographic area. If the geographic coordinates associated with a video fall within that area, then the video may be included in search results. This parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} order The order parameter specifies the method that will be used to order resources in the API response.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a search result, the snippet property contains other properties that identify the result's title, description, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
         * @params {string} publishedAfter The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
         * @params {string} publishedBefore The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
         * @params {string} q The q parameter specifies the query term to search for.
         * @params {string} regionCode The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
         * @params {string} relatedToVideoId The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
         * @params {string} safeSearch The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
         * @params {string} topicId The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
         * @params {string} type The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
         * @params {string} videoCaption The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions.
         * @params {string} videoCategoryId The videoCategoryId parameter filters video search results based on their category.
         * @params {string} videoDefinition The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available.
         * @params {string} videoDimension The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos.
         * @params {string} videoDuration The videoDuration parameter filters video search results based on their duration.
         * @params {string} videoEmbeddable The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage.
         * @params {string} videoLicense The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos.
         * @params {string} videoSyndicated The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com.
         * @params {string} videoType The videoType parameter lets you restrict a search to a particular type of videos.
         */
        list: (params: {
            channelId?: string;
            channelType?: string;
            eventType?: string;
            forContentOwner?: boolean;
            forMine?: boolean;
            location?: string;
            locationRadius?: string;
            maxResults?: number;
            onBehalfOfContentOwner?: string;
            order?: string;
            pageToken?: string;
            part: string;
            publishedAfter?: string;
            publishedBefore?: string;
            q?: string;
            regionCode?: string;
            relatedToVideoId?: string;
            safeSearch?: string;
            topicId?: string;
            type?: string;
            videoCaption?: string;
            videoCategoryId?: string;
            videoDefinition?: string;
            videoDimension?: string;
            videoDuration?: string;
            videoEmbeddable?: string;
            videoLicense?: string;
            videoSyndicated?: string;
            videoType?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISearchListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var subscriptions: {
        /**
         * Deletes a subscription.
         * @params {string} id The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
         */
        delete: (params: {
            id: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Adds a subscription for the authenticated user's channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
         */
        insert: (params: {
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISubscription;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns subscription resources that match the API request criteria.
         * @params {string} channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
         * @params {string} forChannelId The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
         * @params {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
         * @params {boolean} mySubscribers Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} order The order parameter specifies the method that will be used to sort resources in the API response.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
         * @params {string} part The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
         */
        list: (params: {
            channelId?: string;
            forChannelId?: string;
            id?: string;
            maxResults?: number;
            mine?: boolean;
            mySubscribers?: boolean;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            order?: string;
            pageToken?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscriptionListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var thumbnails: {
        /**
         * Uploads a custom video thumbnail to YouTube and sets it for a video.
         * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
         * @params {string} videoId The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
         */
        set: (params: {
            onBehalfOfContentOwner?: string;
            videoId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IThumbnailSetResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var videoCategories: {
        /**
         * Returns a list of categories that can be associated with YouTube videos.
         * @params {string} hl The hl parameter specifies the language that should be used for text values in the API response.
         * @params {string} id The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
         * @params {string} part The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
         * @params {string} regionCode The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
         */
        list: (params: {
            hl?: string;
            id?: string;
            part: string;
            regionCode?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IVideoCategoryListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var videos: {
        /**
         * Deletes a YouTube video.
         * @params {string} id The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        delete: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        getRating: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IVideoGetRatingResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Uploads a video to YouTube and optionally sets the video's metadata.
         * @params {boolean} autoLevels The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
         * @params {boolean} notifySubscribers The notifySubscribers parameter indicates whether YouTube should send notification to subscribers about the inserted video.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails. However, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
         * @params {boolean} stabilize The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
         */
        insert: (params: {
            autoLevels?: boolean;
            notifySubscribers?: boolean;
            onBehalfOfContentOwner?: string;
            onBehalfOfContentOwnerChannel?: string;
            part: string;
            stabilize?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IVideo;
        }, callback: (err: IErrorResponse, response: IVideo, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a list of videos that match the API request parameters.
         * @params {string} chart The chart parameter identifies the chart that you want to retrieve.
         * @params {string} id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
         * @params {string} locale DEPRECATED
         * @params {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.

Note: This parameter is supported for use in conjunction with the myRating parameter, but it is not supported for use in conjunction with the id parameter.
         * @params {string} myRating Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.

Note: This parameter is supported for use in conjunction with the myRating parameter, but it is not supported for use in conjunction with the id parameter.
         * @params {string} part The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
         * @params {string} regionCode The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
         * @params {string} videoCategoryId The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
         */
        list: (params: {
            chart?: string;
            id?: string;
            locale?: string;
            maxResults?: number;
            myRating?: string;
            onBehalfOfContentOwner?: string;
            pageToken?: string;
            part: string;
            regionCode?: string;
            videoCategoryId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IVideoListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Add a like or dislike rating to a video or remove a rating from a video.
         * @params {string} id The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} rating Specifies the rating to record.
         */
        rate: (params: {
            id: string;
            onBehalfOfContentOwner?: string;
            rating: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Updates a video's metadata.
         * @params {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
         * @params {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.

In addition, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
         */
        update: (params: {
            onBehalfOfContentOwner?: string;
            part: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IVideo;
        }, callback: (err: IErrorResponse, response: IVideo, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var watermarks: {
        /**
         * Uploads a watermark image to YouTube and sets it for a channel.
         * @params {string} channelId The channelId parameter specifies a YouTube channel ID for which the watermark is being provided.
         * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
         */
        set: (params: {
            channelId: string;
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInvideoBranding;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Deletes a watermark.
         * @params {string} channelId The channelId parameter specifies a YouTube channel ID for which the watermark is being unset.
         * @params {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
         */
        unset: (params: {
            channelId: string;
            onBehalfOfContentOwner?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    /**
     * Rights management policy for YouTube resources.
     */
    interface IAccessPolicy {
        /**
         * The value of allowed indicates whether the access to the policy is allowed or denied by default.
         */
        allowed: boolean;
        /**
         * A list of region codes that identify countries where the default policy do not apply.
         */
        exception: string[];
    }
    /**
     * An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
     */
    interface IActivity {
        /**
         * The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video.
         */
        contentDetails: IActivityContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the activity.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#activity".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the activity, including the activity's type and group ID.
         */
        snippet: IActivitySnippet;
    }
    /**
     * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
     */
    interface IActivityContentDetails {
        /**
         * The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.
         */
        bulletin: IActivityContentDetailsBulletin;
        /**
         * The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem.
         */
        channelItem: IActivityContentDetailsChannelItem;
        /**
         * The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.
         */
        comment: IActivityContentDetailsComment;
        /**
         * The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.
         */
        favorite: IActivityContentDetailsFavorite;
        /**
         * The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.
         */
        like: IActivityContentDetailsLike;
        /**
         * The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.
         */
        playlistItem: IActivityContentDetailsPlaylistItem;
        /**
         * The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.
         */
        promotedItem: IActivityContentDetailsPromotedItem;
        /**
         * The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.
         */
        recommendation: IActivityContentDetailsRecommendation;
        /**
         * The social object contains details about a social network post. This property is only present if the snippet.type is social.
         */
        social: IActivityContentDetailsSocial;
        /**
         * The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.
         */
        subscription: IActivityContentDetailsSubscription;
        /**
         * The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.
         */
        upload: IActivityContentDetailsUpload;
    }
    /**
     * Details about a channel bulletin post.
     */
    interface IActivityContentDetailsBulletin {
        /**
         * The resourceId object contains information that identifies the resource associated with a bulletin post.
         */
        resourceId: IResourceId;
    }
    /**
     * Details about a resource which was added to a channel.
     */
    interface IActivityContentDetailsChannelItem {
        /**
         * The resourceId object contains information that identifies the resource that was added to the channel.
         */
        resourceId: IResourceId;
    }
    /**
     * Information about a resource that received a comment.
     */
    interface IActivityContentDetailsComment {
        /**
         * The resourceId object contains information that identifies the resource associated with the comment.
         */
        resourceId: IResourceId;
    }
    /**
     * Information about a video that was marked as a favorite video.
     */
    interface IActivityContentDetailsFavorite {
        /**
         * The resourceId object contains information that identifies the resource that was marked as a favorite.
         */
        resourceId: IResourceId;
    }
    /**
     * Information about a resource that received a positive (like) rating.
     */
    interface IActivityContentDetailsLike {
        /**
         * The resourceId object contains information that identifies the rated resource.
         */
        resourceId: IResourceId;
    }
    /**
     * Information about a new playlist item.
     */
    interface IActivityContentDetailsPlaylistItem {
        /**
         * The value that YouTube uses to uniquely identify the playlist.
         */
        playlistId: string;
        /**
         * ID of the item within the playlist.
         */
        playlistItemId: string;
        /**
         * The resourceId object contains information about the resource that was added to the playlist.
         */
        resourceId: IResourceId;
    }
    /**
     * Details about a resource which is being promoted.
     */
    interface IActivityContentDetailsPromotedItem {
        /**
         * The URL the client should fetch to request a promoted item.
         */
        adTag: string;
        /**
         * The URL the client should ping to indicate that the user clicked through on this promoted item.
         */
        clickTrackingUrl: string;
        /**
         * The URL the client should ping to indicate that the user was shown this promoted item.
         */
        creativeViewUrl: string;
        /**
         * The type of call-to-action, a message to the user indicating action that can be taken.
         */
        ctaType: string;
        /**
         * The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
         */
        customCtaButtonText: string;
        /**
         * The text description to accompany the promoted item.
         */
        descriptionText: string;
        /**
         * The URL the client should direct the user to, if the user chooses to visit the advertiser's website.
         */
        destinationUrl: string;
        /**
         * The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.
         */
        forecastingUrl: string[];
        /**
         * The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
         */
        impressionUrl: string[];
        /**
         * The ID that YouTube uses to uniquely identify the promoted video.
         */
        videoId: string;
    }
    /**
     * Information that identifies the recommended resource.
     */
    interface IActivityContentDetailsRecommendation {
        /**
         * The reason that the resource is recommended to the user.
         */
        reason: string;
        /**
         * The resourceId object contains information that identifies the recommended resource.
         */
        resourceId: IResourceId;
        /**
         * The seedResourceId object contains information about the resource that caused the recommendation.
         */
        seedResourceId: IResourceId;
    }
    /**
     * Details about a social network post.
     */
    interface IActivityContentDetailsSocial {
        /**
         * The author of the social network post.
         */
        author: string;
        /**
         * An image of the post's author.
         */
        imageUrl: string;
        /**
         * The URL of the social network post.
         */
        referenceUrl: string;
        /**
         * The resourceId object encapsulates information that identifies the resource associated with a social network post.
         */
        resourceId: IResourceId;
        /**
         * The name of the social network.
         */
        type: string;
    }
    /**
     * Information about a channel that a user subscribed to.
     */
    interface IActivityContentDetailsSubscription {
        /**
         * The resourceId object contains information that identifies the resource that the user subscribed to.
         */
        resourceId: IResourceId;
    }
    /**
     * Information about the uploaded video.
     */
    interface IActivityContentDetailsUpload {
        /**
         * The ID that YouTube uses to uniquely identify the uploaded video.
         */
        videoId: string;
    }
    interface IActivityListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of activities, or events, that match the request criteria.
         */
        items: IActivity[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about an activity, including title, description, thumbnails, activity type and group.
     */
    interface IActivitySnippet {
        /**
         * The ID that YouTube uses to uniquely identify the channel associated with the activity.
         */
        channelId: string;
        /**
         * Channel title for the channel responsible for this activity
         */
        channelTitle: string;
        /**
         * The description of the resource primarily associated with the activity.
         */
        description: string;
        /**
         * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
         */
        groupId: string;
        /**
         * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The title of the resource primarily associated with the activity.
         */
        title: string;
        /**
         * The type of activity that the resource describes.
         */
        type: string;
    }
    /**
     * Brief description of the live stream cdn settings.
     */
    interface ICdnSettings {
        /**
         * The format of the video stream that you are sending to Youtube.
         */
        format: string;
        /**
         * The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.
         */
        ingestionInfo: IIngestionInfo;
        /**
         * The method or protocol used to transmit the video stream.
         */
        ingestionType: string;
    }
    /**
     * A channel resource contains information about a YouTube channel.
     */
    interface IChannel {
        /**
         * The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.
         */
        auditDetails: IChannelAuditDetails;
        /**
         * The brandingSettings object encapsulates information about the branding of the channel.
         */
        brandingSettings: IChannelBrandingSettings;
        /**
         * The contentDetails object encapsulates information about the channel's content.
         */
        contentDetails: IChannelContentDetails;
        /**
         * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
         */
        contentOwnerDetails: IChannelContentOwnerDetails;
        /**
         * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
         */
        conversionPings: IChannelConversionPings;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel.
         */
        id: string;
        /**
         * The invideoPromotion object encapsulates information about promotion campaign associated with the channel.
         */
        invideoPromotion: IInvideoPromotion;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#channel".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
         */
        snippet: IChannelSnippet;
        /**
         * The statistics object encapsulates statistics for the channel.
         */
        statistics: IChannelStatistics;
        /**
         * The status object encapsulates information about the privacy status of the channel.
         */
        status: IChannelStatus;
        /**
         * The topicDetails object encapsulates information about Freebase topics associated with the channel.
         */
        topicDetails: IChannelTopicDetails;
    }
    /**
     * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
     */
    interface IChannelAuditDetails {
        /**
         * Whether or not the channel respects the community guidelines.
         */
        communityGuidelinesGoodStanding: boolean;
        /**
         * Whether or not the channel has any unresolved claims.
         */
        contentIdClaimsGoodStanding: boolean;
        /**
         * Whether or not the channel has any copyright strikes.
         */
        copyrightStrikesGoodStanding: boolean;
        /**
         * Describes the general state of the channel. This field will always show if there are any issues whatsoever with the channel. Currently this field represents the result of the logical and operation over the community guidelines good standing, the copyright strikes good standing and the content ID claims good standing, but this may change in the future.
         */
        overallGoodStanding: boolean;
    }
    /**
     * A channel banner returned as the response to a channel_banner.insert call.
     */
    interface IChannelBannerResource {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".
         */
        kind: string;
        /**
         * The URL of this banner image.
         */
        url: string;
    }
    /**
     * Branding properties of a YouTube channel.
     */
    interface IChannelBrandingSettings {
        /**
         * Branding properties for the channel view.
         */
        channel: IChannelSettings;
        /**
         * Additional experimental branding properties.
         */
        hints: IPropertyValue[];
        /**
         * Branding properties for branding images.
         */
        image: IImageSettings;
        /**
         * Branding properties for the watch page.
         */
        watch: IWatchSettings;
    }
    /**
     * Details about the content of a channel.
     */
    interface IChannelContentDetails {
        /**
         * The googlePlusUserId object identifies the Google+ profile ID associated with this channel.
         */
        googlePlusUserId: string;
        relatedPlaylists: {
            favorites: string;
            likes: string;
            uploads: string;
            watchHistory: string;
            watchLater: string;
        };
    }
    /**
     * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
     */
    interface IChannelContentOwnerDetails {
        /**
         * The ID of the content owner linked to the channel.
         */
        contentOwner: string;
        /**
         * The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        timeLinked: string; // date-time
    }
    /**
     * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
     */
    interface IChannelConversionPing {
        /**
         * Defines the context of the ping.
         */
        context: string;
        /**
         * The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.
         */
        conversionUrl: string;
    }
    /**
     * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
     */
    interface IChannelConversionPings {
        /**
         * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
         */
        pings: IChannelConversionPing[];
    }
    interface IChannelListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of channels that match the request criteria.
         */
        items: IChannel[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * TODO(lxz) follow up with adiamondstein@ to fullfill the doc before deploying
     */
    interface IChannelSection {
        /**
         * The contentDetails object contains details about the ChannelSection content, such as playlists and channels.
         */
        contentDetails: IChannelSectionContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the ChannelSection.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the ChannelSection, such as its type, style and title.
         */
        snippet: IChannelSectionSnippet;
    }
    /**
     * Details about a channelsection, including playlists and channels.
     */
    interface IChannelSectionContentDetails {
        /**
         * The channel ids for type multiple_channels.
         */
        channels: string[];
        /**
         * The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
         */
        playlists: string[];
    }
    interface IChannelSectionListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of ChannelSections that match the request criteria.
         */
        items: IChannelSection[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".
         */
        kind: string;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about a channelsection, including title, style and position.
     */
    interface IChannelSectionSnippet {
        /**
         * The ID that YouTube uses to uniquely identify the channel that published the channelSection.
         */
        channelId: string;
        /**
         * The position of the channelSection in the channel.
         */
        position: number; // uint32
        /**
         * The style of the channelSection.
         */
        style: string;
        /**
         * The channelSection's title for multiple_playlists and multiple_channels.
         */
        title: string;
        /**
         * The type of the channelSection.
         */
        type: string;
    }
    /**
     * Branding properties for the channel view.
     */
    interface IChannelSettings {
        /**
         * Which content tab users should see when viewing the channel.
         */
        defaultTab: string;
        /**
         * Specifies the channel description.
         */
        description: string;
        /**
         * Title for the featured channels tab.
         */
        featuredChannelsTitle: string;
        /**
         * The list of featured channels.
         */
        featuredChannelsUrls: string[];
        /**
         * Lists keywords associated with the channel, comma-separated.
         */
        keywords: string;
        /**
         * Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
         */
        moderateComments: boolean;
        /**
         * A prominent color that can be rendered on this channel page.
         */
        profileColor: string;
        /**
         * Whether the tab to browse the videos should be displayed.
         */
        showBrowseView: boolean;
        /**
         * Whether related channels should be proposed.
         */
        showRelatedChannels: boolean;
        /**
         * Specifies the channel title.
         */
        title: string;
        /**
         * The ID for a Google Analytics account to track and measure traffic to the channels.
         */
        trackingAnalyticsAccountId: string;
        /**
         * The trailer of the channel, for users that are not subscribers.
         */
        unsubscribedTrailer: string;
    }
    /**
     * Basic details about a channel, including title, description and thumbnails.
     */
    interface IChannelSnippet {
        /**
         * The description of the channel.
         */
        description: string;
        /**
         * The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The channel's title.
         */
        title: string;
    }
    /**
     * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
     */
    interface IChannelStatistics {
        /**
         * The number of comments for the channel.
         */
        commentCount: string; // uint64
        /**
         * Whether or not the number of subscribers is shown for this user.
         */
        hiddenSubscriberCount: boolean;
        /**
         * The number of subscribers that the channel has.
         */
        subscriberCount: string; // uint64
        /**
         * The number of videos uploaded to the channel.
         */
        videoCount: string; // uint64
        /**
         * The number of times the channel has been viewed.
         */
        viewCount: string; // uint64
    }
    /**
     * JSON template for the status part of a channel.
     */
    interface IChannelStatus {
        /**
         * If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.
         */
        isLinked: boolean;
        /**
         * Privacy status of the channel.
         */
        privacyStatus: string;
    }
    /**
     * Freebase topic information related to the channel.
     */
    interface IChannelTopicDetails {
        /**
         * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
         */
        topicIds: string[];
    }
    /**
     * Ratings schemes. The country-specific ratings are mostly for movies and shows.
     */
    interface IContentRating {
        /**
         * Rating system in Australia - Australian Classification Board
         */
        acbRating: string;
        /**
         * Rating system for Italy - Autorit� per le Garanzie nelle Comunicazioni
         */
        agcomRating: string;
        /**
         * Rating system for Chile - Asociaci�n Nacional de Televisi�n
         */
        anatelRating: string;
        /**
         * British Board of Film Classification
         */
        bbfcRating: string;
        /**
         * Rating system for Thailand - Board of Filmand Video Censors
         */
        bfvcRating: string;
        /**
         * Rating system for Austria - Bundesministeriums f�r Unterricht, Kunst und Kultur!
         */
        bmukkRating: string;
        /**
         * Rating system for Canadian TV - Canadian TV Classification System
         */
        catvRating: string;
        /**
         * Rating system for French Canadian TV - Regie du cinema
         */
        catvfrRating: string;
        /**
         * Rating system in India - Central Board of Film Certification
         */
        cbfcRating: string;
        /**
         * Rating system for Chile - Consejo de Calificaci�n Cinematogr�fica
         */
        cccRating: string;
        /**
         * Rating system for Portugal - Comiss�o de Classifica��o de Espect�culos
         */
        cceRating: string;
        /**
         * Rating system for Switzerland - Switzerland Rating System
         */
        chfilmRating: string;
        /**
         * Canadian Home Video Rating System
         */
        chvrsRating: string;
        /**
         * Rating system for Belgium - Belgium Rating System
         */
        cicfRating: string;
        /**
         * Rating system for Romania - CONSILIUL NATIONAL AL AUDIOVIZUALULUI - CNA
         */
        cnaRating: string;
        /**
         * Rating system for France - Conseil sup�rieur de l?audiovisuel
         */
        csaRating: string;
        /**
         * Rating system for Luxembourg - Commission de surveillance de la classification des films
         */
        cscfRating: string;
        /**
         * Rating system for Czech republic - Czech republic Rating System
         */
        czfilmRating: string;
        /**
         * Rating system in Brazil - Department of Justice, Rating, Titles and Qualification
         */
        djctqRating: string;
        /**
         * Rating system for Estonia - Estonia Rating System
         */
        eefilmRating: string;
        /**
         * Rating system for Egypt - Egypt Rating System
         */
        egfilmRating: string;
        /**
         * Rating system in Japan - Eiga Rinri Kanri Iinkai
         */
        eirinRating: string;
        /**
         * Rating system for Malaysia - Film Censorship Board of Malaysia
         */
        fcbmRating: string;
        /**
         * Rating system for Hong kong - Office for Film, Newspaper and Article Administration
         */
        fcoRating: string;
        /**
         * Rating system in France - French Minister of Culture
         */
        fmocRating: string;
        /**
         * Rating system for South africa - Film & Publication Board
         */
        fpbRating: string;
        /**
         * Rating system in Germany - Voluntary Self Regulation of the Movie Industry
         */
        fskRating: string;
        /**
         * Rating system for Greece - Greece Rating System
         */
        grfilmRating: string;
        /**
         * Rating system in Spain - Instituto de Cinematografia y de las Artes Audiovisuales
         */
        icaaRating: string;
        /**
         * Rating system in Ireland - Irish Film Classification Office
         */
        ifcoRating: string;
        /**
         * Rating system for Israel - Israel Rating System
         */
        ilfilmRating: string;
        /**
         * Rating system for Argentina - Instituto Nacional de Cine y Artes Audiovisuales
         */
        incaaRating: string;
        /**
         * Rating system for Kenya - Kenya Film Classification Board
         */
        kfcbRating: string;
        /**
         * Rating system for Netherlands - Nederlands Instituut voor de Classificatie van Audiovisuele Media
         */
        kijkwijzerRating: string;
        /**
         * Rating system in South Korea - Korea Media Rating Board
         */
        kmrbRating: string;
        /**
         * Rating system for Indonesia - Lembaga Sensor Film
         */
        lsfRating: string;
        /**
         * Rating system for Malta - Film Age-Classification Board
         */
        mccaaRating: string;
        /**
         * Rating system for Denmark - The Media Council for Children and Young People
         */
        mccypRating: string;
        /**
         * Rating system for Singapore - Media Development Authority
         */
        mdaRating: string;
        /**
         * Rating system for Norway - Medietilsynet
         */
        medietilsynetRating: string;
        /**
         * Rating system for Finland - Finnish Centre for Media Education and Audiovisual Media
         */
        mekuRating: string;
        /**
         * Rating system in Italy - Ministero dei Beni e delle Attivita Culturali e del Turismo
         */
        mibacRating: string;
        /**
         * Rating system for Colombia - MoC
         */
        mocRating: string;
        /**
         * Rating system for Taiwan - Ministry of Culture - Tawan
         */
        moctwRating: string;
        /**
         * Motion Picture Association of America rating for the content.
         */
        mpaaRating: string;
        /**
         * Rating system for Philippines - MOVIE AND TELEVISION REVIEW AND CLASSIFICATION BOARD
         */
        mtrcbRating: string;
        /**
         * Rating system for Maldives - National Bureau of Classification
         */
        nbcRating: string;
        /**
         * Rating system for Poland - National Broadcasting Council
         */
        nbcplRating: string;
        /**
         * Rating system for Bulgaria - National Film Centre
         */
        nfrcRating: string;
        /**
         * Rating system for Nigeria - National Film and Video Censors Board
         */
        nfvcbRating: string;
        /**
         * Rating system for Latvia - National Film Center of Latvia
         */
        nkclvRating: string;
        /**
         * Rating system in New Zealand - Office of Film and Literature Classification
         */
        oflcRating: string;
        /**
         * Rating system for Peru - Peru Rating System
         */
        pefilmRating: string;
        /**
         * Rating system for Hungary - Rating Committee of the National Office of Film
         */
        rcnofRating: string;
        /**
         * Rating system for Venezuela - SiBCI
         */
        resorteviolenciaRating: string;
        /**
         * Rating system in Mexico - General Directorate of Radio, Television and Cinematography
         */
        rtcRating: string;
        /**
         * Rating system for Ireland - Raidi� Teilif�s �ireann
         */
        rteRating: string;
        /**
         * Rating system in Russia
         */
        russiaRating: string;
        /**
         * Rating system for Slovakia - Slovakia Rating System
         */
        skfilmRating: string;
        /**
         * Rating system for Iceland - SMAIS
         */
        smaisRating: string;
        /**
         * Rating system for Sweden - Statens medier�d (National Media Council)
         */
        smsaRating: string;
        /**
         * TV Parental Guidelines rating of the content.
         */
        tvpgRating: string;
        /**
         * Internal YouTube rating.
         */
        ytRating: string;
    }
    /**
     * Geographical coordinates of a point, in WGS84.
     */
    interface IGeoPoint {
        /**
         * Altitude above the reference ellipsoid, in meters.
         */
        altitude: number; // double
        /**
         * Latitude in degrees.
         */
        latitude: number; // double
        /**
         * Longitude in degrees.
         */
        longitude: number; // double
    }
    /**
     * A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel's content or other indicators, such as the channel's popularity. The list is similar to video categories, with the difference being that a video's uploader can assign a video category but only YouTube can assign a channel category.
     */
    interface IGuideCategory {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the guide category.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategory".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the category, such as its title.
         */
        snippet: IGuideCategorySnippet;
    }
    interface IGuideCategoryListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding guideCategory resource.
         */
        items: IGuideCategory[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategoryListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about a guide category.
     */
    interface IGuideCategorySnippet {
        channelId: string;
        /**
         * Description of the guide category.
         */
        title: string;
    }
    /**
     * An i18nLanguage resource identifies a UI language currently supported by YouTube.
     */
    interface II18nLanguage {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the i18n language.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the i18n language, such as language code and human-readable name.
         */
        snippet: II18nLanguageSnippet;
    }
    interface II18nLanguageListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
         */
        items: II18nLanguage[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".
         */
        kind: string;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about an i18n language, such as language code and human-readable name.
     */
    interface II18nLanguageSnippet {
        /**
         * A short BCP-47 code that uniquely identifies a language.
         */
        hl: string;
        /**
         * The human-readable name of the language in the language itself.
         */
        name: string;
    }
    /**
     * A i18nRegion resource identifies a region where YouTube is available.
     */
    interface II18nRegion {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the i18n region.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the i18n region, such as region code and human-readable name.
         */
        snippet: II18nRegionSnippet;
    }
    interface II18nRegionListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
         */
        items: II18nRegion[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".
         */
        kind: string;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about an i18n region, such as region code and human-readable name.
     */
    interface II18nRegionSnippet {
        /**
         * The region code as a 2-letter ISO country code.
         */
        gl: string;
        /**
         * The human-readable name of the region.
         */
        name: string;
    }
    /**
     * Branding properties for images associated with the channel.
     */
    interface IImageSettings {
        /**
         * The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.
         */
        backgroundImageUrl: ILocalizedProperty;
        /**
         * This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs.
         */
        bannerExternalUrl: string;
        /**
         * Banner image. Desktop size (1060x175).
         */
        bannerImageUrl: string;
        /**
         * Banner image. Mobile size high resolution (1440x395).
         */
        bannerMobileExtraHdImageUrl: string;
        /**
         * Banner image. Mobile size high resolution (1280x360).
         */
        bannerMobileHdImageUrl: string;
        /**
         * Banner image. Mobile size (640x175).
         */
        bannerMobileImageUrl: string;
        /**
         * Banner image. Mobile size low resolution (320x88).
         */
        bannerMobileLowImageUrl: string;
        /**
         * Banner image. Mobile size medium/high resolution (960x263).
         */
        bannerMobileMediumHdImageUrl: string;
        /**
         * Banner image. Tablet size extra high resolution (2560x424).
         */
        bannerTabletExtraHdImageUrl: string;
        /**
         * Banner image. Tablet size high resolution (2276x377).
         */
        bannerTabletHdImageUrl: string;
        /**
         * Banner image. Tablet size (1707x283).
         */
        bannerTabletImageUrl: string;
        /**
         * Banner image. Tablet size low resolution (1138x188).
         */
        bannerTabletLowImageUrl: string;
        /**
         * Banner image. TV size high resolution (1920x1080).
         */
        bannerTvHighImageUrl: string;
        /**
         * Banner image. TV size extra high resolution (2120x1192).
         */
        bannerTvImageUrl: string;
        /**
         * Banner image. TV size low resolution (854x480).
         */
        bannerTvLowImageUrl: string;
        /**
         * Banner image. TV size medium resolution (1280x720).
         */
        bannerTvMediumImageUrl: string;
        /**
         * The image map script for the large banner image.
         */
        largeBrandedBannerImageImapScript: ILocalizedProperty;
        /**
         * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
         */
        largeBrandedBannerImageUrl: ILocalizedProperty;
        /**
         * The image map script for the small banner image.
         */
        smallBrandedBannerImageImapScript: ILocalizedProperty;
        /**
         * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page.
         */
        smallBrandedBannerImageUrl: ILocalizedProperty;
        /**
         * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
         */
        trackingImageUrl: string;
        /**
         * The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.
         */
        watchIconImageUrl: string;
    }
    /**
     * Describes information necessary for ingesting an RTMP or an HTTP stream.
     */
    interface IIngestionInfo {
        /**
         * The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.
         */
        backupIngestionAddress: string;
        /**
         * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.
         * 
         * Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:
         * 
         * STREAM_URL/STREAM_NAME
         */
        ingestionAddress: string;
        /**
         * The HTTP or RTMP stream name that YouTube assigns to the video stream.
         */
        streamName: string;
    }
    interface IInvideoBranding {
        imageBytes: string; // byte
        imageUrl: string;
        position: IInvideoPosition;
        targetChannelId: string;
        timing: IInvideoTiming;
    }
    /**
     * Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
     */
    interface IInvideoPosition {
        /**
         * Describes in which corner of the video the visual widget will appear.
         */
        cornerPosition: string;
        /**
         * Defines the position type.
         */
        type: string;
    }
    /**
     * Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id.
     */
    interface IInvideoPromotion {
        /**
         * The default temporal position within the video where the promoted item will be displayed. Can be overriden by more specific timing in the item.
         */
        defaultTiming: IInvideoTiming;
        /**
         * List of promoted items in decreasing priority.
         */
        items: IPromotedItem[];
        /**
         * The spatial position within the video where the promoted item will be displayed.
         */
        position: IInvideoPosition;
    }
    /**
     * Describes a temporal position of a visual widget inside a video.
     */
    interface IInvideoTiming {
        /**
         * Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
         */
        durationMs: string; // uint64
        /**
         * Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
         */
        offsetMs: string; // uint64
        /**
         * Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.
         */
        type: string;
    }
    /**
     * A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.
     */
    interface ILiveBroadcast {
        /**
         * The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.
         */
        contentDetails: ILiveBroadcastContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube assigns to uniquely identify the broadcast.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the event, including its title, description, start time, and end time.
         */
        snippet: ILiveBroadcastSnippet;
        /**
         * The status object contains information about the event's status.
         */
        status: ILiveBroadcastStatus;
    }
    /**
     * Detailed settings of a broadcast.
     */
    interface ILiveBroadcastContentDetails {
        /**
         * This value uniquely identifies the live stream bound to the broadcast.
         */
        boundStreamId: string;
        /**
         * This setting indicates whether closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API.
         */
        enableClosedCaptions: boolean;
        /**
         * This setting indicates whether YouTube should enable content encryption for the broadcast.
         */
        enableContentEncryption: boolean;
        /**
         * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.
         * 
         * 
         * 
         * Important: You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
         */
        enableDvr: boolean;
        /**
         * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
         */
        enableEmbed: boolean;
        /**
         * The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.
         */
        monitorStream: IMonitorStreamInfo;
        /**
         * Automatically start recording after the event goes live. The default value for this property is true.
         * 
         * 
         * 
         * Important: You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
         */
        recordFromStart: boolean;
        /**
         * This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.
         */
        startWithSlate: boolean;
    }
    interface ILiveBroadcastListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of broadcasts that match the request criteria.
         */
        items: ILiveBroadcast[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    interface ILiveBroadcastSnippet {
        /**
         * The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        actualEndTime: string; // date-time
        /**
         * The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        actualStartTime: string; // date-time
        /**
         * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
         */
        channelId: string;
        /**
         * The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
         */
        description: string;
        /**
         * The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        scheduledEndTime: string; // date-time
        /**
         * The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        scheduledStartTime: string; // date-time
        /**
         * A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.
         */
        title: string;
    }
    interface ILiveBroadcastStatus {
        /**
         * The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
         */
        lifeCycleStatus: string;
        /**
         * Priority of the live broadcast event (internal state).
         */
        liveBroadcastPriority: string;
        /**
         * The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
         */
        privacyStatus: string;
        /**
         * The broadcast's recording status.
         */
        recordingStatus: string;
    }
    /**
     * A live stream describes a live ingestion point.
     */
    interface ILiveStream {
        /**
         * The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.
         */
        cdn: ICdnSettings;
        /**
         * The content_details object contains information about the stream, including the closed captions ingestion URL.
         */
        contentDetails: ILiveStreamContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube assigns to uniquely identify the stream.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the stream, including its channel, title, and description.
         */
        snippet: ILiveStreamSnippet;
        /**
         * The status object contains information about live stream's status.
         */
        status: ILiveStreamStatus;
    }
    /**
     * Detailed settings of a stream.
     */
    interface ILiveStreamContentDetails {
        /**
         * The ingestion URL where the closed captions of this stream are sent.
         */
        closedCaptionsIngestionUrl: string;
    }
    interface ILiveStreamListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of live streams that match the request criteria.
         */
        items: ILiveStream[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    interface ILiveStreamSnippet {
        /**
         * The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
         */
        channelId: string;
        /**
         * The stream's description. The value cannot be longer than 10000 characters.
         */
        description: string;
        /**
         * The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * The stream's title. The value must be between 1 and 128 characters long.
         */
        title: string;
    }
    /**
     * Brief description of the live stream status.
     */
    interface ILiveStreamStatus {
        streamStatus: string;
    }
    /**
     * Represent a property available in different languages.
     */
    interface ILocalizedProperty {
        /**
         * Default value for the localized property.
         */
        default: string;
        /**
         * The localized values.
         */
        localized: ILocalizedString[];
    }
    /**
     * A localized string.
     */
    interface ILocalizedString {
        /**
         * Language associated to this value.
         */
        language: string;
        /**
         * Value of the property.
         */
        value: string;
    }
    /**
     * Settings and Info of the monitor stream
     */
    interface IMonitorStreamInfo {
        /**
         * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
         */
        broadcastStreamDelayMs: number; // uint32
        /**
         * HTML code that embeds a player that plays the monitor stream.
         */
        embedHtml: string;
        /**
         * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.
         * 
         * You need to set this value to true if you intend to have a broadcast delay for your event.
         * 
         * Note: This property cannot be updated once the broadcast is in the testing or live state.
         */
        enableMonitorStream: boolean;
    }
    /**
     * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
     */
    interface IPageInfo {
        /**
         * The number of results included in the API response.
         */
        resultsPerPage: number; // int32
        /**
         * The total number of results in the result set.
         */
        totalResults: number; // int32
    }
    /**
     * A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
     * 
     * YouTube also uses playlists to identify special collections of videos for a channel, such as:  
     * - uploaded videos 
     * - favorite videos 
     * - positively rated (liked) videos 
     * - watch history 
     * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the  channel resource for a given channel.
     * 
     * You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods.
     */
    interface IPlaylist {
        /**
         * The contentDetails object contains information like video count.
         */
        contentDetails: IPlaylistContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the playlist.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".
         */
        kind: string;
        /**
         * The player object contains information that you would use to play the playlist in an embedded player.
         */
        player: IPlaylistPlayer;
        /**
         * The snippet object contains basic details about the playlist, such as its title and description.
         */
        snippet: IPlaylistSnippet;
        /**
         * The status object contains status information for the playlist.
         */
        status: IPlaylistStatus;
    }
    interface IPlaylistContentDetails {
        /**
         * The number of videos in the playlist.
         */
        itemCount: number; // uint32
    }
    /**
     * A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
     * 
     * YouTube uses playlists to identify special collections of videos for a channel, such as:  
     * - uploaded videos 
     * - favorite videos 
     * - positively rated (liked) videos 
     * - watch history 
     * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information.
     * 
     * You can retrieve the playlist IDs for each of these lists from the  channel resource  for a given channel. You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
     */
    interface IPlaylistItem {
        /**
         * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
         */
        contentDetails: IPlaylistItemContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the playlist item.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
         */
        snippet: IPlaylistItemSnippet;
        /**
         * The status object contains information about the playlist item's privacy status.
         */
        status: IPlaylistItemStatus;
    }
    interface IPlaylistItemContentDetails {
        /**
         * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.
         */
        endAt: string;
        /**
         * A user-generated note for this item.
         */
        note: string;
        /**
         * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
         */
        startAt: string;
        /**
         * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
         */
        videoId: string;
    }
    interface IPlaylistItemListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of playlist items that match the request criteria.
         */
        items: IPlaylistItem[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about a playlist, including title, description and thumbnails.
     */
    interface IPlaylistItemSnippet {
        /**
         * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
         */
        channelId: string;
        /**
         * Channel title for the channel that the playlist item belongs to.
         */
        channelTitle: string;
        /**
         * The item's description.
         */
        description: string;
        /**
         * The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
         */
        playlistId: string;
        /**
         * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
         */
        position: number; // uint32
        /**
         * The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
         */
        resourceId: IResourceId;
        /**
         * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The item's title.
         */
        title: string;
    }
    /**
     * Information about the playlist item's privacy status.
     */
    interface IPlaylistItemStatus {
        /**
         * This resource's privacy status.
         */
        privacyStatus: string;
    }
    interface IPlaylistListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of playlists that match the request criteria.
         */
        items: IPlaylist[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    interface IPlaylistPlayer {
        /**
         * An <iframe> tag that embeds a player that will play the playlist.
         */
        embedHtml: string;
    }
    /**
     * Basic details about a playlist, including title, description and thumbnails.
     */
    interface IPlaylistSnippet {
        /**
         * The ID that YouTube uses to uniquely identify the channel that published the playlist.
         */
        channelId: string;
        /**
         * The channel title of the channel that the video belongs to.
         */
        channelTitle: string;
        /**
         * The playlist's description.
         */
        description: string;
        /**
         * The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * Keyword tags associated with the playlist.
         */
        tags: string[];
        /**
         * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The playlist's title.
         */
        title: string;
    }
    interface IPlaylistStatus {
        /**
         * The playlist's privacy status.
         */
        privacyStatus: string;
    }
    /**
     * Describes a single promoted item.
     */
    interface IPromotedItem {
        /**
         * A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website.
         */
        customMessage: string;
        /**
         * Identifies the promoted item.
         */
        id: IPromotedItemId;
        /**
         * If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner.
         */
        promotedByContentOwner: boolean;
        /**
         * The temporal position within the video where the promoted item will be displayed. If present, it overrides the default timing.
         */
        timing: IInvideoTiming;
    }
    /**
     * Describes a single promoted item id. It is a union of various possible types.
     */
    interface IPromotedItemId {
        /**
         * If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set.
         */
        recentlyUploadedBy: string;
        /**
         * Describes the type of the promoted item.
         */
        type: string;
        /**
         * If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video.
         */
        videoId: string;
        /**
         * If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website.
         */
        websiteUrl: string;
    }
    /**
     * A pair Property / Value.
     */
    interface IPropertyValue {
        /**
         * A property.
         */
        property: string;
        /**
         * The property's value.
         */
        value: string;
    }
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    interface IResourceId {
        /**
         * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.
         */
        channelId: string;
        /**
         * The type of the API resource.
         */
        kind: string;
        /**
         * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.
         */
        playlistId: string;
        /**
         * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.
         */
        videoId: string;
    }
    interface ISearchListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of results that match the search criteria.
         */
        items: ISearchResult[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
     */
    interface ISearchResult {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The id object contains information that can be used to uniquely identify the resource that matches the search request.
         */
        id: IResourceId;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".
         */
        kind: string;
        /**
         * The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description.
         */
        snippet: ISearchResultSnippet;
    }
    /**
     * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
     */
    interface ISearchResultSnippet {
        /**
         * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
         */
        channelId: string;
        /**
         * The title of the channel that published the resource that the search result identifies.
         */
        channelTitle: string;
        /**
         * A description of the search result.
         */
        description: string;
        /**
         * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
         */
        liveBroadcastContent: string;
        /**
         * The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The title of the search result.
         */
        title: string;
    }
    /**
     * A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
     */
    interface ISubscription {
        /**
         * The contentDetails object contains basic statistics about the subscription.
         */
        contentDetails: ISubscriptionContentDetails;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the subscription.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
         */
        snippet: ISubscriptionSnippet;
        /**
         * The subscriberSnippet object contains basic details about the sbuscriber.
         */
        subscriberSnippet: ISubscriptionSubscriberSnippet;
    }
    /**
     * Details about the content to witch a subscription refers.
     */
    interface ISubscriptionContentDetails {
        /**
         * The type of activity this subscription is for (only uploads, everything).
         */
        activityType: string;
        /**
         * The number of new items in the subscription since its content was last read.
         */
        newItemCount: number; // uint32
        /**
         * The approximate number of items that the subscription points to.
         */
        totalItemCount: number; // uint32
    }
    interface ISubscriptionListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of subscriptions that match the request criteria.
         */
        items: ISubscription[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
     */
    interface ISubscriptionSnippet {
        /**
         * The ID that YouTube uses to uniquely identify the subscriber's channel.
         */
        channelId: string;
        /**
         * Channel title for the channel that the subscription belongs to.
         */
        channelTitle: string;
        /**
         * The subscription's details.
         */
        description: string;
        /**
         * The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * The id object contains information about the channel that the user subscribed to.
         */
        resourceId: IResourceId;
        /**
         * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The subscription's title.
         */
        title: string;
    }
    /**
     * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
     */
    interface ISubscriptionSubscriberSnippet {
        /**
         * The channel ID of the subscriber.
         */
        channelId: string;
        /**
         * The description of the subscriber.
         */
        description: string;
        /**
         * Thumbnails for this subscriber.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The title of the subscriber.
         */
        title: string;
    }
    /**
     * A thumbnail is an image representing a YouTube resource.
     */
    interface IThumbnail {
        /**
         * (Optional) Height of the thumbnail image.
         */
        height: number; // uint32
        /**
         * The thumbnail image's URL.
         */
        url: string;
        /**
         * (Optional) Width of the thumbnail image.
         */
        width: number; // uint32
    }
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    interface IThumbnailDetails {
        /**
         * The default image for this resource.
         */
        default: IThumbnail;
        /**
         * The high quality image for this resource.
         */
        high: IThumbnail;
        /**
         * The maximum resolution quality image for this resource.
         */
        maxres: IThumbnail;
        /**
         * The medium quality image for this resource.
         */
        medium: IThumbnail;
        /**
         * The standard quality image for this resource.
         */
        standard: IThumbnail;
    }
    interface IThumbnailSetResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of thumbnails.
         */
        items: IThumbnailDetails[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".
         */
        kind: string;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Stub token pagination template to suppress results.
     */
    interface ITokenPagination {
    }
    /**
     * A video resource represents a YouTube video.
     */
    interface IVideo {
        /**
         * Age restriction details related to a video.
         */
        ageGating: IVideoAgeGating;
        /**
         * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
         */
        contentDetails: IVideoContentDetails;
        /**
         * The conversionPings object encapsulates information about url pings that need to be respected by the App in different video contexts.
         */
        conversionPings: IVideoConversionPings;
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
         */
        fileDetails: IVideoFileDetails;
        /**
         * The ID that YouTube uses to uniquely identify the video.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#video".
         */
        kind: string;
        /**
         * The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.
         */
        liveStreamingDetails: IVideoLiveStreamingDetails;
        /**
         * The monetizationDetails object encapsulates information about the monetization status of the video.
         */
        monetizationDetails: IVideoMonetizationDetails;
        /**
         * The player object contains information that you would use to play the video in an embedded player.
         */
        player: IVideoPlayer;
        /**
         * The processingProgress object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.
         * 
         * The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
         */
        processingDetails: IVideoProcessingDetails;
        /**
         * The projectDetails object contains information about the project specific video metadata.
         */
        projectDetails: IVideoProjectDetails;
        /**
         * The recordingDetails object encapsulates information about the location, date and address where the video was recorded.
         */
        recordingDetails: IVideoRecordingDetails;
        /**
         * The snippet object contains basic details about the video, such as its title, description, and category.
         */
        snippet: IVideoSnippet;
        /**
         * The statistics object contains statistics about the video.
         */
        statistics: IVideoStatistics;
        /**
         * The status object contains information about the video's uploading, processing, and privacy statuses.
         */
        status: IVideoStatus;
        /**
         * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
         */
        suggestions: IVideoSuggestions;
        /**
         * The topicDetails object encapsulates information about Freebase topics associated with the video.
         */
        topicDetails: IVideoTopicDetails;
    }
    interface IVideoAgeGating {
        /**
         * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
         */
        alcoholContent: boolean;
        /**
         * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.
         */
        restricted: boolean;
        /**
         * Video game rating, if any.
         */
        videoGameRating: string;
    }
    /**
     * A videoCategory resource identifies a category that has been or could be associated with uploaded videos.
     */
    interface IVideoCategory {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * The ID that YouTube uses to uniquely identify the video category.
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".
         */
        kind: string;
        /**
         * The snippet object contains basic details about the video category, including its title.
         */
        snippet: IVideoCategorySnippet;
    }
    interface IVideoCategoryListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.
         */
        items: IVideoCategory[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Basic details about a video category, such as its localized title.
     */
    interface IVideoCategorySnippet {
        assignable: boolean;
        /**
         * The YouTube channel that created the video category.
         */
        channelId: string;
        /**
         * The video category's title.
         */
        title: string;
    }
    /**
     * Details about the content of a YouTube Video.
     */
    interface IVideoContentDetails {
        /**
         * The value of captions indicates whether the video has captions or not.
         */
        caption: string;
        /**
         * Specifies the ratings that the video received under various rating schemes.
         */
        contentRating: IContentRating;
        /**
         * The countryRestriction object contains information about the countries where a video is (or is not) viewable.
         */
        countryRestriction: IAccessPolicy;
        /**
         * The value of definition indicates whether the video is available in high definition or only in standard definition.
         */
        definition: string;
        /**
         * The value of dimension indicates whether the video is available in 3D or in 2D.
         */
        dimension: string;
        /**
         * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
         */
        duration: string;
        /**
         * The value of is_license_content indicates whether the video is licensed content.
         */
        licensedContent: boolean;
        /**
         * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
         */
        regionRestriction: IVideoContentDetailsRegionRestriction;
    }
    /**
     * DEPRECATED Region restriction of the video.
     */
    interface IVideoContentDetailsRegionRestriction {
        /**
         * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
         */
        allowed: string[];
        /**
         * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
         */
        blocked: string[];
    }
    interface IVideoConversionPing {
        /**
         * Defines the context of the ping.
         */
        context: string;
        /**
         * The url (without the schema) that the app shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D like%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA%3Bytvid%3DUrIaJUvIQDg&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.
         */
        conversionUrl: string;
    }
    interface IVideoConversionPings {
        /**
         * Pings that the app shall fire for a video (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
         */
        pings: IVideoConversionPing[];
    }
    /**
     * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
     */
    interface IVideoFileDetails {
        /**
         * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
         */
        audioStreams: IVideoFileDetailsAudioStream[];
        /**
         * The uploaded video file's combined (video and audio) bitrate in bits per second.
         */
        bitrateBps: string; // uint64
        /**
         * The uploaded video file's container format.
         */
        container: string;
        /**
         * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:  
         * - Date only: YYYY-MM-DD 
         * - Naive time: YYYY-MM-DDTHH:MM:SS 
         * - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
         */
        creationTime: string;
        /**
         * The length of the uploaded video in milliseconds.
         */
        durationMs: string; // uint64
        /**
         * The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
         */
        fileName: string;
        /**
         * The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
         */
        fileSize: string; // uint64
        /**
         * The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
         */
        fileType: string;
        /**
         * Geographic coordinates that identify the place where the uploaded video was recorded. Coordinates are defined using WGS 84.
         */
        recordingLocation: IGeoPoint;
        /**
         * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
         */
        videoStreams: IVideoFileDetailsVideoStream[];
    }
    /**
     * Information about an audio stream.
     */
    interface IVideoFileDetailsAudioStream {
        /**
         * The audio stream's bitrate, in bits per second.
         */
        bitrateBps: string; // uint64
        /**
         * The number of audio channels that the stream contains.
         */
        channelCount: number; // uint32
        /**
         * The audio codec that the stream uses.
         */
        codec: string;
        /**
         * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
         */
        vendor: string;
    }
    /**
     * Information about a video stream.
     */
    interface IVideoFileDetailsVideoStream {
        /**
         * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
         */
        aspectRatio: number; // double
        /**
         * The video stream's bitrate, in bits per second.
         */
        bitrateBps: string; // uint64
        /**
         * The video codec that the stream uses.
         */
        codec: string;
        /**
         * The video stream's frame rate, in frames per second.
         */
        frameRateFps: number; // double
        /**
         * The encoded video content's height in pixels.
         */
        heightPixels: number; // uint32
        /**
         * The amount that YouTube needs to rotate the original source content to properly display the video.
         */
        rotation: string;
        /**
         * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
         */
        vendor: string;
        /**
         * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
         */
        widthPixels: number; // uint32
    }
    interface IVideoGetRatingResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * A list of ratings that match the request criteria.
         */
        items: IVideoRating[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
         */
        kind: string;
    }
    interface IVideoListResponse {
        /**
         * Etag of this resource.
         */
        etag: string;
        /**
         * Serialized EventId of the request which produced this response.
         */
        eventId: string;
        /**
         * A list of videos that match the request criteria.
         */
        items: IVideo[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".
         */
        kind: string;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
         */
        nextPageToken: string;
        pageInfo: IPageInfo;
        /**
         * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
         */
        prevPageToken: string;
        tokenPagination: ITokenPagination;
        /**
         * The visitorId identifies the visitor.
         */
        visitorId: string;
    }
    /**
     * Details about the live streaming metadata.
     */
    interface IVideoLiveStreamingDetails {
        /**
         * The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over.
         */
        actualEndTime: string; // date-time
        /**
         * The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins.
         */
        actualStartTime: string; // date-time
        /**
         * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
         */
        concurrentViewers: string; // uint64
        /**
         * The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
         */
        scheduledEndTime: string; // date-time
        /**
         * The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        scheduledStartTime: string; // date-time
    }
    /**
     * Details about monetization of a YouTube Video.
     */
    interface IVideoMonetizationDetails {
        /**
         * The value of access indicates whether the video can be monetized or not.
         */
        access: IAccessPolicy;
    }
    /**
     * Player to be used for a video playback.
     */
    interface IVideoPlayer {
        /**
         * An <iframe> tag that embeds a player that will play the video.
         */
        embedHtml: string;
    }
    /**
     * Describes processing status and progress and availability of some other Video resource parts.
     */
    interface IVideoProcessingDetails {
        /**
         * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        editorSuggestionsAvailability: string;
        /**
         * This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.
         */
        fileDetailsAvailability: string;
        /**
         * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
         */
        processingFailureReason: string;
        /**
         * This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        processingIssuesAvailability: string;
        /**
         * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing.
         */
        processingProgress: IVideoProcessingDetailsProcessingProgress;
        /**
         * The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
         */
        processingStatus: string;
        /**
         * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        tagSuggestionsAvailability: string;
        /**
         * This value indicates whether thumbnail images have been generated for the video.
         */
        thumbnailsAvailability: string;
    }
    /**
     * Video processing progress and completion time estimate.
     */
    interface IVideoProcessingDetailsProcessingProgress {
        /**
         * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:
         * 100 * parts_processed / parts_total
         * 
         * Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
         */
        partsProcessed: string; // uint64
        /**
         * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
         */
        partsTotal: string; // uint64
        /**
         * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
         */
        timeLeftMs: string; // uint64
    }
    /**
     * Project specific details about the content of a YouTube Video.
     */
    interface IVideoProjectDetails {
        /**
         * A list of project tags associated with the video during the upload.
         */
        tags: string[];
    }
    interface IVideoRating {
        rating: string;
        videoId: string;
    }
    /**
     * Recording information associated with the video.
     */
    interface IVideoRecordingDetails {
        /**
         * The geolocation information associated with the video.
         */
        location: IGeoPoint;
        /**
         * The text description of the location where the video was recorded.
         */
        locationDescription: string;
        /**
         * The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
         */
        recordingDate: string; // date-time
    }
    /**
     * Basic details about a video, including title, description, uploader, thumbnails and category.
     */
    interface IVideoSnippet {
        /**
         * The YouTube video category associated with the video.
         */
        categoryId: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
         */
        channelId: string;
        /**
         * Channel title for the channel that the video belongs to.
         */
        channelTitle: string;
        /**
         * The video's description.
         */
        description: string;
        /**
         * Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
         */
        liveBroadcastContent: string;
        /**
         * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string; // date-time
        /**
         * A list of keyword tags associated with the video. Tags may contain spaces. This field is only visible to the video's uploader.
         */
        tags: string[];
        /**
         * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: IThumbnailDetails;
        /**
         * The video's title.
         */
        title: string;
    }
    /**
     * Statistics about the video, such as the number of times the video was viewed or liked.
     */
    interface IVideoStatistics {
        /**
         * The number of comments for the video.
         */
        commentCount: string; // uint64
        /**
         * The number of users who have indicated that they disliked the video by giving it a negative rating.
         */
        dislikeCount: string; // uint64
        /**
         * The number of users who currently have the video marked as a favorite video.
         */
        favoriteCount: string; // uint64
        /**
         * The number of users who have indicated that they liked the video by giving it a positive rating.
         */
        likeCount: string; // uint64
        /**
         * The number of times the video has been viewed.
         */
        viewCount: string; // uint64
    }
    /**
     * Basic details about a video category, such as its localized title.
     */
    interface IVideoStatus {
        /**
         * This value indicates if the video can be embedded on another website.
         */
        embeddable: boolean;
        /**
         * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
         */
        failureReason: string;
        /**
         * The video's license.
         */
        license: string;
        /**
         * The video's privacy status.
         */
        privacyStatus: string;
        /**
         * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled.
         */
        publicStatsViewable: boolean;
        /**
         * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishAt: string; // date-time
        /**
         * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
         */
        rejectionReason: string;
        /**
         * The status of the uploaded video.
         */
        uploadStatus: string;
    }
    /**
     * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
     */
    interface IVideoSuggestions {
        /**
         * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
         */
        editorSuggestions: string[];
        /**
         * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.
         */
        processingErrors: string[];
        /**
         * A list of suggestions that may improve YouTube's ability to process the video.
         */
        processingHints: string[];
        /**
         * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
         */
        processingWarnings: string[];
        /**
         * A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
         */
        tagSuggestions: IVideoSuggestionsTagSuggestion[];
    }
    /**
     * A single tag suggestion with it's relevance information.
     */
    interface IVideoSuggestionsTagSuggestion {
        /**
         * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
         */
        categoryRestricts: string[];
        /**
         * The keyword tag suggested for the video.
         */
        tag: string;
    }
    /**
     * Freebase topic information related to the video.
     */
    interface IVideoTopicDetails {
        /**
         * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.
         */
        relevantTopicIds: string[];
        /**
         * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API.
         */
        topicIds: string[];
    }
    /**
     * Branding properties for the watch.
     */
    interface IWatchSettings {
        /**
         * The text color for the video watch page's branded area.
         */
        backgroundColor: string;
        /**
         * An ID that uniquely identifies a playlist that displays next to the video player.
         */
        featuredPlaylistId: string;
        /**
         * The background color for the video watch page's branded area.
         */
        textColor: string;
    }
}
