const mongoose = require('mongoose');
const DirectorSchema = mongoose.Schema({
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
		type: String,
		required: true
	},
});

module.exports = mongoose.model('Director', DirectorSchema);