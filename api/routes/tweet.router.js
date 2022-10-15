const router = require('express').Router()

const {
  postTweet
} = require('../controllers/tweet.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.post('/', checkAuth, postTweet)

module.exports = router