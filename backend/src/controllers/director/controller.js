const baseService = require('../base/service');
const watchedMovie = require('../../models/watched-movie');

const service = baseService(watchedMovie);

// exports.findAll = (req, res, next) => {
// 	return service.findAll
// 		.then(list => res.json(list));
// };
exports.create = (req, res, next) => {
	const validationErrors = new Model(req.body).validateSync();
	if (validationErrors) {
		return next(
			new createError.BadRequest(validationErrors)
		);
	}

	return service.create(req.body)
		.then(cp => {
			res.status(201);
			res.json(cp);
		})
		.catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
	return service.findAll()
		.then(entity => {
			res.json(entity);
		});
};

exports.findOne = (req, res, next) => {
	return service.findOne(req.params.id)
		.then(entity => {
			if (!entity) {
				return next(new createError.NotFound('Entity not found'));
			}
			return res.json(entity);
		});
};

exports.update = (req, res, next) => {
	const validationErrors = new Model(req.body).validateSync();
	if (validationErrors) {
		return next(
			new createError.BadRequest(validationErrors)
		);
	}

	return service.update(req.params.id, req.body)
		.then(entity => {
			res.json(entity);
		})
		.catch(err => {
			next(new createError.InternalServerError(err.message));
		});
};

exports.delete = (req, res, next) => {
	return service.delete(req.params.id)
		.then(() => res.json({}))
		.catch(err => {

			if (err.message === "Not found") {
				return next(
					new createError.NotFound(err.message)
				)
			}

			next(new createError.InternalServerError(err.message));
		});
};