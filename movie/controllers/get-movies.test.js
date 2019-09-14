import makeGetMovies from './get-movies'
import makeFakeMovie from '../../test/movie'

describe('get movies controller', () => {
  const fakeMovieOne = makeFakeMovie()
  const fakeMovieTwo = makeFakeMovie()
  const request = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  test('successfully returns list of movies', async () => {
    const getMovies = makeGetMovies({
      showMovies: () => [fakeMovieOne, fakeMovieTwo]
    })
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: [fakeMovieOne, fakeMovieTwo]
    }
    const response = await getMovies(request)
    expect(response).toEqual(expected)
  })
  describe('error handling', () => {
    const error = new Error('fake error')
    test('returns error when error occurs and logs it', async () => {
      const logger = {
        error: jest.fn(() => {})
      }
      const getMovies = makeGetMovies({
        showMovies: () => { throw error },
        logger
      })
      const expected = {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: { error: 'fake error' }
      }
      const response = await getMovies(request)
      expect(response).toEqual(expected)
      expect(logger.error).toHaveBeenCalledTimes(1)
      expect(logger.error).toHaveBeenCalledWith(error)
    })
  })
})
