

export default function WeatherForecast(props) {

    const forecastItems = props.data.map((item, index) => {
        return (
            <div className="weather-forecast-item" key={`item${index}`}>
                <img className="weather-forecast-img" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="Weather-icon" />
            </div>
        )
    })

    return (
        <div className="weather-forecast">
            {forecastItems}
        </div>
    )
}