import { useState, useEffect } from 'react'
import Input from './Input'
import WeatherSection from './WeatherSection'

import './scss/main.css'

function App() {
  

  const [api, setApi] = useState( {
    apiKey: "7fb07433f8df41309b4181720230604",
    location: ""
  })

  const [data, setData] = useState([]) // to store the API Data which is altered into a readable format
  const [isSubmitted, setIsSubmitted] = useState(false) // When true, the weatherSection will appear
  const [count, setCount] = useState(0) // to control the api hook
    
    
    useEffect(() => {
          
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${api.apiKey}&q=${api.location}&aqi=no`;
      
      fetch(apiUrl)    
      .then(res => res.json())
        .then(data => setData({
          name: data.location.name,
          country: data.location.country,
          localTime: data.location.localtime,
          celsius: data.current.temp_c,
          fahrenheit: data.current.temp_f,
          weatherText: data.current.condition.text,
          icon: data.current.condition.icon,
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
