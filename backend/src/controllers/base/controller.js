const express = require('express');
const baseService = require('./service');

module.exports = (model) => {
	const service = baseService(model);
	return {
		findAll: (req, res, next) => {
			return service.findAll()
				.then(list => {
					res.json(list);
				}).catch(err => {
					res.status(500).json({
						hasError: true,
						message: err.message,
					});
				});
		}
	};

};