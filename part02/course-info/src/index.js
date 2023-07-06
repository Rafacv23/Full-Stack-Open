import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Course from "./containers/course";

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
					
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			},
			{
				name:"Testing exercise",
				exercises:12
			}
		]
}

	return (
		<div className="body">
			<Course name={course.name} course={course} courseTotal={course}></Course>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));