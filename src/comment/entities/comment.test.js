import makeComment from './'
import makeFakeComment from '../../test/comment'

describe('comment entity', () => {
  describe('validate properties', () => {
    test('should check for author', () => {
      const comment = makeFakeComment({ author: null })
      expect(() => makeComment(comment)).toThrow('Comment must have an author.')
    })
    test('should check for text', () => {
      const comment = makeFakeComment({ text: null })
      expect(() => makeComment(comment)).toThrow('Comment must contain text.')
    })
    test('should have hash', () => {
      const comment = makeFakeComment({})
      expect(makeComment(comment).getHash()).toBeTruthy()
    })
  })
})
