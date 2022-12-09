const express = require('express')
const { measurementsUnits } = require('../controllers/measurementsUnits.controller')
const router = express.Router()


router.get('/', measurementsUnits)


module.exports = router