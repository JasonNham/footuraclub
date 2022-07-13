import React, { useState, useEffect } from "react";
import axios from "axios";

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
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const body = JSON.stringify(newUser);

			// BE SURE TO TEST OUT USING A PROXY INSTEAD IN PACKAGE.JSON
			await axios.post("http://localhost:5000/waitlistUser", body, config);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				location: "",
			});
			window.location.reload();
		} catch (err) {
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
				.get("http://localhost:5000/waitlistUser", config)
				.then((response) => {
					setData(response.data + 381);
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
			<div>
				<div className="flex mx-auto pb-10 flex-col my-1  items-center">
					<h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-center my-5">
						Ready to take the first
						<a className="ml-2 sm:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							Step
						</a>
						?
					</h1>
					<h3 className="text-center sm:text-4xl lg:text-5xl text-3xl">
						Register Below
					</h3>
					<div className="text-lg mt-[50px] md:mt-[100px] md:text-2xl lg:text-3xl py-2 px-4 md:py4  md:px-10 lg:py-6 lg:px-12 bg-[#9f31e9] w-fit mx-auto mb-8 rounded-lg text-white">
						{dataTest} Waitlisted
					</div>
					<form
						id="userForm"
						class="justify-center mt-[20px] md:mt-[50px] w-2/3 md:w-1/3 flex flex-col"
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
								<option>Los Angeles, CA</option>
								<option>New York, NY</option>
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