import React from "react";
import StatisticLine from "./StatisticLine";
import "./Statistics.css";

const Statistics = ({ all, good, neutral, bad }) => {
	// console.log("good", good);
	// the if condition runs once all is 0, but when any param is 1, the if doesn't work anymore.
	if ((good || bad || neutral) === 0) {
		return <p>No feedback given </p>;
	}
	return (
		<>
			<table>
				<colgroup>
					<col className="col" span={2} />
				</colgroup>
				<StatisticLine text="good:" value={good} />
				<StatisticLine text="neutral:" value={neutral} />
				<StatisticLine text="bad:" value={bad} />
				<StatisticLine text="all:" value={all} />
				<StatisticLine text="average:" value={Math.round(all / 3) / 10} />
				<StatisticLine
					text="Positive:"
					value={Math.round((good + neutral) / 2) / 10}
				>
					%
				</StatisticLine>
			</table>
		</>
	);
};

export default Statistics;
