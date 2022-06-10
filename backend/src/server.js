const express = require('express');
const httpErrors = require('http-errors');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;

const app = express();

const {
	host,
	user,
	pass
} = config.get('database');

mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {}).then(
	require('./seed/seeder'), // Seed the database, ONLY ONCE MUST RUN
	conn => console.log('Connected to MongoDB Atlas'),
).catch(err => console.log(err), );


// mongoose.connect(`
//mongodb + srv: //${host}`, {
// 		user: username,
// 		pass: password,
// 	}).then(connection => console.log('Connected to database'))
// 	.catch(err => {
// 		throw new Error(err.message);
// 	});

//Cross Origin Resource Sharing
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

//Movies
app.use('/movie', require('./controllers/movie/router'));
app.use('/login', require('./controllers/login/router'));

app.use('/', (req, res, next) => {
	res.send('Hello World');
});
app.use((err, req, res, next) => {
	res.status = 500;
	res.json({
		hasError: true,
		message: 'Server error',
	});
});

module.exports = app;