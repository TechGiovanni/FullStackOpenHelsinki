import React from "react";
import Parts from "./Parts";

function Content(props) {
	// console.log(props.partAndExercises[0]);
	// destructuring assignment
	const [part1, exercises1, part2, exercises2, part3, exercises3] = props.parts;
	return (
		<div>
			<Parts part={part1} exercise={exercises1} />
			<Parts part={part2} exercise={exercises2} />
			<Parts part={part3} exercise={exercises3} />
		</div>
	);
}

export default Content;
