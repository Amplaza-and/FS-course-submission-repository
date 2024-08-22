const Form = (props) => {
  const {newName, setNewName, newNumber, setNewNumber,persons, setPersons} = props
  const personsNames = persons.map(person => person.name.toLowerCase())

  const handleChange = (func) => (event)=> {
    func(event.target.value)
    }
  const addName = (event) => {    
    event.preventDefault()
    const newPerson = {
        key: persons.length,  
        name: newName,
        number: newNumber
        }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')

    if (personsNames.includes(newName.toLowerCase())){
        return(
          alert(`${newName} is already added to phonebook`)
        )
      }
    }
      return (    
        <form onSubmit={addName}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleChange(setNewName)}
                />
         <p>        
          number: <input
                  value={newNumber}
                  onChange={handleChange(setNewNumber)}
                />
        </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
          )
    }

export default Form
