const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  LastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  Email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  phone: {
    type: Number,
  },
  image: {
    type: Object,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports.User = User;
