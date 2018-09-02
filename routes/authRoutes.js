const passport = require('passport');

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', {
  	scope: ['profile', 'email']
  }));

  // firs time users are redirected here
  app.get('/auth/google/callback', passport.authenticate('google'));
}
