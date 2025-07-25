// import React from 'react';
import Links from "../Links/Links";

import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const NavBar = () => {
	const routes = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/about", name: "About" },
		{ id: 3, path: "/services", name: "Services" },
		{ id: 4, path: "/contact", name: "Contact" },
		{ id: 5, path: "*", name: "Blogs" },
	];

	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-cyan-700 ">
			<div className="md:ml-0 ml-32" onClick={() => setOpen(!open)}>
				{open === true ? (
					<RiMenu2Fill className=" text-5xl mt-10 md:hidden ml-12 md:ml-0 lg:ml-0"></RiMenu2Fill>
				) : (
					<AiOutlineClose className=" text-5xl mt-10 md:hidden ml-12 md:ml-0 lg:ml-0"></AiOutlineClose>
				)}
			</div>

			<ul
				className={`md:relative absolute  ${
					open || window.innerWidth >= 768 ? "flex" : "hidden"
				} md:top-0 top-28 flex md:justify-end lg:justify-end flex-col md:flex-row lg:flex-row`}
			>
				{routes.map((route) => (
					<Links key={route.id} route={route}></Links>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
