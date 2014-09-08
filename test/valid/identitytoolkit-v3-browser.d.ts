// Type definitions for Google Google Identity Toolkit API v3
// Project: https://developers.google.com/identity-toolkit/v3/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Help the third party sites to implement federated login.
     */
    module identitytoolkit {
        var relyingparty: {
            /**
             * Creates the URI used by the IdP to authenticate the user.
             */
            createAuthUri: (params: {
                resource?: IIdentitytoolkitRelyingpartyCreateAuthUriRequest;
            }) => { execute(callback: (data: IResponse<ICreateAuthUriResponse>, original: string) => void):void; };
            /**
             * Delete user account.
             */
            deleteAccount: (params: {
                resource?: IIdentitytoolkitRelyingpartyDeleteAccountRequest;
            }) => { execute(callback: (data: IResponse<IDeleteAccountResponse>, original: string) => void):void; };
            /**
             * Batch download user accounts.
             */
            downloadAccount: (params: {
                resource?: IIdentitytoolkitRelyingpartyDownloadAccountRequest;
            }) => { execute(callback: (data: IResponse<IDownloadAccountResponse>, original: string) => void):void; };
            /**
             * Returns the account info.
             */
            getAccountInfo: (params: {
                resource?: IIdentitytoolkitRelyingpartyGetAccountInfoRequest;
            }) => { execute(callback: (data: IResponse<IGetAccountInfoResponse>, original: string) => void):void; };
            /**
             * Get a code for user action confirmation.
             */
            getOobConfirmationCode: (params: {
                resource?: IRelyingparty;
            }) => { execute(callback: (data: IResponse<IGetOobConfirmationCodeResponse>, original: string) => void):void; };
            /**
             * Get token signing public key.
             */
            getPublicKeys: (params: {
            }) => { execute(callback: (data: IResponse<IIdentitytoolkitRelyingpartyGetPublicKeysResponse>, original: string) => void):void; };
            /**
             * Set account info for a user.
             */
            resetPassword: (params: {
                resource?: IIdentitytoolkitRelyingpartyResetPasswordRequest;
            }) => { execute(callback: (data: IResponse<IResetPasswordResponse>, original: string) => void):void; };
            /**
             * Set account info for a user.
             */
            setAccountInfo: (params: {
                resource?: IIdentitytoolkitRelyingpartySetAccountInfoRequest;
            }) => { execute(callback: (data: IResponse<ISetAccountInfoResponse>, original: string) => void):void; };
            /**
             * Batch upload existing user accounts.
             */
            uploadAccount: (params: {
                resource?: IIdentitytoolkitRelyingpartyUploadAccountRequest;
            }) => { execute(callback: (data: IResponse<IUploadAccountResponse>, original: string) => void):void; };
            /**
             * Verifies the assertion returned by the IdP.
             */
            verifyAssertion: (params: {
                resource?: IIdentitytoolkitRelyingpartyVerifyAssertionRequest;
            }) => { execute(callback: (data: IResponse<IVerifyAssertionResponse>, original: string) => void):void; };
            /**
             * Verifies the user entered password.
             */
            verifyPassword: (params: {
                resource?: IIdentitytoolkitRelyingpartyVerifyPasswordRequest;
            }) => { execute(callback: (data: IResponse<IVerifyPasswordResponse>, original: string) => void):void; };
        };
        /**
         * Response of creating the IDP authentication URL.
         */
        interface ICreateAuthUriResponse {
            /**
             * The URI used by the IDP to authenticate the user.
             */
            authUri: string;
            /**
             * True if the authUri is for user's existing provider.
             */
            forExistingProvider: boolean;
            /**
             * The fixed string identitytoolkit#CreateAuthUriResponse".
             */
            kind: string;
            /**
             * The provider ID of the auth URI.
             */
            providerId: string;
            /**
             * Whether the user is registered if the identifier is an email.
             */
            registered: boolean;
        }
        /**
         * Respone of deleting account.
         */
        interface IDeleteAccountResponse {
            /**
             * The fixed string "identitytoolkit#DeleteAccountResponse".
             */
            kind: string;
        }
        /**
         * Respone of downloading accounts in batch.
         */
        interface IDownloadAccountResponse {
            /**
             * The fixed string "identitytoolkit#DownloadAccountResponse".
             */
            kind: string;
            /**
             * The next page token. To be used in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * The user accounts data.
             */
            users: IUserInfo[];
        }
        /**
         * Response of getting account information.
         */
        interface IGetAccountInfoResponse {
            /**
             * The fixed string "identitytoolkit#GetAccountInfoResponse".
             */
            kind: string;
            /**
             * The info of the users.
             */
            users: IUserInfo[];
        }
        /**
         * Response of getting a code for user confirmation (reset password, change email etc.).
         */
        interface IGetOobConfirmationCodeResponse {
            /**
             * The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
             */
            kind: string;
            /**
             * The code to be send to the user.
             */
            oobCode: string;
        }
        /**
         * Request to get the IDP authentication URL.
         */
        interface IIdentitytoolkitRelyingpartyCreateAuthUriRequest {
            /**
             * The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
             */
            appId: string;
            /**
             * The relying party OAuth client ID.
             */
            clientId: string;
            /**
             * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
             */
            context: string;
            /**
             * The URI to which the IDP redirects the user after the federated login flow.
             */
            continueUri: string;
            /**
             * The email or federated ID of the user.
             */
            identifier: string;
            /**
             * Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
             */
            openidRealm: string;
            /**
             * The native app package for OTA installation.
             */
            otaApp: string;
            /**
             * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
             */
            providerId: string;
        }
        /**
         * Request to delete account.
         */
        interface IIdentitytoolkitRelyingpartyDeleteAccountRequest {
            /**
             * The local ID of the user.
             */
            localId: string;
        }
        /**
         * Request to download user account in batch.
         */
        interface IIdentitytoolkitRelyingpartyDownloadAccountRequest {
            /**
             * The max number of results to return in the response.
             */
            maxResults: number; // uint32
            /**
             * The token for the next page. This should be taken from the previous response.
             */
            nextPageToken: string;
        }
        /**
         * Request to get the account information.
         */
        interface IIdentitytoolkitRelyingpartyGetAccountInfoRequest {
            /**
             * The list of emails of the users to inquiry.
             */
            email: string[];
            /**
             * The GITKit token of the authenticated user.
             */
            idToken: string;
            /**
             * The list of local ID's of the users to inquiry.
             */
            localId: string[];
        }
        /**
         * Respone of getting public keys.
         */
        interface IIdentitytoolkitRelyingpartyGetPublicKeysResponse {
        }
        /**
         * Request to reset the password.
         */
        interface IIdentitytoolkitRelyingpartyResetPasswordRequest {
            /**
             * The email address of the user.
             */
            email: string;
            /**
             * The new password inputted by the user.
             */
            newPassword: string;
            /**
             * The old password inputted by the user.
             */
            oldPassword: string;
            /**
             * The confirmation code.
             */
            oobCode: string;
        }
        /**
         * Request to set the account information.
         */
        interface IIdentitytoolkitRelyingpartySetAccountInfoRequest {
            /**
             * The captcha challenge.
             */
            captchaChallenge: string;
            /**
             * Response to the captcha.
             */
            captchaResponse: string;
            /**
             * The name of the user.
             */
            displayName: string;
            /**
             * The email of the user.
             */
            email: string;
            /**
             * Mark the email as verified or not.
             */
            emailVerified: boolean;
            /**
             * The GITKit token of the authenticated user.
             */
            idToken: string;
            /**
             * The local ID of the user.
             */
            localId: string;
            /**
             * The out-of-band code of the change email request.
             */
            oobCode: string;
            /**
             * The new password of the user.
             */
            password: string;
            /**
             * The associated IDPs of the user.
             */
            provider: string[];
            /**
             * Mark the user to upgrade to federated login.
             */
            upgradeToFederatedLogin: boolean;
        }
        /**
         * Request to upload user account in batch.
         */
        interface IIdentitytoolkitRelyingpartyUploadAccountRequest {
            /**
             * The password hash algorithm.
             */
            hashAlgorithm: string;
            /**
             * Memory cost for hash calculation. Used by scrypt similar algorithms.
             */
            memoryCost: number; // int32
            /**
             * Rounds for hash calculation. Used by scrypt and similar algorithms.
             */
            rounds: number; // int32
            /**
             * The salt separator.
             */
            saltSeparator: string; // byte
            /**
             * The key for to hash the password.
             */
            signerKey: string; // byte
            /**
             * The account info to be stored.
             */
            users: IUserInfo[];
        }
        /**
         * Request to verify the IDP assertion.
         */
        interface IIdentitytoolkitRelyingpartyVerifyAssertionRequest {
            /**
             * The GITKit token for the non-trusted IDP pending to be confirmed by the user.
             */
            pendingIdToken: string;
            /**
             * The post body if the request is a HTTP POST.
             */
            postBody: string;
            /**
             * The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
             */
            requestUri: string;
        }
        /**
         * Request to verify the password.
         */
        interface IIdentitytoolkitRelyingpartyVerifyPasswordRequest {
            /**
             * The captcha challenge.
             */
            captchaChallenge: string;
            /**
             * Response to the captcha.
             */
            captchaResponse: string;
            /**
             * The email of the user.
             */
            email: string;
            /**
             * The password inputed by the user.
             */
            password: string;
            /**
             * The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
             */
            pendingIdToken: string;
        }
        /**
         * Request of getting a code for user confirmation (reset password, change email etc.)
         */
        interface IRelyingparty {
            /**
             * The recaptcha response from the user.
             */
            captchaResp: string;
            /**
             * The recaptcha challenge presented to the user.
             */
            challenge: string;
            /**
             * The email of the user.
             */
            email: string;
            /**
             * The user's Gitkit login token for email change.
             */
            idToken: string;
            /**
             * The fixed string "identitytoolkit#relyingparty".
             */
            kind: string;
            /**
             * The new email if the code is for email change.
             */
            newEmail: string;
            /**
             * The request type.
             */
            requestType: string;
            /**
             * The IP address of the user.
             */
            userIp: string;
        }
        /**
         * Response of resetting the password.
         */
        interface IResetPasswordResponse {
            /**
             * The user's email.
             */
            email: string;
            /**
             * The fixed string "identitytoolkit#ResetPasswordResponse".
             */
            kind: string;
        }
        /**
         * Respone of setting the account information.
         */
        interface ISetAccountInfoResponse {
            /**
             * The name of the user.
             */
            displayName: string;
            /**
             * The email of the user.
             */
            email: string;
            /**
             * The Gitkit id token to login the newly sign up user.
             */
            idToken: string;
            /**
             * The fixed string "identitytoolkit#SetAccountInfoResponse".
             */
            kind: string;
            /**
             * The user's profiles at the associated IdPs.
             */
            providerUserInfo: {
                displayName: string;
                photoUrl: string;
                providerId: string;
            }[];
        }
        /**
         * Respone of uploading accounts in batch.
         */
        interface IUploadAccountResponse {
            /**
             * The error encountered while processing the account info.
             */
            error: {
                index: number; // int32
                message: string;
            }[];
            /**
             * The fixed string "identitytoolkit#UploadAccountResponse".
             */
            kind: string;
        }
        /**
         * Template for an individual account info.
         */
        interface IUserInfo {
            /**
             * The name of the user.
             */
            displayName: string;
            /**
             * The email of the user.
             */
            email: string;
            /**
             * Whether the email has been verified.
             */
            emailVerified: boolean;
            /**
             * The local ID of the user.
             */
            localId: string;
            /**
             * The user's hashed password.
             */
            passwordHash: string; // byte
            /**
             * The timestamp when the password was last updated.
             */
            passwordUpdatedAt: number; // double
            /**
             * The URL of the user profile photo.
             */
            photoUrl: string;
            /**
             * The IDP of the user.
             */
            providerUserInfo: {
                displayName: string;
                federatedId: string;
                photoUrl: string;
                providerId: string;
            }[];
            /**
             * The user's password salt.
             */
            salt: string; // byte
            /**
             * Version of the user's password.
             */
            version: number; // int32
        }
        /**
         * Response of verifying the IDP assertion.
         */
        interface IVerifyAssertionResponse {
            /**
             * The action code.
             */
            action: string;
            /**
             * URL for OTA app installation.
             */
            appInstallationUrl: string;
            /**
             * The custom scheme used by mobile app.
             */
            appScheme: string;
            /**
             * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
             */
            context: string;
            /**
             * The birth date of the IdP account.
             */
            dateOfBirth: string;
            /**
             * The display name of the user.
             */
            displayName: string;
            /**
             * The email returned by the IdP. NOTE: The federated login user may not own the email.
             */
            email: string;
            /**
             * It's true if the email is recycled.
             */
            emailRecycled: boolean;
            /**
             * The value is true if the IDP is also the email provider. It means the user owns the email.
             */
            emailVerified: boolean;
            /**
             * The unique ID identifies the IdP account.
             */
            federatedId: string;
            /**
             * The first name of the user.
             */
            firstName: string;
            /**
             * The full name of the user.
             */
            fullName: string;
            /**
             * The ID token.
             */
            idToken: string;
            /**
             * It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
             */
            inputEmail: string;
            /**
             * The fixed string "identitytoolkit#VerifyAssertionResponse".
             */
            kind: string;
            /**
             * The language preference of the user.
             */
            language: string;
            /**
             * The last name of the user.
             */
            lastName: string;
            /**
             * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
             */
            localId: string;
            /**
             * Whether the assertion is from a non-trusted IDP and need account linking confirmation.
             */
            needConfirmation: boolean;
            /**
             * The nick name of the user.
             */
            nickName: string;
            /**
             * The user approved request token for the OpenID OAuth extension.
             */
            oauthRequestToken: string;
            /**
             * The scope for the OpenID OAuth extension.
             */
            oauthScope: string;
            /**
             * The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
             */
            originalEmail: string;
            /**
             * The URI of the public accessible profiel picture.
             */
            photoUrl: string;
            /**
             * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
             */
            providerId: string;
            /**
             * The timezone of the user.
             */
            timeZone: string;
            /**
             * When action is 'map', contains the idps which can be used for confirmation.
             */
            verifiedProvider: string[];
        }
        /**
         * Request of verifying the password.
         */
        interface IVerifyPasswordResponse {
            /**
             * The name of the user.
             */
            displayName: string;
            /**
             * The email returned by the IdP. NOTE: The federated login user may not own the email.
             */
            email: string;
            /**
             * The GITKit token for authenticated user.
             */
            idToken: string;
            /**
             * The fixed string "identitytoolkit#VerifyPasswordResponse".
             */
            kind: string;
            /**
             * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
             */
            localId: string;
            /**
             * The URI of the user's photo at IdP
             */
            photoUrl: string;
            /**
             * Whether the email is registered.
             */
            registered: boolean;
        }
    }
}
