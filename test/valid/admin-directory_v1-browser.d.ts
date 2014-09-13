// Type definitions for Google Admin Directory API directory_v1
// Project: https://developers.google.com/admin-sdk/directory/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/admin.directory.device.chromeos
//   View and manage your Chrome OS devices' metadata
// https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly
//   View your Chrome OS devices' metadata
// https://www.googleapis.com/auth/admin.directory.device.mobile
//   View and manage your mobile devices' metadata
// https://www.googleapis.com/auth/admin.directory.device.mobile.action
//   Manage your mobile devices by performing administrative tasks
// https://www.googleapis.com/auth/admin.directory.device.mobile.readonly
//   View your mobile devices' metadata
// https://www.googleapis.com/auth/admin.directory.group
//   View and manage the provisioning of groups on your domain
// https://www.googleapis.com/auth/admin.directory.group.member
//   View and manage group subscriptions on your domain
// https://www.googleapis.com/auth/admin.directory.group.member.readonly
//   View group subscriptions on your domain
// https://www.googleapis.com/auth/admin.directory.group.readonly
//   View groups on your domain
// https://www.googleapis.com/auth/admin.directory.notifications
//   View and manage notifications received on your domain
// https://www.googleapis.com/auth/admin.directory.orgunit
//   View and manage organization units on your domain
// https://www.googleapis.com/auth/admin.directory.orgunit.readonly
//   View organization units on your domain
// https://www.googleapis.com/auth/admin.directory.user
//   View and manage the provisioning of users on your domain
// https://www.googleapis.com/auth/admin.directory.user.alias
//   View and manage user aliases on your domain
// https://www.googleapis.com/auth/admin.directory.user.alias.readonly
//   View user aliases on your domain
// https://www.googleapis.com/auth/admin.directory.user.readonly
//   View users on your domain
// https://www.googleapis.com/auth/admin.directory.user.security
//   Manage data access permissions for users on your domain

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Admin SDK Directory API lets you view and manage enterprise resources such as users and groups, administrative notifications, security features, and more.
     */
    module admin {
        var asps: {
            /**
             * Delete an ASP issued by a user.
             * @params {number} codeId The unique ID of the ASP to be deleted.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            delete: (params: {
                codeId: number;
                userKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Get information about an ASP issued by a user.
             * @params {number} codeId The unique ID of the ASP.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            get: (params: {
                codeId: number;
                userKey: string;
            }) => { execute(callback: (data: IResponse<IAsp>, original: string) => void):void; };
            /**
             * List the ASPs issued by a user.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            list: (params: {
                userKey: string;
            }) => { execute(callback: (data: IResponse<IAsps>, original: string) => void):void; };
        };
        var channels: {
            /**
             * Stop watching resources through this channel
             */
            stop: (params: {
                resource?: IChannel;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var chromeosdevices: {
            /**
             * Retrieve Chrome OS Device
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} deviceId Immutable id of Chrome OS Device
             * @params {string} projection Restrict information returned to a set of selected fields.
             */
            get: (params: {
                customerId: string;
                deviceId: string;
                projection?: string;
            }) => { execute(callback: (data: IResponse<IChromeOsDevice>, original: string) => void):void; };
            /**
             * Retrieve all Chrome OS Devices of a customer (paginated)
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {number} maxResults Maximum number of results to return. Default is 100
             * @params {string} orderBy Column to use for sorting results
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} projection Restrict information returned to a set of selected fields.
             * @params {string} query Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
             * @params {string} sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
             */
            list: (params: {
                customerId: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                projection?: string;
                query?: string;
                sortOrder?: string;
            }) => { execute(callback: (data: IResponse<IChromeOsDevices>, original: string) => void):void; };
            /**
             * Update Chrome OS Device. This method supports patch semantics.
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} deviceId Immutable id of Chrome OS Device
             * @params {string} projection Restrict information returned to a set of selected fields.
             */
            patch: (params: {
                customerId: string;
                deviceId: string;
                projection?: string;
                resource?: IChromeOsDevice;
            }) => { execute(callback: (data: IResponse<IChromeOsDevice>, original: string) => void):void; };
            /**
             * Update Chrome OS Device
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} deviceId Immutable id of Chrome OS Device
             * @params {string} projection Restrict information returned to a set of selected fields.
             */
            update: (params: {
                customerId: string;
                deviceId: string;
                projection?: string;
                resource?: IChromeOsDevice;
            }) => { execute(callback: (data: IResponse<IChromeOsDevice>, original: string) => void):void; };
        };
        var groups: {
            /**
             * Delete Group
             * @params {string} groupKey Email or immutable Id of the group
             */
            delete: (params: {
                groupKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieve Group
             * @params {string} groupKey Email or immutable Id of the group
             */
            get: (params: {
                groupKey: string;
            }) => { execute(callback: (data: IResponse<IGroup>, original: string) => void):void; };
            /**
             * Create Group
             */
            insert: (params: {
                resource?: IGroup;
            }) => { execute(callback: (data: IResponse<IGroup>, original: string) => void):void; };
            /**
             * Retrieve all groups in a domain (paginated)
             * @params {string} customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
             * @params {string} domain Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
             * @params {number} maxResults Maximum number of results to return. Default is 200
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} userKey Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
             */
            list: (params: {
                customer?: string;
                domain?: string;
                maxResults?: number;
                pageToken?: string;
                userKey?: string;
            }) => { execute(callback: (data: IResponse<IGroups>, original: string) => void):void; };
            /**
             * Update Group. This method supports patch semantics.
             * @params {string} groupKey Email or immutable Id of the group. If Id, it should match with id of group object
             */
            patch: (params: {
                groupKey: string;
                resource?: IGroup;
            }) => { execute(callback: (data: IResponse<IGroup>, original: string) => void):void; };
            /**
             * Update Group
             * @params {string} groupKey Email or immutable Id of the group. If Id, it should match with id of group object
             */
            update: (params: {
                groupKey: string;
                resource?: IGroup;
            }) => { execute(callback: (data: IResponse<IGroup>, original: string) => void):void; };
            aliases: {
                /**
                 * Remove a alias for the group
                 * @params {string} alias The alias to be removed
                 * @params {string} groupKey Email or immutable Id of the group
                 */
                delete: (params: {
                    alias: string;
                    groupKey: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Add a alias for the group
                 * @params {string} groupKey Email or immutable Id of the group
                 */
                insert: (params: {
                    groupKey: string;
                    resource?: IAlias;
                }) => { execute(callback: (data: IResponse<IAlias>, original: string) => void):void; };
                /**
                 * List all aliases for a group
                 * @params {string} groupKey Email or immutable Id of the group
                 */
                list: (params: {
                    groupKey: string;
                }) => { execute(callback: (data: IResponse<IAliases>, original: string) => void):void; };
            };
        };
        var members: {
            /**
             * Remove membership.
             * @params {string} groupKey Email or immutable Id of the group
             * @params {string} memberKey Email or immutable Id of the member
             */
            delete: (params: {
                groupKey: string;
                memberKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieve Group Member
             * @params {string} groupKey Email or immutable Id of the group
             * @params {string} memberKey Email or immutable Id of the member
             */
            get: (params: {
                groupKey: string;
                memberKey: string;
            }) => { execute(callback: (data: IResponse<IMember>, original: string) => void):void; };
            /**
             * Add user to the specified group.
             * @params {string} groupKey Email or immutable Id of the group
             */
            insert: (params: {
                groupKey: string;
                resource?: IMember;
            }) => { execute(callback: (data: IResponse<IMember>, original: string) => void):void; };
            /**
             * Retrieve all members in a group (paginated)
             * @params {string} groupKey Email or immutable Id of the group
             * @params {number} maxResults Maximum number of results to return. Default is 200
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} roles Comma separated role values to filter list results on.
             */
            list: (params: {
                groupKey: string;
                maxResults?: number;
                pageToken?: string;
                roles?: string;
            }) => { execute(callback: (data: IResponse<IMembers>, original: string) => void):void; };
            /**
             * Update membership of a user in the specified group. This method supports patch semantics.
             * @params {string} groupKey Email or immutable Id of the group. If Id, it should match with id of group object
             * @params {string} memberKey Email or immutable Id of the user. If Id, it should match with id of member object
             */
            patch: (params: {
                groupKey: string;
                memberKey: string;
                resource?: IMember;
            }) => { execute(callback: (data: IResponse<IMember>, original: string) => void):void; };
            /**
             * Update membership of a user in the specified group.
             * @params {string} groupKey Email or immutable Id of the group. If Id, it should match with id of group object
             * @params {string} memberKey Email or immutable Id of the user. If Id, it should match with id of member object
             */
            update: (params: {
                groupKey: string;
                memberKey: string;
                resource?: IMember;
            }) => { execute(callback: (data: IResponse<IMember>, original: string) => void):void; };
        };
        var mobiledevices: {
            /**
             * Take action on Mobile Device
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} resourceId Immutable id of Mobile Device
             */
            action: (params: {
                customerId: string;
                resourceId: string;
                resource?: IMobileDeviceAction;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Delete Mobile Device
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} resourceId Immutable id of Mobile Device
             */
            delete: (params: {
                customerId: string;
                resourceId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieve Mobile Device
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} projection Restrict information returned to a set of selected fields.
             * @params {string} resourceId Immutable id of Mobile Device
             */
            get: (params: {
                customerId: string;
                projection?: string;
                resourceId: string;
            }) => { execute(callback: (data: IResponse<IMobileDevice>, original: string) => void):void; };
            /**
             * Retrieve all Mobile Devices of a customer (paginated)
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {number} maxResults Maximum number of results to return. Default is 100
             * @params {string} orderBy Column to use for sorting results
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} projection Restrict information returned to a set of selected fields.
             * @params {string} query Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
             * @params {string} sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
             */
            list: (params: {
                customerId: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                projection?: string;
                query?: string;
                sortOrder?: string;
            }) => { execute(callback: (data: IResponse<IMobileDevices>, original: string) => void):void; };
        };
        var notifications: {
            /**
             * Deletes a notification
             * @params {string} customer The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
             * @params {string} notificationId The unique ID of the notification.
             */
            delete: (params: {
                customer: string;
                notificationId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves a notification.
             * @params {string} customer The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
             * @params {string} notificationId The unique ID of the notification.
             */
            get: (params: {
                customer: string;
                notificationId: string;
            }) => { execute(callback: (data: IResponse<INotification>, original: string) => void):void; };
            /**
             * Retrieves a list of notifications.
             * @params {string} customer The unique ID for the customer's Google account.
             * @params {string} language The ISO 639-1 code of the language notifications are returned in. The default is English (en).
             * @params {number} maxResults Maximum number of notifications to return per page. The default is 100.
             * @params {string} pageToken The token to specify the page of results to retrieve.
             */
            list: (params: {
                customer: string;
                language?: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data: IResponse<INotifications>, original: string) => void):void; };
            /**
             * Updates a notification. This method supports patch semantics.
             * @params {string} customer The unique ID for the customer's Google account.
             * @params {string} notificationId The unique ID of the notification.
             */
            patch: (params: {
                customer: string;
                notificationId: string;
                resource?: INotification;
            }) => { execute(callback: (data: IResponse<INotification>, original: string) => void):void; };
            /**
             * Updates a notification.
             * @params {string} customer The unique ID for the customer's Google account.
             * @params {string} notificationId The unique ID of the notification.
             */
            update: (params: {
                customer: string;
                notificationId: string;
                resource?: INotification;
            }) => { execute(callback: (data: IResponse<INotification>, original: string) => void):void; };
        };
        var orgunits: {
            /**
             * Remove Organization Unit
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} orgUnitPath Full path of the organization unit
             */
            delete: (params: {
                customerId: string;
                orgUnitPath: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieve Organization Unit
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} orgUnitPath Full path of the organization unit
             */
            get: (params: {
                customerId: string;
                orgUnitPath: string;
            }) => { execute(callback: (data: IResponse<IOrgUnit>, original: string) => void):void; };
            /**
             * Add Organization Unit
             * @params {string} customerId Immutable id of the Google Apps account
             */
            insert: (params: {
                customerId: string;
                resource?: IOrgUnit;
            }) => { execute(callback: (data: IResponse<IOrgUnit>, original: string) => void):void; };
            /**
             * Retrieve all Organization Units
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} orgUnitPath the URL-encoded organization unit
             * @params {string} type Whether to return all sub-organizations or just immediate children
             */
            list: (params: {
                customerId: string;
                orgUnitPath?: string;
                type?: string;
            }) => { execute(callback: (data: IResponse<IOrgUnits>, original: string) => void):void; };
            /**
             * Update Organization Unit. This method supports patch semantics.
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} orgUnitPath Full path of the organization unit
             */
            patch: (params: {
                customerId: string;
                orgUnitPath: string;
                resource?: IOrgUnit;
            }) => { execute(callback: (data: IResponse<IOrgUnit>, original: string) => void):void; };
            /**
             * Update Organization Unit
             * @params {string} customerId Immutable id of the Google Apps account
             * @params {string} orgUnitPath Full path of the organization unit
             */
            update: (params: {
                customerId: string;
                orgUnitPath: string;
                resource?: IOrgUnit;
            }) => { execute(callback: (data: IResponse<IOrgUnit>, original: string) => void):void; };
        };
        var tokens: {
            /**
             * Delete all access tokens issued by a user for an application.
             * @params {string} clientId The Client ID of the application the token is issued to.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            delete: (params: {
                clientId: string;
                userKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Get information about an access token issued by a user.
             * @params {string} clientId The Client ID of the application the token is issued to.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            get: (params: {
                clientId: string;
                userKey: string;
            }) => { execute(callback: (data: IResponse<IToken>, original: string) => void):void; };
            /**
             * Returns the set of tokens specified user has issued to 3rd party applications.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            list: (params: {
                userKey: string;
            }) => { execute(callback: (data: IResponse<ITokens>, original: string) => void):void; };
        };
        var users: {
            /**
             * Delete user
             * @params {string} userKey Email or immutable Id of the user
             */
            delete: (params: {
                userKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * retrieve user
             * @params {string} userKey Email or immutable Id of the user
             */
            get: (params: {
                userKey: string;
            }) => { execute(callback: (data: IResponse<IUser>, original: string) => void):void; };
            /**
             * create user.
             */
            insert: (params: {
                resource?: IUser;
            }) => { execute(callback: (data: IResponse<IUser>, original: string) => void):void; };
            /**
             * Retrieve either deleted users or all users in a domain (paginated)
             * @params {string} customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
             * @params {string} domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
             * @params {string} event Event on which subscription is intended (if subscribing)
             * @params {number} maxResults Maximum number of results to return. Default is 100. Max allowed is 500
             * @params {string} orderBy Column to use for sorting results
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} query Query string search. Should be of the form "" where field can be any of supported fields, operators can be one of '=' for exact match or ':' for prefix match. For prefix match, the value should always be followed by a *.
             * @params {string} showDeleted If set to true retrieves the list of deleted users. Default is false
             * @params {string} sortOrder Whether to return results in ascending or descending order.
             */
            list: (params: {
                customer?: string;
                domain?: string;
                event?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                query?: string;
                showDeleted?: string;
                sortOrder?: string;
            }) => { execute(callback: (data: IResponse<IUsers>, original: string) => void):void; };
            /**
             * change admin status of a user
             * @params {string} userKey Email or immutable Id of the user as admin
             */
            makeAdmin: (params: {
                userKey: string;
                resource?: IUserMakeAdmin;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * update user. This method supports patch semantics.
             * @params {string} userKey Email or immutable Id of the user. If Id, it should match with id of user object
             */
            patch: (params: {
                userKey: string;
                resource?: IUser;
            }) => { execute(callback: (data: IResponse<IUser>, original: string) => void):void; };
            /**
             * Undelete a deleted user
             * @params {string} userKey The immutable id of the user
             */
            undelete: (params: {
                userKey: string;
                resource?: IUserUndelete;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * update user
             * @params {string} userKey Email or immutable Id of the user. If Id, it should match with id of user object
             */
            update: (params: {
                userKey: string;
                resource?: IUser;
            }) => { execute(callback: (data: IResponse<IUser>, original: string) => void):void; };
            /**
             * Watch for changes in users list
             * @params {string} customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
             * @params {string} domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
             * @params {string} event Event on which subscription is intended (if subscribing)
             * @params {number} maxResults Maximum number of results to return. Default is 100. Max allowed is 500
             * @params {string} orderBy Column to use for sorting results
             * @params {string} pageToken Token to specify next page in the list
             * @params {string} query Query string search. Should be of the form "" where field can be any of supported fields, operators can be one of '=' for exact match or ':' for prefix match. For prefix match, the value should always be followed by a *.
             * @params {string} showDeleted If set to true retrieves the list of deleted users. Default is false
             * @params {string} sortOrder Whether to return results in ascending or descending order.
             */
            watch: (params: {
                customer?: string;
                domain?: string;
                event?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                query?: string;
                showDeleted?: string;
                sortOrder?: string;
                resource?: IChannel;
            }) => { execute(callback: (data: IResponse<IChannel>, original: string) => void):void; };
            aliases: {
                /**
                 * Remove a alias for the user
                 * @params {string} alias The alias to be removed
                 * @params {string} userKey Email or immutable Id of the user
                 */
                delete: (params: {
                    alias: string;
                    userKey: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Add a alias for the user
                 * @params {string} userKey Email or immutable Id of the user
                 */
                insert: (params: {
                    userKey: string;
                    resource?: IAlias;
                }) => { execute(callback: (data: IResponse<IAlias>, original: string) => void):void; };
                /**
                 * List all aliases for a user
                 * @params {string} event Event on which subscription is intended (if subscribing)
                 * @params {string} userKey Email or immutable Id of the user
                 */
                list: (params: {
                    event?: string;
                    userKey: string;
                }) => { execute(callback: (data: IResponse<IAliases>, original: string) => void):void; };
                /**
                 * Watch for changes in user aliases list
                 * @params {string} event Event on which subscription is intended (if subscribing)
                 * @params {string} userKey Email or immutable Id of the user
                 */
                watch: (params: {
                    event?: string;
                    userKey: string;
                    resource?: IChannel;
                }) => { execute(callback: (data: IResponse<IChannel>, original: string) => void):void; };
            };
            photos: {
                /**
                 * Remove photos for the user
                 * @params {string} userKey Email or immutable Id of the user
                 */
                delete: (params: {
                    userKey: string;
                }) => { execute(callback: (data:any, original: string) => void):void; }; // void
                /**
                 * Retrieve photo of a user
                 * @params {string} userKey Email or immutable Id of the user
                 */
                get: (params: {
                    userKey: string;
                }) => { execute(callback: (data: IResponse<IUserPhoto>, original: string) => void):void; };
                /**
                 * Add a photo for the user. This method supports patch semantics.
                 * @params {string} userKey Email or immutable Id of the user
                 */
                patch: (params: {
                    userKey: string;
                    resource?: IUserPhoto;
                }) => { execute(callback: (data: IResponse<IUserPhoto>, original: string) => void):void; };
                /**
                 * Add a photo for the user
                 * @params {string} userKey Email or immutable Id of the user
                 */
                update: (params: {
                    userKey: string;
                    resource?: IUserPhoto;
                }) => { execute(callback: (data: IResponse<IUserPhoto>, original: string) => void):void; };
            };
        };
        var verificationCodes: {
            /**
             * Generate new backup verification codes for the user.
             * @params {string} userKey Email or immutable Id of the user
             */
            generate: (params: {
                userKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Invalidate the current backup verification codes for the user.
             * @params {string} userKey Email or immutable Id of the user
             */
            invalidate: (params: {
                userKey: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Returns the current set of valid backup verification codes for the specified user.
             * @params {string} userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
             */
            list: (params: {
                userKey: string;
            }) => { execute(callback: (data: IResponse<IVerificationCodes>, original: string) => void):void; };
        };
        /**
         * JSON template for Alias object in Directory API.
         */
        interface IAlias {
            /**
             * A alias email
             */
            alias: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Unique id of the group (Read-only) Unique id of the user (Read-only)
             */
            id: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Group's primary email (Read-only) User's primary email (Read-only)
             */
            primaryEmail: string;
        }
        /**
         * JSON response template to list aliases in Directory API.
         */
        interface IAliases {
            /**
             * List of alias objects.
             */
            aliases: IAlias[];
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
        }
        /**
         * The template that returns individual ASP (Access Code) data.
         */
        interface IAsp {
            /**
             * The unique ID of the ASP.
             */
            codeId: number; // int32
            /**
             * The time when the ASP was created. Expressed in Unix time format.
             */
            creationTime: string; // int64
            /**
             * ETag of the ASP.
             */
            etag: string;
            /**
             * The type of the API resource. This is always admin#directory#asp.
             */
            kind: string;
            /**
             * The time when the ASP was last used. Expressed in Unix time format.
             */
            lastTimeUsed: string; // int64
            /**
             * The name of the application that the user, represented by their userId, entered when the ASP was created.
             */
            name: string;
            /**
             * The unique ID of the user who issued the ASP.
             */
            userKey: string;
        }
        interface IAsps {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * A list of ASP resources.
             */
            items: IAsp[];
            /**
             * The type of the API resource. This is always admin#directory#aspList.
             */
            kind: string;
        }
        /**
         * An notification channel used to watch for resource changes.
         */
        interface IChannel {
            /**
             * The address where notifications are delivered for this channel.
             */
            address: string;
            /**
             * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
             */
            expiration: string; // int64
            /**
             * A UUID or similar unique string that identifies this channel.
             */
            id: string;
            /**
             * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
             */
            kind: string;
            /**
             * Additional parameters controlling delivery channel behavior. Optional.
             */
            params: {
                [name:string]: string;
            };
            /**
             * A Boolean value to indicate whether payload is wanted. Optional.
             */
            payload: boolean;
            /**
             * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
             */
            resourceId: string;
            /**
             * A version-specific identifier for the watched resource.
             */
            resourceUri: string;
            /**
             * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
             */
            token: string;
            /**
             * The type of delivery mechanism used for this channel.
             */
            type: string;
        }
        /**
         * JSON template for Chrome Os Device resource in Directory API.
         */
        interface IChromeOsDevice {
            /**
             * Address or location of the device as noted by the administrator
             */
            annotatedLocation: string;
            /**
             * User of the device
             */
            annotatedUser: string;
            /**
             * Chromebook boot mode (Read-only)
             */
            bootMode: string;
            /**
             * Unique identifier of Chrome OS Device (Read-only)
             */
            deviceId: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Chromebook Mac Address on ethernet network interface (Read-only)
             */
            ethernetMacAddress: string;
            /**
             * Chromebook firmware version (Read-only)
             */
            firmwareVersion: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Date and time the device was last enrolled (Read-only)
             */
            lastEnrollmentTime: string; // date-time
            /**
             * Date and time the device was last synchronized with the policy settings in the Google Apps administrator control panel (Read-only)
             */
            lastSync: string; // date-time
            /**
             * Chromebook Mac Address on wifi network interface (Read-only)
             */
            macAddress: string;
            /**
             * Mobile Equipment identifier for the 3G mobile card in the Chromebook (Read-only)
             */
            meid: string;
            /**
             * Chromebook Model (Read-only)
             */
            model: string;
            /**
             * Notes added by the administrator
             */
            notes: string;
            /**
             * Chromebook order number (Read-only)
             */
            orderNumber: string;
            /**
             * OrgUnit of the device
             */
            orgUnitPath: string;
            /**
             * Chromebook Os Version (Read-only)
             */
            osVersion: string;
            /**
             * Chromebook platform version (Read-only)
             */
            platformVersion: string;
            /**
             * List of recent device users, in descending order by last login time (Read-only)
             */
            recentUsers: {
                email: string;
                type: string;
            }[];
            /**
             * Chromebook serial number (Read-only)
             */
            serialNumber: string;
            /**
             * status of the device (Read-only)
             */
            status: string;
            /**
             * Final date the device will be supported (Read-only)
             */
            supportEndDate: string; // date-time
            /**
             * Will Chromebook auto renew after support end date (Read-only)
             */
            willAutoRenew: boolean;
        }
        /**
         * JSON response template for List Chrome OS Devices operation in Directory API.
         */
        interface IChromeOsDevices {
            /**
             * List of Chrome OS Device objects.
             */
            chromeosdevices: IChromeOsDevice[];
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Token used to access next page of this result.
             */
            nextPageToken: string;
        }
        /**
         * JSON template for Group resource in Directory API.
         */
        interface IGroup {
            /**
             * Is the group created by admin (Read-only) *
             */
            adminCreated: boolean;
            /**
             * List of aliases (Read-only)
             */
            aliases: string[];
            /**
             * Description of the group
             */
            description: string;
            /**
             * Group direct members count
             */
            directMembersCount: string; // int64
            /**
             * Email of Group
             */
            email: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Unique identifier of Group (Read-only)
             */
            id: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Group name
             */
            name: string;
            /**
             * List of non editable aliases (Read-only)
             */
            nonEditableAliases: string[];
        }
        /**
         * JSON response template for List Groups operation in Directory API.
         */
        interface IGroups {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * List of group objects.
             */
            groups: IGroup[];
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Token used to access next page of this result.
             */
            nextPageToken: string;
        }
        /**
         * JSON template for Member resource in Directory API.
         */
        interface IMember {
            /**
             * Email of member (Read-only)
             */
            email: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Unique identifier of customer member (Read-only) Unique identifier of group (Read-only) Unique identifier of member (Read-only)
             */
            id: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Role of member
             */
            role: string;
            /**
             * Type of member (Immutable)
             */
            type: string;
        }
        /**
         * JSON response template for List Members operation in Directory API.
         */
        interface IMembers {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * List of member objects.
             */
            members: IMember[];
            /**
             * Token used to access next page of this result.
             */
            nextPageToken: string;
        }
        /**
         * JSON template for Mobile Device resource in Directory API.
         */
        interface IMobileDevice {
            /**
             * List of applications installed on Mobile Device
             */
            applications: {
                displayName: string;
                packageName: string;
                permission: string[];
                versionCode: number; // int32
                versionName: string;
            }[];
            /**
             * Mobile Device Baseband version (Read-only)
             */
            basebandVersion: string;
            /**
             * Mobile Device Build number (Read-only)
             */
            buildNumber: string;
            /**
             * The default locale used on the Mobile Device (Read-only)
             */
            defaultLanguage: string;
            /**
             * Mobile Device compromised status (Read-only)
             */
            deviceCompromisedStatus: string;
            /**
             * Mobile Device serial number (Read-only)
             */
            deviceId: string;
            /**
             * List of owner user's email addresses (Read-only)
             */
            email: string[];
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Date and time the device was first synchronized with the policy settings in the Google Apps administrator control panel (Read-only)
             */
            firstSync: string; // date-time
            /**
             * Mobile Device Hardware Id (Read-only)
             */
            hardwareId: string;
            /**
             * Mobile Device IMEI number (Read-only)
             */
            imei: string;
            /**
             * Mobile Device Kernel version (Read-only)
             */
            kernelVersion: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Date and time the device was last synchronized with the policy settings in the Google Apps administrator control panel (Read-only)
             */
            lastSync: string; // date-time
            /**
             * Boolean indicating if this account is on owner/primary profile or not (Read-only)
             */
            managedAccountIsOnOwnerProfile: boolean;
            /**
             * Mobile Device MEID number (Read-only)
             */
            meid: string;
            /**
             * Name of the model of the device
             */
            model: string;
            /**
             * List of owner user's names (Read-only)
             */
            name: string[];
            /**
             * Mobile Device mobile or network operator (if available) (Read-only)
             */
            networkOperator: string;
            /**
             * Name of the mobile operating system
             */
            os: string;
            /**
             * Unique identifier of Mobile Device (Read-only)
             */
            resourceId: string;
            /**
             * Mobile Device SSN or Serial Number (Read-only)
             */
            serialNumber: string;
            /**
             * Status of the device (Read-only)
             */
            status: string;
            /**
             * The type of device (Read-only)
             */
            type: string;
            /**
             * Mobile Device user agent
             */
            userAgent: string;
            /**
             * Mobile Device WiFi MAC address (Read-only)
             */
            wifiMacAddress: string;
        }
        /**
         * JSON request template for firing commands on Mobile Device in Directory Devices API.
         */
        interface IMobileDeviceAction {
            /**
             * Action to be taken on the Mobile Device
             */
            action: string;
        }
        /**
         * JSON response template for List Mobile Devices operation in Directory API.
         */
        interface IMobileDevices {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * List of Mobile Device objects.
             */
            mobiledevices: IMobileDevice[];
            /**
             * Token used to access next page of this result.
             */
            nextPageToken: string;
        }
        /**
         * Template for a notification resource.
         */
        interface INotification {
            /**
             * Body of the notification (Read-only)
             */
            body: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Address from which the notification is received (Read-only)
             */
            fromAddress: string;
            /**
             * Boolean indicating whether the notification is unread or not.
             */
            isUnread: boolean;
            /**
             * The type of the resource.
             */
            kind: string;
            notificationId: string;
            /**
             * Time at which notification was sent (Read-only)
             */
            sendTime: string; // date-time
            /**
             * Subject of the notification (Read-only)
             */
            subject: string;
        }
        /**
         * Template for notifications list response.
         */
        interface INotifications {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * List of notifications in this page.
             */
            items: INotification[];
            /**
             * The type of the resource.
             */
            kind: string;
            /**
             * Token for fetching the next page of notifications.
             */
            nextPageToken: string;
            /**
             * Number of unread notification for the domain.
             */
            unreadNotificationsCount: number; // int32
        }
        /**
         * JSON template for Org Unit resource in Directory API.
         */
        interface IOrgUnit {
            /**
             * Should block inheritance
             */
            blockInheritance: boolean;
            /**
             * Description of OrgUnit
             */
            description: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Name of OrgUnit
             */
            name: string;
            /**
             * Path of OrgUnit
             */
            orgUnitPath: string;
            /**
             * Path of parent OrgUnit
             */
            parentOrgUnitPath: string;
        }
        /**
         * JSON response template for List Organization Units operation in Directory API.
         */
        interface IOrgUnits {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * List of user objects.
             */
            organizationUnits: IOrgUnit[];
        }
        /**
         * JSON template for token resource in Directory API.
         */
        interface IToken {
            /**
             * Whether the application is registered with Google. The value is true if the application has an anonymous Client ID.
             */
            anonymous: boolean;
            /**
             * The Client ID of the application the token is issued to.
             */
            clientId: string;
            /**
             * The displayable name of the application the token is issued to.
             */
            displayText: string;
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * The type of the API resource. This is always admin#directory#token.
             */
            kind: string;
            /**
             * Whether the token is issued to an installed application. The value is true if the application is installed to a desktop or mobile device.
             */
            nativeApp: boolean;
            /**
             * A list of authorization scopes the application is granted.
             */
            scopes: string[];
            /**
             * The unique ID of the user that issued the token.
             */
            userKey: string;
        }
        /**
         * JSON response template for List tokens operation in Directory API.
         */
        interface ITokens {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * A list of Token resources.
             */
            items: IToken[];
            /**
             * The type of the API resource. This is always admin#directory#tokenList.
             */
            kind: string;
        }
        /**
         * JSON template for User object in Apps Directory API.
         */
        interface IUser {
            addresses: any;
            /**
             * Indicates if user has agreed to terms (Read-only)
             */
            agreedToTerms: boolean;
            /**
             * List of aliases (Read-only)
             */
            aliases: string[];
            /**
             * Boolean indicating if the user should change password in next login
             */
            changePasswordAtNextLogin: boolean;
            /**
             * User's Google account creation time. (Read-only)
             */
            creationTime: string; // date-time
            /**
             * CustomerId of User (Read-only)
             */
            customerId: string;
            deletionTime: string; // date-time
            emails: any;
            /**
             * ETag of the resource.
             */
            etag: string;
            externalIds: any;
            /**
             * Hash function name for password. Supported are MD5, SHA-1 and crypt
             */
            hashFunction: string;
            /**
             * Unique identifier of User (Read-only)
             */
            id: string;
            ims: any;
            /**
             * Boolean indicating if user is included in Global Address List
             */
            includeInGlobalAddressList: boolean;
            /**
             * Boolean indicating if ip is whitelisted
             */
            ipWhitelisted: boolean;
            /**
             * Boolean indicating if the user is admin (Read-only)
             */
            isAdmin: boolean;
            /**
             * Boolean indicating if the user is delegated admin (Read-only)
             */
            isDelegatedAdmin: boolean;
            /**
             * Is mailbox setup (Read-only)
             */
            isMailboxSetup: boolean;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * User's last login time. (Read-only)
             */
            lastLoginTime: string; // date-time
            /**
             * User's name
             */
            name: IUserName;
            /**
             * List of non editable aliases (Read-only)
             */
            nonEditableAliases: string[];
            /**
             * OrgUnit of User
             */
            orgUnitPath: string;
            organizations: any;
            /**
             * User's password
             */
            password: string;
            phones: any;
            /**
             * username of User
             */
            primaryEmail: string;
            relations: any;
            /**
             * Indicates if user is suspended
             */
            suspended: boolean;
            /**
             * Suspension reason if user is suspended (Read-only)
             */
            suspensionReason: string;
            /**
             * Photo Url of the user (Read-only)
             */
            thumbnailPhotoUrl: string;
        }
        /**
         * JSON template for address.
         */
        interface IUserAddress {
            /**
             * Country.
             */
            country: string;
            /**
             * Country code.
             */
            countryCode: string;
            /**
             * Custom type.
             */
            customType: string;
            /**
             * Extended Address.
             */
            extendedAddress: string;
            /**
             * Formatted address (read-only field)
             */
            formatted: string;
            /**
             * Locality.
             */
            locality: string;
            /**
             * Other parts of address.
             */
            poBox: string;
            /**
             * Postal code.
             */
            postalCode: string;
            /**
             * If this is user's primary address. Only one entry could be marked as primary.
             */
            primary: boolean;
            /**
             * Region.
             */
            region: string;
            /**
             * User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses, but any values will eventually be clobbered.
             */
            sourceIsStructured: boolean;
            /**
             * Street.
             */
            streetAddress: string;
            /**
             * Each entry can have a type which indicates standard values of that entry. For example address could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.
             */
            type: string;
        }
        /**
         * JSON template for an email.
         */
        interface IUserEmail {
            /**
             * Email id of the user.
             */
            address: string;
            /**
             * Custom Type.
             */
            customType: string;
            /**
             * If this is user's primary email. Only one entry could be marked as primary.
             */
            primary: boolean;
            /**
             * Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.
             */
            type: string;
        }
        /**
         * JSON template for an externalId entry.
         */
        interface IUserExternalId {
            /**
             * Custom type.
             */
            customType: string;
            /**
             * The type of the Id.
             */
            type: string;
            /**
             * The value of the id.
             */
            value: string;
        }
        /**
         * JSON template for instant messenger of an user.
         */
        interface IUserIm {
            /**
             * Custom protocol.
             */
            customProtocol: string;
            /**
             * Custom type.
             */
            customType: string;
            /**
             * Instant messenger id.
             */
            im: string;
            /**
             * If this is user's primary im. Only one entry could be marked as primary.
             */
            primary: boolean;
            /**
             * Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type, it can take a CUSTOM value and specify the custom name in customProtocol field.
             */
            protocol: string;
            /**
             * Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.
             */
            type: string;
        }
        /**
         * JSON request template for setting/revoking admin status of a user in Directory API.
         */
        interface IUserMakeAdmin {
            /**
             * Boolean indicating new admin status of the user
             */
            status: boolean;
        }
        /**
         * JSON template for name of a user in Directory API.
         */
        interface IUserName {
            /**
             * Last Name
             */
            familyName: string;
            /**
             * Full Name
             */
            fullName: string;
            /**
             * First Name
             */
            givenName: string;
        }
        /**
         * JSON template for an organization entry.
         */
        interface IUserOrganization {
            /**
             * The cost center of the users department.
             */
            costCenter: string;
            /**
             * Custom type.
             */
            customType: string;
            /**
             * Department within the organization.
             */
            department: string;
            /**
             * Description of the organization.
             */
            description: string;
            /**
             * The domain to which the organization belongs to.
             */
            domain: string;
            /**
             * Location of the organization. This need not be fully qualified address.
             */
            location: string;
            /**
             * Name of the organization
             */
            name: string;
            /**
             * If it user's primary organization.
             */
            primary: boolean;
            /**
             * Symbol of the organization.
             */
            symbol: string;
            /**
             * Title (designation) of the user in the organization.
             */
            title: string;
            /**
             * Each entry can have a type which indicates standard types of that entry. For example organization could be of school, work etc. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.
             */
            type: string;
        }
        /**
         * JSON template for a phone entry.
         */
        interface IUserPhone {
            /**
             * Custom Type.
             */
            customType: string;
            /**
             * If this is user's primary phone or not.
             */
            primary: boolean;
            /**
             * Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax, work, mobile etc. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
             */
            type: string;
            /**
             * Phone number.
             */
            value: string;
        }
        /**
         * JSON template for Photo object in Directory API.
         */
        interface IUserPhoto {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Height in pixels of the photo
             */
            height: number; // int32
            /**
             * Unique identifier of User (Read-only)
             */
            id: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Mime Type of the photo
             */
            mimeType: string;
            /**
             * Base64 encoded photo data
             */
            photoData: string; // byte
            /**
             * Primary email of User (Read-only)
             */
            primaryEmail: string;
            /**
             * Width in pixels of the photo
             */
            width: number; // int32
        }
        /**
         * JSON template for a relation entry.
         */
        interface IUserRelation {
            /**
             * Custom Type.
             */
            customType: string;
            /**
             * The relation of the user. Some of the possible values are mother, father, sister, brother, manager, assistant, partner.
             */
            type: string;
            /**
             * The name of the relation.
             */
            value: string;
        }
        /**
         * JSON request template to undelete a user in Directory API.
         */
        interface IUserUndelete {
            /**
             * OrgUnit of User
             */
            orgUnitPath: string;
        }
        /**
         * JSON response template for List Users operation in Apps Directory API.
         */
        interface IUsers {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * Kind of resource this is.
             */
            kind: string;
            /**
             * Token used to access next page of this result.
             */
            nextPageToken: string;
            /**
             * Event that triggered this response (only used in case of Push Response)
             */
            trigger_event: string;
            /**
             * List of user objects.
             */
            users: IUser[];
        }
        /**
         * JSON template for verification codes in Directory API.
         */
        interface IVerificationCode {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * The type of the resource. This is always admin#directory#verificationCode.
             */
            kind: string;
            /**
             * The obfuscated unique ID of the user.
             */
            userId: string;
            /**
             * A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.
             */
            verificationCode: string;
        }
        /**
         * JSON response template for List verification codes operation in Directory API.
         */
        interface IVerificationCodes {
            /**
             * ETag of the resource.
             */
            etag: string;
            /**
             * A list of verification code resources.
             */
            items: IVerificationCode[];
            /**
             * The type of the resource. This is always admin#directory#verificationCodesList.
             */
            kind: string;
        }
    }
}
