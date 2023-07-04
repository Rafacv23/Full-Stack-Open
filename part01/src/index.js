import React from "react";
import ReactDOM from "react-dom";
import Header from "./containers/header";
import Content from "./containers/content";
import Total from "./containers/total";

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
			}
		]
}

	return (
		<div>
			<Header name={course.name}></Header>
			<Content course={course}></Content>
			<Total course={course}></Total>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));