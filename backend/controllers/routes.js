const express = require('express');
const res = require('express/lib/response');
const data = require('./data');
const logger = require('../config/logger');
const controller = express.Router();
const createError = require('http-errors');


controller.get('/', (req, res) => {
	res.json(data)
});
controller.get('/person/count', (req, res) => {
	res.json(data.length)
});
controller.get('/person/vaccinated', (req, res) => {
	res.json(data.filter((person) => person.vaccine))
});

//3rd Task

//3.2
controller.get('/person/:id/vaccinated', (req, res, next) => {
	if (!req.body["id"] || !req.body["id"].match(/^[0-9]+$/) || req.body["id"] > data.length || req.body["id"] < 0 ||
		req.body["id"] == null || req.body["id"] == undefined || req.body["id"] == "" || req.body["id"] == " " || !req.body["firstName"] ||
		req.body["firstName"] == null || req.body["firstName"] == undefined || req.body["firstName"] == "" || req.body["firstName"] == " " ||
		!req.body["lastName"] || !req.body["lastName"] || req.body["lastName"] == null || req.body["lastName"] == undefined ||
		req.body["lastName"] == "" || req.body["lastName"] == " ") {
		logger.debug(`Invalid request: ${req.body}`);
	}
	res.json(data.filter((person) => person.vaccine.includes))
});

//3.2
controller.post('/person', (req, res, next) => {
	if (!req.body["id"] || !req.body["id"].match(/^[0-9]+$/) || req.body["id"] > data.length || req.body["id"] < 0 ||
		req.body["id"] == null || req.body["id"] == undefined || req.body["id"] == "" || req.body["id"] == " " || !req.body["firstName"] ||
		req.body["firstName"] == null || req.body["firstName"] == undefined || req.body["firstName"] == "" || req.body["firstName"] == " " ||
		!req.body["lastName"] || !req.body["lastName"] || req.body["lastName"] == null || req.body["lastName"] == undefined ||
		req.body["lastName"] == "" || req.body["lastName"] == " ") {
		logger.debug(`Invalid request: ${req.body}`);
	}
	const newPerson = req.body;
	newPerson.id = data[data.length - 1].id + 1;
	data.push(newPerson);

	res.status(201);
	res.json(newPerson);
});

//3.2
controller.put('/person/:id/:vaccine', (req, res, next) => {
	if (!req.body["id"] || !req.body["id"].match(/^[0-9]+$/) || req.body["id"] > data.length || req.body["id"] < 0 ||
		req.body["id"] == null || req.body["id"] == undefined || req.body["id"] == "" || req.body["id"] == " " || !req.body["firstName"] ||
		req.body["firstName"] == null || req.body["firstName"] == undefined || req.body["firstName"] == "" || req.body["firstName"] == " " ||
		!req.body["lastName"] || !req.body["lastName"] || req.body["lastName"] == null || req.body["lastName"] == undefined ||
		req.body["lastName"] == "" || req.body["lastName"] == " " | req.body["vaccine"] == null || req.body["vaccine"] == undefined) {
		logger.debug(`Invalid request: ${req.body}`);
	};
	const id = parseInt(req.params.id);
	const index = data.findIndex(p => p.id === id);
	data[index] = {
		"id": id,
		"firstName": req.body["firstName"],
		"lastName": req.body["lastName"],
		"vaccine": req.params["vaccine"]
	};
	res.send(data[index]);
})

//3.2
controller.delete('/person/:vaccine', (req, res, next) => {
	if (!req.body["vaccine"] || req.body["vaccine"] == null || req.body["vaccine"] == undefined) {
		logger.debug(`Invalid request: ${req.body}`);
	}
	const index = data.findIndex(p => p.vaccine === req.params.vaccine);
	data.splice(index, 1);
	res.send();
});

module.exports = controller;