

export default function WeatherForecast(props) {

    function tempConversion(boolean, celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        const symbol = boolean ? '°C' : '°F'

        let value
        if (boolean) {
            value = celsius
        } else {
            value = fahrenheit
        }

        return `${Math.round(value)}${symbol}`
    }

    const forecastItems = props.data.map((item, index) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = new Date(item.dt_txt).getDay()
        const dayString = daysOfWeek[day]
        return (
            <div className="weather-forecast-item" key={`item${index}`}>
                <h3 className="weather-forecast-item-heading">{dayString.slice(0,3)}</h3>
                <img className="weather-forecast-img" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="Weather-icon" />
                <p className="weather-forecast-item-temperature">{tempConversion(props.isCelsius, item.main.temp)}</p>
            </div>
        )
    })
   


    return (
        <div className="weather-forecast">
            <div className="weather-forecast-heading-items">
                <ion-icon name="calendar-outline"></ion-icon>
                <h2 className="weather-forecast-heading">5-Day Forecast</h2>
            </div>
            <div className="weather-forecast-items">
                {forecastItems}
            </div>
            
        </div>
    )
}