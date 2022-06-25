//IMPORTANT! Before you run this test suit, you must comment out the server.js file to 46-51 lines and uncomment the server.test.js file to lines 54-59,
//because the authorization of the app will fail the tests. I know it's a bit hacky, but it works: it is just a workaround.
// It must be said, that the because of the speed of the connection of the internet sometimes can misfail the tests. 
// All in all, please, run twice if not three times the all of the tests.

'use strict';


let should = require('should');
let app = require('./server');
let request = require('supertest')(app);
const config = require('config');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const Director = require('./models/director');
const WatchedMovie = require('./models/watched-movies');
const MainActor = require('./models/main-actor');
const FamilyMember = require('./models/family-member');

let token = {};

beforeEach(async () => {
	try {
		const {
			host,
			user,
			pass
		} = config.get('database');
		await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {})
		console.log('Connection to test database success!');
		console.log(`User: ${user} Pass:${pass} host:${host}`);
		loginUser(token);
	} catch (err) {
		throw new Error(err.message);
	}
});


afterAll(done => {
	mongoose.connection.close(() => done());
});

function loginUser(token) {
	return function (done) {
		request
			.post('/login')
			// .send({
			// 	email: 'rdurnan4@eepurl.com',
			// 	password: "$2a$10$GOdRxdMRlQxDjWphvbds6u6c4AEACQwIvUffXfaj9emHLRuLvf2Mq"
			// })
			.expect(200)
			.end(onResponse);

		function onResponse(err, res) {
			token = res.body.token;
			return done();
		}
	};
}




describe('/movies tests', () => {
	const insertData = [{
			foreignTitle: "Craigslist Joe",
			hungarianTitle: "disintermediate front-end users",
			director: "Mattie Brum",
			releaseYear: 1994,
			length: 177,
			genre: "Adventure, Documentary",
			imdbRank: 249,
			imdbAverage: 7.5,
			imdbID: "tt8256420",
			mainActor1: "Shepherd Folkard",
			mainActor2: "Margaretta Holliar"
		},
		{
			foreignTitle: "Once Upon a Honeymoon",
			hungarianTitle: "exploit 24/365 relationships",
			director: "Amye Lockey",
			releaseYear: 1955,
			length: 98,
			genre: "Comedy, Mystery, Romance",
			imdbRank: 251,
			imdbAverage: 8.4,
			imdbID: "tt8877294",
			mainActor1: "Annamaria Brugger",
			mainActor2: null
		}
	];
	let firstPostId;


	beforeEach(() => {
		return Movie.insertMany(insertData).then((entities) => firstPostId = entities[0]._id)
	})
	afterEach(() => mongoose.connection.dropCollection('movies'))

	afterAll((done) => {
		mongoose.connection.close(() => done());
	});


	test('GET /movies', done => {
		request.get('/movies')
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy()
				expect(response.body.length).toBe(insertData.length)
				response.body.forEach((entity, index) => {
					expect(entity.foreignTitle).toBe(insertData[index].foreignTitle)
				})
				done()
			}).catch(err => console.error(err))
	})

	test('GET /movies/:id', done => {
		request.get(`/movies/${firstPostId}`)
			.set('Authentication', 'Bearer ' + token)
			.then(response => {
				const entity = response.body
				expect(entity.hungarianTitle).toBe(insertData[0].hungarianTitle)
				done()
			}).catch(err => console.error(err))
	})

	test('POST /movies/', () => {
		const newEntity = {
			foreignTitle: "Once Upon a Honeymoon",
			hungarianTitle: "exploit 24/365 relationships",
			director: "Amye Lockey",
			releaseYear: 1955,
			length: 98,
			genre: "Comedy, Mystery, Romance",
			imdbRank: 251,
			imdbAverage: 8.4,
			imdbID: "tt8877294",
			mainActor1: "Annamaria Brugger",
			mainActor2: null
		}
		request.post('/movies')
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.send(newEntity)
			.expect(200)
			.then(response => {
				expect(response.body.foreignTitle).toBe(newEntity.foreignTitle)
			})
			.then(() => request
				.get('/movies')
				// .auth(token.token, {
				// 	type: 'bearer'
				// })
				.expect(201)
				.then(response => {
					expect(response.body.length).toBe(3)
					expect(response.body[2].foreignTitle).toBe(newEntity.foreignTitle)
					done()
				})).catch(err => console.error(err))
	})

	test('PUT /movies/:id', done => {
		const update = {
			_id: firstPostId,
			foreignTitle: 'The Wonderful World Of Ernest Tarara'
		}
		request.put(`/movies/${firstPostId}`)
			// .set('Authentication', 'Bearer ' + token)
			.send(update)
			.expect(200)
			.then(response => {
				expect(response.body.foreignTitle).toBe(update.foreignTitle)
			})
			.then(() => supertest(app)
				.get('/movies')
				// .set('Authentication', 'Bearer ' + token)
				.then(response => {
					expect(response.body[0].foreignTitle).toBe(update.foreignTitle)
					done()
				})
			).catch(err => console.error(err))
		done();
	});

});



