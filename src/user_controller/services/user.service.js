const User = require("../../database/repositories/user.repo");

class UserService {
	static async getAllUsers() {
		const users = await User.getUsers();

		if (!users) throw new Error("no user");

		return {
			message: "Fetched All Users!",
			data: users,
		};
	}

	static async createUser(userData) {
		const { email } = userData;

		const foundUser = await User.getUserByEmail(email);
		if (foundUser) throw new Error("user already exist!");

		const newUser = await User.createUser({ ...userData });
		if (!newUser) throw new Error("Unable to create user!");

		return newUser;
	}
}

module.exports = UserService;
