import { MongoClient } from 'mongodb'
import makeCommentsDb from './data-access'

const url = process.env.COMMENTS_DB_URL
const dbName = process.env.COMMENTS_DB_NAME

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

const commentsDb = makeCommentsDb({ makeDb })
export default commentsDb
