import { useState } from 'react'
import WeatherInfo from './WeatherInfo';


export default function WeatherSection(props) {

    // const [isCelsius, setisCelsius] = useState(true)

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

    return (
        <div className="weather-data-section">

            <div className="weather-data-location">
                <h1 className="weather-data-location-title">{props.data.name}</h1>
                <p>{props.data.country}</p>
            </div>

            <div className="weather-data-temperature">
                <img className="weather-data-img" src={`https://openweathermap.org/img/wn/${props.data.icon}@4x.png`} alt="Weather-icon" />

                <div className="weather-data-right">
                    <div className="weather-data-unit-section">
                        <h2 className="weather-data-temperature-value">{Math.round(props.isCelsius ? props.data.celsius : convertCelsiusToFahrenheit(props.data.celsius))}</h2>
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