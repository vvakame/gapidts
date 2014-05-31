declare module gapi.client {
	module urlshortener {
		var url:{
			insert:any;
			get(request:{projection?:string;shortUrl:string;}):IUrl;
			list:any;
		};

		interface IAnalyticsSummary {

		}

		interface IUrl {
			analytics: IAnalyticsSummary;
			created:string;
			id:string;
			kind:string;
			longUrl:string;
			status:string;
		}
	}
}
