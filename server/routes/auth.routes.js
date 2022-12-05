const router = require("express").Router()

const User = require('../models/User.model')

const bcrypt = require('bcryptjs')
const saltRounds = 10
const { isAuthenticated } = require('./../middleware/jwt.middleware')

const jwt = require('jsonwebtoken')


router.post('/signup', (req, res, next) => {

  const { email, password, name } = req.body

  if (password.length < 2) {
    res.status(400).json({ message: 'Password must have at least 3 characters' })
    return
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (foundUser) {
        res.status(400).json({ message: "User already exists." })
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
      res.status(500).json({ message: "Internal Server Error" })
    })
})

router.post('/login', (req, res, next) => {

  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(400).json({ message: "Provide email and password." })
    return;
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ message: "User not found." })
        return;
      }
      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, email, name } = foundUser;

        const payload = { _id, email, name }

        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.status(200).json({ authToken })
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" })
      }

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Internal Server Error" })
    });
});

router.get('/verify', isAuthenticated, (req, res) => {
  res.status(200).json(req.payload)
})


module.exports = router
