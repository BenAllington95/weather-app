import React from 'react';

function WeatherInfo(props) {

    // function convertCelsiusToFahrenheit(celsius) {
    //     const fahrenheit = (celsius * 9/5) + 32;
    //     return Math.round(fahrenheit);
    //   }

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
            <h3>{props.data.humidity}%</h3>
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="thermometer-sharp"></ion-icon> Feels Like</p>
            <h3>{tempConversion(props.isCelsius, props.data.feelsLike)}</h3>
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="trending-down-sharp"></ion-icon> Min</p>
            <h3>{tempConversion(props.isCelsius, props.data.minTemp)}</h3>
            
        </div>
        <div className="weather-info-item">
            <p><ion-icon name="trending-up-sharp"></ion-icon> Max</p>
            <h3>{tempConversion(props.isCelsius, props.data.maxTemp)}</h3>
          
        </div>
    </div>
  );
}

// <p>Feels Like {tempConversion(props.isCelsius, props.data.feelsLike)}</p>
// <p>Min {tempConversion(props.isCelsius, props.data.minTemp)}</p>
// <p>Max {tempConversion(props.isCelsius, props.data.maxTemp)}</p>

export default WeatherInfo;
