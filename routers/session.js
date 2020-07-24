const express = require("express");
const jwt = require("jsonwebtoken");
const credentials = require("../credentials");
const passport = require("passport");
const login = require("../login");

const session = express.Router();

session.get("/", (request, response) => {
  response.send("welcome!");
});

session.get("/login", (request, response) => {
  response.send("here's the login form");
});

session.post("/login", login, (request, response) => {
  if (request.data) {
    const token = jwt.sign(request.body.username, credentials.PRIVATE_KEY);
    response.cookie("ckns_jwt", token);
    response.send(token);
    console.log(token);
  } else {
    response.send("user does not exist");
  }
});

module.exports = session;
