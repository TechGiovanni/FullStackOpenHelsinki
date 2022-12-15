import React from "react";
import { useState } from "react";
import Person from "./components/Person";
import PersonalForm from "./components/PersonalForm";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [filterInput, setFilterInput] = useState("");
	const [filteredState, setFilteredState] = useState(persons);
	const [currentValue, setCurrentValue] = useState(null);

	// implemented a search feature for letter typed
	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
		// console.log("Persons data:", event.target.value.length);
		if (event.target.value !== "") {
			// filter the data
			const result = persons.filter((item, index) => {
				// console.log("items: ", item.name.toLowerCase());
				if (
					item.name
						.toLocaleLowerCase()
						.startsWith(event.target.value.toLowerCase())
				) {
					// sets the currentValue of the length of letters that are present/matched
					setCurrentValue(event.target.value.length);
					// console.log("currentValue:", currentValue);

					return item.name.toLowerCase().startsWith(event.target.value);
				} else {
					// once the letters typed starts to not match anything anymore, this else gets triggered
					// this else statement, filters the input already typed
					// and returns a substring from 0 up until the letters doesn't match anymore
					// and return the total of matching letters and
					return item.name
						.toLowerCase()
						.startsWith(filterInput.substring(0, currentValue));
				}
				// console.log("The Filtered item", item.name.toLowerCase());
			});
			return setFilteredState(result);
		} else {
			// if the input is empty then set the data back to it's default state
			return setFilteredState(persons);
		}
	};

	return (
		<div>
			<div>debug name: {newName}</div>
			<div>debug filter: {filterInput}</div>
			{/* Title  */}
			<h2>Phonebook</h2>
			{/* Filtering Data From User Input  */}
			<p>
				Filter shown with:{" "}
				<input
					placeholder="Search"
					value={filterInput}
					onChange={setFilterInputHandler}
				/>
			</p>
			{/* Add new people  */}
			<h3>Add new</h3>
			<PersonalForm
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				persons={persons}
				setPersons={setPersons}
			/>
			{/* render People  */}
			<h2>Numbers</h2>
			<Person filteredState={filteredState} />
		</div>
	);
};

export default App;
