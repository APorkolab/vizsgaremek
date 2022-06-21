const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const movie = require('./models/movie');
const logger = require('./logger/logger');
const familyMember = require('./models/family-member');
const {
	response
} = require('jest-mock-req-res');
const {
	Test
} = require('supertest');
// const superagent = require('superagent');

describe('REST API integration tests', () => {
	let lastAccessToken = '';

	beforeEach(done => {
		const {
			host,
			user,
			pass
		} = config.get('database');

		mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			// .then(conn => {
			// 	console.log('Connection success!');
			// 	console.log(`mongodb+srv://${user}:${pass}@${host}`);
			// 	// done();
			// })
			.then(async () => {
				console.log('Test running')
				const user = new familyMember({
					"first_name": "Dory",
					"last_name": "Waterfall",
					"email": "dwaterfall5@seesaa.net",
					"role": 3,
					"password": "$2a$10$H3eWWDnON/je8Iw./HSCGelf/g9eeJLCoLPpozvbHh4mfxMM2GWMO",
					"nickname": "dwaterfall5",
					"favouriteGenre": "Children|Comedy",
					"favouriteMovie": "Cats & Dogs"
				})
				await user.save()
				supertest(app).post('/login').set('Content-Type', 'application/json').send(user).end((err, response) => {
					console.log(response.body)
					done()
				})
			})
			.catch(err => {
				console.error(err)
				process.exit()
			})
	})


	afterEach(done => {
		mongoose.connection.db.dropDatabase(() => {
			mongoose.connection.close(() => done())
		});
	});

	describe('/movies path', () => {
		const testMovies = [{
				"foreignTitle": "What Time Is It There? (Ni neibian jidian)",
				"hungarianTitle": "harness distributed e-commerce",
				"director": "Fielding O'Coskerry",
				"releaseYear": 1997,
				"length": 178,
				"genre": "Drama",
				"imdbRank": 9,
				"imdbAverage": 8.4,
				"imdbID": "tt8719063",
				"mainActor1": "Uriel Mattson",
				"mainActor2": "Will Adamsson"
			},
			{
				"foreignTitle": "Crush, The",
				"hungarianTitle": "enhance compelling methodologies",
				"director": "Hillary Verlinde",
				"releaseYear": 1950,
				"length": 73,
				"genre": "Thriller",
				"imdbRank": 10,
				"imdbAverage": 8.3,
				"imdbID": "tt4078063",
				"mainActor1": "Drucie Boldock",
				"mainActor2": "Leese Brazenor"
			},
			{
				"foreignTitle": "Paranoia",
				"hungarianTitle": "syndicate user-centric applications",
				"director": "Elysee Challenor",
				"releaseYear": 1995,
				"length": 164,
				"genre": "Drama, Thriller",
				"imdbRank": 11,
				"imdbAverage": 5.4,
				"imdbID": "tt5542269",
				"mainActor1": "Waylin Brizell",
				"mainActor2": "Gasper Cicchillo"
			},
			{
				"foreignTitle": "A Patriotic Man",
				"hungarianTitle": "synthesize e-business systems",
				"director": "Berenice Vaggers",
				"releaseYear": 1987,
				"length": 156,
				"genre": "Comedy, Drama",
				"imdbRank": 12,
				"imdbAverage": 8.0,
				"imdbID": "tt7640640",
				"mainActor1": "Chryste Brydson",
				"mainActor2": "Jefferson Gethouse"
			},
		]


		beforeEach(() => {
			console.log('First describe block started')
			return ArtistModel.insertMany(testMovies).then(() => console.log('TestDB seeded'))
		})
		afterEach(() => mongoose.connection.dropCollection('movies'))


		test('GET /movies', done => {
			supertest(app).get('/movies').expect(200)
				// movie.insertMany(testMovies)
				// .then(() =>
				// 	supertest(app).get('/movies').expect(200))
				.then(response => {
					expect(Array.isArray(response.body)).toBeTruthy();
					expect(response.body.length).toEqual(testMovies.length);
					done()
				}).catch(err => console.error(err))
		})
	})
})