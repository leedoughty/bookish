const promise = require("bluebird");

const initOptions = {
  promiseLib: promise,
};

const pgp = require("pg-promise")(initOptions);
const credentials = require("./credentials.js");

const cn = {
  host: "localhost",
  port: 5432,
  database: "bookish",
  user: "postgres",
  password: credentials.password,
};

const db = pgp(cn);

module.exports = db;
