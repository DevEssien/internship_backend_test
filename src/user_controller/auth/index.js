const { wrapHandler } = require("../../utlls/serviceWrapper");
const Signup = require("./services/signup");
const Login = require("./services/login");

class AuthController {
	static async createUser(req, res, next) {
		return wrapHandler(() => {
			return {
				service: Signup({ ...req.body }),
				requestHandler: { req, res, next },
			};
		});
	}

	static async loginUser(req, res, next) {
		return wrapHandler(() => {
			return {
				service: Login({ ...req.body }),
				requestHandler: { req, res, next },
			};
		});
	}
}

module.exports = AuthController;
