const router = require("express").Router()
const { signup, login, verify, updateToken } = require("../controllers/auth.controller")
const { isAuthenticated } = require('./../middleware/jwt.middleware')


router.post('/signup', signup)


router.post('/login', login)


router.get('/verify', isAuthenticated, verify)


router.get('/updateToken', isAuthenticated, updateToken)


module.exports = router
