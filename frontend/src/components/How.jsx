import React from "react";

import { BsFillPhoneFill } from "react-icons/bs";
import { GiRunningShoe, GiRun } from "react-icons/gi";
import { MdPaid } from "react-icons/md";
import jogger2 from "../assets/StepN_jogger2.png";

import runData from "../assets/rundata.jpg";
import shoeStats from "../assets/shoestats.jpg";

const How = () => {
	return (
		<div name="howItWorks" className="bg-[#ffffff] w-full md:h-screen">
			<div className="w-full mx-auto h-full grid md:grid-rows-3 auto-rows-auto justify-top px-8">
				<div className="">
					<h1 className="row-span-1 md:text-7xl sm:text-6xl text-5xl font-bold text-center mt-[80px] md:mb-[80px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						How it works?
					</h1>
					<p className="text-center md:text-4xl sm:text-2xl text-2xl font-bold mt-10 text-[#464646]">
						We utilize innovative Web3 technologies that will reward runner's on
						our platform for their workouts.
					</p>
				</div>
				<div className="row-span-2 mt-[5px] md:mt-[150px]">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 ">
						<div className="text-center flex flex-col mx-4 h-[200px]">
							<div className="row-span-1 mb-[50px] h-[50px] flex justify-center">
								<BsFillPhoneFill className="w-[50px] h-[50px]" />
							</div>
							<p className="row-span-2 align-top">
								Users can download the Footura app on their smartphone to start
								earning from their workouts
							</p>
						</div>
						<div className="text-center flex flex-col mx-4 h-[200px]">
							<div className="row-span-1 mb-[50px] h-[50px] flex justify-center">
								<img
									className="object-scale-down w-[70px] h-[50px]"
									src={jogger2}
									alt="StepN Jogger NFT"
								/>
							</div>
							<p className="row-span-2">
								After you download the app, users can equip their account with
								the proper NFT to fit their workout needs.
							</p>
						</div>
						<div className="text-center flex flex-col mx-4 h-[200px]">
							<div className="row-span-1 mb-[50px] h-[50px] flex justify-center">
								<GiRun className="w-[50px] h-[50px]" />
							</div>
							<p className="row-span-2">
								By utilizing the Footura app users can walk, jog or run to earn
								tokens.
							</p>
						</div>
						<div className="text-center flex flex-col mx-4 h-[200px]">
							<div className="row-span-1 mb-[50px] h-[50px] flex justify-center">
								<MdPaid className="w-[50px] h-[50px]" />
							</div>
							<p className="row-span-2">
								You're in control. Upgrade your Footura NFTs to increase
								earnings, sell your fitness data, or choose to cash out your
								Footura tokens.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default How;
