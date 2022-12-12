const router = require("express").Router()
const { signup, login, editProfile, addRecipeToFav, removeRecipeFromFav, verify } = require("../controllers/auth.controller")
const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.post('/signup', signup)


router.post('/login', login)


router.put('/:user_id/edit', editProfile)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


router.get('/verify', isAuthenticated, verify)


module.exports = router
