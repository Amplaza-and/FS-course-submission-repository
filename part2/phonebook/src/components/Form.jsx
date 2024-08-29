import personService from '../services/phone'

const Form = (props) => {
  const {newName, setNewName, newNumber, setNewNumber,persons, setPersons, setMessage} = props
  const personsNames = persons.map(person => person.name.toLowerCase())


  const handleChange = (func) => (event)=> {
    func(event.target.value)
    }
  const addName = (event) => {    
    event.preventDefault()
    const newPerson = {
        name: newName,
        number: newNumber,
        id: (persons.length +1).toString()
        }
    if (personsNames.includes(newName.toLowerCase())){
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with the new one?`)){
        personService
        .update(personsNames.indexOf(newName.toLowerCase())+1, newPerson ).then(updatedPerson=>{
          setNewName('')
          setNewNumber('')
          setPersons(persons.map((person) => person.name !== newPerson.name ? person : newPerson))
          setMessage({
            content: `The phone number of ${newPerson.name} has been updated`,
            status: "ok",
          })
          setTimeout(() => {
            setMessage({ content: null, status: "ok" });
          }, 5000)
        }) 
        .catch((error) => {
            setMessage({
              content: error.response.data.json,
              status: "ko",
          })
        })
      }
    }
    else{
      console.log('No coincide')
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setMessage({
            content: `Added ${newPerson.name}`,
            status: "ok",
          })
          setTimeout(() => {
            setMessage({ content: null, status: "ok" });
          }, 5000)
          })
          .catch((error) => {
            setMessage({
              content: error.response.data.json,
              status: "ko",
            })
           })
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
