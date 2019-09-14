"use strict";

var _getComments = _interopRequireDefault(require("./get-comments"));

var _comment = _interopRequireDefault(require("../../test/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get comments controller', () => {
  const fakeCommentOne = (0, _comment.default)();
  const fakeCommentTwo = (0, _comment.default)();
  test('successfully returns list of movies', async () => {
    const getComments = (0, _getComments.default)({
      showComments: async () => [fakeCommentOne, fakeCommentTwo]
    });
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: [fakeCommentOne, fakeCommentTwo]
    };
    const response = await getComments();
    expect(response).toEqual(expected);
  });
  describe('error handling', () => {
    const error = new Error('fake error');
    test('returns error when error occurs and logs it', async () => {
      const logger = {
        error: jest.fn(() => {})
      };
      const getComments = (0, _getComments.default)({
        showComments: () => {
          throw error;
        },
        logger
      });
      const expected = {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: 'fake error'
        }
      };
      const response = await getComments();
      expect(response).toEqual(expected);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(error);
    });
  });
});