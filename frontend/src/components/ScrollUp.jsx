import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

const ScrollUp = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	});

	return (
		backToTopButton && (
			<div className="fixed bottom-5 right-5">
				<Link to="home" smooth={true} offset={-80} duration={500}>
					<MdOutlineKeyboardArrowUp className="w-[50px] h-[50px] mt-[100px] sm:mt-[-50px] cursor-pointer sm:pb-1 animate-pulse animate-bounce" />
				</Link>
			</div>
		)
	);
};

export default ScrollUp;
