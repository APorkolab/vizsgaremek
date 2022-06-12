const express = require('express');
const createError = require('http-errors');
const baseService = require('./service');

module.exports = (model) => {
	const service = baseService(model);
	return {
		create(req, res, next) {
			const validationErrors = new model(req.body).validateSync();
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
		},

		findAll(req, res, next) {
			return service.findAll()
				.then(list => {
					res.json(list);
				}).catch(err => {
					res.status(500).json({
						hasError: true,
						message: err.message,
					});
				});
		},

		findOne(req, res, next) {
			return service.findOne(req.params.id)
				.then(entity => {
					if (!entity) {
						return next(new createError.NotFound("Entity is not found"));
					}
					return res.json(entity);
				});
		},

		update(req, res, next) {
			const validationErrors = new model(req.body).validateSync();
			if (validationErrors) {
				return next(
					new createError.BadRequest(validationErrors)
				);
			}

			return service.update(req.params.id, req.body)
				.then(entity => {
					res.json(entity);
					console.log("Update success");
				})
				.catch(err => {
					next(new createError.InternalServerError(err.message));
				});
		},

		delete(req, res, next) {
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
		}
	}
}










// module.exports = (model, populates = []) => {
// 	const currentService = baseService(model, populates);
// 	return {
// 		create: (req, res, next) => {
// 			if (!checkModel(model, req.body, next)) {
// 				return;
// 			}

// 			return currentService
// 				.create(req.body)
// 				.then((cp) => {
// 					res.status(201);
// 					res.json(cp);
// 				})
// 				.catch((err) => {
// 					next(new createError.InternalServerError(err.message));
// 				});
// 		},

// 		findAll: (req, res, next) => {
// 			return currentService.findAll.then((data) => {
// 				res.json(data);
// 			});
// 		},

// 		findOne: (req, res, next) => {
// 			return currentService.findOne(req.params._id).then((data) => {
// 				if (!data) {
// 					return next(new createError.NotFound('data is not found'));
// 				}
// 				return res.json(data);
// 			});
// 		},

// 		update: (req, res, next) => {
// 			// if (!checkModel(model, req.body, next)) {
// 			//     console.log('!checkModel');
// 			//     return;
// 			// }

// 			return currentService
// 				.update(req.params.id, req.body)
// 				.then((data) => {
// 					res.json(data);
// 				})
// 				.catch((err) => {
// 					next(new createError.InternalServerError(err.message));
// 				});
// 		},

// 		delete: (req, res, next) => {
// 			return currentService
// 				.delete(req.params.id)
// 				.then(() => res.json({}))
// 				.catch((err) => {
// 					next(new createError.InternalServerError(err.message));
// 				});
// 		},
// 	};
// };