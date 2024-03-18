const User = require("../../database/repositories/user.repo");
const {
	NotFoundException,
	ResourceConflictException,
	InternalServerException,
	ServiceException,
} = require("../../libs/exceptions/index");

class UserService {
	static async getAllUsers() {
		const users = await User.getUsers();

		if (!users) throw new NotFoundException("no user");

		return {
			message: "Fetched All Users!",
			data: { users },
		};
	}

	static async getUserById(_id) {
		const user = await User.getUserById(_id);
		if (user.length < 1) throw new NotFoundException("No record with this ID found!");

		return {
			message: "Fetched User Record!",
			data: { ...user._doc, password: "hidden" },
		};
	}

	static async createUser(userData) {
		const { email } = userData;

		const foundUser = await User.getUserByEmail(email);
		if (foundUser) throw new ResourceConflictException("user already exist!");

		const newUser = await User.createUser({ ...userData });
		if (!newUser) throw new InternalServerException("Unable to create user!");

		return newUser;
	}

	static async updateUser(filter, updateUserDto) {
		const updatedUser = await User.updateUser(filter, updateUserDto);
		if (!updatedUser) throw new InternalServerException("Unable To Update User!");

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

		if (!deletedUser) throw new InternalServerException("Unable To Delete User");

		if (deletedUser?.deletedCount === 0) throw new ServiceException("User with ID Already Deleted");

		return {
			message: "Deleted User Successfully",
			data: { ...deletedUser, removedId: filter._id },
		};
	}
}

module.exports = UserService;
