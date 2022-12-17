import React from "react";
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

	// Adds the new person from the form
	const addNewPersonHandler = (event) => {
		event.preventDefault();
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
			if (
				window.confirm(
					`${props.newName} is already added to phonebook. Do you still want to update it?`
				)
			) {
				const person = props.persons.find((n) => n.name === props.newName);
				const id = person.id;

				props.updatePerson(id);
				props.setNewName("");
				props.setNewNumber("");
				props.getPersons();
			}
		}

		//
		// Adds the new person
		if (!nameAlreadyInserted) {
			const newPersonObject = {
				name: props.newName,
				number: props.newNumber,
			};
			PersonsController.create(newPersonObject).then((returnedPerson) => {
				props.setPersons(props.persons.concat(returnedPerson));
				props.setNewName("");
				props.setNewNumber("");
				props.getPersons();
			});
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
