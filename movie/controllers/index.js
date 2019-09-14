import { addMovie, showMovies } from '../use-cases'
import makeGetMovies from './get-movies'
import makePostMovies from './post-movie'
import { getFullInfo } from '../helpers'

// TODO: add full info
// TODO: logger
const getMovies = makeGetMovies({ showMovies })
const postMovie = makePostMovies({
  addMovie,
  getFullInfo,
  logger: { error: () => {} }
})

const movieController = Object.freeze({
  getMovies,
  postMovie
})

export default movieController
export { getMovies, postMovie }
