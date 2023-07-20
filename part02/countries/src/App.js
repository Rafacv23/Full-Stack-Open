import './App.css';
import React, { useState, useEffect } from 'react'
import SearchInput from './components/search-input';
import Title from './components/title';
import axios from 'axios'
import CountryList from './containers/country-list';
import Text from './components/text';

function App() {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

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

  return (
    <div className="App">
      <Title name={"Find Countries"} ></Title>
      <SearchInput type={"text"} onChange={search} value={searchedCountry} placeholder={"Type some country"}></SearchInput>
      <CountryList array={filteredCountries.length > 0 ? filteredCountries : []}>
        {filteredCountries.length === 0 ? (
          <Text name={"Please type any country to start the search"}></Text>
        ) : filteredCountries.length < 10 ? 
        <Text name={"Too many results, please be more specific"}></Text> : 
        ((
            filteredCountries.map((country) => (
            <div key={country.name}>{country.name}</div>
          ))
        )
        )}
      </CountryList>
    </div>
  );
}

export default App;
