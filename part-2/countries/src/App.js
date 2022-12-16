import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import UserInput from "./components/UserInput";
import Display from "./components/Display";

function App() {
	const [userInput, setUserInput] = useState("");
	const [baseData, setBaseData] = useState([]);
	const [FilterData, setFilterData] = useState([]);
	//
	const fetchCountries = async () => {
		const res = await axios.get("https://restcountries.com/v3.1/all");
		console.log(res.data);
		setBaseData(res.data);
		setFilterData(res.data);
	};
	fetchCountries();

	return (
		<>
			<UserInput
				userInput={userInput}
				setUserInput={setUserInput}
				baseData={baseData}
				FilterData={FilterData}
				setFilterData={setFilterData}
			/>
			<Display filteredData={FilterData} />
		</>
	);
}

export default App;
