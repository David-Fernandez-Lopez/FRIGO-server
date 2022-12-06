const express = require('express')
const router = express.Router()

const DishType = require('../models/DishType.model')


router.get('/', (req, res, next) => {

    DishType
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router