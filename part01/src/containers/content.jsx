import React from 'react';
import Part from '../components/part';

const Content = (part, exercise) => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14


    return (
        <div>
            <Part part={part1} exercise={exercises1}></Part>
            <Part part={part2} exercise={exercises2}></Part>
            <Part part={part3} exercise={exercises3}></Part>
        </div>
    );
}

export default Content;
