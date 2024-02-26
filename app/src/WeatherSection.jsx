import { useEffect, useState } from 'react'
import WeatherInfo from './WeatherInfo';
import FlagImg from './FlagImg'
import { FaComments, FaSpinner } from "react-icons/fa";

export default function WeatherSection(props) {
    // Convert Unix timestamp to a readable format
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const optionsDay = { weekday: 'long'}; // Option to display the day
        const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false }; // Option to display the time in 12-hour format with AM/PM
        
        const day = date.toLocaleDateString('en-US', optionsDay); // Get day as "Monday"
        const time = date.toLocaleTimeString('en-US', optionsTime); // Get time as "12:00 PM"
        
        return `${day}, ${time}`; // Combine day and time
    };
    

    const [flagUrl, setFlagUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function handleTemperature(e) {
        if (e.target.id === 'fahrenheit-id') {
            props.setIsCelsius(false)
            
        } else if (e.target.id === 'celsius-id') {
            props.setIsCelsius(true)
        }
    }

    const fahrenheitStyle = {
        color: !props.isCelsius ? "#171C24" : "#697384",
        transition: "color 0.2s"
    }

    const celsiusStyle = {
        color: props.isCelsius ? "#171C24" : "#697384",
        transition: "color 0.2s"
    }

    function convertCelsiusToFahrenheit(celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }

    useEffect(() => {
        setIsLoading(true); // Move setIsLoading(true) inside the fetch call to correctly represent loading state
        fetch(`https://restcountries.com/v3.1/alpha/${props.data.sys.country}?fields=flags`)
            .then(res => res.json())
            .then(data => {
                setFlagUrl(data.flags.png)
                setIsLoading(false); // Set loading to false once data is fetched
            })
            .catch(() => setIsLoading(false)); // Also set loading to false in case of an error
    }, [props.data.sys.country]); // Correct dependency to reflect country code changes

    return (
        <div className="weather-data-section">
            <div className="weather-data-location">
                <div className="weather-data-location-heading-container">
                <h1 className="weather-data-location-title">{props.data.name}</h1>  
                {isLoading ?
                    <FaSpinner className="spinner" size={20} />   
                    :
                    <FlagImg
                        flagUrl={flagUrl}
                        height="25px"
                        width="35px"
                        countryCode={props.data.country} 
                    />
                }
                </div>
            <p className="weather-data-time">{formatDate(props.data.dt)}</p> {/* Display the formatted date/time */}
            </div>

            <div className="weather-data-temperature">
                <img className="weather-data-img" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt="Weather-icon" />

                <div className="weather-data-right">
                    <div className="weather-data-unit-section">
                        <h2 className="weather-data-temperature-value">{Math.round(props.isCelsius ? props.data.main.temp : convertCelsiusToFahrenheit(props.data.main.temp))}</h2>
                        <span style={celsiusStyle} onClick={handleTemperature} id="celsius-id">°C</span>
                        <span style={fahrenheitStyle} onClick={handleTemperature} id="fahrenheit-id">°F</span>
                    </div>
                    <p className="weather-data-description">{props.data.weatherText}</p>
                </div>
            </div>
            <WeatherInfo 
                data={props.data}
                isCelsius={props.isCelsius}
            />
        </div>
    )
}
