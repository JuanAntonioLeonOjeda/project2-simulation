const User = require('../api/models/user.model')
const Tweet = require('../api/models/tweet.model')

function addRelations() {
  try {
    
    User.hasMany(Tweet)
    Tweet.belongsTo(User)
    
    console.log('Relations added')
  } catch (error) {
    throw error
  }
}

module.exports = addRelations