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
		// console.log("event", event);
		// const result = () => {
		// 	if (event !== "") {
		// 		baseData.filter((item, index) => {
		// 			console.log("item", "inside");
		// 			// if (item.name.startsWith(event)) {
		// 			// }
		// 		});
		// 	} else {
		// 		return setFilteringData({
		// 			name: "Type a country",
		// 		});
		// 	}
		// };
		// return result;
	};

	const userInputHandler = (event) => {
		setUserInput(event.target.value);
		// filterHandler(event.target.value);
	};
	return (
		<>
			<div>
				<p>Debug: {userInput}</p>
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
