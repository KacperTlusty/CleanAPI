import mongodb from 'mongodb'
import makeMoviesDb from './data-access'

const MongoClient = mongodb.MongoClient
const url = process.env.MOVIES_DB_URL
const dbName = process.env.MOVIES_DB_NAME
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const moviesDb = makeMoviesDb({ makeDb })
export default moviesDb
