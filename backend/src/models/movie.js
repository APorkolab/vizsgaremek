const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema({
	foreignTitle: {
		type: String,
		required: true
	},
	hungarianTitle: {
		type: String,
		required: true
	},
	director: {
		type: String,
		required: true
	},
	releaseYear: {
		type: Number,
		required: true
	},
	length: {
		type: Number,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	imdbRank: {
		type: Number,
		required: true
	},
	imdbAverage: {
		type: Number,
		required: true
	},
	imdbID: {
		type: String,
		required: true
	},
	mainActor1: {
		type: String,
		required: true
	},
	mainActor2: {
		type: String,
		required: false
	},
});

module.exports = mongoose.model('Movie', MovieSchema);