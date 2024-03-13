const dotenv = require("dotenv");
const { join } = require("path");

dotenv.config({
	path: join(__dirname, "..", ".env"),
});

const config = {
	app: {
		port: +process.env.PORT,
		env: process.env.APP_ENV,
	},
};

module.exports = config;
