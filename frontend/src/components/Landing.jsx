import React from "react";
import jogger2 from "../assets/StepN_jogger2.png";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { Link } from "react-scroll";

const Landing = () => {
	return (
		<div
			name="home"
			className="pt-[40px] w-full h-fit md:h-screen flex justify-center mx-auto px-5 flex-col"
		>
			<div className="flex mx-auto pb-10 flex-col my-10">
				<h1 className="sm:text-4xl lg:text-5xl text-3xl font-bold text-center mt-[80px] sm:mt-5">
					<p className="inline-block row-span-1 lg:text-5xl sm:text-4xl text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Fitness
					</p>{" "}
					Shouldn't Cost You...
				</h1>
				<img
					className="object-scale-down px-10 mt-[50px]"
					src={jogger2}
					alt="StepN Jogger NFT"
				/>
				<h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-center mt-[80px] sm:mt-1">
					<p className="inline-block row-span-1 lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Footura
					</p>
					: The Future of Move to Earn
				</h1>
			</div>
		</div>
	);
};

export default Landing;
