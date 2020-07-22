const express = require("express");
const db = require("./databaseConnection");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", (req, res) => {
  db.any("SELECT * FROM books").then((data) => res.send(data));
});

app.listen(3000, () => console.log("Listening on port 3000"));
