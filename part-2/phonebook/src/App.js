import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Person from "./components/Person";
import PersonalForm from "./components/PersonalForm";
import Filter from "./components/Filter";
import PersonsController from "./controllers/PersonsController";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [persons, setPersons] = useState([]);
	const [filterInput, setFilterInput] = useState("");
	const [filteredState, setFilteredState] = useState([]);
	const [currentValue, setCurrentValue] = useState(1);
	// first argument is a function to apply changes, whenever we call the forceUpdate
	// the second value is the initial value of my reducer
	// const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

	// get request
	useEffect(() => {
		// console.log("effect Start");
		getPersons();
		// const fetchPersons = async () => {
		// 	const res = await axios.get("http://localhost:3001/persons");
		// 	setPersons(res.data);
		// 	setFilteredState(res.data);
		// };
		// fetchPersons();
	}, []);

	function getPersons() {
		PersonsController.getAll()
			.then((initialPersons) => {
				setPersons(initialPersons);
				setFilteredState(initialPersons);
			})
			.catch((error) => {
				alert(`error, ${error}`);
			});
	}

	// const hook = () => {
	// 	console.log("effect Start");
	// 	axios.get("http://localhost:3001/persons").then((response) => {
	// 		console.log("promise fulfilled - Data Arrived");
	// 		setPersons(response.data);
	// 		setFilteredState(response.data);
	// 	});
	// };
	// useEffect(hook, []);
	const updatePerson = (id) => {
		//find the person
		const person = persons.find((n) => n.id === id);

		// retrieve the new content
		const changedPerson = {
			name: newName,
			number: newNumber,
		};

		PersonsController.update(id, changedPerson)
			.then((returnPerson) => {
				setPersons(
					persons.map((person) => (persons.id !== id ? person : returnPerson))
				);
				getPersons();
			})
			.catch((error) => {
				alert(`the person ${person.name} was already deleted, ${error}`);
				setPersons(persons.filter((n) => n.id !== id));
			});
	};

	const destroy = (id) => {
		// const person = persons.find((n) => n.id === id);
		PersonsController.destroy(id);
		getPersons();
	};

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
				filteredState={filteredState}
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
				getPersons={getPersons}
			/>
			{/* Renders the People */}
			<h2>Numbers</h2>
			<Person
				filteredState={filteredState}
				updatePerson={updatePerson}
				destroy={destroy}
			/>
		</div>
	);
};

export default App;
