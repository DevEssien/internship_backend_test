const { decodeToken } = require("../utlls/index");
const User = require("../database/repositories/user.repo");
const {
	AuthenticationException,
	AuthorizationException,
	InternalServerException,
} = require("../libs/exceptions/index");

class AuthMiddleware {
	static async Authenticate(req, res, next, TokenFlag = "authentication") {
		const authorization = req.header("authorization") || "";
		const [, token] = authorization.split(" ");

		try {
			if (!token) return next(new AuthenticationException("No Bearer Token!"));

			const { _id, flag } = await decodeToken(token);

			if (!_id) return next(new AuthenticationException("Unable to verify token"));

			if (!flag) return next(new AuthenticationException(`Token is not valid for ${TokenFlag}`));

			const user = await User.getUserById(_id);

			req.session = {
				token,
				user,
			};

			next();
		} catch (error) {
			switch (error.name) {
				case "TokenExpiredError":
					return next(new AuthorizationException("Token has Expired!"));

				case "jsonWebTokenError":
					return next(new InternalServerException(error.message));
				default:
					console.log("entered the auth catch default block", error.name, error.message);
					return next(error);
			}
		}
	}
}

module.exports = AuthMiddleware;
