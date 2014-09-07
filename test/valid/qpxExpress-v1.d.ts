// Type definitions for Google QPX Express API v1
// Project: http://developers.google.com/qpx-express
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * Lets you find the least expensive flights between an origin and a destination.
     */
    module qpxExpress {
        var trips: {
            /**
             * Returns a list of flights.
             */
            search: (params: {
                resource?: ITripsSearchRequest;
            }) => { execute(callback: (data: ITripsSearchResponse, original: string) => void):void; };
        };
        /**
         * The make, model, and type of an aircraft.
         */
        interface IAircraftData {
            /**
             * The aircraft code. For example, for a Boeing 777 the code would be 777.
             */
            code: string;
            /**
             * Identifies this as an aircraftData object. Value: the fixed string qpxexpress#aircraftData
             */
            kind: string;
            /**
             * The name of an aircraft, for example Boeing 777.
             */
            name: string;
        }
        /**
         * An airport.
         */
        interface IAirportData {
            /**
             * The city code an airport is located in. For example, for JFK airport, this is NYC.
             */
            city: string;
            /**
             * An airport's code. For example, for Boston Logan airport, this is BOS.
             */
            code: string;
            /**
             * Identifies this as an airport object. Value: the fixed string qpxexpress#airportData.
             */
            kind: string;
            /**
             * The name of an airport. For example, for airport BOS the name is "Boston Logan International".
             */
            name: string;
        }
        /**
         * Information about an item of baggage.
         */
        interface IBagDescriptor {
            /**
             * Provides the commercial name for an optional service.
             */
            commercialName: string;
            /**
             * How many of this type of bag will be checked on this flight.
             */
            count: number; // int32
            /**
             * A description of the baggage.
             */
            description: string[];
            /**
             * Identifies this as a baggage object. Value: the fixed string qpxexpress#bagDescriptor.
             */
            kind: string;
            /**
             * The standard IATA subcode used to identify this optional service.
             */
            subcode: string;
        }
        /**
         * Information about a carrier (ie. an airline, bus line, railroad, etc) that might be useful to display to an end-user.
         */
        interface ICarrierData {
            /**
             * The IATA designator of a carrier (airline, etc). For example, for American Airlines, the code is AA.
             */
            code: string;
            /**
             * Identifies this as a kind of carrier (ie. an airline, bus line, railroad, etc). Value: the fixed string qpxexpress#carrierData.
             */
            kind: string;
            /**
             * The long, full name of a carrier. For example: American Airlines.
             */
            name: string;
        }
        /**
         * Information about a city that might be useful to an end-user; typically the city of an airport.
         */
        interface ICityData {
            /**
             * The IATA character ID of a city. For example, for Boston this is BOS.
             */
            code: string;
            /**
             * The two-character country code of the country the city is located in. For example, US for the United States of America.
             */
            country: string;
            /**
             * Identifies this as a city, typically with one or more airports. Value: the fixed string qpxexpress#cityData.
             */
            kind: string;
            /**
             * The full name of a city. An example would be: New York.
             */
            name: string;
        }
        /**
         * Detailed information about components found in the solutions of this response, including a trip's airport, city, taxes, airline, and aircraft.
         */
        interface IData {
            /**
             * The aircraft that is flying between an origin and destination.
             */
            aircraft: IAircraftData[];
            /**
             * The airport of an origin or destination.
             */
            airport: IAirportData[];
            /**
             * The airline carrier of the aircraft flying between an origin and destination. Allowed values are IATA carrier codes.
             */
            carrier: ICarrierData[];
            /**
             * The city that is either the origin or destination of part of a trip.
             */
            city: ICityData[];
            /**
             * Identifies this as QPX Express response resource, including a trip's airport, city, taxes, airline, and aircraft. Value: the fixed string qpxexpress#data.
             */
            kind: string;
            /**
             * The taxes due for flying between an origin and a destination.
             */
            tax: ITaxData[];
        }
        /**
         * Complete information about a fare used in the solution to a low-fare search query. In the airline industry a fare is a price an airline charges for one-way travel between two points. A fare typically contains a carrier code, two city codes, a price, and a fare basis. (A fare basis is a one-to-eight character alphanumeric code used to identify a fare.)
         */
        interface IFareInfo {
            basisCode: string;
            /**
             * The carrier of the aircraft or other vehicle commuting between two points.
             */
            carrier: string;
            /**
             * The city code of the city the trip ends at.
             */
            destination: string;
            /**
             * A unique identifier of the fare.
             */
            id: string;
            /**
             * Identifies this as a fare object. Value: the fixed string qpxexpress#fareInfo.
             */
            kind: string;
            /**
             * The city code of the city the trip begins at.
             */
            origin: string;
            /**
             * Whether this is a private fare, for example one offered only to select customers rather than the general public.
             */
            private: boolean;
        }
        /**
         * A flight is a sequence of legs with the same airline carrier and flight number. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.) The naive view is that a flight is scheduled travel of an aircraft between two points, with possibly intermediate stops, but carriers will frequently list flights that require a change of aircraft between legs.
         */
        interface IFlightInfo {
            carrier: string;
            /**
             * The flight number.
             */
            number: string;
        }
        /**
         * Information about free baggage allowed on one segment of a trip.
         */
        interface IFreeBaggageAllowance {
            /**
             * A representation of a type of bag, such as an ATPCo subcode, Commercial Name, or other description.
             */
            bagDescriptor: IBagDescriptor[];
            /**
             * The maximum number of kilos all the free baggage together may weigh.
             */
            kilos: number; // int32
            /**
             * The maximum number of kilos any one piece of baggage may weigh.
             */
            kilosPerPiece: number; // int32
            /**
             * Identifies this as free baggage object, allowed on one segment of a trip. Value: the fixed string qpxexpress#freeBaggageAllowance.
             */
            kind: string;
            /**
             * The number of free pieces of baggage allowed.
             */
            pieces: number; // int32
            /**
             * The number of pounds of free baggage allowed.
             */
            pounds: number; // int32
        }
        /**
         * Information about a leg. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.)
         */
        interface ILegInfo {
            /**
             * The aircraft (or bus, ferry, railcar, etc) travelling between the two points of this leg.
             */
            aircraft: string;
            /**
             * The scheduled time of arrival at the destination of the leg, local to the point of arrival.
             */
            arrivalTime: string;
            /**
             * Whether you have to change planes following this leg. Only applies to the next leg.
             */
            changePlane: boolean;
            /**
             * Duration of a connection following this leg, in minutes.
             */
            connectionDuration: number; // int32
            /**
             * The scheduled departure time of the leg, local to the point of departure.
             */
            departureTime: string;
            /**
             * The leg destination as a city and airport.
             */
            destination: string;
            /**
             * The terminal the flight is scheduled to arrive at.
             */
            destinationTerminal: string;
            /**
             * The scheduled travelling time from the origin to the destination.
             */
            duration: number; // int32
            /**
             * An identifier that uniquely identifies this leg in the solution.
             */
            id: string;
            /**
             * Identifies this as a leg object. A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number. Value: the fixed string qpxexpress#legInfo.
             */
            kind: string;
            /**
             * A simple, general description of the meal(s) served on the flight, for example: "Hot meal".
             */
            meal: string;
            /**
             * The number of miles in this leg.
             */
            mileage: number; // int32
            /**
             * In percent, the published on time performance on this leg.
             */
            onTimePerformance: number; // int32
            /**
             * Department of Transportation disclosure information on the actual operator of a flight in a code share. (A code share refers to a marketing agreement between two carriers, where one carrier will list in its schedules (and take bookings for) flights that are actually operated by another carrier.)
             */
            operatingDisclosure: string;
            /**
             * The leg origin as a city and airport.
             */
            origin: string;
            /**
             * The terminal the flight is scheduled to depart from.
             */
            originTerminal: string;
            /**
             * Whether passenger information must be furnished to the United States Transportation Security Administration (TSA) prior to departure.
             */
            secure: boolean;
        }
        /**
         * The number and type of passengers. Unfortunately the definition of an infant, child, adult, and senior citizen varies across carriers and reservation systems.
         */
        interface IPassengerCounts {
            /**
             * The number of passengers that are adults.
             */
            adultCount: number; // int32
            /**
             * The number of passengers that are children.
             */
            childCount: number; // int32
            /**
             * The number of passengers that are infants travelling in the lap of an adult.
             */
            infantInLapCount: number; // int32
            /**
             * The number of passengers that are infants each assigned a seat.
             */
            infantInSeatCount: number; // int32
            /**
             * Identifies this as a passenger count object, representing the number of passengers. Value: the fixed string qpxexpress#passengerCounts.
             */
            kind: string;
            /**
             * The number of passengers that are senior citizens.
             */
            seniorCount: number; // int32
        }
        /**
         * The price of one or more travel segments. The currency used to purchase tickets is usually determined by the sale/ticketing city or the sale/ticketing country, unless none are specified, in which case it defaults to that of the journey origin country.
         */
        interface IPricingInfo {
            /**
             * The total fare in the base fare currency (the currency of the country of origin). This element is only present when the sales currency and the currency of the country of commencement are different.
             */
            baseFareTotal: string;
            /**
             * The fare used to price one or more segments.
             */
            fare: IFareInfo[];
            /**
             * The horizontal fare calculation. This is a field on a ticket that displays all of the relevant items that go into the calculation of the fare.
             */
            fareCalculation: string;
            /**
             * Identifies this as a pricing object, representing the price of one or more travel segments. Value: the fixed string qpxexpress#pricingInfo.
             */
            kind: string;
            /**
             * The latest ticketing time for this pricing assuming the reservation occurs at ticketing time and there is no change in fares/rules. The time is local to the point of sale (POS).
             */
            latestTicketingTime: string;
            /**
             * The number of passengers to which this price applies.
             */
            passengers: IPassengerCounts;
            /**
             * The passenger type code for this pricing. An alphanumeric code used by a carrier to restrict fares to certain categories of passenger. For instance, a fare might be valid only for senior citizens.
             */
            ptc: string;
            /**
             * Whether the fares on this pricing are refundable.
             */
            refundable: boolean;
            /**
             * The total fare in the sale or equivalent currency.
             */
            saleFareTotal: string;
            /**
             * The taxes in the sale or equivalent currency.
             */
            saleTaxTotal: string;
            /**
             * Total per-passenger price (fare and tax) in the sale or equivalent currency.
             */
            saleTotal: string;
            /**
             * The per-segment price and baggage information.
             */
            segmentPricing: ISegmentPricing[];
            /**
             * The taxes used to calculate the tax total per ticket.
             */
            tax: ITaxInfo[];
        }
        /**
         * Details of a segment of a flight; a segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, would have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2), and DFW to OGG (legs 1 and 2).
         */
        interface ISegmentInfo {
            /**
             * The booking code or class for this segment.
             */
            bookingCode: string;
            /**
             * The number of seats available in this booking code on this segment.
             */
            bookingCodeCount: number; // int32
            /**
             * The cabin booked for this segment.
             */
            cabin: string;
            /**
             * In minutes, the duration of the connection following this segment.
             */
            connectionDuration: number; // int32
            /**
             * The duration of the flight segment in minutes.
             */
            duration: number; // int32
            /**
             * The flight this is a segment of.
             */
            flight: IFlightInfo;
            /**
             * An id uniquely identifying the segment in the solution.
             */
            id: string;
            /**
             * Identifies this as a segment object. A segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, could have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2). Value: the fixed string qpxexpress#segmentInfo.
             */
            kind: string;
            /**
             * The legs composing this segment.
             */
            leg: ILegInfo[];
            /**
             * The solution-based index of a segment in a married segment group. Married segments can only be booked together. For example, an airline might report a certain booking code as sold out from Boston to Pittsburgh, but as available as part of two married segments Boston to Chicago connecting through Pittsburgh. For example content of this field, consider the round-trip flight ZZ1 PHX-PHL ZZ2 PHL-CLT ZZ3 CLT-PHX. This has three segments, with the two outbound ones (ZZ1 ZZ2) married. In this case, the two outbound segments belong to married segment group 0, and the return segment belongs to married segment group 1.
             */
            marriedSegmentGroup: string;
            /**
             * Whether the operation of this segment remains subject to government approval.
             */
            subjectToGovernmentApproval: boolean;
        }
        /**
         * The price of this segment.
         */
        interface ISegmentPricing {
            /**
             * A segment identifier unique within a single solution. It is used to refer to different parts of the same solution.
             */
            fareId: string;
            /**
             * Details of the free baggage allowance on this segment.
             */
            freeBaggageOption: IFreeBaggageAllowance[];
            /**
             * Identifies this as a segment pricing object, representing the price of this segment. Value: the fixed string qpxexpress#segmentPricing.
             */
            kind: string;
            /**
             * Unique identifier in the response of this segment.
             */
            segmentId: string;
        }
        /**
         * Information about a slice. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. For example, if a traveler specifies the following trip in a user interface:
         * | Origin | Destination | Departure Date | | BOS | LAX | March 10, 2007 | | LAX | SYD | March 17, 2007 | | SYD | BOS | March 22, 2007 |
         * then this is a three slice trip.
         */
        interface ISliceInfo {
            /**
             * The duration of the slice in minutes.
             */
            duration: number; // int32
            /**
             * Identifies this as a slice object. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. Value: the fixed string qpxexpress#sliceInfo.
             */
            kind: string;
            /**
             * The segment(s) constituting the slice.
             */
            segment: ISegmentInfo[];
        }
        /**
         * Criteria a desired slice must satisfy.
         */
        interface ISliceInput {
            /**
             * Slices with only the carriers in this alliance should be returned; do not use this field with permittedCarrier. Allowed values are ONEWORLD, SKYTEAM, and STAR.
             */
            alliance: string;
            /**
             * Departure date in YYYY-MM-DD format.
             */
            date: string;
            /**
             * Airport or city IATA designator of the destination.
             */
            destination: string;
            /**
             * Identifies this as a slice input object, representing the criteria a desired slice must satisfy. Value: the fixed string qpxexpress#sliceInput.
             */
            kind: string;
            /**
             * The longest connection between two legs, in minutes, you are willing to accept.
             */
            maxConnectionDuration: number; // int32
            /**
             * The maximum number of stops you are willing to accept in this slice.
             */
            maxStops: number; // int32
            /**
             * Airport or city IATA designator of the origin.
             */
            origin: string;
            /**
             * A list of 2-letter IATA airline designators. Slices with only these carriers should be returned.
             */
            permittedCarrier: string[];
            /**
             * Slices must depart in this time of day range, local to the point of departure.
             */
            permittedDepartureTime: ITimeOfDayRange;
            /**
             * Prefer solutions that book in this cabin for this slice. Allowed values are COACH, PREMIUM_COACH, BUSINESS, and FIRST.
             */
            preferredCabin: string;
            /**
             * A list of 2-letter IATA airline designators. Exclude slices that use these carriers.
             */
            prohibitedCarrier: string[];
        }
        /**
         * Tax data.
         */
        interface ITaxData {
            /**
             * An identifier uniquely identifying a tax in a response.
             */
            id: string;
            /**
             * Identifies this as a tax data object, representing some tax. Value: the fixed string qpxexpress#taxData.
             */
            kind: string;
            /**
             * The name of a tax.
             */
            name: string;
        }
        /**
         * Tax information.
         */
        interface ITaxInfo {
            /**
             * Whether this is a government charge or a carrier surcharge.
             */
            chargeType: string;
            /**
             * The code to enter in the ticket's tax box.
             */
            code: string;
            /**
             * For government charges, the country levying the charge.
             */
            country: string;
            /**
             * Identifier uniquely identifying this tax in a response. Not present for unnamed carrier surcharges.
             */
            id: string;
            /**
             * Identifies this as a tax information object. Value: the fixed string qpxexpress#taxInfo.
             */
            kind: string;
            /**
             * The price of the tax in the sales or equivalent currency.
             */
            salePrice: string;
        }
        /**
         * Two times in a single day defining a time range.
         */
        interface ITimeOfDayRange {
            /**
             * The earliest time of day in HH:MM format.
             */
            earliestTime: string;
            /**
             * Identifies this as a time of day range object, representing two times in a single day defining a time range. Value: the fixed string qpxexpress#timeOfDayRange.
             */
            kind: string;
            /**
             * The latest time of day in HH:MM format.
             */
            latestTime: string;
        }
        /**
         * Trip information.
         */
        interface ITripOption {
            /**
             * Identifier uniquely identifying this trip in a response.
             */
            id: string;
            /**
             * Identifies this as a trip information object. Value: the fixed string qpxexpress#tripOption.
             */
            kind: string;
            /**
             * Per passenger pricing information.
             */
            pricing: IPricingInfo[];
            /**
             * The total price for all passengers on the trip, in the form of a currency followed by an amount, e.g. USD253.35.
             */
            saleTotal: string;
            /**
             * The slices that make up this trip's itinerary.
             */
            slice: ISliceInfo[];
        }
        /**
         * A QPX Express search request, which will yield one or more solutions.
         */
        interface ITripOptionsRequest {
            /**
             * Do not return solutions that cost more than this price. The alphabetical part of the price is in ISO 4217. The format, in regex, is [A-Z]{3}\d+(\.\d+)? Example: $102.07
             */
            maxPrice: string;
            /**
             * Counts for each passenger type in the request.
             */
            passengers: IPassengerCounts;
            /**
             * Return only solutions with refundable fares.
             */
            refundable: boolean;
            /**
             * IATA country code representing the point of sale. This determines the "equivalent amount paid" currency for the ticket.
             */
            saleCountry: string;
            /**
             * The slices that make up the itinerary of this trip. A slice represents a traveler's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using one slice, round-trips using two. An example of a one slice trip with three segments might be BOS-SYD, SYD-LAX, LAX-BOS if the traveler only stopped in SYD and LAX just long enough to change planes.
             */
            slice: ISliceInput[];
            /**
             * The number of solutions to return, maximum 500.
             */
            solutions: number; // int32
        }
        /**
         * A QPX Express search response.
         */
        interface ITripOptionsResponse {
            /**
             * Informational data global to list of solutions.
             */
            data: IData;
            /**
             * Identifies this as a QPX Express trip response object, which consists of zero or more solutions. Value: the fixed string qpxexpress#tripOptions.
             */
            kind: string;
            /**
             * An identifier uniquely identifying this response.
             */
            requestId: string;
            /**
             * A list of priced itinerary solutions to the QPX Express query.
             */
            tripOption: ITripOption[];
        }
        /**
         * A QPX Express search request.
         */
        interface ITripsSearchRequest {
            /**
             * A QPX Express search request. Required values are at least one adult or senior passenger, an origin, a destination, and a date.
             */
            request: ITripOptionsRequest;
        }
        /**
         * A QPX Express search response.
         */
        interface ITripsSearchResponse {
            /**
             * Identifies this as a QPX Express API search response resource. Value: the fixed string qpxExpress#tripsSearch.
             */
            kind: string;
            /**
             * All possible solutions to the QPX Express search request.
             */
            trips: ITripOptionsResponse;
        }
    }
}
