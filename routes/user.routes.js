const router = require("express").Router()
const { getCurrentUserById, addRecipeToFav, removeRecipeFromFav } = require("../controllers/user.controller")
const { isAuthenticated } = require('../middleware/jwt.middleware')


// router.put('/:user_id/edit', editProfile)

router.get('/getCurrentUserById', isAuthenticated, getCurrentUserById)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


module.exports = router
