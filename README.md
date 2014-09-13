# gapidts

the TypeScript definition file generator for Google APIs Discovery Service

## Usage

```
$ gapidts --help

    Usage: gapidts [options]

    Options:

      -h, --help             output usage information
      --source <file>        specified source JSON file.
      --list-short           list of API ID.
      --list                 list of API ID.
      --json                 emit schema source by JSON.
      --id <apiId>           endpoint ID. e.g. urlshortener:v1
      --endpoint <endpoint>  path. e.g. https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest
      --outDir <directory>   output directory.
      --silent               execute silently.
```

```
$ gapidts --list
...
blogger:v3
	 Blogger API
	 API for access to the data within Blogger.

books:v1
	 Books API
	 Lets you search for books and manage your Google Books library.
...
$ gapidts --id books:v1 --outDir typings
$ ls -l typings
  total 288
  -rw-r--r--@ 1 vvakame  staff  66917  9 14 03:44 books-v1-browser.d.ts
  -rw-r--r--@ 1 vvakame  staff  68145  9 14 03:44 books-v1-nodejs.d.ts
  -rw-r--r--@ 1 vvakame  staff   1386  9 14 03:44 googleapis-browser-common.d.ts
  -rw-r--r--@ 1 vvakame  staff   1185  9 14 03:44 googleapis-nodejs-common.d.ts
```
