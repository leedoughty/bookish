const express = require("express");

const session = express.Router();

session.get("/", (request, response) => {
  response.send("welcome!");
});

session.get("/login", (request, response) => {
  response.send("here's the login form");
});

session.post("/login", (request, response) => {
  response.send("you are logging in");
});

module.exports = session;
