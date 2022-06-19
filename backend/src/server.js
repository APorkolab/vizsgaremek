const express = require('express');
const httpErrors = require('http-errors');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.Promise = global.Promise;

const app = express();

const {
	host,
	user,
	pass
} = config.get('database');

mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(
		// require('./seed/seeder'), // Seed the database, ONLY ONCE MUST RUN
		// console.log('Data has been seeded into the database.'),
		conn => console.log('Connected to MongoDB Atlas'),
	).catch(err => console.log(err));

//Cross Origin Resource Sharing
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());


const authencticateJwt = require('./models/auth/authenticate');

//Movies
app.use('/movies', authencticateJwt, require('./controllers/movie/router'));
app.use('/main-actors', authencticateJwt, require('./controllers/main-actor/router'));
app.use('/family-members', authencticateJwt, require('./controllers/family-member/router'));
app.use('/directors', authencticateJwt, require('./controllers/director/router'));
app.use('/watched-movies', authencticateJwt, require('./controllers/watched-movie/router'));
app.use('/login', require('./controllers/login/router'));

app.use('/', (req, res, next) => {
	console.log(req.url);
	res.send('The FaMoBase v.1.0.0 backend is working!');
});
app.use((err, req, res, next) => {
	res.status = 500;
	res.json({
		hasError: true,
		message: err.message,
	});
});

module.exports = app;