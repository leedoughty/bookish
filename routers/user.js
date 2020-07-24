const express = require("express");
const passport = require("passport");
const user = express.Router();

user.get("/", (request, response) => {
  response.send("here are your details");
});

user.get(
  "/books",
  passport.authenticate("jwt", { session: false }),
  (request, response) => {
    response.send("here are your loaned books");
  }
);

module.exports = user;
