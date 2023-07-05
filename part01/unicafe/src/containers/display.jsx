import React from 'react';
import Text from '../components/text';

const Display = (props) => {
    return (
        <div>
            <Text text={"Good"} contador={props.contadorGood} ></Text>
            <Text text={"Neutral"} contador={props.contadorNeutral}></Text>
            <Text text={"Bad"} contador={props.contadorBad}></Text>
            <Text text={"All"} contador={props.contadorAll}></Text>
            <Text text={"Average"} contador={props.contadorAverage}></Text>
            <Text text={"Positive"} contador={props.contadorPositive}></Text>
        </div>
    );
}

export default Display;
