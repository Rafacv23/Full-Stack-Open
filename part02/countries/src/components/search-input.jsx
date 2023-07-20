import React from 'react';

const SearchInput = (props) => {
    return (
        <input type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}></input>
    );
}

export default SearchInput;
