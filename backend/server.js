const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const WaitlistUser = require("./models/WaitlistUser");

const app = express();

connectDB();

// Init middleware
// parse application /x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//parse applications/json
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + "/public"));

// CRUD operations
// @path / WaitlistUser
// @desc adding a new waitlisted user
// @method post
// @access public

app.route("/").get(async (req, res) => {
	res.send({ message: "Footura Club 🚀" });
});
app.route("/waitlistUser").post(async (req, res) => {
	let newUser = new WaitlistUser(req.body);

	const existing = await WaitlistUser.find({ email: req.body.email });

	if (existing.length < 1) {
		newUser.save((err, waitlistedUser) => {
			if (err) {
				res.send(err);
			}
			res.json(waitlistedUser);
		});
	} else {
		console.log("Email Already Exists!");
		res.json("Email Already Exists!");
	}
});
app.route("/waitlistUser").get(async (req, res) => {
	const count = await WaitlistUser.count();
	res.json(count);
});

/*	By formating the way below we can make our code more readable using 
	.route instead of the above format 
*/
app
	.route("/user")
	.post((req, res) => {
		console.log(req.body);
		res.send(req.body);
	})
	.delete((req, res) => {
		res.send(`delete request is sending on port ${PORT}`);
	});

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
