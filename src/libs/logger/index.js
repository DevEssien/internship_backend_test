const logger = (req) => {
	const info = `
        - requesting ${req.method} - ${req.baseUrl}${req.url}
    `;
	console.log(info);
};
module.exports = logger;
