const Weather = (props) => {
    const {capital, temp, wind, icon} = props
      return (
        <div>
        <div>
            <h3>Weather in {capital}</h3>
            <img src={icon} ></img>
            <p>Temp: {temp} degrees</p>
            <p>Wind: {wind} m/s</p>
        </div>    
        </div>    
        
      )
    }

export default Weather
