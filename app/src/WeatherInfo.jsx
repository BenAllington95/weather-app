import React from 'react';

function WeatherInfo(props) {

    console.log(props)


    function convertCelsiusToFahrenheit(celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        return Math.round(fahrenheit);
      }

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
    <p>Humidity: {props.data.humidity}%</p>
    <p>Feels Like: {tempConversion(props.isCelsius, props.data.feelsLike)}</p>
    <p>Min: {tempConversion(props.isCelsius, props.data.minTemp)}</p>
    <p>Max: {tempConversion(props.isCelsius, props.data.maxTemp)}</p>
    </div>
  );
}

export default WeatherInfo;
