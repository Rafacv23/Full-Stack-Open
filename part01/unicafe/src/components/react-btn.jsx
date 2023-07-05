import React from 'react';

const ReactBtn = (props) => {
    return (
        <button onClick={props.handleClick}> {props.name} </button>
    );
}

export default ReactBtn;
