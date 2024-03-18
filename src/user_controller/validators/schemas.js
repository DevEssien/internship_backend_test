const { body, check } = require("express-validator");

exports.signupSchema = [
	body("name").isString().trim(),
	body("email").isString().trim().isEmail(),
	body("password")
		.isString()
		.isAlphanumeric()
		.isLength({ min: 6 })
		.withMessage("password must be a string of minimum length of 6"),
];

exports.loginSchema = [
	body("email").isString().trim().isEmail(),
	body("password")
		.isString()
		.isAlphanumeric()
		.isLength({ min: 6 })
		.withMessage("password must a string be of minimum length of 6"),
];
