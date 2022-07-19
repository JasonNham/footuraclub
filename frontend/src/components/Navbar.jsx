import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const handleClose = () => setNav(!nav);

	return (
		<div className="fixed w-screen h-[80px] z-50 bg-[#ebebeb] drop-shadow-xl border-b border-solid border-[1px] border-[#dadada]">
			<div className="px-6 flex justify-between items-center w-screen h-full">
				<div className="flex items-center justify-between w-10/12">
					<h1 className="text-3xl font-bold sm:text-4xl text-[#e943ff] cursor-pointer group">
						<Link to="home" smooth={true} offset={0} duration={500}>
							Footura
						</Link>
					</h1>
					<ul className="hidden md:flex md md:pt-2 mx-4 ">
						<li className="text-lg cursor-pointer group">
							<Link to="home" smooth={true} offset={0} duration={500}>
								Home
							</Link>
							<div className="w-full h-[3px] bg-[#e943ff] scale-x-0 group-hover:scale-x-100 transition-transform" />
						</li>
						<div class="">
							<div className="absolute border-r-2 h-[30px] align-middle border-[#dadada] mt-4"></div>
						</div>
						<li className=" text-lg cursor-pointer group">
							<Link to="about" smooth={true} offset={-80} duration={500}>
								About
							</Link>
							<div className="w-full h-[3px] bg-[#e943ff] scale-x-0 group-hover:scale-x-100 transition-transform" />
						</li>
						<div class="">
							<div className="absolute border-r-2 h-[30px] align-middle border-[#dadada] mt-4"></div>
						</div>
						<li className="text-lg cursor-pointer group">
							<Link to="howItWorks" smooth={true} offset={-80} duration={500}>
								How It Works
							</Link>
							<div className="w-full h-[3px] bg-[#e943ff] scale-x-0 group-hover:scale-x-100 transition-transform" />
						</li>
						<div class="">
							<div className="absolute border-r-2 h-[30px] align-middle border-[#dadada] mt-4"></div>
						</div>
						<li className="text-lg cursor-pointer group">
							<Link to="timeline" smooth={true} offset={-150} duration={500}>
								Roadmap
							</Link>
							<div className="w-full h-[3px] bg-[#e943ff] scale-x-0 group-hover:scale-x-100 transition-transform" />
						</li>
					</ul>
				</div>
				<div className="hidden md:flex mr-4">
					<button className="px-6 py-3">
						<Link to="register" smooth={true} offset={-50} duration={500}>
							Register
						</Link>
					</button>
				</div>
				<div className="md:hidden" onClick={handleClick}>
					{!nav ? (
						<MenuIcon className="w-6 mx-3" />
					) : (
						<XIcon className="w-6 mx-3" />
					)}
				</div>
			</div>
			<ul
				className={
					!nav
						? "hidden md:hidden"
						: "fixed bg-[#f5f5f5] w-screen px-8 md:hidden"
				}
			>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="home"
						smooth={true}
						offset={0}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="about"
						smooth={true}
						offset={-100}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="border-b-2 border-zinc-300 w-full">
					<Link
						onClick={handleClose}
						to="howItWorks"
						smooth={true}
						offset={-50}
						duration={500}
					>
						How It Works
					</Link>
				</li>
				<li className=" w-full">
					<Link
						onClick={handleClose}
						to="timeline"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Roadmap
					</Link>
				</li>
				<div className="flex flex-col my-4">
					<button className="px-8 py-3">
						<Link
							onClick={handleClose}
							to="register"
							smooth={true}
							offset={-50}
							duration={500}
						>
							Register
						</Link>
					</button>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
