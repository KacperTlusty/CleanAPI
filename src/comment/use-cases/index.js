import makeAddComment from './add-comment'
import makeShowComment from './show-comments'
import commentsDb from '../data-access'

const addComment = makeAddComment({ commentsDb })
const showComments = makeShowComment({ commentsDb })

const commentService = Object.freeze({
  addComment,
  showComments
})

export default commentService
export { addComment, showComments }
