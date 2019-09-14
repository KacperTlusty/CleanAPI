import { addMovie, showMovies } from '../use-cases'
import makeGetMovies from './get-movies'
import makePostMovies from './post-movie'
import { getFullInfo } from '../helpers'

import logger from '../../logger'

const getMovies = makeGetMovies({
  showMovies,
  logger
})
const postMovie = makePostMovies({
  addMovie,
  getFullInfo,
  logger
})

const movieController = Object.freeze({
  getMovies,
  postMovie
})

export default movieController
export { getMovies, postMovie }
