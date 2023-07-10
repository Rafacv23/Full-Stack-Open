import React, { useState } from 'react'
import Header from './components/header'
import AddForm from './containers/add-form'
import ContactDisplay from './containers/contact-display'

const App = () => {
  const [ persons, setPersons ] = useState([
    {  }
  ]) 
  const [ newPerson, setNewPerson ] = useState('')

  const createPerson = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newPerson,
      id: persons.length + 1,
    }
      setPersons(persons.concat(person))
    }

  return (
    <div className='body'>
      <Header name={"Phonebook"}></Header>
        <AddForm onSubmit={addPerson} value={newPerson} onChange={createPerson}></AddForm>
      <Header name={"Contacts"}></Header>
      <ContactDisplay array={persons}>
        {persons.map((person) => (
          <div key={person.id}>{person.name}</div>
        ))}
      </ContactDisplay>
    </div>
  )
}

export default App