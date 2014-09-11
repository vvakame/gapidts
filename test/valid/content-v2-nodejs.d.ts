// Type definitions for Google Content API for Shopping v2
// Project: https://developers.google.com/shopping-content/v2/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function content(version:string):typeof googleapis.content;
}
/**
 * Manage product items, inventory, and Merchant Center accounts for Google Shopping.
 */
declare module googleapis.content {
    var accounts: {
        /**
         * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
         */
        custombatch: (params: {
            resource?: IAccountsCustomBatchRequest;
        }, callback: (err: any, response: IAccountsCustomBatchResponse) => void) => void;
        /**
         * Deletes a Merchant Center sub-account.
         * @params {string} accountId The ID of the account.
         * @params {string} merchantId The ID of the managing account.
         */
        delete: (params: {
            accountId: string;
            merchantId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a Merchant Center account.
         * @params {string} accountId The ID of the account.
         * @params {string} merchantId The ID of the managing account.
         */
        get: (params: {
            accountId: string;
            merchantId: string;
        }, callback: (err: any, response: IAccount) => void) => void;
        /**
         * Creates a Merchant Center sub-account.
         * @params {string} merchantId The ID of the managing account.
         */
        insert: (params: {
            merchantId: string;
            resource?: IAccount;
        }, callback: (err: any, response: IAccount) => void) => void;
        /**
         * Lists the sub-accounts in your Merchant Center account.
         * @params {number} maxResults The maximum number of accounts to return in the response, used for paging.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            maxResults?: number;
            merchantId: string;
            pageToken?: string;
        }, callback: (err: any, response: IAccountsListResponse) => void) => void;
        /**
         * Updates a Merchant Center account. This method supports patch semantics.
         * @params {string} accountId The ID of the account.
         * @params {string} merchantId The ID of the managing account.
         */
        patch: (params: {
            accountId: string;
            merchantId: string;
            resource?: IAccount;
        }, callback: (err: any, response: IAccount) => void) => void;
        /**
         * Updates a Merchant Center account.
         * @params {string} accountId The ID of the account.
         * @params {string} merchantId The ID of the managing account.
         */
        update: (params: {
            accountId: string;
            merchantId: string;
            resource?: IAccount;
        }, callback: (err: any, response: IAccount) => void) => void;
    };
    var accountstatuses: {
        custombatch: (params: {
            resource?: IAccountstatusesCustomBatchRequest;
        }, callback: (err: any, response: IAccountstatusesCustomBatchResponse) => void) => void;
        /**
         * Retrieves the status of a Merchant Center account.
         * @params {string} accountId The ID of the account.
         * @params {string} merchantId The ID of the managing account.
         */
        get: (params: {
            accountId: string;
            merchantId: string;
        }, callback: (err: any, response: IAccountStatus) => void) => void;
        /**
         * Lists the statuses of the sub-accounts in your Merchant Center account.
         * @params {number} maxResults The maximum number of account statuses to return in the response, used for paging.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            maxResults?: number;
            merchantId: string;
            pageToken?: string;
        }, callback: (err: any, response: IAccountstatusesListResponse) => void) => void;
    };
    var datafeeds: {
        custombatch: (params: {
            resource?: IDatafeedsCustomBatchRequest;
        }, callback: (err: any, response: IDatafeedsCustomBatchResponse) => void) => void;
        /**
         * Deletes a datafeed from your Merchant Center account.
         * @params {string} datafeedId 
         * @params {string} merchantId 
         */
        delete: (params: {
            datafeedId: string;
            merchantId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a datafeed from your Merchant Center account.
         * @params {string} datafeedId 
         * @params {string} merchantId 
         */
        get: (params: {
            datafeedId: string;
            merchantId: string;
        }, callback: (err: any, response: IDatafeed) => void) => void;
        /**
         * Registers a datafeed with your Merchant Center account.
         * @params {string} merchantId 
         */
        insert: (params: {
            merchantId: string;
            resource?: IDatafeed;
        }, callback: (err: any, response: IDatafeed) => void) => void;
        /**
         * Lists the datafeeds in your Merchant Center account.
         * @params {string} merchantId 
         */
        list: (params: {
            merchantId: string;
        }, callback: (err: any, response: IDatafeedsListResponse) => void) => void;
        /**
         * Updates a datafeed of your Merchant Center account. This method supports patch semantics.
         * @params {string} datafeedId 
         * @params {string} merchantId 
         */
        patch: (params: {
            datafeedId: string;
            merchantId: string;
            resource?: IDatafeed;
        }, callback: (err: any, response: IDatafeed) => void) => void;
        /**
         * Updates a datafeed of your Merchant Center account.
         * @params {string} datafeedId 
         * @params {string} merchantId 
         */
        update: (params: {
            datafeedId: string;
            merchantId: string;
            resource?: IDatafeed;
        }, callback: (err: any, response: IDatafeed) => void) => void;
    };
    var datafeedstatuses: {
        custombatch: (params: {
            resource?: IDatafeedstatusesCustomBatchRequest;
        }, callback: (err: any, response: IDatafeedstatusesCustomBatchResponse) => void) => void;
        /**
         * Retrieves the status of a datafeed from your Merchant Center account.
         * @params {string} datafeedId 
         * @params {string} merchantId 
         */
        get: (params: {
            datafeedId: string;
            merchantId: string;
        }, callback: (err: any, response: IDatafeedStatus) => void) => void;
        /**
         * Lists the statuses of the datafeeds in your Merchant Center account.
         * @params {string} merchantId 
         */
        list: (params: {
            merchantId: string;
        }, callback: (err: any, response: IDatafeedstatusesListResponse) => void) => void;
    };
    var inventory: {
        /**
         * Updates price and availability for multiple products or stores in a single request.
         */
        custombatch: (params: {
            resource?: IInventoryCustomBatchRequest;
        }, callback: (err: any, response: IInventoryCustomBatchResponse) => void) => void;
        /**
         * Updates price and availability of a product in your Merchant Center account.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} productId The ID of the product for which to update price and availability.
         * @params {string} storeCode The code of the store for which to update price and availability. Use online to update price and availability of an online product.
         */
        set: (params: {
            merchantId: string;
            productId: string;
            storeCode: string;
            resource?: IInventorySetRequest;
        }, callback: (err: any, response: IInventorySetResponse) => void) => void;
    };
    var products: {
        /**
         * Retrieves, inserts, and deletes multiple products in a single request.
         * @params {boolean} dryRun Flag to run the request in dry-run mode.
         */
        custombatch: (params: {
            dryRun?: boolean;
            resource?: IProductsCustomBatchRequest;
        }, callback: (err: any, response: IProductsCustomBatchResponse) => void) => void;
        /**
         * Deletes a product from your Merchant Center account.
         * @params {boolean} dryRun Flag to run the request in dry-run mode.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} productId The ID of the product.
         */
        delete: (params: {
            dryRun?: boolean;
            merchantId: string;
            productId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a product from your Merchant Center account.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} productId The ID of the product.
         */
        get: (params: {
            merchantId: string;
            productId: string;
        }, callback: (err: any, response: IProduct) => void) => void;
        /**
         * Uploads a product to your Merchant Center account.
         * @params {boolean} dryRun Flag to run the request in dry-run mode.
         * @params {string} merchantId The ID of the managing account.
         */
        insert: (params: {
            dryRun?: boolean;
            merchantId: string;
            resource?: IProduct;
        }, callback: (err: any, response: IProduct) => void) => void;
        /**
         * Lists the products in your Merchant Center account.
         * @params {number} maxResults The maximum number of products to return in the response, used for paging.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            maxResults?: number;
            merchantId: string;
            pageToken?: string;
        }, callback: (err: any, response: IProductsListResponse) => void) => void;
    };
    var productstatuses: {
        /**
         * Gets the statuses of multiple products in a single request.
         */
        custombatch: (params: {
            resource?: IProductstatusesCustomBatchRequest;
        }, callback: (err: any, response: IProductstatusesCustomBatchResponse) => void) => void;
        /**
         * Gets the status of a product from your Merchant Center account.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} productId The ID of the product.
         */
        get: (params: {
            merchantId: string;
            productId: string;
        }, callback: (err: any, response: IProductStatus) => void) => void;
        /**
         * Lists the statuses of the products in your Merchant Center account.
         * @params {number} maxResults The maximum number of product statuses to return in the response, used for paging.
         * @params {string} merchantId The ID of the managing account.
         * @params {string} pageToken The token returned by the previous request.
         */
        list: (params: {
            maxResults?: number;
            merchantId: string;
            pageToken?: string;
        }, callback: (err: any, response: IProductstatusesListResponse) => void) => void;
    };
    interface IAccount {
        /**
         * Indicates whether the merchant sells adult content.
         */
        adultContent: boolean;
        /**
         * List of linked AdWords accounts.
         */
        adwordsLinks: IAccountAdwordsLink[];
        /**
         * Merchant Center account ID.
         */
        id: string; // uint64
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#account".
         */
        kind: string;
        /**
         * Display name for the account.
         */
        name: string;
        /**
         * URL for individual seller reviews, i.e., reviews for each child account.
         */
        reviewsUrl: string;
        /**
         * Client-specific, locally-unique, internal ID for the child account.
         */
        sellerId: string;
        /**
         * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
         */
        users: IAccountUser[];
        /**
         * The merchant's website.
         */
        websiteUrl: string;
    }
    interface IAccountAdwordsLink {
        /**
         * Customer ID of the AdWords account.
         */
        adwordsId: string; // uint64
        /**
         * Status of the link between this Merchant Center account and the AdWords account.
         */
        status: string;
    }
    /**
     * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
     */
    interface IAccountStatus {
        /**
         * The ID of the account for which the status is reported.
         */
        accountId: string;
        /**
         * A list of data quality issues.
         */
        dataQualityIssues: IAccountStatusDataQualityIssue[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountStatus".
         */
        kind: string;
    }
    interface IAccountStatusDataQualityIssue {
        /**
         * Country for which this issue is reported.
         */
        country: string;
        /**
         * Actual value displayed on the landing page.
         */
        displayedValue: string;
        /**
         * Example items featuring the issue.
         */
        exampleItems: IAccountStatusExampleItem[];
        /**
         * Issue identifier.
         */
        id: string;
        /**
         * Last time the account was checked for this issue.
         */
        lastChecked: string;
        /**
         * Number of items in the account found to have the said issue.
         */
        numItems: number; // uint32
        /**
         * Severity of the problem.
         */
        severity: string;
        /**
         * Submitted value that causes the issue.
         */
        submittedValue: string;
    }
    /**
     * An example of an item that has poor data quality. An item value on the landing page differs from what is submitted, or conflicts with a policy.
     */
    interface IAccountStatusExampleItem {
        /**
         * Unique item ID as specified in the uploaded product data.
         */
        itemId: string;
        /**
         * Landing page of the item.
         */
        link: string;
        /**
         * The item value that was submitted.
         */
        submittedValue: string;
        /**
         * Title of the item.
         */
        title: string;
        /**
         * The actual value on the landing page.
         */
        valueOnLandingPage: string;
    }
    interface IAccountUser {
        /**
         * Whether user is an admin.
         */
        admin: boolean;
        /**
         * User's email address.
         */
        emailAddress: string;
    }
    interface IAccountsCustomBatchRequest {
        entries: IAccountsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the accounts service of the Content API for Shopping.
     */
    interface IAccountsCustomBatchRequestEntry {
        /**
         * The account to create or update. Only defined if the method is insert or update.
         */
        account: IAccount;
        /**
         * The ID of the account to get or delete. Only defined if the method is get or delete.
         */
        accountId: string; // uint64
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get, insert, update, or delete).
         */
        method: string;
    }
    interface IAccountsCustomBatchResponse {
        entries: IAccountsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the accounts service of the Content API for Shopping.
     */
    interface IAccountsCustomBatchResponseEntry {
        /**
         * The retrieved, created, or updated account. Not defined if the method was delete.
         */
        account: IAccount;
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponseEntry".
         */
        kind: string;
    }
    interface IAccountsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
         */
        kind: string;
        nextPageToken: string;
        resources: IAccount[];
    }
    interface IAccountstatusesCustomBatchRequest {
        entries: IAccountstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the accountstatuses service of the Content API for Shopping.
     */
    interface IAccountstatusesCustomBatchRequestEntry {
        /**
         * The ID of the (sub-)account whose status to get.
         */
        accountId: string; // uint64
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get).
         */
        method: string;
    }
    interface IAccountstatusesCustomBatchResponse {
        entries: IAccountstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the accountstatuses service of the Content API for Shopping.
     */
    interface IAccountstatusesCustomBatchResponseEntry {
        /**
         * The requested account status. Defined if and only if the request was successful.
         */
        accountStatus: IAccountStatus;
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
    }
    interface IAccountstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".
         */
        kind: string;
        nextPageToken: string;
        resources: IAccountStatus[];
    }
    interface IDatafeed {
        /**
         * The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
         */
        attributeLanguage: string;
        /**
         * The two-letter ISO 639-1 language of the items in the feed.
         */
        contentLanguage: string;
        /**
         * The type of data feed.
         */
        contentType: string;
        /**
         * Fetch schedule for the feed file.
         */
        fetchSchedule: IDatafeedFetchSchedule;
        /**
         * The filename of the feed. All feeds must have a unique file name.
         */
        fileName: string;
        /**
         * Format of the feed file.
         */
        format: IDatafeedFormat;
        /**
         * The ID of the data feed.
         */
        id: string; // int64
        /**
         * The list of intended destinations (corresponds to checked check boxes in Merchant Center).
         */
        intendedDestinations: string[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeed".
         */
        kind: string;
        /**
         * A descriptive name of the data feed.
         */
        name: string;
        /**
         * The two-letter ISO 3166 country where the items in the feed will be included in the search index.
         */
        targetCountry: string;
    }
    /**
     * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
     */
    interface IDatafeedFetchSchedule {
        /**
         * The day of the month the feed file should be fetched (1-31).
         */
        dayOfMonth: number; // uint32
        /**
         * The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
         */
        fetchUrl: string;
        /**
         * The hour of the day the feed file should be fetched (0-24).
         */
        hour: number; // uint32
        /**
         * An optional password for fetch_url.
         */
        password: string;
        /**
         * Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
         */
        timeZone: string;
        /**
         * An optional user name for fetch_url.
         */
        username: string;
        /**
         * The day of the week the feed file should be fetched.
         */
        weekday: string;
    }
    interface IDatafeedFormat {
        /**
         * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds.
         */
        columnDelimiter: string;
        /**
         * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.
         */
        fileEncoding: string;
        /**
         * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.
         */
        quotingMode: string;
    }
    interface IDatafeedStatus {
        /**
         * The ID of the feed for which the status is reported.
         */
        datafeedId: string; // uint64
        /**
         * The list of errors occurring in the feed.
         */
        errors: IDatafeedStatusError[];
        /**
         * The number of items in the feed that were processed.
         */
        itemsTotal: string; // uint64
        /**
         * The number of items in the feed that were valid.
         */
        itemsValid: string; // uint64
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeedStatus".
         */
        kind: string;
        /**
         * The processing status of the feed.
         */
        processingStatus: string;
        /**
         * The list of errors occurring in the feed.
         */
        warnings: IDatafeedStatusError[];
    }
    /**
     * An error occurring in the feed, like "invalid price".
     */
    interface IDatafeedStatusError {
        /**
         * The code of the error, e.g., "validation/invalid_value".
         */
        code: string;
        /**
         * The number of occurrences of the error in the feed.
         */
        count: string; // uint64
        /**
         * A list of example occurrences of the error, grouped by product.
         */
        examples: IDatafeedStatusExample[];
        /**
         * The error message, e.g., "Invalid price".
         */
        message: string;
    }
    /**
     * An example occurrence for a particular error.
     */
    interface IDatafeedStatusExample {
        /**
         * The ID of the example item.
         */
        itemId: string;
        /**
         * Line number in the data feed where the example is found.
         */
        lineNumber: string; // uint64
        /**
         * The problematic value.
         */
        value: string;
    }
    interface IDatafeedsCustomBatchRequest {
        entries: IDatafeedsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the datafeeds service of the Content API for Shopping.
     */
    interface IDatafeedsCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The data feed to insert.
         */
        datafeed: IDatafeed;
        /**
         * The ID of the data feed to get or delete.
         */
        datafeedId: string; // uint64
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get, insert, update, or delete).
         */
        method: string;
    }
    interface IDatafeedsCustomBatchResponse {
        entries: IDatafeedsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the datafeeds service of the Content API for Shopping.
     */
    interface IDatafeedsCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * The requested data feed. Defined if and only if the request was successful.
         */
        datafeed: IDatafeed;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
    }
    interface IDatafeedsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
         */
        kind: string;
        resources: IDatafeed[];
    }
    interface IDatafeedstatusesCustomBatchRequest {
        entries: IDatafeedstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the datafeedstatuses service of the Content API for Shopping.
     */
    interface IDatafeedstatusesCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The ID of the data feed to get or delete.
         */
        datafeedId: string; // uint64
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get).
         */
        method: string;
    }
    interface IDatafeedstatusesCustomBatchResponse {
        entries: IDatafeedstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the datafeedstatuses service of the Content API for Shopping.
     */
    interface IDatafeedstatusesCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * The requested data feed status. Defined if and only if the request was successful.
         */
        datafeedStatus: IDatafeedStatus;
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
    }
    interface IDatafeedstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
         */
        kind: string;
        resources: IDatafeedStatus[];
    }
    /**
     * An error returned by the API.
     */
    interface IError {
        /**
         * The domain of the error.
         */
        domain: string;
        /**
         * A description of the error.
         */
        message: string;
        /**
         * The error code.
         */
        reason: string;
    }
    /**
     * A list of errors returned by a failed batch entry.
     */
    interface IErrors {
        /**
         * The HTTP status of the first error in errors.
         */
        code: number; // uint32
        /**
         * A list of errors.
         */
        errors: IError[];
        /**
         * The message of the first error in errors.
         */
        message: string;
    }
    interface IInventory {
        /**
         * The availability of the product.
         */
        availability: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#inventory".
         */
        kind: string;
        /**
         * The price of the product.
         */
        price: IPrice;
        /**
         * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
         */
        quantity: number; // uint32
        /**
         * The sale price of the product. Mandatory if sale_price_effective_date is defined.
         */
        salePrice: IPrice;
        /**
         * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
         */
        salePriceEffectiveDate: string;
    }
    interface IInventoryCustomBatchRequest {
        entries: IInventoryCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the inventory service of the Content API for Shopping.
     */
    interface IInventoryCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * Price and availability of the product.
         */
        inventory: IInventory;
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The ID of the product for which to update price and availability.
         */
        productId: string;
        /**
         * The code of the store for which to update price and availability. Use online to update price and availability of an online product.
         */
        storeCode: string;
    }
    interface IInventoryCustomBatchResponse {
        entries: IInventoryCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the inventory service of the Content API for Shopping.
     */
    interface IInventoryCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponseEntry".
         */
        kind: string;
    }
    interface IInventorySetRequest {
        /**
         * The availability of the product.
         */
        availability: string;
        /**
         * The price of the product.
         */
        price: IPrice;
        /**
         * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
         */
        quantity: number; // uint32
        /**
         * The sale price of the product. Mandatory if sale_price_effective_date is defined.
         */
        salePrice: IPrice;
        /**
         * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
         */
        salePriceEffectiveDate: string;
    }
    interface IInventorySetResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".
         */
        kind: string;
    }
    interface ILoyaltyPoints {
        /**
         * Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
         */
        name: string;
        /**
         * The retailer's loyalty points in absolute value.
         */
        pointsValue: string; // int64
        /**
         * The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
         */
        ratio: number; // double
    }
    interface IPrice {
        /**
         * The currency of the price.
         */
        currency: string;
        /**
         * The price represented as a number.
         */
        value: string;
    }
    /**
     * Product data.
     */
    interface IProduct {
        /**
         * Additional URLs of images of the item.
         */
        additionalImageLinks: string[];
        /**
         * Set to true if the item is targeted towards adults.
         */
        adult: boolean;
        /**
         * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
         */
        adwordsGrouping: string;
        /**
         * Similar to adwords_grouping, but only works on CPC.
         */
        adwordsLabels: string[];
        /**
         * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
         */
        adwordsRedirect: string;
        /**
         * Target age group of the item.
         */
        ageGroup: string;
        /**
         * Availability status of the item.
         */
        availability: string;
        /**
         * The day a pre-ordered product becomes available for delivery.
         */
        availabilityDate: string;
        /**
         * Brand of the item.
         */
        brand: string;
        /**
         * The item's channel (online or local).
         */
        channel: string;
        /**
         * Color of the item.
         */
        color: string;
        /**
         * Condition or state of the item.
         */
        condition: string;
        /**
         * The two-letter ISO 639-1 language code for the item.
         */
        contentLanguage: string;
        /**
         * A list of custom (merchant-provided) attributes.
         */
        customAttributes: IProductCustomAttribute[];
        /**
         * A list of custom (merchant-provided) custom attribute groups.
         */
        customGroups: IProductCustomGroup[];
        /**
         * Custom label 0 for custom grouping of items in a Shopping campaign.
         */
        customLabel0: string;
        /**
         * Custom label 1 for custom grouping of items in a Shopping campaign.
         */
        customLabel1: string;
        /**
         * Custom label 2 for custom grouping of items in a Shopping campaign.
         */
        customLabel2: string;
        /**
         * Custom label 3 for custom grouping of items in a Shopping campaign.
         */
        customLabel3: string;
        /**
         * Custom label 4 for custom grouping of items in a Shopping campaign.
         */
        customLabel4: string;
        /**
         * Description of the item.
         */
        description: string;
        /**
         * Specifies the intended destinations for the product.
         */
        destinations: IProductDestination[];
        /**
         * The energy efficiency class as defined in EU directive 2010/30/EU.
         */
        energyEfficiencyClass: string;
        /**
         * Date that an item will expire.
         */
        expirationDate: string;
        /**
         * Target gender of the item.
         */
        gender: string;
        /**
         * Google's category of the item.
         */
        googleProductCategory: string;
        /**
         * Global Trade Item Number (GTIN) of the item.
         */
        gtin: string;
        /**
         * The REST id of the product.
         */
        id: string;
        /**
         * False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
         */
        identifierExists: boolean;
        /**
         * URL of an image of the item.
         */
        imageLink: string;
        /**
         * Number and amount of installments to pay for an item. Brazil only.
         */
        installment: IProductInstallment;
        /**
         * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
         */
        isBundle: boolean;
        /**
         * Shared identifier for all variants of the same product.
         */
        itemGroupId: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#product".
         */
        kind: string;
        /**
         * URL directly linking to your item's page on your website.
         */
        link: string;
        /**
         * Loyalty points that users receive after purchasing the item. Japan only.
         */
        loyaltyPoints: ILoyaltyPoints;
        /**
         * The material of which the item is made.
         */
        material: string;
        /**
         * Link to a mobile-optimized version of the landing page.
         */
        mobileLink: string;
        /**
         * Manufacturer Part Number (MPN) of the item.
         */
        mpn: string;
        /**
         * The number of identical products in a merchant-defined multipack.
         */
        multipack: string; // int64
        /**
         * An identifier of the item.
         */
        offerId: string;
        /**
         * Whether an item is available for purchase only online.
         */
        onlineOnly: boolean;
        /**
         * The item's pattern (e.g. polka dots).
         */
        pattern: string;
        /**
         * Price of the item.
         */
        price: IPrice;
        /**
         * Your category of the item.
         */
        productType: string;
        /**
         * Advertised sale price of the item.
         */
        salePrice: IPrice;
        /**
         * Date range during which the item is on sale.
         */
        salePriceEffectiveDate: string;
        /**
         * Shipping rules.
         */
        shipping: IProductShipping[];
        /**
         * The shipping label of the product, used to group product in account-level shipping rules.
         */
        shippingLabel: string;
        /**
         * Weight of the item for shipping.
         */
        shippingWeight: IProductShippingWeight;
        /**
         * System in which the size is specified. Recommended for apparel items.
         */
        sizeSystem: string;
        /**
         * The cut of the item. Recommended for apparel items.
         */
        sizeType: string;
        /**
         * Size of the item.
         */
        sizes: string[];
        /**
         * The two-letter ISO 3166 country code for the item.
         */
        targetCountry: string;
        /**
         * Tax information.
         */
        taxes: IProductTax[];
        /**
         * Title of the item.
         */
        title: string;
        /**
         * The preference of the denominator of the unit price.
         */
        unitPricingBaseMeasure: IProductUnitPricingBaseMeasure;
        /**
         * The measure and dimension of an item.
         */
        unitPricingMeasure: IProductUnitPricingMeasure;
        /**
         * The read-only list of intended destinations which passed validation.
         */
        validatedDestinations: string[];
        /**
         * Read-only warnings.
         */
        warnings: IError[];
    }
    interface IProductCustomAttribute {
        /**
         * The name of the attribute.
         */
        name: string;
        /**
         * The type of the attribute.
         */
        type: string;
        /**
         * Free-form unit of the attribute. Unit can only be used for values of type INT or FLOAT.
         */
        unit: string;
        /**
         * The value of the attribute.
         */
        value: string;
    }
    interface IProductCustomGroup {
        /**
         * The sub-attributes.
         */
        attributes: IProductCustomAttribute[];
        /**
         * The name of the group.
         */
        name: string;
    }
    interface IProductDestination {
        /**
         * The name of the destination.
         */
        destinationName: string;
        /**
         * Whether the destination is required, excluded or should be validated.
         */
        intention: string;
    }
    interface IProductInstallment {
        /**
         * The amount the buyer has to pay per month.
         */
        amount: IPrice;
        /**
         * The number of installments the buyer has to pay.
         */
        months: string; // int64
    }
    interface IProductShipping {
        /**
         * The two-letter ISO 3166 country code for the country to which an item will ship.
         */
        country: string;
        /**
         * The location where the shipping is applicable, represented by a location group name.
         */
        locationGroupName: string;
        /**
         * The numeric id of a location that the shipping rate applies to as defined in the AdWords API.
         */
        locationId: string; // int64
        /**
         * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix using * wildcard, a range between two postal codes or two postal code prefixes of equal length.
         */
        postalCode: string;
        /**
         * Fixed shipping price, represented as a number.
         */
        price: IPrice;
        /**
         * The geographic region to which a shipping rate applies (e.g. zip code).
         */
        region: string;
        /**
         * A free-form description of the service class or delivery speed.
         */
        service: string;
    }
    interface IProductShippingWeight {
        /**
         * The unit of value.
         */
        unit: string;
        /**
         * The weight of the product used to calculate the shipping cost of the item.
         */
        value: number; // double
    }
    /**
     * The status of a product, i.e., information about a product computed asynchronously by the data quality analysis.
     */
    interface IProductStatus {
        /**
         * A list of data quality issues associated with the product.
         */
        dataQualityIssues: IProductStatusDataQualityIssue[];
        /**
         * The intended destinations for the product.
         */
        destinationStatuses: IProductStatusDestinationStatus[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productStatus".
         */
        kind: string;
        /**
         * The link to the product.
         */
        link: string;
        /**
         * The id of the product for which status is reported.
         */
        productId: string;
        /**
         * The title of the product.
         */
        title: string;
    }
    interface IProductStatusDataQualityIssue {
        /**
         * A more detailed error string.
         */
        detail: string;
        /**
         * The fetch status for landing_page_errors.
         */
        fetchStatus: string;
        /**
         * The id of the data quality issue.
         */
        id: string;
        /**
         * The attribute name that is relevant for the issue.
         */
        location: string;
        /**
         * The time stamp of the data quality issue.
         */
        timestamp: string;
        /**
         * The value of that attribute that was found on the landing page
         */
        valueOnLandingPage: string;
        /**
         * The value the attribute had at time of evaluation.
         */
        valueProvided: string;
    }
    interface IProductStatusDestinationStatus {
        /**
         * The destination's approval status.
         */
        approvalStatus: string;
        /**
         * The name of the destination
         */
        destination: string;
        /**
         * Whether the destination is required, excluded, selected by default or should be validated.
         */
        intention: string;
    }
    interface IProductTax {
        /**
         * The country within which the item is taxed, specified with a two-letter ISO 3166 country code.
         */
        country: string;
        /**
         * The numeric id of a location that the tax rate applies to as defined in the Adwords API (https://developers.google.com/adwords/api/docs/appendix/geotargeting).
         */
        locationId: string; // int64
        /**
         * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
         */
        postalCode: string;
        /**
         * The percentage of tax rate that applies to the item price.
         */
        rate: number; // double
        /**
         * The geographic region to which the tax rate applies.
         */
        region: string;
        /**
         * Set to true if tax is charged on shipping.
         */
        taxShip: boolean;
    }
    interface IProductUnitPricingBaseMeasure {
        /**
         * The unit of the denominator.
         */
        unit: string;
        /**
         * The denominator of the unit price.
         */
        value: string; // int64
    }
    interface IProductUnitPricingMeasure {
        /**
         * The unit of the measure.
         */
        unit: string;
        /**
         * The measure of an item.
         */
        value: number; // double
    }
    interface IProductsCustomBatchRequest {
        entries: IProductsCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the products service of the Content API for Shopping.
     */
    interface IProductsCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get, insert or delete).
         */
        method: string;
        /**
         * The product to insert. Only required if the method is insert.
         */
        product: IProduct;
        /**
         * The ID of the product to get or delete. Only defined if the method is get or delete.
         */
        productId: string;
    }
    interface IProductsCustomBatchResponse {
        entries: IProductsCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the products service of the Content API for Shopping.
     */
    interface IProductsCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * A list of errors defined if and only if the request failed.
         */
        errors: IErrors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponseEntry".
         */
        kind: string;
        /**
         * The inserted product. Only defined if the method is insert and if the request was successful.
         */
        product: IProduct;
    }
    interface IProductsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
         */
        kind: string;
        nextPageToken: string;
        resources: IProduct[];
    }
    interface IProductstatusesCustomBatchRequest {
        entries: IProductstatusesCustomBatchRequestEntry[];
    }
    /**
     * A batch entry encoding a single non-batch request to the productstatuses service of the Content API for Shopping.
     */
    interface IProductstatusesCustomBatchRequestEntry {
        /**
         * An entry ID, unique within the batch request.
         */
        batchId: number; // uint32
        /**
         * The ID of the managing account.
         */
        merchantId: string; // uint64
        /**
         * The method (get).
         */
        method: string;
        /**
         * The ID of the product whose status to get.
         */
        productId: string;
    }
    interface IProductstatusesCustomBatchResponse {
        entries: IProductstatusesCustomBatchResponseEntry[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".
         */
        kind: string;
    }
    /**
     * A batch entry encoding a single non-batch response from the productstatuses service of the Content API for Shopping.
     */
    interface IProductstatusesCustomBatchResponseEntry {
        /**
         * The ID of the request entry this entry responds to.
         */
        batchId: number; // uint32
        /**
         * A list of errors, if the request failed.
         */
        errors: IErrors;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponseEntry".
         */
        kind: string;
        /**
         * The requested product status. Only defined if the request was successful.
         */
        productStatus: IProductStatus;
    }
    interface IProductstatusesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
         */
        kind: string;
        nextPageToken: string;
        resources: IProductStatus[];
    }
}
