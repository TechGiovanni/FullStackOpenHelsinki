import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";
import PersonalForm from "./components/PersonalForm";
import Filter from "./components/Filter";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [persons, setPersons] = useState([]);
	const [filterInput, setFilterInput] = useState("");
	const [filteredState, setFilteredState] = useState([]);
	const [currentValue, setCurrentValue] = useState(null);

	// useEffect(() => {
	// 	console.log("effect Start");
	// 	axios.get("http://localhost:3001/persons").then((response) => {
	// 		console.log("promise fulfilled - Data Arrived");
	// 		setPersons(response.data);
	// 	});
	// }, []);
	const hook = () => {
		console.log("effect Start");
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise fulfilled - Data Arrived");
			setPersons(response.data);
			setFilteredState(response.data);
		});
	};
	useEffect(hook, []);
	// console.log("rendered", persons.length, "person");
	// console.log("After useEffect Persons Data", persons);
	// console.log("filteredSate", filteredState);
	return (
		<div>
			<div>debug name: {newName}</div>
			<div>debug filter: {filterInput}</div>
			{/* Title  */}
			<h2>Phonebook</h2>
			{/* Filtering Data From User Input  */}
			<Filter
				filterInput={filterInput}
				setFilterInput={setFilterInput}
				currentValue={currentValue}
				setCurrentValue={setCurrentValue}
				setFilteredState={setFilteredState}
				persons={persons}
			/>
			{/* Add new People  */}
			<h3>Add new</h3>
			<PersonalForm
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				persons={persons}
				setPersons={setPersons}
			/>
			{/* Renders the People */}
			<h2>Numbers</h2>
			<Person filteredState={filteredState} />
		</div>
	);
};

export default App;
