import React from 'react';
import Part from '../components/part';

const Total = ({course}) => {
    
    const sumaExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
    const text = "Número de ejercicios: " + sumaExercises;

    return <Part text={text} />;
};

export default Total;
