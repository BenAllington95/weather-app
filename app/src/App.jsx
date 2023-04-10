import { useState, useEffect } from 'react'
import Input from './Input'
import WeatherSection from './WeatherSection'

import './scss/main.css'

function App() {
  

  const [api, setApi] = useState( {
    apiKey: "7fb07433f8df41309b4181720230604",
    location: ""
  })

  const [data, setData] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
    
    
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
      }, [isSubmitted]) 

      console.log(data)
      

  return (
    <div className="App">
      <Input 
      setApi={setApi}
      setIsSubmitted={setIsSubmitted}
      />
      <WeatherSection
      data={data}
      />
      
    </div>
  )
}

export default App
