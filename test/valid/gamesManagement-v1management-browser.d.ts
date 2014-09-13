// Type definitions for Google Google Play Game Services Management API v1management
// Project: https://developers.google.com/games/services
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/games
//   Share your Google+ profile information and view and manage your game activity
// https://www.googleapis.com/auth/plus.login
//   Know your basic profile info and list of people in your circles.

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Management API for Google Play Game Services.
     */
    module gamesManagement {
        var achievements: {
            /**
             * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
             * @params {string} achievementId The ID of the achievement used by this method.
             */
            reset: (params: {
                achievementId: string;
            }) => { execute(callback: (data: IResponse<IAchievementResetResponse>, original: string) => void):void; };
            /**
             * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
             */
            resetAll: (params: {
            }) => { execute(callback: (data: IResponse<IAchievementResetAllResponse>, original: string) => void):void; };
            /**
             * Resets the achievement with the given ID for the all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
             * @params {string} achievementId The ID of the achievement used by this method.
             */
            resetForAllPlayers: (params: {
                achievementId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var applications: {
            /**
             * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
             * @params {string} applicationId The application being requested.
             * @params {number} maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
             * @params {string} pageToken The token returned by the previous request.
             */
            listHidden: (params: {
                applicationId: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: IResponse<IHiddenPlayerList>, original: string) => void):void; };
        };
        var events: {
            /**
             * Reset all player progress on the event for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All resources that use the event will also be reset.
             * @params {string} eventId The ID of the event.
             */
            reset: (params: {
                eventId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Reset all player progress on all unpublished events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All resources that use the events will also be reset.
             */
            resetAll: (params: {
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Reset all player progress on the event for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All resources that use the event will also be reset.
             * @params {string} eventId The ID of the event.
             */
            resetForAllPlayers: (params: {
                eventId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var players: {
            /**
             * Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
             * @params {string} applicationId The application being requested.
             * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
             */
            hide: (params: {
                applicationId: string;
                playerId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
             * @params {string} applicationId The application being requested.
             * @params {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
             */
            unhide: (params: {
                applicationId: string;
                playerId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var quests: {
            /**
             * Reset all player progress on the quest for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
             * @params {string} questId The ID of the quest.
             */
            reset: (params: {
                questId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var rooms: {
            /**
             * Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
             */
            reset: (params: {
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var scores: {
            /**
             * Reset scores for the specified leaderboard for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
             * @params {string} leaderboardId The ID of the leaderboard.
             */
            reset: (params: {
                leaderboardId: string;
            }) => { execute(callback: (data: IResponse<IPlayerScoreResetResponse>, original: string) => void):void; };
            /**
             * Reset scores for the specified leaderboard for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
             * @params {string} leaderboardId The ID of the leaderboard.
             */
            resetForAllPlayers: (params: {
                leaderboardId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var turnBasedMatches: {
            /**
             * Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
             */
            reset: (params: {
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        /**
         * This is a JSON template for achievement reset all response.
         */
        interface IAchievementResetAllResponse {
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetAllResponse.
             */
            kind: string;
            /**
             * The achievement reset results.
             */
            results: IAchievementResetResponse[];
        }
        /**
         * This is a JSON template for an achievement reset response.
         */
        interface IAchievementResetResponse {
            /**
             * The current state of the achievement. This is the same as the initial state of the achievement.
             * Possible values are:  
             * - "HIDDEN"- Achievement is hidden. 
             * - "REVEALED" - Achievement is revealed. 
             * - "UNLOCKED" - Achievement is unlocked.
             */
            currentState: string;
            /**
             * The ID of an achievement for which player state has been updated.
             */
            definitionId: string;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetResponse.
             */
            kind: string;
            /**
             * Flag to indicate if the requested update actually occurred.
             */
            updateOccurred: boolean;
        }
        /**
         * This is a JSON template for metadata about a player playing a game with the currently authenticated user.
         */
        interface IGamesPlayedResource {
            /**
             * True if the player was auto-matched with the currently authenticated user.
             */
            autoMatched: boolean;
            /**
             * The last time the player played the game in milliseconds since the epoch in UTC.
             */
            timeMillis: string; // int64
        }
        /**
         * This is a JSON template for 1P/3P metadata about the player's experience.
         */
        interface IGamesPlayerExperienceInfoResource {
            /**
             * The current number of experience points for the player.
             */
            currentExperiencePoints: string; // int64
            /**
             * The current level of the player.
             */
            currentLevel: IGamesPlayerLevelResource;
            /**
             * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
             */
            lastLevelUpTimestampMillis: string; // int64
            /**
             * The next level of the player. If the current level is the maximum level, this should be same as the current level.
             */
            nextLevel: IGamesPlayerLevelResource;
        }
        /**
         * This is a JSON template for 1P/3P metadata about a user's level.
         */
        interface IGamesPlayerLevelResource {
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
         * This is a JSON template for the HiddenPlayer resource.
         */
        interface IHiddenPlayer {
            /**
             * The time this player was hidden.
             */
            hiddenTimeMillis: string; // int64
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayer.
             */
            kind: string;
            /**
             * The player information.
             */
            player: IPlayer;
        }
        /**
         * This is a JSON template for a list of hidden players.
         */
        interface IHiddenPlayerList {
            /**
             * The players.
             */
            items: IHiddenPlayer[];
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayerList.
             */
            kind: string;
            /**
             * The pagination token for the next page of results.
             */
            nextPageToken: string;
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
            experienceInfo: IGamesPlayerExperienceInfoResource;
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#player.
             */
            kind: string;
            /**
             * Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection members.
             */
            lastPlayedWith: IGamesPlayedResource;
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
         * This is a JSON template for a list of reset leaderboard entry resources.
         */
        interface IPlayerScoreResetResponse {
            /**
             * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
             */
            kind: string;
            /**
             * The time spans of the updated score.
             * Possible values are:  
             * - "ALL_TIME" - The score is an all-time score. 
             * - "WEEKLY" - The score is a weekly score. 
             * - "DAILY" - The score is a daily score.
             */
            resetScoreTimeSpans: string[];
        }
    }
}
