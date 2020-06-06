const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const workout = require('./models/exercises.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// routes
// require('./routes/api.js')(app);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
