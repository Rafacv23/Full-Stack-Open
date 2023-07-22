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

  const recoverCountry = () => {
      axios.get("https://restcountries.com/v2/all").then((response) => {
      console.log("Countries received from the server")
      setCountries(response.data)
  })
}

  useEffect (recoverCountry, [])

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
            <>
              <li key={country.name}> {country.name} </li> <ShowBtn handleClick={() => showInfo(country)} name={"Show"}></ShowBtn>
            </>
          ))}
        </ul>
      )}

      {filteredCountries.length === 1 && <CountryDetails country={filteredCountries[0]} ></CountryDetails>}
      {selectedCountry && <CountryDetails country={selectedCountry} />}

    </div>
  );
}

export default App;
