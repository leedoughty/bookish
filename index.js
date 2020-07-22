const express = require("express");
const db = require("./databaseConnection");
const { Book } = require("./book");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/books", (request, response) => {
  db.any("SELECT * FROM books")
    .then((data) => {
      const listBooks = data.map((book) => {
        return new Book(
          book.id,
          book.title,
          book.author,
          book.isbn,
          book.barcode
        );
      });
      console.log(listBooks);
      response.send(listBooks);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

app.listen(3000, () => console.log("Listening on port 3000"));
