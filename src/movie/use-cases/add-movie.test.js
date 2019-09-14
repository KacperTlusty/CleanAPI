import makeAddMovie from './add-movie'
import fakeDb from '../../test/db'
import makeFakeMovie from '../../test/movie'
import makeMoviesDb from '../data-access/data-access'

describe('add movie', () => {
  let moviesDb
  beforeAll(() => {
    moviesDb = makeMoviesDb({ makeDb: fakeDb })
  })
  describe('successful insert', () => {
    test('inserts comments in the database', async () => {
      const newMovie = makeFakeMovie()
      const addMovie = makeAddMovie({ moviesDb })
      const inserted = await addMovie(newMovie)
      expect(inserted).toMatchObject(newMovie)
    })
    test('should return existing object when one exists', async () => {
      const newMovie = makeFakeMovie()
      const addMovie = makeAddMovie({ moviesDb })
      const firstInsertedMovie = await addMovie(newMovie)
      const secondInsertedMovie = await addMovie(newMovie)
      expect(firstInsertedMovie.id).toBeTruthy()
      expect(firstInsertedMovie.id).toBe(secondInsertedMovie.id)
    })
  })
})
