const config = require("../config");
const { app } = config;
const logger = require("../libs/logger/index");

class GeneralMiddleware {
	static ErrorHandler(error, req, res, next) {
		if (res.headersSent) return;

		if (["test", "producton"].includes(app.env)) console.log(error);

		if ("getType" in error) {
			return res.status(error.statusCode || 500).json({
				status: "error",
				statusCode: error.statusCode,
				name: error.name,
				timestamp: Date.now(),
				...(!error.errors
					? { message: error.message }
					: { message: error.message, errors: error.errors }),
				...(!["test", "production"].includes(app.env) ? { stack: error.stack } : {}),
			});
		}

		return res.status(500).json({
			status: "error",
			statusCode: 500,
			name: "InternalServerError",
			timestamp: Date.now(),
			message: "Something went wrong, please contact our support team",
			...(!["test", "production"].includes(app.env) ? { stack: error.stack } : {}),
		});
	}

	static NotfoundHandler(req, res, next) {
		return res.status(500).json({
			status: "error",
			statusCode: 404,
			name: "NotFoundError",
			timestamp: Date.now(),
			message: `${req.url} endpoint not found`,
		});
	}

	static DevLog(req, res, next) {
		logger(req);
		return next();
	}
}

module.exports = GeneralMiddleware;
