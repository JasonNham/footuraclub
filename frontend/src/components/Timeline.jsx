import React from "react";
import timeline from "../assets/timeline.jpg";
// import jogger2 from "../assets/StepN_jogger2.png";

const Timeline = () => {
	return (
		<div name="timeline">
			<img
				className="object-scale-down mt-10 px-10"
				src={timeline}
				alt="Footura Timeline"
			/>
		</div>
	);
};

export default Timeline;
