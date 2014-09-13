// Type definitions for Google Cloud Pub/Sub API v1beta1
// Project: https://developers.google.com/pubsub/v1beta1
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/pubsub
//   View and manage Pub/Sub topics and subscriptions

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function pubsub(version:string):typeof googleapis.pubsub;
    function pubsub(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.pubsub;
}
/**
 * Provides reliable, many-to-many, asynchronous messaging between applications.
 */
declare module googleapis.pubsub {
    var subscriptions: {
        /**
         * Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
         */
        acknowledge: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IAcknowledgeRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND.
         */
        create: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ISubscription;
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
         * @params {string} subscription The subscription to delete.
         */
        delete: (params: {
            subscription: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets the configuration details of a subscription.
         * @params {string} subscription The name of the subscription to get.
         */
        get: (params: {
            subscription: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscription, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists matching subscriptions.
         * @params {number} maxResults Maximum number of subscriptions to return.
         * @params {string} pageToken The value obtained in the last ListSubscriptionsResponse for continuation.
         * @params {string} query A valid label query expression.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            query?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IListSubscriptionsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Modifies the Ack deadline for a message received from a pull request.
         */
        modifyAckDeadline: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IModifyAckDeadlineRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an end point by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
         */
        modifyPushConfig: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IModifyPushConfigRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
         */
        pull: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPullRequest;
        }, callback: (err: IErrorResponse, response: IPullResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var topics: {
        /**
         * Creates the given topic with the given name.
         */
        create: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITopic;
        }, callback: (err: IErrorResponse, response: ITopic, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes the topic with the given name. All subscriptions to this topic are also deleted. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
         * @params {string} topic Name of the topic to delete.
         */
        delete: (params: {
            topic: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
         * @params {string} topic The name of the topic to get.
         */
        get: (params: {
            topic: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITopic, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists matching topics.
         * @params {number} maxResults Maximum number of topics to return.
         * @params {string} pageToken The value obtained in the last ListTopicsResponse for continuation.
         * @params {string} query A valid label query expression.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            query?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IListTopicsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
         */
        publish: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IPublishRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    interface IAcknowledgeRequest {
        /**
         * The Ack ID for the message being acknowledged. This was returned by the Pub/Sub system in the Pull response.
         */
        ackId: string[];
        /**
         * The subscription whose message is being acknowledged.
         */
        subscription: string;
    }
    /**
     * A key-value pair applied to a given object.
     */
    interface ILabel {
        /**
         * The key of a label is a syntactically valid URL (as per RFC 1738) with the "scheme" and initial slashes omitted and with the additional restrictions noted below. Each key should be globally unique. The "host" portion is called the "namespace" and is not necessarily resolvable to a network endpoint. Instead, the namespace indicates what system or entity defines the semantics of the label. Namespaces do not restrict the set of objects to which a label may be associated.
         * 
         * Keys are defined by the following grammar:
         * 
         * key = hostname "/" kpath kpath = ksegment *[ "/" ksegment ] ksegment = alphadigit | *[ alphadigit | "-" | "_" | "." ]
         * 
         * where "hostname" and "alphadigit" are defined as in RFC 1738.
         * 
         * Example key: spanner.google.com/universe
         */
        key: string;
        /**
         * An integer value.
         */
        numValue: string; // int64
        /**
         * A string value.
         */
        strValue: string;
    }
    interface IListSubscriptionsResponse {
        /**
         * If not empty, indicates that there are more subscriptions that match the request and this value should be passed to the next ListSubscriptionsRequest to continue.
         */
        nextPageToken: string;
        /**
         * The subscriptions that match the request.
         */
        subscription: ISubscription[];
    }
    interface IListTopicsResponse {
        /**
         * If not empty, indicates that there are more topics that match the request, and this value should be passed to the next ListTopicsRequest to continue.
         */
        nextPageToken: string;
        /**
         * The resulting topics.
         */
        topic: ITopic[];
    }
    interface IModifyAckDeadlineRequest {
        /**
         * The new Ack deadline. Must be >= 1.
         */
        ackDeadlineSeconds: number; // int32
        /**
         * The Ack ID.
         */
        ackId: string;
        /**
         * The name of the subscription from which messages are being pulled.
         */
        subscription: string;
    }
    interface IModifyPushConfigRequest {
        /**
         * An empty push_config indicates that the Pub/Sub system should pause pushing messages from the given subscription.
         */
        pushConfig: IPushConfig;
        /**
         * The name of the subscription.
         */
        subscription: string;
    }
    interface IPublishRequest {
        /**
         * The message to publish.
         */
        message: IPubsubMessage;
        /**
         * The name of the topic for which the message is being added.
         */
        topic: string;
    }
    /**
     * An event indicating a received message or truncation event.
     */
    interface IPubsubEvent {
        /**
         * Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.)
         */
        deleted: boolean;
        /**
         * A received message.
         */
        message: IPubsubMessage;
        /**
         * The subscription that received the event.
         */
        subscription: string;
        /**
         * Indicates that this subscription has been truncated.
         */
        truncated: boolean;
    }
    /**
     * A message data and its labels.
     */
    interface IPubsubMessage {
        /**
         * The message payload.
         */
        data: string; // byte
        /**
         * Optional list of labels for this message. Keys in this collection must be unique.
         */
        label: ILabel[];
    }
    interface IPullRequest {
        /**
         * If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning FAILED_PRECONDITION. The client may cancel the request if it does not wish to wait any longer for the response.
         */
        returnImmediately: boolean;
        /**
         * The subscription from which a message should be pulled.
         */
        subscription: string;
    }
    /**
     * Either a PubsubMessage or a truncation event. One of these two must be populated.
     */
    interface IPullResponse {
        /**
         * This ID must be used to acknowledge the received event or message.
         */
        ackId: string;
        /**
         * A pubsub message or truncation event.
         */
        pubsubEvent: IPubsubEvent;
    }
    /**
     * Configuration for a push delivery endpoint.
     */
    interface IPushConfig {
        /**
         * A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".
         */
        pushEndpoint: string;
    }
    /**
     * A subscription resource.
     */
    interface ISubscription {
        /**
         * For either push or pull delivery, the value is the maximum time after a subscriber receives a message before the subscriber should acknowledge or Nack the message. If the Ack deadline for a message passes without an Ack or a Nack, the Pub/Sub system will eventually redeliver the message. If a subscriber acknowledges after the deadline, the Pub/Sub system may accept the Ack, but it is possible that the message has been already delivered again. Multiple Acks to the message are allowed and will succeed.
         * 
         * For push delivery, this value is used to set the request timeout for the call to the push endpoint.
         * 
         * For pull delivery, this value is used as the initial value for the Ack deadline. It may be overridden for a specific pull request (message) with ModifyAckDeadline. While a message is outstanding (i.e. it has been delivered to a pull subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub system will not deliver that message to another pull subscriber (on a best-effort basis).
         */
        ackDeadlineSeconds: number; // int32
        /**
         * Name of the subscription.
         */
        name: string;
        /**
         * If push delivery is used with this subscription, this field is used to configure it.
         */
        pushConfig: IPushConfig;
        /**
         * The name of the topic from which this subscription is receiving messages.
         */
        topic: string;
    }
    /**
     * A topic resource.
     */
    interface ITopic {
        /**
         * Name of the topic.
         */
        name: string;
    }
}
