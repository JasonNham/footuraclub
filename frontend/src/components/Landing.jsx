import React from "react";
import jogger2 from "../assets/StepN_jogger2.png";
import Helmet from "react-helmet";
import statue from "../assets/statue.png";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { Link } from "react-scroll";

const Landing = () => {
	return (
		<div
			name="home"
			className="pt-[100px] xl:pt-[150px] w-full h-screen md:h-fit lg:min-h-fit flex justify-center mx-auto px-5 flex-col"
		>
			<Helmet>
				<title>Footura Club</title>
				<meta name="title" content="Footura" data-react-helmet="true" />
				<meta
					name="description"
					content="Innovative Web3 Technology that rewards you for your fitness."
					data-react-helmet="true"
				/>
			</Helmet>
			<div className="flex mx-auto pb-10 flex-col my-10">
				<h1 className="sm:text-4xl lg:text-5xl text-3xl font-bold text-center sm:mt-5">
					<p className="inline-block row-span-1 lg:text-5xl sm:text-4xl text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Fitness
					</p>{" "}
					Shouldn't Cost You...
				</h1>
				{/* <img
					className="object-scale-down px-10 mt-[50px]"
					src={jogger2}
					alt="StepN Jogger NFT"
				/> */}
				<div className="grid grid-cols-6 gap-4 mt-[60px]">
					<img
						className="w-[600px] md:w-[450px] col-start-1 col-end-6 md:col-start-2 md:col-end-5"
						src={statue}
						alt="Statue Jogger"
					/>
				</div>
				<h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-center sm:mt-1">
					<p className="inline-block row-span-1 mt-[40px] xl:mt-[70px] lg:mb-[80px] lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Footura
					</p>
					: The Future of Move to Earn
				</h1>
			</div>
		</div>
	);
};

export default Landing;
