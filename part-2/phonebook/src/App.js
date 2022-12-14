import React from "react";
import { useState } from "react";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filterInput, setFilterInput] = useState("");
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	// Add new Name Input
	const newNameHandler = (event) => {
		// console.log("Connected to input");
		// console.log("Input text:", event.target.value);
		setNewName(event.target.value);
	};

	// Add new Phone Number Input
	const newNumberHandler = (event) => {
		setNewNumber(event.target.value);
	};

	// Add the new person from the form
	const addNewPersonHandler = (event) => {
		event.preventDefault();
		let nameAlreadyInserted = false;
		// Verify user does not exist.
		persons.map((i) => {
			if (i.name === newName) {
				nameAlreadyInserted = true;
			}
			return nameAlreadyInserted;
		});
		// Error handler - Sends alert message if user already exists.
		if (nameAlreadyInserted) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
		}
		// Add the new person
		if (!nameAlreadyInserted) {
			const newPersonObject = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};
			// console.log("newperson", newPersonObject);
			setPersons(persons.concat(newPersonObject));
			setNewName("");
		}
	};
	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
	};

	return (
		<div>
			<div>debug name: {newName}</div>
			<div>debug filter: {filterInput}</div>
			{/* Title  */}
			<h2>Phonebook</h2>
			{/* Filter  */}
			<p>
				Filter shown with:{" "}
				<input value={filterInput} onChange={setFilterInputHandler} />
			</p>
			{/* Add new people  */}
			<h2>Add new</h2>
			<form onSubmit={addNewPersonHandler}>
				<div>
					name: <input value={newName} onChange={newNameHandler} />
				</div>
				<div>
					number: <input value={newNumber} onChange={newNumberHandler} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			{/* render People  */}
			<h2>Numbers</h2>
			{persons.map((v) => {
				return (
					<p key={v.id}>
						{v.name} {v.number}
					</p>
				);
			})}
		</div>
	);
};

export default App;
