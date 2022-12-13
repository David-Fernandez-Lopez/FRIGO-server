const router = require("express").Router()
const { editProfile,
    getUserById,
    addRecipeToFav,
    removeRecipeFromFav,
    getFavRecipes,
    removeItemFromShoppingList,
    getShoppingList,
    addItemsToShoppingList
} = require("../controllers/user.controller")
const { isAuthenticated } = require('../middleware/jwt.middleware')


router.put('/edit', isAuthenticated, editProfile)


router.get('/getUserById', isAuthenticated, getUserById)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


router.get('/getFavRecipes', isAuthenticated, getFavRecipes)



router.put('/addItemsToShoppingList', isAuthenticated, addItemsToShoppingList)  //ruta para añadir todos los elementos de golpe




router.put('/addItemsToShoppingList', isAuthenticated, addItemsToShoppingList)



router.put('/removeItemFromShoppingList', isAuthenticated, removeItemFromShoppingList)


router.get('/getShoppingList', isAuthenticated, getShoppingList)



module.exports = router
