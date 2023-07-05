import React from 'react';

const RandomBtn = (props) => {
    return (
        <button onClick={props.handleClick}> {props.name} </button>
    );
}

export default RandomBtn;
