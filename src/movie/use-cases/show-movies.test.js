import makeMoviesDb from '../data-access/data-access'
import makeFakeMovie from '../../test/movie'
import makeFakeDb from '../../test/db'

import makeShowMovies from './show-movies'

describe('get movies', () => {
  let moviesDb, getMovies
  beforeAll(() => {
    moviesDb = makeMoviesDb({ makeDb: makeFakeDb })
  })
  describe('successfull route', () => {
    beforeAll(() => {
      getMovies = makeShowMovies({ moviesDb })
    })
    test('should return all movies', async () => {
      const firstMovie = makeFakeMovie()
      const secondMovie = makeFakeMovie()
      const movies = [
        firstMovie,
        secondMovie
      ]
      await Promise.all(movies.map(moviesDb.insert))

      const results = await getMovies()
      expect(results.filter(r => r.id === firstMovie.id).length).toBe(1)
      expect(results.filter(r => r.id === secondMovie.id).length).toBe(1)
    })
  })
})
