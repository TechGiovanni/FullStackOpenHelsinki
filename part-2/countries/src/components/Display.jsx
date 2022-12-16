import React from "react";
import "./Display.css";

const Display = ({ filteringData }) => {
	return (
		<ul>
			{filteringData.map((item) => {
				if (item.name === "Type a country") {
					return <></>;
				}
				const displayCountry = (item) => {
					if (item.ccn3) {
						return (
							<li key={item.ccn3}>
								<img src={item.flags.png} alt={item.name.official} />
								<p>
									<strong>Country: </strong>
									{item.name.official}
								</p>
								<p>
									<strong>Capital: </strong>
									{item.capital ? item.capital[0] : "Nothing Found"}
								</p>
								<p>
									<strong>Continent: </strong>
									{item.continents ? item.continents[0] : "Nothing Found"}
								</p>
								<p>
									<strong>Population: </strong>
									{item.population}
								</p>
								<h3>Which side of the road people drive on? </h3>
								<p>{`They drive on the ${item.car.side} side`}</p>

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
