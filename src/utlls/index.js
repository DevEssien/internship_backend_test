const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");

const { secret, salt } = config.app;

exports.generateJwt = async function (payload) {
	const expirationTime = "720h";

	return new Promise((resolve, reject) => {
		jwt.sign(payload, secret, { expiresIn: expirationTime }, (error, token) => {
			if (error) reject(error);
			return resolve(token);
		});
	});
};

exports.hashPassword = (password) => {
	return bcrypt.hash(password, salt);
};

exports.comparePassword = (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
