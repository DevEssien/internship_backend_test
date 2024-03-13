const { wrapHandler } = require("../utlls/serviceWrapper");
const UserService = require("./services/user.service");

class UserController {
	static async getAllUsers(req, res, next) {
		return wrapHandler(() => {
			return {
				service: UserService.getAllUsers(),
				requestHandler: { req, res, next },
			};
		});
	}

	static async getUserById(req, res, next) {
		return wrapHandler(() => {
			const _id = req.params?.userId;
			return {
				service: UserService.getUserById(_id),
				requestHandler: { req, res, next },
			};
		});
	}

	static async updateUser(req, res, next) {
		return wrapHandler(() => {
			const _id = req.params?.userId;
			const updateUserData = { ...req.body };
			return {
				service: UserService.updateUser({ _id }, updateUserData),
				requestHandler: { req, res, next },
			};
		});
	}
	static async deleteUserById(req, res, next) {
		return wrapHandler(() => {
			const _id = req.params?.userId;
			return {
				service: UserService.deleteUserById(_id),
				requestHandler: { req, res, next },
			};
		});
	}
}

module.exports = UserController;
