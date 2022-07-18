import React from "react";
import timeline from "../assets/timeline.jpg";
// import jogger2 from "../assets/StepN_jogger2.png";

const Timeline = () => {
	return (
		<div name="timeline" className="flex justify-center flex-col">
			<h1 className="row-span-1 md:text-7xl sm:text-6xl text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
				Roadmap
			</h1>
			<img
				className="object-scale-down justify-start w-screen"
				src={timeline}
				alt="Footura Timeline"
			/>
		</div>
	);
};

export default Timeline;
