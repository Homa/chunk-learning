const express = require('express');
const app = express();
require('./services/passport')
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000
app.listen(PORT);
