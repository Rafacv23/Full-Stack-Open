import React from 'react';
import Header from './header';
import Content from './content';
import Total from './total';

const Course = (props) => {
    return (
        <div>
            <Header name={props.name}></Header>
            <Content course={props.course}></Content>
            <Total course={props.courseTotal}></Total>
        </div>
    );
}

export default Course;
