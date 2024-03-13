const app = require("./app");
const config = require("./config");

const PORT = config.app.port;

app.listen(PORT, () => {
	console.log(`- App environment:: ${PORT}`);
}).on("error", (error) => {
	if (error.code === "EADDRINUSE") console.log("Error: Address already in use!");
	else console.log(error);
});
