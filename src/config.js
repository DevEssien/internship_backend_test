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
	db: {
		uri: process.env.LOCAL_DB_URI,
	},
};

module.exports = config;
