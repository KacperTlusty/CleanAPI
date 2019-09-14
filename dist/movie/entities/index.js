"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _helpers = require("../helpers");

var _movie = _interopRequireDefault(require("./movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hash(text) {
  return _crypto.default.createHash('md5').update(text, 'utf-8').digest('hex');
}

const makeMovie = (0, _movie.default)({
  Id: _helpers.Id,
  hash
});
var _default = makeMovie;
exports.default = _default;