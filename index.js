const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// telling passport to use cookie for authentication
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./services/passport')
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI).then(
  () => { console.log('successfully connected to mongo') },
  err => { console.log(err) }
);

const PORT = process.env.PORT || 4000
app.listen(PORT);
