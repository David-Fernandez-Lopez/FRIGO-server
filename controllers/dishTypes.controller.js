const DishType = require('../models/DishType.model')


const getDishTypes = (req, res, next) => {

    DishType
        .find()
        .sort({dishType:1})
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getDishTypes
}