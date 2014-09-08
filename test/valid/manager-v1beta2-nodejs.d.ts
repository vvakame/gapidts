// Type definitions for Google Deployment Manager API v1beta2
// Project: https://developers.google.com/deployment-manager/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module gapi.client {
    /**
     * The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
     */
    module manager {
        var deployments: {
            /**
             * 
             * @params {string} deploymentName 
             * @params {string} projectId 
             * @params {string} region 
             */
            delete: (params: {
                deploymentName: string;
                projectId: string;
                region: string;
            }, callback: (err: any, response: any) => void ) => void; // void
            /**
             * 
             * @params {string} deploymentName 
             * @params {string} projectId 
             * @params {string} region 
             */
            get: (params: {
                deploymentName: string;
                projectId: string;
                region: string;
            }, callback: (err: any, response: IDeployment) => void) => void;
            /**
             * 
             * @params {string} projectId 
             * @params {string} region 
             */
            insert: (params: {
                projectId: string;
                region: string;
                resource?: IDeployment;
            }, callback: (err: any, response: IDeployment) => void) => void;
            /**
             * 
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectId 
             * @params {string} region 
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                projectId: string;
                region: string;
            }, callback: (err: any, response: IDeploymentsListResponse) => void) => void;
        };
        var templates: {
            /**
             * 
             * @params {string} projectId 
             * @params {string} templateName 
             */
            delete: (params: {
                projectId: string;
                templateName: string;
            }, callback: (err: any, response: any) => void ) => void; // void
            /**
             * 
             * @params {string} projectId 
             * @params {string} templateName 
             */
            get: (params: {
                projectId: string;
                templateName: string;
            }, callback: (err: any, response: ITemplate) => void) => void;
            /**
             * 
             * @params {string} projectId 
             */
            insert: (params: {
                projectId: string;
                resource?: ITemplate;
            }, callback: (err: any, response: ITemplate) => void) => void;
            /**
             * 
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectId 
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                projectId: string;
            }, callback: (err: any, response: ITemplatesListResponse) => void) => void;
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
             * Type of this access configuration file. (Currently only ONE_TO_ONE_NAT is legal.)
             */
            type: string;
        }
        /**
         * An Action encapsulates a set of commands as a single runnable module with additional information needed during run-time.
         */
        interface IAction {
            /**
             * A list of commands to run sequentially for this action.
             */
            commands: string[];
            /**
             * The timeout in milliseconds for this action to run.
             */
            timeoutMs: number; // int32
        }
        /**
         * An allowed port resource.
         */
        interface IAllowedRule {
            /**
             * ?tcp?, ?udp? or ?icmp?
             */
            IPProtocol: string;
            /**
             * List of ports or port ranges (Example inputs include: ["22"], [?33?, "12345-12349"].
             */
            ports: string[];
        }
        interface IAutoscalingModule {
            coolDownPeriodSec: number; // int32
            description: string;
            maxNumReplicas: number; // int32
            minNumReplicas: number; // int32
            signalType: string;
            targetModule: string;
            /**
             * target_utilization should be in range [0,1].
             */
            targetUtilization: number; // double
        }
        interface IAutoscalingModuleStatus {
            /**
             * [Output Only] The URL of the corresponding Autoscaling configuration.
             */
            autoscalingConfigUrl: string;
        }
        /**
         * [Output Only] The current state of a replica or module.
         */
        interface IDeployState {
            /**
             * [Output Only] Human readable details about the current state.
             */
            details: string;
            /**
             * [Output Only] The status of the deployment. Possible values include: 
             * - UNKNOWN
             * - DEPLOYING
             * - DEPLOYED
             * - DEPLOYMENT_FAILED
             * - DELETING
             * - DELETED
             * - DELETE_FAILED
             */
            status: string;
        }
        /**
         * A deployment represents a physical instantiation of a Template.
         */
        interface IDeployment {
            /**
             * [Output Only] The time when this deployment was created.
             */
            creationDate: string;
            /**
             * A user-supplied description of this Deployment.
             */
            description: string;
            /**
             * [Output Only] List of status for the modules in this deployment.
             */
            modules: {
                [name:string]: IModuleStatus;
            };
            /**
             * Name of this deployment. The name must conform to the following regular expression: [a-zA-Z0-9-_]{1,64}
             */
            name: string;
            /**
             * The set of parameter overrides to apply to the corresponding Template before deploying.
             */
            overrides: IParamOverride[];
            /**
             * [Output Only] Current status of this deployment.
             */
            state: IDeployState;
            /**
             * The name of the Template on which this deployment is based.
             */
            templateName: string;
        }
        interface IDeploymentsListResponse {
            nextPageToken: string;
            resources: IDeployment[];
        }
        /**
         * How to attach a disk to a Replica.
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
         * An environment variable.
         */
        interface IEnvVariable {
            /**
             * Whether this variable is hidden or visible.
             */
            hidden: boolean;
            /**
             * Value of the environment variable.
             */
            value: string;
        }
        /**
         * A pre-existing persistent disk that will be attached to every Replica in the Pool.
         */
        interface IExistingDisk {
            /**
             * Optional. How the disk will be attached to the Replica.
             */
            attachment: IDiskAttachment;
            /**
             * The fully-qualified URL of the Persistent Disk resource. It must be in the same zone as the Pool.
             */
            source: string;
        }
        /**
         * A Firewall resource
         */
        interface IFirewallModule {
            /**
             * The allowed ports or port ranges.
             */
            allowed: IAllowedRule[];
            /**
             * The description of the firewall (optional)
             */
            description: string;
            /**
             * The NetworkModule to which this firewall should apply. If not specified, or if specified as 'default', this firewall will be applied to the 'default' network.
             */
            network: string;
            /**
             * Source IP ranges to apply this firewall to, see the GCE Spec for details on syntax
             */
            sourceRanges: string[];
            /**
             * Source Tags to apply this firewall to, see the GCE Spec for details on syntax
             */
            sourceTags: string[];
            /**
             * Target Tags to apply this firewall to, see the GCE Spec for details on syntax
             */
            targetTags: string[];
        }
        interface IFirewallModuleStatus {
            /**
             * [Output Only] The URL of the corresponding Firewall resource.
             */
            firewallUrl: string;
        }
        interface IHealthCheckModule {
            checkIntervalSec: number; // int32
            description: string;
            healthyThreshold: number; // int32
            host: string;
            path: string;
            port: number; // int32
            timeoutSec: number; // int32
            unhealthyThreshold: number; // int32
        }
        interface IHealthCheckModuleStatus {
            /**
             * [Output Only] The HealthCheck URL.
             */
            healthCheckUrl: string;
        }
        interface ILbModule {
            description: string;
            healthChecks: string[];
            ipAddress: string;
            ipProtocol: string;
            portRange: string;
            sessionAffinity: string;
            targetModules: string[];
        }
        interface ILbModuleStatus {
            /**
             * [Output Only] The URL of the corresponding ForwardingRule in GCE.
             */
            forwardingRuleUrl: string;
            /**
             * [Output Only] The URL of the corresponding TargetPool resource in GCE.
             */
            targetPoolUrl: string;
        }
        /**
         * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
         */
        interface IMetadata {
            /**
             * The fingerprint of the metadata.
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
         * A module in a configuration. A module represents a single homogeneous, possibly replicated task.
         */
        interface IModule {
            autoscalingModule: IAutoscalingModule;
            firewallModule: IFirewallModule;
            healthCheckModule: IHealthCheckModule;
            lbModule: ILbModule;
            networkModule: INetworkModule;
            replicaPoolModule: IReplicaPoolModule;
            /**
             * The type of this module. Valid values ("AUTOSCALING", "FIREWALL", "HEALTH_CHECK", "LOAD_BALANCING", "NETWORK", "REPLICA_POOL")
             */
            type: string;
        }
        /**
         * [Output Only] Aggregate status for a module.
         */
        interface IModuleStatus {
            /**
             * [Output Only] The status of the AutoscalingModule, set for type AUTOSCALING.
             */
            autoscalingModuleStatus: IAutoscalingModuleStatus;
            /**
             * [Output Only] The status of the FirewallModule, set for type FIREWALL.
             */
            firewallModuleStatus: IFirewallModuleStatus;
            /**
             * [Output Only] The status of the HealthCheckModule, set for type HEALTH_CHECK.
             */
            healthCheckModuleStatus: IHealthCheckModuleStatus;
            /**
             * [Output Only] The status of the LbModule, set for type LOAD_BALANCING.
             */
            lbModuleStatus: ILbModuleStatus;
            /**
             * [Output Only] The status of the NetworkModule, set for type NETWORK.
             */
            networkModuleStatus: INetworkModuleStatus;
            /**
             * [Output Only] The status of the ReplicaPoolModule, set for type VM.
             */
            replicaPoolModuleStatus: IReplicaPoolModuleStatus;
            /**
             * [Output Only] The current state of the module.
             */
            state: IDeployState;
            /**
             * [Output Only] The type of the module.
             */
            type: string;
        }
        /**
         * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
         */
        interface INetworkInterface {
            /**
             * An array of configurations for this interface. This specifies how this interface is configured to interact with other network services
             */
            accessConfigs: IAccessConfig[];
            /**
             * Name of the interface.
             */
            name: string;
            /**
             * The name of the NetworkModule to which this interface applies. If not specified, or specified as 'default', this will use the 'default' network.
             */
            network: string;
            /**
             * An optional IPV4 internal network address to assign to the instance for this network interface.
             */
            networkIp: string;
        }
        interface INetworkModule {
            /**
             * Required; The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16.
             */
            IPv4Range: string;
            /**
             * The description of the network.
             */
            description: string;
            /**
             * An optional address that is used for default routing to other networks. This must be within the range specified by IPv4Range, and is typicall the first usable address in that range. If not specified, the default value is the first usable address in IPv4Range.
             */
            gatewayIPv4: string;
        }
        interface INetworkModuleStatus {
            /**
             * [Output Only] The URL of the corresponding Network resource.
             */
            networkUrl: string;
        }
        /**
         * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica.
         */
        interface INewDisk {
            /**
             * How the disk will be attached to the Replica.
             */
            attachment: IDiskAttachment;
            /**
             * If true, then this disk will be deleted when the instance is deleted.
             */
            autoDelete: boolean;
            /**
             * If true, indicates that this is the root persistent disk.
             */
            boot: boolean;
            /**
             * Create the new disk using these parameters. The name of the disk will be <instance_name>-<five_random_charactersgt;.
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
             * The fully-qualified URL of a source image to use to create this disk.
             */
            sourceImage: string;
        }
        /**
         * A specification for overriding parameters in a Template that corresponds to the Deployment.
         */
        interface IParamOverride {
            /**
             * A JSON Path expression that specifies which parameter should be overridden.
             */
            path: string;
            /**
             * The new value to assign to the overridden parameter.
             */
            value: string;
        }
        interface IReplicaPoolModule {
            /**
             * A list of environment variables.
             */
            envVariables: {
                [name:string]: IEnvVariable;
            };
            /**
             * The Health Checks to configure for the ReplicaPoolModule
             */
            healthChecks: string[];
            /**
             * Number of replicas in this module.
             */
            numReplicas: number; // int32
            /**
             * Information for a ReplicaPoolModule.
             */
            replicaPoolParams: IReplicaPoolParams;
            /**
             * [Output Only] The name of the Resource View associated with a ReplicaPoolModule. This field will be generated by the service.
             */
            resourceView: string;
        }
        interface IReplicaPoolModuleStatus {
            /**
             * [Output Only] The URL of the associated ReplicaPool resource.
             */
            replicaPoolUrl: string;
            /**
             * [Output Only] The URL of the Resource Group associated with this ReplicaPool.
             */
            resourceViewUrl: string;
        }
        /**
         * Configuration information for a ReplicaPools resource. Specifying an item within will determine the ReplicaPools API version used for a ReplicaPoolModule. Only one may be specified.
         */
        interface IReplicaPoolParams {
            /**
             * ReplicaPoolParams specifications for use with ReplicaPools v1beta1.
             */
            v1beta1: IReplicaPoolParamsV1Beta1;
        }
        /**
         * Configuration information for a ReplicaPools v1beta1 API resource. Directly maps to ReplicaPool InitTemplate.
         */
        interface IReplicaPoolParamsV1Beta1 {
            /**
             * Whether these replicas should be restarted if they experience a failure. The default value is true.
             */
            autoRestart: boolean;
            /**
             * The base name for instances within this ReplicaPool.
             */
            baseInstanceName: string;
            /**
             * Enables IP Forwarding
             */
            canIpForward: boolean;
            /**
             * An optional textual description of the resource.
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
             * Name of the Action to be run during initialization of a ReplicaPoolModule.
             */
            initAction: string;
            /**
             * The machine type for this instance. Either a complete URL, or the resource name (e.g. n1-standard-1).
             */
            machineType: string;
            /**
             * The metadata key/value pairs assigned to this instance.
             */
            metadata: IMetadata;
            /**
             * A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine.
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
            /**
             * The zone for this ReplicaPool.
             */
            zone: string;
        }
        /**
         * A Compute Engine service account, identical to the Compute Engine resource.
         */
        interface IServiceAccount {
            /**
             * Service account email address.
             */
            email: string;
            /**
             * List of OAuth2 scopes to obtain for the service account.
             */
            scopes: string[];
        }
        /**
         * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
         */
        interface ITag {
            /**
             * The fingerprint of the tag.
             */
            fingerPrint: string;
            /**
             * Items contained in this tag.
             */
            items: string[];
        }
        /**
         * A Template represents a complete configuration for a Deployment.
         */
        interface ITemplate {
            /**
             * Action definitions for use in Module intents in this Template.
             */
            actions: {
                [name:string]: IAction;
            };
            /**
             * A user-supplied description of this Template.
             */
            description: string;
            /**
             * A list of modules for this Template.
             */
            modules: {
                [name:string]: IModule;
            };
            /**
             * Name of this Template. The name must conform to the expression: [a-zA-Z0-9-_]{1,64}
             */
            name: string;
        }
        interface ITemplatesListResponse {
            nextPageToken: string;
            resources: ITemplate[];
        }
    }
}
