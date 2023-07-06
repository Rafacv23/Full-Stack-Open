import React from 'react';

const VoteCounter = (props) => {
    return (
        <p> {props.value} {props.name} </p>
    );
}

export default VoteCounter;
