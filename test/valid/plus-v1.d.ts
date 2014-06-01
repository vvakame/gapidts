declare module gapi.client {
    module plus {
        var activities: {
            get: (params: {
                activityId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivity
            list: (params: {
                collection: string;
                maxResults?: number;
                pageToken?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivityFeed
            search: (params: {
                language?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                query: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IActivityFeed
        };
        var comments: {
            get: (params: {
                commentId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IComment
            list: (params: {
                activityId: string;
                maxResults?: number;
                pageToken?: string;
                sortOrder?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // ICommentFeed
        };
        var moments: {
            insert: (params: {
                collection: string;
                debug?: boolean;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMoment
            list: (params: {
                collection: string;
                maxResults?: number;
                pageToken?: string;
                targetUrl?: string;
                type?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IMomentsFeed
            remove: (params: {
                id: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var people: {
            get: (params: {
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPerson
            list: (params: {
                collection: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                userId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
            listByActivity: (params: {
                activityId: string;
                collection: string;
                maxResults?: number;
                pageToken?: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
            search: (params: {
                language?: string;
                maxResults?: number;
                pageToken?: string;
                query: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IPeopleFeed
        };
        interface IAcl {
            description: string;
            items: IPlusAclentryResource[];
            kind: string;
        }
        interface IActivity {
            access: IAcl;
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
            address: string;
            annotation: string;
            crosspostSource: string;
            etag: string;
            geocode: string;
            id: string;
            kind: string;
            location: IPlace;
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
            placeId: string;
            placeName: string;
            provider: {
                title: string;
            };
            published: string; // date-time
            radius: string;
            title: string;
            updated: string; // date-time
            url: string;
            verb: string;
        }
        interface IActivityFeed {
            etag: string;
            id: string;
            items: IActivity[];
            kind: string;
            nextLink: string;
            nextPageToken: string;
            selfLink: string;
            title: string;
            updated: string; // date-time
        }
        interface IComment {
            actor: {
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
            };
            etag: string;
            id: string;
            inReplyTo: {
                id: string;
                url: string;
            }[];
            kind: string;
            object: {
                content: string;
                objectType: string;
                originalContent: string;
            };
            plusoners: {
                totalItems: number; // uint32
            };
            published: string; // date-time
            selfLink: string;
            updated: string; // date-time
            verb: string;
        }
        interface ICommentFeed {
            etag: string;
            id: string;
            items: IComment[];
            kind: string;
            nextLink: string;
            nextPageToken: string;
            title: string;
            updated: string; // date-time
        }
        interface IItemScope {
            about: IItemScope;
            additionalName: string[];
            address: IItemScope;
            addressCountry: string;
            addressLocality: string;
            addressRegion: string;
            associated_media: IItemScope[];
            attendeeCount: number; // int32
            attendees: IItemScope[];
            audio: IItemScope;
            author: IItemScope[];
            bestRating: string;
            birthDate: string;
            byArtist: IItemScope;
            caption: string;
            contentSize: string;
            contentUrl: string;
            contributor: IItemScope[];
            dateCreated: string;
            dateModified: string;
            datePublished: string;
            description: string;
            duration: string;
            embedUrl: string;
            endDate: string;
            familyName: string;
            gender: string;
            geo: IItemScope;
            givenName: string;
            height: string;
            id: string;
            image: string;
            inAlbum: IItemScope;
            kind: string;
            latitude: number; // double
            location: IItemScope;
            longitude: number; // double
            name: string;
            partOfTVSeries: IItemScope;
            performers: IItemScope[];
            playerType: string;
            postOfficeBoxNumber: string;
            postalCode: string;
            ratingValue: string;
            reviewRating: IItemScope;
            startDate: string;
            streetAddress: string;
            text: string;
            thumbnail: IItemScope;
            thumbnailUrl: string;
            tickerSymbol: string;
            type: string;
            url: string;
            width: string;
            worstRating: string;
        }
        interface IMoment {
            id: string;
            kind: string;
            result: IItemScope;
            startDate: string; // date-time
            target: IItemScope;
            type: string;
        }
        interface IMomentsFeed {
            etag: string;
            items: IMoment[];
            kind: string;
            nextLink: string;
            nextPageToken: string;
            selfLink: string;
            title: string;
            updated: string; // date-time
        }
        interface IPeopleFeed {
            etag: string;
            items: IPerson[];
            kind: string;
            nextPageToken: string;
            selfLink: string;
            title: string;
            totalItems: number; // int32
        }
        interface IPerson {
            aboutMe: string;
            ageRange: {
                max: number; // int32
                min: number; // int32
            };
            birthday: string;
            braggingRights: string;
            circledByCount: number; // int32
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
            currentLocation: string;
            displayName: string;
            domain: string;
            emails: {
                type: string;
                value: string;
            }[];
            etag: string;
            gender: string;
            id: string;
            image: {
                url: string;
            };
            isPlusUser: boolean;
            kind: string;
            language: string;
            name: {
                familyName: string;
                formatted: string;
                givenName: string;
                honorificPrefix: string;
                honorificSuffix: string;
                middleName: string;
            };
            nickname: string;
            objectType: string;
            occupation: string;
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
            placesLived: {
                primary: boolean;
                value: string;
            }[];
            plusOneCount: number; // int32
            relationshipStatus: string;
            skills: string;
            tagline: string;
            url: string;
            urls: {
                label: string;
                type: string;
                value: string;
            }[];
            verified: boolean;
        }
        interface IPlace {
            address: {
                formatted: string;
            };
            displayName: string;
            kind: string;
            position: {
                latitude: number; // double
                longitude: number; // double
            };
        }
        interface IPlusAclentryResource {
            displayName: string;
            id: string;
            type: string;
        }
    }
}
