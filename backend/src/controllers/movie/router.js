const express = require('express');
const router = express.Router();
const Movie = require('../../models/movie');

const controller = require('../base/controller')(Movie);

//Get all movies
router.get('/', (req, res, next) => {
	return controller.findAll(req, res, next);
});

module.exports = router;