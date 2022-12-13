import React from "react";
import Parts from "./Parts";

function Content(props) {
	// console.log(props.parts.parts[0]);
	const { parts } = props.parts;

	return (
		<div>
			<Parts part={parts[0].name} exercise={parts[0].exercises} />
			<Parts part={parts[1].name} exercise={parts[1].exercises} />
			<Parts part={parts[2].name} exercise={parts[2].exercises} />
		</div>
	);
}

export default Content;
