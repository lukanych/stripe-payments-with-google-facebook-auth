const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:4242/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
  // Save user profile to the session or database
  return done(null, profile);
}));

module.exports = passport;