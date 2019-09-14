import { createResponse } from '../helpers'

/**
 * Creates factory function for creating POST requests on movie entities.
 * @param {Object} param Dependencies
 * @param {function} param.addMovie Function for creating movie entities.
 * @param {function} param.getFullInfo Async function for obtaining information about movie basing on it's title.
 * @param {Object} param.logger Logger object for logging errors.
 * @returns {function}
 */
export default function makePostMovie ({ addMovie, getFullInfo, logger }) {
  return async function postMovie (req) {
    try {
      const { title, ...movieInfo } = req.body
      const { ...additionalMovieInfo } = await getFullInfo(title)
      const posted = await addMovie({
        ...additionalMovieInfo,
        ...movieInfo,
        title
      })

      return createResponse(201, { ...posted })
    } catch (e) {
      // TODO: write looger.
      logger.error(e)

      return createResponse(400, { error: e.message })
    }
  }
}
