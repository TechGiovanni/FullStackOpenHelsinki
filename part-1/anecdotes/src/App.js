import React from "react";
import { useState } from "react";
import Button from "./components/Button";

import "./App.css";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	];
	// const anecdotes = [
	// 	{
	// 		text: "If it hurts, do it more often.",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text: "Adding manpower to a late software project makes it later!",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text:
	// 			"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text:
	// 			"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text: "Premature optimization is the root of all evil.",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text:
	// 			"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	// 		vote: 0,
	// 	},
	// 	{
	// 		text:
	// 			"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	// 		vote: 0,
	// 	},
	// ];
	const [selected, setSelected] = useState(0);
	const [anecdoteHistory, setAnecdoteHistory] = useState([0]);

	return (
		<>
			<div className="wrapper">
				<div className="content">
					<div className="content__text">{anecdotes[selected]}</div>
					<div>
						{/* <Vote /> */}
						<Button
							anecdotes={anecdotes}
							selected={selected}
							setSelected={setSelected}
							setAnecdoteHistory={setAnecdoteHistory}
							anecdoteHistory={anecdoteHistory}
						>
							Next Anecdote
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
