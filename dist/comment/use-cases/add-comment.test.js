"use strict";

var _addComment = _interopRequireDefault(require("./add-comment"));

var _db = _interopRequireDefault(require("../../../test/db"));

var _comment = _interopRequireDefault(require("../../../test/comment"));

var _dataAccess = _interopRequireDefault(require("../data-access/data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('add comment', () => {
  let commentsDb;
  beforeAll(() => {
    commentsDb = (0, _dataAccess.default)({
      makeDb: _db.default
    });
  });
  describe('successful insert', () => {
    test('inserts comments in the database', async () => {
      const newComment = (0, _comment.default)();
      const addComment = (0, _addComment.default)({
        commentsDb
      });
      const inserted = await addComment(newComment);
      expect(inserted).toMatchObject(newComment);
    });
    test('should return existing object when one exists', async () => {
      const newComment = (0, _comment.default)();
      const addComment = (0, _addComment.default)({
        commentsDb
      });
      const firstInsertedComment = await addComment(newComment);
      const secondInsertedComment = await addComment(newComment);
      expect(firstInsertedComment.id).toBeTruthy();
      expect(firstInsertedComment.id).toBe(secondInsertedComment.id);
    });
  });
});