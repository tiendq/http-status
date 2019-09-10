'use strict';

const http = require('http');

// Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const HttpStatus = {
  OK: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500
};

// Ref: https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_status_codes
const HttpStatusText = {
  OK: http.STATUS_CODES[HttpStatus.OK],
  BadRequest: http.STATUS_CODES[HttpStatus.BadRequest],
  NotFound: http.STATUS_CODES[HttpStatus.NotFound],
  InternalServerError: http.STATUS_CODES[HttpStatus.InternalServerError]
};

HttpStatus.Text = HttpStatusText;

module.exports = HttpStatus;
