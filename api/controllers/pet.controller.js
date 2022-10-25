const Pet = require('../models/pet.model')
const User = require('../models/user.model')
const Date = require('../models/date.model')

async function postPet (req, res) {
  try {
    const author = await User.findByPk(res.locals.user.id)
    await author.createPet(req.body)

    return res.status(200).json({ msg: 'pet posted!' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function addLike (req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id)
    pet.likes++
    await pet.save()
    return res.status(200).json({ msg: 'Like Added', pet: pet })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function addFavourite (req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const pet = await Pet.findByPk(req.params.id)

    await Favourite.create({ userId: user.id, petId: pet.id })

    return res.status(200).json({ msg: 'pet Added', pet: pet })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createDate (req, res) {     //IN PROGRESS
  try {
    const pet = await Pet.findByPk(req.params.petId)
    const pet2 = await Pet.findByPk(req.params.petId2)

    const date = await Date.create(req.body)

    await date.addPet(pet)
    await date.addPet(pet2)

    res.status(200).json({ date: date })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getPetsDates (req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id, {
      include: [Date]
    })
    
    res.status(200).json(pet)

  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getDateInfo (req, res) {
  try {
    const date = await Date.findByPk(req.params.id, {
      include: [Pet]
    })
    
    res.status(200).json(date)

  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  postPet,
  addLike,
  addFavourite,
  createDate,
  getPetsDates,
  getDateInfo
}