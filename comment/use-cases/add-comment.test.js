import makeAddComment from './add-comment'
import fakeDb from '../../test/db'
import makeFakeComment from '../../test/comment'
import makeCommentsDb from '../data-access/data-access'

describe('add comment', () => {
  let commentsDb
  beforeAll(() => {
    commentsDb = makeCommentsDb({ makeDb: fakeDb })
  })
  describe('successful insert', () => {
    test('inserts comments in the database', async () => {
      const newComment = makeFakeComment()
      const addComment = makeAddComment({ commentsDb })
      const inserted = await addComment(newComment)
      expect(inserted).toMatchObject(newComment)
    })
    test('should return existing object when one exists', async () => {
      const newComment = makeFakeComment()
      const addComment = makeAddComment({ commentsDb })
      const firstInsertedComment = await addComment(newComment)
      const secondInsertedComment = await addComment(newComment)
      expect(firstInsertedComment.id).toBeTruthy()
      expect(firstInsertedComment.id).toBe(secondInsertedComment.id)
    })
  })
})
