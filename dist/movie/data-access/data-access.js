"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeMoviesDb;

var _helpers = require("../helpers");

function makeMoviesDb({
  makeDb
}) {
  /**
   * Inserts given movie to database. Creates id if it's not specified.
   * @param {Object} movie Movie entity to be inserted to db.
   * @returns {Object} Inserted movie.
   */
  async function insert({
    id: _id = _helpers.Id.makeId(),
    ...movieInfo
  }) {
    const db = await makeDb();
    const result = await db.collection('movies').insertOne({
      _id,
      ...movieInfo
    });
    const {
      _id: id,
      ...insertedInfo
    } = result.ops[0];
    return {
      id,
      ...insertedInfo
    };
  }
  /**
   * Looks for movie in database basing on it's calculated hash from it's properties.
   * Returns found movie or null.
   * @param {Object} movie Movie entity to calculate infos.
   * @returns {Object} Found movie or null.
   */


  async function findByHash(movie) {
    const db = await makeDb();
    const result = await db.collection('movies').find({
      hash: movie.hash
    });
    const found = await result.toArray();

    if (found.length === 0) {
      return null;
    }

    const {
      _id: id,
      ...insertedInfo
    } = found[0];
    return {
      id,
      ...insertedInfo
    };
  }
  /**
   * Returns all movie documents from database.
   * Does mapping from private _id to id
   * @returns {Array}
   */


  async function findAll() {
    const db = await makeDb();
    const results = await db.collection('movies').find({});
    return (await results.toArray()).map(({
      _id: id,
      ...info
    }) => ({
      id,
      ...info
    }));
  }

  return Object.freeze({
    findAll,
    findByHash,
    insert
  });
}