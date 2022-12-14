import React from "react";

import "./Button.css";

const Button = (props) => {
	//
	const RandAnecdotesHandler = (props) => {
		const random = () => {
			const max = props.anecdotes.length;
			let rand = Math.floor(Math.random() * max);

			// keeps track of each random number generated
			props.setAnecdoteHistory(props.anecdoteHistory.concat(rand));
			console.log(props.anecdoteHistory);

			// sets the random number
			return props.setSelected(rand);
		};

		return random;
	};

	return (
		<div>
			<button className="btn" onClick={RandAnecdotesHandler(props)}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
