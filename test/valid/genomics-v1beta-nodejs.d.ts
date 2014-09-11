// Type definitions for Google Genomics API v1beta
// Project: https://developers.google.com/genomics/v1beta/reference
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function genomics(version:string):typeof googleapis.genomics;
}
/**
 * Provides access to Genomics data.
 */
declare module googleapis.genomics {
    var beacons: {
        /**
         * This is an experimental API that provides a Global Alliance for Genomics and Health Beacon. It may change at any time.
         * @params {string} allele Required. The allele to look for ('A', 'C', 'G' or 'T').
         * @params {string} contig Required. The contig to query over.
         * @params {string} position Required. The 0-based position to query.
         * @params {string} variantsetId The ID of the variantset to query over. It must be public. Private variantsets will return an unauthorized exception.
         */
        get: (params: {
            allele?: string;
            contig?: string;
            position?: string;
            variantsetId: string;
        }, callback: (err: IErrorResponse, response: IBeacon, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var callsets: {
        /**
         * Creates a new callset.
         */
        create: (params: {
            resource?: ICallset;
        }, callback: (err: IErrorResponse, response: ICallset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes a callset.
         * @params {string} callsetId The ID of the callset to be deleted.
         */
        delete: (params: {
            callsetId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets a callset by ID.
         * @params {string} callsetId The ID of the callset.
         */
        get: (params: {
            callsetId: string;
        }, callback: (err: IErrorResponse, response: ICallset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a callset. This method supports patch semantics.
         * @params {string} callsetId The ID of the callset to be updated.
         */
        patch: (params: {
            callsetId: string;
            resource?: ICallset;
        }, callback: (err: IErrorResponse, response: ICallset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a list of callsets matching the criteria.
         */
        search: (params: {
            resource?: ISearchCallsetsRequest;
        }, callback: (err: IErrorResponse, response: ISearchCallsetsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a callset.
         * @params {string} callsetId The ID of the callset to be updated.
         */
        update: (params: {
            callsetId: string;
            resource?: ICallset;
        }, callback: (err: IErrorResponse, response: ICallset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var datasets: {
        /**
         * Creates a new dataset.
         */
        create: (params: {
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes a dataset.
         * @params {string} datasetId The ID of the dataset to be deleted.
         */
        delete: (params: {
            datasetId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets a dataset by ID.
         * @params {string} datasetId The ID of the dataset.
         */
        get: (params: {
            datasetId: string;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Lists all datasets.
         * @params {string} maxResults The maximum number of results returned by this request.
         * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @params {string} projectId Only return datasets which belong to this Google Developers Console project. Only accepts project numbers.
         */
        list: (params: {
            maxResults?: string;
            pageToken?: string;
            projectId?: string;
        }, callback: (err: IErrorResponse, response: IListDatasetsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a dataset. This method supports patch semantics.
         * @params {string} datasetId The ID of the dataset to be updated.
         */
        patch: (params: {
            datasetId: string;
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Undeletes a dataset by restoring a dataset which was deleted via this API. This operation is only possible for a week after the deletion occurred.
         * @params {string} datasetId The ID of the dataset to be undeleted.
         */
        undelete: (params: {
            datasetId: string;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a dataset.
         * @params {string} datasetId The ID of the dataset to be updated.
         */
        update: (params: {
            datasetId: string;
            resource?: IDataset;
        }, callback: (err: IErrorResponse, response: IDataset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var experimental: {
        jobs: {
            /**
             * Creates and asynchronously runs an ad-hoc job. This is an experimental call and may be removed or changed at any time.
             */
            create: (params: {
                resource?: IExperimentalCreateJobRequest;
            }, callback: (err: IErrorResponse, response: IExperimentalCreateJobResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var jobs: {
        /**
         * Cancels a job by ID. Note that it is possible for partial results to be generated and stored for cancelled jobs.
         * @params {string} jobId Required. The ID of the job.
         */
        cancel: (params: {
            jobId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Gets a job by ID.
         * @params {string} jobId Required. The ID of the job.
         */
        get: (params: {
            jobId: string;
        }, callback: (err: IErrorResponse, response: IJob, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a list of jobs matching the criteria.
         */
        search: (params: {
            resource?: ISearchJobsRequest;
        }, callback: (err: IErrorResponse, response: ISearchJobsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var reads: {
        /**
         * Gets a list of reads for one or more readsets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested readsets are aligned. If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only readset IDs yields all reads in those readsets, including unmapped reads. All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (reference sequence & position). Reads with equivalent genomic coordinates are returned in a deterministic order.
         */
        search: (params: {
            resource?: ISearchReadsRequest;
        }, callback: (err: IErrorResponse, response: ISearchReadsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var readsets: {
        /**
         * Deletes a readset.
         * @params {string} readsetId The ID of the readset to be deleted. The caller must have WRITE permissions to the dataset associated with this readset.
         */
        delete: (params: {
            readsetId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Exports readsets to a BAM file in Google Cloud Storage. Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. In particular, comments in the input file header will not be preserved, and some custom tags will be converted to strings.
         */
        export: (params: {
            resource?: IExportReadsetsRequest;
        }, callback: (err: IErrorResponse, response: IExportReadsetsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a readset by ID.
         * @params {string} readsetId The ID of the readset.
         */
        get: (params: {
            readsetId: string;
        }, callback: (err: IErrorResponse, response: IReadset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates readsets by asynchronously importing the provided information. Note that currently comments in the input file header are not imported and some custom tags will be converted to strings, rather than preserving tag types. The caller must have WRITE permissions to the dataset.
         */
        import: (params: {
            resource?: IImportReadsetsRequest;
        }, callback: (err: IErrorResponse, response: IImportReadsetsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a readset. This method supports patch semantics.
         * @params {string} readsetId The ID of the readset to be updated. The caller must have WRITE permissions to the dataset associated with this readset.
         */
        patch: (params: {
            readsetId: string;
            resource?: IReadset;
        }, callback: (err: IErrorResponse, response: IReadset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a list of readsets matching the criteria.
         */
        search: (params: {
            resource?: ISearchReadsetsRequest;
        }, callback: (err: IErrorResponse, response: ISearchReadsetsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a readset.
         * @params {string} readsetId The ID of the readset to be updated. The caller must have WRITE permissions to the dataset associated with this readset.
         */
        update: (params: {
            readsetId: string;
            resource?: IReadset;
        }, callback: (err: IErrorResponse, response: IReadset, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        coveragebuckets: {
            /**
             * Lists fixed width coverage buckets for a readset, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range. Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at various bucket widths, enabling various coverage "zoom levels". The caller must have READ permissions for the target readset.
             * @params {string} maxResults The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} range.sequenceEnd The end position of the range on the reference, 1-based exclusive. If specified, sequenceName must also be specified.
             * @params {string} range.sequenceName The reference sequence name, for example "chr1", "1", or "chrX".
             * @params {string} range.sequenceStart The start position of the range on the reference, 1-based inclusive. If specified, sequenceName must also be specified.
             * @params {string} readsetId Required. The ID of the readset over which coverage is requested.
             * @params {string} targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as bucket_width in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed bucket_width is currently 2048 base pairs; this is subject to change.
             */
            list: (params: {
                maxResults?: string;
                pageToken?: string;
                "range.sequenceEnd"?: string;
                "range.sequenceName"?: string;
                "range.sequenceStart"?: string;
                readsetId: string;
                targetBucketWidth?: string;
            }, callback: (err: IErrorResponse, response: IListCoverageBucketsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var variants: {
        /**
         * Creates a new variant.
         */
        create: (params: {
            resource?: IVariant;
        }, callback: (err: IErrorResponse, response: IVariant, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Deletes a variant.
         * @params {string} variantId The ID of the variant to be deleted.
         */
        delete: (params: {
            variantId: string;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Exports variant data to an external destination.
         */
        export: (params: {
            resource?: IExportVariantsRequest;
        }, callback: (err: IErrorResponse, response: IExportVariantsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a variant by ID.
         * @params {string} variantId The ID of the variant.
         */
        get: (params: {
            variantId: string;
        }, callback: (err: IErrorResponse, response: IVariant, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a summary of all the variant data in a variantset.
         * @params {string} variantsetId Required. The ID of the variant set to get variant summary information for.
         */
        getSummary: (params: {
            variantsetId?: string;
        }, callback: (err: IErrorResponse, response: IGetVariantsSummaryResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates variant data by asynchronously importing the provided information.
         */
        import: (params: {
            resource?: IImportVariantsRequest;
        }, callback: (err: IErrorResponse, response: IImportVariantsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a variant. This method supports patch semantics.
         * @params {string} variantId The ID of the variant to be updated..
         */
        patch: (params: {
            variantId: string;
            resource?: IVariant;
        }, callback: (err: IErrorResponse, response: IVariant, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Gets a list of variants matching the criteria.
         */
        search: (params: {
            resource?: ISearchVariantsRequest;
        }, callback: (err: IErrorResponse, response: ISearchVariantsResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates a variant.
         * @params {string} variantId The ID of the variant to be updated..
         */
        update: (params: {
            variantId: string;
            resource?: IVariant;
        }, callback: (err: IErrorResponse, response: IVariant, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * A beacon represents whether any variant call in a variantset has a specific allele at a particular position.
     */
    interface IBeacon {
        /**
         * True if the allele exists on any variant call, false otherwise.
         */
        exists: boolean;
    }
    /**
     * A Call represents the determination of genotype with respect to a particular variant. It may include associated information such as quality and phasing. For example, a Call might assign a probability of 0.32 to the occurrence of a SNP named rs1234 in a callset with the name NA12345.
     */
    interface ICall {
        /**
         * The ID of the callset this variant call belongs to.
         */
        callsetId: string;
        /**
         * The name of the callset this variant call belongs to.
         */
        callsetName: string;
        /**
         * The genotype of this variant call. Each value represents either the value of the referenceBases field or a 1-based index into alternateBases. If a variant had a referenceBases field of "T" and an alternateBases value of ["A", "C"], and the genotype was [2, 1], that would mean the call represented the heterozygous value "CA" for this variant. If the genotype was instead [0, 1], the represented value would be "TA". Ordering of the genotype values is important if the phaseset field is present. If a genotype is not called (that is, a "." is present in the GT string) -1 is returned.
         */
        genotype: number /* int32 */ [];
        /**
         * The genotype likelihoods for this variant call. Each array entry represents how likely a specific genotype is for this call. The value ordering is defined by the GL tag in the VCF spec.
         */
        genotypeLikelihood: number /* double */ [];
        /**
         * A map of additional variant call information.
         */
        info: {
            [name:string]: string[];
        };
        /**
         * If this field is present, this variant call's genotype ordering implies the phase of the bases and is consistent with any other variant calls on the same contig which have the same phaseset value. When importing data from VCF, if the genotype data was phased but no phase set was specified this field will be set to "*".
         */
        phaseset: string;
    }
    /**
     * A Callset is a collection of Variant Calls. It belongs to a Variantset.
     */
    interface ICallset {
        /**
         * The date this callset was created in milliseconds from the epoch.
         */
        created: string; // int64
        /**
         * The Google generated ID of the callset, immutable.
         */
        id: string;
        /**
         * A map of additional callset information.
         */
        info: {
            [name:string]: string[];
        };
        /**
         * The callset name.
         */
        name: string;
        /**
         * The ID of the variantset this callset belongs to.
         */
        variantsetId: string;
    }
    /**
     * ContigBound records an upper bound for the starting coordinate of variants in a particular contig.
     */
    interface IContigBound {
        /**
         * The contig the bound is associate with.
         */
        contig: string;
        /**
         * An upper bound (inclusive) on the starting coordinate of any variant in the contig.
         */
        upperBound: string; // int64
    }
    /**
     * A bucket over which read coverage has been precomputed. A bucket corresponds to a specific range of the reference sequence.
     */
    interface ICoverageBucket {
        /**
         * The average number of reads which are aligned to each individual reference base in this bucket.
         */
        meanCoverage: number; // float
        /**
         * The genomic coordinate range spanned by this bucket.
         */
        range: IGenomicRange;
    }
    /**
     * A Dataset is a collection of genomic data.
     */
    interface IDataset {
        /**
         * The Google generated ID of the dataset, immutable.
         */
        id: string;
        /**
         * Flag indicating whether or not a dataset is publicly viewable. If a dataset is not public, it inherits viewing permissions from its project.
         */
        isPublic: boolean;
        /**
         * The dataset name.
         */
        name: string;
        /**
         * The Google Developers Console project number that this dataset belongs to.
         */
        projectId: string; // int64
    }
    /**
     * The job creation request.
     */
    interface IExperimentalCreateJobRequest {
        /**
         * Specifies whether or not to run the alignment pipeline. At least one of align or call_variants must be provided.
         */
        align: boolean;
        /**
         * Specifies whether or not to run the variant calling pipeline. If specified, alignment will be performed first and the aligned BAMs will passed as input to the variant caller. At least one of align or call_variants must be provided.
         */
        callVariants: boolean;
        /**
         * Specifies where to copy the results of certain pipelines. This shoud be in the form of "gs://bucket/path".
         */
        gcsOutputPath: string;
        /**
         * A list of Google Cloud Storage URIs of paired end .fastq files to operate upon. If specified, this represents the second file of each paired .fastq file. The first file of each pair should be specified in "sourceUris".
         */
        pairedSourceUris: string[];
        /**
         * Required. The Google Cloud Project ID with which to associate the request.
         */
        projectId: string; // int64
        /**
         * A list of Google Cloud Storage URIs of data files to operate upon. These can be .bam, interleaved .fastq, or paired .fastq. If specifying paired .fastq files, the first of each pair of files should be listed here, and the second of each pair should be listed in "pairedSourceUris".
         */
        sourceUris: string[];
    }
    /**
     * The job creation response.
     */
    interface IExperimentalCreateJobResponse {
        /**
         * A job ID that can be used to get status information.
         */
        jobId: string;
    }
    /**
     * The readset export request.
     */
    interface IExportReadsetsRequest {
        /**
         * A Google Cloud Storage URI where the exported BAM file will be created. The currently authenticated user must have write access to the new file location. An error will be returned if the URI already contains data.
         */
        exportUri: string;
        /**
         * The Google Developers Console project number that owns this export. This is the project that will be billed.
         */
        projectId: string; // int64
        /**
         * The IDs of the readsets to export.
         */
        readsetIds: string[];
        /**
         * The reference names to export. If this is not specified, all reference sequences are exported. Use '*' to export unmapped reads.
         */
        referenceNames: string[];
    }
    /**
     * The readset export response.
     */
    interface IExportReadsetsResponse {
        /**
         * A job ID that can be used to get status information.
         */
        jobId: string;
    }
    /**
     * The variant data export request.
     */
    interface IExportVariantsRequest {
        /**
         * The BigQuery dataset to export data to. Note that this is distinct from the Genomics concept of "dataset". The caller must have WRITE access to this BigQuery dataset.
         */
        bigqueryDataset: string;
        /**
         * The BigQuery table to export data to. The caller must have WRITE access to this BigQuery table.
         */
        bigqueryTable: string;
        /**
         * If provided, only variant call information from the specified callsets will be exported. By default all variant calls are exported.
         */
        callsetIds: string[];
        /**
         * The format for the exported data.
         */
        format: string;
        /**
         * The Google Cloud project number that owns this export. This is the project that will be billed.
         */
        projectId: string; // int64
        /**
         * Required. The ID of the variantset that contains variant data which should be exported. The caller must have READ access to this variantset.
         */
        variantsetId: string;
    }
    /**
     * The variant data export response.
     */
    interface IExportVariantsResponse {
        /**
         * A job ID that can be used to get status information.
         */
        jobId: string;
    }
    /**
     * An inclusive, exclusive genomic coordinate range over a reference sequence.
     */
    interface IGenomicRange {
        /**
         * The end position of the range on the reference, 1-based exclusive. If specified, sequenceName must also be specified.
         */
        sequenceEnd: string; // uint64
        /**
         * The reference sequence name, for example "chr1", "1", or "chrX".
         */
        sequenceName: string;
        /**
         * The start position of the range on the reference, 1-based inclusive. If specified, sequenceName must also be specified.
         */
        sequenceStart: string; // uint64
    }
    /**
     * The variants summary response.
     */
    interface IGetVariantsSummaryResponse {
        /**
         * A list of all contigs used by the variants in a dataset with associated coordinate upper bounds for each one.
         */
        contigBounds: IContigBound[];
        /**
         * The metadata associated with this dataset.
         */
        metadata: IMetadata[];
    }
    interface IHeader {
        /**
         * (SO) Sorting order of alignments.
         */
        sortingOrder: string;
        /**
         * (VN) BAM format version.
         */
        version: string;
    }
    /**
     * The header section of the BAM/SAM file.
     */
    interface IHeaderSection {
        /**
         * (@CO) One-line text comments.
         */
        comments: string[];
        /**
         * [Deprecated] This field is deprecated and will no longer be populated. Please use filename instead.
         */
        fileUri: string;
        /**
         * The name of the file from which this data was imported.
         */
        filename: string;
        /**
         * (@HD) The header line.
         */
        headers: IHeader[];
        /**
         * (@PG) Programs.
         */
        programs: IProgram[];
        /**
         * (@RG) Read group.
         */
        readGroups: IReadGroup[];
        /**
         * (@SQ) Reference sequence dictionary.
         */
        refSequences: IReferenceSequence[];
    }
    /**
     * The readset import request.
     */
    interface IImportReadsetsRequest {
        /**
         * Required. The ID of the dataset these readsets will belong to. The caller must have WRITE permissions to this dataset.
         */
        datasetId: string;
        /**
         * A list of URIs pointing at BAM files in Google Cloud Storage.
         */
        sourceUris: string[];
    }
    /**
     * The readset import response.
     */
    interface IImportReadsetsResponse {
        /**
         * A job ID that can be used to get status information.
         */
        jobId: string;
    }
    /**
     * The variant data import request.
     */
    interface IImportVariantsRequest {
        /**
         * The format of the variant data being imported.
         */
        format: string;
        /**
         * A list of URIs pointing at VCF files in Google Cloud Storage. See the VCF Specification for more details on the input format.
         */
        sourceUris: string[];
        /**
         * Required. The variantset to which variant data should be imported.
         */
        variantsetId: string;
    }
    /**
     * The variant data import response.
     */
    interface IImportVariantsResponse {
        /**
         * A job ID that can be used to get status information.
         */
        jobId: string;
    }
    /**
     * A Job represents an ongoing process that can be monitored for status information.
     */
    interface IJob {
        /**
         * The date this job was created, in milliseconds from the epoch.
         */
        created: string; // int64
        /**
         * A more detailed description of this job's current status.
         */
        description: string;
        /**
         * Any errors that occurred during processing.
         */
        errors: string[];
        /**
         * The job ID.
         */
        id: string;
        /**
         * If this Job represents an import, this field will contain the IDs of the objects that were successfully imported.
         */
        importedIds: string[];
        /**
         * The Google Developers Console project number to which this job belongs.
         */
        projectId: string; // int64
        /**
         * A summarized representation of the original service request.
         */
        request: IJobRequest;
        /**
         * The status of this job.
         */
        status: string;
        /**
         * Any warnings that occurred during processing.
         */
        warnings: string[];
    }
    /**
     * A summary representation of the service request that spawned the job.
     */
    interface IJobRequest {
        /**
         * The data destination of the request, for example, a Google BigQuery Table or Dataset ID.
         */
        destination: string[];
        /**
         * The data source of the request, for example, a Google Cloud Storage object path or Readset ID.
         */
        source: string[];
        /**
         * The original request type.
         */
        type: string;
    }
    interface IListCoverageBucketsResponse {
        /**
         * The length of each coverage bucket in base pairs. Note that buckets at the end of a reference sequence may be shorter. This value is omitted if the bucket width is infinity (the default behaviour, with no range or target_bucket_width).
         */
        bucketWidth: string; // uint64
        /**
         * The coverage buckets. The list of buckets is sparse; a bucket with 0 overlapping reads is not returned. A bucket never crosses more than one reference sequence. Each bucket has width bucket_width, unless its end is is the end of the reference sequence.
         */
        coverageBuckets: ICoverageBucket[];
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
    }
    /**
     * The dataset list response.
     */
    interface IListDatasetsResponse {
        /**
         * The list of matching Datasets.
         */
        datasets: IDataset[];
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
    }
    /**
     * Metadata describes a single piece of variant call metadata. These data include a top level key and either a single value string (value) or a list of key-value pairs (info.) Value and info are mutually exclusive.
     */
    interface IMetadata {
        /**
         * A textual description of this metadata.
         */
        description: string;
        /**
         * User-provided ID field, not enforced by this API. Two or more pieces of structured metadata with identical id and key fields are considered equivalent.
         */
        id: string;
        /**
         * Remaining structured metadata key-value pairs.
         */
        info: {
            [name:string]: string[];
        };
        /**
         * The top-level key.
         */
        key: string;
        /**
         * The number of values that can be included in a field described by this metadata.
         */
        number: string;
        /**
         * The type of data. Possible types include: Integer, Float, Flag, Character, and String.
         */
        type: string;
        /**
         * The value field for simple metadata
         */
        value: string;
    }
    interface IProgram {
        /**
         * (CL) Command line.
         */
        commandLine: string;
        /**
         * (ID) Program record identifier.
         */
        id: string;
        /**
         * (PN) Program name.
         */
        name: string;
        /**
         * (PP) Previous program ID.
         */
        prevProgramId: string;
        /**
         * (VN) Program version.
         */
        version: string;
    }
    /**
     * A Read is a group of bases that may or may not have been aligned to a reference. It contains quality information and other metadata.
     */
    interface IRead {
        /**
         * The originalBases after the cigar field has been applied. Deletions are represented with '-' and insertions are omitted.
         */
        alignedBases: string;
        /**
         * Represents the quality of each base in this read. Each character represents one base. To get the quality, take the ASCII value of the character and subtract 33. (QUAL)
         */
        baseQuality: string;
        /**
         * A condensed representation of how this read matches up to the reference. (CIGAR)
         */
        cigar: string;
        /**
         * Each bit of this number has a different meaning if enabled. See the full BAM spec for more details. (FLAG)
         */
        flags: number; // int32
        /**
         * The Google generated ID of the read, immutable.
         */
        id: string;
        /**
         * A score up to 255 that represents how likely this read's aligned position is to be correct. A higher value is better. (MAPQ)
         */
        mappingQuality: number; // int32
        /**
         * The 1-based start position of the paired read. (PNEXT)
         */
        matePosition: number; // int32
        /**
         * The name of the sequence that the paired read is aligned to. This is usually the same as referenceSequenceName. (RNEXT)
         */
        mateReferenceSequenceName: string;
        /**
         * The name of the read. When imported from a BAM file, this is the query template name. (QNAME)
         */
        name: string;
        /**
         * The list of bases that this read represents (such as "CATCGA"). (SEQ)
         */
        originalBases: string;
        /**
         * The 1-based start position of the aligned read. If the first base starts at the very beginning of the reference sequence, then the position would be '1'. (POS)
         */
        position: number; // int32
        /**
         * The ID of the readset this read belongs to.
         */
        readsetId: string;
        /**
         * The name of the sequence that this read is aligned to. This would be, for example, 'X' for the X Chromosome or '20' for Chromosome 20. (RNAME)
         */
        referenceSequenceName: string;
        /**
         * A map of additional read information. (TAG)
         */
        tags: {
            [name:string]: string[];
        };
        /**
         * Length of the original piece of DNA that produced both this read and the paired read. (TLEN)
         */
        templateLength: number; // int32
    }
    interface IReadGroup {
        /**
         * (DT) Date the run was produced (ISO8601 date or date/time).
         */
        date: string;
        /**
         * (DS) Description.
         */
        description: string;
        /**
         * (FO) Flow order. The array of nucleotide bases that correspond to the nucleotides used for each flow of each read.
         */
        flowOrder: string;
        /**
         * (ID) Read group identifier.
         */
        id: string;
        /**
         * (KS) The array of nucleotide bases that correspond to the key sequence of each read.
         */
        keySequence: string;
        /**
         * (LS) Library.
         */
        library: string;
        /**
         * (PU) Platform unit.
         */
        platformUnit: string;
        /**
         * (PI) Predicted median insert size.
         */
        predictedInsertSize: number; // int32
        /**
         * (PG) Programs used for processing the read group.
         */
        processingProgram: string;
        /**
         * (SM) Sample.
         */
        sample: string;
        /**
         * (CN) Name of sequencing center producing the read.
         */
        sequencingCenterName: string;
        /**
         * (PL) Platform/technology used to produce the reads.
         */
        sequencingTechnology: string;
    }
    /**
     * A Readset is a collection of Reads.
     */
    interface IReadset {
        /**
         * The ID of the dataset this readset belongs to.
         */
        datasetId: string;
        /**
         * File information from the original BAM import. See the BAM format specification for additional information on each field.
         */
        fileData: IHeaderSection[];
        /**
         * The Google generated ID of the readset, immutable.
         */
        id: string;
        /**
         * The readset name, typically this is the sample name.
         */
        name: string;
    }
    interface IReferenceSequence {
        /**
         * (AS) Genome assembly identifier.
         */
        assemblyId: string;
        /**
         * (LN) Reference sequence length.
         */
        length: number; // int32
        /**
         * (M5) MD5 checksum of the sequence in the uppercase, excluding spaces but including pads as *.
         */
        md5Checksum: string;
        /**
         * (SN) Reference sequence name.
         */
        name: string;
        /**
         * (SP) Species.
         */
        species: string;
        /**
         * (UR) URI of the sequence.
         */
        uri: string;
    }
    /**
     * The callset search request.
     */
    interface ISearchCallsetsRequest {
        /**
         * The maximum number of callsets to return.
         */
        maxResults: string; // uint64
        /**
         * Only return callsets for which a substring of the name matches this string.
         */
        name: string;
        /**
         * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken: string;
        /**
         * Restrict the query to callsets within the given variantsets. At least one ID must be provided.
         */
        variantsetIds: string[];
    }
    /**
     * The callset search response.
     */
    interface ISearchCallsetsResponse {
        /**
         * The list of matching callsets.
         */
        callsets: ICallset[];
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
    }
    /**
     * The jobs search request.
     */
    interface ISearchJobsRequest {
        /**
         * If specified, only jobs created on or after this date, given in milliseconds since Unix epoch, will be returned.
         */
        createdAfter: string; // int64
        /**
         * If specified, only jobs created prior to this date, given in milliseconds since Unix epoch, will be returned.
         */
        createdBefore: string; // int64
        /**
         * Specifies the number of results to return in a single page. Defaults to 128. The maximum value is 256.
         */
        maxResults: string; // uint64
        /**
         * The continuation token which is used to page through large result sets. To get the next page of results, set this parameter to the value of the "nextPageToken" from the previous response.
         */
        pageToken: string;
        /**
         * Required. Only return jobs which belong to this Google Developers Console project. Only accepts project numbers.
         */
        projectId: string; // int64
        /**
         * Only return jobs which have a matching status.
         */
        status: string[];
    }
    /**
     * The job search response.
     */
    interface ISearchJobsResponse {
        /**
         * The list of jobs results, ordered newest to oldest.
         */
        jobs: IJob[];
        /**
         * The continuation token which is used to page through large result sets. Provide this value is a subsequent request to return the next page of results. This field will be empty if there are no more results.
         */
        nextPageToken: string;
    }
    /**
     * The read search request.
     */
    interface ISearchReadsRequest {
        /**
         * Specifies number of results to return in a single page. If unspecified, it will default to 256. The maximum value is 2048.
         */
        maxResults: string; // uint64
        /**
         * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken: string;
        /**
         * The readsets within which to search for reads. At least one readset ID must be provided. All specified readsets must be aligned against a common set of reference sequences; this defines the genomic coordinates for the query.
         */
        readsetIds: string[];
        /**
         * The end position (1-based, inclusive) of the target range. If specified, "sequenceName" must also be specified. Defaults to the end of the target reference sequence, if any.
         */
        sequenceEnd: string; // uint64
        /**
         * Restricts the results to a particular reference sequence such as '1', 'chr1', or 'X'. The set of valid references sequences depends on the readsets specified. If set to "*", only unmapped Reads are returned.
         */
        sequenceName: string;
        /**
         * The start position (1-based, inclusive) of the target range. If specified, "sequenceName" must also be specified. Defaults to the start of the target reference sequence, if any.
         */
        sequenceStart: string; // uint64
    }
    /**
     * The read search response.
     */
    interface ISearchReadsResponse {
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
        /**
         * The list of matching Reads. The resulting Reads are sorted by position; the smallest positions are returned first. Unmapped reads, which have no position, are returned last and are further sorted alphabetically by name.
         */
        reads: IRead[];
    }
    /**
     * The readset search request.
     */
    interface ISearchReadsetsRequest {
        /**
         * Restricts this query to readsets within the given datasets. At least one ID must be provided.
         */
        datasetIds: string[];
        /**
         * Specifies number of results to return in a single page. If unspecified, it will default to 128. The maximum value is 1024.
         */
        maxResults: string; // uint64
        /**
         * Only return readsets for which a substring of the name matches this string.
         */
        name: string;
        /**
         * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken: string;
    }
    /**
     * The readset search response.
     */
    interface ISearchReadsetsResponse {
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
        /**
         * The list of matching Readsets.
         */
        readsets: IReadset[];
    }
    /**
     * The variant search request.
     */
    interface ISearchVariantsRequest {
        /**
         * Only return variant calls which belong to callsets with these ids. Leaving this blank returns all variant calls. At most one of callsetNames or callsetIds should be provided.
         */
        callsetIds: string[];
        /**
         * Only return variant calls which belong to callsets which have exactly these names. Leaving this blank returns all variant calls. At most one of callsetNames or callsetIds should be provided.
         */
        callsetNames: string[];
        /**
         * Required. Only return variants on this contig.
         */
        contig: string;
        /**
         * Required. The end of the window (0-based, exclusive) for which overlapping variants should be returned.
         */
        endPosition: string; // int64
        /**
         * The maximum number of variants to return.
         */
        maxResults: string; // uint64
        /**
         * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken: string;
        /**
         * Required. The beginning of the window (0-based, inclusive) for which overlapping variants should be returned.
         */
        startPosition: string; // int64
        /**
         * Only return variants which have exactly this name.
         */
        variantName: string;
        /**
         * Required. The ID of the variantset to search.
         */
        variantsetId: string;
    }
    /**
     * The variant search response.
     */
    interface ISearchVariantsResponse {
        /**
         * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results.
         */
        nextPageToken: string;
        /**
         * The list of matching Variants.
         */
        variants: IVariant[];
    }
    /**
     * A Variant represents a change in DNA sequence relative to some reference. For example, a Variant could represent a SNP or an insertion. Variants belong to a Variantset.
     */
    interface IVariant {
        /**
         * The bases that appear instead of the reference bases.
         */
        alternateBases: string[];
        /**
         * The variant calls for this particular variant. Each one represents the determination of genotype with respect to this variant.
         */
        calls: ICall[];
        /**
         * The contig on which this variant occurs. (such as 'chr20' or 'X')
         */
        contig: string;
        /**
         * The date this variant was created, in milliseconds from the epoch.
         */
        created: string; // int64
        /**
         * The end position (0-based) of this variant. This corresponds to the first base after the last base in the reference allele. So, the length of the reference allele is (end - position). This is useful for variants that don't explicitly give alternate bases, for example large deletions.
         */
        end: string; // int64
        /**
         * The Google generated ID of the variant, immutable.
         */
        id: string;
        /**
         * A map of additional variant information.
         */
        info: {
            [name:string]: string[];
        };
        /**
         * Names for the variant, for example a RefSNP ID.
         */
        names: string[];
        /**
         * The position at which this variant occurs (0-based). This corresponds to the first base of the string of reference bases.
         */
        position: string; // int64
        /**
         * The reference bases for this variant. They start at the given position.
         */
        referenceBases: string;
        /**
         * The ID of the variantset this variant belongs to.
         */
        variantsetId: string;
    }
}
