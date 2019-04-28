const express = require('express');
const helmet = require('helmet')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

app.use(helmet());

app.use(bodyParser.json());

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
require('./models/Deck');
require('./services/passport')
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/deckRoutes')(app);

mongoose.connect(keys.mongoURI).then(
  () => { console.log('successfully connected to mongo') },
  err => { console.log(err) }
);

if(process.env.NODE_ENV === 'production') {
  // express serve static production assets
  app.use(express.static('client/build'));

  // if express doesn't recognize the routes,
  // it serves up the index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000
app.listen(PORT);
