"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetComments;

var _helpers = require("../helpers");

function makeGetComments({
  showComments,
  logger
}) {
  return async function getMovies() {
    try {
      const comments = await showComments();
      return (0, _helpers.createResponse)(200, comments);
    } catch (e) {
      logger.error(e);
      return (0, _helpers.createResponse)(400, {
        error: e.message
      });
    }
  };
}