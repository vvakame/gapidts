// Type definitions for Google Google Play Game Services API v1
// Project: https://developers.google.com/games/services/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function games(version:string):typeof googleapis.games;
    function games(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.games;
}
/**
 * The API for Google Play Game Services.
 */
declare module googleapis.games {
    var achievementDefinitions: {
        /**
         * Lists all the achievement definitions for your application.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAchievementDefinitionsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var achievements: {
        /**
         * Increments the steps of the achievement with the given ID for the currently authenticated player.
         * @params {string} achievementId The ID of the achievement used by this method.
         * @params {string} requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
         * @params {number} stepsToIncrement The number of steps to increment.
         */
        increment: (params: {
            achievementId: string;
            requestId?: string;
            stepsToIncrement: number;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAchievementIncrementResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists the progress for all your application's achievements for the currently authenticated player.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @params {string} state Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            playerId: string;
            state?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayerAchievementListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
         * @params {string} achievementId The ID of the achievement used by this method.
         */
        reveal: (params: {
            achievementId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAchievementRevealResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
         * @params {string} achievementId The ID of the achievement used by this method.
         * @params {number} steps The minimum value to set the steps to.
         */
        setStepsAtLeast: (params: {
            achievementId: string;
            steps: number;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAchievementSetStepsAtLeastResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Unlocks this achievement for the currently authenticated player.
         * @params {string} achievementId The ID of the achievement used by this method.
         */
        unlock: (params: {
            achievementId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAchievementUnlockResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates multiple achievements for the currently authenticated player.
         */
        updateMultiple: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAchievementUpdateMultipleRequest;
        }, callback: (err: IErrorResponse, response: IAchievementUpdateMultipleResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var applications: {
        /**
         * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.
         * @params {string} applicationId The application being requested.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} platformType Restrict application details returned to the specific platform.
         */
        get: (params: {
            applicationId: string;
            language?: string;
            platformType?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IApplication, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Indicate that the the currently authenticated user is playing your application.
         */
        played: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var events: {
        /**
         * Returns a list showing the current progress on events in this application for the currently authenticated user.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        listByPlayer: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayerEventListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns a list of the event definitions in this application.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        listDefinitions: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IEventDefinitionListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
         * @params {string} language The preferred language to use for strings returned by this method.
         */
        record: (params: {
            language?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IEventRecordRequest;
        }, callback: (err: IErrorResponse, response: IEventUpdateResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var leaderboards: {
        /**
         * Retrieves the metadata of the leaderboard with the given ID.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} leaderboardId The ID of the leaderboard.
         */
        get: (params: {
            language?: string;
            leaderboardId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILeaderboard, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all the leaderboard metadata for your application.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILeaderboardListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var metagame: {
        /**
         * Return the metagame configuration data for the calling application.
         */
        getMetagameConfig: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IMetagameConfig, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List play data aggregated per category for the player corresponding to playerId.
         * @params {string} collection The collection of categories for which data will be returned.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         */
        listCategoriesByPlayer: (params: {
            collection: string;
            language?: string;
            maxResults?: number;
            pageToken?: string;
            playerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICategoryListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var players: {
        /**
         * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         */
        get: (params: {
            language?: string;
            playerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayer, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get the collection of players for the currently authenticated user.
         * @params {string} collection Collection of players being retrieved
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            collection: string;
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayerListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var pushtokens: {
        /**
         * Removes a push token for the current user and application. Removing a non-existent push token will report success.
         */
        remove: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPushTokenId;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Registers a push token for the current user and application.
         */
        update: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPushToken;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var questMilestones: {
        /**
         * Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.
         * @params {string} milestoneId The ID of the milestone.
         * @params {string} questId The ID of the quest.
         * @params {string} requestId A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
         */
        claim: (params: {
            milestoneId: string;
            questId: string;
            requestId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var quests: {
        /**
         * Indicates that the currently authorized user will participate in the quest.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} questId The ID of the quest.
         */
        accept: (params: {
            language?: string;
            questId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IQuest, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get a list of quests for your application and the currently authenticated player.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            playerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IQuestListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var revisions: {
        /**
         * Checks whether the games client is out of date.
         * @params {string} clientRevision The revision of the client SDK used by your application. Format:
[PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:
 
- "ANDROID" - Client is running the Android SDK. 
- "IOS" - Client is running the iOS SDK. 
- "WEB_APP" - Client is running as a Web App.
         */
        check: (params: {
            clientRevision: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRevisionCheckResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var rooms: {
        /**
         * Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} language The preferred language to use for strings returned by this method.
         */
        create: (params: {
            language?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRoomCreateRequest;
        }, callback: (err: IErrorResponse, response: IRoom, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} roomId The ID of the room.
         */
        decline: (params: {
            language?: string;
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRoom, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} roomId The ID of the room.
         */
        dismiss: (params: {
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Get the data for a room.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} roomId The ID of the room.
         */
        get: (params: {
            language?: string;
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRoom, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} roomId The ID of the room.
         */
        join: (params: {
            language?: string;
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRoomJoinRequest;
        }, callback: (err: IErrorResponse, response: IRoom, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} roomId The ID of the room.
         */
        leave: (params: {
            language?: string;
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRoomLeaveRequest;
        }, callback: (err: IErrorResponse, response: IRoom, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns invitations to join rooms.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRoomList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} roomId The ID of the room.
         */
        reportStatus: (params: {
            language?: string;
            roomId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRoomP2PStatuses;
        }, callback: (err: IErrorResponse, response: IRoomStatus, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var scores: {
        /**
         * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
         * NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
         * @params {string} includeRankType The types of ranks to return. If the parameter is omitted, no ranks will be returned.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} leaderboardId The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
         * @params {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @params {string} timeSpan The time span for the scores and ranks you're requesting.
         */
        get: (params: {
            includeRankType?: string;
            language?: string;
            leaderboardId: string;
            maxResults?: number;
            pageToken?: string;
            playerId: string;
            timeSpan: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayerLeaderboardScoreListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists the scores in a leaderboard, starting from the top.
         * @params {string} collection The collection of scores you're requesting.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} leaderboardId The ID of the leaderboard.
         * @params {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} timeSpan The time span for the scores and ranks you're requesting.
         */
        list: (params: {
            collection: string;
            language?: string;
            leaderboardId: string;
            maxResults?: number;
            pageToken?: string;
            timeSpan: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILeaderboardScores, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists the scores in a leaderboard around (and including) a player's score.
         * @params {string} collection The collection of scores you're requesting.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} leaderboardId The ID of the leaderboard.
         * @params {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {number} resultsAbove The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
         * @params {boolean} returnTopIfAbsent True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
         * @params {string} timeSpan The time span for the scores and ranks you're requesting.
         */
        listWindow: (params: {
            collection: string;
            language?: string;
            leaderboardId: string;
            maxResults?: number;
            pageToken?: string;
            resultsAbove?: number;
            returnTopIfAbsent?: boolean;
            timeSpan: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILeaderboardScores, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Submits a score to the specified leaderboard.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} leaderboardId The ID of the leaderboard.
         * @params {string} score The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
         * @params {string} scoreTag Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        submit: (params: {
            language?: string;
            leaderboardId: string;
            score: string;
            scoreTag?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IPlayerScoreResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Submits multiple scores to leaderboards.
         * @params {string} language The preferred language to use for strings returned by this method.
         */
        submitMultiple: (params: {
            language?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPlayerScoreSubmissionList;
        }, callback: (err: IErrorResponse, response: IPlayerScoreListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var snapshots: {
        /**
         * Retrieves the metadata for a given snapshot ID.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} snapshotId The ID of the snapshot.
         */
        get: (params: {
            language?: string;
            snapshotId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISnapshot, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxResults The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         */
        list: (params: {
            language?: string;
            maxResults?: number;
            pageToken?: string;
            playerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISnapshotListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var turnBasedMatches: {
        /**
         * Cancel a turn-based match.
         * @params {string} matchId The ID of the match.
         */
        cancel: (params: {
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Create a turn-based match.
         * @params {string} language The preferred language to use for strings returned by this method.
         */
        create: (params: {
            language?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITurnBasedMatchCreateRequest;
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Decline an invitation to play a turn-based match.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        decline: (params: {
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.
         * @params {string} matchId The ID of the match.
         */
        dismiss: (params: {
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        finish: (params: {
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITurnBasedMatchResults;
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Get the data for a turn-based match.
         * @params {boolean} includeMatchData Get match data along with metadata.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        get: (params: {
            includeMatchData?: boolean;
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Join a turn-based match.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        join: (params: {
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Leave a turn-based match when it is not the current player's turn, without canceling the match.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        leave: (params: {
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Leave a turn-based match during the current player's turn, without canceling the match.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         * @params {number} matchVersion The version of the match being updated.
         * @params {string} pendingParticipantId The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
         */
        leaveTurn: (params: {
            language?: string;
            matchId: string;
            matchVersion: number;
            pendingParticipantId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns turn-based matches the player is or was involved in.
         * @params {boolean} includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
         * @params {number} maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            includeMatchData?: boolean;
            language?: string;
            maxCompletedMatches?: number;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatchList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         * @params {string} requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
         */
        rematch: (params: {
            language?: string;
            matchId: string;
            requestId?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatchRematch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.
         * @params {boolean} includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {number} maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
         * @params {number} maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
         * @params {string} pageToken The token returned by the previous request.
         */
        sync: (params: {
            includeMatchData?: boolean;
            language?: string;
            maxCompletedMatches?: number;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITurnBasedMatchSync, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Commit the results of a player turn.
         * @params {string} language The preferred language to use for strings returned by this method.
         * @params {string} matchId The ID of the match.
         */
        takeTurn: (params: {
            language?: string;
            matchId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITurnBasedMatchTurn;
        }, callback: (err: IErrorResponse, response: ITurnBasedMatch, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * This is a JSON template for an achievement definition object.
     */
    interface IAchievementDefinition {
        /**
         * The type of the achievement.
         * Possible values are:  
         * - "STANDARD" - Achievement is either locked or unlocked. 
         * - "INCREMENTAL" - Achievement is incremental.
         */
        achievementType: string;
        /**
         * The description of the achievement.
         */
        description: string;
        /**
         * Experience points which will be earned when unlocking this achievement.
         */
        experiencePoints: string; // int64
        /**
         * The total steps for an incremental achievement as a string.
         */
        formattedTotalSteps: string;
        /**
         * The ID of the achievement.
         */
        id: string;
        /**
         * The initial state of the achievement.
         * Possible values are:  
         * - "HIDDEN" - Achievement is hidden. 
         * - "REVEALED" - Achievement is revealed. 
         * - "UNLOCKED" - Achievement is unlocked.
         */
        initialState: string;
        /**
         * Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
         */
        isRevealedIconUrlDefault: boolean;
        /**
         * Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
         */
        isUnlockedIconUrlDefault: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition.
         */
        kind: string;
        /**
         * The name of the achievement.
         */
        name: string;
        /**
         * The image URL for the revealed achievement icon.
         */
        revealedIconUrl: string;
        /**
         * The total steps for an incremental achievement.
         */
        totalSteps: number; // int32
        /**
         * The image URL for the unlocked achievement icon.
         */
        unlockedIconUrl: string;
    }
    /**
     * This is a JSON template for a list of achievement definition objects.
     */
    interface IAchievementDefinitionsListResponse {
        /**
         * The achievement definitions.
         */
        items: IAchievementDefinition[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for an achievement increment response
     */
    interface IAchievementIncrementResponse {
        /**
         * The current steps recorded for this incremental achievement.
         */
        currentSteps: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementIncrementResponse.
         */
        kind: string;
        /**
         * Whether the the current steps for the achievement has reached the number of steps required to unlock.
         */
        newlyUnlocked: boolean;
    }
    /**
     * This is a JSON template for an achievement reveal response
     */
    interface IAchievementRevealResponse {
        /**
         * The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked.
         * Possible values are:  
         * - "REVEALED" - Achievement is revealed. 
         * - "UNLOCKED" - Achievement is unlocked.
         */
        currentState: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse.
         */
        kind: string;
    }
    /**
     * This is a JSON template for an achievement set steps at least response.
     */
    interface IAchievementSetStepsAtLeastResponse {
        /**
         * The current steps recorded for this incremental achievement.
         */
        currentSteps: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse.
         */
        kind: string;
        /**
         * Whether the the current steps for the achievement has reached the number of steps required to unlock.
         */
        newlyUnlocked: boolean;
    }
    /**
     * This is a JSON template for an achievement unlock response
     */
    interface IAchievementUnlockResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUnlockResponse.
         */
        kind: string;
        /**
         * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
         */
        newlyUnlocked: boolean;
    }
    /**
     * This is a JSON template for a list of achievement update requests.
     */
    interface IAchievementUpdateMultipleRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateMultipleRequest.
         */
        kind: string;
        /**
         * The individual achievement update requests.
         */
        updates: IAchievementUpdateRequest[];
    }
    /**
     * This is a JSON template for an achievement unlock response.
     */
    interface IAchievementUpdateMultipleResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateListResponse.
         */
        kind: string;
        /**
         * The updated state of the achievements.
         */
        updatedAchievements: IAchievementUpdateResponse[];
    }
    /**
     * This is a JSON template for a request to update an achievement.
     */
    interface IAchievementUpdateRequest {
        /**
         * The achievement this update is being applied to.
         */
        achievementId: string;
        /**
         * The payload if an update of type INCREMENT was requested for the achievement.
         */
        incrementPayload: IGamesAchievementIncrement;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateRequest.
         */
        kind: string;
        /**
         * The payload if an update of type SET_STEPS_AT_LEAST was requested for the achievement.
         */
        setStepsAtLeastPayload: IGamesAchievementSetStepsAtLeast;
        /**
         * The type of update being applied.
         * Possible values are:  
         * - "REVEAL" - Achievement is revealed. 
         * - "UNLOCK" - Achievement is unlocked. 
         * - "INCREMENT" - Achievement is incremented. 
         * - "SET_STEPS_AT_LEAST" - Achievement progress is set to at least the passed value.
         */
        updateType: string;
    }
    /**
     * This is a JSON template for an achievement update response.
     */
    interface IAchievementUpdateResponse {
        /**
         * The achievement this update is was applied to.
         */
        achievementId: string;
        /**
         * The current state of the achievement.
         * Possible values are:  
         * - "HIDDEN" - Achievement is hidden. 
         * - "REVEALED" - Achievement is revealed. 
         * - "UNLOCKED" - Achievement is unlocked.
         */
        currentState: string;
        /**
         * The current steps recorded for this achievement if it is incremental.
         */
        currentSteps: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateResponse.
         */
        kind: string;
        /**
         * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
         */
        newlyUnlocked: boolean;
        /**
         * Whether the requested updates actually affected the achievement.
         */
        updateOccurred: boolean;
    }
    /**
     * This is a JSON template for aggregate stats.
     */
    interface IAggregateStats {
        /**
         * The number of messages sent between a pair of peers.
         */
        count: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#aggregateStats.
         */
        kind: string;
        /**
         * The maximum amount.
         */
        max: string; // int64
        /**
         * The minimum amount.
         */
        min: string; // int64
        /**
         * The total number of bytes sent for messages between a pair of peers.
         */
        sum: string; // int64
    }
    /**
     * This is a JSON template for an anonymous player
     */
    interface IAnonymousPlayer {
        /**
         * The base URL for the image to display for the anonymous player.
         */
        avatarImageUrl: string;
        /**
         * The name to display for the anonymous player.
         */
        displayName: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#anonymousPlayer.
         */
        kind: string;
    }
    /**
     * This is a JSON template for the Application resource.
     */
    interface IApplication {
        /**
         * The number of achievements visible to the currently authenticated player.
         */
        achievement_count: number; // int32
        /**
         * The assets of the application.
         */
        assets: IImageAsset[];
        /**
         * The author of the application.
         */
        author: string;
        /**
         * The category of the application.
         */
        category: IApplicationCategory;
        /**
         * The description of the application.
         */
        description: string;
        /**
         * A list of features that have been enabled for the application.
         * Possible values are:  
         * - "SNAPSHOTS" - Snapshots has been enabled
         */
        enabledFeatures: string[];
        /**
         * The ID of the application.
         */
        id: string;
        /**
         * The instances of the application.
         */
        instances: IInstance[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#application.
         */
        kind: string;
        /**
         * The last updated timestamp of the application.
         */
        lastUpdatedTimestamp: string; // int64
        /**
         * The number of leaderboards visible to the currently authenticated player.
         */
        leaderboard_count: number; // int32
        /**
         * The name of the application.
         */
        name: string;
    }
    /**
     * This is a JSON template for an application category object.
     */
    interface IApplicationCategory {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#applicationCategory.
         */
        kind: string;
        /**
         * The primary category.
         */
        primary: string;
        /**
         * The secondary category.
         */
        secondary: string;
    }
    /**
     * This is a JSON template for data related to individual game categories.
     */
    interface ICategory {
        /**
         * The category name.
         */
        category: string;
        /**
         * Experience points earned in this category.
         */
        experiencePoints: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#category.
         */
        kind: string;
    }
    /**
     * This is a JSON template for a list of category data objects.
     */
    interface ICategoryListResponse {
        /**
         * The list of categories with usage data.
         */
        items: ICategory[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#categoryListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for a batch update failure resource.
     */
    interface IEventBatchRecordFailure {
        /**
         * The cause for the update failure.
         * Possible values are:  
         * - "TOO_LARGE": A batch request was issued with more events than are allowed in a single batch. 
         * - "TIME_PERIOD_EXPIRED": A batch was sent with data too far in the past to record. 
         * - "TIME_PERIOD_SHORT": A batch was sent with a time range that was too short. 
         * - "TIME_PERIOD_LONG": A batch was sent with a time range that was too long. 
         * - "ALREADY_UPDATED": An attempt was made to record a batch of data which was already seen. 
         * - "RECORD_RATE_HIGH": An attempt was made to record data faster than the server will apply updates.
         */
        failureCause: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventBatchRecordFailure.
         */
        kind: string;
        /**
         * The time range which was rejected; empty for a request-wide failure.
         */
        range: IEventPeriodRange;
    }
    /**
     * This is a JSON template for an event child relationship resource.
     */
    interface IEventChild {
        /**
         * The ID of the child event.
         */
        childId: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventChild.
         */
        kind: string;
    }
    /**
     * This is a JSON template for an event definition resource.
     */
    interface IEventDefinition {
        /**
         * A list of events that are a child of this event.
         */
        childEvents: IEventChild[];
        /**
         * Description of what this event represents.
         */
        description: string;
        /**
         * The name to display for the event.
         */
        displayName: string;
        /**
         * The ID of the event.
         */
        id: string;
        /**
         * The base URL for the image that represents the event.
         */
        imageUrl: string;
        /**
         * Indicates whether the icon image being returned is a default image, or is game-provided.
         */
        isDefaultImageUrl: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinition.
         */
        kind: string;
        /**
         * The visibility of event being tracked in this definition.
         * Possible values are:  
         * - "REVEALED": This event should be visible to all users. 
         * - "HIDDEN": This event should only be shown to users that have recorded this event at least once.
         */
        visibility: string;
    }
    /**
     * This is a JSON template for a ListDefinitions response.
     */
    interface IEventDefinitionListResponse {
        /**
         * The event definitions.
         */
        items: IEventDefinition[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinitionListResponse.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for an event period time range.
     */
    interface IEventPeriodRange {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodRange.
         */
        kind: string;
        /**
         * The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
         */
        periodEndMillis: string; // int64
        /**
         * The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).
         */
        periodStartMillis: string; // int64
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface IEventPeriodUpdate {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodUpdate.
         */
        kind: string;
        /**
         * The time period being covered by this update.
         */
        timePeriod: IEventPeriodRange;
        /**
         * The updates being made for this time period.
         */
        updates: IEventUpdateRequest[];
    }
    /**
     * This is a JSON template for an event update failure resource.
     */
    interface IEventRecordFailure {
        /**
         * The ID of the event that was not updated.
         */
        eventId: string;
        /**
         * The cause for the update failure.
         * Possible values are:  
         * - "NOT_FOUND" - An attempt was made to set an event that was not defined. 
         * - "INVALID_UPDATE_VALUE" - An attempt was made to increment an event by a non-positive value.
         */
        failureCause: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordFailure.
         */
        kind: string;
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface IEventRecordRequest {
        /**
         * The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
         */
        currentTimeMillis: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordRequest.
         */
        kind: string;
        /**
         * The request ID used to identify this attempt to record events.
         */
        requestId: string; // int64
        /**
         * A list of the time period updates being made in this request.
         */
        timePeriods: IEventPeriodUpdate[];
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface IEventUpdateRequest {
        /**
         * The ID of the event being modified in this update.
         */
        definitionId: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateRequest.
         */
        kind: string;
        /**
         * The number of times this event occurred in this time period.
         */
        updateCount: string; // int64
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface IEventUpdateResponse {
        /**
         * Any batch-wide failures which occurred applying updates.
         */
        batchFailures: IEventBatchRecordFailure[];
        /**
         * Any failures updating a particular event.
         */
        eventFailures: IEventRecordFailure[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateResponse.
         */
        kind: string;
        /**
         * The current status of any updated events
         */
        playerEvents: IPlayerEvent[];
    }
    /**
     * This is a JSON template for the payload to request to increment an achievement.
     */
    interface IGamesAchievementIncrement {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementIncrement.
         */
        kind: string;
        /**
         * The requestId associated with an increment to an achievement.
         */
        requestId: string; // int64
        /**
         * The number of steps to be incremented.
         */
        steps: number; // int32
    }
    /**
     * This is a JSON template for the payload to request to increment an achievement.
     */
    interface IGamesAchievementSetStepsAtLeast {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementSetStepsAtLeast.
         */
        kind: string;
        /**
         * The minimum number of steps for the achievement to be set to.
         */
        steps: number; // int32
    }
    /**
     * This is a JSON template for an image asset object.
     */
    interface IImageAsset {
        /**
         * The height of the asset.
         */
        height: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#imageAsset.
         */
        kind: string;
        /**
         * The name of the asset.
         */
        name: string;
        /**
         * The URL of the asset.
         */
        url: string;
        /**
         * The width of the asset.
         */
        width: number; // int32
    }
    /**
     * This is a JSON template for the Instance resource.
     */
    interface IInstance {
        /**
         * URI which shows where a user can acquire this instance.
         */
        acquisitionUri: string;
        /**
         * Platform dependent details for Android.
         */
        androidInstance: IInstanceAndroidDetails;
        /**
         * Platform dependent details for iOS.
         */
        iosInstance: IInstanceIosDetails;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#instance.
         */
        kind: string;
        /**
         * Localized display name.
         */
        name: string;
        /**
         * The platform type.
         * Possible values are:  
         * - "ANDROID" - Instance is for Android. 
         * - "IOS" - Instance is for iOS 
         * - "WEB_APP" - Instance is for Web App.
         */
        platformType: string;
        /**
         * Flag to show if this game instance supports realtime play.
         */
        realtimePlay: boolean;
        /**
         * Flag to show if this game instance supports turn based play.
         */
        turnBasedPlay: boolean;
        /**
         * Platform dependent details for Web.
         */
        webInstance: IInstanceWebDetails;
    }
    /**
     * This is a JSON template for the Android instance details resource.
     */
    interface IInstanceAndroidDetails {
        /**
         * Flag indicating whether the anti-piracy check is enabled.
         */
        enablePiracyCheck: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceAndroidDetails.
         */
        kind: string;
        /**
         * Android package name which maps to Google Play URL.
         */
        packageName: string;
        /**
         * Indicates that this instance is the default for new installations.
         */
        preferred: boolean;
    }
    /**
     * This is a JSON template for the iOS details resource.
     */
    interface IInstanceIosDetails {
        /**
         * Bundle identifier.
         */
        bundleIdentifier: string;
        /**
         * iTunes App ID.
         */
        itunesAppId: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceIosDetails.
         */
        kind: string;
        /**
         * Indicates that this instance is the default for new installations on iPad devices.
         */
        preferredForIpad: boolean;
        /**
         * Indicates that this instance is the default for new installations on iPhone devices.
         */
        preferredForIphone: boolean;
        /**
         * Flag to indicate if this instance supports iPad.
         */
        supportIpad: boolean;
        /**
         * Flag to indicate if this instance supports iPhone.
         */
        supportIphone: boolean;
    }
    /**
     * This is a JSON template for the Web details resource.
     */
    interface IInstanceWebDetails {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#instanceWebDetails.
         */
        kind: string;
        /**
         * Launch URL for the game.
         */
        launchUrl: string;
        /**
         * Indicates that this instance is the default for new installations.
         */
        preferred: boolean;
    }
    /**
     * This is a JSON template for the Leaderboard resource.
     */
    interface ILeaderboard {
        /**
         * The icon for the leaderboard.
         */
        iconUrl: string;
        /**
         * The leaderboard ID.
         */
        id: string;
        /**
         * Indicates whether the icon image being returned is a default image, or is game-provided.
         */
        isIconUrlDefault: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboard.
         */
        kind: string;
        /**
         * The name of the leaderboard.
         */
        name: string;
        /**
         * How scores are ordered.
         * Possible values are:  
         * - "LARGER_IS_BETTER" - Larger values are better; scores are sorted in descending order. 
         * - "SMALLER_IS_BETTER" - Smaller values are better; scores are sorted in ascending order.
         */
        order: string;
    }
    /**
     * This is a JSON template for the Leaderboard Entry resource.
     */
    interface ILeaderboardEntry {
        /**
         * The localized string for the numerical value of this score.
         */
        formattedScore: string;
        /**
         * The localized string for the rank of this score for this leaderboard.
         */
        formattedScoreRank: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry.
         */
        kind: string;
        /**
         * The player who holds this score.
         */
        player: IPlayer;
        /**
         * The rank of this score for this leaderboard.
         */
        scoreRank: string; // int64
        /**
         * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag: string;
        /**
         * The numerical value of this score.
         */
        scoreValue: string; // int64
        /**
         * The time span of this high score.
         * Possible values are:  
         * - "ALL_TIME" - The score is an all-time high score. 
         * - "WEEKLY" - The score is a weekly high score. 
         * - "DAILY" - The score is a daily high score.
         */
        timeSpan: string;
        /**
         * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
         */
        writeTimestampMillis: string; // int64
    }
    /**
     * This is a JSON template for a list of leaderboard objects.
     */
    interface ILeaderboardListResponse {
        /**
         * The leaderboards.
         */
        items: ILeaderboard[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for a score rank in a leaderboard.
     */
    interface ILeaderboardScoreRank {
        /**
         * The number of scores in the leaderboard as a string.
         */
        formattedNumScores: string;
        /**
         * The rank in the leaderboard as a string.
         */
        formattedRank: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScoreRank.
         */
        kind: string;
        /**
         * The number of scores in the leaderboard.
         */
        numScores: string; // int64
        /**
         * The rank in the leaderboard.
         */
        rank: string; // int64
    }
    /**
     * This is a JSON template for a ListScores response.
     */
    interface ILeaderboardScores {
        /**
         * The scores in the leaderboard.
         */
        items: ILeaderboardEntry[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
        /**
         * The total number of scores in the leaderboard.
         */
        numScores: string; // int64
        /**
         * The score of the requesting player on the leaderboard. The player's score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the scoreRank and formattedScoreRank values will not be present.
         */
        playerScore: ILeaderboardEntry;
        /**
         * The pagination token for the previous page of results.
         */
        prevPageToken: string;
    }
    /**
     * This is a JSON template for the metagame config resource
     */
    interface IMetagameConfig {
        /**
         * Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
         */
        currentVersion: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#metagameConfig.
         */
        kind: string;
        /**
         * The list of player levels.
         */
        playerLevels: IPlayerLevel[];
    }
    /**
     * This is a JSON template for network diagnostics reported for a client.
     */
    interface INetworkDiagnostics {
        /**
         * The Android network subtype.
         */
        androidNetworkSubtype: number; // int32
        /**
         * The Android network type.
         */
        androidNetworkType: number; // int32
        /**
         * iOS network type as defined in Reachability.h.
         */
        iosNetworkType: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#networkDiagnostics.
         */
        kind: string;
        /**
         * The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
         */
        networkOperatorCode: string;
        /**
         * The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
         */
        networkOperatorName: string;
        /**
         * The amount of time in milliseconds it took for the client to establish a connection with the XMPP server.
         */
        registrationLatencyMillis: number; // int32
    }
    /**
     * This is a JSON template for a result for a match participant.
     */
    interface IParticipantResult {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#participantResult.
         */
        kind: string;
        /**
         * The ID of the participant.
         */
        participantId: string;
        /**
         * The placement or ranking of the participant in the match results; a number from one to the number of participants in the match. Multiple participants may have the same placing value in case of a type.
         */
        placing: number; // int32
        /**
         * The result of the participant for this match.
         * Possible values are:  
         * - "MATCH_RESULT_WIN" - The participant won the match. 
         * - "MATCH_RESULT_LOSS" - The participant lost the match. 
         * - "MATCH_RESULT_TIE" - The participant tied the match. 
         * - "MATCH_RESULT_NONE" - There was no winner for the match (nobody wins or loses this kind of game.) 
         * - "MATCH_RESULT_DISCONNECT" - The participant disconnected / left during the match. 
         * - "MATCH_RESULT_DISAGREED" - Different clients reported different results for this participant.
         */
        result: string;
    }
    /**
     * This is a JSON template for peer channel diagnostics.
     */
    interface IPeerChannelDiagnostics {
        /**
         * Number of bytes received.
         */
        bytesReceived: IAggregateStats;
        /**
         * Number of bytes sent.
         */
        bytesSent: IAggregateStats;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#peerChannelDiagnostics.
         */
        kind: string;
        /**
         * Number of messages lost.
         */
        numMessagesLost: number; // int32
        /**
         * Number of messages received.
         */
        numMessagesReceived: number; // int32
        /**
         * Number of messages sent.
         */
        numMessagesSent: number; // int32
        /**
         * Number of send failures.
         */
        numSendFailures: number; // int32
        /**
         * Roundtrip latency stats in milliseconds.
         */
        roundtripLatencyMillis: IAggregateStats;
    }
    /**
     * This is a JSON template for peer session diagnostics.
     */
    interface IPeerSessionDiagnostics {
        /**
         * Connected time in milliseconds.
         */
        connectedTimestampMillis: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#peerSessionDiagnostics.
         */
        kind: string;
        /**
         * The participant ID of the peer.
         */
        participantId: string;
        /**
         * Reliable channel diagnostics.
         */
        reliableChannel: IPeerChannelDiagnostics;
        /**
         * Unreliable channel diagnostics.
         */
        unreliableChannel: IPeerChannelDiagnostics;
    }
    /**
     * This is a JSON template for metadata about a player playing a game with the currently authenticated user.
     */
    interface IPlayed {
        /**
         * True if the player was auto-matched with the currently authenticated user.
         */
        autoMatched: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#played.
         */
        kind: string;
        /**
         * The last time the player played the game in milliseconds since the epoch in UTC.
         */
        timeMillis: string; // int64
    }
    /**
     * This is a JSON template for a Player resource.
     */
    interface IPlayer {
        /**
         * The base URL for the image that represents the player.
         */
        avatarImageUrl: string;
        /**
         * The name to display for the player.
         */
        displayName: string;
        /**
         * An object to represent Play Game experience information for the player.
         */
        experienceInfo: IPlayerExperienceInfo;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#player.
         */
        kind: string;
        /**
         * Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection members.
         */
        lastPlayedWith: IPlayed;
        /**
         * An object representation of the individual components of the player's name. For some players, these fields may not be present.
         */
        name: {
            familyName: string;
            givenName: string;
        };
        /**
         * The ID of the player.
         */
        playerId: string;
        /**
         * The player's title rewarded for their game activities.
         */
        title: string;
    }
    /**
     * This is a JSON template for an achievement object.
     */
    interface IPlayerAchievement {
        /**
         * The state of the achievement.
         * Possible values are:  
         * - "HIDDEN" - Achievement is hidden. 
         * - "REVEALED" - Achievement is revealed. 
         * - "UNLOCKED" - Achievement is unlocked.
         */
        achievementState: string;
        /**
         * The current steps for an incremental achievement.
         */
        currentSteps: number; // int32
        /**
         * Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
         */
        experiencePoints: string; // int64
        /**
         * The current steps for an incremental achievement as a string.
         */
        formattedCurrentStepsString: string;
        /**
         * The ID of the achievement.
         */
        id: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement.
         */
        kind: string;
        /**
         * The timestamp of the last modification to this achievement's state.
         */
        lastUpdatedTimestamp: string; // int64
    }
    /**
     * This is a JSON template for a list of achievement objects.
     */
    interface IPlayerAchievementListResponse {
        /**
         * The achievements.
         */
        items: IPlayerAchievement[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for an event status resource.
     */
    interface IPlayerEvent {
        /**
         * The ID of the event definition.
         */
        definitionId: string;
        /**
         * The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
         */
        formattedNumEvents: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent.
         */
        kind: string;
        /**
         * The current number of times this event has occurred.
         */
        numEvents: string; // int64
        /**
         * The ID of the player.
         */
        playerId: string;
    }
    /**
     * This is a JSON template for a ListByPlayer response.
     */
    interface IPlayerEventListResponse {
        /**
         * The player events.
         */
        items: IPlayerEvent[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerEventListResponse.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for 1P/3P metadata about the player's experience.
     */
    interface IPlayerExperienceInfo {
        /**
         * The current number of experience points for the player.
         */
        currentExperiencePoints: string; // int64
        /**
         * The current level of the player.
         */
        currentLevel: IPlayerLevel;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerExperienceInfo.
         */
        kind: string;
        /**
         * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
         */
        lastLevelUpTimestampMillis: string; // int64
        /**
         * The next level of the player. If the current level is the maximum level, this should be same as the current level.
         */
        nextLevel: IPlayerLevel;
    }
    /**
     * This is a JSON template for a player leaderboard score object.
     */
    interface IPlayerLeaderboardScore {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScore.
         */
        kind: string;
        /**
         * The ID of the leaderboard this score is in.
         */
        leaderboard_id: string;
        /**
         * The public rank of the score in this leaderboard. This object will not be present if the user is not sharing their scores publicly.
         */
        publicRank: ILeaderboardScoreRank;
        /**
         * The formatted value of this score.
         */
        scoreString: string;
        /**
         * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag: string;
        /**
         * The numerical value of this score.
         */
        scoreValue: string; // int64
        /**
         * The social rank of the score in this leaderboard.
         */
        socialRank: ILeaderboardScoreRank;
        /**
         * The time span of this score.
         * Possible values are:  
         * - "ALL_TIME" - The score is an all-time score. 
         * - "WEEKLY" - The score is a weekly score. 
         * - "DAILY" - The score is a daily score.
         */
        timeSpan: string;
        /**
         * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
         */
        writeTimestamp: string; // int64
    }
    /**
     * This is a JSON template for a list of player leaderboard scores.
     */
    interface IPlayerLeaderboardScoreListResponse {
        /**
         * The leaderboard scores.
         */
        items: IPlayerLeaderboardScore[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScoreListResponse.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
        /**
         * The Player resources for the owner of this score.
         */
        player: IPlayer;
    }
    /**
     * This is a JSON template for 1P/3P metadata about a user's level.
     */
    interface IPlayerLevel {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerLevel.
         */
        kind: string;
        /**
         * The level for the user.
         */
        level: number; // int32
        /**
         * The maximum experience points for this level.
         */
        maxExperiencePoints: string; // int64
        /**
         * The minimum experience points for this level.
         */
        minExperiencePoints: string; // int64
    }
    /**
     * This is a JSON template for a third party player list response.
     */
    interface IPlayerListResponse {
        /**
         * The players.
         */
        items: IPlayer[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for a player score.
     */
    interface IPlayerScore {
        /**
         * The formatted score for this player score.
         */
        formattedScore: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore.
         */
        kind: string;
        /**
         * The numerical value for this player score.
         */
        score: string; // int64
        /**
         * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag: string;
        /**
         * The time span for this player score.
         * Possible values are:  
         * - "ALL_TIME" - The score is an all-time score. 
         * - "WEEKLY" - The score is a weekly score. 
         * - "DAILY" - The score is a daily score.
         */
        timeSpan: string;
    }
    /**
     * This is a JSON template for a list of score submission statuses.
     */
    interface IPlayerScoreListResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreListResponse.
         */
        kind: string;
        /**
         * The score submissions statuses.
         */
        submittedScores: IPlayerScoreResponse[];
    }
    /**
     * This is a JSON template for a list of leaderboard entry resources.
     */
    interface IPlayerScoreResponse {
        /**
         * The time spans where the submitted score is better than the existing score for that time span.
         * Possible values are:  
         * - "ALL_TIME" - The score is an all-time score. 
         * - "WEEKLY" - The score is a weekly score. 
         * - "DAILY" - The score is a daily score.
         */
        beatenScoreTimeSpans: string[];
        /**
         * The formatted value of the submitted score.
         */
        formattedScore: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse.
         */
        kind: string;
        /**
         * The leaderboard ID that this score was submitted to.
         */
        leaderboardId: string;
        /**
         * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag: string;
        /**
         * The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's DAILY score, but not better than the player's scores for the WEEKLY or ALL_TIME time spans.
         */
        unbeatenScores: IPlayerScore[];
    }
    /**
     * This is a JSON template for a list of score submission requests
     */
    interface IPlayerScoreSubmissionList {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreSubmissionList.
         */
        kind: string;
        /**
         * The score submissions.
         */
        scores: IScoreSubmission[];
    }
    /**
     * This is a JSON template for a push token resource.
     */
    interface IPushToken {
        /**
         * The revision of the client SDK used by your application, in the same format that's used by revisions.check. Used to send backward compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:  
         * - IOS - Push token is for iOS
         */
        clientRevision: string;
        /**
         * Unique identifier for this push token.
         */
        id: IPushTokenId;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#pushToken.
         */
        kind: string;
        /**
         * The preferred language for notifications that are sent using this token.
         */
        language: string;
    }
    /**
     * This is a JSON template for a push token ID resource.
     */
    interface IPushTokenId {
        /**
         * A push token ID for iOS devices.
         */
        ios: {
            apns_device_token: string; // byte
            apns_environment: string;
        };
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#pushTokenId.
         */
        kind: string;
    }
    /**
     * This is a JSON template for a Quest resource.
     */
    interface IQuest {
        /**
         * The timestamp at which the user accepted the quest in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
         */
        acceptedTimestampMillis: string; // int64
        /**
         * The ID of the application this quest is part of.
         */
        applicationId: string;
        /**
         * The banner image URL for the quest.
         */
        bannerUrl: string;
        /**
         * The description of the quest.
         */
        description: string;
        /**
         * The timestamp at which the quest ceases to be active in milliseconds since the epoch in UTC.
         */
        endTimestampMillis: string; // int64
        /**
         * The icon image URL for the quest.
         */
        iconUrl: string;
        /**
         * The ID of the quest.
         */
        id: string;
        /**
         * Indicates whether the banner image being returned is a default image, or is game-provided.
         */
        isDefaultBannerUrl: boolean;
        /**
         * Indicates whether the icon image being returned is a default image, or is game-provided.
         */
        isDefaultIconUrl: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#quest.
         */
        kind: string;
        /**
         * The timestamp at which the quest was last updated by the user in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
         */
        lastUpdatedTimestampMillis: string; // int64
        /**
         * The quest milestones.
         */
        milestones: IQuestMilestone[];
        /**
         * The name of the quest.
         */
        name: string;
        /**
         * The timestamp at which the user should be notified that the quest will end soon in milliseconds since the epoch in UTC.
         */
        notifyTimestampMillis: string; // int64
        /**
         * The timestamp at which the quest becomes active in milliseconds since the epoch in UTC.
         */
        startTimestampMillis: string; // int64
        /**
         * The state of the quest.
         * Possible values are:  
         * - "UPCOMING": The quest is upcoming. The user can see the quest, but cannot accept it until it is open. 
         * - "OPEN": The quest is currently open and may be accepted at this time. 
         * - "ACCEPTED": The user is currently participating in this quest. 
         * - "COMPLETED": The user has completed the quest. 
         * - "FAILED": The quest was attempted but was not completed before the deadline expired. 
         * - "EXPIRED": The quest has expired and was not accepted. 
         * - "DELETED": The quest should be deleted from the local database.
         */
        state: string;
    }
    /**
     * This is a JSON template for a Quest Criterion Contribution resource.
     */
    interface IQuestContribution {
        /**
         * The formatted value of the contribution as a string. Format depends on the configuration for the associated event definition in the Play Games Developer Console.
         */
        formattedValue: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#questContribution.
         */
        kind: string;
        /**
         * The value of the contribution.
         */
        value: string; // int64
    }
    /**
     * This is a JSON template for a Quest Criterion resource.
     */
    interface IQuestCriterion {
        /**
         * The total number of times the associated event must be incremented for the player to complete this quest.
         */
        completionContribution: IQuestContribution;
        /**
         * The number of increments the player has made toward the completion count event increments required to complete the quest. This value will not exceed the completion contribution.
         * There will be no currentContribution until the player has accepted the quest.
         */
        currentContribution: IQuestContribution;
        /**
         * The ID of the event the criterion corresponds to.
         */
        eventId: string;
        /**
         * The value of the event associated with this quest at the time that the quest was accepted. This value may change if event increments that took place before the start of quest are uploaded after the quest starts.
         * There will be no initialPlayerProgress until the player has accepted the quest.
         */
        initialPlayerProgress: IQuestContribution;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#questCriterion.
         */
        kind: string;
    }
    /**
     * This is a JSON template for a list of quest objects.
     */
    interface IQuestListResponse {
        /**
         * The quests.
         */
        items: IQuest[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#questListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for a Quest Milestone resource.
     */
    interface IQuestMilestone {
        /**
         * The completion reward data of the milestone, represented as a Base64-encoded string. This is a developer-specified binary blob with size between 0 and 2 KB before encoding.
         */
        completionRewardData: string; // byte
        /**
         * The criteria of the milestone.
         */
        criteria: IQuestCriterion[];
        /**
         * The milestone ID.
         */
        id: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#questMilestone.
         */
        kind: string;
        /**
         * The current state of the milestone.
         * Possible values are:  
         * - "COMPLETED_NOT_CLAIMED" - The milestone is complete, but has not yet been claimed. 
         * - "CLAIMED" - The milestone is complete and has been claimed. 
         * - "NOT_COMPLETED" - The milestone has not yet been completed. 
         * - "NOT_STARTED" - The milestone is for a quest that has not yet been accepted.
         */
        state: string;
    }
    /**
     * This is a JSON template for the result of checking a revision.
     */
    interface IRevisionCheckResponse {
        /**
         * The version of the API this client revision should use when calling API methods.
         */
        apiVersion: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#revisionCheckResponse.
         */
        kind: string;
        /**
         * The result of the revision check.
         * Possible values are:  
         * - "OK" - The revision being used is current. 
         * - "DEPRECATED" - There is currently a newer version available, but the revision being used still works. 
         * - "INVALID" - The revision being used is not supported in any released version.
         */
        revisionStatus: string;
    }
    /**
     * This is a JSON template for a room resource object.
     */
    interface IRoom {
        /**
         * The ID of the application being played.
         */
        applicationId: string;
        /**
         * Criteria for auto-matching players into this room.
         */
        autoMatchingCriteria: IRoomAutoMatchingCriteria;
        /**
         * Auto-matching status for this room. Not set if the room is not currently in the auto-matching queue.
         */
        autoMatchingStatus: IRoomAutoMatchStatus;
        /**
         * Details about the room creation.
         */
        creationDetails: IRoomModification;
        /**
         * This short description is generated by our servers and worded relative to the player requesting the room. It is intended to be displayed when the room is shown in a list (that is, an invitation to a room.)
         */
        description: string;
        /**
         * The ID of the participant that invited the user to the room. Not set if the user was not invited to the room.
         */
        inviterId: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#room.
         */
        kind: string;
        /**
         * Details about the last update to the room.
         */
        lastUpdateDetails: IRoomModification;
        /**
         * The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
         */
        participants: IRoomParticipant[];
        /**
         * Globally unique ID for a room.
         */
        roomId: string;
        /**
         * The version of the room status: an increasing counter, used by the client to ignore out-of-order updates to room status.
         */
        roomStatusVersion: number; // int32
        /**
         * The status of the room.
         * Possible values are:  
         * - "ROOM_INVITING" - One or more players have been invited and not responded. 
         * - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching. 
         * - "ROOM_CONNECTING" - Players have joined and are connecting to each other (either before or after auto-matching). 
         * - "ROOM_ACTIVE" - All players have joined and connected to each other. 
         * - "ROOM_DELETED" - The room should no longer be shown on the client. Returned in sync calls when a player joins a room (as a tombstone), or for rooms where all joined participants have left.
         */
        status: string;
        /**
         * The variant / mode of the application being played; can be any integer value, or left blank.
         */
        variant: number; // int32
    }
    /**
     * This is a JSON template for status of room automatching that is in progress.
     */
    interface IRoomAutoMatchStatus {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchStatus.
         */
        kind: string;
        /**
         * An estimate for the amount of time (in seconds) that auto-matching is expected to take to complete.
         */
        waitEstimateSeconds: number; // int32
    }
    /**
     * This is a JSON template for a room auto-match criteria object.
     */
    interface IRoomAutoMatchingCriteria {
        /**
         * A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
         */
        exclusiveBitmask: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchingCriteria.
         */
        kind: string;
        /**
         * The maximum number of players that should be added to the room by auto-matching.
         */
        maxAutoMatchingPlayers: number; // int32
        /**
         * The minimum number of players that should be added to the room by auto-matching.
         */
        minAutoMatchingPlayers: number; // int32
    }
    /**
     * This is a JSON template for the client address when setting up a room.
     */
    interface IRoomClientAddress {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomClientAddress.
         */
        kind: string;
        /**
         * The XMPP address of the client on the Google Games XMPP network.
         */
        xmppAddress: string;
    }
    /**
     * This is a JSON template for a room creation request.
     */
    interface IRoomCreateRequest {
        /**
         * Criteria for auto-matching players into this room.
         */
        autoMatchingCriteria: IRoomAutoMatchingCriteria;
        /**
         * The capabilities that this client supports for realtime communication.
         */
        capabilities: string[];
        /**
         * Client address for the player creating the room.
         */
        clientAddress: IRoomClientAddress;
        /**
         * The player IDs to invite to the room.
         */
        invitedPlayerIds: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomCreateRequest.
         */
        kind: string;
        /**
         * Network diagnostics for the client creating the room.
         */
        networkDiagnostics: INetworkDiagnostics;
        /**
         * A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
         */
        requestId: string; // int64
        /**
         * The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
         */
        variant: number; // int32
    }
    /**
     * This is a JSON template for a join room request.
     */
    interface IRoomJoinRequest {
        /**
         * The capabilities that this client supports for realtime communication.
         */
        capabilities: string[];
        /**
         * Client address for the player joining the room.
         */
        clientAddress: IRoomClientAddress;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomJoinRequest.
         */
        kind: string;
        /**
         * Network diagnostics for the client joining the room.
         */
        networkDiagnostics: INetworkDiagnostics;
    }
    /**
     * This is a JSON template for room leave diagnostics.
     */
    interface IRoomLeaveDiagnostics {
        /**
         * Android network subtype. http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype()
         */
        androidNetworkSubtype: number; // int32
        /**
         * Android network type. http://developer.android.com/reference/android/net/NetworkInfo.html#getType()
         */
        androidNetworkType: number; // int32
        /**
         * iOS network type as defined in Reachability.h.
         */
        iosNetworkType: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveDiagnostics.
         */
        kind: string;
        /**
         * The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
         */
        networkOperatorCode: string;
        /**
         * The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
         */
        networkOperatorName: string;
        /**
         * Diagnostics about all peer sessions.
         */
        peerSession: IPeerSessionDiagnostics[];
        /**
         * Whether or not sockets were used.
         */
        socketsUsed: boolean;
    }
    /**
     * This is a JSON template for a leave room request.
     */
    interface IRoomLeaveRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveRequest.
         */
        kind: string;
        /**
         * Diagnostics for a player leaving the room.
         */
        leaveDiagnostics: IRoomLeaveDiagnostics;
        /**
         * Reason for leaving the match.
         * Possible values are:  
         * - "PLAYER_LEFT" - The player chose to leave the room.. 
         * - "GAME_LEFT" - The game chose to remove the player from the room. 
         * - "REALTIME_ABANDONED" - The player switched to another application and abandoned the room. 
         * - "REALTIME_PEER_CONNECTION_FAILURE" - The client was unable to establish a connection to other peer(s). 
         * - "REALTIME_SERVER_CONNECTION_FAILURE" - The client was unable to communicate with the server. 
         * - "REALTIME_SERVER_ERROR" - The client received an error response when it tried to communicate with the server. 
         * - "REALTIME_TIMEOUT" - The client timed out while waiting for a room. 
         * - "REALTIME_CLIENT_DISCONNECTING" - The client disconnects without first calling Leave. 
         * - "REALTIME_SIGN_OUT" - The user signed out of G+ while in the room. 
         * - "REALTIME_GAME_CRASHED" - The game crashed. 
         * - "REALTIME_ROOM_SERVICE_CRASHED" - RoomAndroidService crashed. 
         * - "REALTIME_DIFFERENT_CLIENT_ROOM_OPERATION" - Another client is trying to enter a room. 
         * - "REALTIME_SAME_CLIENT_ROOM_OPERATION" - The same client is trying to enter a new room.
         */
        reason: string;
    }
    /**
     * This is a JSON template for a list of rooms.
     */
    interface IRoomList {
        /**
         * The rooms.
         */
        items: IRoom[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomList.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for room modification metadata.
     */
    interface IRoomModification {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomModification.
         */
        kind: string;
        /**
         * The timestamp at which they modified the room, in milliseconds since the epoch in UTC.
         */
        modifiedTimestampMillis: string; // int64
        /**
         * The ID of the participant that modified the room.
         */
        participantId: string;
    }
    /**
     * This is a JSON template for an update on the status of a peer in a room.
     */
    interface IRoomP2PStatus {
        /**
         * The amount of time in milliseconds it took to establish connections with this peer.
         */
        connectionSetupLatencyMillis: number; // int32
        /**
         * The error code in event of a failure.
         * Possible values are:  
         * - "P2P_FAILED" - The client failed to establish a P2P connection with the peer. 
         * - "PRESENCE_FAILED" - The client failed to register to receive P2P connections. 
         * - "RELAY_SERVER_FAILED" - The client received an error when trying to use the relay server to establish a P2P connection with the peer.
         */
        error: string;
        /**
         * More detailed diagnostic message returned in event of a failure.
         */
        error_reason: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatus.
         */
        kind: string;
        /**
         * The ID of the participant.
         */
        participantId: string;
        /**
         * The status of the peer in the room.
         * Possible values are:  
         * - "CONNECTION_ESTABLISHED" - The client established a P2P connection with the peer. 
         * - "CONNECTION_FAILED" - The client failed to establish directed presence with the peer.
         */
        status: string;
        /**
         * The amount of time in milliseconds it took to send packets back and forth on the unreliable channel with this peer.
         */
        unreliableRoundtripLatencyMillis: number; // int32
    }
    /**
     * This is a JSON template for an update on the status of peers in a room.
     */
    interface IRoomP2PStatuses {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatuses.
         */
        kind: string;
        /**
         * The updates for the peers.
         */
        updates: IRoomP2PStatus[];
    }
    /**
     * This is a JSON template for a participant in a room.
     */
    interface IRoomParticipant {
        /**
         * True if this participant was auto-matched with the requesting player.
         */
        autoMatched: boolean;
        /**
         * Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        autoMatchedPlayer: IAnonymousPlayer;
        /**
         * The capabilities which can be used when communicating with this participant.
         */
        capabilities: string[];
        /**
         * Client address for the participant.
         */
        clientAddress: IRoomClientAddress;
        /**
         * True if this participant is in the fully connected set of peers in the room.
         */
        connected: boolean;
        /**
         * An identifier for the participant in the scope of the room. Cannot be used to identify a player across rooms or in other contexts.
         */
        id: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomParticipant.
         */
        kind: string;
        /**
         * The reason the participant left the room; populated if the participant status is PARTICIPANT_LEFT.
         * Possible values are:  
         * - "PLAYER_LEFT" - The player explicitly chose to leave the room. 
         * - "GAME_LEFT" - The game chose to remove the player from the room. 
         * - "ABANDONED" - The player switched to another application and abandoned the room.
         * - "PEER_CONNECTION_FAILURE" - The client was unable to establish or maintain a connection to other peer(s) in the room.
         * - "SERVER_ERROR" - The client received an error response when it tried to communicate with the server. 
         * - "TIMEOUT" - The client timed out while waiting for players to join and connect. 
         * - "PRESENCE_FAILURE" - The client's XMPP connection ended abruptly.
         */
        leaveReason: string;
        /**
         * Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        player: IPlayer;
        /**
         * The status of the participant with respect to the room.
         * Possible values are:  
         * - "PARTICIPANT_INVITED" - The participant has been invited to join the room, but has not yet responded. 
         * - "PARTICIPANT_JOINED" - The participant has joined the room (either after creating it or accepting an invitation.) 
         * - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the room. 
         * - "PARTICIPANT_LEFT" - The participant joined the room and then left it.
         */
        status: string;
    }
    /**
     * This is a JSON template for the status of a room that the player has joined.
     */
    interface IRoomStatus {
        /**
         * Auto-matching status for this room. Not set if the room is not currently in the automatching queue.
         */
        autoMatchingStatus: IRoomAutoMatchStatus;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#roomStatus.
         */
        kind: string;
        /**
         * The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
         */
        participants: IRoomParticipant[];
        /**
         * Globally unique ID for a room.
         */
        roomId: string;
        /**
         * The status of the room.
         * Possible values are:  
         * - "ROOM_INVITING" - One or more players have been invited and not responded. 
         * - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching. 
         * - "ROOM_CONNECTING" - Players have joined are connecting to each other (either before or after auto-matching). 
         * - "ROOM_ACTIVE" - All players have joined and connected to each other. 
         * - "ROOM_DELETED" - All joined players have left.
         */
        status: string;
        /**
         * The version of the status for the room: an increasing counter, used by the client to ignore out-of-order updates to room status.
         */
        statusVersion: number; // int32
    }
    /**
     * This is a JSON template for a request to submit a score to leaderboards.
     */
    interface IScoreSubmission {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#scoreSubmission.
         */
        kind: string;
        /**
         * The leaderboard this score is being submitted to.
         */
        leaderboardId: string;
        /**
         * The new score being submitted.
         */
        score: string; // int64
        /**
         * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag: string;
        /**
         * Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        signature: string;
    }
    /**
     * This is a JSON template for an snapshot object.
     */
    interface ISnapshot {
        /**
         * The cover image of this snapshot. May be absent if there is no image.
         */
        coverImage: ISnapshotImage;
        /**
         * The description of this snapshot.
         */
        description: string;
        /**
         * The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
         */
        driveId: string;
        /**
         * The duration associated with this snapshot, in millis.
         */
        durationMillis: string; // int64
        /**
         * The ID of the snapshot.
         */
        id: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshot.
         */
        kind: string;
        /**
         * The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
         */
        lastModifiedMillis: string; // int64
        /**
         * The title of this snapshot.
         */
        title: string;
        /**
         * The type of this snapshot.
         * Possible values are:  
         * - "SAVE_GAME" - A snapshot representing a save game.
         */
        type: string;
        /**
         * The unique name provided when the snapshot was created.
         */
        uniqueName: string;
    }
    /**
     * This is a JSON template for an image of a snapshot.
     */
    interface ISnapshotImage {
        /**
         * The height of the image.
         */
        height: number; // int32
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotImage.
         */
        kind: string;
        /**
         * The MIME type of the image.
         */
        mime_type: string;
        /**
         * The URL of the image. This URL may be invalidated at any time and should not be cached.
         */
        url: string;
        /**
         * The width of the image.
         */
        width: number; // int32
    }
    /**
     * This is a JSON template for a list of snapshot objects.
     */
    interface ISnapshotListResponse {
        /**
         * The snapshots.
         */
        items: ISnapshot[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotListResponse.
         */
        kind: string;
        /**
         * Token corresponding to the next page of results. If there are no more results, the token is omitted.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for an turn-based auto-match criteria object.
     */
    interface ITurnBasedAutoMatchingCriteria {
        /**
         * A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
         */
        exclusiveBitmask: string; // int64
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedAutoMatchingCriteria.
         */
        kind: string;
        /**
         * The maximum number of players that should be added to the match by auto-matching.
         */
        maxAutoMatchingPlayers: number; // int32
        /**
         * The minimum number of players that should be added to the match by auto-matching.
         */
        minAutoMatchingPlayers: number; // int32
    }
    /**
     * This is a JSON template for a turn-based match resource object.
     */
    interface ITurnBasedMatch {
        /**
         * The ID of the application being played.
         */
        applicationId: string;
        /**
         * Criteria for auto-matching players into this match.
         */
        autoMatchingCriteria: ITurnBasedAutoMatchingCriteria;
        /**
         * Details about the match creation.
         */
        creationDetails: ITurnBasedMatchModification;
        /**
         * The data / game state for this match.
         */
        data: ITurnBasedMatchData;
        /**
         * This short description is generated by our servers based on turn state and is localized and worded relative to the player requesting the match. It is intended to be displayed when the match is shown in a list.
         */
        description: string;
        /**
         * The ID of the participant that invited the user to the match. Not set if the user was not invited to the match.
         */
        inviterId: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatch.
         */
        kind: string;
        /**
         * Details about the last update to the match.
         */
        lastUpdateDetails: ITurnBasedMatchModification;
        /**
         * Globally unique ID for a turn-based match.
         */
        matchId: string;
        /**
         * The number of the match in a chain of rematches. Will be set to 1 for the first match and incremented by 1 for each rematch.
         */
        matchNumber: number; // int32
        /**
         * The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
         */
        matchVersion: number; // int32
        /**
         * The participants involved in the match, along with their statuses. Includes participants who have left or declined invitations.
         */
        participants: ITurnBasedMatchParticipant[];
        /**
         * The ID of the participant that is taking a turn.
         */
        pendingParticipantId: string;
        /**
         * The data / game state for the previous match; set for the first turn of rematches only.
         */
        previousMatchData: ITurnBasedMatchData;
        /**
         * The ID of a rematch of this match. Only set for completed matches that have been rematched.
         */
        rematchId: string;
        /**
         * The results reported for this match.
         */
        results: IParticipantResult[];
        /**
         * The status of the match.
         * Possible values are:  
         * - "MATCH_AUTO_MATCHING" - One or more slots need to be filled by auto-matching; the match cannot be established until they are filled. 
         * - "MATCH_ACTIVE" - The match has started. 
         * - "MATCH_COMPLETE" - The match has finished. 
         * - "MATCH_CANCELED" - The match was canceled. 
         * - "MATCH_EXPIRED" - The match expired due to inactivity. 
         * - "MATCH_DELETED" - The match should no longer be shown on the client. Returned only for tombstones for matches when sync is called.
         */
        status: string;
        /**
         * The status of the current user in the match. Derived from the match type, match status, the user's participant status, and the pending participant for the match.
         * Possible values are:  
         * - "USER_INVITED" - The user has been invited to join the match and has not responded yet. 
         * - "USER_AWAITING_TURN" - The user is waiting for their turn. 
         * - "USER_TURN" - The user has an action to take in the match. 
         * - "USER_MATCH_COMPLETED" - The match has ended (it is completed, canceled, or expired.)
         */
        userMatchStatus: string;
        /**
         * The variant / mode of the application being played; can be any integer value, or left blank.
         */
        variant: number; // int32
        /**
         * The ID of another participant in the match that can be used when describing the participants the user is playing with.
         */
        withParticipantId: string;
    }
    /**
     * This is a JSON template for a turn-based match creation request.
     */
    interface ITurnBasedMatchCreateRequest {
        /**
         * Criteria for auto-matching players into this match.
         */
        autoMatchingCriteria: ITurnBasedAutoMatchingCriteria;
        /**
         * The player ids to invite to the match.
         */
        invitedPlayerIds: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchCreateRequest.
         */
        kind: string;
        /**
         * A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
         */
        requestId: string; // int64
        /**
         * The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.
         */
        variant: number; // int32
    }
    /**
     * This is a JSON template for a turn-based match data object.
     */
    interface ITurnBasedMatchData {
        /**
         * The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
         */
        data: string; // byte
        /**
         * True if this match has data available but it wasn't returned in a list response; fetching the match individually will retrieve this data.
         */
        dataAvailable: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchData.
         */
        kind: string;
    }
    /**
     * This is a JSON template for sending a turn-based match data object.
     */
    interface ITurnBasedMatchDataRequest {
        /**
         * The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
         */
        data: string; // byte
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchDataRequest.
         */
        kind: string;
    }
    /**
     * This is a JSON template for a list of turn-based matches.
     */
    interface ITurnBasedMatchList {
        /**
         * The matches.
         */
        items: ITurnBasedMatch[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchList.
         */
        kind: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for turn-based match modification metadata.
     */
    interface ITurnBasedMatchModification {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchModification.
         */
        kind: string;
        /**
         * The timestamp at which they modified the match, in milliseconds since the epoch in UTC.
         */
        modifiedTimestampMillis: string; // int64
        /**
         * The ID of the participant that modified the match.
         */
        participantId: string;
    }
    /**
     * This is a JSON template for a participant in a turn-based match.
     */
    interface ITurnBasedMatchParticipant {
        /**
         * True if this participant was auto-matched with the requesting player.
         */
        autoMatched: boolean;
        /**
         * Information about a player that has been anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        autoMatchedPlayer: IAnonymousPlayer;
        /**
         * An identifier for the participant in the scope of the match. Cannot be used to identify a player across matches or in other contexts.
         */
        id: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchParticipant.
         */
        kind: string;
        /**
         * Information about the player. Not populated if this player was anonymously auto-matched against the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        player: IPlayer;
        /**
         * The status of the participant with respect to the match.
         * Possible values are:  
         * - "PARTICIPANT_NOT_INVITED_YET" - The participant is slated to be invited to the match, but the invitation has not been sent; the invite will be sent when it becomes their turn. 
         * - "PARTICIPANT_INVITED" - The participant has been invited to join the match, but has not yet responded. 
         * - "PARTICIPANT_JOINED" - The participant has joined the match (either after creating it or accepting an invitation.) 
         * - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the match. 
         * - "PARTICIPANT_LEFT" - The participant joined the match and then left it. 
         * - "PARTICIPANT_FINISHED" - The participant finished playing in the match. 
         * - "PARTICIPANT_UNRESPONSIVE" - The participant did not take their turn in the allotted time.
         */
        status: string;
    }
    /**
     * This is a JSON template for a rematch response.
     */
    interface ITurnBasedMatchRematch {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchRematch.
         */
        kind: string;
        /**
         * The old match that the rematch was created from; will be updated such that the rematchId field will point at the new match.
         */
        previousMatch: ITurnBasedMatch;
        /**
         * The newly created match; a rematch of the old match with the same participants.
         */
        rematch: ITurnBasedMatch;
    }
    /**
     * This is a JSON template for a turn-based match results object.
     */
    interface ITurnBasedMatchResults {
        /**
         * The final match data.
         */
        data: ITurnBasedMatchDataRequest;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchResults.
         */
        kind: string;
        /**
         * The version of the match being updated.
         */
        matchVersion: number; // int32
        /**
         * The match results for the participants in the match.
         */
        results: IParticipantResult[];
    }
    /**
     * This is a JSON template for a list of turn-based matches returned from a sync.
     */
    interface ITurnBasedMatchSync {
        /**
         * The matches.
         */
        items: ITurnBasedMatch[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchSync.
         */
        kind: string;
        /**
         * True if there were more matches available to fetch at the time the response was generated (which were not returned due to page size limits.)
         */
        moreAvailable: boolean;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken: string;
    }
    /**
     * This is a JSON template for the object representing a turn.
     */
    interface ITurnBasedMatchTurn {
        /**
         * The shared game state data after the turn is over.
         */
        data: ITurnBasedMatchDataRequest;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchTurn.
         */
        kind: string;
        /**
         * The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
         */
        matchVersion: number; // int32
        /**
         * The ID of the participant who should take their turn next. May be set to the current player's participant ID to update match state without changing the turn. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
         */
        pendingParticipantId: string;
        /**
         * The match results for the participants in the match.
         */
        results: IParticipantResult[];
    }
}
