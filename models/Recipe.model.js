const { Schema, model } = require("mongoose")

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Recipe name is required']
    },
    readyInMinutes: {
      type: Number,
      required: [true, 'Cooking time is required.']
    },
    servings: {
      type: Number,
      required: [true, 'Servings amount is required']
    },
    image: {
      type: String,
      default: '/images/recipe-default.png',
      set: value => value === '' ? '/images/recipe-default.png' : value
    },
    analyzedInstructions: {
      type: [{
        number: Number,
        step: String
      }],
      required: [true, 'Recipe should have instructions']
    },
    cuisines: [{
      type: String,
      required: [true, 'Cusine is required']
    }],
    dishTypes: [{
      type: String,
      required: [true, 'Dish Type is required']
    }],
    summary: {
      type: String,
      required: [true, 'Summary is required']
    },
    extendedIngredients: {
      type: [{
        name: String,
        amount: Number,
        unit: String
      }],
      required: [true, 'Recipe should have ingredients, amount and measure unit.']
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Recipe = model("Recipe", recipeSchema)

module.exports = Recipe
