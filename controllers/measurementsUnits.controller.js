const MeasurementsUnits = require('../models/MeasurementsUnits.model')


const getMeasurementsUnitss = (req, res, next) => {

    MeasurementsUnits
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getMeasurementsUnitss
}