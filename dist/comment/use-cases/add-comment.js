"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddComment;

var _entities = _interopRequireDefault(require("../entities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates function for adding new comment.
 * @param {Object} param
 * @param {Object} param.commentsDb data-access interface.
 * @returns {function}
 */
function makeAddComment({
  commentsDb
}) {
  return async function addComment(commentInfo) {
    const comment = (0, _entities.default)(commentInfo);
    const exists = await commentsDb.findByHash({
      hash: comment.getHash()
    });

    if (exists) {
      return exists;
    }

    return commentsDb.insert({
      author: comment.getAuthor(),
      text: comment.getText(),
      date: comment.getDate(),
      id: comment.getId(),
      hash: comment.getHash()
    });
  };
}