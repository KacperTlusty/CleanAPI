import { makeDb as makeMovieDb } from '../src/movie/data-access'
import { makeDb as makeCommentDb } from '../src/comment/data-access'
import dotenv from 'dotenv'

dotenv.config()

;(async function setupMovieDb () {
  const db = await makeMovieDb()
  const result = await db
    .collection('movies')
    .createIndexes([{ key: { hash: 1 }, name: 'hash_movie_idx' }])
  console.log(result)
  ;(async function setupCommentDb () {
    const db = await makeCommentDb()
    const result = await db
      .collection('comments')
      .createIndexes([{ key: { hash: 1 }, name: 'hash_comment_idx' }])
    console.log(result)
    process.exit()
  })()
})()
