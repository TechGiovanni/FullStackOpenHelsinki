import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => {
	return (
		<div>
			{/* course 1  */}
			<Header course={props.course[0]} />
			<Content parts={props.course[0]} />
			<Total parts={props.course[0]} />
			{/* Course 2 */}
			<Header course={props.course[1]} />
			<Content parts={props.course[1]} />
			<Total parts={props.course[1]} />
		</div>
	);
};

export default Course;
