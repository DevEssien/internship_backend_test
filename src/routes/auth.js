const express = require("express");
const { body } = require("express-validator");

const AuthController = require("../user_controller/auth/index");
const validate = require("../user_controller/validators/validation");
const { signupSchema, loginSchema } = require("../user_controller/validators/schemas");

const { createUser, loginUser } = AuthController;

const router = express.Router();

router.post(
	"/signup",
	[
		body("name").isString().trim(),
		body("email").isString().trim().isEmail(),
		body("password").isString().isAlphanumeric().isLength({ min: 6 }),
	],
	validate,
	createUser
);

router.post("/login", loginSchema, validate, loginUser);

module.exports = router;
