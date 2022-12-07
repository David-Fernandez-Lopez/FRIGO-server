const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const saltRounds = 10
const jwt = require('jsonwebtoken')


const signup =  (req, res, next) => {

  const { email, password, name } = req.body

  if (password.length < 2) {
    res.status(400).json({ errorMessages: 'Password must have at least 3 characters' })
    return
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (foundUser) {
        res.status(400).json({ errorMessages: "Email already exists." })
        return
      }

      const salt = bcrypt.genSaltSync(saltRounds)
      const hashedPassword = bcrypt.hashSync(password, salt)

      return User.create({ email, password: hashedPassword, name })
    })
    .then((createdUser) => {
      const { email, name, _id } = createdUser
      const user = { email, name, _id }

      res.status(201).json({ user })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessages: "Internal Server Error" })
    })
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

        const { _id, email, name } = foundUser

        const payload = { _id, email, name }

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
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessages: "Internal Server Error" })
    })
}


const editProfile =  (req, res, next) => {

  const { user_id } = req.params
  
  const { email, name, lastName, profileImg } = req.body

  
  User
    .findOne({ email })
    .then((foundUser) => {

      if (foundUser) {
        res.status(400).json({ errorMessages: "Email already exists." })
        return
      }
        return User.findByIdAndUpdate(user_id, { email, name, lastName, profileImg }, { new: true })
    })
    .then((updatedUser) => {
      
      const { email, name, _id, lastName, profileImg } = updatedUser
      const user = { email, name, _id, lastName, profileImg}
      
      res.status(201).json({ user })
    })
    .catch(err => {
      console.log(err)
            console.log('aquí')

      res.status(500).json({ errorMessages: "Internal Server Error" })
    })
}


const verify =  (req, res) => {
  res.status(200).json(req.payload)
}


module.exports = {
    signup,
    login,
    editProfile,
    verify
}