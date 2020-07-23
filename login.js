const db = require("./databaseConnection");

function login(request, response, next) {
  const username = request.body.username;
  const password = request.body.password;
  db.any(
    `SELECT EXISTS(select id from users where username = '${username}' and password = '${password}')`
  ).then((data) => {
    console.log(data[0].exists);
    if (data) {
      return true;
    }
    return false;
  });
  next();
}

module.exports = login;
