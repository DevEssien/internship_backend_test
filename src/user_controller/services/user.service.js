const User = require("../../database/repositories/user.repo");

class UserService {
	async getAllUsers() {
		const users = await User.getAllUsers();
		if (users) throw new Error("no user");

		return {
			message: "Fetched All Users!",
			data: users,
		};
	}

	async createUser(userData) {
		const { email } = userData;

		const foundUser = await User.getUserByEmail(email);
		if (foundUser) throw new Error("user already exist!");

		const newUser = await User.createUser({ ...userData });
		if (!newUser) throw new Error("Unable to create user!");

		return {
			message: "Created a new User!",
			data: { createdUser: { ...newUser._doc, password: "hidden" } },
		};
	}
}

module.exports = UserService;
