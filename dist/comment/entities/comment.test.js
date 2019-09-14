"use strict";

var _ = _interopRequireDefault(require("./"));

var _comment = _interopRequireDefault(require("../../test/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('comment entity', () => {
  describe('validate properties', () => {
    test('should check for author', () => {
      const comment = (0, _comment.default)({
        author: null
      });
      expect(() => (0, _.default)(comment)).toThrow('Comment must have an author.');
    });
    test('should check for text', () => {
      const comment = (0, _comment.default)({
        text: null
      });
      expect(() => (0, _.default)(comment)).toThrow('Comment must contain text.');
    });
    test('should have hash', () => {
      const comment = (0, _comment.default)({});
      expect((0, _.default)(comment).getHash()).toBeTruthy();
    });
  });
});