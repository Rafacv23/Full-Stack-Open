import React, { useState } from 'react'
import Header from './components/header'
import AddForm from './containers/add-form'
import ContactDisplay from './containers/contact-display'
import Input from './components/input'

const App = () => {
  const [ persons, setPersons ] = useState([
    {  }
  ]) 
  const [ newPerson, setNewPerson ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchPerson, setSearchPerson ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState('')

  const createPerson = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const createNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const convertString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personExists = persons.some((person) => person.name === newPerson)
    const numberExists = persons.some((person) => person.number === newNumber)
    const numberLength = newNumber.length === 9

    if (personExists || numberExists) {
      alert("Error: Person or number already exists. Try with other data.");
    } else if (!numberLength) {
      alert("Error: Number length must be 9 characters.");
    } else {
      const person = {
        name: convertString(newPerson),
        id: persons.length + 1,
        number: newNumber
      };
      setPersons(persons.concat(person))
    }
  }

  const createSearchPerson = (event) => {
    const searchTerm = event.target.value
    const alterSearchTerm = convertString(searchTerm)
    setSearchPerson(alterSearchTerm)
    filterPerson(alterSearchTerm)
  }

  const filterPerson = (searchTerm) => {
    const filtered = persons.filter((person) => 
    person.name === searchTerm)
    setFilteredPersons(filtered);
  }

  return (
    <div className='body'>
      <Header name={"Phonebook"}></Header>
        <AddForm onSubmit={addPerson} value={newPerson} onChange={createPerson} valueNumber={newNumber} onChangeNumber={createNumber}></AddForm>
      <Header name={"Contacts"}></Header>
      <Input value={searchPerson} onChange={createSearchPerson} placeholder={"Search"}></Input>
      <ContactDisplay array={filteredPersons.length > 0 ? filteredPersons : persons}>
        {filteredPersons.length > 0
          ? filteredPersons.map((person) => <div key={person.id}>{person.name}</div>)
          : persons.map((person) => <div key={person.id}>{person.name}</div>)}
      </ContactDisplay>
    </div>
  )
}

export default App