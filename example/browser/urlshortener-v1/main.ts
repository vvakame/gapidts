/// <reference path="./urlshortener-v1.d.ts" />

declare module gapi.client {
	function load(apiName:string, version:string, callback:()=> void):void;
}

function init() {
	gapi.client.load('urlshortener', 'v1', () => {
		var input = <HTMLInputElement>document.querySelector("#shortUrl");
		var button = <HTMLButtonElement>document.querySelector("#expand");
		var result = <HTMLDivElement>document.querySelector("#result");

		button.addEventListener("click", ()=> {
			var request = gapi.client.urlshortener.url.get({
				shortUrl: input.value,
				projection: 'FULL'
			});
			request.execute((data, original) => {
				if (typeof data.code === "undefined") {
					result.innerText = data.longUrl;
				} else {
					result.innerText = data.message;
				}
			});
		});
	});
}
