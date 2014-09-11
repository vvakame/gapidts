// Type definitions for Google Google Civic Information API v1
// Project: https://developers.google.com/civic-information
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function civicinfo(version:string):typeof googleapis.civicinfo;
    function civicinfo(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.civicinfo;
}
/**
 * An API for accessing civic information.
 */
declare module googleapis.civicinfo {
    var divisions: {
        /**
         * Searches for political divisions by their natural name or OCD ID.
         * @params {string} query The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
         */
        search: (params: {
            query?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IDivisionSearchResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var elections: {
        /**
         * List of available elections to query.
         */
        electionQuery: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IElectionsQueryResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Looks up information relevant to a voter based on the voter's registered address.
         * @params {string} electionId The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections
         * @params {boolean} officialOnly If set to true, only data from official state sources will be returned.
         */
        voterInfoQuery: (params: {
            electionId: string;
            officialOnly?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IVoterInfoRequest;
        }, callback: (err: IErrorResponse, response: IVoterInfoResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var representatives: {
        /**
         * Looks up political geography and representative information based on an address or Open Civic Data division identifier.
         * @params {boolean} includeOffices Whether to return information about offices and officials. If false, only the top-level district information will be returned.
         * @params {string} ocdId The division to look up. May only be specified if the address field is not given in the request body.
         * @params {boolean} recursive When ocd_id is supplied, return all divisions which are hierarchically nested within the queried division. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
         */
        representativeInfoQuery: (params: {
            includeOffices?: boolean;
            ocdId?: string;
            recursive?: boolean;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRepresentativeInfoRequest;
        }, callback: (err: IErrorResponse, response: IRepresentativeInfoResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * Describes information about a regional election administrative area.
     */
    interface IAdministrationRegion {
        /**
         * The election administration body for this area.
         */
        electionAdministrationBody: IAdministrativeBody;
        /**
         * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
         */
        id: string;
        /**
         * The city or county that provides election information for this voter. This object can have the same elements as state.
         */
        local_jurisdiction: IAdministrationRegion;
        /**
         * The name of the jurisdiction.
         */
        name: string;
        /**
         * A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.
         */
        sources: ISource[];
    }
    /**
     * Information about an election administrative body (e.g. County Board of Elections).
     */
    interface IAdministrativeBody {
        /**
         * A URL provided by this administrative body for information on absentee voting.
         */
        absenteeVotingInfoUrl: string;
        /**
         * A URL provided by this administrative body to give contest information to the voter.
         */
        ballotInfoUrl: string;
        /**
         * The mailing address of this administrative body.
         */
        correspondenceAddress: ISimpleAddressType;
        /**
         * A URL provided by this administrative body for looking up general election information.
         */
        electionInfoUrl: string;
        /**
         * The election officials for this election administrative body.
         */
        electionOfficials: IElectionOfficial[];
        /**
         * A URL provided by this administrative body for confirming that the voter is registered to vote.
         */
        electionRegistrationConfirmationUrl: string;
        /**
         * A URL provided by this administrative body for looking up how to register to vote.
         */
        electionRegistrationUrl: string;
        /**
         * A URL provided by this administrative body describing election rules to the voter.
         */
        electionRulesUrl: string;
        /**
         * A description of the hours of operation for this administrative body.
         */
        hoursOfOperation: string;
        /**
         * The name of this election administrative body.
         */
        name: string;
        /**
         * The physical address of this administrative body.
         */
        physicalAddress: ISimpleAddressType;
        /**
         * A description of the services this administrative body may provide.
         */
        voter_services: string[];
        /**
         * A URL provided by this administrative body for looking up where to vote.
         */
        votingLocationFinderUrl: string;
    }
    /**
     * Information about a candidate running for elected office.
     */
    interface ICandidate {
        /**
         * The URL for the candidate's campaign web site.
         */
        candidateUrl: string;
        /**
         * A list of known (social) media channels for this candidate.
         */
        channels: IChannel[];
        /**
         * The email address for the candidate's campaign.
         */
        email: string;
        /**
         * The candidate's name.
         */
        name: string;
        /**
         * The order the candidate appears on the ballot for this contest.
         */
        orderOnBallot: string; // int64
        /**
         * The full name of the party the candidate is a member of.
         */
        party: string;
        /**
         * The voice phone number for the candidate's campaign office.
         */
        phone: string;
        /**
         * A URL for a photo of the candidate.
         */
        photoUrl: string;
    }
    /**
     * A social media or web channel for a candidate.
     */
    interface IChannel {
        /**
         * The unique public identifier for the candidate's channel.
         */
        id: string;
        /**
         * The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter
         */
        type: string;
    }
    /**
     * Information about a contest that appears on a voter's ballot.
     */
    interface IContest {
        /**
         * A number specifying the position of this contest on the voter's ballot.
         */
        ballotPlacement: string; // int64
        /**
         * The candidate choices for this contest.
         */
        candidates: ICandidate[];
        /**
         * Information about the electoral district that this contest is in.
         */
        district: IElectoralDistrict;
        /**
         * A description of any additional eligibility requirements for voting in this contest.
         */
        electorateSpecifications: string;
        /**
         * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
         */
        id: string;
        /**
         * The level of office for this contest. One of: federal, state, county, city, other
         */
        level: string;
        /**
         * The number of candidates that will be elected to office in this contest.
         */
        numberElected: string; // int64
        /**
         * The number of candidates that a voter may vote for in this contest.
         */
        numberVotingFor: string; // int64
        /**
         * The name of the office for this contest.
         */
        office: string;
        /**
         * If this is a partisan election, the name of the party it is for.
         */
        primaryParty: string;
        /**
         * A brief description of the referendum. This field is only populated for contests of type 'Referendum'.
         */
        referendumSubtitle: string;
        /**
         * The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.
         */
        referendumTitle: string;
        /**
         * A link to the referendum. This field is only populated for contests of type 'Referendum'.
         */
        referendumUrl: string;
        /**
         * A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.
         */
        sources: ISource[];
        /**
         * "Yes" or "No" depending on whether this a contest being held outside the normal election cycle.
         */
        special: string;
        /**
         * The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'.
         */
        type: string;
    }
    /**
     * The result of a division search query.
     */
    interface IDivisionSearchResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".
         */
        kind: string;
        results: IDivisionSearchResult[];
        /**
         * The result of the request. One of: success, addressUnparseable, noAddressParameter, internalLookupFailure
         */
        status: string;
    }
    /**
     * Represents a political geographic division that matches the requested query.
     */
    interface IDivisionSearchResult {
        /**
         * Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
         */
        aliases: string[];
        /**
         * The name of the division.
         */
        name: string;
        /**
         * The unique Open Civic Data identifier for this division.
         */
        ocdId: string;
    }
    /**
     * Information about the election that was queried.
     */
    interface IElection {
        /**
         * Day of the election in YYYY-MM-DD format.
         */
        electionDay: string;
        /**
         * The unique ID of this election.
         */
        id: string; // int64
        /**
         * A displayable name for the election.
         */
        name: string;
    }
    /**
     * Information about individual election officials.
     */
    interface IElectionOfficial {
        /**
         * The email address of the election official.
         */
        emailAddress: string;
        /**
         * The fax number of the election official.
         */
        faxNumber: string;
        /**
         * The full name of the election official.
         */
        name: string;
        /**
         * The office phone number of the election official.
         */
        officePhoneNumber: string;
        /**
         * The title of the election official.
         */
        title: string;
    }
    /**
     * The list of elections available for this version of the API.
     */
    interface IElectionsQueryResponse {
        /**
         * A list of available elections
         */
        elections: IElection[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".
         */
        kind: string;
    }
    /**
     * Describes the geographic scope of a contest.
     */
    interface IElectoralDistrict {
        /**
         * An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.
         */
        id: string;
        /**
         * The name of the district.
         */
        name: string;
        /**
         * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
         */
        scope: string;
    }
    /**
     * Describes a political geography.
     */
    interface IGeographicDivision {
        /**
         * Any other valid OCD IDs that refer to the same division. For example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.
         */
        alsoKnownAs: string[];
        /**
         * The name of the division.
         */
        name: string;
        /**
         * List of keys in the offices object, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.
         */
        officeIds: string[];
        /**
         * The geographic scope of the division. If unspecified, the division's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
         */
        scope: string;
    }
    /**
     * Information about an Office held by one or more Officials.
     */
    interface IOffice {
        /**
         * The OCD ID of the division with which this office is associated.
         */
        divisionId: string;
        /**
         * The level of this elected office. One of: federal, state, county, city, other
         */
        level: string;
        /**
         * The human-readable name of the office.
         */
        name: string;
        /**
         * List of keys in the officials object of people who presently hold this office.
         */
        officialIds: string[];
        /**
         * A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.
         */
        sources: ISource[];
    }
    /**
     * Information about a official holding an elected office.
     */
    interface IOfficial {
        /**
         * Addresses at which to contact the official.
         */
        address: ISimpleAddressType[];
        /**
         * A list of known (social) media channels for this official.
         */
        channels: IChannel[];
        /**
         * The direct email addresses for the official.
         */
        emails: string[];
        /**
         * The official's name.
         */
        name: string;
        /**
         * The full name of the party the official belongs to.
         */
        party: string;
        /**
         * The official's public contact phone numbers.
         */
        phones: string[];
        /**
         * A URL for a photo of the official.
         */
        photoUrl: string;
        /**
         * The official's public website URLs.
         */
        urls: string[];
    }
    /**
     * A location where a voter can vote. This may be an early vote site or an election day voting location.
     */
    interface IPollingLocation {
        /**
         * The address of the location
         */
        address: ISimpleAddressType;
        /**
         * The last date that this early vote site may be used. This field is not populated for polling locations.
         */
        endDate: string;
        /**
         * An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
         */
        id: string;
        /**
         * The name of the early vote site. This field is not populated for polling locations.
         */
        name: string;
        /**
         * Notes about this location (e.g. accessibility ramp or entrance to use)
         */
        notes: string;
        /**
         * A description of when this location is open.
         */
        pollingHours: string;
        /**
         * A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.
         */
        sources: ISource[];
        /**
         * The first date that this early vote site may be used. This field is not populated for polling locations.
         */
        startDate: string;
        /**
         * The services provided by this early vote site. This field is not populated for polling locations.
         */
        voterServices: string;
    }
    /**
     * A request for political geography and representative information for an address.
     */
    interface IRepresentativeInfoRequest {
        /**
         * The address to look up. May only be specified if the field ocdId is not given in the URL.
         */
        address: string;
    }
    /**
     * The result of a representative info lookup query.
     */
    interface IRepresentativeInfoResponse {
        /**
         * Political geographic divisions that contain the requested address.
         */
        divisions: {
            [name:string]: IGeographicDivision;
        };
        /**
         * Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse".
         */
        kind: string;
        /**
         * The normalized version of the requested address
         */
        normalizedInput: ISimpleAddressType;
        /**
         * Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
         */
        offices: {
            [name:string]: IOffice;
        };
        /**
         * Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
         */
        officials: {
            [name:string]: IOfficial;
        };
        /**
         * The result of the request. One of: success, noStreetSegmentFound, addressUnparseable, noAddressParameter, multipleStreetSegmentsFound, electionOver, electionUnknown, internalLookupFailure, RequestedBothAddressAndOcdId
         */
        status: string;
    }
    /**
     * A simple representation of an address.
     */
    interface ISimpleAddressType {
        /**
         * The city or town for the address.
         */
        city: string;
        /**
         * The street name and number of this address.
         */
        line1: string;
        /**
         * The second line the address, if needed.
         */
        line2: string;
        /**
         * The third line of the address, if needed.
         */
        line3: string;
        /**
         * The name of the location.
         */
        locationName: string;
        /**
         * The US two letter state abbreviation of the address.
         */
        state: string;
        /**
         * The US Postal Zip Code of the address.
         */
        zip: string;
    }
    /**
     * Contains information about the data source for the element containing it.
     */
    interface ISource {
        /**
         * The name of the data source.
         */
        name: string;
        /**
         * Whether this data comes from an official government source.
         */
        official: boolean;
    }
    /**
     * A request for information about a voter.
     */
    interface IVoterInfoRequest {
        /**
         * The registered address of the voter to look up.
         */
        address: string;
    }
    /**
     * The result of a voter info lookup query.
     */
    interface IVoterInfoResponse {
        /**
         * Contests that will appear on the voter's ballot
         */
        contests: IContest[];
        /**
         * Locations where the voter is eligible to vote early, prior to election day
         */
        earlyVoteSites: IPollingLocation[];
        /**
         * The election that was queried.
         */
        election: IElection;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".
         */
        kind: string;
        /**
         * The normalized version of the requested address
         */
        normalizedInput: ISimpleAddressType;
        /**
         * Locations where the voter is eligible to vote on election day. For states with mail-in voting only, these locations will be nearby drop box locations. Drop box locations are free to the voter and may be used instead of placing the ballot in the mail.
         */
        pollingLocations: IPollingLocation[];
        /**
         * Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.
         */
        state: IAdministrationRegion[];
        /**
         * The result of the request. One of: success, noStreetSegmentFound, addressUnparseable, noAddressParameter, multipleStreetSegmentsFound, electionOver, electionUnknown, internalLookupFailure
         */
        status: string;
    }
}
