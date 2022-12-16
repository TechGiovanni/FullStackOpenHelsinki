import React from "react";

const UserInput = ({ userInput, setUserInput }) => {
	const userInputHandler = (event) => {
		setUserInput(event.target.value);
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
