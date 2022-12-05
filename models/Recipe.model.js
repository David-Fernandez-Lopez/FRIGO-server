const { Schema, model } = require("mongoose")

const recipeSchema = new Schema(
  {
    title: {
      type:String
    },
    readyInMinutes: {
      type:Number
    },
    servings: {
      type:Number
    },
    image:{
      type: String,
      default: '/images/recipe-default.png',
      set: value => value === '' ? '/images/recipe-default.png' : value
    },
    analyzedInstructions: [{
      number: Number,
      step:String
    }],
    cuisines: {
      type: String,
      enum:['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese','Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese']
    },
    dishTypes:{
      type: String,
      enum:['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink']
    },
    summary: {
      type:String
    },
    extendedIngredients:[{
      name: String
    }],
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
