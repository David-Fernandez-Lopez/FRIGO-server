const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')


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
      required: [true, 'Password is required.'],
      minlength: [3, 'Password must have a minimum of 3 characters']
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
      type: String
    }],
    shoppingList: [{
      name: String,
      amount: Number,
      unit: String
    }]
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

const User = model("User", userSchema)

module.exports = User
