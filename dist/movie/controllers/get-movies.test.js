"use strict";

var _getMovies = _interopRequireDefault(require("./get-movies"));

var _movie = _interopRequireDefault(require("../../test/movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get movies controller', () => {
  const fakeMovieOne = (0, _movie.default)();
  const fakeMovieTwo = (0, _movie.default)();
  const request = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  test('successfully returns list of movies', async () => {
    const getMovies = (0, _getMovies.default)({
      showMovies: () => [fakeMovieOne, fakeMovieTwo]
    });
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: [fakeMovieOne, fakeMovieTwo]
    };
    const response = await getMovies(request);
    expect(response).toEqual(expected);
  });
  describe('error handling', () => {
    const error = new Error('fake error');
    test('returns error when error occurs and logs it', async () => {
      const logger = {
        error: jest.fn(() => {})
      };
      const getMovies = (0, _getMovies.default)({
        showMovies: () => {
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
      const response = await getMovies(request);
      expect(response).toEqual(expected);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(error);
    });
  });
});