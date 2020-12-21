const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;

// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// passport.use(new GoogleStrategy({
//   consumerKey: GOOGLE_CONSUMER_KEY,
//   consumerSecret: GOOGLE_CONSUMER_SECRET,
//   callbackURL: "http://www.example.com/auth/google/callback"
// },
//   function (token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));
