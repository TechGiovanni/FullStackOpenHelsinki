import React from "react";

const Display = ({ filteringData }) => {
	return (
		<ul>
			{filteringData.map((item) => {
				const displayCountry = (item) => {
					if (item.ccn3) {
						return (
							<li key={item.ccn3}>
								<p>Name: {item.name.official}</p>
								<p>
									Capital: {item.capital ? item.capital[0] : "Nothing Found"}
								</p>
								<p>{item.continent}</p>
								<p>{`They drive on the: ${item.car.side}`}</p>
								{/* <p>
								<Image src={item.flags.png} />
							</p> */}
								<p></p>

								{/* Number of Countries: {item.length} */}

								{/* {item} */}
							</li>
						);
					}
				};

				return displayCountry(item);
			})}
		</ul>
	);
};

export default Display;
