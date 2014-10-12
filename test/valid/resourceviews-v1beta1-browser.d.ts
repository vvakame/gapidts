// Type definitions for Google Resource Views API v1beta1
// Project: https://developers.google.com/compute/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/compute
//   View and manage your Google Compute Engine resources
// https://www.googleapis.com/auth/compute.readonly
//   View your Google Compute Engine resources
// https://www.googleapis.com/auth/ndev.cloudman
//   View and manage your Google Cloud Platform management resources and deployment status information
// https://www.googleapis.com/auth/ndev.cloudman.readonly
//   View your Google Cloud Platform management resources and deployment status information

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
     */
    module resourceviews {
        var regionViews: {
            /**
             * Add resources to the view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             */
            addresources: (params: {
                projectName: string;
                region: string;
                resourceViewName: string;
                resource?: IRegionViewsAddResourcesRequest;
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
             * Delete a resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             */
            delete: (params: {
                projectName: string;
                region: string;
                resourceViewName: string;
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
             * Get the information of a resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             */
            get: (params: {
                projectName: string;
                region: string;
                resourceViewName: string;
            }) => {
                execute(callback: (data: IResponse<IResourceView>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Create a resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             */
            insert: (params: {
                projectName: string;
                region: string;
                resource?: IResourceView;
            }) => {
                execute(callback: (data: IResponse<IRegionViewsInsertResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List resource views.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                projectName: string;
                region: string;
            }) => {
                execute(callback: (data: IResponse<IRegionViewsListResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List the resources in the view.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             */
            listresources: (params: {
                maxResults?: number;
                pageToken?: string;
                projectName: string;
                region: string;
                resourceViewName: string;
            }) => {
                execute(callback: (data: IResponse<IRegionViewsListResourcesResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRegionViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Remove resources from the view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} region The region name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             */
            removeresources: (params: {
                projectName: string;
                region: string;
                resourceViewName: string;
                resource?: IRegionViewsRemoveResourcesRequest;
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
        var zoneViews: {
            /**
             * Add resources to the view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            addresources: (params: {
                projectName: string;
                resourceViewName: string;
                zone: string;
                resource?: IZoneViewsAddResourcesRequest;
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
             * Delete a resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            delete: (params: {
                projectName: string;
                resourceViewName: string;
                zone: string;
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
             * Get the information of a zonal resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            get: (params: {
                projectName: string;
                resourceViewName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IResourceView>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IResourceView>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Create a resource view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            insert: (params: {
                projectName: string;
                zone: string;
                resource?: IResourceView;
            }) => {
                execute(callback: (data: IResponse<IZoneViewsInsertResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsInsertResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List resource views.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectName The project name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                projectName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IZoneViewsListResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List the resources of the resource view.
             * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
             * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
             * @params {string} projectName The project name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            listresources: (params: {
                maxResults?: number;
                pageToken?: string;
                projectName: string;
                resourceViewName: string;
                zone: string;
            }) => {
                execute(callback: (data: IResponse<IZoneViewsListResourcesResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IZoneViewsListResourcesResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Remove resources from the view.
             * @params {string} projectName The project name of the resource view.
             * @params {string} resourceViewName The name of the resource view.
             * @params {string} zone The zone name of the resource view.
             */
            removeresources: (params: {
                projectName: string;
                resourceViewName: string;
                zone: string;
                resource?: IZoneViewsRemoveResourcesRequest;
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
        /**
         * The Label to be applied to the resource views.
         */
        interface ILabel {
            /**
             * Key of the label.
             */
            key: string;
            /**
             * Value of the label.
             */
            value: string;
        }
        /**
         * The request to add resources to the resource view.
         */
        interface IRegionViewsAddResourcesRequest {
            /**
             * The list of resources to be added.
             */
            resources: string[];
        }
        /**
         * The response to a resource view insert request.
         */
        interface IRegionViewsInsertResponse {
            /**
             * The resource view object inserted.
             */
            resource: IResourceView;
        }
        /**
         * The response to the list resource request.
         */
        interface IRegionViewsListResourcesResponse {
            /**
             * The resources in the view.
             */
            members: string[];
            /**
             * A token used for pagination.
             */
            nextPageToken: string;
        }
        /**
         * The response to the list resource view request.
         */
        interface IRegionViewsListResponse {
            /**
             * A token used for pagination.
             */
            nextPageToken: string;
            /**
             * The list of resource views that meet the criteria.
             */
            resourceViews: IResourceView[];
        }
        /**
         * The request to remove resources from the resource view.
         */
        interface IRegionViewsRemoveResourcesRequest {
            /**
             * The list of resources to be removed.
             */
            resources: string[];
        }
        /**
         * The resource view object.
         */
        interface IResourceView {
            /**
             * The creation time of the resource view.
             */
            creationTime: string;
            /**
             * The detailed description of the resource view.
             */
            description: string;
            /**
             * [Output Only] The ID of the resource view.
             */
            id: string;
            /**
             * Type of the resource.
             */
            kind: string;
            /**
             * The labels for events.
             */
            labels: ILabel[];
            /**
             * The last modified time of the view. Not supported yet.
             */
            lastModified: string;
            /**
             * A list of all resources in the resource view.
             */
            members: string[];
            /**
             * The name of the resource view.
             */
            name: string;
            /**
             * The total number of resources in the resource view.
             */
            numMembers: number; // uint32
            /**
             * [Output Only] A self-link to the resource view.
             */
            selfLink: string;
        }
        /**
         * The request to add resources to the resource view.
         */
        interface IZoneViewsAddResourcesRequest {
            /**
             * The list of resources to be added.
             */
            resources: string[];
        }
        /**
         * The response to an insert request.
         */
        interface IZoneViewsInsertResponse {
            /**
             * The resource view object that has been inserted.
             */
            resource: IResourceView;
        }
        /**
         * The response to a list resource request.
         */
        interface IZoneViewsListResourcesResponse {
            /**
             * The full URL of resources in the view.
             */
            members: string[];
            /**
             * A token used for pagination.
             */
            nextPageToken: string;
        }
        /**
         * The response to a list request.
         */
        interface IZoneViewsListResponse {
            /**
             * A token used for pagination.
             */
            nextPageToken: string;
            /**
             * The result that contains all resource views that meet the criteria.
             */
            resourceViews: IResourceView[];
        }
        /**
         * The request to remove resources from the resource view.
         */
        interface IZoneViewsRemoveResourcesRequest {
            /**
             * The list of resources to be removed.
             */
            resources: string[];
        }
    }
}
