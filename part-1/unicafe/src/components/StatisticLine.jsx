import React from "react";

const StatisticLine = ({ text, value, children }) => {
	// capitalized the text passed through props
	const toUpperCase = ({ text }) => {
		const capitalLetter = `${text[0].toUpperCase()}`;
		const restOfWord = `${text.substring(1, text.length)}`;
		return `${capitalLetter}${restOfWord}`;
	};
	return (
		<>
			<tbody>
				<tr>
					<td>{toUpperCase({ text })}</td>
					<td>
						{value}
						{children}
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default StatisticLine;
