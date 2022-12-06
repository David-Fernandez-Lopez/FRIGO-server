const { Schema, model } = require("mongoose")

const cuisineSchema = new Schema(
  {
    cuisine: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const Cuisine = model("Cuisine", cuisineSchema)

module.exports = Cuisine

