import React from "react";
import { useState, useEffect } from "react";
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

	// get request of all data on the server after the component loads
	useEffect(() => {
		getPersons();
	}, []);

	// get all persons from the server
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
	// examples of using useEffect hooks
	//1
	// useEffect(() => {
	// 	getPersons();
	// const fetchPersons = async () => {
	// 	const res = await axios.get("http://localhost:3001/persons");
	// 	setPersons(res.data);
	// 	setFilteredState(res.data);
	// };
	// fetchPersons();
	// }, []);
	//2
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
		// Ask the user if they really want to delete the resource
		if (window.confirm("Do you really want to delete?")) {
			PersonsController.destroy(id);
			getPersons();
		}
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
				updatePerson={updatePerson}
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
