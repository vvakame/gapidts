# gapidts

the TypeScript definition file generator for Google APIs Discovery Service

## Usage

```
$ gapidts --help

    Usage: gapidts [options]

    Options:

      -h, --help                   output usage information
      --source <file>              specified source JSON file
      --list-short                 list of API ID.
      --list                       list of API ID.
      --id <apiId>                 endpoint ID. e.g. urlshortener:v1
      --host [hostName]            host name. default www.googleapis.com
      --port [port]                port number. default 443
      --discovery-api-path <path>  discovery api path. default /discovery/v1/apis
      --endpoint <endpoint>        path. e.g. https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest
      --out <outFileName>          output file name
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
$ gapidts --id books:v1 --out books-v1.d.ts
$ ls -la books-v1.d.ts
-rw-r--r--  1 vvakame  staff  41898  9  6 02:52 books-v1.d.ts
```
