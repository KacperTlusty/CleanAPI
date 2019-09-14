/**
 * Creates function for showing stored movies use-case.
 * @param {Object} param0
 * @param {Object} param0.moviesDb data-access interface.
 * @returns {function}
 */
export default function makeShowMovies ({ moviesDb }) {
  return async function showMovies () {
    const movies = await moviesDb.findAll()
    return movies
  }
}
