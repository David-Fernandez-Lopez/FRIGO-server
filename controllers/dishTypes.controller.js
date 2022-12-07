const DishType = require('../models/DishType.model')


const getDishTypes = (req, res, next) => {

    DishType
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getDishTypes
}