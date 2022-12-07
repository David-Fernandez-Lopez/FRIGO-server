const Recipe = require('../models/DishType.model')


const getRecipeById =  (req, res, next) => {

    const {recipe_id} = req.params
        
    Recipe
        .findById(recipe_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getRecipeByCategory = (req, res, next) => {

    const {category} = req.query
    
    Recipe
        .find({category})
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getRecipeByIngredients = (req, res, next) => {

    const {ingredients} = req.query
    
    Recipe
        .find({"ingredients.name":ingredients})
        .then(response => res.json(response))
        .catch(err => next(err))
}

const createNewRecipe = (req, res, next) => {
    
    const { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients, owner } = req.body
    
    Recipe
        .create({ title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editRecipe =  (req, res, next) => {

    const {recipe_id} = req.params
    
    const { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients } = req.body
    
    Recipe
        .findByIdAndUpdate(recipe_id, { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getRecipeById,
    getRecipeByCategory,
    getRecipeByIngredients,
    createNewRecipe,
    editRecipe
}
