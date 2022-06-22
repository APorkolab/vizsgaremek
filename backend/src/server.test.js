'use strict';


//    expected 200 "OK", got 403 "Forbidden" hibát ad, pedig adminként (3-as szerepkörrel) szerepl a user az adatbázisban és joga is van az oldal megtekintésére
// segíts kérlek, nincs több ötletem  

let should = require('should');
let app = require('./server');
let request = require('supertest')(app);

describe('GET /api/incidents', function () {

	it('should require authorization', function (done) {
		request
			.get('/movies')
			.expect(401)
			.end(function (err, res) {
				if (err) return done(err);
				done();
			});
	});


	let accessToken = {};
	beforeEach(loginUser(accessToken));
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
		done();

		function onResponse(err, res) {
			accessToken = res.body.accessToken;
			return done();
		}
	};
}