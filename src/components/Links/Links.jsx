// import React from 'react';
import PropTypes from "prop-types"; // ES6

const Links = ({ route }) => {
	return (
		<div className="   bg-red-400 md:bg-cyan-700 md:border-none px-6 py-2 md:px-0 md:py-0 md:ml-0 ml-14 ">
			<li className="  text-center  m-4 md:m-9 lg:m-9" key={route.id}>
				<a
					className=" px-14 md:px-0 text-white text-xl md:text-xl font-medium"
					href={route.path}
				>
					{route.name}
				</a>
			</li>
		</div>
	);
};

export default Links;

Links.propTypes = {
	route: PropTypes.object,
};
