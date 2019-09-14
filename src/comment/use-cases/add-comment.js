import makeComment from '../entities'

/**
 * Creates function for adding new comment.
 * @param {Object} param
 * @param {Object} param.commentsDb data-access interface.
 * @returns {function}
 */
export default function makeAddComment ({ commentsDb }) {
  return async function addComment (commentInfo) {
    const comment = makeComment(commentInfo)

    const exists = await commentsDb.findByHash({ hash: comment.getHash() })
    if (exists) {
      return exists
    }

    return commentsDb.insert({
      author: comment.getAuthor(),
      text: comment.getText(),
      date: comment.getDate(),
      id: comment.getId(),
      hash: comment.getHash()
    })
  }
}
