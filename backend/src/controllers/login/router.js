const express = require('express');
const router = express.Router();
const FamilyMember = require('../../models/family-member');

//Post
router.post('/', (req, res, next) => {
	const {
		email,
		password
	} = req.body;

	const familyMember = FamilyMember.findOne({
		email
	});

	if (!familyMember) {
		throw new Error('Incorrect credentials!');
	}

	familyMember.comparePassword(password, (err, isMatch) => {
		if (err) {
			return res.sendStatus(403);
		}
		if (!isMatch) {
			throw new Error('Incorrect credentials!');
		}
		res.json({
			success: true,
		});
	});
	return controller.findAll(req, res, next);
});

module.exports = router;