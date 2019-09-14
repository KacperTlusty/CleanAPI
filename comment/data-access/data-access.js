import { Id } from '../helpers'

/**
 * Returns data access layer for comments.
 * @param {Object} param
 * @param {Function} param.makeDb Async function for creating database and accesing it.
 * @returns {Object} Functions for performing data-access operations on movies.
 */
export default function makeCommentsDb ({ makeDb }) {
  /**
   * Inserts given comment to database. Creates id if it's not specified.
   * @param {Object} comment Comment entity to be inserted.
   * @returns {Object} Inserted comment.
   */
  async function insert ({ id: _id = Id.makeId(), ...commentInfo }) {
    const db = await makeDb()
    const result = await db.collection('comments').insertOne({ _id, ...commentInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  /**
   * Looks for comment in database using it's calculated hash.
   * If comment is found, returns it, otherwise returns null.
   * @param {Object} movie Object containing hash property to look up in database for it.
   * @returns {Object} Found comment or null.
   */
  async function findByHash (movie) {
    const db = await makeDb()
    const result = await db.collection('comments').find({ hash: movie.hash })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }

    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }

  /**
   * Returns all comments from database.
   * @returns {Array} Array of comments.
   */
  async function findAll () {
    const db = await makeDb()
    const results = await db.collection('comments').find({})
    return (await results.toArray()).map(
      ({ _id: id, ...info }) => ({ id, ...info })
    )
  }

  return Object.freeze({
    findAll,
    findByHash,
    insert
  })
}
