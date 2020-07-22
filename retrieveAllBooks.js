const db = require("./databaseConnection");
const { Book } = require("./book");

const retrieveAllBooks = (request, response, next) => {
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
};

module.exports = {
  retrieveAllBooks,
};
