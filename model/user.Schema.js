const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  localStorage: {
    type: String,
    require: true,
  },
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
