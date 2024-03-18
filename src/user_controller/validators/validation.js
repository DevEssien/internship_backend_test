const { validationResult } = require("express-validator");
const { ValidationException } = require("../../libs/exceptions/index");

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) throw next(new ValidationException("Invalid Input", errors.errors));
	next();
};

module.exports = validate;
