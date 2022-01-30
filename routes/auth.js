// LOG IN
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const router = require("express").Router();

// AUTH ROUTE  checks user data with JOI and checks mongo for the unique email,if all conditions are met triggers "generateAuthToken" a function that creates a token for the user (front - signin, signup premium component)
router.post("/", async (req, res) => {
  const { error } = validateAuth(req.body);
  if (error) return res.status(400).send("Invalid Email or Password");
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send("Invalid Email or Password");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Email or Password");
  res.json({
    token: user.generateAuthToken(),
  });
});

function validateAuth(req) {
  const schema = Joi.object({
    email: Joi.string().required().min(6).max(1024).email(),
    password: Joi.string().required().min(6).max(1024),
  });
  return schema.validate(req);
}

module.exports = router;
