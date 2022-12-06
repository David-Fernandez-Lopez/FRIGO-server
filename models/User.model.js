const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    name: {
      type: String,
      required: [true, 'Name is required.']
    },
    lastName: {
      type: String,
      default: ''
    },
    profileImg: {
      type: String,
      default: '/images/profile-default.png',
      set: value => value === '' ? '/images/profile-default.png' : value
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    favRecipes: [{
      type:String
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema)

module.exports = User
