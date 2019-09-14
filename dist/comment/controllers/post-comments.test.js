"use strict";

var _postComments = _interopRequireDefault(require("./post-comments"));

var _comment = _interopRequireDefault(require("../../test/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('post movie controller', () => {
  describe('success', () => {
    test('should successfully insert movie and return response template', async () => {
      const comment = (0, _comment.default)();
      const postComment = (0, _postComments.default)({
        addComment: c => c
      });
      const request = {
        body: comment
      };
      const expected = {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        body: comment
      };
      const response = await postComment(request);
      expect(response).toEqual(expected);
    });
  });
  describe('error', () => {
    test('should return response error and log it', async () => {
      const error = new Error('fake error');
      const logger = {
        error: jest.fn()
      };
      const postComment = (0, _postComments.default)({
        addComment: () => {
          throw error;
        },
        logger
      });
      const request = {
        body: {}
      };
      const expected = {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: 'fake error'
        }
      };
      const response = await postComment(request);
      expect(response).toEqual(expected);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(error);
    });
  });
});