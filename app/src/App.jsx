import React, { useState, useEffect } from 'react';
import Input from './Input';
import WeatherSection from './WeatherSection';
import WeatherForecast from './WeatherForecast';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';
import { FaSpinner } from "react-icons/fa";
import './scss/main.css';

function App() {
  const [api, setApi] = useState({
    apiKey: "1874456ba81eccb853b6291488a6f9c8",
    location: "",
  });
  const [data, setData] = useState(null); // Store current weather data
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]); // Store forecast data
  const [isCelsius, setIsCelsius] = useState(true);
  const [localLocation, setLocalLocation] = useState({latitude: null, longitude: null});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch current weather data
  useEffect(() => {
    if (isSubmitted) {
      setIsLoading(true);
      const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${api.apiKey}&units=metric${api.location ? `&q=${api.location}` : ''}${localLocation.latitude && localLocation.longitude ? `&lat=${localLocation.latitude}&lon=${localLocation.longitude}` : ''}`;

      fetch(currentWeatherURL)
        .then(response => response.json())
        .then(data => {
          setData(data);
          // Assuming setIsLoading(false) is called here could prematurely hide loading indicator before forecast data is fetched
        })
        .catch(error => {
          console.error('Error fetching current weather data:', error);
          setIsLoading(false); // Ensure loading state is reset even if there's an error
        });
    }
  }, [api.location, localLocation, isSubmitted, api.apiKey]);

  // Fetch forecast data
  useEffect(() => {
    if (isSubmitted) {
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${api.apiKey}&units=metric${api.location ? `&q=${api.location}` : ''}${localLocation.latitude && localLocation.longitude ? `&lat=${localLocation.latitude}&lon=${localLocation.longitude}` : ''}`;
  
      setIsLoading(true); // Set loading to true at the start of the fetch operation
  
      fetch(forecastURL)
        .then(response => response.json())
        .then(data => {
          // Filter the forecast data to include only entries with "12:00" in their dt_txt
          const middayForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
          setForecastData(middayForecasts);
          setIsLoading(false); // Hide the loading indicator after setting the state
        })
        .catch(error => {
          console.error('Error fetching forecast data:', error);
          setIsLoading(false); // Ensure loading state is reset even if there's an error
        });
    }
  }, [api.location, localLocation, isSubmitted, api.apiKey]);
  

  const handleGeoSubmit = () => {
    setIsSubmitted(false); // Reset submission state to trigger re-fetching when using geolocation
    navigator.geolocation.getCurrentPosition(position => {
      setLocalLocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
      setApi(prevApi => ({...prevApi, location: ''})); // Clear location to ensure geolocation is used
      setIsSubmitted(true);
    });
  };

  const appStyle = {
    background: !isDarkMode ? "#a7d1e9" : "#293b5f",
    transition: "background 0.3s",
  };

  return (
    <div className="App">
      <Input 
        setApi={setApi}
        setIsSubmitted={setIsSubmitted}
        handleGeoSubmit={handleGeoSubmit}
      />
      
      {isLoading ? (
        <div className="loading">
          <FaSpinner className="spinner" size={70} />
        </div>
      ) : (
        isSubmitted && data && (
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
        )
      )}

      <DarkModeToggle
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Footer />
    </div>
  );
}

export default App;
