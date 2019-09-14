import makeGetComments from './get-comments'
import makeFakeComment from '../../test/comment'

describe('get comments controller', () => {
  const fakeCommentOne = makeFakeComment()
  const fakeCommentTwo = makeFakeComment()
  test('successfully returns list of movies', async () => {
    const getComments = makeGetComments({
      showComments: async () => [fakeCommentOne, fakeCommentTwo]
    })
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: [fakeCommentOne, fakeCommentTwo]
    }
    const response = await getComments()
    expect(response).toEqual(expected)
  })
  describe('error handling', () => {
    const error = new Error('fake error')
    test('returns error when error occurs and logs it', async () => {
      const logger = {
        error: jest.fn(() => {})
      }
      const getComments = makeGetComments({
        showComments: () => { throw error },
        logger
      })
      const expected = {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: { error: 'fake error' }
      }
      const response = await getComments()
      expect(response).toEqual(expected)
      expect(logger.error).toHaveBeenCalledTimes(1)
      expect(logger.error).toHaveBeenCalledWith(error)
    })
  })
})
