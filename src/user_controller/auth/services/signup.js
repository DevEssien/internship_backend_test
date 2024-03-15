const UserService = require("../../services/user.service");
const { generateJwt, hashPassword } = require("../../../utlls/index");

const TokenFlag = {
	AUTH: "authentication",
};

async function signup(createUserData) {
	const { password } = createUserData;

	const hashedPassword = await hashPassword(password);

	const newUser = await UserService.createUser({ ...createUserData, password: hashedPassword });

	//generate jwt
	const token = await generateJwt({
		id: createUserData?.id,
		flag: TokenFlag.AUTH,
		timestamp: Date.now(),
	});

	return {
		message: "Created a new User!",
		data: { createdUser: { ...newUser._doc, password: "hidden" } },
		token,
	};
}

module.exports = signup;
