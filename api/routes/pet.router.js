const router = require('express').Router()

const {
  postPet,
  addLike,
  addFavourite,
  createDate,
  getPetsDates,
  getDateInfo
} = require('../controllers/pet.controller')

const {
  checkAuth,
  checkAdmin
} = require('../utils')

router.post('/', checkAuth, postPet)
router.patch('/:id/like', checkAuth, addLike)
router.post('/date/:petId/:petId2', checkAuth, createDate)
router.get('/date/:id', getPetsDates)
router.get('/date/info/:id', getDateInfo)

module.exports = router