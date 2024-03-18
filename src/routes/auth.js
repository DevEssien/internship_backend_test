const express = require("express");
const AuthController = require("../user_controller/auth/index");
const validate = require("../user_controller/validators/validation");
const { signupSchema, loginSchema } = require("../user_controller/validators/schemas");

const { createUser, loginUser } = AuthController;

const router = express.Router();

router.post("/signup", signupSchema, validate, createUser);

router.post("/login", loginSchema, validate, loginUser);

module.exports = router;
