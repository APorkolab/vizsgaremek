const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./config/logger');
const port = 3000;

app.use(morgan('combined', {
	stream: logger.stream
}));

app.use(bodyParser.json());

app.use('/', require('./controllers/routes'));
app.use('/person/count', require('./controllers/routes'));
app.use('/person/vaccinated', require('./controllers/routes'));

app.use((err, req, res, next) => {
	logger.error(`ERR ${err.statusCode}: ${err.message}`);
	res.status(err.statusCode || 500);
	res.json({
		hasError: true,
		message: err.message
	});
});

// swagger docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));