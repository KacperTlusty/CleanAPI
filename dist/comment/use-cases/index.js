"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showComments = exports.addComment = exports.default = void 0;

var _addComment = _interopRequireDefault(require("./add-comment"));

var _showComments = _interopRequireDefault(require("./show-comments"));

var _dataAccess = _interopRequireDefault(require("../data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addComment = (0, _addComment.default)({
  commentsDb: _dataAccess.default
});
exports.addComment = addComment;
const showComments = (0, _showComments.default)({
  commentsDb: _dataAccess.default
});
exports.showComments = showComments;
const commentService = Object.freeze({
  addComment,
  showComments
});
var _default = commentService;
exports.default = _default;