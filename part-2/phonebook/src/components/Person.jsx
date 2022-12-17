import React from "react";

const Person = (props) => {
	return (
		<>
			{props.filteredState.map((v) => {
				return (
					<div>
						<p key={v.id}>
							{v.name} {v.number} {"  "}
							<button onClick={() => props.destroy(v.id)}>Delete</button> {"  "}
							<button onClick={() => props.updatePerson(v.id)}>Update</button>
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Person;
