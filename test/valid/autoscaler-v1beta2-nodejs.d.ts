// Type definitions for Google Google Compute Engine Autoscaler API v1beta2
// Project: http://developers.google.com/compute/docs/autoscaler
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/compute
//   View and manage your Google Compute Engine resources
// https://www.googleapis.com/auth/compute.readonly
//   View your Google Compute Engine resources

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function autoscaler(version:string):typeof googleapis.autoscaler;
    function autoscaler(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.autoscaler;
}
/**
 * The Google Compute Engine Autoscaler API provides autoscaling for groups of Cloud VMs.
 */
declare module googleapis.autoscaler {
    var autoscalers: {
        /**
         * Deletes the specified Autoscaler resource.
         * @params {string} autoscaler Name of the Autoscaler resource.
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        delete: (params: {
            autoscaler: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets the specified Autoscaler resource.
         * @params {string} autoscaler Name of the Autoscaler resource.
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        get: (params: {
            autoscaler: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAutoscaler, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Adds new Autoscaler resource.
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        insert: (params: {
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAutoscaler;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all Autoscaler resources in this zone.
         * @params {string} filter 
         * @params {number} maxResults 
         * @params {string} pageToken 
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        list: (params: {
            filter?: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAutoscalerListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the Autoscaler resource. This method supports patch semantics.
         * @params {string} autoscaler Name of the Autoscaler resource.
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        patch: (params: {
            autoscaler: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAutoscaler;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Update the entire content of the Autoscaler resource.
         * @params {string} autoscaler Name of the Autoscaler resource.
         * @params {string} project Project ID of Autoscaler resource.
         * @params {string} zone Zone name of Autoscaler resource.
         */
        update: (params: {
            autoscaler: string;
            project: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAutoscaler;
        }, callback: (err: IErrorResponse, response: IOperation, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var zoneOperations: {
        /**
         * Deletes the specified zone-specific operation resource.
         * @params {string} operation 
         * @params {string} project 
         * @params {string} zone 
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
         * @params {string} operation 
         * @params {string} project 
         * @params {string} zone 
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
         * @params {string} filter 
         * @params {number} maxResults 
         * @params {string} pageToken 
         * @params {string} project 
         * @params {string} zone 
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
    /**
     * Cloud Autoscaler resource.
     */
    interface IAutoscaler {
        /**
         * Configuration parameters for autoscaling algorithm.
         */
        autoscalingPolicy: IAutoscalingPolicy;
        /**
         * [Output Only] Creation timestamp in RFC3339 text format.
         */
        creationTimestamp: string;
        /**
         * An optional textual description of the resource provided by the client.
         */
        description: string;
        /**
         * [Output Only] Unique identifier for the resource; defined by the server.
         */
        id: string; // uint64
        /**
         * Name of the Autoscaler resource. Must be unique per project and zone.
         */
        name: string;
        /**
         * [Output Only] A self-link to the Autoscaler configuration resource.
         */
        selfLink: string;
        /**
         * URL to the entity which will be autoscaled. Currently the only supported value is ReplicaPool?s URL. Note: it is illegal to specify multiple Autoscalers for the same target.
         */
        target: string;
    }
    interface IAutoscalerListResponse {
        /**
         * Autoscaler resources.
         */
        items: IAutoscaler[];
        /**
         * [Output only] A token used to continue a truncated list request.
         */
        nextPageToken: string;
    }
    /**
     * Cloud Autoscaler policy.
     */
    interface IAutoscalingPolicy {
        /**
         * The number of seconds that the Autoscaler should wait between two succeeding changes to the number of virtual machines. You should define an interval that is at least as long as the initialization time of a virtual machine and the time it may take for replica pool to create the virtual machine. The default is 60 seconds.
         */
        coolDownPeriodSec: number; // int32
        /**
         * Exactly one utilization policy should be provided. Configuration parameters of CPU based autoscaling policy.
         */
        cpuUtilization: IAutoscalingPolicyCpuUtilization;
        /**
         * Configuration parameters of autoscaling based on custom metric.
         */
        customMetricUtilizations: IAutoscalingPolicyCustomMetricUtilization[];
        /**
         * Configuration parameters of autoscaling based on load balancer.
         */
        loadBalancingUtilization: IAutoscalingPolicyLoadBalancingUtilization;
        /**
         * The maximum number of replicas that the Autoscaler can scale up to.
         */
        maxNumReplicas: number; // int32
        /**
         * The minimum number of replicas that the Autoscaler can scale down to.
         */
        minNumReplicas: number; // int32
    }
    /**
     * CPU utilization policy.
     */
    interface IAutoscalingPolicyCpuUtilization {
        /**
         * The target utilization that the Autoscaler should maintain. It is represented as a fraction of used cores. For example: 6 cores used in 8-core VM are represented here as 0.75. Must be a float value between (0, 1]. If not defined, the default is 0.8.
         */
        utilizationTarget: number; // double
    }
    /**
     * Custom utilization metric policy.
     */
    interface IAutoscalingPolicyCustomMetricUtilization {
        /**
         * Identifier of the metric. It should be a Cloud Monitoring metric. The metric can not have negative values. The metric should be an utilization metric (increasing number of VMs handling requests x times should reduce average value of the metric roughly x times). For example you could use: compute.googleapis.com/instance/network/received_bytes_count.
         */
        metric: string;
        /**
         * Target value of the metric which Autoscaler should maintain. Must be a positive value.
         */
        utilizationTarget: number; // double
    }
    /**
     * Load balancing utilization policy.
     */
    interface IAutoscalingPolicyLoadBalancingUtilization {
        /**
         * Fraction of backend capacity utilization (set in HTTP load balancing configuration) that Autoscaler should maintain. Must be a positive float value. If not defined, the default is 0.8. For example if your maxRatePerInstance capacity (in HTTP Load Balancing configuration) is set at 10 and you would like to keep number of instances such that each instance receives 7 QPS on average, set this to 0.7.
         */
        utilizationTarget: number; // double
    }
    interface IOperation {
        clientOperationId: string;
        creationTimestamp: string;
        endTime: string;
        error: {
            errors: {
                code: string;
                location: string;
                message: string;
            }[];
        };
        httpErrorMessage: string;
        httpErrorStatusCode: number; // int32
        id: string; // uint64
        insertTime: string;
        /**
         * Type of the resource.
         */
        kind: string;
        name: string;
        operationType: string;
        progress: number; // int32
        region: string;
        selfLink: string;
        startTime: string;
        status: string;
        statusMessage: string;
        targetId: string; // uint64
        targetLink: string;
        user: string;
        warnings: {
            code: string;
            data: {
                key: string;
                value: string;
            }[];
            message: string;
        }[];
        zone: string;
    }
    interface IOperationList {
        id: string;
        items: IOperation[];
        /**
         * Type of resource.
         */
        kind: string;
        nextPageToken: string;
        selfLink: string;
    }
}
