const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, 'AllWorkAndNoPlayMakesJackADullBoy', (err, familyMember) => {
			if (err) {
				return res.sendStatus(403);
			}

			req.familyMember = familyMember;
			next();
		});
	} else {
		res.sendStatus(401);
	}

};