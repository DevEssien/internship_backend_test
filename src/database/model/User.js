const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
	{
		id: { type: String },
		email: { type: String },
		password: { type: String },
	},
	{ timestamps: true }
);

module.exports = model("User", UserSchema);
