const User = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup (req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    const user = await User.create(req.body,
      {
        fields: [ 'userName', 'email', 'password' ]
      }
    )

    const payload = { email: user.email, userName: user.userName }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    return res.status(200).json({ msg: 'User created', token: token })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}