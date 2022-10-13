process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const {
  checkConnection,
  syncModels
} = require('./database')

const addRelations = require('./database/relations')

async function connectToDB () {
  await checkConnection()
  addRelations()
  await syncModels()
}

(async function startAPI() {
  await connectToDB()
})()