

export default function WeatherForecast(props) {

    const forecastItems = props.data.map((item, index) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = new Date(item.dt_txt).getDay()
        const dayString = daysOfWeek[day]
        return (
            <div className="weather-forecast-item" key={`item${index}`}>
                <h3 className="weather-forecast-item-header">{dayString.slice(0,3)}</h3>
                <img className="weather-forecast-img" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="Weather-icon" />
                <p>{Math.round(item.main.temp)}{props.isCelsius ? "°C" : "°F"}</p>
            </div>
        )
    })
   


    return (
        <div className="weather-forecast">
            <h2 className="weather-forecast-heading">5 Day Forecast</h2>
            <div className="weather-forecast-items">
                {forecastItems}
            </div>
            
        </div>
    )
}