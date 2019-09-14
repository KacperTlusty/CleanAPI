"use strict";

var _addMovie = _interopRequireDefault(require("./add-movie"));

var _db = _interopRequireDefault(require("../../test/db"));

var _movie = _interopRequireDefault(require("../../test/movie"));

var _dataAccess = _interopRequireDefault(require("../data-access/data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('add movie', () => {
  let moviesDb;
  beforeAll(() => {
    moviesDb = (0, _dataAccess.default)({
      makeDb: _db.default
    });
  });
  describe('successful insert', () => {
    test('inserts comments in the database', async () => {
      const newMovie = (0, _movie.default)();
      const addMovie = (0, _addMovie.default)({
        moviesDb
      });
      const inserted = await addMovie(newMovie);
      expect(inserted).toMatchObject(newMovie);
    });
    test('should return existing object when one exists', async () => {
      const newMovie = (0, _movie.default)();
      const addMovie = (0, _addMovie.default)({
        moviesDb
      });
      const firstInsertedMovie = await addMovie(newMovie);
      const secondInsertedMovie = await addMovie(newMovie);
      expect(firstInsertedMovie.id).toBeTruthy();
      expect(firstInsertedMovie.id).toBe(secondInsertedMovie.id);
    });
  });
});