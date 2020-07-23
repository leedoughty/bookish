const express = require("express");
const jwt = require("jsonwebtoken");
const credentials = require("../credentials");

const session = express.Router();

session.get("/", (request, response) => {
  response.send("welcome!");
});

session.get("/login", (request, response) => {
  response.send("here's the login form");
});

session.post("/login", (request, response) => {
  const token = jwt.sign(request.body, credentials.PRIVATE_KEY);
  response.cookie("ckns_jwt", token);
  response.send(token);
});

module.exports = session;
