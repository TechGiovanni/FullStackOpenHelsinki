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

	// implemented a search feature for letter typed
	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
		// console.log("Persons data:", event.target.value.length);
		if (event.target.value.length === 0) {
			// if the input is empty then set the data back to it's default state
			setFilteredState(persons);
		} else {
			// filter the date
			const result = persons.filter((item, index) => {
				// console.log("items: ", item.name.toLowerCase());
				if (
					item.name
						.toLocaleLowerCase()
						.startsWith(event.target.value.toLowerCase())
				) {
					return item.name.toLowerCase().startsWith(event.target.value);
				}
				// console.log("The Filtered item", item.name.toLowerCase());
			});
			return setFilteredState(result);
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
