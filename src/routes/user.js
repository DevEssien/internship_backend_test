const express = require("express");

const UserController = require("../user_controller/index");

const { getAllUsers } = UserController;

const router = express.Router();

router.get("/get-all", getAllUsers);

module.exports = router;
