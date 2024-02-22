import React from 'react';

function WeatherInfo(props) {

    // function convertCelsiusToFahrenheit(celsius) {
    //     const fahrenheit = (celsius * 9/5) + 32;
    //     return Math.round(fahrenheit);
    //   }

    console.log(props.data)
    console.log(props.data.temp_min)

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

  return (
    <div className="weather-info-section">
        <div className="weather-info-item">
            <p><ion-icon name="water-sharp"></ion-icon> Humidity</p>
            <h3>{props.data.main.humidity}%</h3>
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="thermometer-sharp"></ion-icon> Feels Like</p>
            <h3>{tempConversion(props.isCelsius, props.data.main.feels_like)}</h3>
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="trending-down-sharp"></ion-icon> Min</p>
            <h3>{tempConversion(props.isCelsius, props.data.main.temp_min)}</h3>
            
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="trending-up-sharp"></ion-icon> Max</p>
            <h3>{tempConversion(props.isCelsius, props.data.main.temp_max)}</h3>
          
        </div>
    </div>
  );
}

// <p>Feels Like {tempConversion(props.isCelsius, props.data.feelsLike)}</p>
// <p>Min {tempConversion(props.isCelsius, props.data.minTemp)}</p>
// <p>Max {tempConversion(props.isCelsius, props.data.maxTemp)}</p>

export default WeatherInfo;
