const db = require("../databaseConnection");

const checkUserExists = (request, response, next) => {
  db.any(
    `SELECT EXISTS(SELECT * FROM users WHERE username='${request.body.username}' AND password='${request.body.password}');`
  )
    .then((userData) => {
      if (!userData[0].exists) {
        response.send("User does not exist");
      }
      next();
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = {
  checkUserExists,
};
