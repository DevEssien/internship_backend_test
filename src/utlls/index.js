const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");

const { secret, salt } = config.app;

exports.generateJwt = async function (payload) {
	const expirationTime = "720h";

	return new Promise((resolve, reject) => {
		jwt.sign(payload, secret, { expiresIn: expirationTime }, (error, token) => {
			if (error) return reject(error);
			return resolve(token);
		});
	});
};

exports.decodeToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (error, decodedToken) => {
			console.log("decoded token ", decodedToken);
			if (error) return reject(error);
			return resolve(decodedToken);
		});
	});
};

exports.hashPassword = (password) => {
	return bcrypt.hash(password, salt);
};

exports.comparePassword = (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
