const MeasurementsUnits = require('../models/MeasurementsUnits.model')


const getMeasurementsUnits = (req,res, next) => {

    MeasurementsUnits
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getMeasurementsUnits
}