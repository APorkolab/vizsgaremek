const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
	password: {
		type: String,
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

FamilyMemberSchema.pre('save', (doc, next) => {
	if (!doc.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(doc.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			doc.password = hash;
			next();
		});
	});
});


FamilyMemberSchema.methods.comparePassword = (candidatePassword, cb) => {
	bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
		if (err) {
			return cb(err);
		}
		cb(null, isMatch);
	});
};



module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);