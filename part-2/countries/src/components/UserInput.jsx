import React from "react";

const UserInput = ({
	userInput,
	setUserInput,
	baseData,
	currentValue,
	setCurrentValue,
	filteringData,
	setFilteringData,
}) => {
	const userInputHandler = (event) => {
		setUserInput(event.target.value);
	};
	return (
		<>
			<div>
				<p>Find countries:</p>

				<input
					type="text"
					placeholder={"Search Country..."}
					value={userInput}
					onChange={userInputHandler}
				/>
			</div>
		</>
	);
};

export default UserInput;
