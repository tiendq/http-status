# HTTP Status

Returning HTTP status in a quick and easy way. Just using unpopular built-in NodeJS [`http.STATUS_CODES`](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_status_codes) property.

Example:

```js
const HttpStatus = require('@tiendq/http-status');

response.status(HttpStatus.OK).text(HttpStatus.Text.OK);
```

## Local Development

Installing and consuming the package locally:

```bash
cd ~/GitHub/http-status
npm link

cd ~/GitHub/hello-express # example project
npm link @tiendq/http-status
```

Cleaning up and using published package:

```bash
cd ~/GitHub/http-status
npm unlink

cd ~/GitHub/hello-express # example project
npm unlink @tiendq/http-status

npm i @tiendq/http-status
```

## About

Copyright (c) 2019 Tien Do (tiendq@gmail.com)

MIT License
