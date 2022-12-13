import "./App.css";
import React, { useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, allClicks] = useState(0);

	const increaseGood = () => {
		allClicks(all + 1);
		setGood(good + 1);
	};
	const increaseNeutral = () => {
		allClicks(all + 1);
		setNeutral(neutral + 1);
	};
	const increaseBad = () => {
		allClicks(all + 1);
		setBad(bad + 1);
	};

	return (
		<>
			<h1>Give Feedback</h1>
			<button onClick={increaseGood}>Good</button>
			<button onClick={increaseNeutral}>Neutral</button>
			<button onClick={increaseBad}>Bad</button>

			<h2>Statistics</h2>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
		</>
	);
};

export default App;
