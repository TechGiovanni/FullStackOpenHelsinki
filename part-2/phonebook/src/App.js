import React from "react";
import { useState } from "react";
// import Person from "./components/Person";
import PersonalForm from "./components/PersonalForm";

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
	const [showAll, setShowAll] = useState(true);

	const personToShow = showAll
		? persons
		: persons.filter((person) => {
				console.log(person.name);
				console.log("Filtered Input Letter: ", filterInput);
				return person.name === filterInput;
		  });
	//
	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
	};

	return (
		<div>
			<div>debug name: {newName}</div>
			<div>debug filter: {filterInput}</div>
			{/* Title  */}
			<h2>Phonebook</h2>
			{/* .. */}
			{/* Filtering Data From User Input  */}
			<p>
				Filter shown with:{" "}
				<input value={filterInput} onChange={setFilterInputHandler} />
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
			{personToShow.map((v) => {
				return (
					<p key={v.id}>
						{v.name} {v.number}
					</p>
				);
			})}
			{/* <Person personToShow={personToShow} /> */}
		</div>
	);
};

export default App;
