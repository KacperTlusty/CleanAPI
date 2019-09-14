"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComments = exports.getComments = exports.default = void 0;

var _useCases = require("../use-cases");

var _postComments = _interopRequireDefault(require("./post-comments"));

var _getComments = _interopRequireDefault(require("./get-comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: logger
const getComments = (0, _getComments.default)({
  showComments: _useCases.showComments
});
exports.getComments = getComments;
const postComments = (0, _postComments.default)({
  addComment: _useCases.addComment,
  logger: {
    error: () => {}
  }
});
exports.postComments = postComments;
const commentController = Object.freeze({
  getComments,
  postComments
});
var _default = commentController;
exports.default = _default;