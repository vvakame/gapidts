// Type definitions for Google Cloud Monitoring API v2beta1
// Project: https://developers.google.com/cloud-monitoring/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module gapi.client {
    /**
     * API for accessing Google Cloud and API monitoring data.
     */
    module cloudmonitoring {
        var metricDescriptors: {
            /**
             * List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
             * @params {number} count Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.
             * @params {string} pageToken The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
             * @params {string} project The project id. The value can be the numeric project ID or string-based project name.
             * @params {string} query The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics are returned.
             */
            list: (params: {
                count?: number;
                pageToken?: string;
                project: string;
                query?: string;
                resource?: IListMetricDescriptorsRequest;
            }, callback: (err: any, response: IListMetricDescriptorsResponse) => void) => void;
        };
        var timeseries: {
            /**
             * List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
             * @params {number} count Maximum number of data points per page, which is used for pagination of results.
             * @params {string} labels A collection of labels for the matching time series, which are represented as:  
- key==value: key equals the value 
- key=~value: key regex matches the value 
- key!=value: key does not equal the value 
- key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify:
label=cloud.googleapis.com%2Flocation=~us-central1.*
             * @params {string} metric Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
             * @params {string} oldest Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
             * @params {string} pageToken The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
             * @params {string} project The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
             * @params {string} timespan Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
- s: second 
- m: minute 
- h: hour 
- d: day 
- w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.

If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
             * @params {string} youngest End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
             */
            list: (params: {
                count?: number;
                labels?: string;
                metric: string;
                oldest?: string;
                pageToken?: string;
                project: string;
                timespan?: string;
                youngest: string;
                resource?: IListTimeseriesRequest;
            }, callback: (err: any, response: IListTimeseriesResponse) => void) => void;
        };
        var timeseriesDescriptors: {
            /**
             * List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.
             * @params {number} count Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.
             * @params {string} labels A collection of labels for the matching time series, which are represented as:  
- key==value: key equals the value 
- key=~value: key regex matches the value 
- key!=value: key does not equal the value 
- key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could specify:
label=cloud.googleapis.com%2Flocation=~us-central1.*
             * @params {string} metric Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
             * @params {string} oldest Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest]
             * @params {string} pageToken The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of results.
             * @params {string} project The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
             * @params {string} timespan Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest parameters should not be used together. Units:  
- s: second 
- m: minute 
- h: hour 
- d: day 
- w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.

If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
             * @params {string} youngest End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
             */
            list: (params: {
                count?: number;
                labels?: string;
                metric: string;
                oldest?: string;
                pageToken?: string;
                project: string;
                timespan?: string;
                youngest: string;
                resource?: IListTimeseriesDescriptorsRequest;
            }, callback: (err: any, response: IListTimeseriesDescriptorsResponse) => void) => void;
        };
        /**
         * The request of cloudmonitoring.metricDescriptors.list.
         */
        interface IListMetricDescriptorsRequest {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsRequest".
             */
            kind: string;
        }
        /**
         * The response of cloudmonitoring.metricDescriptors.list.
         */
        interface IListMetricDescriptorsResponse {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsResponse".
             */
            kind: string;
            /**
             * The returned metric descriptors.
             */
            metrics: IMetricDescriptor[];
            /**
             * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, pass this value to the pageToken query parameter.
             */
            nextPageToken: string;
        }
        /**
         * The request of cloudmonitoring.timeseriesDescriptors.list
         */
        interface IListTimeseriesDescriptorsRequest {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsRequest".
             */
            kind: string;
        }
        /**
         * The response of cloudmonitoring.timeseriesDescriptors.list
         */
        interface IListTimeseriesDescriptorsResponse {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsResponse".
             */
            kind: string;
            /**
             * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set this value to the pageToken query parameter.
             */
            nextPageToken: string;
            /**
             * The oldest timestamp of the interval of this query, as an RFC 3339 string.
             */
            oldest: string; // date-time
            /**
             * The returned time series descriptors.
             */
            timeseries: ITimeseriesDescriptor[];
            /**
             * The youngest timestamp of the interval of this query, as an RFC 3339 string.
             */
            youngest: string; // date-time
        }
        /**
         * The request of cloudmonitoring.timeseries.list
         */
        interface IListTimeseriesRequest {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesRequest".
             */
            kind: string;
        }
        /**
         * The response of cloudmonitoring.timeseries.list
         */
        interface IListTimeseriesResponse {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesResponse".
             */
            kind: string;
            /**
             * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set the pageToken query parameter to this value. All of the points of a time series will be returned before returning any point of the subsequent time series.
             */
            nextPageToken: string;
            /**
             * The oldest timestamp of the interval of this query as an RFC 3339 string.
             */
            oldest: string; // date-time
            /**
             * The returned time series.
             */
            timeseries: ITimeseries[];
            /**
             * The youngest timestamp of the interval of this query as an RFC 3339 string.
             */
            youngest: string; // date-time
        }
        /**
         * A metricDescriptor defines the name, label keys, and data type of a particular metric.
         */
        interface IMetricDescriptor {
            /**
             * Description of this metric.
             */
            description: string;
            /**
             * Labels defined for this metric.
             */
            labels: IMetricDescriptorLabelDescriptor[];
            /**
             * The name of this metric.
             */
            name: string;
            /**
             * The project ID to which the metric belongs.
             */
            project: string;
            /**
             * Type description for this metric.
             */
            typeDescriptor: IMetricDescriptorTypeDescriptor;
        }
        /**
         * A label in a metric is a description of this metric, including the key of this description (what the description is), and the value for this description.
         */
        interface IMetricDescriptorLabelDescriptor {
            /**
             * Label description.
             */
            description: string;
            /**
             * Label key.
             */
            key: string;
        }
        /**
         * A type in a metric contains information about how the metric is collected and what its data points look like.
         */
        interface IMetricDescriptorTypeDescriptor {
            /**
             * The method of collecting data for the metric.
             */
            metricType: string;
            /**
             * The type of data that is written to a timeseries point for this metric.
             */
            valueType: string;
        }
        /**
         * Point is a single point in a time series. It consists of a start time, an end time, and a value.
         */
        interface IPoint {
            /**
             * The value of this data point. Either "true" or "false".
             */
            boolValue: boolean;
            /**
             * The value of this data point as a distribution. A distribution value can contain a list of buckets and/or an underflowBucket and an overflowBucket. The values of these points can be used to create a histogram.
             */
            distributionValue: IPointDistribution;
            /**
             * The value of this data point as a double-precision floating-point number.
             */
            doubleValue: number; // double
            /**
             * The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be non-empty. Both start and end are RFC 3999 strings.
             */
            end: string; // date-time
            /**
             * The value of this data point as a 64-bit integer.
             */
            int64Value: string; // int64
            /**
             * The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be non-empty. Both start and end are RFC 3999 strings.
             */
            start: string; // date-time
            /**
             * The value of this data point in string format.
             */
            stringValue: string;
        }
        /**
         * Distribution data point value type. When writing distribution points, try to be consistent with the boundaries of your buckets. If you must modify the bucket boundaries, then do so by merging, partitioning, or appending rather than skewing them.
         */
        interface IPointDistribution {
            /**
             * The finite buckets.
             */
            buckets: IPointDistributionBucket[];
            /**
             * The overflow bucket.
             */
            overflowBucket: IPointDistributionOverflowBucket;
            /**
             * The underflow bucket.
             */
            underflowBucket: IPointDistributionUnderflowBucket;
        }
        /**
         * The histogram's bucket. Buckets that form the histogram of a distribution value. If the upper bound of a bucket, say U1, does not equal the lower bound of the next bucket, say L2, this means that there is no event in [U1, L2).
         */
        interface IPointDistributionBucket {
            /**
             * The number of events whose values are in the interval defined by this bucket.
             */
            count: string; // int64
            /**
             * The lower bound of the value interval of this bucket (inclusive).
             */
            lowerBound: number; // double
            /**
             * The upper bound of the value interval of this bucket (exclusive).
             */
            upperBound: number; // double
        }
        /**
         * The overflow bucket is a special bucket that does not have the upperBound field; it includes all of the events that are no less than its lower bound.
         */
        interface IPointDistributionOverflowBucket {
            /**
             * The number of events whose values are in the interval defined by this bucket.
             */
            count: string; // int64
            /**
             * The lower bound of the value interval of this bucket (inclusive).
             */
            lowerBound: number; // double
        }
        /**
         * The underflow bucket is a special bucket that does not have the lowerBound field; it includes all of the events that are less than its upper bound.
         */
        interface IPointDistributionUnderflowBucket {
            /**
             * The number of events whose values are in the interval defined by this bucket.
             */
            count: string; // int64
            /**
             * The upper bound of the value interval of this bucket (exclusive).
             */
            upperBound: number; // double
        }
        /**
         * The monitoring data is organized as metrics and stored as data points that are recorded over time. Each data point represents information like the CPU utilization of your virtual machine. A historical record of these data points is called a time series.
         */
        interface ITimeseries {
            /**
             * The data points of this time series. The points are listed in order of their end timestamp, from younger to older.
             */
            points: IPoint[];
            /**
             * The descriptor of this time series.
             */
            timeseriesDesc: ITimeseriesDescriptor;
        }
        /**
         * TimeseriesDescriptor identifies a single time series.
         */
        interface ITimeseriesDescriptor {
            /**
             * The set of key-value pairs that describe this time series, including target-specific labels and metric-specific labels.
             */
            labels: {
                [name:string]: string;
            };
            /**
             * The name of the metric.
             */
            metric: string;
            /**
             * The Developers Console project number to which this time series belongs.
             */
            project: string;
        }
    }
}
