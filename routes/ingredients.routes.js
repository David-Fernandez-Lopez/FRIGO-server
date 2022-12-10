const express = require('express')
const { getIngredients } = require('../controllers/ingredients.controller')
const router = express.Router()


router.get('/', getIngredients)

module.exports = router