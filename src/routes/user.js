const express = require("express");
const UserController = require("../user_controller/index");
const { endpointParamSchema } = require("../user_controller/validators/schemas");
const validate = require("../user_controller/validators/validation");

const { getAllUsers, getUserById, updateUser, deleteUserById } = UserController;

const router = express.Router();

router.get("/get-all", getAllUsers);

router.get("/get-one/:userId", endpointParamSchema, validate, getUserById);

router.put("/update-one/:userId", endpointParamSchema, validate, updateUser);

router.delete("/delete-one/:userId", endpointParamSchema, validate, deleteUserById);

module.exports = router;
