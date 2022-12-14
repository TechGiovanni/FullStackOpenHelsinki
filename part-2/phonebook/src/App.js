import React from "react";
import { useState } from "react";

const App = () => {
	const [newName, setNewName] = useState("");
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", id: 1 },
		{ name: "Johnson", id: 2 },
	]);

	// const man = {};

	const newNameHandler = (event) => {
		console.log("Connected to input");
		console.log("Input text:", event.target.value);
		setNewName(event.target.value);
	};

	const addNewPersonHandler = (event) => {
		event.preventDefault();
		//
		const newPersonObject = {
			name: newName,
			id: persons.length + 1,
		};
		//
		console.log("newperson", newPersonObject);
		setPersons(persons.concat(newPersonObject));
		setNewName("");
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
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((v) => {
				return <p key={v.id}>{v.name}</p>;
			})}
		</div>
	);
};

export default App;
