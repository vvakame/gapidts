// Type definitions for Google Compute Engine API v1
// Project: https://developers.google.com/compute/docs/reference/latest/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * API for the Google Compute Engine service.
     */
    module compute {
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAddressAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAddress
            /**
             * Creates an address resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             * @params {string} region Name of the region scoping this request.
             */
            insert: (params: {
                project: string;
                region: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAddressList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDiskTypeAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDiskType
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDiskTypeList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDiskAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDisk
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDiskList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified firewall resource.
             * @params {string} firewall Name of the firewall resource to return.
             * @params {string} project Name of the project scoping this request.
             */
            get: (params: {
                firewall: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IFirewall
            /**
             * Creates a firewall resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            insert: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IFirewallList
            /**
             * Updates the specified firewall resource with the data included in the request. This method supports patch semantics.
             * @params {string} firewall Name of the firewall resource to update.
             * @params {string} project Name of the project scoping this request.
             */
            patch: (params: {
                firewall: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Updates the specified firewall resource with the data included in the request.
             * @params {string} firewall Name of the firewall resource to update.
             * @params {string} project Name of the project scoping this request.
             */
            update: (params: {
                firewall: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IForwardingRuleAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IForwardingRule
            /**
             * Creates a ForwardingRule resource in the specified project and region using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             * @params {string} region Name of the region scoping this request.
             */
            insert: (params: {
                project: string;
                region: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IForwardingRuleList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperationAggregatedList
            /**
             * Deletes the specified operation resource.
             * @params {string} operation Name of the operation resource to delete.
             * @params {string} project Name of the project scoping this request.
             */
            delete: (params: {
                operation: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves the specified operation resource.
             * @params {string} operation Name of the operation resource to return.
             * @params {string} project Name of the project scoping this request.
             */
            get: (params: {
                operation: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperationList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified HttpHealthCheck resource.
             * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to return.
             * @params {string} project Name of the project scoping this request.
             */
            get: (params: {
                httpHealthCheck: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IHttpHealthCheck
            /**
             * Creates a HttpHealthCheck resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            insert: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IHttpHealthCheckList
            /**
             * Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
             * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to update.
             * @params {string} project Name of the project scoping this request.
             */
            patch: (params: {
                httpHealthCheck: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Updates a HttpHealthCheck resource in the specified project using the data included in the request.
             * @params {string} httpHealthCheck Name of the HttpHealthCheck resource to update.
             * @params {string} project Name of the project scoping this request.
             */
            update: (params: {
                httpHealthCheck: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Sets the deprecation status of an image. If no message body is given, clears the deprecation status instead.
             * @params {string} image Image name.
             * @params {string} project Name of the project scoping this request.
             */
            deprecate: (params: {
                image: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified image resource.
             * @params {string} image Name of the image resource to return.
             * @params {string} project Name of the project scoping this request.
             */
            get: (params: {
                image: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IImage
            /**
             * Creates an image resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            insert: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IImageList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IInstanceAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IInstance
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ISerialPortOutput
            /**
             * Creates an instance resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             * @params {string} zone Name of the zone scoping this request.
             */
            insert: (params: {
                project: string;
                zone: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IInstanceList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMachineTypeAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMachineType
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMachineTypeList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified network resource.
             * @params {string} network Name of the network resource to return.
             * @params {string} project Name of the project scoping this request.
             */
            get: (params: {
                network: string;
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // INetwork
            /**
             * Creates a network resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            insert: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // INetworkList
        };
        var projects: {
            /**
             * Returns the specified project resource.
             * @params {string} project Name of the project resource to retrieve.
             */
            get: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IProject
            /**
             * Sets metadata common to all instances within the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            setCommonInstanceMetadata: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperationList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRegion
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRegionList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified route resource.
             * @params {string} project Name of the project scoping this request.
             * @params {string} route Name of the route resource to return.
             */
            get: (params: {
                project: string;
                route: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRoute
            /**
             * Creates a route resource in the specified project using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             */
            insert: (params: {
                project: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRouteList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
            /**
             * Returns the specified persistent disk snapshot resource.
             * @params {string} project Name of the project scoping this request.
             * @params {string} snapshot Name of the persistent disk snapshot resource to return.
             */
            get: (params: {
                project: string;
                snapshot: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ISnapshot
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ISnapshotList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetInstanceAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetInstance
            /**
             * Creates a TargetInstance resource in the specified project and zone using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             * @params {string} zone Name of the zone scoping this request.
             */
            insert: (params: {
                project: string;
                zone: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetInstanceList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetPoolAggregatedList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetPool
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetPoolInstanceHealth
            /**
             * Creates a TargetPool resource in the specified project and region using the data included in the request.
             * @params {string} project Name of the project scoping this request.
             * @params {string} region Name of the region scoping this request.
             */
            insert: (params: {
                project: string;
                region: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ITargetPoolList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperation
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IOperationList
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IZone
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
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IZoneList
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
             * URL of the region where the address resides (output only).
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
            items: { [name:string]: IAddressesScopedList; };
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
         * Initialization parameters for the new disk (Mutually exclusive with 'source', can currently only be specified on the boot disk).
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
             * The source image used to create this disk.
             */
            sourceImage: string;
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
            items: { [name:string]: IDisksScopedList; };
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
            items: { [name:string]: IDiskTypesScopedList; };
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
             * Value of the reserved IP address that this forwarding rule is serving on behalf of. The address resource must live in the same region as the forwarding rule. If left empty (default value), an ephemeral IP will be assigned.
             */
            IPAddress: string;
            /**
             * The IP protocol to which this rule applies, valid options are 'TCP', 'UDP', 'ESP', 'AH' or 'SCTP'
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
             * Applicable only when 'IPProtocol' is 'TCP', 'UDP' or 'SCTP', only packets addressed to ports in the specified range will be forwarded to 'target'. If 'portRange' is left empty (default value), all ports are forwarded. Forwarding rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges. @pattern: \d+(?:-\d+)?
             */
            portRange: string;
            /**
             * URL of the region where the forwarding rule resides (output only).
             */
            region: string;
            /**
             * Server defined URL for the resource (output only).
             */
            selfLink: string;
            /**
             * The URL of the target resource to receive the matched traffic. It must live in the same region as this forwarding rule.
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
            items: { [name:string]: IForwardingRulesScopedList; };
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
            items: { [name:string]: IInstancesScopedList; };
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
            items: { [name:string]: IMachineTypesScopedList; };
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
            items: { [name:string]: IOperationsScopedList; };
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
            items: { [name:string]: ITargetInstancesScopedList; };
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
            items: { [name:string]: ITargetPoolsScopedList; };
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
}
