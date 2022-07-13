import React from "react";
import jogger2 from "../assets/StepN_jogger2.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

const Landing = () => {
	return (
		<div
			name="home"
			className="pt-[80px] w-full h-screen flex mx-auto px-5 flex-col"
		>
			<div className="flex mx-auto pb-10 flex-col my-10">
				<h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-center my-5">
					<a className="row-span-1 lg:text-6xl sm:text-5xl text-4xl font-bold text-center mt-[80px]  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Fitness
					</a>{" "}
					Shouldn't Cost You.
				</h1>
				<img
					className="object-scale-down mt-10 px-10"
					src={jogger2}
					alt="StepN Jogger NFT"
				/>
			</div>
			<div className="flex justify-center">
				<Link to="about" smooth={true} offset={-80} duration={500}>
					<MdOutlineKeyboardArrowDown className="cursor-pointer w-[50px] h-[50px] mt-[90px] md:mt-[-50px] sm:pb-1 animate-pulse animate-bounce " />
				</Link>
			</div>
		</div>
	);
};

export default Landing;
