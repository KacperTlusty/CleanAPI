"use strict";

var _dataAccess = _interopRequireDefault(require("../data-access/data-access"));

var _comment = _interopRequireDefault(require("../../test/comment"));

var _db = _interopRequireDefault(require("../../test/db"));

var _showComments = _interopRequireDefault(require("./show-comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get comments', () => {
  let commentsDb;
  beforeAll(() => {
    commentsDb = (0, _dataAccess.default)({
      makeDb: _db.default
    });
  });
  describe('successful route', () => {
    test('should return all movies', async () => {
      const getComments = (0, _showComments.default)({
        commentsDb
      });
      const firstComment = (0, _comment.default)();
      const secondComment = (0, _comment.default)();
      const comments = [firstComment, secondComment];
      await Promise.all(comments.map(commentsDb.insert));
      const results = await getComments();
      expect(results.filter(r => r.id === firstComment.id).length).toBe(1);
      expect(results.filter(r => r.id === secondComment.id).length).toBe(1);
    });
  });
});