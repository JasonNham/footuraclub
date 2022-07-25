const { builtinModules } = require("module");
const mongoose = require("mongoose");

const WaitlistUserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	location: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

module.exports = WaitlistUser = mongoose.model(
	"WaitlistUser",
	WaitlistUserSchema
);
