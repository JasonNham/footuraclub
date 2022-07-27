const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
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
	res.send({
		message: "Footura Club 🚀",
		location: process.env.RUNNING_LOCATION,
	});
});

app.route("/testRoute").get(async (req, res) => {
	res.send({
		status: "Route Operational",
	});
});

/* 
	[waitlistUser]:
*/
app
	.route("/waitlistUser")
	// POST : Allows a user to register into the waitlist
	.post(async (req, res) => {
		let newUser = new WaitlistUser(req.body);

		const existing = await WaitlistUser.find({ email: req.body.email });

		if (existing.length < 1) {
			newUser.save((err, waitlistedUser) => {
				if (err) {
					res.send(err);
				}
				console.log({ resStatus: 0, waitlistedUser });
				res.json({ resStatus: 0, waitlistedUser });
			});
		} else {
			console.log({ resStatus: 1, Response: "Email Already Exists" });
			res.status(400).send({ error: "Email Already Exists" });
		}
	})
	// GET : retrieves the number of waitlisted users
	.get(async (req, res) => {
		const count = await WaitlistUser.count();
		res.json(count);
	});

/*	By formating the way below we can make our code more readable using 
	.route instead of the above format 
*/
app.route("/user").post((req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
