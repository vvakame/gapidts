// Type definitions for Google Google+ API v1
// Project: https://developers.google.com/+/api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

declare module gapi.client {
    /**
     * The Google+ API enables developers to build on top of the Google+ platform.
     */
    module plus {
        var activities: {
            /**
             * Get an activity.
             * @params {string} activityId The ID of the activity to get.
             */
            get: (params: {
                activityId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivity
            /**
             * List all of the activities in the specified collection for a particular user.
             * @params {string} collection The collection of activities to list.
             * @params {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
             */
            list: (params: {
                collection: string;
                maxResults?: number;
                pageToken?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivityFeed
            /**
             * Search public activities.
             * @params {string} language Specify the preferred language to search with. See search language codes for available values.
             * @params {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} orderBy Specifies how to order search results.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
             * @params {string} query Full-text search query string.
             */
            search: (params: {
                language?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                query: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivityFeed
        };
        var comments: {
            /**
             * Get a comment.
             * @params {string} commentId The ID of the comment to get.
             */
            get: (params: {
                commentId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            /**
             * List all of the comments for an activity.
             * @params {string} activityId The ID of the activity to get comments for.
             * @params {number} maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} sortOrder The order in which to sort the list of comments.
             */
            list: (params: {
                activityId: string;
                maxResults?: number;
                pageToken?: string;
                sortOrder?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentFeed
        };
        var moments: {
            /**
             * Record a moment representing a user's activity such as making a purchase or commenting on a blog.
             * @params {string} collection The collection to which to write moments.
             * @params {boolean} debug Return the moment as written. Should be used only for debugging.
             * @params {string} userId The ID of the user to record activities for. The only valid values are "me" and the ID of the authenticated user.
             */
            insert: (params: {
                collection: string;
                debug?: boolean;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMoment
            /**
             * List all of the moments for a particular user.
             * @params {string} collection The collection of moments to list.
             * @params {number} maxResults The maximum number of moments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} targetUrl Only moments containing this targetUrl will be returned.
             * @params {string} type Only moments of this type will be returned.
             * @params {string} userId The ID of the user to get moments for. The special value "me" can be used to indicate the authenticated user.
             */
            list: (params: {
                collection: string;
                maxResults?: number;
                pageToken?: string;
                targetUrl?: string;
                type?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMomentsFeed
            /**
             * Delete a moment.
             * @params {string} id The ID of the moment to delete.
             */
            remove: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var people: {
            /**
             * Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
             * @params {string} userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
             */
            get: (params: {
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPerson
            /**
             * List all of the people in the specified collection.
             * @params {string} collection The collection of people to list.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} orderBy The order to return people in.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
             */
            list: (params: {
                collection: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
            /**
             * List all of the people in the specified collection for a particular activity.
             * @params {string} activityId The ID of the activity to get the list of people for.
             * @params {string} collection The collection of people to list.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             */
            listByActivity: (params: {
                activityId: string;
                collection: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
            /**
             * Search all public profiles.
             * @params {string} language Specify the preferred language to search with. See search language codes for available values.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
             * @params {string} query Specify a query string for full text search of public text in all profiles.
             */
            search: (params: {
                language?: string;
                maxResults?: number;
                pageToken?: string;
                query: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
        };
        interface IAcl {
            /**
             * Description of the access granted, suitable for display.
             */
            description: string;
            /**
             * The list of access entries.
             */
            items: IPlusAclentryResource[];
            /**
             * Identifies this resource as a collection of access controls. Value: "plus#acl".
             */
            kind: string;
        }
        interface IActivity {
            /**
             * Identifies who has access to see this activity.
             */
            access: IAcl;
            /**
             * The person who performed this activity.
             */
            actor: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                url: string;
            };
            /**
             * Street address where this activity occurred.
             */
            address: string;
            /**
             * Additional content added by the person who shared this activity, applicable only when resharing an activity.
             */
            annotation: string;
            /**
             * If this activity is a crosspost from another system, this property specifies the ID of the original activity.
             */
            crosspostSource: string;
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
             */
            geocode: string;
            /**
             * The ID of this activity.
             */
            id: string;
            /**
             * Identifies this resource as an activity. Value: "plus#activity".
             */
            kind: string;
            /**
             * The location where this activity occurred.
             */
            location: IPlace;
            /**
             * The object of this activity.
             */
            object: {
                actor: {
                    displayName: string;
                    id: string;
                    image: {
                        url: string;
                    };
                    url: string;
                };
                attachments: {
                    content: string;
                    displayName: string;
                    embed: {
                        type: string;
                        url: string;
                    };
                    fullImage: {
                        height: number; // uint32
                        type: string;
                        url: string;
                        width: number; // uint32
                    };
                    id: string;
                    image: {
                        height: number; // uint32
                        type: string;
                        url: string;
                        width: number; // uint32
                    };
                    objectType: string;
                    thumbnails: {
                        description: string;
                        image: {
                            height: number; // uint32
                            type: string;
                            url: string;
                            width: number; // uint32
                        };
                        url: string;
                    }[];
                    url: string;
                }[];
                content: string;
                id: string;
                objectType: string;
                originalContent: string;
                plusoners: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                replies: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                resharers: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                url: string;
            };
            /**
             * ID of the place where this activity occurred.
             */
            placeId: string;
            /**
             * Name of the place where this activity occurred.
             */
            placeName: string;
            /**
             * The service provider that initially published this activity.
             */
            provider: {
                title: string;
            };
            /**
             * The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
             */
            published: string; // date-time
            /**
             * Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
             */
            radius: string;
            /**
             * Title of this activity.
             */
            title: string;
            /**
             * The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
            /**
             * The link to this activity.
             */
            url: string;
            /**
             * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  
             * - "post" - Publish content to the stream. 
             * - "share" - Reshare an activity.
             */
            verb: string;
        }
        interface IActivityFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this collection of activities. Deprecated.
             */
            id: string;
            /**
             * The activities in this page of results.
             */
            items: IActivity[];
            /**
             * Identifies this resource as a collection of activities. Value: "plus#activityFeed".
             */
            kind: string;
            /**
             * Link to the next page of activities.
             */
            nextLink: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * Link to this activity resource.
             */
            selfLink: string;
            /**
             * The title of this collection of activities, which is a truncated portion of the content.
             */
            title: string;
            /**
             * The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
        }
        interface IComment {
            /**
             * The person who posted this comment.
             */
            actor: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this comment.
             */
            id: string;
            /**
             * The activity this comment replied to.
             */
            inReplyTo: {
                id: string;
                url: string;
            }[];
            /**
             * Identifies this resource as a comment. Value: "plus#comment".
             */
            kind: string;
            /**
             * The object of this comment.
             */
            object: {
                content: string;
                objectType: string;
                originalContent: string;
            };
            /**
             * People who +1'd this comment.
             */
            plusoners: {
                totalItems: number; // uint32
            };
            /**
             * The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
             */
            published: string; // date-time
            /**
             * Link to this comment resource.
             */
            selfLink: string;
            /**
             * The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
            /**
             * This comment's verb, indicating what action was performed. Possible values are:  
             * - "post" - Publish content to the stream.
             */
            verb: string;
        }
        interface ICommentFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this collection of comments.
             */
            id: string;
            /**
             * The comments in this page of results.
             */
            items: IComment[];
            /**
             * Identifies this resource as a collection of comments. Value: "plus#commentFeed".
             */
            kind: string;
            /**
             * Link to the next page of activities.
             */
            nextLink: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * The title of this collection of comments.
             */
            title: string;
            /**
             * The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
        }
        interface IItemScope {
            /**
             * The subject matter of the content.
             */
            about: IItemScope;
            /**
             * An additional name for a Person, can be used for a middle name.
             */
            additionalName: string[];
            /**
             * Postal address.
             */
            address: IItemScope;
            /**
             * Address country.
             */
            addressCountry: string;
            /**
             * Address locality.
             */
            addressLocality: string;
            /**
             * Address region.
             */
            addressRegion: string;
            /**
             * The encoding.
             */
            associated_media: IItemScope[];
            /**
             * Number of attendees.
             */
            attendeeCount: number; // int32
            /**
             * A person attending the event.
             */
            attendees: IItemScope[];
            /**
             * From http://schema.org/MusicRecording, the audio file.
             */
            audio: IItemScope;
            /**
             * The person or persons who created this result. In the example of restaurant reviews, this might be the reviewer's name.
             */
            author: IItemScope[];
            /**
             * Best possible rating value that a result might obtain. This property defines the upper bound for the ratingValue. For example, you might have a 5 star rating scale, you would provide 5 as the value for this property.
             */
            bestRating: string;
            /**
             * Date of birth.
             */
            birthDate: string;
            /**
             * From http://schema.org/MusicRecording, the artist that performed this recording.
             */
            byArtist: IItemScope;
            /**
             * The caption for this object.
             */
            caption: string;
            /**
             * File size in (mega/kilo) bytes.
             */
            contentSize: string;
            /**
             * Actual bytes of the media object, for example the image file or video file.
             */
            contentUrl: string;
            /**
             * A list of contributors to this result.
             */
            contributor: IItemScope[];
            /**
             * The date the result was created such as the date that a review was first created.
             */
            dateCreated: string;
            /**
             * The date the result was last modified such as the date that a review was last edited.
             */
            dateModified: string;
            /**
             * The initial date that the result was published. For example, a user writes a comment on a blog, which has a result.dateCreated of when they submit it. If the blog users comment moderation, the result.datePublished value would match the date when the owner approved the message.
             */
            datePublished: string;
            /**
             * The string that describes the content of the result.
             */
            description: string;
            /**
             * The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.
             */
            duration: string;
            /**
             * A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag.
             */
            embedUrl: string;
            /**
             * The end date and time of the event (in ISO 8601 date format).
             */
            endDate: string;
            /**
             * Family name. This property can be used with givenName instead of the name property.
             */
            familyName: string;
            /**
             * Gender of the person.
             */
            gender: string;
            /**
             * Geo coordinates.
             */
            geo: IItemScope;
            /**
             * Given name. This property can be used with familyName instead of the name property.
             */
            givenName: string;
            /**
             * The height of the media object.
             */
            height: string;
            /**
             * An identifier for the target. Your app can choose how to identify targets. The target.id is required if you are writing an activity that does not have a corresponding web page or target.url property.
             */
            id: string;
            /**
             * A URL to the image that represents this result. For example, if a user writes a review of a restaurant and attaches a photo of their meal, you might use that photo as the result.image.
             */
            image: string;
            /**
             * From http://schema.org/MusicRecording, which album a song is in.
             */
            inAlbum: IItemScope;
            /**
             * Identifies this resource as an itemScope.
             */
            kind: string;
            /**
             * Latitude.
             */
            latitude: number; // double
            /**
             * The location of the event or organization.
             */
            location: IItemScope;
            /**
             * Longitude.
             */
            longitude: number; // double
            /**
             * The name of the result. In the example of a restaurant review, this might be the summary the user gave their review such as "Great ambiance, but overpriced."
             */
            name: string;
            /**
             * Property of http://schema.org/TVEpisode indicating which series the episode belongs to.
             */
            partOfTVSeries: IItemScope;
            /**
             * The main performer or performers of the event-for example, a presenter, musician, or actor.
             */
            performers: IItemScope[];
            /**
             * Player type that is required. For example: Flash or Silverlight.
             */
            playerType: string;
            /**
             * Post office box number.
             */
            postOfficeBoxNumber: string;
            /**
             * Postal code.
             */
            postalCode: string;
            /**
             * Rating value.
             */
            ratingValue: string;
            /**
             * Review rating.
             */
            reviewRating: IItemScope;
            /**
             * The start date and time of the event (in ISO 8601 date format).
             */
            startDate: string;
            /**
             * Street address.
             */
            streetAddress: string;
            /**
             * The text that is the result of the app activity. For example, if a user leaves a review of a restaurant, this might be the text of the review.
             */
            text: string;
            /**
             * Thumbnail image for an image or video.
             */
            thumbnail: IItemScope;
            /**
             * A URL to a thumbnail image that represents this result.
             */
            thumbnailUrl: string;
            /**
             * The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.
             */
            tickerSymbol: string;
            /**
             * The schema.org URL that best describes the referenced target and matches the type of moment.
             */
            type: string;
            /**
             * The URL that points to the result object. For example, a permalink directly to a restaurant reviewer's comment.
             */
            url: string;
            /**
             * The width of the media object.
             */
            width: string;
            /**
             * Worst possible rating value that a result might obtain. This property defines the lower bound for the ratingValue.
             */
            worstRating: string;
        }
        interface IMoment {
            /**
             * The moment ID.
             */
            id: string;
            /**
             * Identifies this resource as a moment.
             */
            kind: string;
            /**
             * The object generated by performing the action on the target. For example, a user writes a review of a restaurant, the target is the restaurant and the result is the review.
             */
            result: IItemScope;
            /**
             * Time stamp of when the action occurred in RFC3339 format.
             */
            startDate: string; // date-time
            /**
             * The object on which the action was performed.
             */
            target: IItemScope;
            /**
             * The Google schema for the type of moment to write. For example, http://schemas.google.com/AddActivity.
             */
            type: string;
        }
        interface IMomentsFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The moments in this page of results.
             */
            items: IMoment[];
            /**
             * Identifies this resource as a collection of moments. Value: "plus#momentsFeed".
             */
            kind: string;
            /**
             * Link to the next page of moments.
             */
            nextLink: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * Link to this page of moments.
             */
            selfLink: string;
            /**
             * The title of this collection of moments.
             */
            title: string;
            /**
             * The RFC 339 timestamp for when this collection of moments was last updated.
             */
            updated: string; // date-time
        }
        interface IPeopleFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
             */
            items: IPerson[];
            /**
             * Identifies this resource as a collection of people. Value: "plus#peopleFeed".
             */
            kind: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * Link to this resource.
             */
            selfLink: string;
            /**
             * The title of this collection of people.
             */
            title: string;
            /**
             * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
             */
            totalItems: number; // int32
        }
        interface IPerson {
            /**
             * A short biography for this person.
             */
            aboutMe: string;
            /**
             * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
             */
            ageRange: {
                max: number; // int32
                min: number; // int32
            };
            /**
             * The person's date of birth, represented as YYYY-MM-DD.
             */
            birthday: string;
            /**
             * The "bragging rights" line of this person.
             */
            braggingRights: string;
            /**
             * For followers who are visible, the number of people who have added this person or page to a circle.
             */
            circledByCount: number; // int32
            /**
             * The cover photo content.
             */
            cover: {
                coverInfo: {
                    leftImageOffset: number; // int32
                    topImageOffset: number; // int32
                };
                coverPhoto: {
                    height: number; // int32
                    url: string;
                    width: number; // int32
                };
                layout: string;
            };
            /**
             * The current location for this person.
             */
            currentLocation: string;
            /**
             * The name of this person, which is suitable for display.
             */
            displayName: string;
            /**
             * The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
             */
            domain: string;
            /**
             * A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
             */
            emails: {
                type: string;
                value: string;
            }[];
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The person's gender. Possible values include, but are not limited to, the following values:  
             * - "male" - Male gender. 
             * - "female" - Female gender. 
             * - "other" - Other.
             */
            gender: string;
            /**
             * The ID of this person.
             */
            id: string;
            /**
             * The representation of the person's profile photo.
             */
            image: {
                url: string;
            };
            /**
             * Whether this user has signed up for Google+.
             */
            isPlusUser: boolean;
            /**
             * Identifies this resource as a person. Value: "plus#person".
             */
            kind: string;
            /**
             * The user's preferred language for rendering.
             */
            language: string;
            /**
             * An object representation of the individual components of a person's name.
             */
            name: {
                familyName: string;
                formatted: string;
                givenName: string;
                honorificPrefix: string;
                honorificSuffix: string;
                middleName: string;
            };
            /**
             * The nickname of this person.
             */
            nickname: string;
            /**
             * Type of person within Google+. Possible values include, but are not limited to, the following values:  
             * - "person" - represents an actual person. 
             * - "page" - represents a page.
             */
            objectType: string;
            /**
             * The occupation of this person.
             */
            occupation: string;
            /**
             * A list of current or past organizations with which this person is associated.
             */
            organizations: {
                department: string;
                description: string;
                endDate: string;
                location: string;
                name: string;
                primary: boolean;
                startDate: string;
                title: string;
                type: string;
            }[];
            /**
             * A list of places where this person has lived.
             */
            placesLived: {
                primary: boolean;
                value: string;
            }[];
            /**
             * If a Google+ Page, the number of people who have +1'd this page.
             */
            plusOneCount: number; // int32
            /**
             * The person's relationship status. Possible values include, but are not limited to, the following values:  
             * - "single" - Person is single. 
             * - "in_a_relationship" - Person is in a relationship. 
             * - "engaged" - Person is engaged. 
             * - "married" - Person is married. 
             * - "its_complicated" - The relationship is complicated. 
             * - "open_relationship" - Person is in an open relationship. 
             * - "widowed" - Person is widowed. 
             * - "in_domestic_partnership" - Person is in a domestic partnership. 
             * - "in_civil_union" - Person is in a civil union.
             */
            relationshipStatus: string;
            /**
             * The person's skills.
             */
            skills: string;
            /**
             * The brief description (tagline) of this person.
             */
            tagline: string;
            /**
             * The URL of this person's profile.
             */
            url: string;
            /**
             * A list of URLs for this person.
             */
            urls: {
                label: string;
                type: string;
                value: string;
            }[];
            /**
             * Whether the person or Google+ Page has been verified.
             */
            verified: boolean;
        }
        interface IPlace {
            /**
             * The physical address of the place.
             */
            address: {
                formatted: string;
            };
            /**
             * The display name of the place.
             */
            displayName: string;
            /**
             * Identifies this resource as a place. Value: "plus#place".
             */
            kind: string;
            /**
             * The position of the place.
             */
            position: {
                latitude: number; // double
                longitude: number; // double
            };
        }
        interface IPlusAclentryResource {
            /**
             * A descriptive name for this entry. Suitable for display.
             */
            displayName: string;
            /**
             * The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.
             */
            id: string;
            /**
             * The type of entry describing to whom access is granted. Possible values are:  
             * - "person" - Access to an individual. 
             * - "circle" - Access to members of a circle. 
             * - "myCircles" - Access to members of all the person's circles. 
             * - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles. 
             * - "domain" - Access to members of the person's Google Apps domain. 
             * - "public" - Access to anyone on the web.
             */
            type: string;
        }
    }
}
