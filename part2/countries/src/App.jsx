import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Content from './components/Content'



const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState({name:'', capital:'Madrid', area:'', languages:[], flag:''})
  const [newFilter, setNewFilter] = useState('')
  const [weather, setWeather] = useState({})


  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.map(c=> c.name.common));
    });
  }, {country});
  
  const countriesToShow = countries.filter(c => c.toLocaleLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <Filter value={newFilter} action= {setNewFilter} />
      <Content country={country} 
               setCountry={setCountry} 
               setNewFilter={setNewFilter} 
               countriesToShow={countriesToShow} 
               weather={weather}
               setWeather={setWeather}
               />
    </div>
    
  )
}

export default App