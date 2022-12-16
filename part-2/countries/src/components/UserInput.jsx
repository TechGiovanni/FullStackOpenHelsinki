import React from "react";

const UserInput = ({
	userInput,
	setUserInput,
	baseData,
	FilteringData,
	setFilteringData,
	currentValue,
	setCurrentValue,
}) => {
	const filterHandler = (event) => {
		// console.log(event);
	};

	const userInputHandler = (event) => {
		setUserInput(event.target.value);
		filterHandler(event.target.value);
	};
	return (
		<>
			<input
				type="text"
				placeholder={"Search Country..."}
				value={userInput}
				onChange={userInputHandler}
			/>
		</>
	);
};

export default UserInput;
