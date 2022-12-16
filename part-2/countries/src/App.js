import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserInput from "./components/UserInput";
import Display from "./components/Display";

function App() {
	const [baseData, setBaseData] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [filteringData, setFilteringData] = useState([]);
	const [currentValue, setCurrentValue] = useState(1);
	//
	useEffect(() => {
		if (userInput) {
			const fetchCountries = async () => {
				const res = await axios.get(
					`https://restcountries.com/v3.1/name/${userInput}`
				);

				setBaseData(res.data);
				setFilteringData(res.data);
			};
			fetchCountries();
		}
	}, [userInput]);

	return (
		<>
			<UserInput
				userInput={userInput}
				setUserInput={setUserInput}
				baseData={baseData}
				filteringData={filteringData}
				setFilteringData={setFilteringData}
				setCurrentValue={setCurrentValue}
				currentValue={currentValue}
			/>

			{userInput.length === 0 && ""}
			{filteringData.length <= 11 && <Display filteringData={filteringData} />}
			{filteringData.length > 11 || userInput.length > 1 ? (
				<p>Too many matches, specify another filter</p>
			) : (
				<></>
			)}
		</>
	);
}

export default App;
