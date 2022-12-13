import React from "react";
import Parts from "./Parts";

function Content(props) {
	// console.log(props.partAndExercises[0]);
	return (
		<div>
			<Parts
				part={props.partsAndExercises[0]}
				exercise={props.partsAndExercises[1]}
			/>
			<Parts
				part={props.partsAndExercises[2]}
				exercise={props.partsAndExercises[3]}
			/>
			<Parts
				part={props.partsAndExercises[4]}
				exercise={props.partsAndExercises[5]}
			/>
		</div>
	);
}

export default Content;
