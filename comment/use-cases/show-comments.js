/**
 * Creates function for showing stored comments from given data provider.
 * @param {Object} param
 * @param {Object} param.commentsDb data-access interface.
 * @returns {function} Function for retrieving comments from database.
 */
export default function makeShowComments ({ commentsDb }) {
  return async function showComments () {
    const comments = await commentsDb.findAll()
    return comments
  }
}
