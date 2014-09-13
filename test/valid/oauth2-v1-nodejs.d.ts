// Type definitions for Google Google OAuth2 API v1
// Project: https://developers.google.com/accounts/docs/OAuth2
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function oauth2(version:string):typeof googleapis.oauth2;
    function oauth2(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.oauth2;
}
/**
 * Lets you access OAuth2 protocol related APIs.
 */
declare module googleapis.oauth2 {
    var userinfo: {
        /**
         * Get user info
         */
        get: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IUserinfoplus, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        v2: {
            me: {
                /**
                 * Get user info
                 */
                get: (params: {
                    key?: string; // API_KEY
                    auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
                }, callback: (err: IErrorResponse, response: IUserinfoplus, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            };
        };
    };
    /**
     * Get token info
     * @params {string} access_token The oauth2 access token
     * @params {string} id_token The ID token
     */
    var tokeninfo: (params: {
        access_token?: string;
        id_token?: string;
        key?: string; // API_KEY
        auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
    }, callback: (err: IErrorResponse, response: ITokeninfo, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    interface ITokeninfo {
        /**
         * The access type granted with this token. It can be offline or online.
         */
        access_type: string;
        /**
         * Who is the intended audience for this token. In general the same as issued_to.
         */
        audience: string;
        /**
         * The email address of the user. Present only if the email scope is present in the request.
         */
        email: string;
        /**
         * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
         */
        email_verified: boolean;
        /**
         * The expiry time of the token, as number of seconds left until expiry.
         */
        expires_in: number; // int32
        /**
         * The issue time of the token, as number of seconds.
         */
        issued_at: number; // int32
        /**
         * To whom was the token issued to. In general the same as audience.
         */
        issued_to: string;
        /**
         * Who issued the token.
         */
        issuer: string;
        /**
         * Nonce of the id token.
         */
        nonce: string;
        /**
         * The space separated list of scopes granted to this token.
         */
        scope: string;
        /**
         * The Gaia obfuscated user id.
         */
        user_id: string;
        /**
         * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
         */
        verified_email: boolean;
    }
    interface IUserinfoplus {
        /**
         * The user's email address.
         */
        email: string;
        /**
         * The user's last name.
         */
        family_name: string;
        /**
         * The user's gender.
         */
        gender: string;
        /**
         * The user's first name.
         */
        given_name: string;
        /**
         * The hosted domain e.g. example.com if the user is Google apps user.
         */
        hd: string;
        /**
         * The focus obfuscated gaia id of the user.
         */
        id: string;
        /**
         * URL of the profile page.
         */
        link: string;
        /**
         * The user's preferred locale.
         */
        locale: string;
        /**
         * The user's full name.
         */
        name: string;
        /**
         * URL of the user's picture image.
         */
        picture: string;
        /**
         * Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
         */
        verified_email: boolean;
    }
}
