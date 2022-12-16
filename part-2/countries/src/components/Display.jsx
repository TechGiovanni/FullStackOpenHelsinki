import React from "react";

const Display = ({ filteringData }) => {
	return (
		<ul>
			{filteringData.map((item) => {
				const displayCountry = (item) => {
					if (item.ccn3) {
						return (
							<li key={item.ccn3}>
								<h3> Country:</h3>
								<p>{item.name.official}</p>
								<h3>Capital:</h3>
								<p>{item.capital ? item.capital[0] : "Nothing Found"}</p>
								<h3>Continent:</h3>
								<p>{item.continent}</p>
								<h3>Population</h3>
								<p>People: {item.population}</p>
								<h3>Which side of the road people drive on? </h3>
								<p>{`They drive on the ${item.car.side} side`}</p>

								<img src={item.flags.png} />

								<p>
									-------------------------------------------------------------
								</p>
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
