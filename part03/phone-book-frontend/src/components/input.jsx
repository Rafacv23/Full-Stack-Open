import React from 'react';

const Input = (props) => {
    return (
        <input value={props.value} onChange={props.onChange} placeholder={props.placeholder}></input>
    );
}

export default Input;
