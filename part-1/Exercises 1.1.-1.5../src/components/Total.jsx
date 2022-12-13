import React from "react";

function Total(props) {
	// console.log(props.parts.parts);
	// console.log('props value is', props)
	const { parts } = props.parts;
	return (
		<div>
			<p>
				Number of exercises{" "}
				{parts[0].exercises + parts[1].exercises + parts[2].exercises}
			</p>
		</div>
	);
}

export default Total;
