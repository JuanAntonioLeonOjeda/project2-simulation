const router = require('express').Router()

const {
  getAllUsers,
  getOneUser
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)

module.exports = router