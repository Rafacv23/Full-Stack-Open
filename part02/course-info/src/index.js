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

const course2 = {
	name: "Node.js",
	parts: [
		{
		name: "Routing",
		exercises: 3,
		},
		{
		name: "Middlewares",
		exercises: 7,
		},
	]
}

	return (
		<div className="body">
			<Course name={course.name} course={course} courseTotal={course}></Course>
			<Course name={course2.name} course={course2} courseTotal={course2}></Course>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));