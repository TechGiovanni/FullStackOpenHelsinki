import React from "react";

const Filter = ({
	filterInput,
	currentValue,
	setCurrentValue,
	setFilterInput,
	setFilteredState,
	persons,
	filteredState,
}) => {
	// implemented a search feature for letter typed
	const filterHandling = (event) => {
		// console.log("filter input");
		if (event !== "") {
			console.log("Persons data:", event);
			// filter the data
			const result = persons.filter((item, index) => {
				console.log("inside result function");
				if (item.name.startsWith(event)) {
					// sets the currentValue of the length of letters that are present/matched
					setCurrentValue(event.length);
					// console.log("currentValue:", currentValue);

					console.log("currentValue:", currentValue);
					return item.name.startsWith(event);
				} else {
					// once the letters typed starts to not match anything anymore, this else gets triggered
					// this else statement, filters the input already typed
					// and returns a substring from 0 up until the letters doesn't match anymore
					// and return the total of matching letters and
					return item.name.startsWith(event.substring(0, currentValue));
				}
			});
			// console.log("Exit result function");
			if (result.length < 1) {
				const nothing = [
					{
						name: "Nothing Found",
						number: "",
						id: persons.length + 1,
					},
				];
				console.log("Inside the if Statment", nothing);
				console.log("what is result", result.length);
				return setFilteredState(nothing);
			} else {
				console.log("what is result", result.length);
				return setFilteredState(result);
			}
		} else {
			// if the input is empty then set the data back to it's default state
			return setFilteredState(persons);
		}
	};

	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
		console.log("target:", event.target.value);
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
