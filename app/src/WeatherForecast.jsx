

export default function WeatherForecast(props) {

    const forecastItems = props.data.map((item, index) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = new Date(item.dt_txt).getDay()
        const dayString = daysOfWeek[day]
        return (
            <div className="weather-forecast-item" key={`item${index}`}>
                <h3 className="weather-forecast-item-header">{dayString}</h3>
                <img className="weather-forecast-img" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt="Weather-icon" />
                <p>{Math.round(item.main.temp)}</p>
            </div>
        )
    })

    
    console.log(props.data[0].main.temp)
   


    return (
        <div className="weather-forecast">
            <div className="weather-forecast-items">
                {forecastItems}
            </div>
            
        </div>
    )
}