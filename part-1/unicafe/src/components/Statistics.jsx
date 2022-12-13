import React from "react";

const Statistics = (props) => {
	return (
		<div>
			<p>All Submissions: {props.all}</p>
			<p>Average: {props.all / 3}</p>
			<p>Positive: {(props.good + props.neutral) / 3}</p>
		</div>
	);
};

export default Statistics;
