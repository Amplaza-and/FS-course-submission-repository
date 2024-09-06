import { useState, useEffect } from 'react'
import Country from './Country'
import countryService from '../services/countries'



const Content = (props) => {
    const {country, setCountry, setNewFilter, countriesToShow, weather, setWeather} = props

    const handleChange = (func) => (event)=> {
      func(event.target.id)
      }
      
    if (countriesToShow.length == 1){
        useEffect(() => {
            countryService.getOne(countriesToShow[0]).then((response) => {
              setCountry(response);
            });
          }, []);
          
        const languagesArray= Object.values(country.languages)
      return (
            <Country name={country.name.common} flag={country.flag} capital={country.capital} area={country.area} languages={country.languages} weather={weather} setWeather={setWeather} />
      )}
    else if(countriesToShow.length > 10){
        return(
            <p>Too many matches, specify another filter</p>
        )}
    else{
      return(
        countriesToShow.map(c=> <div><ul>{c} <button id={c} onClick= {handleChange(setNewFilter)} > show </button></ul></div>)
    )}    
    }

export default Content
