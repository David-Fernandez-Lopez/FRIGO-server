const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


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
    res.status(400).json({ errorMessages: "Provide email and password." })
    return
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ errorMessages: "User not found." })
        return
      }
      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, email, name, profileImg, lastName, role, favRecipes, shoppingList } = foundUser

        const payload = { _id, email, name, profileImg, lastName, role, favRecipes, shoppingList }

        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.status(200).json({ authToken })
      }
      else {
        res.status(401).json({ errorMessages: "Unable to authenticate the user" })
      }

    })
    .catch(err => next(err))

}


const editProfile = (req, res, next) => {

  const { user_id } = req.params

  const { email, name, lastName, profileImg } = req.body


  User
    .findByIdAndUpdate(user_id, { email, name, lastName, profileImg }, { new: true })
    .then((updatedUser) => {

      const { email, name, _id, lastName, profileImg } = updatedUser
      const user = { email, name, _id, lastName, profileImg }

      res.status(201).json({ user })
    })
    .catch(err => next(err))

}


const verify = (req, res) => {
  res.status(200).json(req.payload)
}


module.exports = {
  signup,
  login,
  editProfile,
  verify
}