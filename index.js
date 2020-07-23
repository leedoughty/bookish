const express = require("express");
const bodyParser = require("body-parser");

const books = require("./routers/books");
const user = require("./routers/user");
const session = require("./routers/session");

const app = express();
app.use(bodyParser.json());

app.use("/", session);
app.use("/books", books);
app.use("/user", user);

app.get("/", (request, response) => {
  response.send("welcome to bookish!");
});

app.listen(3000, () => console.log("Listening on port 3000"));
