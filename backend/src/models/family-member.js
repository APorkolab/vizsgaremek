const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;

const FamilyMemberSchema = mongoose.Schema({
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
		required: true,
		index: {
			unique: true,
		}
	},
	role: {
		type: Number,
		required: true
	},
	nickname: {
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
});


FamilyMemberSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);