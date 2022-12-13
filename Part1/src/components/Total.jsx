import React from "react";

function Total(props) {
	console.log(props.parts);
	return (
		<div>
			<p>
				Number of exercises{" "}
				{props.parts[0].exercises +
					props.parts[1].exercises +
					props.parts[2].exercises}
			</p>
		</div>
	);
}

export default Total;
