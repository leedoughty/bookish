const express = require("express");
const router = require("./router");

const app = express();
app.use("/books", router);

app.get("/", (request, response) => {
  response.send("welcome to bookish!");
});

app.listen(3000, () => console.log("Listening on port 3000"));
