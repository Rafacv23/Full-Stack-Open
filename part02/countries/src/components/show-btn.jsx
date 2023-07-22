import React from 'react';

const ShowBtn = (props) => {
    return (
        <button onClick={props.handleClick}> {props.name} </button>
    );
}

export default ShowBtn;