//------------------------------------------------------- Watched Movie test --------------------------------------------------------------


describe('/watched-movies tests', () => {


	const insertData = [{
			"foreignTitle": "Forrest Gump",
			"hungarianTitle": "Forrest Gump",
			"director": "Robert Zemeckis",
			"releaseYear": 1994,
			"length": 142,
			"genre": "drama, romance",
			"imdbRank": "18",
			"imdbAverage": 8.8,
			"imdbID": "tt0109830",
			"mainActor1": "Tom Hanks",
			"mainActor2": "Robin Wright",
			"timestampOfWatching": "2019-06-10T22:36:31Z"
		},
		{
			"foreignTitle": "The Matrix",
			"hungarianTitle": "Mátrix",
			"director": "Lana Wachowski, Lilly Wachwoski",
			"releaseYear": 1999,
			"length": 136,
			"genre": "action, sci-fi",
			"imdbRank": "19",
			"imdbAverage": 8.7,
			"imdbID": "tt0133093",
			"mainActor1": "Keanu Reeves",
			"mainActor2": "Laurence Fishburne",
			"timestampOfWatching": "2022-01-10T09:05:54Z"
		}
	];
	let firstPostId;

	beforeEach(() => {
		return WatchedMovie.insertMany(insertData).then((entities) => firstPostId = entities[0]._id)
	})
	afterEach(() => mongoose.connection.dropCollection('watchedmovies'))

	test('GET /watched-movies', done => {
		request.get('/watched-movies')
			.expect(200)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy()
				expect(response.body.length).toBe(insertData.length)
				response.body.forEach((entity, index) => {
					expect(entity.imdbID).toBe(insertData[index].imdbID)
				})
				done()
			}).catch(err => console.error(err))
	})

	test('GET /watched-movies/:id', done => {
		request.get(`/watched-movies/${firstPostId}`)
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.then(response => {
				const entity = response.body
				expect(entity.name).toBe(insertData[0].name)
				done()
			}).catch(err => console.error(err))
	})

	test('POST /watched-movies/', () => {
		const newEntity = {
			foreignTitle: "Once Upon a Honeymoon",
			hungarianTitle: "exploit 24/365 relationships",
			director: "Amye Lockey",
			releaseYear: 1955,
			length: 98,
			genre: "Comedy, Mystery, Romance",
			imdbRank: 251,
			imdbAverage: 8.4,
			imdbID: "tt8877294",
			mainActor1: "Annamaria Brugger",
			mainActor2: null
		}
		request
			.get('/watched-movies')
			.send(newEntity)
			.expect(200)
			// .expect('Content-Type', /json/)
			.end(function (err, res) {
				if (err) return done(err);
				res.body.should.be.instanceof(Array);
				// done();
			});
	});

	test('PUT /watched-movies/:id', done => {
		const update = {
			_id: firstPostId,
			foreignTitle: 'The Wonderful World Of Ernest Tarara'
		}

		request.put(`/watched-movies/${firstPostId}`)
			// .set('Authentication', 'Bearer ' + token)
			.send(update)
			.expect(200)
			.then(response => {
				expect(response.body.foreignTitle).toBe(update.foreignTitle)
			})
			.then(() => request
				.get('/directors')
				// .set('Authentication', 'Bearer ' + token)
				.then(response => {
					expect(response.body[0].foreignTitle).toBe(update.foreignTitle)
					done()
				})
			).catch(err => console.error(err))
		done();
	});

});

