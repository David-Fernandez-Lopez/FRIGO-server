const express = require('express')
const { getMeasurementsUnits } = require('../controllers/measurementsUnits.controller')
const router = express.Router()


router.get('/', getMeasurementsUnits)


module.exports = router