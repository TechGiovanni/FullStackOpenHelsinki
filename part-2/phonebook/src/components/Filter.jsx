import React from "react";
const Filter = ({
	filterInput,
	currentValue,
	setCurrentValue,
	setFilterInput,
	setFilteredState,
	persons,
}) => {
	// Implemented the search feature for any letter typed, case sensitive
	const filterHandling = (event) => {
		if (event !== "") {
			// filtering the data
			const result = persons.filter((item, index) => {
				if (item.name.startsWith(event)) {
					// Sets the currentValue of the length of letters that are present/matched
					setCurrentValue(event.length);
					console.log("current Value:", event.length);
					return item.name.startsWith(event);
				} else {
					// Once the letters typed start to not match anything anymore
					// this else statement, returns a substring from 0 up until the letters doesn't match anymore and return the total of matching letters based on the substring of letters
					return item.name.startsWith(event.substring(0, currentValue));
				}
			});
			// If no results were found, return a message
			if (result.length < 1) {
				const nothing = [
					{
						name: "Nothing Found",
						number: "",
						id: persons.length + 1,
					},
				];
				return setFilteredState(nothing);
			} else {
				// return the items that were found from the filter
				return setFilteredState(result);
			}
		} else {
			// If the input is empty then set the data back to it's default state.
			return setFilteredState(persons);
			// return setFilteredState(persons);
		}
	};

	const setFilterInputHandler = (event) => {
		// set the input to what the user typed -> controlled flow
		// pass the current input to the filter handler
		setFilterInput(event.target.value);
		filterHandling(event.target.value);
	};

	return (
		<div>
			<p>
				Filter shown with:{" "}
				<input
					placeholder="Search"
					value={filterInput}
					onChange={setFilterInputHandler}
				/>
			</p>
		</div>
	);
};

export default Filter;
