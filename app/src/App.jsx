import { useState, useEffect } from 'react'
import Input from './Input'
import WeatherSection from './WeatherSection';
import WeatherForecast from './WeatherForecast'
import Footer from './Footer'
import { FaSpinner } from "react-icons/fa";

import './scss/main.css'

function App() {
  

  const [api, setApi] = useState( {
    apiKey: "1874456ba81eccb853b6291488a6f9c8",
    location: ""
  })

  const [data, setData] = useState([]) // to store the API Data which is altered into a readable format
  const [isSubmitted, setIsSubmitted] = useState(false) // When true, the weatherSection will appear
  const [count, setCount] = useState(0) // to control the api hook
  const [isLoading, setIsLoading] = useState(false)
  const [forecastData, setForecastData] = useState([])
    
    
    useEffect(() => {
          

      // Api for live forecast
      

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${api.location}&appid=${api.apiKey}&units=metric`;
      
      fetch(apiUrl)    
      .then(res => res.json())
        .then(data => {
          setIsLoading(true)
          setData({
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
        })})
       


        // Api for 5 Day Forecast

        if (api.location) {

          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${api.location}&cnt=40&units=metric&appid=8d0c6e676623e24d5c95fb56a82973d4`)
          .then(res => res.json())
          .then(data => {
            const newForecastData = data.list.filter(item => item.dt_txt.includes('12:00:00'))
            setForecastData(newForecastData)
          })
          }


        setIsLoading(false) // Deactivates the loading animation
        
        
      }, [count])
      
      // const [metric, setMetric] = useState("celsius")
      // console.log(metric)
      const [isCelsius, setIsCelsius] = useState(true)
  
      
  return (
    <div className="App">
      <Input 
      setApi={setApi}
      setIsSubmitted={setIsSubmitted}
      setCount={setCount}
      />
      
      {!isLoading ? 
        <div className="loading">
          <FaSpinner className="spinner" size={70} />
        </div> : 
      isSubmitted ? 
        <div>
        <WeatherSection 
        data={data}
        setIsCelsius={setIsCelsius}
        isCelsius={isCelsius}
        />
        <WeatherForecast 
        data={forecastData} 
        isCelsius={isCelsius}
        />
        
        </div>
         : 
        ""}

      <Footer />
    </div>
  )
}

export default App
