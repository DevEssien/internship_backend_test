const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

const mockedUsers = [
	{
		name: "Treasure Obisike",
		email: "treasure@gmail.com",
		password: "123456",
	},
	{
		name: "Essien Emmanuel",
		email: "essien@gmail.com",
		password: "222222",
	},
	{
		name: "Itadori Yuji",
		email: "yuji@gmail.com",
		password: "123456",
	},
];

app.get("/api/users", (req, res) => {
	return res.status(200).json({
		message: "Getting mocked users",
		data: mockedUsers,
	});
});

module.exports = app;
