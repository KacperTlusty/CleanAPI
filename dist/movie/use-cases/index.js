"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMovies = exports.addMovie = exports.default = void 0;

var _addMovie = _interopRequireDefault(require("./add-movie"));

var _showMovies = _interopRequireDefault(require("./show-movies"));

var _dataAccess = _interopRequireDefault(require("../data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addMovie = (0, _addMovie.default)({
  moviesDb: _dataAccess.default
});
exports.addMovie = addMovie;
const showMovies = (0, _showMovies.default)({
  moviesDb: _dataAccess.default
});
exports.showMovies = showMovies;
const movieService = Object.freeze({
  addMovie,
  showMovies
});
var _default = movieService;
exports.default = _default;