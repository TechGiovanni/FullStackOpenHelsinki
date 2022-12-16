import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserInput from "./components/UserInput";
import Display from "./components/Display";

function App() {
	const [baseData, setBaseData] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [currentValue, setCurrentValue] = useState(1);
	const [FilteringData, setFilteringData] = useState([]);
	//
	useEffect(() => {
		const fetchCountries = async () => {
			const res = await axios.get("https://restcountries.com/v3.1/all");
			setBaseData(res.data);
			setFilteringData(res.data);
		};
		fetchCountries();
	}, []);
	// console.log("FilteringData", FilteringData);

	return (
		<>
			<UserInput
				userInput={userInput}
				setUserInput={setUserInput}
				baseData={baseData}
				FilteringData={FilteringData}
				setFilteringData={setFilteringData}
				currentValue={currentValue}
				setCurrentValue={setCurrentValue}
			/>
			<Display filteringData={FilteringData} />
		</>
	);
}

export default App;
