/// <reference path="./urlshortener-v1-browser.d.ts" />

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
			request.execute(data => {
				if (typeof data.code === "undefined") {
					result.innerText = data.result.longUrl;
				} else {
					result.innerText = data.message;
				}
			});

			request.then<string>(response => {
				return response.result.longUrl;
			}).then(url => {
				console.log(url);
			});
		});
	});
}
