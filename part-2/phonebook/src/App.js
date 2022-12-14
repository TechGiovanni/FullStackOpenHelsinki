import React from "react";
import { useState } from "react";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", id: 1, number: "123-456-7892" },
		{ name: "Johnson", id: 2, number: "333-236-5492" },
	]);

	const newNameHandler = (event) => {
		console.log("Connected to input");
		console.log("Input text:", event.target.value);
		setNewName(event.target.value);
	};

	const newNumberHandler = (event) => {
		setNewNumber(event.target.value);
	};

	const addNewPersonHandler = (event) => {
		event.preventDefault();
		let nameAlreadyInserted = false;
		//
		// validation checker
		persons.map((i) => {
			if (i.name === newName) {
				nameAlreadyInserted = true;
			}
			return nameAlreadyInserted;
		});
		// Error handler - Sends alert message
		if (nameAlreadyInserted) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
		}
		//
		// console.log("persons", persons);
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

	console.log("Person", persons);

	return (
		<div>
			<div>debug: {newName}</div>
			<h2>Phonebook</h2>
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
