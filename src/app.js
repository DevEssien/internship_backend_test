const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const User = require("./database/repositories/user.repo");

const app = express();
const apiBase = "/api/users";
app.use(bodyParser.json());

app.use(apiBase, UserRouter);
app.use(apiBase, AuthRouter);

// const mockedUsers = [
// 	{
// 		name: "Treasure Obisike",
// 		email: "treasure@gmail.com",
// 		password: "123456",
// 	},
// 	{
// 		name: "Essien Emmanuel",
// 		email: "essien@gmail.com",
// 		password: "222222",
// 	},
// 	{
// 		name: "Itadori Yuji",
// 		email: "yuji@gmail.com",
// 		password: "123456",
// 	},
// ];

// app.get("/api/users", async (req, res) => {
// 	const user = await User.getUsers();
// 	// const user = await User.createUser({
// 	// 	name: "test",
// 	// 	email: "test",
// 	// 	password: "test",
// 	// });
// 	return res.status(200).json({
// 		message: "Getting mocked users",
// 		data: user,
// 	});
// });

module.exports = app;