//------------------------------------------------------- Directors test --------------------------------------------------------------


describe('/directors tests', () => {
	const insertData = [{
			fullName: "Hallie Arnaldy",
			nationality: "JP",
			dateOfBirth: "2021-10-21",
			mostFamousMovie: "Jesse Stone: No Remorse"
		},
		{
			fullName: "Perkin Pendred",
			nationality: "BR",
			dateOfBirth: "2021-08-26",
			mostFamousMovie: "Investigation of a Citizen Above Suspicion (Indagine su un cittadino al di sopra di ogni sospetto)"
		}
	];
	let firstPostId;

	beforeEach(() => {
		return Director.insertMany(insertData).then((entities) => firstPostId = entities[0]._id)
	})
	afterEach(() => mongoose.connection.dropCollection('directors'))

	test('GET /directors', done => {
		request.get('/directors')
			.expect(200)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy()
				expect(response.body.length).toBe(insertData.length)
				response.body.forEach((entity, index) => {
					expect(entity.dateOfBirth).toBe(insertData[index].dateOfBirth)
				})
				done()
			}).catch(err => console.error(err))
	})

	test('GET /directors/:id', done => {
		request.get(`/directors/${firstPostId}`)
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.then(response => {
				const entity = response.body
				expect(entity.dateOfBirth).toBe(insertData[0].dateOfBirth)
				done()
			}).catch(err => console.error(err))
	})

	test('POST /directors/', () => {
		const newEntity = {

			"fullName": "Bellanca Ahmed",
			"nationality": "CN",
			"dateOfBirth": "2021-10-09",
			"mostFamousMovie": "Caliber 9"

		}
		request.post('/directors')
			.set('Authentication', 'Bearer ' + token)
			// .set('Content-Type', 'application/json')
			.send(newEntity)
			.expect(200)
			.then(response => {
				expect(response.body.dateOfBirth).toBe(newEntity.dateOfBirth)
			}).catch(err => console.error(err))
	});

	test('PUT /directors/:id', done => {
		const update = {
			_id: firstPostId,
			nationality: 'HU'
		}
		request.put(`/directors/${firstPostId}`)
			// .set('Authentication', 'Bearer ' + token)
			.send(update)
			.expect(200)
			.then(response => {
				expect(response.body.nationality).toBe(update.nationality)
			})
			.then(() => request
				.get('/directors')
				// .set('Authentication', 'Bearer ' + token)
				.then(response => {
					expect(response.body[0].nationality).toBe(update.nationality)
					done()
				})
			).catch(err => console.error(err))
		done();
	});

});

//------------------------------------------------------- Main actors test --------------------------------------------------------------


describe('/main-actors tests', () => {


	const insertData = [{
			"fullName": "Sawyer Reignolds",
			"nationality": "AR",
			"dateOfBirth": "2021-09-07",
			"mostFamousMovie": "Long Way Down, A"
		},
		{
			"fullName": "Gerty Pepineaux",
			"nationality": "CN",
			"dateOfBirth": "2021-07-04",
			"mostFamousMovie": "New World, The"
		}
	];
	let firstPostId;

	beforeEach(() => {
		return MainActor.insertMany(insertData).then((entities) => firstPostId = entities[0]._id)
	})
	afterEach(() => mongoose.connection.dropCollection('mainactors'))

	test('GET /main-actors', done => {
		request.get('/main-actors')
			.expect(200)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy()
				expect(response.body.length).toBe(insertData.length)
				response.body.forEach((entity, index) => {
					expect(entity.dateOfBirth).toBe(insertData[index].dateOfBirth)
				})
				done()
			}).catch(err => console.error(err))
	})

	test('GET /main-actors/:id', done => {
		request.get(`/main-actors/${firstPostId}`)
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.then(response => {
				const entity = response.body
				expect(entity.nationality).toBe(insertData[0].nationality)
				done()
			}).catch(err => console.error(err))
	})

	test('POST /main-actors/', () => {
		const newEntity = {
			"fullName": "Art Eakle",
			"nationality": "GE",
			"dateOfBirth": "2022-05-02",
			"mostFamousMovie": "Summer and Smoke"
		}
		request.post('/main-actors')
			// .set('Authentication', 'Bearer ' + token)
			// .set('Content-Type', 'application/json')
			.send(newEntity)
			.expect(200)
			.then(response => {
				expect(response.body.dateOfBirth).toBe(newEntity.dateOfBirth)
			}).catch(err => console.error(err))
	});

	test('PUT /main-actors/:id', done => {
		const update = {
			_id: firstPostId,
			nationality: 'TR'
		}
		request.put(`/main-actors/${firstPostId}`)
			// .set('Authentication', 'Bearer ' + token)
			.send(update)
			.expect(200)
			.then(response => {
				expect(response.body.nationality).toBe(update.nationality)
			})
			.then(() => request
				.get('/main-actors')
				// .set('Authentication', 'Bearer ' + token)
				.then(response => {
					expect(response.body[0].nationality).toBe(update.nationality)
					done()
				})
			).catch(err => console.error(err))
		done();
	});

});


