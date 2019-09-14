"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePostMovie;

var _helpers = require("../helpers");

function makePostMovie({
  addMovie,
  getFullInfo,
  logger
}) {
  return async function postMovie(req) {
    try {
      const {
        title,
        ...movieInfo
      } = req.body;
      const { ...additionalMovieInfo
      } = await getFullInfo(title);
      const posted = await addMovie({ ...additionalMovieInfo,
        ...movieInfo,
        title
      });
      return (0, _helpers.createResponse)(201, { ...posted
      });
    } catch (e) {
      // TODO: write looger.
      logger.error(e);
      return (0, _helpers.createResponse)(400, {
        error: e.message
      });
    }
  };
}