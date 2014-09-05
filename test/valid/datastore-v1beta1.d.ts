declare module gapi.client {
    /**
     * API for accessing Google Cloud Datastore.
     */
    module datastore {
        var datasets: {
            /**
             * Allocate IDs for incomplete keys (useful for referencing an entity before it is inserted).
             * @params {string} datasetId Identifies the dataset.
             */
            allocateIds: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IAllocateIdsResponse
            /**
             * Begin a new transaction.
             * @params {string} datasetId Identifies the dataset.
             */
            beginTransaction: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBeginTransactionResponse
            /**
             * Create, delete or modify some entities outside a transaction.
             * @params {string} datasetId Identifies the dataset.
             */
            blindWrite: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IBlindWriteResponse
            /**
             * Commit a transaction, optionally creating, deleting or modifying some entities.
             * @params {string} datasetId Identifies the dataset.
             */
            commit: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommitResponse
            /**
             * Look up some entities by key.
             * @params {string} datasetId Identifies the dataset.
             */
            lookup: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ILookupResponse
            /**
             * Roll back a transaction.
             * @params {string} datasetId Identifies the dataset.
             */
            rollback: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRollbackResponse
            /**
             * Query for entities.
             * @params {string} datasetId Identifies the dataset.
             */
            runQuery: (params: {
                datasetId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRunQueryResponse
        };
        interface IAllocateIdsRequest {
            /**
             * A list of keys with incomplete key paths to allocate IDs for. No key may be reserved/read-only.
             */
            keys: IKey[];
        }
        interface IAllocateIdsResponse {
            header: IResponseHeader;
            /**
             * The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
             */
            keys: IKey[];
        }
        interface IBeginTransactionRequest {
            /**
             * The transaction isolation level. Either snapshot or serializable. The default isolation level is snapshot isolation, which means that another transaction may not concurrently modify the data that is modified by this transaction. Optionally, a transaction can request to be made serializable which means that another transaction cannot concurrently modify the data that is read or modified by this transaction.
             */
            isolationLevel: string;
        }
        interface IBeginTransactionResponse {
            header: IResponseHeader;
            /**
             * The transaction identifier (always present).
             */
            transaction: string; // byte
        }
        interface IBlindWriteRequest {
            /**
             * The mutation to perform.
             */
            mutation: IMutation;
        }
        interface IBlindWriteResponse {
            header: IResponseHeader;
            /**
             * The result of performing the mutation (always present).
             */
            mutationResult: IMutationResult;
        }
        interface ICommitRequest {
            /**
             * The mutation to perform. Optional.
             */
            mutation: IMutation;
            /**
             * The transaction identifier, returned by a call to beginTransaction. Must be set when mode is TRANSACTIONAL.
             */
            transaction: string; // byte
        }
        interface ICommitResponse {
            header: IResponseHeader;
            /**
             * The result of performing the mutation (if any).
             */
            mutationResult: IMutationResult;
        }
        interface ICompositeFilter {
            /**
             * The list of filters to combine. Must contain at least one filter.
             */
            filters: IFilter[];
            /**
             * The operator for combining multiple filters. Only "and" is currently supported.
             */
            operator: string;
        }
        interface IEntity {
            /**
             * The entity's key.
             * 
             * An entity must have a key, unless otherwise documented (for example, an entity in Value.entityValue may have no key). An entity's kind is its key's path's last element's kind, or null if it has no key.
             */
            key: IKey;
            /**
             * The entity's properties.
             */
            properties: { [name:string]: IProperty; };
        }
        interface IEntityResult {
            /**
             * The resulting entity.
             */
            entity: IEntity;
        }
        interface IFilter {
            /**
             * A composite filter.
             */
            compositeFilter: ICompositeFilter;
            /**
             * A filter on a property.
             */
            propertyFilter: IPropertyFilter;
        }
        interface IGqlQuery {
            /**
             * When false, the query string must not contain a literal.
             */
            allowLiteral: boolean;
            /**
             * A named argument must set field GqlQueryArg.name. No two named arguments may have the same name. For each non-reserved named binding site in the query string, there must be a named argument with that name, but not necessarily the inverse.
             */
            nameArgs: IGqlQueryArg[];
            /**
             * Numbered binding site @1 references the first numbered argument, effectively using 1-based indexing, rather than the usual 0. A numbered argument must NOT set field GqlQueryArg.name. For each binding site numbered i in query_string, there must be an ith numbered argument. The inverse must also be true.
             */
            numberArgs: IGqlQueryArg[];
            queryString: string;
        }
        interface IGqlQueryArg {
            cursor: string; // byte
            /**
             * Must match regex "[A-Za-z_$][A-Za-z_$0-9]*". Must not match regex "__.*__". Must not be "".
             */
            name: string;
            value: IValue;
        }
        interface IKey {
            /**
             * Entities are partitioned into subsets, currently identified by a dataset (usually implicitly specified by the project) and namespace ID. Queries are scoped to a single partition.
             */
            partitionId: IPartitionId;
            /**
             * The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a root entity, the second element identifies a child of the root entity, the third element a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's ancestors. An entity path is always fully complete: ALL of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. A path can never be empty.
             */
            path: IKeyPathElement[];
        }
        /**
         * A (kind, ID/name) pair used to construct a key path.
         * 
         * At most one of name or ID may be set. If either is set, the element is complete. If neither is set, the element is incomplete.
         */
        interface IKeyPathElement {
            /**
             * The ID of the entity. Always > 0.
             */
            id: string; // int64
            /**
             * The kind of the entity. Kinds matching regex "__.*__" are reserved/read-only. Cannot be "".
             */
            kind: string;
            /**
             * The name of the entity. Names matching regex "__.*__" are reserved/read-only. Cannot be "".
             */
            name: string;
        }
        interface IKindExpression {
            /**
             * The name of the kind.
             */
            name: string;
        }
        interface ILookupRequest {
            /**
             * Keys of entities to look up from the datastore.
             */
            keys: IKey[];
            /**
             * Options for this lookup request. Optional.
             */
            readOptions: IReadOptions;
        }
        interface ILookupResponse {
            /**
             * A list of keys that were not looked up due to resource constraints.
             */
            deferred: IKey[];
            /**
             * Entities found.
             */
            found: IEntityResult[];
            header: IResponseHeader;
            /**
             * Entities not found, with only the key populated.
             */
            missing: IEntityResult[];
        }
        interface IMutation {
            /**
             * Keys of entities to delete. Each key must have a complete key path and must not be reserved/read-only.
             */
            delete: IKey[];
            /**
             * Ignore a user specified read-only period. Optional.
             */
            force: boolean;
            /**
             * Entities to insert. Each inserted entity's key must have a complete path and must not be reserved/read-only.
             */
            insert: IEntity[];
            /**
             * Insert entities with a newly allocated ID. Each inserted entity's key must omit the final identifier in its path and must not be reserved/read-only.
             */
            insertAutoId: IEntity[];
            /**
             * Entities to update. Each updated entity's key must have a complete path and must not be reserved/read-only.
             */
            update: IEntity[];
            /**
             * Entities to upsert. Each upserted entity's key must have a complete path and must not be reserved/read-only.
             */
            upsert: IEntity[];
        }
        interface IMutationResult {
            /**
             * Number of index writes.
             */
            indexUpdates: number; // int32
            /**
             * Keys for insertAutoId entities. One per entity from the request, in the same order.
             */
            insertAutoIdKeys: IKey[];
        }
        interface IPartitionId {
            /**
             * The dataset ID.
             */
            datasetId: string;
            /**
             * The namespace.
             */
            namespace: string;
        }
        interface IProperty {
            /**
             * If this property contains a list of values. Input values may explicitly set multi to false, but otherwise false is always represented by omitting multi.
             */
            multi: boolean;
            /**
             * The value(s) of the property. When multi is false there is always exactly one value. When multi is true there are always one or more values. Each value can have only one value property populated. For example, you cannot have a values list of { values: [ { integerValue: 22, stringValue: "a" } ] }, but you can have { multi: true, values: [ { integerValue: 22 }, { stringValue: "a" } ] }.
             */
            values: IValue[];
        }
        interface IPropertyExpression {
            /**
             * The aggregation function to apply to the property. Optional. Can only be used when grouping by at least one property. Must then be set on all properties in the projection that are not being grouped by. Aggregation functions: first selects the first result as determined by the query's order.
             */
            aggregationFunction: string;
            /**
             * The property to project.
             */
            property: IPropertyReference;
        }
        interface IPropertyFilter {
            /**
             * The operator to filter by. One of lessThan, lessThanOrEqual, greaterThan, greaterThanOrEqual, equal, or hasAncestor.
             */
            operator: string;
            /**
             * The property to filter by.
             */
            property: IPropertyReference;
            /**
             * The value to compare the property to.
             */
            value: IValue;
        }
        interface IPropertyOrder {
            /**
             * The direction to order by. One of ascending or descending. Optional, defaults to ascending.
             */
            direction: string;
            /**
             * The property to order by.
             */
            property: IPropertyReference;
        }
        interface IPropertyReference {
            /**
             * The name of the property.
             */
            name: string;
        }
        interface IQuery {
            /**
             * An ending point for the query results. Optional. Query cursors are returned in query result batches.
             */
            endCursor: string; // byte
            /**
             * The filter to apply (optional).
             */
            filter: IFilter;
            /**
             * The properties to group by (if empty, no grouping is applied to the result set).
             */
            groupBy: IPropertyReference[];
            /**
             * The kinds to query (if empty, returns entities from all kinds).
             */
            kinds: IKindExpression[];
            /**
             * The maximum number of results to return. Applies after all other constraints. Optional.
             */
            limit: number; // int32
            /**
             * The number of results to skip. Applies before limit, but after all other constraints (optional, defaults to 0).
             */
            offset: number; // int32
            /**
             * The order to apply to the query results (if empty, order is unspecified).
             */
            order: IPropertyOrder[];
            /**
             * The projection to return. If not set the entire entity is returned.
             */
            projection: IPropertyExpression[];
            /**
             * A starting point for the query results. Optional. Query cursors are returned in query result batches.
             */
            startCursor: string; // byte
        }
        interface IQueryResultBatch {
            /**
             * A cursor that points to the position after the last result in the batch. May be absent.
             */
            endCursor: string; // byte
            /**
             * The result type for every entity in entityResults. full for full entities, projection for entities with only projected properties, keyOnly for entities with only a key.
             */
            entityResultType: string;
            /**
             * The results for this batch.
             */
            entityResults: IEntityResult[];
            /**
             * The state of the query after the current batch. One of notFinished, moreResultsAfterLimit, noMoreResults.
             */
            moreResults: string;
            /**
             * The number of results skipped because of Query.offset.
             */
            skippedResults: number; // int32
        }
        interface IReadOptions {
            /**
             * The read consistency to use. One of default, strong, or eventual. Cannot be set when transaction is set. Lookup and ancestor queries default to strong, global queries default to eventual and cannot be set to strong. Optional. Default is default.
             */
            readConsistency: string;
            /**
             * The transaction to use. Optional.
             */
            transaction: string; // byte
        }
        interface IResponseHeader {
            /**
             * The kind, fixed to "datastore#responseHeader".
             */
            kind: string;
        }
        interface IRollbackRequest {
            /**
             * The transaction identifier, returned by a call to beginTransaction.
             */
            transaction: string; // byte
        }
        interface IRollbackResponse {
            header: IResponseHeader;
        }
        interface IRunQueryRequest {
            /**
             * The GQL query to run. Either this field or field query must be set, but not both.
             */
            gqlQuery: IGqlQuery;
            /**
             * Entities are partitioned into subsets, identified by a dataset (usually implicitly specified by the project) and namespace ID. Queries are scoped to a single partition.
             */
            partitionId: IPartitionId;
            /**
             * The query to run. Either this field or field gql_query must be set, but not both.
             */
            query: IQuery;
            /**
             * The options for this query.
             */
            readOptions: IReadOptions;
        }
        interface IRunQueryResponse {
            /**
             * A batch of query results (always present).
             */
            batch: IQueryResultBatch;
            header: IResponseHeader;
        }
        interface IValue {
            /**
             * A blob key value.
             */
            blobKeyValue: string;
            /**
             * A blob value.
             */
            blobValue: string; // byte
            /**
             * A boolean value.
             */
            booleanValue: boolean;
            /**
             * A timestamp value.
             */
            dateTimeValue: string; // date-time
            /**
             * A double value.
             */
            doubleValue: number; // double
            /**
             * An entity value. May have no key. May have a key with an incomplete key path. May have a reserved/read-only key.
             */
            entityValue: IEntity;
            /**
             * If the value should be indexed.
             * 
             * The indexed property may be set for a null value. When indexed is true, stringValue is limited to 500 characters and the blob value is limited to 500 bytes. Input values by default have indexed set to true; however, you can explicitly set indexed to true if you want. (An output value never has indexed explicitly set to true.) If a value is itself an entity, it cannot have indexed set to true.
             */
            indexed: boolean;
            /**
             * An integer value.
             */
            integerValue: string; // int64
            /**
             * A key value.
             */
            keyValue: IKey;
            /**
             * The meaning field is reserved and should not be used.
             */
            meaning: number; // int32
            /**
             * A UTF-8 encoded string value.
             */
            stringValue: string;
        }
    }
}
