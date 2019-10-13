'use strict';

const http = require('http');

// Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const HttpStatus = {
  OK: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  URITooLong: 414,
  UnsupportedMediaType: 415,
  RequestedRangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HTTPVersionNotSupported: 505,
  NetworkAuthenticationRequired: 511
};

// Ref: https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_status_codes
const HttpStatusText = {};

for (let status of Object.entries(HttpStatus))
  HttpStatusText[status[0]] = http.STATUS_CODES[status[1]];

HttpStatus.Text = Object.freeze(HttpStatusText);

module.exports = Object.freeze(HttpStatus);
