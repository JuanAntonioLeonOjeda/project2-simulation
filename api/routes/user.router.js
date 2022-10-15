const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  searchUser
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.post('/search', checkAuth, searchUser)

module.exports = router