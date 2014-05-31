declare module gapi.client {
    module datastore {
        interface IAllocateIdsRequest {
            keys: IKey[];
        }
        interface IAllocateIdsResponse {
            header: IResponseHeader;
            keys: IKey[];
        }
        interface IBeginTransactionRequest {
            isolationLevel: string;
        }
        interface IBeginTransactionResponse {
            header: IResponseHeader;
            transaction: string; // byte
        }
        interface IBlindWriteRequest {
            mutation: IMutation;
        }
        interface IBlindWriteResponse {
            header: IResponseHeader;
            mutationResult: IMutationResult;
        }
        interface ICommitRequest {
            mutation: IMutation;
            transaction: string; // byte
        }
        interface ICommitResponse {
            header: IResponseHeader;
            mutationResult: IMutationResult;
        }
        interface ICompositeFilter {
            filters: IFilter[];
            operator: string;
        }
        interface IEntity {
            key: IKey;
            properties: { [name:string]: IProperty; };
        }
        interface IEntityResult {
            entity: IEntity;
        }
        interface IFilter {
            compositeFilter: ICompositeFilter;
            propertyFilter: IPropertyFilter;
        }
        interface IGqlQuery {
            allowLiteral: boolean;
            nameArgs: IGqlQueryArg[];
            numberArgs: IGqlQueryArg[];
            queryString: string;
        }
        interface IGqlQueryArg {
            cursor: string; // byte
            name: string;
            value: IValue;
        }
        interface IKey {
            partitionId: IPartitionId;
            path: IKeyPathElement[];
        }
        interface IKeyPathElement {
            id: string; // int64
            kind: string;
            name: string;
        }
        interface IKindExpression {
            name: string;
        }
        interface ILookupRequest {
            keys: IKey[];
            readOptions: IReadOptions;
        }
        interface ILookupResponse {
            deferred: IKey[];
            found: IEntityResult[];
            header: IResponseHeader;
            missing: IEntityResult[];
        }
        interface IMutation {
            delete: IKey[];
            force: boolean;
            insert: IEntity[];
            insertAutoId: IEntity[];
            update: IEntity[];
            upsert: IEntity[];
        }
        interface IMutationResult {
            indexUpdates: number; // int32
            insertAutoIdKeys: IKey[];
        }
        interface IPartitionId {
            datasetId: string;
            namespace: string;
        }
        interface IProperty {
            multi: boolean;
            values: IValue[];
        }
        interface IPropertyExpression {
            aggregationFunction: string;
            property: IPropertyReference;
        }
        interface IPropertyFilter {
            operator: string;
            property: IPropertyReference;
            value: IValue;
        }
        interface IPropertyOrder {
            direction: string;
            property: IPropertyReference;
        }
        interface IPropertyReference {
            name: string;
        }
        interface IQuery {
            endCursor: string; // byte
            filter: IFilter;
            groupBy: IPropertyReference[];
            kinds: IKindExpression[];
            limit: number; // int32
            offset: number; // int32
            order: IPropertyOrder[];
            projection: IPropertyExpression[];
            startCursor: string; // byte
        }
        interface IQueryResultBatch {
            endCursor: string; // byte
            entityResultType: string;
            entityResults: IEntityResult[];
            moreResults: string;
            skippedResults: number; // int32
        }
        interface IReadOptions {
            readConsistency: string;
            transaction: string; // byte
        }
        interface IResponseHeader {
            kind: string;
        }
        interface IRollbackRequest {
            transaction: string; // byte
        }
        interface IRollbackResponse {
            header: IResponseHeader;
        }
        interface IRunQueryRequest {
            gqlQuery: IGqlQuery;
            partitionId: IPartitionId;
            query: IQuery;
            readOptions: IReadOptions;
        }
        interface IRunQueryResponse {
            batch: IQueryResultBatch;
            header: IResponseHeader;
        }
        interface IValue {
            blobKeyValue: string;
            blobValue: string; // byte
            booleanValue: boolean;
            dateTimeValue: string; // date-time
            doubleValue: number; // double
            entityValue: IEntity;
            indexed: boolean;
            integerValue: string; // int64
            keyValue: IKey;
            meaning: number; // int32
            stringValue: string;
        }
    }
}
