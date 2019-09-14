"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePostComment;

var _helpers = require("../helpers");

function makePostComment({
  addComment,
  logger
}) {
  return async function postComment(req) {
    try {
      const posted = await addComment(req.body);
      return (0, _helpers.createResponse)(201, { ...posted
      });
    } catch (e) {
      logger.error(e);
      return (0, _helpers.createResponse)(400, {
        error: e.message
      });
    }
  };
}