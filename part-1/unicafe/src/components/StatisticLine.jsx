import React from "react";

const StatisticLine = ({ text, value, children }) => {
	return (
		<>
			<tr>
				<td>{text}</td>
				<td>
					{value}
					{children}
				</td>
			</tr>
		</>
	);
};

export default StatisticLine;
