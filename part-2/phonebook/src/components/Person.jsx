import React from "react";

const Person = (props) => {
	return (
		<>
			{props.filteredState.map((v) => {
				return (
					<div>
						<p key={v.id}>
							{v.name} {v.number} {"  "}
							<button>Delete</button> {"  "}
							<button>Update</button>
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Person;
