import { useState, useEffect } from 'react'
import weatherServices from '../services/weather'
import Weather from '../components/Weather'

const Country = (country) => {
    const {name, flag, capital, area, languages, weather, setWeather} = country
    const languagesArray= Object.values(languages)
    
    if(Object.keys(country).length >0){
      useEffect(() => {
        weatherServices.getWeather(capital).then((response) => {
          setWeather(response);
        });
      }, [capital]);
    }
    
    console.log('Weather',weather)
    if(Object.keys(weather).length >0){
      const icon= "https://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png"
      return (
      <div>
          <h2>{name} {flag}</h2>
          <p>Capital: {capital}</p>
          <p>Area: {area}</p>
          <p>Languages:</p>
          {languagesArray.map(c =><ul>* {c}</ul>)}
          <Weather capital={capital} temp = {weather.main.temp} wind={weather.wind.speed} icon={icon} />
      </div>    
      
    )}
    
    }

export default Country
