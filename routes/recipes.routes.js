const express = require('express')
const { getRecipeById, getRecipeByCategory, getRecipeByIngredients, createNewRecipe, editRecipe } = require('../controllers/recipes.controller')
const router = express.Router()


router.get('/:recipe_id/information', getRecipeById)

router.get('/complexSearch', getRecipeByCategory)

router.get('/findByIngredients', getRecipeByIngredients)

router.post('/create', createNewRecipe)

router.post('/:recipe_id/edit', editRecipe)

module.exports = router