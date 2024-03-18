const { isValidObjectId } = require("mongoose");
const { body, param } = require("express-validator");
const User = require("../../database/repositories/user.repo");
const { ValidationException } = require("../../libs/exceptions/index");

exports.signupSchema = [
	body("name").isString().trim(),
	body("email")
		.isString()
		.trim()
		.isEmail()
		.custom((value) => {
			return User.getUserByEmail(value).then((user) => {
				if (user) {
					return Promise.reject("E-mail already in use");
				}
			});
		}),
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

exports.endpointParamSchema = [
	param("userId").customSanitizer((value) => {
		const isValidId = isValidObjectId(value);
		// if (!isValidId) return Promise.reject("User ID is invalid objectId. check user ID!"); // remember to fix the issue with this line
		if (!isValidId) throw new ValidationException("User ID is invalid objectId. check user ID!");
		return value;
	}),
];
