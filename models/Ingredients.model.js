const { Schema, model } = require("mongoose")

const ingredientsSchema = new Schema(
  {
    name: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const Ingredient = model("Ingredient", ingredientsSchema)

module.exports = Ingredient

