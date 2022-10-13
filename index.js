process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const {
  checkConnection,
  syncModels
} = require('./database')

const addRelations = require('./database/relations')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

async function connectToDB () {
  await checkConnection()
  addRelations()
  await syncModels()
}

function startExpress() {
  const app = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require('./api/routes'))

    .listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`)
    })
}

(async function startAPI() {
  await connectToDB()
  startExpress()
})()