"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cuid = _interopRequireDefault(require("cuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Id = Object.freeze({
  makeId: _cuid.default,
  isValidId: _cuid.default.isCuid
});
var _default = Id;
exports.default = _default;