const {
	mockRequest,
	mockResponse
} = require('jest-mock-req-res');
const createError = require('http-errors');
const Movie = require('../../models/movie');

const baseService = require('./service')()
const baseController = require('./controller')()
const jestConfig = require('../../../jest.config')

jest.mock('./service')

describe("Mocking movies", () => {

	let response;
	const nextFunction = jest.fn();

	beforeEach(() => {
		const mockData = [{

				"_id": "1",
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
				"_id": "2",
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
				"_id": "3",
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
				"_id": "4",
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
		];

		baseService.__setMockData(mockData);
		response = mockResponse();

	})

	describe('FindOne tests', () => {
		test('Find one with valid id', () => {
			const ID = '1';
			const request = mockRequest({
				params: {
					id: ID
				}
			})

			return baseController.findOne(request, response, nextFunction)
				.then(() => {
					expect(baseService.findOne).toHaveBeenCalledWith(ID)
					expect(response.json).toHaveBeenCalledWith(baseService.mockData.find(item => item._id === ID))
				})
		})

		it('Find one with invalid id', async () => {
			const ID = '6';
			const request = mockRequest({
				params: {
					id: ID,
				},
			});

			await baseController.findOne(request, response, nextFunction);
			expect(baseService.findOne).toHaveBeenCalledWith(ID);
			expect(nextFunction).toHaveBeenCalledTimes(0);
		});
	});

	describe('FindAll test', () => {
		test('Find all of the entities', () => {
			const request = mockRequest()

			return baseController.findAll(request, response, nextFunction)
				.then(() => {
					expect(baseService.findAll).toHaveBeenCalled()
					expect(response.json).toHaveBeenCalledWith(baseService.mockData)
				})
		})

	})


	describe('Create new test', () => {
		test('Create a new entity', () => {
			const newData = {
				_id: '7',
				foreignTitle: "The Shawshank Redemption",
				hungarianTitle: "A remény rabjai",
				director: "Stephen King",
				releaseYear: 1994,
				length: 142,
				genre: "drama",
				imdbRank: "1",
				imdbAverage: 9.3,
				imdbID: "tt0111161",
				mainActor1: "Tim Robbins",
				mainActor2: "Morgan Freeman",
			}
			const request = mockRequest({
				body: newData
			})

			return baseController.create(request, response, nextFunction)
				.then(() => {
					expect(baseService.create).toHaveBeenCalledWith(newData)
					expect(response.json).toHaveBeenCalledWith(newData)
					expect(baseService.mockData.length).toBe(5)
					expect(baseService.mockData[4]).toEqual(newData)
				})
		})

	})


	describe('Update test', () => {
		test('Update an entity', () => {
			const ID = '8';
			const UPDATE = {
				_id: '3',
				foreignTitle: "The Shawshank Redemption",
				hungarianTitle: "A remény rabjai",
				director: "Frank Darabont",
				releaseYear: 1994,
				length: 142,
				genre: "drama",
				imdbRank: "1",
				imdbAverage: 9.3,
				imdbID: "tt0111161",
				mainActor1: "Tim Robbins",
				mainActor2: "Morgan Freeman",
			}

			const request = mockRequest({
				params: {
					id: UPDATE._id
				},
				body: UPDATE
			})

			return baseController.update(request, response, nextFunction)
				.then(() => {
					expect(baseService.update).toHaveBeenCalledWith(UPDATE._id, UPDATE)
					expect(response.json).toHaveBeenCalledWith(UPDATE)
					expect(baseService.mockData.find(item => item._id === UPDATE._id)).toEqual(UPDATE)
				})
		})

	})

	// describe('delete test', () => {
	// 	test('delete', () => {
	// 		const ID = '1'
	// 		const DELETED = baseService.mockData.find(item => item._id === ID)
	// 		const request = mockRequest({
	// 			params: {
	// 				id: ID
	// 			}
	// 		})

	// 		return baseController.delete(request, response, nextFunction)
	// 			.then(() => {
	// 				expect(baseService.delete).toHaveBeenCalledWith(ID)
	// 				expect(response.json).toHaveBeenCalledWith(DELETED)
	// 				expect(baseService.mockData.find(item => item._id === ID)).toBe(undefined)
	// 				expect(baseService.mockData.length).toBe(1)

	// 			})
	// 	})
	// })
})