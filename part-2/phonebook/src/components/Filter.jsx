import React from "react";

const Filter = ({
	filterInput,
	currentValue,
	setCurrentValue,
	setFilterInput,
	setFilteredState,
	persons,
}) => {
	// implemented a search feature for letter typed
	const filterHandling = (event) => {
		// setFilterInput(event.target.value);
		// console.log("Persons data:", event.target.value.length);
		console.log("filter input");
		if (event.target.value !== "") {
			// filter the data
			const result = persons.filter((item, index) => {
				console.log("inside result function");
				if (item.name.startsWith(event.target.value)) {
					// sets the currentValue of the length of letters that are present/matched
					setCurrentValue(event.target.value.length);
					// console.log("currentValue:", currentValue);
					console.log("currentValue:", currentValue);

					return item.name.startsWith(event.target.value);
				} else {
					// once the letters typed starts to not match anything anymore, this else gets triggered
					// this else statement, filters the input already typed
					// and returns a substring from 0 up until the letters doesn't match anymore
					// and return the total of matching letters and
					return item.name.startsWith(filterInput.substring(0, currentValue));
				}
				// console.log("The Filtered item", item.name.toLowerCase());
			});
			console.log("Exit result function");
			console.log("what is result", result);
			return setFilteredState(result);
		} else {
			// if the input is empty then set the data back to it's default state
			return setFilteredState(persons);
		}
	};

	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
		filterHandling(event);
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
