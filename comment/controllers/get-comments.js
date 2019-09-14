import { createResponse } from '../helpers'

/**
 * Returns function for handling get requests on comment entity.
 * @param {Object} param0 Dependencies.
 * @param {function} param.showComments Use-case for obtaining comments.
 * @param {logger} param.logger Default logger for logging erros.
 * @returns {function}
 */
export default function makeGetComments ({ showComments, logger }) {
  return async function getMovies () {
    try {
      const comments = await showComments()
      return createResponse(200, comments)
    } catch (e) {
      logger.error(e)
      return createResponse(400, { error: e.message })
    }
  }
}
