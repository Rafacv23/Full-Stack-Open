import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
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
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newPerson} onChange={createPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}> {person.name} </div>
      ))}
    </div>
  )
}

export default App