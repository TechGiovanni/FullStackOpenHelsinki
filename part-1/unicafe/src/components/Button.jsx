import React from "react";
import "./Button.css";

const Button = ({ adjuster, children }) => {
	return (
		<div className="btn_wrapper">
			<button className="btn" onClick={adjuster}>
				{children}
			</button>
		</div>
	);
};

export default Button;
