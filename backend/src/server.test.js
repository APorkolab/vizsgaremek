const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Movie = require('./models/movie');
const {
	response
} = require('jest-mock-req-res');
const {
	Test
} = require('supertest');

describe('REST API integration tests', () => {
	beforeEach(done => {
		const {
			host,
			user,
			pass
		} = config.get('database');
		mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}).then(conn => {
				console.log('Connection success!');
				done();
			})
			.catch(err => {
				throw new Error(err.message);
			});
	});

	afterEach(done => {
		mongoose.connection.close(() => done());
	});

	test('GET /movies', done => {
		supertest(app).get('/movies').expect(401)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy();
				done();
			});
	});
});