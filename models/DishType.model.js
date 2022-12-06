const { Schema, model } = require("mongoose")

const dishTypeSchema = new Schema(
  {
    dishType: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const DishType = model("DishType", dishTypeSchema)

module.exports = DishType

