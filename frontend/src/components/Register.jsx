import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jogger from "../assets/StepN_jogger2.png";

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		location: "",
	});

	const [dataTest, setData] = useState(null);

	const { firstName, lastName, email, location } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			location: location,
			date: Date(),
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const body = JSON.stringify(newUser);

			// http://localhost:5000/waitlistUser
			// https://footura-api-b75b4.ondigitalocean.app/waitlistUser
			let res = await axios.post(
				"https://footura-api-b75b4.ondigitalocean.app/waitlistUser",
				body,
				config
			);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				location: "",
				date: "",
			});

			toast.success("Registration Successful!");

			setTimeout(function () {
				window.location.reload();
			}, 5000);
		} catch (err) {
			toast.warn("Email Already Exists!");
			console.error("error", err.response.data);
		}
	};

	const getWaitlistCount = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			await axios
				.get(
					"https://footura-api-b75b4.ondigitalocean.app/waitlistUser",
					config
				)
				.then((response) => {
					setData(response.data + 433);
				});
		} catch (err) {
			console.error("Unable to Retrieve Count".err);
		}
	};

	// Using useEffect to onload these functions
	useEffect(() => {
		getWaitlistCount();
	}, []);

	return (
		<div
			name="register"
			className="pt-[100px] w-full h-fit flex mx-auto mb-[20px] md:mb-[50px] px-5 pb-8 justify-start flex-col"
		>
			<ToastContainer className="mt-[100px]" />
			<div>
				<div className="flex mx-auto pb-10 flex-col my-1  items-center">
					<h1 className="sm:text-5xl  lg:text-6xl text-4xl z-10 font-bold text-center my-5">
						Ready to take the first
						<a className="ml-2 sm:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							Step
						</a>
						?
					</h1>
					<h3 className="text-center sm:text-4xl lg:text-5xl text-3xl z-10">
						Register Below
					</h3>
					<div className="text-lg mt-[50px] md:mt-[80px] md:text-2xl lg:text-3xl z-10 py-2 px-4 md:py4  md:px-10 lg:py-6 lg:px-12 bg-[#9f31e9] w-fit mx-auto mb-8 rounded-lg text-white">
						{dataTest} Waitlisted
					</div>
					<div className="flex mt-[40px]">
						<img
							className="object-scale-down md:w-[300px] w-[120px]"
							src={jogger}
							alt="StepN Jogger NFT"
						/>
					</div>
					<form
						id="userForm"
						class="justify-center mt-[20px] md:mt-[50px] w-2/3 md:w-1/3 flex flex-col z-10"
						onSubmit={(e) => onSubmit(e)}
					>
						<input
							id="email"
							name="firstName"
							type="text"
							class="mt-3 w-full h-[40px] bg-slate-300 placeholder-slate-500 text-slate-500 pl-4 rounded-2xl"
							required
							placeholder="First Name"
							value={firstName}
							onChange={(e) => onChange(e)}
						/>
						<input
							id="email"
							name="lastName"
							type="text"
							class="mt-3 w-full h-[40px] bg-slate-300 placeholder-slate-500 text-slate-500 pl-4 rounded-2xl"
							required
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => onChange(e)}
						/>
						<input
							id="email"
							name="email"
							type="email"
							class="mt-3 w-full h-[40px] bg-slate-300 placeholder-slate-500 text-slate-500 pl-4 rounded-2xl"
							required
							placeholder="info@footuraclub.com"
							value={email}
							onChange={(e) => onChange(e)}
						/>
						<label class="">
							<select
								name="location"
								required
								class="form-select mt-3 w-full h-[40px] bg-slate-300 text-slate-500 pl-4 rounded-2xl"
								value={location}
								onChange={(e) => onChange(e)}
							>
								<option value="" disabled selected>
									Select Your Location
								</option>
								<option value="International">International</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</label>
						<div className="w-full flex justify-end"></div>
						<button
							type="submit"
							form="userForm"
							class="rounded-md py-2 px-6 cursor-pointer tracking-wider text-md inline-table
											items-center text-center bg-[#9f31e9] text-white font-bold 
											hover:bg-purple-600 hover:shadow-purple mt-3 
            "
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
