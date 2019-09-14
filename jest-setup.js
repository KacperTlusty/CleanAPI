const path = require('path')
const fs = require('fs')
const { MongoMemoryServer } = require('mongodb-memory-server')

const globalConfigPath = path.join(__dirname, 'globalConfigMongo.json')

const mongod = global.__MONGOD__ || new MongoMemoryServer({
  autoStart: false
})

module.exports = async () => {
  if (!mongod.runningInstance) {
    await mongod.start()
  }

  const mongoConfig = {
    mongoDBName: 'jest',
    mongoUri: await mongod.getConnectionString()
  }

  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig))

  global.__MONGOD__ = mongod
}
