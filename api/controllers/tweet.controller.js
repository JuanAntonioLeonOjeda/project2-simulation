const Tweet = require('../models/tweet.model')
const User = require('../models/user.model')

async function postTweet (req, res) {
  try {
    const author = await User.findByPk(res.locals.user.id)
    await author.createTweet(req.body)

    return res.status(200).json({ msg: 'Tweet posted!' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  postTweet
}