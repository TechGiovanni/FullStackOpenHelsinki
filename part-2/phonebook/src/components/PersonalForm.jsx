import React from "react";
import axios from "axios";
import PersonsController from "../controllers/PersonsController";

const PersonalForm = (props) => {
	// Add new Name Input
	const newNameHandler = (event) => {
		props.setNewName(event.target.value);
	};

	// Add new Phone Number Input
	const newNumberHandler = (event) => {
		props.setNewNumber(event.target.value);
	};

	// Add the new person from the form
	const addNewPersonHandler = (event) => {
		// event.preventDefault();
		let nameAlreadyInserted = false;

		// Verify user does not exist.
		props.persons.map((i) => {
			if (i.name === props.newName) {
				nameAlreadyInserted = true;
			}
			return nameAlreadyInserted;
		});

		//
		// Error handler - Sends alert message if user already exists.
		if (nameAlreadyInserted) {
			alert(`${props.newName} is already added to phonebook`);
			props.setNewName("");
		}

		//
		// Adds the new person
		if (!nameAlreadyInserted) {
			// event.preventDefault();
			const newPersonObject = {
				name: props.newName,
				number: props.newNumber,
			};
			PersonsController.create(newPersonObject).then((returnedPerson) => {
				props.setPersons(props.persons.concat(returnedPerson));
				props.setNewname("");
				props.setNewNumber("");
			});

			// axios
			// 	.post("http://localhost:3001/persons", newPersonObject)
			// 	.then((response) => {
			// 		props.setPersons(props.persons.concat(response.data));
			// 		props.setNewName("");
			// 		props.setNewNumber("");
			// 	});
		}
	};

	return (
		<>
			<form onSubmit={addNewPersonHandler}>
				<div>
					name: <input value={props.newName} onChange={newNameHandler} />
				</div>
				<div>
					number: <input value={props.newNumber} onChange={newNumberHandler} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
};

export default PersonalForm;
