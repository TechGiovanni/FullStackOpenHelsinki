import React from "react";

const PersonalForm = (props) => {
	// Add new Name Input
	const newNameHandler = (event) => {
		// console.log("Connected to input");
		// console.log("Input text:", event.target.value);
		props.setNewName(event.target.value);
	};

	// Add new Phone Number Input
	const newNumberHandler = (event) => {
		props.setNewNumber(event.target.value);
	};

	// Add the new person from the form
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
			alert(`${props.newName} is already added to phonebook`);
			props.setNewName("");
		}

		//
		// Adds the new person
		if (!nameAlreadyInserted) {
			const newPersonObject = {
				name: props.newName,
				number: props.newNumber,
				id: props.persons.length + 1,
			};

			// console.log("newperson", newPersonObject);
			props.setPersons(props.persons.concat(newPersonObject));
			props.setNewName("");
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
