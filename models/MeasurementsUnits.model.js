const { Schema, model } = require("mongoose")

const measurementsUnitsSchema = new Schema(
  {
    unit: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const MeasurementsUnits = model("MeasurementsUnits", measurementsUnitsSchema)

module.exports = MeasurementsUnits

