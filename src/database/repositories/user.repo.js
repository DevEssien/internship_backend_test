const { Model } = require("mongoose");
const UserModel = require("../model/User");

class User {
	static async getUsers() {
		return UserModel.find();
	}

	static async getUserById(_id) {
		return UserModel.findById(_id);
	}

	static async getUserByEmail(email) {
		return UserModel.findOne({ email });
	}

	static async createUser(userData) {
		if (typeof userData !== "object") throw new Error("not object");

		return UserModel.create(userData);
	}

	static async updateUser(filter, updateData) {
		return UserModel.updateOne(filter, updateData);
	}

	static async deleteUserById(_id) {
		return UserModel.deleteOne({ _id });
	}
}

module.exports = User;
