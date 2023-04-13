import { useState, useEffect } from 'react'
import Input from './Input'
import WeatherSection from './WeatherSection'

import './scss/main.css'

function App() {
  

  const [api, setApi] = useState( {
    apiKey: "1874456ba81eccb853b6291488a6f9c8",
    location: "Manchester"
  })

  const [data, setData] = useState([]) // to store the API Data which is altered into a readable format
  const [isSubmitted, setIsSubmitted] = useState(false) // When true, the weatherSection will appear
  const [count, setCount] = useState(0) // to control the api hook
    
    
    useEffect(() => {
          
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${api.location}&appid=${api.apiKey}&units=metric`;
      
      fetch(apiUrl)    
      .then(res => res.json())
        .then(data => setData({
          name: data.name,
          country: data.sys.country,
          localTime: "",
          celsius: data.main.temp,
          fahrenheit: data.main.temp,
          weatherText: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          feelsLike: data.main.feels_like,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
        }))
      }, [count]) 
      
  return (
    <div className="App">
      <Input 
      setApi={setApi}
      setIsSubmitted={setIsSubmitted}
      setCount={setCount}
      />

      {isSubmitted &&
        <WeatherSection
        data={data}
        />
      }
      
    </div>
  )
}

export default App

// name: data.name,
//           country: "",
//           localTime: "",
//           celsius: data.main.temp,
//           fahrenheit: data.main.temp,
//           weatherText: data.weather[0].description,
//           icon: data.weather[0].icon,
