# HTTP Status

Returning HTTP status in a quick and easy way. Just using unpopular built-in NodeJS [`http.STATUS_CODES`](https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_status_codes) property.

Example:

```js
const HttpStatus = require('@tiendq/http-status');

response.status(HttpStatus.OK).text(HttpStatus.Text.OK);
```

## About

Copyright (c) 2019 Tien Do (tiendq@gmail.com)

MIT License
