import React from "react";

// text-[#e943ff]

const Hero = () => {
	return (
		<div name="about" className="bg-[#9f31e9] w-full h-fit md:h-[80vh] py-10">
			<div className="max-w-[1400px] mx-auto flex flex-col justify-top mt-4 px-6">
				<h1 className="md:text-7xl text-6xl font-bold text-center text-[#ffffff]">
					Our Mission
				</h1>
				<div className="flex flex-col mt-10 w-full">
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Bridge The Gap Between Web2 and Web3
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Current Web3 technologies are complex, and hard for new users to
						understand. We plan to make this process simple with a convenient
						mobile app for users to interact with.
					</p>
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Gamify The Workout Experience
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Working out shouldn't feel like a chore. With Footura Club users
						will look forward to their workout experience by leveling up their
						NFT's, comparing in-game stats with other users, and customizing
						their own unique items.
					</p>
					<h1 className="my-4 text-3xl text-center md:text-left md:text-2xl text-[#ffffff]">
						Power In The Hands of The User
					</h1>
					<p className="my-4 text-1xl text-center md:text-left md:text-xl text-[#ffffff]">
						Most applications track and sell your data without your approval.
						With Footura, not only will you be able to earn rewards by
						exercising, you can also choose to sell your fitness data.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
