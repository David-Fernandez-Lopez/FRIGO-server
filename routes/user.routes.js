const router = require("express").Router()
const { getUserById,
    addRecipeToFav,
    removeRecipeFromFav,
    addItemToShoppingList,
    removeItemFromShoppingList,
    getShoppingList
} = require("../controllers/user.controller")
const { isAuthenticated } = require('../middleware/jwt.middleware')


// router.put('/:user_id/edit', editProfile)


router.get('/getUserById', isAuthenticated, getUserById)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


router.put('/addItemToShoppingList', isAuthenticated, addItemToShoppingList)


router.put('/removeItemFromShoppingList', isAuthenticated, removeItemFromShoppingList)


router.get('/getShoppingList', isAuthenticated, getShoppingList)



module.exports = router
