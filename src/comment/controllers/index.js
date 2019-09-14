import { addComment, showComments } from '../use-cases'
import makePostMovies from './post-comments'
import makeGetComments from './get-comments'

import logger from '../../logger'

const getComments = makeGetComments({
  showComments,
  logger
})

const postComments = makePostMovies({
  addComment,
  logger
})

const commentController = Object.freeze({
  getComments,
  postComments
})

export default commentController
export { getComments, postComments }
