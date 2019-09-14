"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMakeComment;

function buildMakeComment({
  Id,
  hash
}) {
  return function makeComment({
    author,
    text,
    date = Date.now(),
    id = Id.makeId()
  }) {
    if (!author) {
      throw new Error('Comment must have an author.');
    }

    if (!text) {
      throw new Error('Comment must contain text.');
    }

    let _hash;

    return Object.freeze({
      getAuthor: () => author,
      getDate: () => date,
      getHash: () => _hash || (_hash = makeHash()),
      getId: () => id,
      getText: () => text
    });
    /**
     * Creates and returns unique hash for comment
     * using author, text and date.
     */

    function makeHash() {
      return hash(author + text + date);
    }
  };
}