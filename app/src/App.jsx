import React, { useState, useEffect } from 'react';
import Input from './Input';
import WeatherSection from './WeatherSection';
import WeatherForecast from './WeatherForecast';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';
import { FaComments, FaSpinner } from "react-icons/fa";
import './scss/main.css';

function App() {
  const [api, setApi] = useState({
    apiKey: "1874456ba81eccb853b6291488a6f9c8",
    location: "",
  });
  const [data, setData] = useState(null); // Store weather data
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [localLocation, setLocalLocation] = useState({latitude: null, longitude: null});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch weather data based on location name or coordinates
  useEffect(() => {
    if (isSubmitted) {
      const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${api.apiKey}&units=metric`;
      let url;

      if (api.location) {
        url = `${baseURL}&q=${api.location}`;
      } else if (localLocation.latitude && localLocation.longitude) {
        url = `${baseURL}&lat=${localLocation.latitude}&lon=${localLocation.longitude}`;
      }

      if (url) {
        setIsLoading(true);
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }
    }
  }, [api.location, localLocation, isSubmitted]);

  const handleGeoSubmit = () => {
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
    <div style={appStyle} className="App">
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
