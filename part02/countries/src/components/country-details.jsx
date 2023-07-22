import React from 'react';

const CountryDetails = ({country, weather}) => {
    console.log(weather)
    return (
        <div>
            <h2>{country.name}</h2>
            <img src={country.flags.svg} alt={country.name} style={{ maxWidth:"25rem"}} ></img>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Spoken Languages</h2>
            <ul>
                <li> {country.languages.map((language) => language.name).join(', ')}</li>
            </ul>
            {weather && (
        <>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature: {weather.temperature} ºC</p>
          <p>Wind speed: {weather.wind_speed} mph</p>
        </>
      )}
        </div>
    );
}

export default CountryDetails;
