import "./App.css";
import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

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
			<div className="App">
				<h1>Give Feedback</h1>
				<Button adjuster={increaseGood}>Good</Button>
				<Button adjuster={increaseNeutral}>Neutral</Button>
				<Button adjuster={increaseBad}>Bad</Button>
				<h2>Statistics</h2>
				<Statistics good={good} bad={bad} neutral={neutral} all={all} />
			</div>
		</>
	);
};

export default App;
