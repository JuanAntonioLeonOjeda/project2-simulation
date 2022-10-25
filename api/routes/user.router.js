const router = require('express').Router()

const {
  getAllUsers,
  getOneUser,
  searchUser,
  getProfile,
  updateUser,
  updateOwnProfile,
  deleteUser,
  addPet
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getProfile)
router.get('/:id', checkAuth, getOneUser)
router.post('/search', checkAuth, searchUser)
router.patch('/profile', checkAuth, updateOwnProfile)
router.patch('/:id', checkAuth, checkAdmin, updateUser)
router.put('/pets/:id', checkAuth, addPet)
router.delete('/:id', checkAuth, checkAdmin, deleteUser)

module.exports = router