// Type definitions for Google Google Analytics API v3
// Project: https://developers.google.com/analytics/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * View and manage your Google Analytics data
     */
    module analytics {
        var data: {
            ga: {
                /**
                 * Returns Analytics data for a view (profile).
                 * @params {string} dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
                 * @params {string} end-date End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
                 * @params {string} filters A comma-separated list of dimension or metric filters to be applied to Analytics data.
                 * @params {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
                 * @params {number} max-results The maximum number of entries to include in this feed.
                 * @params {string} metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
                 * @params {string} output The selected format for the response. Default format is JSON.
                 * @params {string} samplingLevel The desired sampling level.
                 * @params {string} segment An Analytics segment to be applied to data.
                 * @params {string} sort A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
                 * @params {string} start-date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                get: (params: {
                    dimensions?: string;
                    "end-date": string;
                    filters?: string;
                    ids: string;
                    "max-results"?: number;
                    metrics: string;
                    output?: string;
                    samplingLevel?: string;
                    segment?: string;
                    sort?: string;
                    "start-date": string;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IGaData>, original: string) => void):void; };
            };
            mcf: {
                /**
                 * Returns Analytics Multi-Channel Funnels data for a view (profile).
                 * @params {string} dimensions A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
                 * @params {string} end-date End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
                 * @params {string} filters A comma-separated list of dimension or metric filters to be applied to the Analytics data.
                 * @params {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
                 * @params {number} max-results The maximum number of entries to include in this feed.
                 * @params {string} metrics A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
                 * @params {string} samplingLevel The desired sampling level.
                 * @params {string} sort A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
                 * @params {string} start-date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                get: (params: {
                    dimensions?: string;
                    "end-date": string;
                    filters?: string;
                    ids: string;
                    "max-results"?: number;
                    metrics: string;
                    samplingLevel?: string;
                    sort?: string;
                    "start-date": string;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IMcfData>, original: string) => void):void; };
            };
            realtime: {
                /**
                 * Returns real time data for a view (profile).
                 * @params {string} dimensions A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
                 * @params {string} filters A comma-separated list of dimension or metric filters to be applied to real time data.
                 * @params {string} ids Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
                 * @params {number} max-results The maximum number of entries to include in this feed.
                 * @params {string} metrics A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
                 * @params {string} sort A comma-separated list of dimensions or metrics that determine the sort order for real time data.
                 */
                get: (params: {
                    dimensions?: string;
                    filters?: string;
                    ids: string;
                    "max-results"?: number;
                    metrics: string;
                    sort?: string;
                }) => { execute(callback: (data: IResponse<IRealtimeData>, original: string) => void):void; };
            };
        };
        var management: {
            accountSummaries: {
                /**
                 * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
                 * @params {number} max-results The maximum number of filters to include in this response.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IAccountSummaries>, original: string) => void):void; };
            };
            accountUserLinks: {
                /**
                 * Removes a user from the given account.
                 * @params {string} accountId Account ID to delete the user link for.
                 * @params {string} linkId Link ID to delete the user link for.
                 */
                delete: (params: {
                    accountId: string;
                    linkId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Adds a new user to the given account.
                 * @params {string} accountId Account ID to create the user link for.
                 */
                insert: (params: {
                    accountId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
                /**
                 * Lists account-user links for a given account.
                 * @params {string} accountId Account ID to retrieve the user links for.
                 * @params {number} max-results The maximum number of account-user links to include in this response.
                 * @params {number} start-index An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IEntityUserLinks>, original: string) => void):void; };
                /**
                 * Updates permissions for an existing user on the given account.
                 * @params {string} accountId Account ID to update the account-user link for.
                 * @params {string} linkId Link ID to update the account-user link for.
                 */
                update: (params: {
                    accountId: string;
                    linkId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
            };
            accounts: {
                /**
                 * Lists all accounts to which the user has access.
                 * @params {number} max-results The maximum number of accounts to include in this response.
                 * @params {number} start-index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IAccounts>, original: string) => void):void; };
            };
            customDataSources: {
                /**
                 * List custom data sources to which the user has access.
                 * @params {string} accountId Account Id for the custom data sources to retrieve.
                 * @params {number} max-results The maximum number of custom data sources to include in this response.
                 * @params {number} start-index A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property Id for the custom data sources to retrieve.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<ICustomDataSources>, original: string) => void):void; };
            };
            dailyUploads: {
                /**
                 * Delete uploaded data for the given date.
                 * @params {string} accountId Account Id associated with daily upload delete.
                 * @params {string} customDataSourceId Custom data source Id associated with daily upload delete.
                 * @params {string} date Date for which data is to be deleted. Date should be formatted as YYYY-MM-DD.
                 * @params {string} type Type of data for this delete.
                 * @params {string} webPropertyId Web property Id associated with daily upload delete.
                 */
                delete: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    date: string;
                    type: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * List daily uploads to which the user has access.
                 * @params {string} accountId Account Id for the daily uploads to retrieve.
                 * @params {string} customDataSourceId Custom data source Id for daily uploads to retrieve.
                 * @params {string} end-date End date of the form YYYY-MM-DD.
                 * @params {number} max-results The maximum number of custom data sources to include in this response.
                 * @params {string} start-date Start date of the form YYYY-MM-DD.
                 * @params {number} start-index A 1-based index of the first daily upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property Id for the daily uploads to retrieve.
                 */
                list: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    "end-date": string;
                    "max-results"?: number;
                    "start-date": string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IDailyUploads>, original: string) => void):void; };
                /**
                 * Update/Overwrite data for a custom data source.
                 * @params {string} accountId Account Id associated with daily upload.
                 * @params {number} appendNumber Append number for this upload indexed from 1.
                 * @params {string} customDataSourceId Custom data source Id to which the data being uploaded belongs.
                 * @params {string} date Date for which data is uploaded. Date should be formatted as YYYY-MM-DD.
                 * @params {boolean} reset Reset/Overwrite all previous appends for this date and start over with this file as the first upload.
                 * @params {string} type Type of data for this upload.
                 * @params {string} webPropertyId Web property Id associated with daily upload.
                 */
                upload: (params: {
                    accountId: string;
                    appendNumber: number;
                    customDataSourceId: string;
                    date: string;
                    reset?: boolean;
                    type: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IDailyUploadAppend>, original: string) => void):void; };
            };
            experiments: {
                /**
                 * Delete an experiment.
                 * @params {string} accountId Account ID to which the experiment belongs
                 * @params {string} experimentId ID of the experiment to delete
                 * @params {string} profileId View (Profile) ID to which the experiment belongs
                 * @params {string} webPropertyId Web property ID to which the experiment belongs
                 */
                delete: (params: {
                    accountId: string;
                    experimentId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Returns an experiment to which the user has access.
                 * @params {string} accountId Account ID to retrieve the experiment for.
                 * @params {string} experimentId Experiment ID to retrieve the experiment for.
                 * @params {string} profileId View (Profile) ID to retrieve the experiment for.
                 * @params {string} webPropertyId Web property ID to retrieve the experiment for.
                 */
                get: (params: {
                    accountId: string;
                    experimentId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IExperiment>, original: string) => void):void; };
                /**
                 * Create a new experiment.
                 * @params {string} accountId Account ID to create the experiment for.
                 * @params {string} profileId View (Profile) ID to create the experiment for.
                 * @params {string} webPropertyId Web property ID to create the experiment for.
                 */
                insert: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IExperiment;
                }) => { execute(callback: (data: IResponse<IExperiment>, original: string) => void):void; };
                /**
                 * Lists experiments to which the user has access.
                 * @params {string} accountId Account ID to retrieve experiments for.
                 * @params {number} max-results The maximum number of experiments to include in this response.
                 * @params {string} profileId View (Profile) ID to retrieve experiments for.
                 * @params {number} start-index An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property ID to retrieve experiments for.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    profileId: string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IExperiments>, original: string) => void):void; };
                /**
                 * Update an existing experiment. This method supports patch semantics.
                 * @params {string} accountId Account ID of the experiment to update.
                 * @params {string} experimentId Experiment ID of the experiment to update.
                 * @params {string} profileId View (Profile) ID of the experiment to update.
                 * @params {string} webPropertyId Web property ID of the experiment to update.
                 */
                patch: (params: {
                    accountId: string;
                    experimentId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IExperiment;
                }) => { execute(callback: (data: IResponse<IExperiment>, original: string) => void):void; };
                /**
                 * Update an existing experiment.
                 * @params {string} accountId Account ID of the experiment to update.
                 * @params {string} experimentId Experiment ID of the experiment to update.
                 * @params {string} profileId View (Profile) ID of the experiment to update.
                 * @params {string} webPropertyId Web property ID of the experiment to update.
                 */
                update: (params: {
                    accountId: string;
                    experimentId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IExperiment;
                }) => { execute(callback: (data: IResponse<IExperiment>, original: string) => void):void; };
            };
            filters: {
                /**
                 * Delete a filter.
                 * @params {string} accountId Account ID to delete the filter for.
                 * @params {string} filterId ID of the filter to be deleted.
                 */
                delete: (params: {
                    accountId: string;
                    filterId: string;
                }) => { execute(callback: (data: IResponse<IFilter>, original: string) => void):void; };
                /**
                 * Returns a filters to which the user has access.
                 * @params {string} accountId Account ID to retrieve filters for.
                 * @params {string} filterId Filter ID to retrieve filters for.
                 */
                get: (params: {
                    accountId: string;
                    filterId: string;
                }) => { execute(callback: (data: IResponse<IFilter>, original: string) => void):void; };
                /**
                 * Create a new filter.
                 * @params {string} accountId Account ID to create filter for.
                 */
                insert: (params: {
                    accountId: string;
                    resource?: IFilter;
                }) => { execute(callback: (data: IResponse<IFilter>, original: string) => void):void; };
                /**
                 * Lists all filters for an account
                 * @params {string} accountId Account ID to retrieve filters for.
                 * @params {number} max-results The maximum number of filters to include in this response.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IFilters>, original: string) => void):void; };
                /**
                 * Updates an existing filter. This method supports patch semantics.
                 * @params {string} accountId Account ID to which the filter belongs.
                 * @params {string} filterId ID of the filter to be updated.
                 */
                patch: (params: {
                    accountId: string;
                    filterId: string;
                    resource?: IFilter;
                }) => { execute(callback: (data: IResponse<IFilter>, original: string) => void):void; };
                /**
                 * Updates an existing filter.
                 * @params {string} accountId Account ID to which the filter belongs.
                 * @params {string} filterId ID of the filter to be updated.
                 */
                update: (params: {
                    accountId: string;
                    filterId: string;
                    resource?: IFilter;
                }) => { execute(callback: (data: IResponse<IFilter>, original: string) => void):void; };
            };
            goals: {
                /**
                 * Gets a goal to which the user has access.
                 * @params {string} accountId Account ID to retrieve the goal for.
                 * @params {string} goalId Goal ID to retrieve the goal for.
                 * @params {string} profileId View (Profile) ID to retrieve the goal for.
                 * @params {string} webPropertyId Web property ID to retrieve the goal for.
                 */
                get: (params: {
                    accountId: string;
                    goalId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IGoal>, original: string) => void):void; };
                /**
                 * Create a new goal.
                 * @params {string} accountId Account ID to create the goal for.
                 * @params {string} profileId View (Profile) ID to create the goal for.
                 * @params {string} webPropertyId Web property ID to create the goal for.
                 */
                insert: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IGoal;
                }) => { execute(callback: (data: IResponse<IGoal>, original: string) => void):void; };
                /**
                 * Lists goals to which the user has access.
                 * @params {string} accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
                 * @params {number} max-results The maximum number of goals to include in this response.
                 * @params {string} profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
                 * @params {number} start-index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    profileId: string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IGoals>, original: string) => void):void; };
                /**
                 * Updates an existing view (profile). This method supports patch semantics.
                 * @params {string} accountId Account ID to update the goal.
                 * @params {string} goalId Index of the goal to be updated.
                 * @params {string} profileId View (Profile) ID to update the goal.
                 * @params {string} webPropertyId Web property ID to update the goal.
                 */
                patch: (params: {
                    accountId: string;
                    goalId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IGoal;
                }) => { execute(callback: (data: IResponse<IGoal>, original: string) => void):void; };
                /**
                 * Updates an existing view (profile).
                 * @params {string} accountId Account ID to update the goal.
                 * @params {string} goalId Index of the goal to be updated.
                 * @params {string} profileId View (Profile) ID to update the goal.
                 * @params {string} webPropertyId Web property ID to update the goal.
                 */
                update: (params: {
                    accountId: string;
                    goalId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IGoal;
                }) => { execute(callback: (data: IResponse<IGoal>, original: string) => void):void; };
            };
            profileFilterLinks: {
                /**
                 * Delete a profile filter link.
                 * @params {string} accountId Account ID to which the profile filter link belongs.
                 * @params {string} linkId ID of the profile filter link to delete.
                 * @params {string} profileId Profile ID to which the filter link belongs.
                 * @params {string} webPropertyId Web property Id to which the profile filter link belongs.
                 */
                delete: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Returns a single profile filter link.
                 * @params {string} accountId Account ID to retrieve profile filter link for.
                 * @params {string} linkId ID of the profile filter link.
                 * @params {string} profileId Profile ID to retrieve filter link for.
                 * @params {string} webPropertyId Web property Id to retrieve profile filter link for.
                 */
                get: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IProfileFilterLink>, original: string) => void):void; };
                /**
                 * Create a new profile filter link.
                 * @params {string} accountId Account ID to create profile filter link for.
                 * @params {string} profileId Profile ID to create filter link for.
                 * @params {string} webPropertyId Web property Id to create profile filter link for.
                 */
                insert: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IProfileFilterLink;
                }) => { execute(callback: (data: IResponse<IProfileFilterLink>, original: string) => void):void; };
                /**
                 * Lists all profile filter links for a profile.
                 * @params {string} accountId Account ID to retrieve profile filter links for.
                 * @params {number} max-results The maximum number of profile filter links to include in this response.
                 * @params {string} profileId Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    profileId: string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IProfileFilterLinks>, original: string) => void):void; };
                /**
                 * Update an existing profile filter link. This method supports patch semantics.
                 * @params {string} accountId Account ID to which profile filter link belongs.
                 * @params {string} linkId ID of the profile filter link to be updated.
                 * @params {string} profileId Profile ID to which filter link belongs
                 * @params {string} webPropertyId Web property Id to which profile filter link belongs
                 */
                patch: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IProfileFilterLink;
                }) => { execute(callback: (data: IResponse<IProfileFilterLink>, original: string) => void):void; };
                /**
                 * Update an existing profile filter link.
                 * @params {string} accountId Account ID to which profile filter link belongs.
                 * @params {string} linkId ID of the profile filter link to be updated.
                 * @params {string} profileId Profile ID to which filter link belongs
                 * @params {string} webPropertyId Web property Id to which profile filter link belongs
                 */
                update: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IProfileFilterLink;
                }) => { execute(callback: (data: IResponse<IProfileFilterLink>, original: string) => void):void; };
            };
            profileUserLinks: {
                /**
                 * Removes a user from the given view (profile).
                 * @params {string} accountId Account ID to delete the user link for.
                 * @params {string} linkId Link ID to delete the user link for.
                 * @params {string} profileId View (Profile) ID to delete the user link for.
                 * @params {string} webPropertyId Web Property ID to delete the user link for.
                 */
                delete: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Adds a new user to the given view (profile).
                 * @params {string} accountId Account ID to create the user link for.
                 * @params {string} profileId View (Profile) ID to create the user link for.
                 * @params {string} webPropertyId Web Property ID to create the user link for.
                 */
                insert: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
                /**
                 * Lists profile-user links for a given view (profile).
                 * @params {string} accountId Account ID which the given view (profile) belongs to.
                 * @params {number} max-results The maximum number of profile-user links to include in this response.
                 * @params {string} profileId View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
                 * @params {number} start-index An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    profileId: string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IEntityUserLinks>, original: string) => void):void; };
                /**
                 * Updates permissions for an existing user on the given view (profile).
                 * @params {string} accountId Account ID to update the user link for.
                 * @params {string} linkId Link ID to update the user link for.
                 * @params {string} profileId View (Profile ID) to update the user link for.
                 * @params {string} webPropertyId Web Property ID to update the user link for.
                 */
                update: (params: {
                    accountId: string;
                    linkId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
            };
            profiles: {
                /**
                 * Deletes a view (profile).
                 * @params {string} accountId Account ID to delete the view (profile) for.
                 * @params {string} profileId ID of the view (profile) to be deleted.
                 * @params {string} webPropertyId Web property ID to delete the view (profile) for.
                 */
                delete: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Gets a view (profile) to which the user has access.
                 * @params {string} accountId Account ID to retrieve the goal for.
                 * @params {string} profileId View (Profile) ID to retrieve the goal for.
                 * @params {string} webPropertyId Web property ID to retrieve the goal for.
                 */
                get: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IProfile>, original: string) => void):void; };
                /**
                 * Create a new view (profile).
                 * @params {string} accountId Account ID to create the view (profile) for.
                 * @params {string} webPropertyId Web property ID to create the view (profile) for.
                 */
                insert: (params: {
                    accountId: string;
                    webPropertyId: string;
                    resource?: IProfile;
                }) => { execute(callback: (data: IResponse<IProfile>, original: string) => void):void; };
                /**
                 * Lists views (profiles) to which the user has access.
                 * @params {string} accountId Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
                 * @params {number} max-results The maximum number of views (profiles) to include in this response.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IProfiles>, original: string) => void):void; };
                /**
                 * Updates an existing view (profile). This method supports patch semantics.
                 * @params {string} accountId Account ID to which the view (profile) belongs
                 * @params {string} profileId ID of the view (profile) to be updated.
                 * @params {string} webPropertyId Web property ID to which the view (profile) belongs
                 */
                patch: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IProfile;
                }) => { execute(callback: (data: IResponse<IProfile>, original: string) => void):void; };
                /**
                 * Updates an existing view (profile).
                 * @params {string} accountId Account ID to which the view (profile) belongs
                 * @params {string} profileId ID of the view (profile) to be updated.
                 * @params {string} webPropertyId Web property ID to which the view (profile) belongs
                 */
                update: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IProfile;
                }) => { execute(callback: (data: IResponse<IProfile>, original: string) => void):void; };
            };
            segments: {
                /**
                 * Lists segments to which the user has access.
                 * @params {number} max-results The maximum number of segments to include in this response.
                 * @params {number} start-index An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<ISegments>, original: string) => void):void; };
            };
            unsampledReports: {
                /**
                 * Returns a single unsampled report.
                 * @params {string} accountId Account ID to retrieve unsampled report for.
                 * @params {string} profileId View (Profile) ID to retrieve unsampled report for.
                 * @params {string} unsampledReportId ID of the unsampled report to retrieve.
                 * @params {string} webPropertyId Web property ID to retrieve unsampled reports for.
                 */
                get: (params: {
                    accountId: string;
                    profileId: string;
                    unsampledReportId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IUnsampledReport>, original: string) => void):void; };
                /**
                 * Create a new unsampled report.
                 * @params {string} accountId Account ID to create the unsampled report for.
                 * @params {string} profileId View (Profile) ID to create the unsampled report for.
                 * @params {string} webPropertyId Web property ID to create the unsampled report for.
                 */
                insert: (params: {
                    accountId: string;
                    profileId: string;
                    webPropertyId: string;
                    resource?: IUnsampledReport;
                }) => { execute(callback: (data: IResponse<IUnsampledReport>, original: string) => void):void; };
                /**
                 * Lists unsampled reports to which the user has access.
                 * @params {string} accountId Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
                 * @params {number} max-results The maximum number of unsampled reports to include in this response.
                 * @params {string} profileId View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
                 * @params {number} start-index An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    profileId: string;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IUnsampledReports>, original: string) => void):void; };
            };
            uploads: {
                /**
                 * Delete data associated with a previous upload.
                 * @params {string} accountId Account Id for the uploads to be deleted.
                 * @params {string} customDataSourceId Custom data source Id for the uploads to be deleted.
                 * @params {string} webPropertyId Web property Id for the uploads to be deleted.
                 */
                deleteUploadData: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    webPropertyId: string;
                    resource?: IAnalyticsDataimportDeleteUploadDataRequest;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * List uploads to which the user has access.
                 * @params {string} accountId Account Id for the upload to retrieve.
                 * @params {string} customDataSourceId Custom data source Id for upload to retrieve.
                 * @params {string} uploadId Upload Id to retrieve.
                 * @params {string} webPropertyId Web property Id for the upload to retrieve.
                 */
                get: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    uploadId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IUpload>, original: string) => void):void; };
                /**
                 * List uploads to which the user has access.
                 * @params {string} accountId Account Id for the uploads to retrieve.
                 * @params {string} customDataSourceId Custom data source Id for uploads to retrieve.
                 * @params {number} max-results The maximum number of uploads to include in this response.
                 * @params {number} start-index A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property Id for the uploads to retrieve.
                 */
                list: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IUploads>, original: string) => void):void; };
                /**
                 * Migrate custom data source and data imports to latest version.
                 * @params {string} accountId Account Id for migration.
                 * @params {string} customDataSourceId Custom data source Id for migration.
                 * @params {string} webPropertyId Web property Id for migration.
                 */
                migrateDataImport: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Upload data for a custom data source.
                 * @params {string} accountId Account Id associated with the upload.
                 * @params {string} customDataSourceId Custom data source Id to which the data being uploaded belongs.
                 * @params {string} webPropertyId Web property UA-string associated with the upload.
                 */
                uploadData: (params: {
                    accountId: string;
                    customDataSourceId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IUpload>, original: string) => void):void; };
            };
            webPropertyAdWordsLinks: {
                /**
                 * Deletes a web property-AdWords link.
                 * @params {string} accountId ID of the account which the given web property belongs to.
                 * @params {string} webPropertyAdWordsLinkId Web property AdWords link ID.
                 * @params {string} webPropertyId Web property ID to delete the AdWords link for.
                 */
                delete: (params: {
                    accountId: string;
                    webPropertyAdWordsLinkId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Returns a web property-AdWords link to which the user has access.
                 * @params {string} accountId ID of the account which the given web property belongs to.
                 * @params {string} webPropertyAdWordsLinkId Web property-AdWords link ID.
                 * @params {string} webPropertyId Web property ID to retrieve the AdWords link for.
                 */
                get: (params: {
                    accountId: string;
                    webPropertyAdWordsLinkId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IEntityAdWordsLink>, original: string) => void):void; };
                /**
                 * Creates a webProperty-AdWords link.
                 * @params {string} accountId ID of the Google Analytics account to create the link for.
                 * @params {string} webPropertyId Web property ID to create the link for.
                 */
                insert: (params: {
                    accountId: string;
                    webPropertyId: string;
                    resource?: IEntityAdWordsLink;
                }) => { execute(callback: (data: IResponse<IEntityAdWordsLink>, original: string) => void):void; };
                /**
                 * Lists webProperty-AdWords links for a given web property.
                 * @params {string} accountId ID of the account which the given web property belongs to.
                 * @params {number} max-results The maximum number of webProperty-AdWords links to include in this response.
                 * @params {number} start-index An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web property ID to retrieve the AdWords links for.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IEntityAdWordsLinks>, original: string) => void):void; };
                /**
                 * Updates an existing webProperty-AdWords link. This method supports patch semantics.
                 * @params {string} accountId ID of the account which the given web property belongs to.
                 * @params {string} webPropertyAdWordsLinkId Web property-AdWords link ID.
                 * @params {string} webPropertyId Web property ID to retrieve the AdWords link for.
                 */
                patch: (params: {
                    accountId: string;
                    webPropertyAdWordsLinkId: string;
                    webPropertyId: string;
                    resource?: IEntityAdWordsLink;
                }) => { execute(callback: (data: IResponse<IEntityAdWordsLink>, original: string) => void):void; };
                /**
                 * Updates an existing webProperty-AdWords link.
                 * @params {string} accountId ID of the account which the given web property belongs to.
                 * @params {string} webPropertyAdWordsLinkId Web property-AdWords link ID.
                 * @params {string} webPropertyId Web property ID to retrieve the AdWords link for.
                 */
                update: (params: {
                    accountId: string;
                    webPropertyAdWordsLinkId: string;
                    webPropertyId: string;
                    resource?: IEntityAdWordsLink;
                }) => { execute(callback: (data: IResponse<IEntityAdWordsLink>, original: string) => void):void; };
            };
            webproperties: {
                /**
                 * Gets a web property to which the user has access.
                 * @params {string} accountId Account ID to retrieve the web property for.
                 * @params {string} webPropertyId ID to retrieve the web property for.
                 */
                get: (params: {
                    accountId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IWebproperty>, original: string) => void):void; };
                /**
                 * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
                 * @params {string} accountId Account ID to create the web property for.
                 */
                insert: (params: {
                    accountId: string;
                    resource?: IWebproperty;
                }) => { execute(callback: (data: IResponse<IWebproperty>, original: string) => void):void; };
                /**
                 * Lists web properties to which the user has access.
                 * @params {string} accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
                 * @params {number} max-results The maximum number of web properties to include in this response.
                 * @params {number} start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                }) => { execute(callback: (data: IResponse<IWebproperties>, original: string) => void):void; };
                /**
                 * Updates an existing web property. This method supports patch semantics.
                 * @params {string} accountId Account ID to which the web property belongs
                 * @params {string} webPropertyId Web property ID
                 */
                patch: (params: {
                    accountId: string;
                    webPropertyId: string;
                    resource?: IWebproperty;
                }) => { execute(callback: (data: IResponse<IWebproperty>, original: string) => void):void; };
                /**
                 * Updates an existing web property.
                 * @params {string} accountId Account ID to which the web property belongs
                 * @params {string} webPropertyId Web property ID
                 */
                update: (params: {
                    accountId: string;
                    webPropertyId: string;
                    resource?: IWebproperty;
                }) => { execute(callback: (data: IResponse<IWebproperty>, original: string) => void):void; };
            };
            webpropertyUserLinks: {
                /**
                 * Removes a user from the given web property.
                 * @params {string} accountId Account ID to delete the user link for.
                 * @params {string} linkId Link ID to delete the user link for.
                 * @params {string} webPropertyId Web Property ID to delete the user link for.
                 */
                delete: (params: {
                    accountId: string;
                    linkId: string;
                    webPropertyId: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Adds a new user to the given web property.
                 * @params {string} accountId Account ID to create the user link for.
                 * @params {string} webPropertyId Web Property ID to create the user link for.
                 */
                insert: (params: {
                    accountId: string;
                    webPropertyId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
                /**
                 * Lists webProperty-user links for a given web property.
                 * @params {string} accountId Account ID which the given web property belongs to.
                 * @params {number} max-results The maximum number of webProperty-user Links to include in this response.
                 * @params {number} start-index An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
                 * @params {string} webPropertyId Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
                 */
                list: (params: {
                    accountId: string;
                    "max-results"?: number;
                    "start-index"?: number;
                    webPropertyId: string;
                }) => { execute(callback: (data: IResponse<IEntityUserLinks>, original: string) => void):void; };
                /**
                 * Updates permissions for an existing user on the given web property.
                 * @params {string} accountId Account ID to update the account-user link for.
                 * @params {string} linkId Link ID to update the account-user link for.
                 * @params {string} webPropertyId Web property ID to update the account-user link for.
                 */
                update: (params: {
                    accountId: string;
                    linkId: string;
                    webPropertyId: string;
                    resource?: IEntityUserLink;
                }) => { execute(callback: (data: IResponse<IEntityUserLink>, original: string) => void):void; };
            };
        };
        var metadata: {
            columns: {
                /**
                 * Lists all columns for a report type
                 * @params {string} reportType Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
                 */
                list: (params: {
                    reportType: string;
                }) => { execute(callback: (data: IResponse<IColumns>, original: string) => void):void; };
            };
        };
        var provisioning: {
            /**
             * Creates an account ticket.
             */
            createAccountTicket: (params: {
                resource?: IAccountTicket;
            }) => { execute(callback: (data: IResponse<IAccountTicket>, original: string) => void):void; };
        };
        /**
         * JSON template for Analytics account entry.
         */
        interface IAccount {
            /**
             * Child link for an account entry. Points to the list of web properties for this account.
             */
            childLink: {
                href: string;
                type: string;
            };
            /**
             * Time the account was created.
             */
            created: string; // date-time
            /**
             * Account ID.
             */
            id: string;
            /**
             * Resource type for Analytics account.
             */
            kind: string;
            /**
             * Account name.
             */
            name: string;
            /**
             * Permissions the user has for this account.
             */
            permissions: {
                effective: string[];
            };
            /**
             * Link for this account.
             */
            selfLink: string;
            /**
             * Time the account was last modified.
             */
            updated: string; // date-time
        }
        /**
         * JSON template for a linked account.
         */
        interface IAccountRef {
            /**
             * Link for this account.
             */
            href: string;
            /**
             * Account ID.
             */
            id: string;
            /**
             * Analytics account reference.
             */
            kind: string;
            /**
             * Account name.
             */
            name: string;
        }
        /**
         * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
         */
        interface IAccountSummaries {
            /**
             * A list of AccountSummaries.
             */
            items: IAccountSummary[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this AccountSummary collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this AccountSummary collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
         */
        interface IAccountSummary {
            /**
             * Account ID.
             */
            id: string;
            /**
             * Resource type for Analytics AccountSummary.
             */
            kind: string;
            /**
             * Account name.
             */
            name: string;
            /**
             * List of web properties under this account.
             */
            webProperties: IWebPropertySummary[];
        }
        /**
         * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
         */
        interface IAccountTicket {
            /**
             * Account for this ticket.
             */
            account: IAccount;
            /**
             * Account ticket ID used to access the account ticket.
             */
            id: string;
            /**
             * Resource type for account ticket.
             */
            kind: string;
            /**
             * View (Profile) for the account.
             */
            profile: IProfile;
            /**
             * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
             */
            redirectUri: string;
            /**
             * Web property for the account.
             */
            webproperty: IWebproperty;
        }
        /**
         * An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
         */
        interface IAccounts {
            /**
             * A list of accounts.
             */
            items: IAccount[];
            /**
             * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Next link for this account collection.
             */
            nextLink: string;
            /**
             * Previous link for this account collection.
             */
            previousLink: string;
            /**
             * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for an AdWords account.
         */
        interface IAdWordsAccount {
            /**
             * True if auto-tagging is enabled on the AdWords account. Read-only after the insert operation.
             */
            autoTaggingEnabled: boolean;
            /**
             * Customer ID. This field is required when creating an AdWords link.
             */
            customerId: string;
            /**
             * Resource type for AdWords account.
             */
            kind: string;
        }
        /**
         * Request template for the delete upload data request.
         */
        interface IAnalyticsDataimportDeleteUploadDataRequest {
            /**
             * A list of upload UIDs.
             */
            customDataImportUids: string[];
        }
        /**
         * JSON template for a metadata column.
         */
        interface IColumn {
            /**
             * Map of attribute name and value for this column.
             */
            attributes: {
                [name:string]: string;
            };
            /**
             * Column id.
             */
            id: string;
            /**
             * Resource type for Analytics column.
             */
            kind: string;
        }
        /**
         * Lists columns (dimensions and metrics) for a particular report type.
         */
        interface IColumns {
            /**
             * List of attributes names returned by columns.
             */
            attributeNames: string[];
            /**
             * Etag of collection. This etag can be compared with the last response etag to check if response has changed.
             */
            etag: string;
            /**
             * List of columns for a report type.
             */
            items: IColumn[];
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Total number of columns returned in the response.
             */
            totalResults: number; // int32
        }
        /**
         * JSON template for an Analytics custom data source.
         */
        interface ICustomDataSource {
            /**
             * Account ID to which this custom data source belongs.
             */
            accountId: string;
            childLink: {
                href: string;
                type: string;
            };
            /**
             * Time this custom data source was created.
             */
            created: string; // date-time
            /**
             * Description of custom data source.
             */
            description: string;
            /**
             * Custom data source ID.
             */
            id: string;
            importBehavior: string;
            /**
             * Resource type for Analytics custom data source.
             */
            kind: string;
            /**
             * Name of this custom data source.
             */
            name: string;
            /**
             * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * IDs of views (profiles) linked to the custom data source.
             */
            profilesLinked: string[];
            /**
             * Link for this Analytics custom data source.
             */
            selfLink: string;
            /**
             * Type of the custom data source.
             */
            type: string;
            /**
             * Time this custom data source was last modified.
             */
            updated: string; // date-time
            uploadType: string;
            /**
             * Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
             */
            webPropertyId: string;
        }
        /**
         * Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
         */
        interface ICustomDataSources {
            /**
             * Collection of custom data sources.
             */
            items: ICustomDataSource[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this custom data source collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this custom data source collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * Metadata for daily upload entity.
         */
        interface IDailyUpload {
            /**
             * Account ID to which this daily upload belongs.
             */
            accountId: string;
            /**
             * Number of appends for this date.
             */
            appendCount: number; // int32
            /**
             * Time this daily upload was created.
             */
            createdTime: string; // date-time
            /**
             * Custom data source ID to which this daily upload belongs.
             */
            customDataSourceId: string;
            /**
             * Date associated with daily upload.
             */
            date: string;
            /**
             * Resource type for Analytics daily upload.
             */
            kind: string;
            /**
             * Time this daily upload was last modified.
             */
            modifiedTime: string; // date-time
            /**
             * Parent link for a daily upload. Points to the custom data source to which this daily upload belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * Change log for last 10 changes in chronological order.
             */
            recentChanges: {
                change: string;
                time: string; // date-time
            }[];
            /**
             * Link for this daily upload.
             */
            selfLink: string;
            /**
             * Web property ID of the form UA-XXXXX-YY to which this daily upload belongs.
             */
            webPropertyId: string;
        }
        /**
         * Metadata returned for a successful append operation.
         */
        interface IDailyUploadAppend {
            /**
             * Account Id to which this daily upload append belongs.
             */
            accountId: string;
            /**
             * Append number.
             */
            appendNumber: number; // int32
            /**
             * Custom data source Id to which this daily upload append belongs.
             */
            customDataSourceId: string;
            /**
             * Date associated with daily upload append.
             */
            date: string;
            /**
             * Resource type for Analytics daily upload append.
             */
            kind: string;
            nextAppendLink: string;
            /**
             * Web property Id of the form UA-XXXXX-YY to which this daily upload append belongs.
             */
            webPropertyId: string;
        }
        /**
         * A daily upload collection lists Analytics daily uploads to which the user has access. Each resource in the collection corresponds to a single Analytics daily upload.
         */
        interface IDailyUploads {
            /**
             * A collection of daily uploads.
             */
            items: IDailyUpload[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type. Value is analytics#dailyUploads.
             */
            kind: string;
            /**
             * Link to next page for this daily upload collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this daily upload collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for Analytics Entity AdWords Link.
         */
        interface IEntityAdWordsLink {
            /**
             * A list of AdWords client accounts. These cannot be MCC accounts. This field is required when creating an AdWords link. It cannot be empty.
             */
            adWordsAccounts: IAdWordsAccount[];
            /**
             * Web property being linked.
             */
            entity: {
                webPropertyRef: IWebPropertyRef;
            };
            /**
             * Entity AdWords link ID
             */
            id: string;
            /**
             * Resource type for entity AdWords link.
             */
            kind: string;
            /**
             * Name of the link. This field is required when creating an AdWords link.
             */
            name: string;
            /**
             * IDs of linked Views (Profiles) represented as strings.
             */
            profileIds: string[];
            /**
             * URL link for this Google Analytics - Google AdWords link.
             */
            selfLink: string;
        }
        /**
         * An entity AdWords link collection provides a list of GA-AdWords links Each resource in this collection corresponds to a single link.
         */
        interface IEntityAdWordsLinks {
            /**
             * A list of entity AdWords links.
             */
            items: IEntityAdWordsLink[];
            /**
             * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Next link for this AdWords link collection.
             */
            nextLink: string;
            /**
             * Previous link for this AdWords link collection.
             */
            previousLink: string;
            /**
             * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
        }
        /**
         * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
         */
        interface IEntityUserLink {
            /**
             * Entity for this link. It can be an account, a web property, or a view (profile).
             */
            entity: {
                accountRef: IAccountRef;
                profileRef: IProfileRef;
                webPropertyRef: IWebPropertyRef;
            };
            /**
             * Entity user link ID
             */
            id: string;
            /**
             * Resource type for entity user link.
             */
            kind: string;
            /**
             * Permissions the user has for this entity.
             */
            permissions: {
                effective: string[];
                local: string[];
            };
            /**
             * Self link for this resource.
             */
            selfLink: string;
            /**
             * User reference.
             */
            userRef: IUserRef;
        }
        /**
         * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
         */
        interface IEntityUserLinks {
            /**
             * A list of entity user links.
             */
            items: IEntityUserLink[];
            /**
             * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Next link for this account collection.
             */
            nextLink: string;
            /**
             * Previous link for this account collection.
             */
            previousLink: string;
            /**
             * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
        }
        /**
         * JSON template for Analytics experiment resource.
         */
        interface IExperiment {
            /**
             * Account ID to which this experiment belongs. This field is read-only.
             */
            accountId: string;
            /**
             * Time the experiment was created. This field is read-only.
             */
            created: string; // date-time
            /**
             * Notes about this experiment.
             */
            description: string;
            /**
             * If true, the end user will be able to edit the experiment via the Google Analytics user interface.
             */
            editableInGaUi: boolean;
            /**
             * The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
             */
            endTime: string; // date-time
            /**
             * Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
             */
            equalWeighting: boolean;
            /**
             * Experiment ID. Required for patch and update. Disallowed for create.
             */
            id: string;
            /**
             * Internal ID for the web property to which this experiment belongs. This field is read-only.
             */
            internalWebPropertyId: string;
            /**
             * Resource type for an Analytics experiment. This field is read-only.
             */
            kind: string;
            /**
             * An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
             */
            minimumExperimentLengthInDays: number; // int32
            /**
             * Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
             */
            name: string;
            /**
             * The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
             */
            objectiveMetric: string;
            /**
             * Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
             */
            optimizationType: string;
            /**
             * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * View (Profile) ID to which this experiment belongs. This field is read-only.
             */
            profileId: string;
            /**
             * Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
             */
            reasonExperimentEnded: string;
            /**
             * Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
             */
            rewriteVariationUrlsAsOriginal: boolean;
            /**
             * Link for this experiment. This field is read-only.
             */
            selfLink: string;
            /**
             * The framework used to serve the experiment variations and evaluate the results. One of:  
             * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
             * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
             * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
             */
            servingFramework: string;
            /**
             * The snippet of code to include on the control page(s). This field is read-only.
             */
            snippet: string;
            /**
             * The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
             */
            startTime: string; // date-time
            /**
             * Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
             */
            status: string;
            /**
             * A floating-point number between 0 and 1. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
             */
            trafficCoverage: number; // double
            /**
             * Time the experiment was last modified. This field is read-only.
             */
            updated: string; // date-time
            /**
             * Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
             */
            variations: {
                name: string;
                status: string;
                url: string;
                weight: number; // double
                won: boolean;
            }[];
            /**
             * Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
             */
            webPropertyId: string;
            /**
             * A floating-point number between 0 and 1. Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
             */
            winnerConfidenceLevel: number; // double
            /**
             * Boolean specifying whether a winner has been found for this experiment. This field is read-only.
             */
            winnerFound: boolean;
        }
        /**
         * An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
         */
        interface IExperiments {
            /**
             * A list of experiments.
             */
            items: IExperiment[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this experiment collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this experiment collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of resources in the result.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for an Analytics account filter.
         */
        interface IFilter {
            /**
             * Account ID to which this filter belongs.
             */
            accountId: string;
            /**
             * Details for the filter of the type ADVANCED.
             */
            advancedDetails: {
                caseSensitive: boolean;
                extractA: string;
                extractB: string;
                fieldA: string;
                fieldARequired: boolean;
                fieldB: string;
                fieldBRequired: boolean;
                outputConstructor: string;
                outputToField: string;
                overrideOutputField: boolean;
            };
            /**
             * Time this filter was created.
             */
            created: string; // date-time
            /**
             * Details for the filter of the type EXCLUDE.
             */
            excludeDetails: IFilterExpression;
            /**
             * Filter ID.
             */
            id: string;
            /**
             * Details for the filter of the type INCLUDE.
             */
            includeDetails: IFilterExpression;
            /**
             * Resource type for Analytics filter.
             */
            kind: string;
            /**
             * Details for the filter of the type LOWER.
             */
            lowercaseDetails: {
                field: string;
            };
            /**
             * Name of this filter.
             */
            name: string;
            /**
             * Parent link for this filter. Points to the account to which this filter belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * Details for the filter of the type SEARCH_AND_REPLACE.
             */
            searchAndReplaceDetails: {
                caseSensitive: boolean;
                field: string;
                replaceString: string;
                searchString: string;
            };
            /**
             * Link for this filter.
             */
            selfLink: string;
            /**
             * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
             */
            type: string;
            /**
             * Time this filter was last modified.
             */
            updated: string; // date-time
            /**
             * Details for the filter of the type UPPER.
             */
            uppercaseDetails: {
                field: string;
            };
        }
        /**
         * JSON template for an Analytics filter expression.
         */
        interface IFilterExpression {
            /**
             * Determines if the filter is case sensitive.
             */
            caseSensitive: boolean;
            /**
             * Filter expression value
             */
            expressionValue: string;
            /**
             * Field to filter. Possible values:  
             * - Reserved  
             * - UNUSED,   
             * - Content and Traffic  
             * - PAGE_REQUEST_URI, 
             * - PAGE_HOSTNAME, 
             * - PAGE_TITLE, 
             * - REFERRAL, 
             * - COST_DATA_URI (Campaign target URL), 
             * - HIT_TYPE, 
             * - INTERNAL_SEARCH_TERM, 
             * - INTERNAL_SEARCH_TYPE, 
             * - SOURCE_PROPERTY_TRACKING_ID,   
             * - Campaign or AdGroup  
             * - CAMPAIGN_SOURCE, 
             * - CAMPAIGN_MEDIUM, 
             * - CAMPAIGN_NAME, 
             * - CAMPAIGN_AD_GROUP, 
             * - CAMPAIGN_TERM, 
             * - CAMPAIGN_CONTENT, 
             * - CAMPAIGN_CODE, 
             * - CAMPAIGN_REFERRAL_PATH,   
             * - E-Commerce  
             * - TRANSACTION_COUNTRY, 
             * - TRANSACTION_REGION, 
             * - TRANSACTION_CITY, 
             * - TRANSACTION_AFFILIATION (Store or order location), 
             * - ITEM_NAME, 
             * - ITEM_CODE, 
             * - ITEM_VARIATION, 
             * - TRANSACTION_ID, 
             * - TRANSACTION_CURRENCY_CODE, 
             * - PRODUCT_ACTION_TYPE,   
             * - Audience/Users  
             * - BROWSER, 
             * - BROWSER_VERSION, 
             * - BROWSER_SIZE, 
             * - PLATFORM, 
             * - PLATFORM_VERSION, 
             * - LANGUAGE, 
             * - SCREEN_RESOLUTION, 
             * - SCREEN_COLORS, 
             * - JAVA_ENABLED, 
             * - FLASH_VERSION, 
             * - GEO_SPEED (Connection speed), 
             * - VISITOR_TYPE, 
             * - GEO_ORGANIZATION (ISP organization), 
             * - GEO_DOMAIN, 
             * - GEO_IP_ADDRESS, 
             * - GEO_IP_VERSION,   
             * - Location  
             * - GEO_COUNTRY, 
             * - GEO_REGION, 
             * - GEO_CITY,   
             * - Event  
             * - EVENT_CATEGORY, 
             * - EVENT_ACTION, 
             * - EVENT_LABEL,   
             * - Other  
             * - CUSTOM_FIELD_1, 
             * - CUSTOM_FIELD_2, 
             * - USER_DEFINED_VALUE,   
             * - Application  
             * - APP_ID, 
             * - APP_INSTALLER_ID, 
             * - APP_NAME, 
             * - APP_VERSION, 
             * - SCREEN, 
             * - IS_APP, 
             * - IS_FATAL_EXCEPTION, 
             * - EXCEPTION_DESCRIPTION,   
             * - Mobile device  
             * - IS_MOBILE, 
             * - IS_TABLET, 
             * - MOBILE_HAS_QWERTY_KEYBOARD, 
             * - MOBILE_HAS_NFC_SUPPORT, 
             * - MOBILE_HAS_CELLULAR_RADIO, 
             * - MOBILE_HAS_WIFI_SUPPORT, 
             * - MOBILE_BRAND_NAME, 
             * - MOBILE_MODEL_NAME, 
             * - MOBILE_MARKETING_NAME, 
             * - MOBILE_POINTING_METHOD,   
             * - Social  
             * - SOCIAL_NETWORK, 
             * - SOCIAL_ACTION, 
             * - SOCIAL_ACTION_TARGET,
             */
            field: string;
            /**
             * Kind value for filter expression
             */
            kind: string;
            /**
             * Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, MATCHES. Include and Exclude filters can use any match type. Match type is not applicable to Upper case and Lower case filters. Search and Replace expressions in the Search and Replace filter and all filter expressions in the Advanced filter default to MATCHES. User should not set match type for those filters.
             */
            matchType: string;
        }
        /**
         * JSON template for a profile filter link.
         */
        interface IFilterRef {
            /**
             * Account ID to which this filter belongs.
             */
            accountId: string;
            /**
             * Link for this filter.
             */
            href: string;
            /**
             * Filter ID.
             */
            id: string;
            /**
             * Kind value for filter reference.
             */
            kind: string;
            /**
             * Name of this filter.
             */
            name: string;
        }
        /**
         * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
         */
        interface IFilters {
            /**
             * A list of filters.
             */
            items: IFilter[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this filter collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this filter collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * Analytics data for a given view (profile).
         */
        interface IGaData {
            /**
             * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
             */
            columnHeaders: {
                columnType: string;
                dataType: string;
                name: string;
            }[];
            /**
             * Determines if Analytics data contains samples.
             */
            containsSampledData: boolean;
            dataTable: {
                cols: {
                    id: string;
                    label: string;
                    type: string;
                }[];
                rows: {
                    c: {
                        v: string;
                    }[];
                }[];
            };
            /**
             * Unique ID for this data response.
             */
            id: string;
            /**
             * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Link to next page for this Analytics data query.
             */
            nextLink: string;
            /**
             * Link to previous page for this Analytics data query.
             */
            previousLink: string;
            /**
             * Information for the view (profile), for which the Analytics data was requested.
             */
            profileInfo: {
                accountId: string;
                internalWebPropertyId: string;
                profileId: string;
                profileName: string;
                tableId: string;
                webPropertyId: string;
            };
            /**
             * Analytics data request query parameters.
             */
            query: {
                dimensions: string;
                "end-date": string;
                filters: string;
                ids: string;
                "max-results": number; // int32
                metrics: string[];
                samplingLevel: string;
                segment: string;
                sort: string[];
                "start-date": string;
                "start-index": number; // int32
            };
            /**
             * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
             */
            rows: string[][];
            /**
             * The number of samples used to calculate the result.
             */
            sampleSize: string; // int64
            /**
             * Total size of the sample space from which the samples were selected.
             */
            sampleSpace: string; // int64
            /**
             * Link to this page.
             */
            selfLink: string;
            /**
             * The total number of rows for the query, regardless of the number of rows in the response.
             */
            totalResults: number; // int32
            /**
             * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
             */
            totalsForAllResults: {
                [name:string]: string;
            };
        }
        /**
         * JSON template for Analytics goal resource.
         */
        interface IGoal {
            /**
             * Account ID to which this goal belongs.
             */
            accountId: string;
            /**
             * Determines whether this goal is active.
             */
            active: boolean;
            /**
             * Time this goal was created.
             */
            created: string; // date-time
            /**
             * Details for the goal of the type EVENT.
             */
            eventDetails: {
                eventConditions: {
                    comparisonType: string;
                    comparisonValue: string; // int64
                    expression: string;
                    matchType: string;
                    type: string;
                }[];
                useEventValue: boolean;
            };
            /**
             * Goal ID.
             */
            id: string;
            /**
             * Internal ID for the web property to which this goal belongs.
             */
            internalWebPropertyId: string;
            /**
             * Resource type for an Analytics goal.
             */
            kind: string;
            /**
             * Goal name.
             */
            name: string;
            /**
             * Parent link for a goal. Points to the view (profile) to which this goal belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * View (Profile) ID to which this goal belongs.
             */
            profileId: string;
            /**
             * Link for this goal.
             */
            selfLink: string;
            /**
             * Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
             */
            type: string;
            /**
             * Time this goal was last modified.
             */
            updated: string; // date-time
            /**
             * Details for the goal of the type URL_DESTINATION.
             */
            urlDestinationDetails: {
                caseSensitive: boolean;
                firstStepRequired: boolean;
                matchType: string;
                steps: {
                    name: string;
                    number: number; // int32
                    url: string;
                }[];
                url: string;
            };
            /**
             * Goal value.
             */
            value: number; // float
            /**
             * Details for the goal of the type VISIT_NUM_PAGES.
             */
            visitNumPagesDetails: {
                comparisonType: string;
                comparisonValue: string; // int64
            };
            /**
             * Details for the goal of the type VISIT_TIME_ON_SITE.
             */
            visitTimeOnSiteDetails: {
                comparisonType: string;
                comparisonValue: string; // int64
            };
            /**
             * Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
             */
            webPropertyId: string;
        }
        /**
         * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
         */
        interface IGoals {
            /**
             * A list of goals.
             */
            items: IGoal[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this goal collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this goal collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of resources in the result.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * Multi-Channel Funnels data for a given view (profile).
         */
        interface IMcfData {
            /**
             * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
             */
            columnHeaders: {
                columnType: string;
                dataType: string;
                name: string;
            }[];
            /**
             * Determines if the Analytics data contains sampled data.
             */
            containsSampledData: boolean;
            /**
             * Unique ID for this data response.
             */
            id: string;
            /**
             * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Link to next page for this Analytics data query.
             */
            nextLink: string;
            /**
             * Link to previous page for this Analytics data query.
             */
            previousLink: string;
            /**
             * Information for the view (profile), for which the Analytics data was requested.
             */
            profileInfo: {
                accountId: string;
                internalWebPropertyId: string;
                profileId: string;
                profileName: string;
                tableId: string;
                webPropertyId: string;
            };
            /**
             * Analytics data request query parameters.
             */
            query: {
                dimensions: string;
                "end-date": string;
                filters: string;
                ids: string;
                "max-results": number; // int32
                metrics: string[];
                samplingLevel: string;
                segment: string;
                sort: string[];
                "start-date": string;
                "start-index": number; // int32
            };
            /**
             * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
             */
            rows: {
                conversionPathValue: {
                    interactionType: string;
                    nodeValue: string;
                }[];
                primitiveValue: string;
            }[][];
            /**
             * The number of samples used to calculate the result.
             */
            sampleSize: string; // int64
            /**
             * Total size of the sample space from which the samples were selected.
             */
            sampleSpace: string; // int64
            /**
             * Link to this page.
             */
            selfLink: string;
            /**
             * The total number of rows for the query, regardless of the number of rows in the response.
             */
            totalResults: number; // int32
            /**
             * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
             */
            totalsForAllResults: {
                [name:string]: string;
            };
        }
        /**
         * JSON template for an Analytics view (profile).
         */
        interface IProfile {
            /**
             * Account ID to which this view (profile) belongs.
             */
            accountId: string;
            /**
             * Child link for this view (profile). Points to the list of goals for this view (profile).
             */
            childLink: {
                href: string;
                type: string;
            };
            /**
             * Time this view (profile) was created.
             */
            created: string; // date-time
            /**
             * The currency type associated with this view (profile). The supported values are:
             * ARS, AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HUF, IDR, INR, JPY, KRW, LTL, MXN, NOK, NZD, PHP, PLN, RUB, SEK, THB, TRY, TWD, USD, VND, ZAR
             */
            currency: string;
            /**
             * Default page for this view (profile).
             */
            defaultPage: string;
            /**
             * Indicates whether ecommerce tracking is enabled for this view (profile).
             */
            eCommerceTracking: boolean;
            /**
             * The query parameters that are excluded from this view (profile).
             */
            excludeQueryParameters: string;
            /**
             * View (Profile) ID.
             */
            id: string;
            /**
             * Internal ID for the web property to which this view (profile) belongs.
             */
            internalWebPropertyId: string;
            /**
             * Resource type for Analytics view (profile).
             */
            kind: string;
            /**
             * Name of this view (profile).
             */
            name: string;
            /**
             * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * Permissions the user has for this view (profile).
             */
            permissions: {
                effective: string[];
            };
            /**
             * Link for this view (profile).
             */
            selfLink: string;
            /**
             * Site search category parameters for this view (profile).
             */
            siteSearchCategoryParameters: string;
            /**
             * The site search query parameters for this view (profile).
             */
            siteSearchQueryParameters: string;
            /**
             * Whether or not Analytics will strip search category parameters from the URLs in your reports.
             */
            stripSiteSearchCategoryParameters: boolean;
            /**
             * Whether or not Analytics will strip search query parameters from the URLs in your reports.
             */
            stripSiteSearchQueryParameters: boolean;
            /**
             * Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
             */
            timezone: string;
            /**
             * View (Profile) type. Supported types: WEB or APP.
             */
            type: string;
            /**
             * Time this view (profile) was last modified.
             */
            updated: string; // date-time
            /**
             * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
             */
            webPropertyId: string;
            /**
             * Website URL for this view (profile).
             */
            websiteUrl: string;
        }
        /**
         * JSON template for an Analytics profile filter link.
         */
        interface IProfileFilterLink {
            /**
             * Filter for this link.
             */
            filterRef: IFilterRef;
            /**
             * Profile filter link ID.
             */
            id: string;
            /**
             * Resource type for Analytics filter.
             */
            kind: string;
            /**
             * View (Profile) for this link.
             */
            profileRef: IProfileRef;
            /**
             * The rank of this profile filter link relative to the other filters linked to the same profile.
             * For readonly (i.e., list and get) operations, the rank always starts at 1.
             * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
             */
            rank: number; // int32
            /**
             * Link for this profile filter link.
             */
            selfLink: string;
        }
        /**
         * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
         */
        interface IProfileFilterLinks {
            /**
             * A list of profile filter links.
             */
            items: IProfileFilterLink[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this profile filter link collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this profile filter link collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for a linked view (profile).
         */
        interface IProfileRef {
            /**
             * Account ID to which this view (profile) belongs.
             */
            accountId: string;
            /**
             * Link for this view (profile).
             */
            href: string;
            /**
             * View (Profile) ID.
             */
            id: string;
            /**
             * Internal ID for the web property to which this view (profile) belongs.
             */
            internalWebPropertyId: string;
            /**
             * Analytics view (profile) reference.
             */
            kind: string;
            /**
             * Name of this view (profile).
             */
            name: string;
            /**
             * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
             */
            webPropertyId: string;
        }
        /**
         * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
         */
        interface IProfileSummary {
            /**
             * View (profile) ID.
             */
            id: string;
            /**
             * Resource type for Analytics ProfileSummary.
             */
            kind: string;
            /**
             * View (profile) name.
             */
            name: string;
            /**
             * View (Profile) type. Supported types: WEB or APP.
             */
            type: string;
        }
        /**
         * A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
         */
        interface IProfiles {
            /**
             * A list of views (profiles).
             */
            items: IProfile[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this view (profile) collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this view (profile) collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * Real time data for a given view (profile).
         */
        interface IRealtimeData {
            /**
             * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
             */
            columnHeaders: {
                columnType: string;
                dataType: string;
                name: string;
            }[];
            /**
             * Unique ID for this data response.
             */
            id: string;
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Information for the view (profile), for which the real time data was requested.
             */
            profileInfo: {
                accountId: string;
                internalWebPropertyId: string;
                profileId: string;
                profileName: string;
                tableId: string;
                webPropertyId: string;
            };
            /**
             * Real time data request query parameters.
             */
            query: {
                dimensions: string;
                filters: string;
                ids: string;
                "max-results": number; // int32
                metrics: string[];
                sort: string[];
            };
            /**
             * Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
             */
            rows: string[][];
            /**
             * Link to this page.
             */
            selfLink: string;
            /**
             * The total number of rows for the query, regardless of the number of rows in the response.
             */
            totalResults: number; // int32
            /**
             * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
             */
            totalsForAllResults: {
                [name:string]: string;
            };
        }
        /**
         * JSON template for an Analytics segment.
         */
        interface ISegment {
            /**
             * Time the segment was created.
             */
            created: string; // date-time
            /**
             * Segment definition.
             */
            definition: string;
            /**
             * Segment ID.
             */
            id: string;
            /**
             * Resource type for Analytics segment.
             */
            kind: string;
            /**
             * Segment name.
             */
            name: string;
            /**
             * Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
             */
            segmentId: string;
            /**
             * Link for this segment.
             */
            selfLink: string;
            /**
             * Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
             */
            type: string;
            /**
             * Time the segment was last modified.
             */
            updated: string; // date-time
        }
        /**
         * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
         */
        interface ISegments {
            /**
             * A list of segments.
             */
            items: ISegment[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type for segments.
             */
            kind: string;
            /**
             * Link to next page for this segment collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this segment collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for Analytics unsampled report resource.
         */
        interface IUnsampledReport {
            /**
             * Account ID to which this unsampled report belongs.
             */
            accountId: string;
            /**
             * Download details for a file stored in Google Cloud Storage.
             */
            cloudStorageDownloadDetails: {
                bucketId: string;
                objectId: string;
            };
            /**
             * Time this unsampled report was created.
             */
            created: string; // date-time
            /**
             * The dimensions for the unsampled report.
             */
            dimensions: string;
            /**
             * The type of download you need to use for the report data file.
             */
            downloadType: string;
            /**
             * Download details for a file stored in Google Drive.
             */
            driveDownloadDetails: {
                documentId: string;
            };
            /**
             * The end date for the unsampled report.
             */
            "end-date": string;
            /**
             * The filters for the unsampled report.
             */
            filters: string;
            /**
             * Unsampled report ID.
             */
            id: string;
            /**
             * Resource type for an Analytics unsampled report.
             */
            kind: string;
            /**
             * The metrics for the unsampled report.
             */
            metrics: string;
            /**
             * View (Profile) ID to which this unsampled report belongs.
             */
            profileId: string;
            /**
             * The segment for the unsampled report.
             */
            segment: string;
            /**
             * Link for this unsampled report.
             */
            selfLink: string;
            /**
             * The start date for the unsampled report.
             */
            "start-date": string;
            /**
             * Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
             */
            status: string;
            /**
             * Title of the unsampled report.
             */
            title: string;
            /**
             * Time this unsampled report was last modified.
             */
            updated: string; // date-time
            /**
             * Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
             */
            webPropertyId: string;
        }
        /**
         * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
         */
        interface IUnsampledReports {
            /**
             * A list of unsampled reports.
             */
            items: IUnsampledReport[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this unsampled report collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this unsampled report collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of resources in the result.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * Metadata returned for an upload operation.
         */
        interface IUpload {
            /**
             * Account Id to which this upload belongs.
             */
            accountId: string; // int64
            /**
             * Custom data source Id to which this data import belongs.
             */
            customDataSourceId: string;
            /**
             * Data import errors collection.
             */
            errors: string[];
            /**
             * A unique ID for this upload.
             */
            id: string;
            /**
             * Resource type for Analytics upload.
             */
            kind: string;
            /**
             * Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
             */
            status: string;
        }
        /**
         * Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
         */
        interface IUploads {
            /**
             * A list of uploads.
             */
            items: IUpload[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this upload collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this upload collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of resources in the result.
             */
            totalResults: number; // int32
        }
        /**
         * JSON template for a user reference.
         */
        interface IUserRef {
            /**
             * Email ID of this user.
             */
            email: string;
            /**
             * User ID.
             */
            id: string;
            kind: string;
        }
        /**
         * JSON template for a web property reference.
         */
        interface IWebPropertyRef {
            /**
             * Account ID to which this web property belongs.
             */
            accountId: string;
            /**
             * Link for this web property.
             */
            href: string;
            /**
             * Web property ID of the form UA-XXXXX-YY.
             */
            id: string;
            /**
             * Internal ID for this web property.
             */
            internalWebPropertyId: string;
            /**
             * Analytics web property reference.
             */
            kind: string;
            /**
             * Name of this web property.
             */
            name: string;
        }
        /**
         * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
         */
        interface IWebPropertySummary {
            /**
             * Web property ID of the form UA-XXXXX-YY.
             */
            id: string;
            /**
             * Internal ID for this web property.
             */
            internalWebPropertyId: string;
            /**
             * Resource type for Analytics WebPropertySummary.
             */
            kind: string;
            /**
             * Level for this web property. Possible values are STANDARD or PREMIUM.
             */
            level: string;
            /**
             * Web property name.
             */
            name: string;
            /**
             * List of profiles under this web property.
             */
            profiles: IProfileSummary[];
            /**
             * Website url for this web property.
             */
            websiteUrl: string;
        }
        /**
         * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
         */
        interface IWebproperties {
            /**
             * A list of web properties.
             */
            items: IWebproperty[];
            /**
             * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
             */
            itemsPerPage: number; // int32
            /**
             * Collection type.
             */
            kind: string;
            /**
             * Link to next page for this web property collection.
             */
            nextLink: string;
            /**
             * Link to previous page for this web property collection.
             */
            previousLink: string;
            /**
             * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
             */
            startIndex: number; // int32
            /**
             * The total number of results for the query, regardless of the number of results in the response.
             */
            totalResults: number; // int32
            /**
             * Email ID of the authenticated user
             */
            username: string;
        }
        /**
         * JSON template for an Analytics web property.
         */
        interface IWebproperty {
            /**
             * Account ID to which this web property belongs.
             */
            accountId: string;
            /**
             * Child link for this web property. Points to the list of views (profiles) for this web property.
             */
            childLink: {
                href: string;
                type: string;
            };
            /**
             * Time this web property was created.
             */
            created: string; // date-time
            /**
             * Default view (profile) ID.
             */
            defaultProfileId: string; // int64
            /**
             * Web property ID of the form UA-XXXXX-YY.
             */
            id: string;
            /**
             * The industry vertical/category selected for this web property.
             */
            industryVertical: string;
            /**
             * Internal ID for this web property.
             */
            internalWebPropertyId: string;
            /**
             * Resource type for Analytics WebProperty.
             */
            kind: string;
            /**
             * Level for this web property. Possible values are STANDARD or PREMIUM.
             */
            level: string;
            /**
             * Name of this web property.
             */
            name: string;
            /**
             * Parent link for this web property. Points to the account to which this web property belongs.
             */
            parentLink: {
                href: string;
                type: string;
            };
            /**
             * Permissions the user has for this web property.
             */
            permissions: {
                effective: string[];
            };
            /**
             * View (Profile) count for this web property.
             */
            profileCount: number; // int32
            /**
             * Link for this web property.
             */
            selfLink: string;
            /**
             * Time this web property was last modified.
             */
            updated: string; // date-time
            /**
             * Website url for this web property.
             */
            websiteUrl: string;
        }
    }
}
