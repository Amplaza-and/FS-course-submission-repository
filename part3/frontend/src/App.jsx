import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/phone'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState({ content: null, status: "ok" })
  
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, [message]);

  const deletePerson = (event) => {
    if (window.confirm("Are you sure you wish to delete this person?")) {
      console.log(event.target.id)
      personService.remove(event.target.id).then((response) => {
        setPersons(persons.filter(person => person.id !== event.target.id))})
        .catch((error) => {
          setMessage({
            content: error.response.data.json,
            status: "ko",
        })
      })
    }
  }
  
  const personsToShow = persons.filter(person => person.name.toLocaleLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification status={message.status} content={message.content} />
      <Filter value={newFilter} action= {setNewFilter} />  
      <h2>add a new</h2>
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage= {setMessage} />
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person id={person.id} person={person} deletePerson={deletePerson}/>)}
    </div>
  )
}

export default App