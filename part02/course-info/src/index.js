import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Course from "./containers/course";
import { courses } from "./components/course";

const App = () => {

	return (
		<div className="body">
			{courses.map((course, index) => (
				<Course
				key={index}
				name={course.name}
				course={course}
				courseTotal={course}
				/>
			))}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));