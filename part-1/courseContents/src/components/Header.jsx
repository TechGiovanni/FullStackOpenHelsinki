import React from "react";

function Header(props) {
	// grabs any name passed in from the props. targeting the title's name
	return (
		<>
			<h1>{props.course.name}</h1>
		</>
	);
}

export default Header;
