exports.wrapHandler = async (handler) => {
	const { requestHandler, service } = handler();
	const { res, next } = requestHandler;

	try {
		const {
			token = null,
			data,
			message = "The request was successful!",
			statusCode = 200,
		} = await service;

		return res.status(200).json({
			status: "success",
			statusCode,
			message,
			data,
			token,
		});
	} catch (error) {
		next(error);
	}
};
