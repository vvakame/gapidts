// Type definitions for Google Enterprise Apps Reseller API v1sandbox
// Project: https://developers.google.com/google-apps/reseller/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/apps.order
//   Manage users on your domain
// https://www.googleapis.com/auth/apps.order.readonly
//   Manage users on your domain

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function reseller(version:string):typeof googleapis.reseller;
    function reseller(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.reseller;
}
/**
 * Lets you create and manage your customers and their subscriptions.
 */
declare module googleapis.reseller {
    var customers: {
        /**
         * Gets a customer resource if one exists and is owned by the reseller.
         * @params {string} customerId Id of the Customer
         */
        get: (params: {
            customerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICustomer, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a customer resource if one does not already exist.
         * @params {string} customerAuthToken An auth token needed for inserting a customer for which domain already exists. Can be generated at https://www.google.com/a/cpanel//TransferToken. Optional.
         */
        insert: (params: {
            customerAuthToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICustomer;
        }, callback: (err: IErrorResponse, response: ICustomer, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update a customer resource if one it exists and is owned by the reseller. This method supports patch semantics.
         * @params {string} customerId Id of the Customer
         */
        patch: (params: {
            customerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICustomer;
        }, callback: (err: IErrorResponse, response: ICustomer, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update a customer resource if one it exists and is owned by the reseller.
         * @params {string} customerId Id of the Customer
         */
        update: (params: {
            customerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ICustomer;
        }, callback: (err: IErrorResponse, response: ICustomer, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var subscriptions: {
        /**
         * Changes the plan of a subscription
         * @params {string} customerId Id of the Customer
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        changePlan: (params: {
            customerId: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChangePlanRequest;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes the renewal settings of a subscription
         * @params {string} customerId Id of the Customer
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        changeRenewalSettings: (params: {
            customerId: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRenewalSettings;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes the seats configuration of a subscription
         * @params {string} customerId Id of the Customer
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        changeSeats: (params: {
            customerId: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISeats;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Cancels/Downgrades a subscription.
         * @params {string} customerId Id of the Customer
         * @params {string} deletionType Whether the subscription is to be fully cancelled or downgraded
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        delete: (params: {
            customerId: string;
            deletionType: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets a subscription of the customer.
         * @params {string} customerId Id of the Customer
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        get: (params: {
            customerId: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates/Transfers a subscription for the customer.
         * @params {string} customerAuthToken An auth token needed for transferring a subscription. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken. Optional.
         * @params {string} customerId Id of the Customer
         */
        insert: (params: {
            customerAuthToken?: string;
            customerId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISubscription;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists subscriptions of a reseller, optionally filtered by a customer name prefix.
         * @params {string} customerAuthToken An auth token needed if the customer is not a resold customer of this reseller. Can be generated at https://www.google.com/a/cpanel/customer-domain/TransferToken.Optional.
         * @params {string} customerId Id of the Customer
         * @params {string} customerNamePrefix Prefix of the customer's domain name by which the subscriptions should be filtered. Optional
         * @params {number} maxResults Maximum number of results to return
         * @params {string} pageToken Token to specify next page in the list
         */
        list: (params: {
            customerAuthToken?: string;
            customerId?: string;
            customerNamePrefix?: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscriptions, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Starts paid service of a trial subscription
         * @params {string} customerId Id of the Customer
         * @params {string} subscriptionId Id of the subscription, which is unique for a customer
         */
        startPaidService: (params: {
            customerId: string;
            subscriptionId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * JSON template for address of a customer.
     */
    interface IAddress {
        /**
         * Address line 1 of the address.
         */
        addressLine1: string;
        /**
         * Address line 2 of the address.
         */
        addressLine2: string;
        /**
         * Address line 3 of the address.
         */
        addressLine3: string;
        /**
         * Name of the contact person.
         */
        contactName: string;
        /**
         * ISO 3166 country code.
         */
        countryCode: string;
        /**
         * Identifies the resource as a customer address.
         */
        kind: string;
        /**
         * Name of the locality. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
         */
        locality: string;
        /**
         * Name of the organization.
         */
        organizationName: string;
        /**
         * The postal code. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
         */
        postalCode: string;
        /**
         * Name of the region. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
         */
        region: string;
    }
    /**
     * JSON template for the ChangePlan rpc request.
     */
    interface IChangePlanRequest {
        /**
         * Identifies the resource as a subscription change plan request.
         */
        kind: string;
        /**
         * Name of the plan to change to.
         */
        planName: string;
        /**
         * Purchase order id for your order tracking purposes.
         */
        purchaseOrderId: string;
        /**
         * Number/Limit of seats in the new plan.
         */
        seats: ISeats;
    }
    /**
     * JSON template for a customer.
     */
    interface ICustomer {
        /**
         * The alternate email of the customer.
         */
        alternateEmail: string;
        /**
         * The domain name of the customer.
         */
        customerDomain: string;
        /**
         * The id of the customer.
         */
        customerId: string;
        /**
         * Identifies the resource as a customer.
         */
        kind: string;
        /**
         * The phone number of the customer.
         */
        phoneNumber: string;
        /**
         * The postal address of the customer.
         */
        postalAddress: IAddress;
        /**
         * Ui url for customer resource.
         */
        resourceUiUrl: string;
    }
    /**
     * JSON template for a subscription renewal settings.
     */
    interface IRenewalSettings {
        /**
         * Identifies the resource as a subscription renewal setting.
         */
        kind: string;
        /**
         * Subscription renewal type.
         */
        renewalType: string;
    }
    /**
     * JSON template for subscription seats.
     */
    interface ISeats {
        /**
         * Identifies the resource as a subscription change plan request.
         */
        kind: string;
        /**
         * Maximum number of seats that can be purchased. This needs to be provided only for a non-commitment plan. For a commitment plan it is decided by the contract.
         */
        maximumNumberOfSeats: number; // int32
        /**
         * Number of seats to purchase. This is applicable only for a commitment plan.
         */
        numberOfSeats: number; // int32
    }
    /**
     * JSON template for a subscription.
     */
    interface ISubscription {
        /**
         * Creation time of this subscription in milliseconds since Unix epoch.
         */
        creationTime: string; // int64
        /**
         * The id of the customer to whom the subscription belongs.
         */
        customerId: string;
        /**
         * Identifies the resource as a Subscription.
         */
        kind: string;
        /**
         * Plan details of the subscription
         */
        plan: {
            commitmentInterval: {
                endTime: string; // int64
                startTime: string; // int64
            };
            isCommitmentPlan: boolean;
            planName: string;
        };
        /**
         * Purchase order id for your order tracking purposes.
         */
        purchaseOrderId: string;
        /**
         * Renewal settings of the subscription.
         */
        renewalSettings: IRenewalSettings;
        /**
         * Ui url for subscription resource.
         */
        resourceUiUrl: string;
        /**
         * Number/Limit of seats in the new plan.
         */
        seats: ISeats;
        /**
         * Name of the sku for which this subscription is purchased.
         */
        skuId: string;
        /**
         * Status of the subscription.
         */
        status: string;
        /**
         * The id of the subscription.
         */
        subscriptionId: string;
        /**
         * Transfer related information for the subscription.
         */
        transferInfo: {
            minimumTransferableSeats: number; // int32
            transferabilityExpirationTime: string; // int64
        };
        /**
         * Trial Settings of the subscription.
         */
        trialSettings: {
            isInTrial: boolean;
            trialEndTime: string; // int64
        };
    }
    /**
     * JSON template for a subscription list.
     */
    interface ISubscriptions {
        /**
         * Identifies the resource as a collection of subscriptions.
         */
        kind: string;
        /**
         * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
         */
        nextPageToken: string;
        /**
         * The subscriptions in this page of results.
         */
        subscriptions: ISubscription[];
    }
}
