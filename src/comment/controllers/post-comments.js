import { createResponse } from '../helpers'

/**
 * Creates factory function for handling POST request to create new comments.
 * @param {Object} param Dependencies
 * @param {function} param.addComment Function for creating comment entity.
 * @param {Object} param.logger Logger object for logging errors.
 */
export default function makePostComment ({ addComment, logger }) {
  return async function postComment (req) {
    try {
      const posted = await addComment(req.body)

      return createResponse(201, { ...posted })
    } catch (e) {
      logger.error(e)

      return createResponse(400, { error: e.message })
    }
  }
}
