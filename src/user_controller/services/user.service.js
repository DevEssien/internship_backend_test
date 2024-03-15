const User = require("../../database/repositories/user.repo");

class UserService {
	static async getAllUsers() {
		const users = await User.getUsers();

		if (!users) throw new Error("no user");

		return {
			message: "Fetched All Users!",
			data: { ...users._doc, password: "hidden" },
		};
	}

	static async getUserById(_id) {
		const user = await User.getUserById(_id);
		if (user.length < 1) throw new Error("No record with this ID found!");

		return {
			message: "Fetched User Record!",
			data: { ...user._doc, password: "hidden" },
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

	static async updateUser(filter, updateUserDto) {
		const updatedUser = await User.updateUser(filter, updateUserDto);
		if (!updatedUser) throw new Error("Unable To Update User!");

		if (updatedUser.modifiedCount !== 1)
			throw new NotFoundException(
				`Expected 1 document to be modified, but found ${updatedUser.modifiedCount}`
			);

		return {
			message: "Updated User Successfully",
			data: { ...updatedUser, updatedUser: await User.getUserById(filter._id) },
		};
	}

	static async deleteUserById(filter) {
		const deletedUser = await User.deleteUserById(filter);

		if (!deletedUser) throw new Error("Unable To Delete User");

		if (deletedUser?.deletedCount === 0) throw new Error("User with ID Already Deleted");

		return {
			message: "Deleted User Successfully",
			data: { ...deletedUser, removedId: filter._id },
		};
	}
}

module.exports = UserService;
