import React from 'react';

function WeatherInfo(props) {

    console.log(props)

  return (
    <div className="weather-info-section">
    <p>Humidity: {props.data.humidity}%</p>
    <p>Feels Like: {props.data.feelsLike}°C</p>
    <p>Min: {props.data.minTemp}°C</p>
    <p>Max: {props.data.maxTemp}°C</p>
    </div>
  );
}

export default WeatherInfo;
