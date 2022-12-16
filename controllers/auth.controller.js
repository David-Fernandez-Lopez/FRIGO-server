const User = require('../models/User.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')


const signup = (req, res, next) => {

  const { email, password, name } = req.body

  User
    .create({ email, password, name })
    .then((createdUser) => {
      const { email, name, _id } = createdUser
      const user = { email, name, _id }

      res.status(201).json({ user })
    })
    .catch(err => next(err))
}


const login = (req, res, next) => {

  const { email, password } = req.body

  if (email === '' || password === '') {
    res.status(400).json({ errorMessages: ["Provide email and password."] })
    return
  }

  User
    .findOne({ email })
    .then(foundUser => {
      if (!foundUser || foundUser.validatePassword(password)) {
        res.status(200).json({ authToken: foundUser.signToken() })
      }
      else {
        res.status(401).json({ messages: ["Email or password are incorrect"] })
      }
    })
    .catch(err => next(err))
}

const verify = (req, res) => {
  res.status(200).json(req.payload)
}

const updateToken = (req, res, next) => {

  const user_id = req.payload._id

  User
    .findById(user_id)
    .then(user => {
      const token = user.signToken()
      res.json(token)
    })
    .catch(err => next(err))
}

module.exports = {
  signup,
  login,
  verify,
  updateToken
}