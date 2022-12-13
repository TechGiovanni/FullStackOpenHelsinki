import "./App.css";
import React, { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGood = () => {
		setGood(good + 1);
	};
	const increaseNeutral = () => {
		setNeutral(neutral + 1);
	};
	const increaseBad = () => {
		setBad(bad + 1);
	};

	return (
		<>
			<h1>Give Feedback</h1>
			<button onClick={increaseGood}>Good</button>
			<button onClick={increaseNeutral}>Neutral</button>
			<button onClick={increaseBad}>Bad</button>

			<h2>Statistics</h2>
			<p>Good {good}</p>
			<p>Neutral {neutral}</p>
			<p>Bad {bad}</p>
		</>
	);
};

export default App;
