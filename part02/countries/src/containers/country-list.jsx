import React from 'react';

const CountryList = ({array}) => {
    return (
        <div>
            {array.map((arrayObject) => (
                <p key={arrayObject.name}> {arrayObject.name} </p>
            ))}
        </div>
    );
}

export default CountryList;
