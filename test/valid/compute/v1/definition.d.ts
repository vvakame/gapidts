declare module gapi.client {
    module compute {
        interface IAccessConfig {
            kind: string;
            name: string;
            natIP: string;
            type: string;
        }
        interface IAddress {
            address: string;
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            region: string;
            selfLink: string;
            status: string;
            users: string[];
        }
        interface IAddressAggregatedList {
            id: string;
            items: { [name:string]: IAddressesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IAddressList {
            id: string;
            items: IAddress[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IAddressesScopedList {
            addresses: IAddress[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface IAttachedDisk {
            autoDelete: boolean;
            boot: boolean;
            deviceName: string;
            index: number; // int32
            initializeParams: IAttachedDiskInitializeParams;
            kind: string;
            mode: string;
            source: string;
            type: string;
        }
        interface IAttachedDiskInitializeParams {
            diskName: string;
            diskSizeGb: string; // int64
            sourceImage: string;
        }
        interface IDeprecationStatus {
            deleted: string;
            deprecated: string;
            obsolete: string;
            replacement: string;
            state: string;
        }
        interface IDisk {
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            options: string;
            selfLink: string;
            sizeGb: string; // int64
            sourceImage: string;
            sourceImageId: string;
            sourceSnapshot: string;
            sourceSnapshotId: string;
            status: string;
            zone: string;
        }
        interface IDiskAggregatedList {
            id: string;
            items: { [name:string]: IDisksScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IDiskList {
            id: string;
            items: IDisk[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IDiskType {
            creationTimestamp: string;
            deprecated: IDeprecationStatus;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            selfLink: string;
            validDiskSize: string;
            zone: string;
        }
        interface IDiskTypeAggregatedList {
            id: string;
            items: { [name:string]: IDiskTypesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IDiskTypeList {
            id: string;
            items: IDiskType[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IDiskTypesScopedList {
            diskTypes: IDiskType[];
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
            disks: IDisk[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface IFirewall {
            allowed: {
                IPProtocol: string;
                ports: string[];
            }[];
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            network: string;
            selfLink: string;
            sourceRanges: string[];
            sourceTags: string[];
            targetTags: string[];
        }
        interface IFirewallList {
            id: string;
            items: IFirewall[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IForwardingRule {
            IPAddress: string;
            IPProtocol: string;
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            portRange: string;
            region: string;
            selfLink: string;
            target: string;
        }
        interface IForwardingRuleAggregatedList {
            id: string;
            items: { [name:string]: IForwardingRulesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IForwardingRuleList {
            id: string;
            items: IForwardingRule[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IForwardingRulesScopedList {
            forwardingRules: IForwardingRule[];
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
            healthState: string;
            instance: string;
            ipAddress: string;
        }
        interface IHttpHealthCheck {
            checkIntervalSec: number; // int32
            creationTimestamp: string;
            description: string;
            healthyThreshold: number; // int32
            host: string;
            id: string; // uint64
            kind: string;
            name: string;
            port: number; // int32
            requestPath: string;
            selfLink: string;
            timeoutSec: number; // int32
            unhealthyThreshold: number; // int32
        }
        interface IHttpHealthCheckList {
            id: string;
            items: IHttpHealthCheck[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IImage {
            archiveSizeBytes: string; // int64
            creationTimestamp: string;
            deprecated: IDeprecationStatus;
            description: string;
            diskSizeGb: string; // int64
            id: string; // uint64
            kind: string;
            name: string;
            rawDisk: {
                containerType: string;
                sha1Checksum: string;
                source: string;
            };
            selfLink: string;
            sourceType: string;
            status: string;
        }
        interface IImageList {
            id: string;
            items: IImage[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IInstance {
            canIpForward: boolean;
            creationTimestamp: string;
            description: string;
            disks: IAttachedDisk[];
            id: string; // uint64
            kind: string;
            machineType: string;
            metadata: IMetadata;
            name: string;
            networkInterfaces: INetworkInterface[];
            scheduling: IScheduling;
            selfLink: string;
            serviceAccounts: IServiceAccount[];
            status: string;
            statusMessage: string;
            tags: ITags;
            zone: string;
        }
        interface IInstanceAggregatedList {
            id: string;
            items: { [name:string]: IInstancesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IInstanceList {
            id: string;
            items: IInstance[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IInstanceReference {
            instance: string;
        }
        interface IInstancesScopedList {
            instances: IInstance[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface IMachineType {
            creationTimestamp: string;
            deprecated: IDeprecationStatus;
            description: string;
            guestCpus: number; // int32
            id: string; // uint64
            imageSpaceGb: number; // int32
            kind: string;
            maximumPersistentDisks: number; // int32
            maximumPersistentDisksSizeGb: string; // int64
            memoryMb: number; // int32
            name: string;
            scratchDisks: {
                diskGb: number; // int32
            }[];
            selfLink: string;
            zone: string;
        }
        interface IMachineTypeAggregatedList {
            id: string;
            items: { [name:string]: IMachineTypesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IMachineTypeList {
            id: string;
            items: IMachineType[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IMachineTypesScopedList {
            machineTypes: IMachineType[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface IMetadata {
            fingerprint: string; // byte
            items: {
                key: string;
                value: string;
            }[];
            kind: string;
        }
        interface INetwork {
            IPv4Range: string;
            creationTimestamp: string;
            description: string;
            gatewayIPv4: string;
            id: string; // uint64
            kind: string;
            name: string;
            selfLink: string;
        }
        interface INetworkInterface {
            accessConfigs: IAccessConfig[];
            name: string;
            network: string;
            networkIP: string;
        }
        interface INetworkList {
            id: string;
            items: INetwork[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
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
        interface IOperationAggregatedList {
            id: string;
            items: { [name:string]: IOperationsScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IOperationList {
            id: string;
            items: IOperation[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IOperationsScopedList {
            operations: IOperation[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface IProject {
            commonInstanceMetadata: IMetadata;
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            quotas: IQuota[];
            selfLink: string;
            usageExportLocation: IUsageExportLocation;
        }
        interface IQuota {
            limit: number; // double
            metric: string;
            usage: number; // double
        }
        interface IRegion {
            creationTimestamp: string;
            deprecated: IDeprecationStatus;
            description: string;
            id: string; // uint64
            kind: string;
            name: string;
            quotas: IQuota[];
            selfLink: string;
            status: string;
            zones: string[];
        }
        interface IRegionList {
            id: string;
            items: IRegion[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IRoute {
            creationTimestamp: string;
            description: string;
            destRange: string;
            id: string; // uint64
            kind: string;
            name: string;
            network: string;
            nextHopGateway: string;
            nextHopInstance: string;
            nextHopIp: string;
            nextHopNetwork: string;
            priority: number; // uint32
            selfLink: string;
            tags: string[];
            warnings: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            }[];
        }
        interface IRouteList {
            id: string;
            items: IRoute[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface IScheduling {
            automaticRestart: boolean;
            onHostMaintenance: string;
        }
        interface ISerialPortOutput {
            contents: string;
            kind: string;
            selfLink: string;
        }
        interface IServiceAccount {
            email: string;
            scopes: string[];
        }
        interface ISnapshot {
            creationTimestamp: string;
            description: string;
            diskSizeGb: string; // int64
            id: string; // uint64
            kind: string;
            name: string;
            selfLink: string;
            sourceDisk: string;
            sourceDiskId: string;
            status: string;
            storageBytes: string; // int64
            storageBytesStatus: string;
        }
        interface ISnapshotList {
            id: string;
            items: ISnapshot[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface ITags {
            fingerprint: string; // byte
            items: string[];
        }
        interface ITargetInstance {
            creationTimestamp: string;
            description: string;
            id: string; // uint64
            instance: string;
            kind: string;
            name: string;
            natPolicy: string;
            selfLink: string;
            zone: string;
        }
        interface ITargetInstanceAggregatedList {
            id: string;
            items: { [name:string]: ITargetInstancesScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface ITargetInstanceList {
            id: string;
            items: ITargetInstance[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface ITargetInstancesScopedList {
            targetInstances: ITargetInstance[];
            warning: {
                code: string;
                data: {
                    key: string;
                    value: string;
                }[];
                message: string;
            };
        }
        interface ITargetPool {
            backupPool: string;
            creationTimestamp: string;
            description: string;
            failoverRatio: number; // float
            healthChecks: string[];
            id: string; // uint64
            instances: string[];
            kind: string;
            name: string;
            region: string;
            selfLink: string;
            sessionAffinity: string;
        }
        interface ITargetPoolAggregatedList {
            id: string;
            items: { [name:string]: ITargetPoolsScopedList; };
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface ITargetPoolInstanceHealth {
            healthStatus: IHealthStatus[];
            kind: string;
        }
        interface ITargetPoolList {
            id: string;
            items: ITargetPool[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
        interface ITargetPoolsAddHealthCheckRequest {
            healthChecks: IHealthCheckReference[];
        }
        interface ITargetPoolsAddInstanceRequest {
            instances: IInstanceReference[];
        }
        interface ITargetPoolsRemoveHealthCheckRequest {
            healthChecks: IHealthCheckReference[];
        }
        interface ITargetPoolsRemoveInstanceRequest {
            instances: IInstanceReference[];
        }
        interface ITargetPoolsScopedList {
            targetPools: ITargetPool[];
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
        interface IUsageExportLocation {
            bucketName: string;
            reportNamePrefix: string;
        }
        interface IZone {
            creationTimestamp: string;
            deprecated: IDeprecationStatus;
            description: string;
            id: string; // uint64
            kind: string;
            maintenanceWindows: {
                beginTime: string;
                description: string;
                endTime: string;
                name: string;
            }[];
            name: string;
            region: string;
            selfLink: string;
            status: string;
        }
        interface IZoneList {
            id: string;
            items: IZone[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
        }
    }
}
