import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Wednesday 15:02",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="search-input"
            />
          </div>
          <div className="col-6">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
              id="search-button"
            />
          </div>
        </div>
        <h2 className="mt-3 mb-0">{weatherData.city}</h2>
        <div className="time">{weatherData.date}</div>
        <div id="temp">{Math.round(weatherData.temperature)} °C</div>
        <div id="description" className="weather-info text-capitalize">
          {weatherData.description}
        </div>
        <div id="humidity" className="weather-info">
          Humidity: {weatherData.humidity}%
        </div>
        <div id="wind" className="weather-info">
          Wind: {Math.round(weatherData.wind)} km/h
        </div>
      </div>
    );
  } else {
    const apiKey = "79b737840430cd52ad57c6addb70ce88";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
