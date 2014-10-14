// Type definitions for Google Replica Pool API v1beta1
// Project: https://developers.google.com/compute/docs/replica-pool/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/ndev.cloudman
//   View and manage your Google Cloud Platform management resources and deployment status information
// https://www.googleapis.com/auth/ndev.cloudman.readonly
//   View your Google Cloud Platform management resources and deployment status information
// https://www.googleapis.com/auth/replicapool
//   View and manage replica pools
// https://www.googleapis.com/auth/replicapool.readonly
//   View replica pools

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.
     */
    module replicapool {
        var pools: {
            /**
             * Deletes a replica pool.
             * @params {string} poolName The name of the replica pool for this request.
             * @params {string} projectName The project ID for this replica pool.
             * @params {string} zone The zone for this replica pool.
             */
            delete: (params: {
                poolName: string;
                projectName: string;
                zone: string;
                resource?: IPoolsDeleteRequest;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets information about a single replica pool.
             * @params {string} poolName The name of the replica pool for this request.
             * @params {string} projectName The project ID for this replica pool.
             * @params {string} zone The zone for this replica pool.
             */
            get: (params: {
                poolName: string;
                projectName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IPool>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Inserts a new replica pool.
             * @params {string} projectName The project ID for this replica pool.
             * @params {string} zone The zone for this replica pool.
             */
            insert: (params: {
                projectName: string;
                zone: string;
                resource?: IPool;
            }) => {
                execute(callback: (data: IResponse<IPool>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all replica pools.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
             * @params {string} pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
             * @params {string} projectName The project ID for this request.
             * @params {string} zone The zone for this replica pool.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                projectName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IPoolsListResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPoolsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
             * @params {number} numReplicas The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
             * @params {string} poolName The name of the replica pool for this request.
             * @params {string} projectName The project ID for this replica pool.
             * @params {string} zone The zone for this replica pool.
             */
            resize: (params: {
                numReplicas?: number;
                poolName: string;
                projectName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IPool>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPool>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Update the template used by the pool.
             * @params {string} poolName The name of the replica pool for this request.
             * @params {string} projectName The project ID for this replica pool.
             * @params {string} zone The zone for this replica pool.
             */
            updatetemplate: (params: {
                poolName: string;
                projectName: string;
                zone: string;
                resource?: ITemplate;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var replicas: {
            /**
             * Deletes a replica from the pool.
             * @params {string} poolName The replica pool name for this request.
             * @params {string} projectName The project ID for this request.
             * @params {string} replicaName The name of the replica for this request.
             * @params {string} zone The zone where the replica lives.
             */
            delete: (params: {
                poolName: string;
                projectName: string;
                replicaName: string;
                zone: string;
                resource?: IReplicasDeleteRequest;
            }) => {
                execute(callback: (data: IResponse<IReplica>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets information about a specific replica.
             * @params {string} poolName The replica pool name for this request.
             * @params {string} projectName The project ID for this request.
             * @params {string} replicaName The name of the replica for this request.
             * @params {string} zone The zone where the replica lives.
             */
            get: (params: {
                poolName: string;
                projectName: string;
                replicaName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IReplica>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists all replicas in a pool.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
             * @params {string} pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
             * @params {string} poolName The replica pool name for this request.
             * @params {string} projectName The project ID for this request.
             * @params {string} zone The zone where the replica pool lives.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                poolName: string;
                projectName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IReplicasListResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplicasListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Restarts a replica in a pool.
             * @params {string} poolName The replica pool name for this request.
             * @params {string} projectName The project ID for this request.
             * @params {string} replicaName The name of the replica for this request.
             * @params {string} zone The zone where the replica lives.
             */
            restart: (params: {
                poolName: string;
                projectName: string;
                replicaName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IReplica>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IReplica>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        /**
         * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
         */
        interface IAccessConfig {
            /**
             * Name of this access configuration.
             */
            name: string;
            /**
             * An external IP address associated with this instance.
             */
            natIp: string;
            /**
             * Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.
             */
            type: string;
        }
        /**
         * An action that gets executed during initialization of the replicas.
         */
        interface IAction {
            /**
             * A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.
             */
            commands: string[];
            /**
             * A list of environment variables to use for the commands in this action.
             */
            envVariables: IEnvVariable[];
            /**
             * If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).
             */
            timeoutMilliSeconds: number; // int32
        }
        /**
         * Specifies how to attach a disk to a Replica.
         */
        interface IDiskAttachment {
            /**
             * The device name of this disk.
             */
            deviceName: string;
            /**
             * A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.
             */
            index: number; // uint32
        }
        /**
         * An environment variable to set for an action.
         */
        interface IEnvVariable {
            /**
             * Deprecated, do not use.
             */
            hidden: boolean;
            /**
             * The name of the environment variable.
             */
            name: string;
            /**
             * The value of the variable.
             */
            value: string;
        }
        /**
         * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
         */
        interface IExistingDisk {
            /**
             * How the disk will be attached to the Replica.
             */
            attachment: IDiskAttachment;
            /**
             * The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.
             */
            source: string;
        }
        interface IHealthCheck {
            /**
             * How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.
             */
            checkIntervalSec: number; // int32
            /**
             * The description for this health check.
             */
            description: string;
            /**
             * The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.
             */
            healthyThreshold: number; // int32
            /**
             * The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.
             */
            host: string;
            /**
             * The name of this health check.
             */
            name: string;
            /**
             * The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.
             */
            path: string;
            /**
             * The TCP port for the health check requests.
             */
            port: number; // int32
            /**
             * How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.
             */
            timeoutSec: number; // int32
            /**
             * The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.
             */
            unhealthyThreshold: number; // int32
        }
        /**
         * A label to apply to this replica pool.
         */
        interface ILabel {
            /**
             * The key for this label.
             */
            key: string;
            /**
             * The value of this label.
             */
            value: string;
        }
        /**
         * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
         */
        interface IMetadata {
            /**
             * The fingerprint of the metadata. Required for updating the metadata entries for this instance.
             */
            fingerPrint: string;
            /**
             * A list of metadata items.
             */
            items: IMetadataItem[];
        }
        /**
         * A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
         */
        interface IMetadataItem {
            /**
             * A metadata key.
             */
            key: string;
            /**
             * A metadata value.
             */
            value: string;
        }
        /**
         * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
         */
        interface INetworkInterface {
            /**
             * An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.
             */
            accessConfigs: IAccessConfig[];
            /**
             * Name the Network resource to which this interface applies.
             */
            network: string;
            /**
             * An optional IPV4 internal network address to assign to the instance for this network interface.
             */
            networkIp: string;
        }
        /**
         * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
         */
        interface INewDisk {
            /**
             * How the disk will be attached to the Replica.
             */
            attachment: IDiskAttachment;
            /**
             * If true, then this disk will be deleted when the instance is deleted. The default value is true.
             */
            autoDelete: boolean;
            /**
             * If true, indicates that this is the root persistent disk.
             */
            boot: boolean;
            /**
             * Create the new disk using these parameters. The name of the disk will be <instance_name>-<four_random_charactersgt;.
             */
            initializeParams: INewDiskInitializeParams;
        }
        /**
         * Initialization parameters for creating a new disk.
         */
        interface INewDiskInitializeParams {
            /**
             * The size of the created disk in gigabytes.
             */
            diskSizeGb: string; // int64
            /**
             * Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'
             */
            diskType: string;
            /**
             * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
             * http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
             */
            sourceImage: string;
        }
        interface IPool {
            /**
             * Whether replicas in this pool should be restarted if they experience a failure. The default value is true.
             */
            autoRestart: boolean;
            /**
             * The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
             * 
             * If this is not specified by the user, a random base instance name is generated by the service.
             */
            baseInstanceName: string;
            /**
             * [Output Only] The current number of replicas in the pool.
             */
            currentNumReplicas: number; // int32
            /**
             * An optional description of the replica pool.
             */
            description: string;
            /**
             * Deprecated. Please use template[].healthChecks instead.
             */
            healthChecks: IHealthCheck[];
            /**
             * The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.
             */
            initialNumReplicas: number; // int32
            /**
             * A list of labels to attach to this replica pool and all created virtual machines in this replica pool.
             */
            labels: ILabel[];
            /**
             * The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.
             */
            name: string;
            /**
             * Deprecated! Use initial_num_replicas instead.
             */
            numReplicas: number; // int32
            /**
             * The list of resource views that should be updated with all the replicas that are managed by this pool.
             */
            resourceViews: string[];
            /**
             * [Output Only] A self-link to the replica pool.
             */
            selfLink: string;
            /**
             * Deprecated, please use target_pools instead.
             */
            targetPool: string;
            /**
             * A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.
             */
            targetPools: string[];
            /**
             * The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.
             */
            template: ITemplate;
            /**
             * Deprecated! Do not set.
             */
            type: string;
        }
        interface IPoolsDeleteRequest {
            /**
             * If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.
             */
            abandonInstances: string[];
        }
        interface IPoolsListResponse {
            nextPageToken: string;
            resources: IPool[];
        }
        /**
         * An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
         */
        interface IReplica {
            /**
             * [Output Only] The name of the Replica object.
             */
            name: string;
            /**
             * [Output Only] The self-link of the Replica.
             */
            selfLink: string;
            /**
             * [Output Only] Last known status of the Replica.
             */
            status: IReplicaStatus;
        }
        /**
         * The current status of a Replica.
         */
        interface IReplicaStatus {
            /**
             * [Output Only] Human-readable details about the current state of the replica
             */
            details: string;
            /**
             * [Output Only] The state of the Replica.
             */
            state: string;
            /**
             * [Output Only] The template used to build the replica.
             */
            templateVersion: string;
            /**
             * [Output Only] Link to the virtual machine that this Replica represents.
             */
            vmLink: string;
            /**
             * [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.
             */
            vmStartTime: string;
        }
        interface IReplicasDeleteRequest {
            /**
             * Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.
             */
            abandonInstance: boolean;
        }
        interface IReplicasListResponse {
            nextPageToken: string;
            resources: IReplica[];
        }
        /**
         * A Compute Engine service account, identical to the Compute Engine resource.
         */
        interface IServiceAccount {
            /**
             * The service account email address, for example: 123845678986@project.gserviceaccount.com
             */
            email: string;
            /**
             * The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control
             */
            scopes: string[];
        }
        /**
         * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
         */
        interface ITag {
            /**
             * The fingerprint of the tag. Required for updating the list of tags.
             */
            fingerPrint: string;
            /**
             * Items contained in this tag.
             */
            items: string[];
        }
        /**
         * The template used for creating replicas in the pool.
         */
        interface ITemplate {
            /**
             * An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.
             */
            action: IAction;
            /**
             * A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.
             */
            healthChecks: IHealthCheck[];
            /**
             * A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.
             */
            version: string;
            /**
             * The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.
             */
            vmParams: IVmParams;
        }
        /**
         * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
         */
        interface IVmParams {
            /**
             * Deprecated. Please use baseInstanceName instead.
             */
            baseInstanceName: string;
            /**
             * Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.
             */
            canIpForward: boolean;
            /**
             * An optional textual description of the instance.
             */
            description: string;
            /**
             * A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
             */
            disksToAttach: IExistingDisk[];
            /**
             * A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
             */
            disksToCreate: INewDisk[];
            /**
             * The machine type for this instance. The resource name (e.g. n1-standard-1).
             */
            machineType: string;
            /**
             * The metadata key/value pairs assigned to this instance.
             */
            metadata: IMetadata;
            /**
             * A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.
             */
            networkInterfaces: INetworkInterface[];
            onHostMaintenance: string;
            /**
             * A list of Service Accounts to enable for this instance.
             */
            serviceAccounts: IServiceAccount[];
            /**
             * A list of tags to apply to the Google Compute Engine instance to identify resources.
             */
            tags: ITag;
        }
    }
}
