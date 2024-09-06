import axios from 'axios'

const baseUrl = 'http://api.openweathermap.org/'
const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY
const getGeo = (city) => {
  const request = axios.get(baseUrl+"geo/1.0/direct?q="+city+"&limit=1&appid=" +api_key)
  return request.then(response => response.data)
}

const getWeather = (capital) => {
  const request = axios.get(baseUrl + "data/2.5/weather?q="+capital+"&appid="+api_key)
  return request.then(response => response.data)
}

export default { 
    getGeo: getGeo, 
    getWeather: getWeather
  }