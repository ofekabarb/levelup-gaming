const jwt = require("jsonwebtoken");
const config = require("config");

// A MIDDLEWARE that checks if user has a token and verify the token if everything checks out we go to the next() endpoint

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send(err, "Invalid token.");
  }
};
