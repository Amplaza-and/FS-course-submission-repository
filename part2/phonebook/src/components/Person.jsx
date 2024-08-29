const Person = ({person, deletePerson}) => {
      return (    
        <li>{person.name} {person.number}  
        <button id={person.id} onClick= {deletePerson} > delete </button>
        </li>
      )
    }

export default Person
