const mockService = ({
	mockData: [],
	__setMockData(data) {
		mockService.mockData = data;
	},
	findAll: jest.fn(async function () {
		return mockService.mockData
	}),
	findOne: jest.fn(async function (_id) {
		return mockService.mockData.find(item => item._id === _id)
	}),
	create: jest.fn(async function (data) {
		mockService.mockData.push(data)
		return data
	}),
	update: jest.fn(async function (id, data) {
		const index = mockService.mockData.findIndex(item => item._id === id)
		mockService.mockData[index] = data
		return data
	}),
	delete: jest.fn(async function (id) {
		const index = mockService.mockData.findIndex(item => item._id === id)
		return mockService.mockData.splice(index, 1)[0]
	}),
})

module.exports = () => mockService;