import makePostMovie from './post-movie'
import makeFakeMovie from '../../test/movie'

describe('post movie controller', () => {
  test('successfully posts a movie', async () => {
    const fakeFetch = jest.fn(async () => ({}))
    const fakeLogger = {
      error: jest.fn(() => {})
    }
    const movie = makeFakeMovie()
    const postMovie = makePostMovie({
      addMovie: m => m,
      getFullInfo: fakeFetch,
      logger: fakeLogger
    })
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: movie
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 201,
      body: request.body
    }
    const response = await postMovie(request)
    expect(response).toEqual(expected)
  })
  test('should log error if error in getFullInfo occurs', async () => {
    const fakeFetch = jest.fn(async () => { throw new Error('fake error') })
    const fakeLogger = {
      error: jest.fn(() => {})
    }
    const postMovie = makePostMovie({
      addMovie: m => m,
      getFullInfo: fakeFetch,
      logger: fakeLogger
    })
    const movie = makeFakeMovie()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: movie
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: { error: 'fake error' }
    }
    const response = await postMovie(request)
    expect(response).toEqual(expected)
  })
  test('should fetch info by title', async () => {
    const fakeFetch = jest.fn(async () => ({}))
    const fakeLogger = {
      error: jest.fn(() => {})
    }
    const postMovie = makePostMovie({
      addMovie: m => m,
      getFullInfo: fakeFetch,
      logger: fakeLogger
    })
    const movie = makeFakeMovie()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: movie
    }
    await postMovie(request)
    expect(fakeFetch).toHaveBeenCalledTimes(1)
    expect(fakeFetch).toHaveBeenCalledWith(movie.title)
  })
  test('should report error when addMovie throws', async () => {
    const fakeLogger = {
      error: jest.fn(() => {})
    }
    const fakeError = new Error('fake error')
    const postMovie = makePostMovie({
      addMovie: () => { throw fakeError },
      getFullInfo: () => ({}),
      logger: fakeLogger
    })
    const movie = makeFakeMovie()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: movie
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: {
        error: 'fake error'
      }
    }
    const response = await postMovie(request)
    expect(response).toEqual(expected)
    expect(fakeLogger.error).toHaveBeenCalledTimes(1)
    expect(fakeLogger.error).toHaveBeenCalledWith(fakeError)
  })
})
