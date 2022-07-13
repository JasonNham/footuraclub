import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="flex justify-between items-center h-24 w-screen  mx-auto px-4 text-black">
			<h1
				className="text-center md:text-left pl-3
                    w-full text-3xl font-bold text-[#e943ff]"
			>
				Footura Club.
			</h1>
			<ul className="hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">placehold</li>
				<li className="p-4">Earnings</li>
				<li className="p-4">Register</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					!nav
						? "fixed left-0 top-0 w-[60%] h-full border-r bg-[#fafafa] ease-in-out duration-500"
						: "fixed left-[-100%] top-0 ease-in-out duration-500"
				}
			>
				{/* <h1 className='w-full text-3xl font-bold pt-3.5 text-[#e943ff] m-4'>Footura Club.</h1> */}
				<ul className="uppercase p-4">
					<li className="p-4 border-b border-gray-300">Home</li>
					<li className="p-4 border-b border-gray-300">About</li>
					<li className="p-4 border-b border-gray-300">Earnings</li>
					<li className="p-4">Register</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
