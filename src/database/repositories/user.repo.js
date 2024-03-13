const { Model } = require("mongoose");
const UserModel = require("../model/User");

class User {
	async getUsers() {
		return UserModel.find();
	}

	async getUserById(id) {
		return UserModel.findById(id);
	}

	async getUserByEmaili(email) {
		return UserModel.findOne({ email });
	}

	async createUser(userData) {
		if (typeof userData !== "object") throw new Error("not object");

		return UserModel.create(userData);
	}

	async updateUser(filter, updateData) {
		return UserModel.updateOne(filter, updateData);
	}

	async deleteUser(filter) {
		return UserModel.deleteOne(filter);
	}
}

module.exports = User;
