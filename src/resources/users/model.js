const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  following: { type: Array, default: [] }
})

const User = model('User', UserSchema)

module.exports = User
