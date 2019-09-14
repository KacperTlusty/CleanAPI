"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeShowMovies;

/**
 * Creates function for showing stored movies use-case.
 * @param {Object} param0
 * @param {Object} param0.moviesDb data-access interface.
 * @returns {function}
 */
function makeShowMovies({
  moviesDb
}) {
  return async function showMovies() {
    const movies = await moviesDb.findAll();
    return movies;
  };
}