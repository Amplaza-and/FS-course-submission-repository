import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {
  const [persons, setPersons] = useState([
    { key: 0,
      name: 'Arto Hellas',
      number: ''
     }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  
  const personsToShow = persons.filter(person => person.name.toLocaleLowerCase().includes(newFilter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} action= {setNewFilter} />  
      <h2>add a new</h2>
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.key} person={person} />)}
    </div>
  )
}

export default App