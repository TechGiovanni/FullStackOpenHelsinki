import React from "react";

const StatisticLine = ({ text, value }) => {
	return (
		<div>
			<p>
				{text} {value}
			</p>
		</div>
	);
};

export default StatisticLine;
