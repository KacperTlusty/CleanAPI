import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { getMovies, postMovie } from './movie/controllers'
import makeMovieCallback from './movie/callback'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/movies', makeMovieCallback(getMovies))
app.post('/movies', makeMovieCallback(postMovie))

if (process.env.NODE_ENV === 'dev') {
  app.listen(3000, () => {
    console.log('listening on port 3000')
  })
}

export default app
