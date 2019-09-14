"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMovie = exports.getMovies = exports.default = void 0;

var _useCases = require("../use-cases");

var _getMovies = _interopRequireDefault(require("./get-movies"));

var _postMovie = _interopRequireDefault(require("./post-movie"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMovies = (0, _getMovies.default)({
  showMovies: _useCases.showMovies
});
exports.getMovies = getMovies;
const postMovie = (0, _postMovie.default)({
  addMovie: _useCases.addMovie,
  getFullInfo: _helpers.getFullInfo,
  logger: {
    error: () => {}
  }
});
exports.postMovie = postMovie;
const movieController = Object.freeze({
  getMovies,
  postMovie
});
var _default = movieController;
exports.default = _default;