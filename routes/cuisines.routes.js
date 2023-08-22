const express = require('express')
const { getCuisines } = require('../controllers/cuisines.controller')
const router = express.Router()


router.get('/', getCuisines)


module.exports = router