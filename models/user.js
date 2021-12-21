const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

// Creating user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  premium: {
    type: Boolean,
    required: true,
  },
});
// GENERATE AUTO TOKEN - add a function to userSchema that returns a token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      premium: this.premium,
    },
    config.get("jwtKey")
  );
  return token;
};

// creating a "user" model
const User = mongoose.model("User", userSchema);

// validation via JOI schema
function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    premium: Joi.boolean().required(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
