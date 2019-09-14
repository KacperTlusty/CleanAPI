import crypto from 'crypto'
import { Id } from '../helpers'

import buildMakeComment from './comment'

function hash (text) {
  return crypto.createHash('md5').update(text, 'utf-8').digest('hex')
}

const makeComment = buildMakeComment({ Id, hash })

export default makeComment
