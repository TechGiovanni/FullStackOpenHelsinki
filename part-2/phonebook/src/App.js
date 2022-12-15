import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";
import PersonalForm from "./components/PersonalForm";

const App = () => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [persons, setPersons] = useState([]);
	const [filterInput, setFilterInput] = useState("");
	const [filteredState, setFilteredState] = useState([]);
	const [currentValue, setCurrentValue] = useState(null);

	//
	// implemented a search feature for letter typed
	const setFilterInputHandler = (event) => {
		setFilterInput(event.target.value);
		// console.log("Persons data:", event.target.value.length);
		if (event.target.value !== "") {
			// filter the data
			const result = persons.filter((item, index) => {
				// console.log("items: ", item.name.toLowerCase());
				if (item.name.startsWith(event.target.value)) {
					// sets the currentValue of the length of letters that are present/matched
					setCurrentValue(event.target.value.length);
					// console.log("currentValue:", currentValue);
					console.log("currentValue:", currentValue);

					return item.name.startsWith(event.target.value);
				} else {
					// once the letters typed starts to not match anything anymore, this else gets triggered
					// this else statement, filters the input already typed
					// and returns a substring from 0 up until the letters doesn't match anymore
					// and return the total of matching letters and
					return item.name.startsWith(filterInput.substring(0, currentValue));
				}
				// console.log("The Filtered item", item.name.toLowerCase());
			});
			return setFilteredState(result);
		} else {
			// if the input is empty then set the data back to it's default state
			return setFilteredState(persons);
		}
	};

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
	console.log("rendered", persons.length, "person");
	console.log("After useEffect Persons Data", persons);
	console.log("filteredSate", filteredState);
	return (
		<div>
			<div>debug name: {newName}</div>
			<div>debug filter: {filterInput}</div>
			{/* Title  */}
			<h2>Phonebook</h2>
			{/* Filtering Data From User Input  */}
			<p>
				Filter shown with:{" "}
				<input
					placeholder="Search"
					value={filterInput}
					onChange={setFilterInputHandler}
				/>
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
			<Person filteredState={filteredState} />
		</div>
	);
};

export default App;
