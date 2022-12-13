import "./App.css";
import React, { useState } from "react";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>Give Feedback</h1>
			<button>Good</button>
			<button>Neutral</button>
			<button>Bad</button>

			<h2>Statistics</h2>
			<p>Good {good}</p>
			<p>Neutral {neutral}</p>
			<p>Bad {bad}</p>
		</>
	);
};

export default App;
