import React from "react";

function Parts(props) {
	// Targets the array,
	// Map/loop through each array and retrieve specific data from the array,
	// 0: (2) ['name', 'Fundamentals of React']
	// 1: (2) ['exercises', 10]
	// 2: (2) ['id', 1]
	return (
		<>
			{props.part.map((item) => {
				return (
					<p key={item[2][1]}>
						{item[0][1]} {item[1][1]}
					</p>
				);
			})}{" "}
		</>
	);
}

export default Parts;
