import React from "react";
import Parts from "./Parts";

function Content(props) {
	// Loops through the array.
	// Grabbing each item, which are objects.
	// Transforming each object into it's own arrays.
	// Pushing the transformed array into a new array called title
	// And passing the title to the parts component to be rendered.
	const title = [];
	props.parts.parts.forEach((i) => {
		return title.push(Object.entries(i));
	});

	return (
		<div>
			<Parts part={title} />
		</div>
	);
}

export default Content;
