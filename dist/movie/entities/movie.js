"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMakeMovie;

/**
 * Function creates factory function for creating Movie Entities.
 * @param {Object} param
 * @param {Object} param.Id Object for creating Ids.
 * @param {function} param.hash Function for creating hash.
 * @returns {function}
 */
function buildMakeMovie({
  Id,
  hash
}) {
  return function makeMovie({
    actors,
    director,
    country,
    genre,
    language,
    rated,
    released,
    runtime,
    title,
    writer,
    year,
    id = Id.makeId()
  }) {
    if (!title) {
      throw new Error('Movie must have a title.');
    }

    if (!year) {
      throw new Error('Movie must have a year.');
    }

    if (!rated) {
      throw new Error('Movie must be rated.');
    }

    if (!director) {
      throw new Error('Movie must have a director.');
    }

    let _hash;

    return Object.freeze({
      getActors: () => actors,
      getCountry: () => country,
      getDirector: () => director,
      getGenre: () => genre,
      getHash: () => _hash || (_hash = makeHash()),
      getId: () => id,
      getLanguage: () => language,
      getRated: () => rated,
      getYear: () => year,
      getTitle: () => title,
      getReleased: () => released,
      getRuntime: () => runtime,
      getWriter: () => writer
    });
    /**
     * Creates and returns unique hash for movie basing on it's
     * title, director and year.
     * @returns {string}
     */

    function makeHash() {
      return hash(director + title + year);
    }
  };
}