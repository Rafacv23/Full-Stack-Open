import React from 'react';
import Part from '../components/part';

const Total = () => {
    
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
    const sumaExercises = exercises1 + exercises2 + exercises3
    const text = "Number of exercises: " + sumaExercises

    return (
        <Part text={text}></Part>
    );
}

export default Total;
