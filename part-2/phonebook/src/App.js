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

	// const validateName = (event) => {
	// 	event.preventDefault();
	// 	const map = persons.map((i) => {
	// 		if (i.name === newName) {
	// 			return alert(`${newName} is already added to phonebook`);
	// 		}
	// 	});
	// 	return map;
	// };

	const addNewPersonHandler = (event) => {
		event.preventDefault();
		//
		let nameAlreadyInserted = false;
		persons.map((i) => {
			if (i.name === newName) {
				nameAlreadyInserted = true;
			}
			return nameAlreadyInserted;
		});

		if (nameAlreadyInserted) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
		}
		//
		// console.log("persons", persons);
		if (!nameAlreadyInserted) {
			const newPersonObject = {
				name: newName,
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
