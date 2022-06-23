'use strict';


//    expected 200 "OK", got 403 "Forbidden" hibát ad, pedig adminként (3-as szerepkörrel) szerepl a user az adatbázisban és joga is van az oldal megtekintésére
// segíts kérlek, nincs több ötletem  

let should = require('should');
let app = require('./server');
let request = require('supertest')(app);
const config = require('config');
const mongoose = require('mongoose');

describe('GET /api/incidents', function () {
	const insertData = [{
			"foreignTitle": "Craigslist Joe",
			"hungarianTitle": "disintermediate front-end users",
			"director": "Mattie Brum",
			"releaseYear": 1994,
			"length": 177,
			"genre": "Adventure, Documentary",
			"imdbRank": 249,
			"imdbAverage": 7.5,
			"imdbID": "tt8256420",
			"mainActor1": "Shepherd Folkard",
			"mainActor2": "Margaretta Holliar"
		},
		{
			"foreignTitle": "Margaret's Museum",
			"hungarianTitle": "brand e-business e-tailers",
			"director": "Anatole Piet",
			"releaseYear": 1951,
			"length": 118,
			"genre": "Drama",
			"imdbRank": 250,
			"imdbAverage": 5.4,
			"imdbID": "tt7945867",
			"mainActor1": "Elsbeth Bowater",
			"mainActor2": null
		},
		{
			"foreignTitle": "Once Upon a Honeymoon",
			"hungarianTitle": "exploit 24/365 relationships",
			"director": "Amye Lockey",
			"releaseYear": 1955,
			"length": 98,
			"genre": "Comedy, Mystery, Romance",
			"imdbRank": 251,
			"imdbAverage": 8.4,
			"imdbID": "tt8877294",
			"mainActor1": "Annamaria Brugger",
			"mainActor2": null
		},
		{
			"foreignTitle": "Vizontele Tuuba",
			"hungarianTitle": "target compelling technologies",
			"director": "Charlene Gallimore",
			"releaseYear": 1950,
			"length": 128,
			"genre": "Comedy, Drama",
			"imdbRank": 252,
			"imdbAverage": 6.9,
			"imdbID": "tt6460640",
			"mainActor1": "Hammad Flippelli",
			"mainActor2": null
		},
	];

	let accessToken = {};

	beforeEach((done) => {
		const {
			host,
			user,
			pass
		} = config.get('database');
		mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {})
			.then((conn) => {
				console.log('Connection to test database success!');
				done();
			})
			.catch((err) => {
				throw new Error(err.message);
			});
		loginUser(accessToken);
		done();
	});

	afterEach((done) => {
		mongoose.connection.close(() => done());
	});


	it('should require authorization', function (done) {
		request
			.get('/movies')
			.expect(401)
			.end(function (err, res) {
				if (err) return done(err);
				done();
			});
	});



	it('should respond with JSON array', function (done) {

		request
			.get('/movies')
			.auth(accessToken.token, {
				type: 'bearer'
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				if (err) return done(err);
				res.body.should.be.instanceof(Array);
				done();
			});
	});

});

function loginUser(accessToken) {
	return function (done) {
		request
			.post('/login')
			.send({
				email: 'rdurnan4@eepurl.com',
				password: "$2a$10$bl/mQDo4lO5Fi4EaxxQt6eHF5cH5wVnQkGFONR9z4fdH.rReNdNAO"
			})
			.expect(200)
			.end(onResponse);
		// done();

		function onResponse(err, res) {
			accessToken = res.body.accessToken;
			return done();
		}
	};
}