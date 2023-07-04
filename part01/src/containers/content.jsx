import React from 'react';
import Part from '../components/part';

const Content = ({course}) => {
            
        return (
            <div>
                {course.parts.map((part, index) => (
                    <Part key={index} text={part.name} exercises={part.exercises}></Part>
                ))}
            </div>
    );
}

export default Content;
