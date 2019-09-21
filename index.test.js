'use strict';

const http = require('http');
const HttpStatus = require('./index');

test('should return correct status code and text', () => {
  expect(HttpStatus.BadRequest).toBe(400);
  expect(HttpStatus.Text.BadRequest).toBe(http.STATUS_CODES[400]);
});

test('should be immutable', () => {
  expect(Object.isFrozen(HttpStatus)).toBe(true);
  expect(Object.isFrozen(HttpStatus.Text)).toBe(true);
});
