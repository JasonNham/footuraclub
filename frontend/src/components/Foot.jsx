import React from "react";

const Foot = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center mx-auto py-15 px-4 bg-[#e943ff] h-[200px]">
			<h1 className="text-white md:text-5xl sm:text-4xl text-2xl mb-10">
				Want more information?
			</h1>
			<div className="flex sm:flex-row flex-col justify-between items-center md:w-[500px]">
				<div className="mb-4">
					<a className="text-white " href="mailto:info@footuraclub.com">
						info@footuraclub.com
					</a>
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default Foot;
