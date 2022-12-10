const Ingredient = require("../models/Ingredients.model")


const getIngredients = (req, res, next) => {
    
    Ingredient
        .find()
        .sort({name:1})
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getIngredients
}