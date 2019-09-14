import { addComment, showComments } from '../use-cases'
import makePostMovies from './post-comments'
import makeGetComments from './get-comments'

// TODO: logger
const getComments = makeGetComments({ showComments })
const postComments = makePostMovies({
  addComment,
  logger: { error: () => {} }
})

const commentController = Object.freeze({
  getComments,
  postComments
})

export default commentController
export { getComments, postComments }