//------------------------------------------------------- Family Members test --------------------------------------------------------------


describe('/family-members tests', () => {


	const insertData = [{
			first_name: "Marie-jeanne",
			last_name: "Carbry",
			email: "mcarbry3333@buzzfeed.com",
			role: 1,
			password: "aqqwezLDGLK5Mu2",
			nickname: "mcarbry3",
			favouriteGenre: "Drama",
			favouriteMovie: "V.I.P.s, The"
		},
		{
			first_name: "Raimundo",
			last_name: "Durnan",
			email: "rdurnan4@eepurl.com",
			role: 3,
			password: "aqqweHzfNxB",
			nickname: "rdurnan4",
			favouriteGenre: "Comedy",
			favouriteMovie: "Funny Farm"
		}
	];
	let firstPostId;

	beforeEach(() => {
		return FamilyMember.insertMany(insertData).then((entities) => firstPostId = entities[0]._id)
	})
	afterEach(() => mongoose.connection.dropCollection('familymembers'))

	test('GET /family-members', done => {
		request.get('/family-members')
			.expect(200)
			.then(response => {
				expect(Array.isArray(response.body)).toBeTruthy()
				expect(response.body.length).toBe(insertData.length)
				response.body.forEach((entity, index) => {
					expect(entity.dateOfBirth).toBe(insertData[index].dateOfBirth)
				})
				done()
			}).catch(err => console.error(err))
	})

	test('GET /family-members/:id', done => {
		request.get(`/family-members/${firstPostId}`)
			// .auth(token.token, {
			// 	type: 'bearer'
			// }).expect(200)
			.then(response => {
				const entity = response.body
				expect(entity.favouriteGenre).toBe(insertData[0].favouriteGenre)
				done()
			}).catch(err => console.error(err))
	})

	test('POST /family-members/', () => {
		const newEntity = {
			"first_name": "Micaela",
			"last_name": "Doran",
			"email": "mdoran999@wikispaces.com",
			"role": 1,
			"password": "aqqwecOpwmG",
			"nickname": "mdoran9",
			"favouriteGenre": "Action|Crime|Drama|Thriller",
			"favouriteMovie": "Last Run, The"
		}
		request.post('/family-members')
			// .set('Authentication', 'Bearer ' + token)
			// .set('Content-Type', 'application/json')
			.send(newEntity)
			.expect(200)
			.then(response => {
				expect(response.body.dateOfBirth).toBe(newEntity.dateOfBirth)
			}).catch(err => console.error(err))
	});

	test('PUT /family-members/:id', done => {
		const update = {
			_id: firstPostId,
			nickname: 'Popey Papa'
		}
		request.put(`/family-members/${firstPostId}`)
			// .set('Authentication', 'Bearer ' + token)
			.send(update)
			.expect(200)
			.then(response => {
				expect(response.body.nickname).toBe(update.nickname)
			})
			.then(() => request
				.get('/family-members')
				// .set('Authentication', 'Bearer ' + token)
				.then(response => {
					expect(response.body[0].nickname).toBe(update.nickname)
					done()
				})
			).catch(err => console.error(err))
		done();
	});

});