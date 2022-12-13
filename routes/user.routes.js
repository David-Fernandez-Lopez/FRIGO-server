const router = require("express").Router()
const { getUserById,
    addRecipeToFav,
    removeRecipeFromFav,
    // addItemToShoppingList,
    removeItemFromShoppingList,
    getShoppingList,
    addItemsToShoppingList
} = require("../controllers/user.controller")
const { isAuthenticated } = require('../middleware/jwt.middleware')


// router.put('/:user_id/edit', editProfile)


router.get('/getUserById', isAuthenticated, getUserById)


router.put('/addRecipeToFav', isAuthenticated, addRecipeToFav)


router.put('/removeRecipeFromFav', isAuthenticated, removeRecipeFromFav)


// router.put('/addItemToShoppingList', isAuthenticated, addItemToShoppingList)


router.put('/addItemsToShoppingList', isAuthenticated, addItemsToShoppingList)  //ruta para añadir todos los elementos de golpe


router.put('/removeItemFromShoppingList', isAuthenticated, removeItemFromShoppingList)


router.get('/getShoppingList', isAuthenticated, getShoppingList)



module.exports = router
