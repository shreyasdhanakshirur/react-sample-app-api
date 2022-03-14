const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
  },
   password: {
    type: String,
    default: "",
  },
   dateCreated: {
    type: Date,
    default: "",
  }
});

const users = mongoose.model("Users", UsersSchema);

module.exports = users;