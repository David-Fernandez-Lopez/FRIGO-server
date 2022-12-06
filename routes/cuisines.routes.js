const express = require('express')
const router = express.Router()

const Cuisine = require('../models/Cuisine.model')



router.get('/', (req, res, next) => {
    
    Cuisine
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router