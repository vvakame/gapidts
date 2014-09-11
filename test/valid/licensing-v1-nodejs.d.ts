// Type definitions for Google Enterprise License Manager API v1
// Project: https://developers.google.com/google-apps/licensing/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function licensing(version:string):typeof googleapis.licensing;
}
/**
 * Licensing API to view and manage license for your domain.
 */
declare module googleapis.licensing {
    var licenseAssignments: {
        /**
         * Revoke License.
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku
         * @params {string} userId email id or unique Id of the user
         */
        delete: (params: {
            productId: string;
            skuId: string;
            userId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Get license assignment of a particular product and sku for a user
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku
         * @params {string} userId email id or unique Id of the user
         */
        get: (params: {
            productId: string;
            skuId: string;
            userId: string;
        }, callback: (err: IErrorResponse, response: ILicenseAssignment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Assign License.
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku
         */
        insert: (params: {
            productId: string;
            skuId: string;
            resource?: ILicenseAssignmentInsert;
        }, callback: (err: IErrorResponse, response: ILicenseAssignment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List license assignments for given product of the customer.
         * @params {string} customerId CustomerId represents the customer for whom licenseassignments are queried
         * @params {number} maxResults Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
         * @params {string} pageToken Token to fetch the next page.Optional. By default server will return first page
         * @params {string} productId Name for product
         */
        listForProduct: (params: {
            customerId: string;
            maxResults?: number;
            pageToken?: string;
            productId: string;
        }, callback: (err: IErrorResponse, response: ILicenseAssignmentList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List license assignments for given product and sku of the customer.
         * @params {string} customerId CustomerId represents the customer for whom licenseassignments are queried
         * @params {number} maxResults Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
         * @params {string} pageToken Token to fetch the next page.Optional. By default server will return first page
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku
         */
        listForProductAndSku: (params: {
            customerId: string;
            maxResults?: number;
            pageToken?: string;
            productId: string;
            skuId: string;
        }, callback: (err: IErrorResponse, response: ILicenseAssignmentList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Assign License. This method supports patch semantics.
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku for which license would be revoked
         * @params {string} userId email id or unique Id of the user
         */
        patch: (params: {
            productId: string;
            skuId: string;
            userId: string;
            resource?: ILicenseAssignment;
        }, callback: (err: IErrorResponse, response: ILicenseAssignment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Assign License.
         * @params {string} productId Name for product
         * @params {string} skuId Name for sku for which license would be revoked
         * @params {string} userId email id or unique Id of the user
         */
        update: (params: {
            productId: string;
            skuId: string;
            userId: string;
            resource?: ILicenseAssignment;
        }, callback: (err: IErrorResponse, response: ILicenseAssignment, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * Template for LiscenseAssignment Resource
     */
    interface ILicenseAssignment {
        /**
         * ETag of the resource.
         */
        etags: string;
        /**
         * Identifies the resource as a LicenseAssignment.
         */
        kind: string;
        /**
         * Name of the product.
         */
        productId: string;
        /**
         * Link to this page.
         */
        selfLink: string;
        /**
         * Name of the sku of the product.
         */
        skuId: string;
        /**
         * Email id of the user.
         */
        userId: string;
    }
    /**
     * Template for LicenseAssignment Insert request
     */
    interface ILicenseAssignmentInsert {
        /**
         * Email id of the user
         */
        userId: string;
    }
    /**
     * LicesnseAssignment List for a given product/sku for a customer.
     */
    interface ILicenseAssignmentList {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * The LicenseAssignments in this page of results.
         */
        items: ILicenseAssignment[];
        /**
         * Identifies the resource as a collection of LicenseAssignments.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
    }
}
