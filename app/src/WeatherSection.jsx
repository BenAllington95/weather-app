import { useState } from 'react'

export default function WeatherSection(props) {

    const [temperature, setTemperature] = useState(props.data.celsius)

    function handleTemperature(e) {
        console.log(e)
    }

    console.log(props)
    return (
        <div className="weather-data-section">

            <div className="weather-data-location">
                <h1 className="weather-data-location-title">{props.data.name}</h1>
                <p>{props.data.country}</p>
            </div>

            <div className="weather-data-temperature">
                <img className="weather-data-img" src={props.data.icon} />
                <h2>{Math.round(temperature)} <span onClick={handleTemperature} id="celsius-id">°C</span> | <span id="fahrenheit-id">°C</span></h2>
            </div>


            
        </div>
    )
}