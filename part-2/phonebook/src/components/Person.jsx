import React from "react";

const Person = (props) => {
	return (
		<>
			{props.filteredState.map((v) => {
				return (
					<p key={v.id}>
						{v.name} {v.number}
					</p>
				);
			})}
		</>
	);
};

export default Person;
