const express = require('express')
const { getDishTypes } = require('../controllers/dishTypes.controller')
const router = express.Router()


router.get('/', getDishTypes)


module.exports = router