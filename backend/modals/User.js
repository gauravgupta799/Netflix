const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: { type: String, required: true },
		password: { type: String, required: true },
		profilePic: { type: String, default: "" },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestams: true }
);


module.exports = mongoose.model("User", UserSchema);