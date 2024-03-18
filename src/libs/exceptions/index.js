const APIError = require("../../core/APIError");

class ServiceException extends APIError {
	constructor(message = "Malformed or Invalid Request Parameters!") {
		super(message, 400);
	}
}

class AuthenticationException extends APIError {
	constructor(message = "Authentication Failed!") {
		super(message, 401);
	}
}

class AuthorizationException extends APIError {
	constructor(message = "Unauthorized!") {
		super(message, 403);
	}
}

class NotFoundException extends APIError {
	constructor(message = "Not Found!") {
		super(message, 404);
	}
}
class ResourceConflictException extends APIError {
	constructor(message = "Already Exist!") {
		super(message, 409);
	}
}

class ValidationException extends APIError {
	constructor(message = "Invalid Input!", errors = []) {
		super(message, 422);
		this.errors = errors;
	}
}

class InternalServerException extends APIError {
	constructor(message = "Internal Server Error") {
		super(message, 500);
	}
}

module.exports = {
	ServiceException,
	AuthenticationException,
	AuthorizationException,
	NotFoundException,
	ResourceConflictException,
	ValidationException,
	InternalServerException,
};
