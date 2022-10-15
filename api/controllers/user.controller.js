const User = require('../models/user.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    })

    if (!users) return res.status(404).send('No users found')

    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) return res.status(404).send('User not found')

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function searchUser (req, res) {
  try {
    const user = await User.findOne({
      where: {
        userName: req.body
      },
      attributes: {
        exclude: ['password', 'role']
      }
    })

    if (!user) return res.status(404).send('User not found')

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  searchUser
}