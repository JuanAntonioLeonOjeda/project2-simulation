const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`${process.env.DIALECT}://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}`, {
  logging: false
})

async function checkConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection established succesfully')
  } catch (error) {
    throw error
  }
}

async function syncModels() {
  try {
    await sequelize.sync()
    console.log('Models synchronized')
  } catch (error) {
    throw error
  }
}

module.exports = {
  sequelize,
  checkConnection,
  syncModels
}
