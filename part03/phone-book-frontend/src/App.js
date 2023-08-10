import React, { useState, useEffect } from 'react'
import Header from './components/header'
import AddForm from './containers/add-form'
import ContactDisplay from './containers/contact-display'
import Input from './components/input'
import personService from "./services/personService"
import Notification from "./containers/notification"

const App = () => {
  const [ persons, setPersons ] = useState([{}]) 
  const [ newPerson, setNewPerson ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchPerson, setSearchPerson ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState('')
  const [ notification, setNotification ] = useState(false)

  useEffect (() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        console.log("Data added from json server")
  })}, [])

  const createPerson = (event) => {
    const person = event.target.value
    setNewPerson(convertString(person))
  }

  const createNumber = (event) => {
    const number = event.target.value
    setNewNumber(number)
  }

  const convertString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.find((person) => person.name === newPerson);
    const numberLength = newNumber.length === 9;
  
    if (personExists) {
      if (!numberLength) {
        alert("Error: Number length must be 9 characters.");
      } else {
        const updatedPerson = { ...personExists, number: newNumber };
        if(window.confirm("Are you sure you want to change the number of this person?"))
        personService.update(personExists.id, updatedPerson)
          .then(() => {
            setPersons(persons.map((person) => (person.id === personExists.id ? updatedPerson : person)));
            setNewPerson("");
            setNewNumber("");
            console.log("Person number updated in the database");
            setNotification(true)
            setTimeout(() => {
              setNotification(false)
            }, 5000)
          })
          .catch((error) => {
            console.warn("Error updating person number: " + error);
          });
      }
    } else {
      if (!numberLength) {
        alert("Error: Number length must be 9 characters.");
      } else {
        const person = { name: convertString(newPerson), number: newNumber };
        personService.create(person)
          .then((response) => {
            setPersons(persons.concat(response.data));
            setNewPerson("");
            setNewNumber("");
            setNotification(true)
            setTimeout(() => {
              setNotification(false)
            }, 5000)
            console.log("Person added to the database");
          });
      }
    }
  };

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

  const removePerson = (person) => {

    if(window.confirm("Are you sure you want to remove?"))
    personService
      .remove(person.id)
      .then(() => {
        setPersons(persons.filter((p) => p.id !== person.id))
        console.log("Person removed from the database")
      })

      .catch((error) => {
        console.warn("Error removing person: " + error)
      })
  }

  return (
    <div className='body'>
      <Header name={"Phonebook"}></Header>
        <AddForm onSubmit={addPerson} value={newPerson} onChange={createPerson} valueNumber={newNumber} onChangeNumber={createNumber}></AddForm>
        {notification ? <Notification className="notification-success" text="Success"></Notification> : null}
      <Header name={"Contacts"}></Header>
      <Input value={searchPerson} onChange={createSearchPerson} placeholder={"Search"}></Input>
      <ContactDisplay removePerson={removePerson} array={filteredPersons.length > 0 ? filteredPersons : persons}>
        {filteredPersons.length > 0
          ? filteredPersons.map((person) => <div key={person.id}>{person.name}</div>)
          : persons.map((person) => <div key={person.id}>{person.name}</div>)}
      </ContactDisplay>
    </div>
  )
}
export default App