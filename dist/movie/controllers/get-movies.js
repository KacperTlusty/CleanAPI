"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetMovies;

var _helpers = require("../helpers");

function makeGetMovies({
  showMovies,
  logger
}) {
  return async function getMovies() {
    try {
      const movies = await showMovies();
      return (0, _helpers.createResponse)(200, movies);
    } catch (e) {
      logger.error(e);
      return (0, _helpers.createResponse)(400, {
        error: e.message
      });
    }
  };
}