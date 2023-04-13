import React from 'react';

function WeatherInfo(props) {

    console.log(props)

  return (
    <div>
    <p>Humidity: {props.data.humidity}%</p>
    <p>Feels Like: {props.data.feelsLike}°C</p>
    <p>Min Temperature: {props.data.minTemp}°C</p>
    <p>Max Temperature: {props.data.maxTemp}</p>
    </div>
  );
}

export default WeatherInfo;


// <p>Humidity: {humidity}%</p>
//<p>Feels Like: {feelsLike}°C</p>
//<p>Min Temperature: {minTemp}°C</p>
//<p>Max Temperature: {maxTemp}°C</p>
{/* <p>Wind Speed: {windSpeed} m/s</p> */}