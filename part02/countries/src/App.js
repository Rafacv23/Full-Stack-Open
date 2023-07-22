import './App.css';
import React, { useState, useEffect } from 'react'
import SearchInput from './components/search-input';
import Title from './components/title';
import axios from 'axios'
import CountryDetails from './components/country-details';
import ShowBtn from './components/show-btn';

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const [showWeather, setShowWeather] = useState(false)

  const recoverCountry = () => {
      axios.get("https://restcountries.com/v2/all").then((response) => {
      console.log("Countries received from the server")
      setCountries(response.data)
  })
}
    
    
    
  const getWeatherData = (capital, weather) => {
    const apiKey = "a3d7a050ee974e2706fc40a69d02a3c1";
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
      .then((response) => {
        console.log("Weather data recovered", response.data.current);
    setWeather(response.data.current);
    if (response.data.current) {
      setWeather(response.data.current);
    } else {
      setWeather(null);}
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeather(null)
      });
  };

  useEffect(() => {
    recoverCountry();
    getWeatherData();
  }, [])

  const search = (event) => {
    const result = event.target.value
    console.log(result)
    setSearchedCountry(result)
    filterCountry(result)
  }

  const filterCountry = (searchTerm) => {
    const filter = countries.filter((country) => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCountries(filter)
  }

  const showInfo = (country) => {
    setSelectedCountry(country)
    getWeatherData(country.capital)
    console.log("capital", country.capital)
  }

  const toggleWeatherInfo = (country) => {
    if (showWeather) {
      setShowWeather(false);
    } else {
      getWeatherData(country.capital);
      setShowWeather(true);
    }
    console.log("capital", country.capital);
  };

  const hideInfo = () => {
    setSelectedCountry(null)
    setShowWeather(false)
  }

  return (
    <div className="App">
      <Title name={"Find Countries"} ></Title>
      <SearchInput type={"text"} onChange={search} value={searchedCountry} placeholder={"Type some country"}></SearchInput>

      {filteredCountries.length === 0 && <p>No countries found.</p>}
      {filteredCountries.length > 10  && <p>Please enter a more specific query.</p>}

      {filteredCountries.length < 10 && filteredCountries.length > 1 && (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.name}>
              {country.name}{' '}
              {selectedCountry === country ? (
                <ShowBtn handleClick={hideInfo} name={'Hide'}></ShowBtn>
              ) : (
                <ShowBtn handleClick={() => showInfo(country)} name={'Show'}></ShowBtn>
              )}
            </li>
          ))}
        </ul>
      )}

      {filteredCountries.length === 1 && 
      <>
        <CountryDetails country={filteredCountries[0]} weather={weather}></CountryDetails> 
        {showWeather ? 
        ("") :
        (<ShowBtn name={"Weather info"} handleClick={()=> toggleWeatherInfo(filteredCountries[0])}></ShowBtn> )}
      </>}
      {selectedCountry && <CountryDetails country={selectedCountry} weather={weather} />}

    </div>
  );
}

export default App;
