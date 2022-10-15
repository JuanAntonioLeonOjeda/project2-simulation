const User = require('../api/models/user.model')
const Tweet = require('../api/models/tweet.model')

function addRelations() {
  try {
    
    User.hasMany(Tweet)
    Tweet.belongsTo(User)

    User.belongsToMany(User, { as: 'Friend', through: 'Friends' })

    User.belongsToMany(Tweet, { through: 'Favourites' })
    Tweet.belongsToMany(User, { through: 'Favourites' })

    User.belongsToMany(Tweet, { through: 'Retweets' })
    Tweet.belongsToMany(User, { through: 'Retweets' })

    console.log('Relations added')
  } catch (error) {
    throw error
  }
}

module.exports = addRelations