const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		type: { type: String },
		genre: { type: String },
		content: { type: Array},
	},
	{ timestams: true }
);

module.export = mongoose.model("List", ListSchema);
