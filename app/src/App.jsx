import { useState, useEffect } from 'react'
import Input from './Input'
import WeatherSection from './WeatherSection';
import WeatherForecast from './WeatherForecast'
import Footer from './Footer'
import DarkModeToggle from './DarkModeToggle'

import { FaComments, FaSpinner } from "react-icons/fa";

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
  const [isCelsius, setIsCelsius] = useState(true)
  const [localLocation, setLocalLocation] = useState([])
    
    
    useEffect(() => {          

      // Api for live forecast

      // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&appid=dfea117cc9a5511c53d8d6477a5a67ac`)
      //   .then(res => res.json())
      //     .then(data => console.log(data.name))


      const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${localLocation.latitude}&lon=${localLocation.longitude}&appid=dfea117cc9a5511c53d8d6477a5a67ac`
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${api.location}&appid=${api.apiKey}&units=metric`     
      
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

        
        
      }, [count, localLocation])

      

      function handleGeoSubmit() {
          navigator.geolocation.getCurrentPosition(position => setLocalLocation({
            longitude: `${position.coords.longitude}`,
            latitude: `${position.coords.latitude}`
          }))


        setCount(prevCount => prevCount + 1)
      }




  return (
    <div className="App">
      <Input 
      setApi={setApi}
      setIsSubmitted={setIsSubmitted}
      setCount={setCount}
      handleGeoSubmit={handleGeoSubmit}
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
        count={count}
        />
        <WeatherForecast 
        data={forecastData} 
        isCelsius={isCelsius}
        />
        
        </div>
         : 
        ""}

      <DarkModeToggle />
      <Footer />
    </div>
  )
}

export default App
