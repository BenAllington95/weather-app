import { useState } from 'react'

export default function WeatherSection(props) {

    const [isCelsius, setisCelsius] = useState(true)

    function handleTemperature(e) {
        if (e.target.id === 'fahrenheit-id') {
            setisCelsius(false)
        } else if (e.target.id === 'celsius-id') {
            setisCelsius(true)
        }
    }

    const fahrenheitStyle = {
        color: !isCelsius ? "white" : "lightgray",
        transition: "color 0.2s"
    }

    const celsiusStyle = {
        color: isCelsius ? "white" : "lightgray",
        transition: "color 0.2s"
    }

    return (
        <div className="weather-data-section">

            <div className="weather-data-location">
                <h1 className="weather-data-location-title">{props.data.name}</h1>
                <p>{props.data.country}</p>
            </div>

            <div className="weather-data-temperature">
                <img className="weather-data-img" src={props.data.icon} />
                <h2>{Math.round(isCelsius ? props.data.celsius : props.data.fahrenheit)} <span style={celsiusStyle} onClick={handleTemperature} id="celsius-id">°C</span> | <span style={fahrenheitStyle} onClick={handleTemperature} id="fahrenheit-id">°F</span></h2>
            </div>


            
        </div>
    )
}