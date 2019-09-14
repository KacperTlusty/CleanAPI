import { createResponse } from '../helpers'

/**
 * Returns function for handling get requests on movie entity.
 * @param {Object} param0 Dependencies.
 * @param {function} param0.showMovies Use-case for obtaining movies.
 * @param {logger} param0.logger Default logger for logging errors.
 */
export default function makeGetMovies ({ showMovies, logger }) {
  return async function getMovies () {
    try {
      const movies = await showMovies()
      return createResponse(200, movies)
    } catch (e) {
      logger.error(e)
      return createResponse(400, { error: e.message })
    }
  }
}
