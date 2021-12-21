const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");
require("dotenv").config();

// Connection to mongo DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err, "Could not connect to mongoDB.."));

app.use(require("morgan")("dev"));
app.use(require("cors")());

app.use(express.json());

// route for user (crud)
app.use("/levelup/users", users);

// a route to create a token for a registered user
app.use("/levelup/auth", auth);

/* listen to port */
app.listen(process.env.PORT, () => console.log(`Listening`));
