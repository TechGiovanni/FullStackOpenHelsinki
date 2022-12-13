import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ all, good, neutral, bad }) => {
	// const ifFeedback = (good, bad, neutral, all) => {
	// 	// console.log("good", good);
	// 	if ((good, bad, neutral) === 0) {
	// 		return <p>No feedback given </p>;
	// 	}
	// 	return (
	// 		<>
	// 			<p>Good: {good}</p>
	// 			<p>Neutral: {neutral}</p>
	// 			<p>Bad: {bad}</p>
	// 			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
	// 		</>
	// 	);
	// };

	return (
		<div>
			<div>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
			</div>

			{/* <p>All Submissions: {all}</p>
			<p>Average: {all / 3}</p>
			<p>Positive: {(good + neutral) / 3}</p> */}
		</div>
	);
};

export default Statistics;
