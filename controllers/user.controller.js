const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


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

const getCurrentUserById = (req, res, next) => {

  const user_id = req.payload._id

  User
    .findById(user_id)
    .then(response => res.json(response))
    .catch(err => next(err))
}

const addRecipeToFav = (req, res, next) => {

  const user_id = req.payload._id
  const { favRecipes } = req.body

  User
    .findByIdAndUpdate(user_id, { $addToSet: { favRecipes } }, { new: true })
    .then((updatedUser) => {
      const { email, name, _id, lastName, profileImg, favRecipes } = updatedUser
      const user = { email, name, _id, lastName, profileImg, favRecipes }

      res.status(201).json({ user })
    })
    .catch(err => next(err))

}

const removeRecipeFromFav = (req, res, next) => {

  const user_id = req.payload._id

  const { favRecipes } = req.body

  User
    .findByIdAndUpdate(user_id, { $pull: { favRecipes } }, { new: true })
    .then((updatedUser) => {
      console.log({ updatedUser })
      const { email, name, _id, lastName, profileImg, favRecipes } = updatedUser
      const user = { email, name, _id, lastName, profileImg, favRecipes }

      res.status(201).json({ user })
    })
    .catch(err => next(err))

}

module.exports = {
  editProfile,
  getCurrentUserById,
  addRecipeToFav,
  removeRecipeFromFav
}