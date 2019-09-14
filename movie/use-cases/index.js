import makeAddMovie from './add-movie'
import makeShowMovies from './show-movies'
import moviesDb from '../data-access'

const addMovie = makeAddMovie({ moviesDb })
const showMovies = makeShowMovies({ moviesDb })

const movieService = Object.freeze({
  addMovie,
  showMovies
})

export default movieService
export { addMovie, showMovies }
