const mongoose = require('mongoose');
const DirectorSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	},
	nationality: {
		type: String,
		required: true
	},
	dateOfBirth: {
		type: String,
		required: true
	},
	mostFamousMovie: {
		type: Number,
		required: true
	},
});

module.exports = mongoose.model('Director', DirectorSchema);