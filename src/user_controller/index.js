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
}

module.exports = UserController;
