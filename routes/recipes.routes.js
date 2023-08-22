const express = require('express')
const router = express.Router()
const { isAuthenticated } = require("../middleware/jwt.middleware")

const {
    getRecipeById,
    getRecipeByOwner,
    getRecipeByCategory,
    getRecipeByTitle,
    getRecipeByIngredients,
    createNewRecipe,
    editRecipe,
    deleteRecipe
} = require('../controllers/recipes.controller')

router.get('/:recipe_id/information', getRecipeById)

router.get('/findByOwner', isAuthenticated, getRecipeByOwner)

router.get('/complexSearch', getRecipeByCategory)

router.get('/findByTitle', getRecipeByTitle)

router.get('/findByIngredients', getRecipeByIngredients)

router.post('/create', isAuthenticated, createNewRecipe)

router.post('/:recipe_id/edit', editRecipe)

router.delete('/:recipe_id/deleteRecipe/', isAuthenticated, deleteRecipe)


module.exports = router