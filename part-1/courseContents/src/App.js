import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};
	// const parts = [part1, part2, part3];

	return (
		<div>
			<Header course={course} />
			<Content parts={course} />
			<Total parts={course} />
		</div>
	);
};

export default App;
