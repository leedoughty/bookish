const express = require("express");

const user = express.Router();

user.get("/", (request, response) => {
  response.send("here are your details");
});

user.get("/books", (request, response) => {
  response.send("here are your loaned books");
});

module.exports = user;
