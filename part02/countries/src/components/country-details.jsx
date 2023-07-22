import React from 'react';

const CountryDetails = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <img src={country.flags.svg} alt={country.name} style={{ maxWidth:"35rem"}} ></img>
            <p>Population: {country.population}</p>
            <p>Languages: {country.languages.map((language) => language.name).join(', ')}</p>
        </div>
    );
}

export default CountryDetails;
