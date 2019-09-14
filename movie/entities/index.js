import crypto from 'crypto'
import { Id } from '../helpers'

import buildMakeMovie from './movie'

function hash (text) {
  return crypto.createHash('md5').update(text, 'utf-8').digest('hex')
}

const makeMovie = buildMakeMovie({ Id, hash })

export default makeMovie
