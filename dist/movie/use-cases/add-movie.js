"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeAddMovie;

var _entities = _interopRequireDefault(require("../entities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates function for adding new movie use-case.
 * @param {Object} param0
 * @param {Object} param0.movieDb data-access interface.
 * @returns {function}
 */
function makeAddMovie({
  moviesDb
}) {
  return async function addMovie(movieInfo) {
    const movie = (0, _entities.default)(movieInfo);
    const exists = await moviesDb.findByHash({
      hash: movie.getHash()
    });

    if (exists) {
      return exists;
    }

    return moviesDb.insert({
      actors: movie.getActors(),
      country: movie.getCountry(),
      director: movie.getDirector(),
      genre: movie.getGenre(),
      hash: movie.getHash(),
      id: movie.getId(),
      language: movie.getLanguage(),
      rated: movie.getRated(),
      released: movie.getReleased(),
      runtime: movie.getRuntime(),
      title: movie.getTitle(),
      writer: movie.getWriter(),
      year: movie.getYear()
    });
  };
}