const express = require("express");

const UserController = require("../user_controller/index");

const { getAllUsers, getUserById, updateUser, deleteUserById } = UserController;

const router = express.Router();

router.get("/get-all", getAllUsers);

router.get("/get-one/:userId", getUserById);

router.put("/update-one/:userId", updateUser);

router.delete("/delete-one/:userId", deleteUserById);

module.exports = router;
