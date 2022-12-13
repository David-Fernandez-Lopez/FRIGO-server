const router = require("express").Router()
const { getUserById,
    addRecipeToFav,
    removeRecipeFromFav,
    getFavRecipes,
    addItemToShoppingList,
    removeItemFromShoppingList,
    getShoppingList
} = require("../controllers/user.controller")
const { isAuthenticated } = require('../middleware/jwt.middleware')


// router.put('/:user_id/edit', editProfile)


router.get('/getUserById', isAuthenticated, getUserById)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


router.get('/getFavRecipes', isAuthenticated, getFavRecipes)


router.put('/addItemToShoppingList', isAuthenticated, addItemToShoppingList)


router.put('/removeItemFromShoppingList', isAuthenticated, removeItemFromShoppingList)


router.get('/getShoppingList', isAuthenticated, getShoppingList)



module.exports = router
