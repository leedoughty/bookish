const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../databaseConnection");
const { PRIVATE_KEY } = require("../credentials");

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = PRIVATE_KEY;

const configurePassport = () => {
  passport.use(
    new JwtStrategy(jwtOptions, (jwt_payload, done) => {
      console.log({ jwt_payload });
      db.any(
        `SELECT EXISTS(select id from users where username = '${username}' and password = '${password}')`
      ).then((data) => {
        console.log(data[0].exists);
        if (data) {
          return true;
        }
        return false;
      });
      done(null, "hello world");
    })
  );
};

module.exports = {
  configurePassport,
};
