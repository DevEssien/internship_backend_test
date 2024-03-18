class APIError extends Error {
	constructor(message, statusCode = 400) {
		super(message);

		this.name = this.constructor.name;
		this.errorType = "APIError";

		Error.captureStackTrace(this, this.constructor);
	}

	getType() {
		return this.errorType;
	}
}
module.exports = APIError;
