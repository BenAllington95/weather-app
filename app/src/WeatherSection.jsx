export default function WeatherSection(props) {
    console.log(props)
    return (
        <div className="weather-data-section">
            <h1 className="weather-data-location">{props.data.name}</h1>
            <p>{props.data.country}</p>
        </div>
    )
}