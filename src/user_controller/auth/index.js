const { wrapHandler } = require("../../utlls/serviceWrapper");
const Signup = require("./services/signup");

class AuthController {
	static async createUser(req, res, next) {
		return wrapHandler(() => {
			return {
				service: Signup({ ...req.body }),
				requestHandler: { req, res, next },
			};
		});
	}
}

module.exports = AuthController;
