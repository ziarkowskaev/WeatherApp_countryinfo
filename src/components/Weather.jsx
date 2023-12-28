import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({country}) => {

    const [weather1, setWeather] = useState(null);
    const api_key = import.meta.env.VITE_API_WEATHER
  
    useEffect(() => {
      // skip if currency is not defined
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)
          .then(response => {
            setWeather(response.data)
          })
      
    }, [country])

    return (
        <div>
        <h2>Weather in {country.name.common}</h2>

        {(weather1) && (
            <div> 
                <p>temperature {weather1.main.temp} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${weather1.weather[0].icon}@2x.png`} alt= {weather1.weather[0].description}/>
                <p>wind {weather1.wind.speed} m/s</p>
            </div>
         )
        }
        </div>
    )

}


export default Weather;