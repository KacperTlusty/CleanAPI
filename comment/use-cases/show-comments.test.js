import makeCommentsDb from '../data-access/data-access'
import makeFakeComment from '../../test/comment'
import makeFakeDb from '../../test/db'

import makeShowComments from './show-comments'

describe('get comments', () => {
  let commentsDb
  beforeAll(() => {
    commentsDb = makeCommentsDb({ makeDb: makeFakeDb })
  })
  describe('successful route', () => {
    test('should return all movies', async () => {
      const getComments = makeShowComments({ commentsDb })
      const firstComment = makeFakeComment()
      const secondComment = makeFakeComment()

      const comments = [
        firstComment,
        secondComment
      ]
      await Promise.all(comments.map(commentsDb.insert))

      const results = await getComments()
      expect(results.filter(r => r.id === firstComment.id).length).toBe(1)
      expect(results.filter(r => r.id === secondComment.id).length).toBe(1)
    })
  })
})
