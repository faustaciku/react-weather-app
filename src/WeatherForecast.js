import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
