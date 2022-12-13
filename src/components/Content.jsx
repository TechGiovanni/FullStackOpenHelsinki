import React from "react";
import Parts from "./Parts";

function Content(props) {
	// console.log(props.partAndExercises[0]);
	return (
		<div>
			<Parts
				part={props.partAndExercises[0]}
				exercise={props.partAndExercises[1]}
			/>
			<Parts
				part={props.partAndExercises[2]}
				exercise={props.partAndExercises[3]}
			/>
			<Parts
				part={props.partAndExercises[4]}
				exercise={props.partAndExercises[5]}
			/>
		</div>
	);
}

export default Content;
