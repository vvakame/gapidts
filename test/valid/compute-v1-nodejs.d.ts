// Type definitions for Google Compute Engine API v1
// Project: https://developers.google.com/compute/docs/reference/latest/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/compute
//   View and manage your Google Compute Engine resources
// https://www.googleapis.com/auth/compute.readonly
//   View your Google Compute Engine resources
// https://www.googleapis.com/auth/devstorage.full_control
//   Manage your data and permissions in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_only
//   View your data in Google Cloud Storage
// https://www.googleapis.com/auth/devstorage.read_write
//   Manage your data in Google Cloud Storage

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function compute(version:string):typeof googleapis.compute;
    function compute(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.compute;
}
/**
 * API for the Google Compute Engine service.
 */
declare module googleapis.compute {
    var addresses: {
        /**
         * Retrieves the list of addresses grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAddressAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified address resource.
         * @params {string} address Name of the address resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        delete: (params: {
            address: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified address resource.
         * @params {string} address Name of the address resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        get: (params: {
            address: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAddress, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an address resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        insert: (params: {
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAddress;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of address resources contained within the specified region.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAddressList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var backendServices: {
        /**
         * Deletes the specified BackendService resource.
         * @params {string} backendService Name of the BackendService resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            backendService: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified BackendService resource.
         * @params {string} backendService Name of the BackendService resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            backendService: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IBackendService, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets the most recent health check results for this BackendService.
         * @params {string} backendService Name of the BackendService resource to which the queried instance belongs.
         * @params {string} project 
         */
        getHealth: (params: {
            backendService: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IResourceGroupReference;
        }, callback: (err: IErrorResponse, response: IBackendServiceGroupHealth, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a BackendService resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IBackendService;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of BackendService resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IBackendServiceList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the BackendService resource. This method supports patch semantics.
         * @params {string} backendService Name of the BackendService resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        patch: (params: {
            backendService: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IBackendService;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the BackendService resource.
         * @params {string} backendService Name of the BackendService resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        update: (params: {
            backendService: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IBackendService;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var diskTypes: {
        /**
         * Retrieves the list of disk type resources grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDiskTypeAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified disk type resource.
         * @params {string} diskType Name of the disk type resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            diskType: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDiskType, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of disk type resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDiskTypeList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var disks: {
        /**
         * Retrieves the list of disks grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDiskAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * 
         * @params {string} disk Name of the persistent disk resource to snapshot.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        createSnapshot: (params: {
            disk: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISnapshot;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified persistent disk resource.
         * @params {string} disk Name of the persistent disk resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        delete: (params: {
            disk: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified persistent disk resource.
         * @params {string} disk Name of the persistent disk resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            disk: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDisk, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a persistent disk resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} sourceImage Optional. Source image to restore onto a disk.
         * @params {string} zone Name of the zone scoping this request.
         */
        insert: (params: {
            project: string;
            sourceImage?: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDisk;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of persistent disk resources contained within the specified zone.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDiskList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var firewalls: {
        /**
         * Deletes the specified firewall resource.
         * @params {string} firewall Name of the firewall resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            firewall: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified firewall resource.
         * @params {string} firewall Name of the firewall resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            firewall: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IFirewall, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a firewall resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFirewall;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of firewall resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IFirewallList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the specified firewall resource with the data included in the request. This method supports patch semantics.
         * @params {string} firewall Name of the firewall resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        patch: (params: {
            firewall: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFirewall;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the specified firewall resource with the data included in the request.
         * @params {string} firewall Name of the firewall resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        update: (params: {
            firewall: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IFirewall;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var forwardingRules: {
        /**
         * Retrieves the list of forwarding rules grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IForwardingRuleAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified ForwardingRule resource.
         * @params {string} forwardingRule Name of the ForwardingRule resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        delete: (params: {
            forwardingRule: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified ForwardingRule resource.
         * @params {string} forwardingRule Name of the ForwardingRule resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        get: (params: {
            forwardingRule: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IForwardingRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a ForwardingRule resource in the specified project and region using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        insert: (params: {
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IForwardingRule;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of ForwardingRule resources available to the specified project and region.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IForwardingRuleList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes target url for forwarding rule.
         * @params {string} forwardingRule Name of the ForwardingRule resource in which target is to be set.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        setTarget: (params: {
            forwardingRule: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetReference;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var globalAddresses: {
        /**
         * Deletes the specified address resource.
         * @params {string} address Name of the address resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            address: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified address resource.
         * @params {string} address Name of the address resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            address: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAddress, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an address resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAddress;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of global address resources.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAddressList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var globalForwardingRules: {
        /**
         * Deletes the specified ForwardingRule resource.
         * @params {string} forwardingRule Name of the ForwardingRule resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            forwardingRule: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified ForwardingRule resource.
         * @params {string} forwardingRule Name of the ForwardingRule resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            forwardingRule: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IForwardingRule, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a ForwardingRule resource in the specified project and region using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IForwardingRule;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of ForwardingRule resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IForwardingRuleList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes target url for forwarding rule.
         * @params {string} forwardingRule Name of the ForwardingRule resource in which target is to be set.
         * @params {string} project Name of the project scoping this request.
         */
        setTarget: (params: {
            forwardingRule: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetReference;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var globalOperations: {
        /**
         * Retrieves the list of all operations grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperationAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified operation resource.
         * @params {string} operation Name of the operation resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            operation: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves the specified operation resource.
         * @params {string} operation Name of the operation resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            operation: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of operation resources contained within the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperationList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var httpHealthChecks: {
        /**
         * Deletes the specified HttpHealthCheck resource.
         * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            httpHealthCheck: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified HttpHealthCheck resource.
         * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            httpHealthCheck: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IHttpHealthCheck, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a HttpHealthCheck resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IHttpHealthCheck;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of HttpHealthCheck resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IHttpHealthCheckList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
         * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        patch: (params: {
            httpHealthCheck: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IHttpHealthCheck;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a HttpHealthCheck resource in the specified project using the data included in the request.
         * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to update.
         * @params {string} project Name of the project scoping this request.
         */
        update: (params: {
            httpHealthCheck: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IHttpHealthCheck;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var images: {
        /**
         * Deletes the specified image resource.
         * @params {string} image Name of the image resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            image: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets the deprecation status of an image. If no message body is given, clears the deprecation status instead.
         * @params {string} image Image name.
         * @params {string} project Name of the project scoping this request.
         */
        deprecate: (params: {
            image: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IDeprecationStatus;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified image resource.
         * @params {string} image Name of the image resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            image: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IImage, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an image resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IImage;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of image resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IImageList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var instances: {
        /**
         * Adds an access config to an instance's network interface.
         * @params {string} instance Instance name.
         * @params {string} networkInterface Network interface name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        addAccessConfig: (params: {
            instance: string;
            networkInterface: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAccessConfig;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * 
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstanceAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Attaches a disk resource to an instance.
         * @params {string} instance Instance name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        attachDisk: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAttachedDisk;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified instance resource.
         * @params {string} instance Name of the instance resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        delete: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes an access config from an instance's network interface.
         * @params {string} accessConfig Access config name.
         * @params {string} instance Instance name.
         * @params {string} networkInterface Network interface name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        deleteAccessConfig: (params: {
            accessConfig: string;
            instance: string;
            networkInterface: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Detaches a disk from an instance.
         * @params {string} deviceName Disk device name to detach.
         * @params {string} instance Instance name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        detachDisk: (params: {
            deviceName: string;
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified instance resource.
         * @params {string} instance Name of the instance resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstance, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified instance's serial port output.
         * @params {string} instance Name of the instance scoping this request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        getSerialPortOutput: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISerialPortOutput, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates an instance resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        insert: (params: {
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInstance;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of instance resources contained within the specified zone.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IInstanceList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Performs a hard reset on the instance.
         * @params {string} instance Name of the instance scoping this request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        reset: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets the auto-delete flag for a disk attached to an instance
         * @params {boolean} autoDelete Whether to auto-delete the disk when the instance is deleted.
         * @params {string} deviceName Disk device name to modify.
         * @params {string} instance Instance name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        setDiskAutoDelete: (params: {
            autoDelete: boolean;
            deviceName: string;
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets metadata for the specified instance to the data included in the request.
         * @params {string} instance Name of the instance scoping this request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        setMetadata: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IMetadata;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets an instance's scheduling options.
         * @params {string} instance Instance name.
         * @params {string} project Project name.
         * @params {string} zone Name of the zone scoping this request.
         */
        setScheduling: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IScheduling;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets tags for the specified instance to the data included in the request.
         * @params {string} instance Name of the instance scoping this request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        setTags: (params: {
            instance: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITags;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var licenses: {
        /**
         * Returns the specified license resource.
         * @params {string} license Name of the license resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            license: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ILicense, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var machineTypes: {
        /**
         * Retrieves the list of machine type resources grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IMachineTypeAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified machine type resource.
         * @params {string} machineType Name of the machine type resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            machineType: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IMachineType, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of machine type resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IMachineTypeList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var networks: {
        /**
         * Deletes the specified network resource.
         * @params {string} network Name of the network resource to delete.
         * @params {string} project Name of the project scoping this request.
         */
        delete: (params: {
            network: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified network resource.
         * @params {string} network Name of the network resource to return.
         * @params {string} project Name of the project scoping this request.
         */
        get: (params: {
            network: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: INetwork, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a network resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: INetwork;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of network resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: INetworkList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var projects: {
        /**
         * Returns the specified project resource.
         * @params {string} project Name of the project resource to retrieve.
         */
        get: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IProject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets metadata common to all instances within the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        setCommonInstanceMetadata: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IMetadata;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Sets usage export location
         * @params {string} project Name of the project scoping this request.
         */
        setUsageExportBucket: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUsageExportLocation;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var regionOperations: {
        /**
         * Deletes the specified region-specific operation resource.
         * @params {string} operation Name of the operation resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        delete: (params: {
            operation: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves the specified region-specific operation resource.
         * @params {string} operation Name of the operation resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the zone scoping this request.
         */
        get: (params: {
            operation: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of operation resources contained within the specified region.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperationList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var regions: {
        /**
         * Returns the specified region resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region resource to return.
         */
        get: (params: {
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRegion, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of region resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRegionList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var routes: {
        /**
         * Deletes the specified route resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} route Name of the route resource to delete.
         */
        delete: (params: {
            project: string;
            route: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified route resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} route Name of the route resource to return.
         */
        get: (params: {
            project: string;
            route: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRoute, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a route resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRoute;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of route resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRouteList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var snapshots: {
        /**
         * Deletes the specified persistent disk snapshot resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} snapshot Name of the persistent disk snapshot resource to delete.
         */
        delete: (params: {
            project: string;
            snapshot: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified persistent disk snapshot resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} snapshot Name of the persistent disk snapshot resource to return.
         */
        get: (params: {
            project: string;
            snapshot: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISnapshot, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of persistent disk snapshot resources contained within the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISnapshotList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var targetHttpProxies: {
        /**
         * Deletes the specified TargetHttpProxy resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} targetHttpProxy Name of the TargetHttpProxy resource to delete.
         */
        delete: (params: {
            project: string;
            targetHttpProxy: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified TargetHttpProxy resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} targetHttpProxy Name of the TargetHttpProxy resource to return.
         */
        get: (params: {
            project: string;
            targetHttpProxy: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetHttpProxy, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a TargetHttpProxy resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetHttpProxy;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of TargetHttpProxy resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetHttpProxyList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes the URL map for TargetHttpProxy.
         * @params {string} project Name of the project scoping this request.
         * @params {string} targetHttpProxy Name of the TargetHttpProxy resource whose URL map is to be set.
         */
        setUrlMap: (params: {
            project: string;
            targetHttpProxy: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUrlMapReference;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var targetInstances: {
        /**
         * Retrieves the list of target instances grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetInstanceAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified TargetInstance resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} targetInstance Name of the TargetInstance resource to delete.
         * @params {string} zone Name of the zone scoping this request.
         */
        delete: (params: {
            project: string;
            targetInstance: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified TargetInstance resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} targetInstance Name of the TargetInstance resource to return.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            project: string;
            targetInstance: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetInstance, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a TargetInstance resource in the specified project and zone using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        insert: (params: {
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetInstance;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of TargetInstance resources available to the specified project and zone.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetInstanceList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var targetPools: {
        /**
         * Adds health check URL to targetPool.
         * @params {string} project 
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to which health_check_url is to be added.
         */
        addHealthCheck: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetPoolsAddHealthCheckRequest;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Adds instance url to targetPool.
         * @params {string} project 
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to which instance_url is to be added.
         */
        addInstance: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetPoolsAddInstanceRequest;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of target pools grouped by scope.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        aggregatedList: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetPoolAggregatedList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the specified TargetPool resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to delete.
         */
        delete: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified TargetPool resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to return.
         */
        get: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetPool, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets the most recent health check results for each IP for the given instance that is referenced by given TargetPool.
         * @params {string} project 
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to which the queried instance belongs.
         */
        getHealth: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IInstanceReference;
        }, callback: (err: IErrorResponse, response: ITargetPoolInstanceHealth, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a TargetPool resource in the specified project and region using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        insert: (params: {
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetPool;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of TargetPool resources available to the specified project and region.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITargetPoolList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Removes health check URL from targetPool.
         * @params {string} project 
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to which health_check_url is to be removed.
         */
        removeHealthCheck: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetPoolsRemoveHealthCheckRequest;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Removes instance URL from targetPool.
         * @params {string} project 
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource to which instance_url is to be removed.
         */
        removeInstance: (params: {
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetPoolsRemoveInstanceRequest;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Changes backup pool configurations.
         * @params {number} failoverRatio New failoverRatio value for the containing target pool.
         * @params {string} project Name of the project scoping this request.
         * @params {string} region Name of the region scoping this request.
         * @params {string} targetPool Name of the TargetPool resource for which the backup is to be set.
         */
        setBackup: (params: {
            failoverRatio?: number;
            project: string;
            region: string;
            targetPool: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITargetReference;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var urlMaps: {
        /**
         * Deletes the specified UrlMap resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} urlMap Name of the UrlMap resource to delete.
         */
        delete: (params: {
            project: string;
            urlMap: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns the specified UrlMap resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} urlMap Name of the UrlMap resource to return.
         */
        get: (params: {
            project: string;
            urlMap: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IUrlMap, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a UrlMap resource in the specified project using the data included in the request.
         * @params {string} project Name of the project scoping this request.
         */
        insert: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUrlMap;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of UrlMap resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IUrlMapList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the UrlMap resource. This method supports patch semantics.
         * @params {string} project Name of the project scoping this request.
         * @params {string} urlMap Name of the UrlMap resource to update.
         */
        patch: (params: {
            project: string;
            urlMap: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUrlMap;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the UrlMap resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} urlMap Name of the UrlMap resource to update.
         */
        update: (params: {
            project: string;
            urlMap: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUrlMap;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Run static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
         * @params {string} project Name of the project scoping this request.
         * @params {string} urlMap Name of the UrlMap resource to be validated as.
         */
        validate: (params: {
            project: string;
            urlMap: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IUrlMapsValidateRequest;
        }, callback: (err: IErrorResponse, response: IUrlMapsValidateResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var zoneOperations: {
        /**
         * Deletes the specified zone-specific operation resource.
         * @params {string} operation Name of the operation resource to delete.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        delete: (params: {
            operation: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Retrieves the specified zone-specific operation resource.
         * @params {string} operation Name of the operation resource to return.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        get: (params: {
            operation: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of operation resources contained within the specified zone.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperationList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var zones: {
        /**
         * Returns the specified zone resource.
         * @params {string} project Name of the project scoping this request.
         * @params {string} zone Name of the zone resource to return.
         */
        get: (params: {
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IZone, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Retrieves the list of zone resources available to the specified project.
         * @params {string} filter Optional. Filter expression for filtering listed resources.
         * @params {number} maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @params {string} pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @params {string} project Name of the project scoping this request.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IZoneList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * An access configuration attached to an instance's network interface.
     */
    interface IAccessConfig {
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of this access configuration.
         */
        name: string;
        /**
         * An external IP address associated with this instance. Specify an unused static IP address available to the project. If not specified, the external IP will be drawn from a shared ephemeral pool.
         */
        natIP: string;
        /**
         * Type of configuration. Must be set to "ONE_TO_ONE_NAT". This configures port-for-port NAT to the internet.
         */
        type: string;
    }
    /**
     * A reserved address resource.
     */
    interface IAddress {
        /**
         * The IP address represented by this resource.
         */
        address: string;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * URL of the region where the regional address resides (output only). This field is not applicable to global addresses.
         */
        region: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The status of the address (output only).
         */
        status: string;
        /**
         * The resources that are using this address resource.
         */
        users: string[];
    }
    interface IAddressAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped address lists.
         */
        items: {
            [name:string]: IAddressesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of address resources.
     */
    interface IAddressList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The address resources.
         */
        items: IAddress[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
    }
    interface IAddressesScopedList {
        /**
         * List of addresses contained in this scope.
         */
        addresses: IAddress[];
        /**
         * Informational warning which replaces the list of addresses when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * An instance-attached disk resource.
     */
    interface IAttachedDisk {
        /**
         * Whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
         */
        autoDelete: boolean;
        /**
         * Indicates that this is a boot disk. VM will use the first partition of the disk for its root filesystem.
         */
        boot: boolean;
        /**
         * Persistent disk only; must be unique within the instance when specified. This represents a unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, a default will be chosen by the system.
         */
        deviceName: string;
        /**
         * A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, the server will choose an appropriate value (output only).
         */
        index: number; // int32
        /**
         * Initialization parameters.
         */
        initializeParams: IAttachedDiskInitializeParams;
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Public visible licenses.
         */
        licenses: string[];
        /**
         * The mode in which to attach this disk, either "READ_WRITE" or "READ_ONLY".
         */
        mode: string;
        /**
         * Persistent disk only; the URL of the persistent disk resource.
         */
        source: string;
        /**
         * Type of the disk, either "SCRATCH" or "PERSISTENT". Note that persistent disks must be created before you can specify them here.
         */
        type: string;
    }
    /**
     * Initialization parameters for the new disk (input-only). Can only be specified on the boot disk or local SSDs. Mutually exclusive with 'source'.
     */
    interface IAttachedDiskInitializeParams {
        /**
         * Name of the disk (when not provided defaults to the name of the instance).
         */
        diskName: string;
        /**
         * Size of the disk in base-2 GB.
         */
        diskSizeGb: string; // int64
        /**
         * URL of the disk type resource describing which disk type to use to create the disk; provided by the client when the disk is created.
         */
        diskType: string;
        /**
         * The source image used to create this disk.
         */
        sourceImage: string;
    }
    /**
     * Message containing information of one individual backend.
     */
    interface IBackend {
        /**
         * The balancing mode of this backend, default is UTILIZATION.
         */
        balancingMode: string;
        /**
         * The multiplier (a value between 0 and 1e6) of the max capacity (CPU or RPS, depending on 'balancingMode') the group should serve up to. 0 means the group is totally drained. Default value is 1. Valid range is [0, 1e6].
         */
        capacityScaler: number; // float
        /**
         * An optional textual description of the resource, which is provided by the client when the resource is created.
         */
        description: string;
        /**
         * URL of a zonal Cloud Resource View resource. This resource view defines the list of instances that serve traffic. Member virtual machine instances from each resource view must live in the same zone as the resource view itself. No two backends in a backend service are allowed to use same Resource View resource.
         */
        group: string;
        /**
         * The max RPS of the group. Can be used with either balancing mode, but required if RATE mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
         */
        maxRate: number; // int32
        /**
         * The max RPS that a single backed instance can handle. This is used to calculate the capacity of the group. Can be used in either balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
         */
        maxRatePerInstance: number; // float
        /**
         * Used when 'balancingMode' is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0, 1].
         */
        maxUtilization: number; // float
    }
    /**
     * A BackendService resource. This resource defines a group of backend VMs together with their serving capacity.
     */
    interface IBackendService {
        /**
         * The list of backends that serve this BackendService.
         */
        backends: IBackend[];
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
         */
        fingerprint: string; // byte
        /**
         * The list of URLs to the HttpHealthCheck resource for health checking this BackendService. Currently at most one health check can be specified, and a health check is required.
         */
        healthChecks: string[];
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * The TCP port to connect on the backend. The default value is 80.
         */
        port: number; // int32
        /**
         * Name of backend port. The same name should appear in the resource views referenced by this service. Required.
         */
        portName: string;
        protocol: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.
         */
        timeoutSec: number; // int32
    }
    interface IBackendServiceGroupHealth {
        healthStatus: IHealthStatus[];
        /**
         * Type of resource.
         */
        kind: string;
    }
    /**
     * Contains a list of BackendService resources.
     */
    interface IBackendServiceList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The BackendService resources.
         */
        items: IBackendService[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Deprecation status for a public resource.
     */
    interface IDeprecationStatus {
        /**
         * An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DELETED.
         */
        deleted: string;
        /**
         * An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to DEPRECATED.
         */
        deprecated: string;
        /**
         * An optional RFC3339 timestamp on or after which the deprecation state of this resource will be changed to OBSOLETE.
         */
        obsolete: string;
        /**
         * A URL of the suggested replacement for the deprecated resource. The deprecated resource and its replacement must be resources of the same kind.
         */
        replacement: string;
        /**
         * The deprecation state. Can be "DEPRECATED", "OBSOLETE", or "DELETED". Operations which create a new resource using a "DEPRECATED" resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. New uses of "OBSOLETE" or "DELETED" resources will result in an error.
         */
        state: string;
    }
    /**
     * A persistent disk resource.
     */
    interface IDisk {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Public visible licenses.
         */
        licenses: string[];
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Internal use only.
         */
        options: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * Size of the persistent disk, specified in GB. This parameter is optional when creating a disk from a disk image or a snapshot, otherwise it is required.
         */
        sizeGb: string; // int64
        /**
         * The source image used to create this disk. Once the source image has been deleted from the system, this field will not be set, even if an image with the same name has been re-created.
         */
        sourceImage: string;
        /**
         * The 'id' value of the image used to create this disk. This value may be used to determine whether the disk was created from the current or a previous instance of a given image.
         */
        sourceImageId: string;
        /**
         * The source snapshot used to create this disk. Once the source snapshot has been deleted from the system, this field will be cleared, and will not be set even if a snapshot with the same name has been re-created.
         */
        sourceSnapshot: string;
        /**
         * The 'id' value of the snapshot used to create this disk. This value may be used to determine whether the disk was created from the current or a previous instance of a given disk snapshot.
         */
        sourceSnapshotId: string;
        /**
         * The status of disk creation (output only).
         */
        status: string;
        /**
         * URL of the disk type resource describing which disk type to use to create the disk; provided by the client when the disk is created.
         */
        type: string;
        /**
         * URL of the zone where the disk resides (output only).
         */
        zone: string;
    }
    interface IDiskAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped disk lists.
         */
        items: {
            [name:string]: IDisksScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of persistent disk resources.
     */
    interface IDiskList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The persistent disk resources.
         */
        items: IDisk[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * A disk type resource.
     */
    interface IDiskType {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * Server defined default disk size in gb (output only).
         */
        defaultDiskSizeGb: string; // int64
        /**
         * The deprecation status associated with this disk type.
         */
        deprecated: IDeprecationStatus;
        /**
         * An optional textual description of the resource.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * An optional textual descroption of the valid disk size, e.g., "10GB-10TB".
         */
        validDiskSize: string;
        /**
         * Url of the zone where the disk type resides (output only).
         */
        zone: string;
    }
    interface IDiskTypeAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped disk type lists.
         */
        items: {
            [name:string]: IDiskTypesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of disk type resources.
     */
    interface IDiskTypeList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The disk type resources.
         */
        items: IDiskType[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IDiskTypesScopedList {
        /**
         * List of disk types contained in this scope.
         */
        diskTypes: IDiskType[];
        /**
         * Informational warning which replaces the list of disk types when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    interface IDisksScopedList {
        /**
         * List of disks contained in this scope.
         */
        disks: IDisk[];
        /**
         * Informational warning which replaces the list of disks when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * A firewall resource.
     */
    interface IFirewall {
        /**
         * The list of rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
         */
        allowed: {
            IPProtocol: string;
            ports: string[];
        }[];
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * URL of the network to which this firewall is applied; provided by the client when the firewall is created.
         */
        network: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * A list of IP address blocks expressed in CIDR format which this rule applies to. One or both of sourceRanges and sourceTags may be set; an inbound connection is allowed if either the range or the tag of the source matches.
         */
        sourceRanges: string[];
        /**
         * A list of instance tags which this rule applies to. One or both of sourceRanges and sourceTags may be set; an inbound connection is allowed if either the range or the tag of the source matches.
         */
        sourceTags: string[];
        /**
         * A list of instance tags indicating sets of instances located on network which may make network connections as specified in allowed. If no targetTags are specified, the firewall rule applies to all instances on the specified network.
         */
        targetTags: string[];
    }
    /**
     * Contains a list of firewall resources.
     */
    interface IFirewallList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The firewall resources.
         */
        items: IFirewall[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * A ForwardingRule resource. A ForwardingRule resource specifies which pool of target VMs to forward a packet to if it matches the given [IPAddress, IPProtocol, portRange] tuple.
     */
    interface IForwardingRule {
        /**
         * Value of the reserved IP address that this forwarding rule is serving on behalf of. For global forwarding rules, the address must be a global IP; for regional forwarding rules, the address must live in the same region as the forwarding rule. If left empty (default value), an ephemeral IP from the same scope (global or regional) will be assigned.
         */
        IPAddress: string;
        /**
         * The IP protocol to which this rule applies, valid options are 'TCP', 'UDP', 'ESP', 'AH' or 'SCTP'.
         */
        IPProtocol: string;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Applicable only when 'IPProtocol' is 'TCP', 'UDP' or 'SCTP', only packets addressed to ports in the specified range will be forwarded to 'target'. If 'portRange' is left empty (default value), all ports are forwarded. Forwarding rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges.
         */
        portRange: string;
        /**
         * URL of the region where the regional forwarding rule resides (output only). This field is not applicable to global forwarding rules.
         */
        region: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global TargetHttpProxy resource.
         */
        target: string;
    }
    interface IForwardingRuleAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped forwarding rule lists.
         */
        items: {
            [name:string]: IForwardingRulesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of ForwardingRule resources.
     */
    interface IForwardingRuleList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The ForwardingRule resources.
         */
        items: IForwardingRule[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IForwardingRulesScopedList {
        /**
         * List of forwarding rules contained in this scope.
         */
        forwardingRules: IForwardingRule[];
        /**
         * Informational warning which replaces the list of forwarding rules when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    interface IHealthCheckReference {
        healthCheck: string;
    }
    interface IHealthStatus {
        /**
         * Health state of the instance.
         */
        healthState: string;
        /**
         * URL of the instance resource.
         */
        instance: string;
        /**
         * The IP address represented by this resource.
         */
        ipAddress: string;
        /**
         * The port on the instance.
         */
        port: number; // int32
    }
    /**
     * A host-matching rule for a URL. If matched, will use the named PathMatcher to select the BackendService.
     */
    interface IHostRule {
        description: string;
        /**
         * The list of host patterns to match. They must be valid hostnames except that they may start with *. or *-. The * acts like a glob and will match any string of atoms (separated by .s and -s) to the left.
         */
        hosts: string[];
        /**
         * The name of the PathMatcher to match the path portion of the URL, if the this HostRule matches the URL's host portion.
         */
        pathMatcher: string;
    }
    /**
     * An HttpHealthCheck resource. This resource defines a template for how individual VMs should be checked for health, via HTTP.
     */
    interface IHttpHealthCheck {
        /**
         * How often (in seconds) to send a health check. The default value is 5 seconds.
         */
        checkIntervalSec: number; // int32
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * A so-far unhealthy VM will be marked healthy after this many consecutive successes. The default value is 2.
         */
        healthyThreshold: number; // int32
        /**
         * The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
         */
        host: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * The TCP port number for the HTTP health check request. The default value is 80.
         */
        port: number; // int32
        /**
         * The request path of the HTTP health check request. The default value is "/".
         */
        requestPath: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * How long (in seconds) to wait before claiming failure. The default value is 5 seconds.
         */
        timeoutSec: number; // int32
        /**
         * A so-far healthy VM will be marked unhealthy after this many consecutive failures. The default value is 2.
         */
        unhealthyThreshold: number; // int32
    }
    /**
     * Contains a list of HttpHealthCheck resources.
     */
    interface IHttpHealthCheckList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The HttpHealthCheck resources.
         */
        items: IHttpHealthCheck[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * A disk image resource.
     */
    interface IImage {
        /**
         * Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
         */
        archiveSizeBytes: string; // int64
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The deprecation status associated with this image.
         */
        deprecated: IDeprecationStatus;
        /**
         * Textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Size of the image when restored onto a disk (in GiB).
         */
        diskSizeGb: string; // int64
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Public visible licenses.
         */
        licenses: string[];
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * The raw disk image parameters.
         */
        rawDisk: {
            containerType: string;
            sha1Checksum: string;
            source: string;
        };
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The source disk used to create this image. Once the source disk has been deleted from the system, this field will be cleared, and will not be set even if a disk with the same name has been re-created.
         */
        sourceDisk: string;
        /**
         * The 'id' value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous instance of a given disk name.
         */
        sourceDiskId: string;
        /**
         * Must be "RAW"; provided by the client when the disk image is created.
         */
        sourceType: string;
        /**
         * Status of the image (output only). It will be one of the following READY - after image has been successfully created and is ready for use FAILED - if creating the image fails for some reason PENDING - the image creation is in progress An image can be used to create other resources suck as instances only after the image has been successfully created and the status is set to READY.
         */
        status: string;
    }
    /**
     * Contains a list of disk image resources.
     */
    interface IImageList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The disk image resources.
         */
        items: IImage[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * An instance resource.
     */
    interface IInstance {
        /**
         * Allows this instance to send packets with source IP addresses other than its own and receive packets with destination IP addresses other than its own. If this instance will be used as an IP gateway or it will be set as the next-hop in a Route resource, say true. If unsure, leave this set to false.
         */
        canIpForward: boolean;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Array of disks associated with this instance. Persistent disks must be created before you can assign them.
         */
        disks: IAttachedDisk[];
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * URL of the machine type resource describing which machine type to use to host the instance; provided by the client when the instance is created.
         */
        machineType: string;
        /**
         * Metadata key/value pairs assigned to this instance. Consists of custom metadata or predefined keys; see Instance documentation for more information.
         */
        metadata: IMetadata;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Array of configurations for this interface. This specifies how this interface is configured to interact with other network services, such as connecting to the internet. Currently, ONE_TO_ONE_NAT is the only access config supported. If there are no accessConfigs specified, then this instance will have no external internet access.
         */
        networkInterfaces: INetworkInterface[];
        /**
         * Scheduling options for this instance.
         */
        scheduling: IScheduling;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
        /**
         * A list of service accounts each with specified scopes, for which access tokens are to be made available to the instance through metadata queries.
         */
        serviceAccounts: IServiceAccount[];
        /**
         * Instance status. One of the following values: "PROVISIONING", "STAGING", "RUNNING", "STOPPING", "STOPPED", "TERMINATED" (output only).
         */
        status: string;
        /**
         * An optional, human-readable explanation of the status (output only).
         */
        statusMessage: string;
        /**
         * A list of tags to be applied to this instance. Used to identify valid sources or targets for network firewalls. Provided by the client on instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035.
         */
        tags: ITags;
        /**
         * URL of the zone where the instance resides (output only).
         */
        zone: string;
    }
    interface IInstanceAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped instance lists.
         */
        items: {
            [name:string]: IInstancesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of instance resources.
     */
    interface IInstanceList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A list of instance resources.
         */
        items: IInstance[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IInstanceReference {
        instance: string;
    }
    interface IInstancesScopedList {
        /**
         * List of instances contained in this scope.
         */
        instances: IInstance[];
        /**
         * Informational warning which replaces the list of instances when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * A license resource.
     */
    interface ILicense {
        /**
         * If true, the customer will be charged license fee for running software that contains this license on an instance.
         */
        chargesUseFee: boolean;
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
    }
    /**
     * A machine type resource.
     */
    interface IMachineType {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The deprecation status associated with this machine type.
         */
        deprecated: IDeprecationStatus;
        /**
         * An optional textual description of the resource.
         */
        description: string;
        /**
         * Count of CPUs exposed to the instance.
         */
        guestCpus: number; // int32
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Space allotted for the image, defined in GB.
         */
        imageSpaceGb: number; // int32
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Maximum persistent disks allowed.
         */
        maximumPersistentDisks: number; // int32
        /**
         * Maximum total persistent disks size (GB) allowed.
         */
        maximumPersistentDisksSizeGb: string; // int64
        /**
         * Physical memory assigned to the instance, defined in MB.
         */
        memoryMb: number; // int32
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * List of extended scratch disks assigned to the instance.
         */
        scratchDisks: {
            diskGb: number; // int32
        }[];
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * Url of the zone where the machine type resides (output only).
         */
        zone: string;
    }
    interface IMachineTypeAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped machine type lists.
         */
        items: {
            [name:string]: IMachineTypesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of machine type resources.
     */
    interface IMachineTypeList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The machine type resources.
         */
        items: IMachineType[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IMachineTypesScopedList {
        /**
         * List of machine types contained in this scope.
         */
        machineTypes: IMachineType[];
        /**
         * Informational warning which replaces the list of machine types when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * A metadata key/value entry.
     */
    interface IMetadata {
        /**
         * Fingerprint of this resource. A hash of the metadata's contents. This field is used for optimistic locking. An up-to-date metadata fingerprint must be provided in order to modify metadata.
         */
        fingerprint: string; // byte
        /**
         * Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
         */
        items: {
            key: string;
            value: string;
        }[];
        /**
         * Type of the resource.
         */
        kind: string;
    }
    /**
     * A network resource.
     */
    interface INetwork {
        /**
         * Required; The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
         */
        IPv4Range: string;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * An optional address that is used for default routing to other networks. This must be within the range specified by IPv4Range, and is typically the first usable address in that range. If not specified, the default value is the first usable address in IPv4Range.
         */
        gatewayIPv4: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
    }
    /**
     * A network interface resource attached to an instance.
     */
    interface INetworkInterface {
        /**
         * Array of configurations for this interface. This specifies how this interface is configured to interact with other network services, such as connecting to the internet. Currently, ONE_TO_ONE_NAT is the only access config supported. If there are no accessConfigs specified, then this instance will have no external internet access.
         */
        accessConfigs: IAccessConfig[];
        /**
         * Name of the network interface, determined by the server; for network devices, these are e.g. eth0, eth1, etc. (output only).
         */
        name: string;
        /**
         * URL of the network resource attached to this interface.
         */
        network: string;
        /**
         * An optional IPV4 internal network address assigned to the instance for this network interface (output only).
         */
        networkIP: string;
    }
    /**
     * Contains a list of network resources.
     */
    interface INetworkList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The network resources.
         */
        items: INetwork[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * An operation resource, used to manage asynchronous API requests.
     */
    interface IOperation {
        /**
         * An optional identifier specified by the client when the mutation was initiated. Must be unique for all operation resources in the project (output only).
         */
        clientOperationId: string;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The time that this operation was completed. This is in RFC 3339 format (output only).
         */
        endTime: string;
        /**
         * If errors occurred during processing of this operation, this field will be populated (output only).
         */
        error: {
            errors: {
                code: string;
                location: string;
                message: string;
            }[];
        };
        /**
         * If operation fails, the HTTP error message returned, e.g. NOT FOUND. (output only).
         */
        httpErrorMessage: string;
        /**
         * If operation fails, the HTTP error status code returned, e.g. 404. (output only).
         */
        httpErrorStatusCode: number; // int32
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * The time that this operation was requested. This is in RFC 3339 format (output only).
         */
        insertTime: string;
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource (output only).
         */
        name: string;
        /**
         * Type of the operation. Examples include "insert", "update", and "delete" (output only).
         */
        operationType: string;
        /**
         * An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the operation will be complete. This number should be monotonically increasing as the operation progresses (output only).
         */
        progress: number; // int32
        /**
         * URL of the region where the operation resides (output only).
         */
        region: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The time that this operation was started by the server. This is in RFC 3339 format (output only).
         */
        startTime: string;
        /**
         * Status of the operation. Can be one of the following: "PENDING", "RUNNING", or "DONE" (output only).
         */
        status: string;
        /**
         * An optional textual description of the current status of the operation (output only).
         */
        statusMessage: string;
        /**
         * Unique target id which identifies a particular incarnation of the target (output only).
         */
        targetId: string; // uint64
        /**
         * URL of the resource the operation is mutating (output only).
         */
        targetLink: string;
        /**
         * User who requested the operation, for example "user@example.com" (output only).
         */
        user: string;
        /**
         * If warning messages generated during processing of this operation, this field will be populated (output only).
         */
        warnings: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        }[];
        /**
         * URL of the zone where the operation resides (output only).
         */
        zone: string;
    }
    interface IOperationAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped operation lists.
         */
        items: {
            [name:string]: IOperationsScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of operation resources.
     */
    interface IOperationList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The operation resources.
         */
        items: IOperation[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IOperationsScopedList {
        /**
         * List of operations contained in this scope.
         */
        operations: IOperation[];
        /**
         * Informational warning which replaces the list of operations when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * A matcher for the path portion of the URL. The BackendService from the longest-matched rule will serve the URL. If no rule was matched, the default_service will be used.
     */
    interface IPathMatcher {
        /**
         * The URL to the BackendService resource. This will be used if none of the 'pathRules' defined by this PathMatcher is met by the URL's path portion.
         */
        defaultService: string;
        description: string;
        /**
         * The name to which this PathMatcher is referred by the HostRule.
         */
        name: string;
        /**
         * The list of path rules.
         */
        pathRules: IPathRule[];
    }
    /**
     * A path-matching rule for a URL. If matched, will use the specified BackendService to handle the traffic arriving at this URL.
     */
    interface IPathRule {
        /**
         * The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
         */
        paths: string[];
        /**
         * The URL of the BackendService resource if this rule is matched.
         */
        service: string;
    }
    /**
     * A project resource. Projects can be created only in the APIs Console. Unless marked otherwise, values can only be modified in the console.
     */
    interface IProject {
        /**
         * Metadata key/value pairs available to all instances contained in this project.
         */
        commonInstanceMetadata: IMetadata;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * Quotas assigned to this project.
         */
        quotas: IQuota[];
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The location in Cloud Storage and naming method of the daily usage report.
         */
        usageExportLocation: IUsageExportLocation;
    }
    /**
     * A quotas entry.
     */
    interface IQuota {
        /**
         * Quota limit for this metric.
         */
        limit: number; // double
        /**
         * Name of the quota metric.
         */
        metric: string;
        /**
         * Current usage of this metric.
         */
        usage: number; // double
    }
    /**
     * Region resource.
     */
    interface IRegion {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The deprecation status associated with this region.
         */
        deprecated: IDeprecationStatus;
        /**
         * Textual description of the resource.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * Quotas assigned to this region.
         */
        quotas: IQuota[];
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * Status of the region, "UP" or "DOWN".
         */
        status: string;
        /**
         * A list of zones homed in this region, in the form of resource URLs.
         */
        zones: string[];
    }
    /**
     * Contains a list of region resources.
     */
    interface IRegionList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The region resources.
         */
        items: IRegion[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IResourceGroupReference {
        /**
         * A URI referencing one of the resource views listed in the backend service.
         */
        group: string;
    }
    /**
     * The route resource. A Route is a rule that specifies how certain packets should be handled by the virtual network. Routes are associated with VMs by tag and the set of Routes for a particular VM is called its routing table. For each packet leaving a VM, the system searches that VM's routing table for a single best matching Route. Routes match packets by destination IP address, preferring smaller or more specific ranges over larger ones. If there is a tie, the system selects the Route with the smallest priority value. If there is still a tie, it uses the layer three and four packet headers to select just one of the remaining matching Routes. The packet is then forwarded as specified by the next_hop field of the winning Route -- either to another VM destination, a VM gateway or a GCE operated gateway. Packets that do not match any Route in the sending VM's routing table will be dropped.
     */
    interface IRoute {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Which packets does this route apply to?
         */
        destRange: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * URL of the network to which this route is applied; provided by the client when the route is created.
         */
        network: string;
        /**
         * The URL to a gateway that should handle matching packets.
         */
        nextHopGateway: string;
        /**
         * The URL to an instance that should handle matching packets.
         */
        nextHopInstance: string;
        /**
         * The network IP address of an instance that should handle matching packets.
         */
        nextHopIp: string;
        /**
         * The URL of the local network if it should handle matching packets.
         */
        nextHopNetwork: string;
        /**
         * Breaks ties between Routes of equal specificity. Routes with smaller values win when tied with routes with larger values.
         */
        priority: number; // uint32
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * A list of instance tags to which this route applies.
         */
        tags: string[];
        /**
         * If potential misconfigurations are detected for this route, this field will be populated with warning messages.
         */
        warnings: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        }[];
    }
    /**
     * Contains a list of route resources.
     */
    interface IRouteList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The route resources.
         */
        items: IRoute[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Scheduling options for an Instance.
     */
    interface IScheduling {
        /**
         * Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user).
         */
        automaticRestart: boolean;
        /**
         * How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.
         */
        onHostMaintenance: string;
    }
    /**
     * An instance serial console output.
     */
    interface ISerialPortOutput {
        /**
         * The contents of the console output.
         */
        contents: string;
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
    }
    /**
     * A service account.
     */
    interface IServiceAccount {
        /**
         * Email address of the service account.
         */
        email: string;
        /**
         * The list of scopes to be made available for this service account.
         */
        scopes: string[];
    }
    /**
     * A persistent disk snapshot resource.
     */
    interface ISnapshot {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Size of the persistent disk snapshot, specified in GB (output only).
         */
        diskSizeGb: string; // int64
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Public visible licenses.
         */
        licenses: string[];
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The source disk used to create this snapshot. Once the source disk has been deleted from the system, this field will be cleared, and will not be set even if a disk with the same name has been re-created (output only).
         */
        sourceDisk: string;
        /**
         * The 'id' value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the current or a previous instance of a given disk name.
         */
        sourceDiskId: string;
        /**
         * The status of the persistent disk snapshot (output only).
         */
        status: string;
        /**
         * A size of the the storage used by the snapshot. As snapshots share storage this number is expected to change with snapshot creation/deletion.
         */
        storageBytes: string; // int64
        /**
         * An indicator whether storageBytes is in a stable state, or it is being adjusted as a result of shared storage reallocation.
         */
        storageBytesStatus: string;
    }
    /**
     * Contains a list of persistent disk snapshot resources.
     */
    interface ISnapshotList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The persistent snapshot resources.
         */
        items: ISnapshot[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * A set of instance tags.
     */
    interface ITags {
        /**
         * Fingerprint of this resource. A hash of the tags stored in this object. This field is used optimistic locking. An up-to-date tags fingerprint must be provided in order to modify tags.
         */
        fingerprint: string; // byte
        /**
         * An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
         */
        items: string[];
    }
    /**
     * A TargetHttpProxy resource. This resource defines an HTTP proxy.
     */
    interface ITargetHttpProxy {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * URL to the UrlMap resource that defines the mapping from URL to the BackendService.
         */
        urlMap: string;
    }
    /**
     * Contains a list of TargetHttpProxy resources.
     */
    interface ITargetHttpProxyList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The TargetHttpProxy resources.
         */
        items: ITargetHttpProxy[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * A TargetInstance resource. This resource defines an endpoint VM that terminates traffic of certain protocols.
     */
    interface ITargetInstance {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * The URL to the instance that terminates the relevant traffic.
         */
        instance: string;
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * NAT option controlling how IPs are NAT'ed to the VM. Currently only NO_NAT (default value) is supported.
         */
        natPolicy: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * URL of the zone where the target instance resides (output only).
         */
        zone: string;
    }
    interface ITargetInstanceAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped target instance lists.
         */
        items: {
            [name:string]: ITargetInstancesScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    /**
     * Contains a list of TargetInstance resources.
     */
    interface ITargetInstanceList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The TargetInstance resources.
         */
        items: ITargetInstance[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface ITargetInstancesScopedList {
        /**
         * List of target instances contained in this scope.
         */
        targetInstances: ITargetInstance[];
        /**
         * Informational warning which replaces the list of addresses when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    /**
     * A TargetPool resource. This resource defines a pool of VMs, associated HttpHealthCheck resources, and the fallback TargetPool.
     */
    interface ITargetPool {
        /**
         * This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its 'failoverRatio' field is properly set to a value between [0, 1].
         * 
         * 'backupPool' and 'failoverRatio' together define the fallback behavior of the primary target pool: if the ratio of the healthy VMs in the primary pool is at or below 'failoverRatio', traffic arriving at the load-balanced IP will be directed to the backup pool.
         * 
         * In case where 'failoverRatio' and 'backupPool' are not set, or all the VMs in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy VMs with the best effort, or to all VMs when no VM is healthy.
         */
        backupPool: string;
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1].
         * 
         * If set, 'backupPool' must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy VMs in the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool.
         * 
         * In case where 'failoverRatio' is not set or all the VMs in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy VMs with the best effort, or to all VMs when no VM is healthy.
         */
        failoverRatio: number; // float
        /**
         * A list of URLs to the HttpHealthCheck resource. A member VM in this pool is considered healthy if and only if all specified health checks pass. An empty list means all member VMs will be considered healthy at all times.
         */
        healthChecks: string[];
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * A list of resource URLs to the member VMs serving this pool. They must live in zones contained in the same region as this pool.
         */
        instances: string[];
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * URL of the region where the target pool resides (output only).
         */
        region: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * Sesssion affinity option, must be one of the following values: 'NONE': Connections from the same client IP may go to any VM in the pool; 'CLIENT_IP': Connections from the same client IP will go to the same VM in the pool while that VM remains healthy. 'CLIENT_IP_PROTO': Connections from the same client IP with the same IP protocol will go to the same VM in the pool while that VM remains healthy.
         */
        sessionAffinity: string;
    }
    interface ITargetPoolAggregatedList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * A map of scoped target pool lists.
         */
        items: {
            [name:string]: ITargetPoolsScopedList;
        };
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface ITargetPoolInstanceHealth {
        healthStatus: IHealthStatus[];
        /**
         * Type of resource.
         */
        kind: string;
    }
    /**
     * Contains a list of TargetPool resources.
     */
    interface ITargetPoolList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The TargetPool resources.
         */
        items: ITargetPool[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface ITargetPoolsAddHealthCheckRequest {
        /**
         * Health check URLs to be added to targetPool.
         */
        healthChecks: IHealthCheckReference[];
    }
    interface ITargetPoolsAddInstanceRequest {
        /**
         * URLs of the instances to be added to targetPool.
         */
        instances: IInstanceReference[];
    }
    interface ITargetPoolsRemoveHealthCheckRequest {
        /**
         * Health check URLs to be removed from targetPool.
         */
        healthChecks: IHealthCheckReference[];
    }
    interface ITargetPoolsRemoveInstanceRequest {
        /**
         * URLs of the instances to be removed from targetPool.
         */
        instances: IInstanceReference[];
    }
    interface ITargetPoolsScopedList {
        /**
         * List of target pools contained in this scope.
         */
        targetPools: ITargetPool[];
        /**
         * Informational warning which replaces the list of addresses when the list is empty.
         */
        warning: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        };
    }
    interface ITargetReference {
        target: string;
    }
    interface ITestFailure {
        actualService: string;
        expectedService: string;
        host: string;
        path: string;
    }
    /**
     * A UrlMap resource. This resource defines the mapping from URL to the BackendService resource, based on the "longest-match" of the URL's host and path.
     */
    interface IUrlMap {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The URL of the BackendService resource if none of the hostRules match.
         */
        defaultService: string;
        /**
         * An optional textual description of the resource; provided by the client when the resource is created.
         */
        description: string;
        /**
         * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
         */
        fingerprint: string; // byte
        /**
         * The list of HostRules to use against the URL.
         */
        hostRules: IHostRule[];
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
         */
        name: string;
        /**
         * The list of named PathMatchers to use against the URL.
         */
        pathMatchers: IPathMatcher[];
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * The list of expected URL mappings. Request to update this UrlMap will succeed only all of the test cases pass.
         */
        tests: IUrlMapTest[];
    }
    /**
     * Contains a list of UrlMap resources.
     */
    interface IUrlMapList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The UrlMap resources.
         */
        items: IUrlMap[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
    interface IUrlMapReference {
        urlMap: string;
    }
    /**
     * Message for the expected URL mappings.
     */
    interface IUrlMapTest {
        /**
         * Description of this test case.
         */
        description: string;
        /**
         * Host portion of the URL.
         */
        host: string;
        /**
         * Path portion of the URL.
         */
        path: string;
        /**
         * Expected BackendService resource the given URL should be mapped to.
         */
        service: string;
    }
    /**
     * Message representing the validation result for a UrlMap.
     */
    interface IUrlMapValidationResult {
        loadErrors: string[];
        /**
         * Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
         */
        loadSucceeded: boolean;
        testFailures: ITestFailure[];
        /**
         * If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.
         */
        testPassed: boolean;
    }
    interface IUrlMapsValidateRequest {
        /**
         * Content of the UrlMap to be validated.
         */
        resource: IUrlMap;
    }
    interface IUrlMapsValidateResponse {
        result: IUrlMapValidationResult;
    }
    /**
     * The location in Cloud Storage and naming method of the daily usage report. Contains bucket_name and report_name prefix.
     */
    interface IUsageExportLocation {
        /**
         * The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this bucket. This is simply the bucket name, with no "gs://" or "https://storage.googleapis.com/" in front of it.
         */
        bucketName: string;
        /**
         * An optional prefix for the name of the usage report object stored in bucket_name. If not supplied, defaults to "usage_". The report is stored as a CSV file named _gce_.csv. where  is the day of the usage according to Pacific Time. The prefix should conform to Cloud Storage object naming conventions.
         */
        reportNamePrefix: string;
    }
    /**
     * A zone resource.
     */
    interface IZone {
        /**
         * Creation timestamp in RFC3339 text format (output only).
         */
        creationTimestamp: string;
        /**
         * The deprecation status associated with this zone.
         */
        deprecated: IDeprecationStatus;
        /**
         * Textual description of the resource.
         */
        description: string;
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string; // uint64
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * Scheduled maintenance windows for the zone. When the zone is in a maintenance window, all resources which reside in the zone will be unavailable.
         */
        maintenanceWindows: {
            beginTime: string;
            description: string;
            endTime: string;
            name: string;
        }[];
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * Full URL reference to the region which hosts the zone (output only).
         */
        region: string;
        /**
         * Server defined URL for the resource (output only).
         */
        selfLink: string;
        /**
         * Status of the zone. "UP" or "DOWN".
         */
        status: string;
    }
    /**
     * Contains a list of zone resources.
     */
    interface IZoneList {
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * The zone resources.
         */
        items: IZone[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * A token used to continue a truncated list request (output only).
         */
        nextPageToken: string;
        /**
         * Server defined URL for this resource (output only).
         */
        selfLink: string;
    }
}
