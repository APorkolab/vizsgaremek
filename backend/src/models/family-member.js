const mongoose = require('mongoose');
const FamilyMemberSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	favouriteGenre: {
		type: String,
		required: true
	},
	favouriteMovie: {
		type: String,
		required: true
	},
	role: {
		type: Number,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);