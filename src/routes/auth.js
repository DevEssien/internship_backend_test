const express = require("express");

const AuthController = require("../user_controller/auth/index");

const { createUser } = AuthController;

const router = express.Router();

router.post("/signup", createUser);

module.exports = router;
