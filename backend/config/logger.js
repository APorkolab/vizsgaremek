const path = require('path');
const winston = require('winston');

const options = {
	file: {
		level: 'debug',
		filename: path.join(__dirname, '../logs/app.log'),
		format: winston.format.simple(),
	},
	console: {
		level: 'debug',
		format: winston.format.simple(),
	},
};

const logger = winston.createLogger({
	format: winston.format.simple(),
	transports: [
		new winston.transports.File(options.file),
		new winston.transports.Console(options.console)
	],
	exitOnError: false,
});

logger.stream = {
	write: function (message, encoding) {
		logger.info(message);
	}
};

module.exports = logger;