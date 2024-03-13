const User = require("../../../database/repositories/user.repo");
const { comparePassword, generateJwt } = require("../../../utlls/index");

const TokenFlag = {
	AUTH: "authentication",
};
async function login(userLoginFields) {
	const { email, password } = userLoginFields;

	const user = await User.getUserByEmail(email);
	if (!user) throw new Error("No usser found!");

	const matchedPassword = await comparePassword(password, user.password);
	if (!matchedPassword) throw new Error("Incorrect Password!");

	const token = await generateJwt({
		id: user.id,
		flag: TokenFlag.AUTH,
		timestamp: Date.now(),
	});

	responseData = {
		message: "User Logged in Successfully",
		data: { ...user._doc, password: "hidden" },
		token: {
			flag: TokenFlag.AUTH,
			value: token,
		},
	};

	return responseData;
}

module.exports = login;
