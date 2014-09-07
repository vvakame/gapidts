/// <reference path="./urlshortener-v1.d.ts" />

function init() {
    gapi.client.load('urlshortener', 'v1', function () {
        var input = document.querySelector("#shortUrl");
        var button = document.querySelector("#expand");
        var result = document.querySelector("#result");

        button.addEventListener("click", function () {
            var request = gapi.client.urlshortener.url.get({
                shortUrl: input.value,
                projection: 'FULL'
            });
            request.execute(function (data, original) {
                if (typeof data.code === "undefined") {
                    result.innerText = data.longUrl;
                } else {
                    result.innerText = data.message;
                }
            });
        });
    });
}
