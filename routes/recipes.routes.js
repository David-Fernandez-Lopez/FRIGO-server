const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe.model')


router.get('/:recipe_id/information', (req, res, next) => {

    const {recipe_id} = req.params
        
    Recipe
        .findById(recipe_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/complexSearch', (req, res, next) => {

    const {cuisines} = req.query
    
    Recipe
        .find({cuisines})
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/findByIngredients', (req, res, next) => {

    const {ingredients} = req.query
    
    Recipe
        .find({"ingredients.name":ingredients})
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/create', (req, res, next) => {
    
    const { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients, owner } = req.body
    
    Recipe
        .create({ title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/:recipe_id/edit', (req, res, next) => {

    const {recipe_id} = req.params
    
    const { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients } = req.body
    
    Recipe
        .findByIdAndUpdate(recipe_id, { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router