const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log(req);
	res.send({"hi": "hello"})
});

const PORT = process.env.PORT || 4000
app.listen(PORT);
