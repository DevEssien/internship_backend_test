const express = require("express");

const AuthController = require("../user_controller/auth/index");

const { createUser, loginUser } = AuthController;

const router = express.Router();

router.post("/signup", createUser);

router.post("/login", loginUser);

module.exports = router;
