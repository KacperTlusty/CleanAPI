"use strict";

var _dataAccess = _interopRequireDefault(require("../data-access/data-access"));

var _movie = _interopRequireDefault(require("../../test/movie"));

var _db = _interopRequireDefault(require("../../test/db"));

var _showMovies = _interopRequireDefault(require("./show-movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get movies', () => {
  let moviesDb, getMovies;
  beforeAll(() => {
    moviesDb = (0, _dataAccess.default)({
      makeDb: _db.default
    });
  });
  describe('successfull route', () => {
    beforeAll(() => {
      getMovies = (0, _showMovies.default)({
        moviesDb
      });
    });
    test('should return all movies', async () => {
      const firstMovie = (0, _movie.default)();
      const secondMovie = (0, _movie.default)();
      const movies = [firstMovie, secondMovie];
      await Promise.all(movies.map(moviesDb.insert));
      const results = await getMovies();
      expect(results.filter(r => r.id === firstMovie.id).length).toBe(1);
      expect(results.filter(r => r.id === secondMovie.id).length).toBe(1);
    });
  });
});