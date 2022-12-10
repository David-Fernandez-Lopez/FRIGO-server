const Cuisine = require("../models/Cuisine.model")


const getCuisines = (req, res, next) => {
    
    Cuisine
        .find()
        .sort({cuisine:1})
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getCuisines
}