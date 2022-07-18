import React from "react";

// text-[#e943ff]

const Hero = () => {
	return (
		<div name="about" className="bg-[#9f31e9] w-full md:h-screen py-10">
			<div className="max-w-[1400px] mx-auto flex flex-col justify-top mt-4 px-6 pt-3">
				<h1 className="md:text-7xl text-6xl font-bold text-center text-[#ffffff]">
					Our Mission
				</h1>
				<div className="flex flex-col mt-10 w-full">
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Footura: Web3 Fintech that Connects Move to Earn to the Metaverse
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Footura: Web3 Fintech that Connects Move to Earn to the Metaverse.
						With user friendly Web3 technology, Footura will establish a bridge
						from the Move to Earn business to the Metaverse that users create,
						in effect, by exercising and achieving hirer levels.
					</p>
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Gamify The Workout Experience
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Working out shouldn't feel like a chore. With Footura Club users
						will look forward to their workout experience by accomplishing
						achievements in the game, competiting directly with other users,
						comparing statistics and awards and customizing their own unique NFT
						shoes and Metaverse Locker rooms.
					</p>
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Rewards and Control Over Data
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Most applications track and sell your data without your approval.
						Footura will allow most users to not only earn rewards but also
						control and aggregate data, thus allowing them to sell or earn
						substancial rewards for such data.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
