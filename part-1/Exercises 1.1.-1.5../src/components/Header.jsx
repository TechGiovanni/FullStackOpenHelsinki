import React from "react";

function Header({ course }) {
	const { name } = course;
	return (
		<>
			<h1>{name}</h1>
		</>
	);
}

export default Header;
