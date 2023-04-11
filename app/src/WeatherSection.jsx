export default function WeatherSection(props) {
    console.log(props)
    return (
        <div className="weather-data-section">

            <div className="weather-data-location">
                <h1 className="weather-data-location-title">{props.data.name}</h1>
                <p>{props.data.country}</p>
            </div>

            <div className="weather-data-temperature">
                <img className="weather-data-img" src={props.data.icon} />
                <h2>{Math.round(props.data.celsius)} °C | °F</h2>
            </div>


            
        </div>
    )
}