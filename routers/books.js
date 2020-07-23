const express = require("express");
const { retrieveAllBooks } = require("../retrieveAllBooks");

const books = express.Router();

books.get("/", retrieveAllBooks);

books.get("/title", (request, response) => {
  response.send("here is your book title");
});

module.exports = books;
