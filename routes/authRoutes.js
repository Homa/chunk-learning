const passport = require('passport');

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', {
  	scope: ['profile', 'email']
  }));

  // firs time users are redirected here
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {res.redirect('/dashboard');});

  app.get('/api/logout', (req, res) => {
    // logout is attached to req by passport
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
