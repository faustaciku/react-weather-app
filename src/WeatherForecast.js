import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "79b737840430cd52ad57c6addb70ce88";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day"> Mon</div>{" "}
          <WeatherIcon code="02n" size={40} /> <br />
          <span className="forecast-temperature-max">20°C</span>{" "}
          <span className="forecast-temperature-min">10°C</span>
        </div>
      </div>
    </div>
  );
}
