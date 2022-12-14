import React from "react";

function Total(props) {
	console.log("total:", props.parts.parts);
	// Retrieve the parts from the props.
	// Using the reduce function to loop through the objects.
	// Target the exercises. Add and reassign the new value calculated to the total variable.
	// Save the reduce value in a variable called sum and passed it to be displayed.
	const sum = props.parts.parts.reduce((total, currentValue) => {
		total += currentValue.exercises;
		return total;
	}, 0);

	return (
		<div>
			<p>
				<strong>Total of {sum} exercises</strong>
			</p>
		</div>
	);
}

export default Total;
