const { Schema, model } = require("mongoose")

const recipeSchema = new Schema(
  {
    title: {
      type:String,
      required: [true, 'Recipe name is required']
    },
    readyInMinutes: {
      type:Number,
      required: [true, 'Cooking time is required.']
    },
    servings: {
      type:Number,
      required: [true, 'Servings amount is required']
    },
    image:{
      type: String,
      default: '/images/recipe-default.png',
      set: value => value === '' ? '/images/recipe-default.png' : value
    },
    instructions:{
      type: [{
      number: Number,
      step:String
      }],
      required: [true, 'Recipe should have instructions']
    },
    cuisines: {
      type: String,
      required: [true, 'Cusine is required']
    },
    dishTypes:{
      type: String,
      required: [true, 'Dish Type is required']
    },
    summary: {
      type: String,
      required: [true, 'Summary is required']
    },
    ingredients: {
      type: [{
      name: String,
      quantity: Number,
      units: String
      }],
      required: [true, 'Recipe should have ingredients, quantity and measure unit.']
  },
    // rating: {
    //   type: Number,
    //   max: 5,
    //   min:0
    // }
    owner:{
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
