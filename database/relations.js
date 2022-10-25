const User = require('../api/models/user.model')
const Pet = require('../api/models/pet.model')
const Date = require('../api/models/date.model')

function addRelations() {
  try {
    
    User.hasMany(Pet)
    Pet.belongsTo(User)

    Pet.belongsToMany(Pet, { as: 'Friend', through: 'Friends' })

    Pet.belongsToMany(Date, { through: 'Pet_Date' })
    Date.belongsToMany(Pet, { through: 'Pet_Date' })

    console.log('Relations added')
  } catch (error) {
    throw error
  }
}

module.exports = addRelations