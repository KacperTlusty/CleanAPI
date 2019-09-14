"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createResponse;

/**
 * Creates response object with content-type set to application-json
 * with given status code and body.
 * @param {number} statusCode Response's status code.
 * @param {any} body Response's body.
 * @returns {Object}
 */
function createResponse(statusCode, body) {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode,
    body
  };
}